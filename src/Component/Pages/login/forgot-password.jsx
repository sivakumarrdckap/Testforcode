import React, {useState} from "react";
import axios from "axios";
import {VscLoading} from "react-icons/vsc";
import {useHistory,Link} from "react-router-dom";

export default function Forgot() {
    const [loading, setLoading] = useState(false);
    const [email, setEmail] = useState("");
    const [errMsg, seterrMsg] = useState("");
    const [succToastMsg, setSuccToastMsg] = useState("");
    const [errMsgtost, seterrMsgtost] = useState("");
    const formvalidation = (e) => {
        setEmail(e.target.value)
        seterrMsg("")
    }
    let history = useHistory();
    const forgotPassword = (e) => {
        e.preventDefault();
        let errorCount = 0;
        if(!email){
            seterrMsg("This is a required field.");
            errorCount+=1;
        }
        else if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)){
            seterrMsg("Please enter a valid email address (Ex: johndoe@domain.com).");
            errorCount+=1;
        }
        else if(errorCount == 0){
            setLoading(true);
            axios.put(process.env.REACT_APP_MAGENTO_URI +"customers/password", {
                email: email,
                template: "email_reset"
            })
            .then((res) => {
                if (res.status === 200) {
                    setLoading(false);
                    setSuccToastMsg(`If there is an account associated with ${email} you will receive an email with a link to reset your password.`)
                    setTimeout(() => {
                        seterrMsgtost("");
                        history.push("/account/login");
                    }, 8000);
                }  
            })
            .catch((err) => {
                setLoading(false) 
                if(err?.response?.status===404){
                    seterrMsgtost(`No such Email address associated with ${email}`)
                }else{
                    seterrMsgtost(err?.response?.data?.message? err.response.data.message : err.message)
                }
                setTimeout(() => {
                    seterrMsgtost("")
                }, 5000);
            });
            
        }
    };
    return (
        <div className="page-main account">
            <div className="cus-container">
                <h1>Forgot Your Password</h1>
                {errMsgtost ? <div className="popup_login_response"><i class="fas fa-exclamation-triangle"></i> {errMsgtost}</div> : null}
                {succToastMsg ? <div className="popup_login_response success"><i class="far fa-check-circle"></i> {succToastMsg}</div> : null}
                <div className="row">
                    <div className="col-12 col-sm-8 col-md-6 offset-sm-2 offset-md-3">
                        <div className="login-form form-content-wrapper">
                            <p className="note_msg">Please enter your email address below to receive a password reset link.</p>
                            <form className="form-content"   onSubmit={(e) => forgotPassword(e)}>
                                <fieldset className="login">
                                    <div className="email-field">
                                        <label for="email">
                                            <span>Email Address</span>
                                            <span className="required">*</span>
                                        </label>
                                        <input
                                            onChange={(e)=>formvalidation(e)}
                                            name="email"
                                            maxLength='255'
                                            type="email"
                                        />
                                        {errMsg ? <span className="error_msg">{errMsg}</span> : null}
                                    </div>
                                    <div className="form-action forgot_password">
                                        <button type="submit" className="btn-primary">
                                            {loading ? (
                                                <span className="loading">
                                                    <VscLoading />
                                                </span>
                                            ) : (
                                                "Reset My Password"
                                            )}
                                        </button>
                                    </div>
                                    <div className="go_back_wrapper">
                                        <Link to="/account/login">Go Back</Link>
                                    </div>
                                </fieldset>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
