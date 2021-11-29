import React, { useEffect, useState} from "react";
import ReactHtmlParser from "react-html-parser";
import Axios from "axios";
import Skeleton from "react-loading-skeleton";

export default function Footer() {
    const [email, setEmail] = useState("");
    const [footerdata, setfooterdata] = useState();
    const [emailError, setemailError] = useState({});
    const [progress, setprogress] = useState(false);
    const newsLetterform = (e) => {
        setEmail(e.target.value);
        setemailError({});
    };
    useEffect(() => {
        const checkIfClicked = (e) => {
            let current = e.target
            let idFinder = current.getAttribute("data-cdz-toggle")
            if(idFinder){
                current.classList.toggle("active");
                document.getElementById(idFinder.split("#")[1]).classList.toggle("active");
            }
        };
        document.addEventListener("click", checkIfClicked);
        return () => {
            document.removeEventListener("click", checkIfClicked);
        };
    }, []);
    useEffect(() => {
        Axios.post(process.env.REACT_APP_NODE_URL + "sync/getFooter")
            .then((res) => {
                if (res.data) {
                    let response = JSON.parse(res.data.footer);
                    setfooterdata(unescape(response.content));
                }
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);
    const submitSubscription = (e) => {
        e.preventDefault();
        if (!email) {
            setemailError({
                ...emailError,
                error: "This is a required field.",
            });
            return false;
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)) {
            setemailError({
                ...emailError,
                error: "Please enter a valid email address (Ex: johndoe@domain.com).",
            });
            return false;
        } else {
            setemailError({
                ...emailError,
                success: "Submitting...",
                error: "",
            });
            setprogress(true);
            Axios.post(
                "https://dev3.elementvape.com/rest/V1/newsletter/subscribe",
                { email }
            )
                .then((res) => {
                    if (res.data && res.data.success) {
                        setemailError({
                            ...emailError,
                            success: res.data.message,
                            error: "",
                        });
                        setprogress(false);
                        setTimeout(() => {
                            setemailError({});
                        }, 4000);
                        setEmail("");
                    } else {
                        setemailError({
                            ...emailError,
                            error: res.data.message.split(":")[1],
                            success: "",
                        });
                        setprogress(false);
                    }
                })
                .catch((err) => {
                    setemailError({
                        ...emailError,
                        success:
                            "Some thing went worng please try again later.",
                        error: "",
                    });
                    setprogress(false);
                    setTimeout(() => {
                        setemailError({});
                    }, 4000);
                    setEmail("");
                });
        }
    };
    return (
        <>
        {footerdata && 
            <footer className="footer_wrap">
            {footerdata && ReactHtmlParser(footerdata.replaceAll('{{config path="web/secure/base_url"}}' , "/").replaceAll("{{media url='" , "https://dev3.elementvape.com/pub/media/").replaceAll("'}}" , ""))}
            <div className="place_news_letter">
            <form>
                <div  className={`news_leeter_form ${
                        progress ? "processing" : ""
                    }`}>
                    <span className="preend_addon"><i class="far fa-envelope"></i></span>
                    <input
                        name="email"
                        type="email"
                        value={email}
                        id="newsletter"
                        placeholder="Enter your email address"
                        className="newsletter_input"
                        onChange={(e) =>
                            newsLetterform(e)
                        }
                    />
                    <button className="addon_submit" type="submit"
                        onClick={(e)=>submitSubscription(e)}>
                        <i class="fas fa-arrow-right"></i>
                    </button>
                </div>
                </form>
                {emailError && emailError.error && (
                    <div className="errormsg">
                        {
                            emailError.error
                        }
                    </div>
                )}
                {emailError && emailError.success && (
                    <div className="sucessmsg">
                        {
                            emailError.success
                        }
                    </div>
                )} 
            </div>
        </footer>}
        </>
    );
}
