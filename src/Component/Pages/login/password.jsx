import React, {useState } from "react";
import { VscLoading } from "react-icons/vsc";
import { useHistory, useLocation } from "react-router-dom";
import axios from "axios";

export default function Password() {
    let location = useLocation();
    let history = useHistory();
    let token = new URLSearchParams(location.search);
    token = token.get("token");
    const [loading, setLoading] = useState(false);
    const [passwords, setpasswords] = useState({});
    const [errMsg, seterrMsg] = useState({});
    const [succToastMsg, setSuccToastMsg] = useState("");
    const [errMsgtost, seterrMsgtost] = useState("");
    const [passwordstenght, setpasswordstenght] = useState({"strength":"", "color":""});
    
    const formvalidation = (e) => {
        let strongPassword = new RegExp('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{8,})')
        let mediumPassword = new RegExp('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{6,})')
        setpasswords((passwords) => ({ ...passwords, [e.target.name]: e.target.value }));
        seterrMsg({...errMsg , [e.target.name] : ''});
        if(e.target.name == "password" && e.target.value){
            if(strongPassword.test(e.target.value)){
                setpasswordstenght({"strength":"Strong Password", "color":"green-text"});
            }
            else if(mediumPassword.test(e.target.value)){
                setpasswordstenght({"strength":"Medium Password", "color":"blue-text"});
            }
            else{
                setpasswordstenght({"strength":"Weak Password", "color":"red-text"}); 
            }
        }
        else{
            setpasswordstenght({"strength":"", "color":""});
        }
    }
    // Create Password API
    const createPassword = (e) => {
        e.preventDefault();
        let errorCount = 0;
        if(!passwords.password){
            seterrMsg((passwords) => ({
                ...passwords,
                ["password"]: "This is a required field."
            }));
            errorCount+=1;
        }
        else if(passwords.password && passwords.password.length < 6){
            seterrMsg((passwords) => ({
                ...passwords,
                ["password"]: "Minimum length of this field must be equal or greater than 6 symbols. Leading and trailing spaces will be ignored."
            }));
            errorCount+=1; 
        }
        if(!passwords.confirmPassword){
            seterrMsg((passwords) => ({
                ...passwords,
                ["confirmPassword"]: "This is a required field."
            }));
            errorCount+=1;
        }
        if(passwords.confirmPassword && passwords.password != passwords.confirmPassword){
            seterrMsg((passwords) => ({
                ...passwords,
                ["confirmPassword"]: "Please enter the same value again."
            }));
            errorCount+=1;
        }
        else if(errorCount == 0){
            setLoading(true);
            console.log(token)
            axios.post(process.env.REACT_APP_MAGENTO_URI+"customers/resetPassword/", {
                email: "",
                resetToken: token,
                newPassword: passwords.password,
            })
            .then((res) => {
                setLoading(false);
                setSuccToastMsg("Password Updated Successfully")
                setTimeout(() => {
                    setSuccToastMsg("");
                    //history.push("/account/login");
                }, 6000);
            })
            .catch((err) => {
                setLoading(false);
                seterrMsgtost(err?.response?.data?.message? err.response.data.message : err.message)
                setTimeout(() => {
                    seterrMsgtost("");
                }, 6000);
            });
        }
    };
    return (
        <div className="page-main account">
            <div className="cus-container">
                <h1>Set a New Password</h1>
                {errMsgtost ? <div className="popup_login_response"><i class="fas fa-exclamation-triangle"></i> {errMsgtost}</div> : null}
                {succToastMsg ? <div className="popup_login_response success"><i class="far fa-check-circle"></i> {succToastMsg}</div> : null}
                <div className="row">
                    <div className="col-12 col-sm-8 col-md-6 offset-sm-2 offset-md-3">
                        <div className="login-form form-content-wrapper">
                            <form className="form-content"   onSubmit={(e) => createPassword(e)}>
                                <fieldset className="login">
                                    <div className="email-field">
                                        <label for="password">
                                            <span>New Password</span>
                                            <span className="required">*</span>
                                        </label>
                                        <input
                                            onChange={(e)=>formvalidation(e)}
                                            name="password"
                                            maxLength='20'
                                            id="password"
                                            type="password"
                                            value={passwords.password || ""}
                                        />
                                        {errMsg&&errMsg.password ? <span className="error_msg">{errMsg.password}</span> : null}
                                        {passwordstenght ? <span className={`strength_indicator  ${passwordstenght.color}`}>{passwordstenght.strength}</span> : null}
                                    </div>
                                    <div className="email-field">
                                        <label for="confirm_password">
                                            <span>Confirm New Password</span>
                                            <span className="required">*</span>
                                        </label>
                                        <input
                                            onChange={(e)=>formvalidation(e)}
                                            name="confirmPassword"
                                            maxLength='20'
                                            id="confirm_password"
                                            type="password"
                                            value={passwords.confirmPassword || ""}
                                        />
                                        {errMsg&&errMsg.confirmPassword ? <span className="error_msg">{errMsg.confirmPassword}</span> : null}
                                    </div>
                                    <div className="form-action forgot_password">
                                        <button type="submit" className="btn-primary">
                                            {loading ? (
                                                <span className="loading">
                                                    <VscLoading />
                                                </span>
                                            ) : (
                                                "Set a New Password"
                                            )}
                                        </button>
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
