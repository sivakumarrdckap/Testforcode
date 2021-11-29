import React, { useState } from "react";
import axios from "axios";
import { useHistory , Link} from "react-router-dom";
import {
    update_customer_token,
    update_customer_email,
} from "../../../../redux/actions";
import { VscLoading } from "react-icons/vsc";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

export default function Loginform({loginPopup , seterrMsgtost}) {
    const customer_token = useSelector((state) => state.customer_token);
    const customer_details = useSelector((state) => state.customer_details);
    let dispatch = useDispatch();
    const history = useHistory();
    const [body, setBody] = useState({});
    const [fielderror, setfielderror] = useState({});
    const [loading, setLoading] = useState(false);
    const updateData = ({ target }) => {
        setBody((body) => ({ ...body, [target.name]: target.value }));
        setfielderror({...fielderror , [target.name] : ''});
    };
    useEffect(() => {
        customer_token && customer_details && history.push("/account");
    }, []);
    const loginuser = (e) => {
        e.preventDefault();
        let errorCount = 0;
        if(!body.username){
            setfielderror((fielderror) => ({
                ...fielderror,
                ["username"]: "This is a required field."
            }));
            errorCount+=1;
        }
        else if(body.username && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(body.username)) {
            setfielderror((fielderror) => ({
                ...fielderror,
                ["username"]: "Please enter a valid email address (Ex: johndoe@domain.com)."
            }));
            errorCount+=1;
        } 
        if (!body.password) {
            setfielderror((fielderror) => ({
                ...fielderror,
                ["password"]: "This is a required field."
            }));
            errorCount+=1;
        } 
        else if(errorCount === 0){
            setLoading(true);
            axios.post(
                process.env.REACT_APP_MAGENTO_URI +
                    "integration/customer/token",
                body
            )
            .then((res) => {
                if (res.status === 200) {
                    setLoading(false)
                    dispatch(update_customer_email(body.username));
                    dispatch(update_customer_token(res.data));
                    history.push("/account");
                }
            })
            .catch((err) =>{
                setLoading(false)
                if (err?.response?.data?.message === "No such entity with %fieldName = %fieldValue, %field2Name = %field2Value") {
                    seterrMsgtost(`No such Email address aasociated with ${body.username}`);
                } else if(err?.response?.data?.message === "The account sign-in was incorrect or your account is disabled temporarily. Please wait and try again later."){
                    seterrMsgtost("The account sign-in was incorrect. Please check your password.");
                }
                setTimeout(() => {
                    seterrMsgtost("");
                }, 5000);
            });
        }
    };
    return (
        <div className="login-form form-content-wrapper">
            <div className="block-title">
                <h5>{!loginPopup ? 'SIGN IN' : 'CHECKOUT USING YOUR ACCOUNT' }</h5>
            </div>
            <form action="" className="form-content">
                <fieldset className="login">
                    <div className={!loginPopup ? "email-field" : "loginPopup-left-email"}>
                        <label for="email">
                            <span>Email Address</span>
                            <span className="required">*</span>
                        </label>
                        <input
                            onChange={updateData}
                            name="username"
                            type="email"
                        />
                        {fielderror&&fielderror.username ? <span className="error_msg">{fielderror.username}</span> : null}
                    </div>
                    <div className={!loginPopup ? "password-field" : "loginPopup-left-password"}>
                        <label for="password">
                            <span>password</span>
                            <span className="required">*</span>
                        </label>
                        <input
                            onChange={updateData}
                            name="password"
                            type="password"
                        />
                         {fielderror&&fielderror.password ? <span className="error_msg">{fielderror.password}</span> : null}
                    </div>
                    <div className={!loginPopup ? null : 'loginPopup-left-action-block'}>
                    <div className="rememberme">
                        {
                            !loginPopup ? (
                                <div className="keep-login">
                                    <input type="checkbox" />
                                    <label>Keep me logged in</label>
                                </div>
                            ):null
                        }
                        <div className={!loginPopup ? "forgot-pass" : 'loginPopup-left-action-block-left'}>
                            <Link to={"/account/forgotpassword"}>
                                Forgot Your Password?
                            </Link>
                        </div>
                    </div>
                    {
                        !loginPopup ? (
                            <div className="what-is-this-tooltip">
                                <a href="#">What is this?</a>
                                <span className="tooltip-content">
                                    When you check this, you will not be automatically
                                    logged out for longer period.
                                </span>
                            </div>
                        ):null
                    }
                    <div className="form-action">
                        <button onClick={loginuser} className={!loginPopup ? "btn-primary" : 'loginPopup-left-action-block-right'}>
                            {loading ? (
                                <span className="loading">
                                    <VscLoading />
                                </span>
                            ) : (
                                "sign in"
                            )}
                        </button>
                    </div>
                    </div>
                </fieldset>
            </form>
        </div>
    );
}
