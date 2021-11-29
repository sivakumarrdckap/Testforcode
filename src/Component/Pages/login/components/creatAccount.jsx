import React, { useState } from "react";
import axios from "axios";
import { BsHeartFill } from "react-icons/bs";
import { GrDiamond } from "react-icons/gr";
import { FaTruck } from "react-icons/fa";
import { VscLoading } from "react-icons/vsc";

export default function Creataccountform({seterrMsgtost , setSuccToastMsg}) {
    const [formData, setFormData] = useState({});
    const [errMsg, seterrMsg] = useState({});
    const [loading, setLoading] = useState(false);
    const [passwordstenght, setpasswordstenght] = useState({"strength":"", "color":""});
    const [isAgree, setIsAgree] = useState(false);
    const [isCertify, setIsCertify] = useState(false);
    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth()+1;
    var yyyy = today.getFullYear() - 21;
    if(dd<10){
            dd='0'+dd
        } 
        if(mm<10){
            mm='0'+mm
        }
    today = yyyy+'-'+mm+'-'+dd;
    const formvalidation = (e) => {
        if(e.target.name === "termsCondition"){
            setIsAgree(!isAgree) 
        }
        else if(e.target.name === "ageVerification"){
            setIsCertify(!isCertify)  
        }
        let strongPassword = new RegExp('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{8,})');
        let mediumPassword = new RegExp('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{6,})');
        setFormData((formData) => ({ ...formData, [e.target.name]: e.target.value }));
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
    };
    const signUp = (e) => {
        e.preventDefault();
        let errorCount = 0;
        if(!formData.firstname){
            seterrMsg((errMsg) => ({
                ...errMsg,
                ["firstname"]: "This is a required field."
            }));
            errorCount+=1;
        }
        if(!formData.lastname){
            seterrMsg((errMsg) => ({
                ...errMsg,
                ["lastname"]: "This is a required field."
            }));
            errorCount+=1;
        }
        if(!formData.email){
            seterrMsg((errMsg) => ({
                ...errMsg,
                ["email"]: "This is a required field."
            }));
            errorCount+=1;
        }
        else if(formData.email && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(formData.email)) {
            seterrMsg((errMsg) => ({
                ...errMsg,
                ["email"]: "Please enter a valid email address (Ex: johndoe@domain.com)."
            }));
            errorCount+=1;
        } 
        if (!formData.password) {
            seterrMsg((errMsg) => ({
                ...errMsg,
                ["password"]: "This is a required field."
            }));
            errorCount+=1;
        }
        else if(formData.password && formData.password.length < 6){
            seterrMsg((formData) => ({
                ...formData,
                ["password"]: "Minimum length of this field must be equal or greater than 6 symbols. Leading and trailing spaces will be ignored."
            }));
            errorCount+=1; 
        }
        if(!formData.confirmPassword){
            seterrMsg((formData) => ({
                ...formData,
                ["confirmPassword"]: "This is a required field."
            }));
            errorCount+=1;
        }
        if(!formData.dob){
            seterrMsg((formData) => ({
                ...formData,
                ["dob"]: "This is a required field."
            }));
            errorCount+=1;
        }
        if(formData.confirmPassword && formData.password != formData.confirmPassword){
            seterrMsg((formData) => ({
                ...formData,
                ["confirmPassword"]: "Please enter the same value again."
            }));
            errorCount+=1;
        }
        if(!isAgree){
            seterrMsg((formData) => ({
                ...formData,
                ["termsCondition"]: "This is a required field."
            }));
            errorCount+=1;
        }
        if(!isCertify){
            seterrMsg((formData) => ({
                ...formData,
                ["ageVerification"]: "This is a required field."
            }));
            errorCount+=1;
        }
        else if(errorCount === 0){
            let requestData = {
                "customer": {
                    "email": formData.email,
                    "firstname": formData.firstname,
                    "lastname": formData.lastname,
                    "dob":formData.dob
                },
                "password": formData.password
            }
            setLoading(true);
            console.log({formData})
            axios.post(
                process.env.REACT_APP_MAGENTO_URI +"customers",requestData,{
                headers: {
                    "Content-Type": "application/json",
                }
            })
            .then((res) => {
                console.log("Account created successfully")
                if (res.status === 200) {
                    setLoading(false)
                    setSuccToastMsg("Account created successfully");
                    setpasswordstenght({"strength":"", "color":""})
                    setIsAgree(false)
                    setIsCertify(false)
                    seterrMsg({})
                    setFormData({})
                    setTimeout(() => {
                        setSuccToastMsg("");
                    }, 5000);
                }
            })
            .catch((err) =>{
                setLoading(false)
                if(err?.response?.data?.message === "A customer with the same email address already exists in an associated website."){
                    seterrMsg((errMsg) => ({
                        ...errMsg,
                        ["email"]: err?.response?.data?.message
                    }));
                }
                else{
                    seterrMsgtost(err?.response?.data?.message? err.response.data.message : err.message);
                    setTimeout(() => {
                        seterrMsgtost("");
                    }, 5000);
                }
            });
           
        }
    };
    return (
        <>
        <div className="create-account-form form-content-wrapper">
            <div className="block-title">
                <h5>CREATE ACCOUNT</h5>
            </div>
            <div className="account-features">
                <div className="feature-container">
                    <p className="icon">
                        <BsHeartFill />
                    </p>
                    <p>Save your favorites</p>
                </div>
                <div className="feature-container">
                    <p className="icon">
                        <GrDiamond />
                    </p>
                    <p>Learn about EV Rewards</p>
                </div>
                <div className="feature-container">
                    <p className="icon">
                        <FaTruck />
                    </p>
                    <p>Easily track orders</p>
                </div>
            </div>
            <form className="form-content" onSubmit={(e) => signUp(e)}>
                <fieldset className="login">
                    <div className="name-field">
                        <label for="text">
                            <span>First Name</span>
                            <span className="required">*</span>
                        </label>
                        <input type="text" onChange={(e)=>formvalidation(e)} name="firstname" value={formData.firstname || ""} maxLength="20" />
                        {errMsg&&errMsg.firstname ? <span className="error_msg">{errMsg.firstname}</span> : null}
                    </div>
                    <div className="last-name-field">
                        <label for="text">
                            <span>Last Name</span>
                            <span className="required">*</span>
                        </label>
                        <input type="text" onChange={(e)=>formvalidation(e)} name="lastname" value={formData.lastname || ""} maxLength="20" />
                        {errMsg&&errMsg.lastname ? <span className="error_msg">{errMsg.lastname}</span> : null}
                    </div>
                    <div className="create-email-field">
                        <label for="email">
                            <span>Email Address</span>
                            <span className="required">*</span>
                        </label>
                        <input type="email" onChange={(e)=>formvalidation(e)} name="email" value={formData.email || ""} maxLength="20" />
                        {errMsg&&errMsg.email ? <span className="error_msg">{errMsg.email}</span> : null}
                    </div>
                    <div className="create-password-field">
                        <label for="password">
                            <span>Create Password</span>
                            <span className="required">*</span>
                        </label>
                        <input type="password" onChange={(e)=>formvalidation(e)} name="password" value={formData.password || ""} maxLength="20" />
                        {errMsg&&errMsg.password ? <span className="error_msg">{errMsg.password}</span> : null}
                    </div>
                    {passwordstenght ? <span className={`strength_indicator  ${passwordstenght.color}`}>{passwordstenght.strength}</span> : null}
                    <div className="create-password-field">
                        <label for="password">
                            <span>Confirm Password</span>
                            <span className="required">*</span>
                        </label>
                        <input type="password" onChange={(e)=>formvalidation(e)} name="confirmPassword" value={formData.confirmPassword || ""} maxLength="20" />
                        {errMsg&&errMsg.confirmPassword ? <span className="error_msg">{errMsg.confirmPassword}</span> : null}
                    </div>
                    <div className="create-password-field date_picker">
                        <label for="dob">
                            <span>Date of Birth</span>
                            <span className="required">*</span>
                        </label>
                        <input type="date" className={formData&&formData.dob ? "balck_input" : null} id="dob" onChange={(e)=>formvalidation(e)} name="dob" min="1900-01-01" max={today} value={formData.dob || ""} />
                        {errMsg&&errMsg.dob ? <span className="error_msg">{errMsg.dob}</span> : null}
                    </div>
                    <div className="confirmation">
                        <p>You need to be 21 and over to use this website in the U.S.</p>
                    </div>
                    <div className="terms-condition">
                        <input type="checkbox" onChange={(e)=>formvalidation(e)} name="termsCondition" value={isAgree} checked={isAgree} />
                        <label>
                            I read and agree to{" "}
                            <a href="#">Terms and Conditions.</a>
                            <span className="required">*</span>
                            {errMsg&&errMsg.termsCondition ? <span className="error_msg">{errMsg.termsCondition}</span> : null}
                        </label>
                    </div>
                    <div className="terms-condition">
                        <input type="checkbox" onChange={(e)=>formvalidation(e)} name="ageVerification" value={isCertify} checked={isCertify} />
                        <label>
                            I certify that I am a tobacco/vapor consumer 21 years of age or older and want to receive premiums, offers, coupons, and information from Element Vape and/or their affiliates.{" "}
                            <a href="#">Terms and Conditions.</a>
                            <span className="required">*</span>
                            {errMsg&&errMsg.ageVerification ? <span className="error_msg">{errMsg.ageVerification}</span> : null}
                        </label>
                        
                    </div>
                    <div className="form-action">
                        <button className="btn-primary" type="submit">
                            {loading ? (
                                    <span className="loading">
                                        <VscLoading />
                                    </span>
                            ) : (
                                "Create An Account"
                            )}
                        </button>
                    </div>
                </fieldset>
            </form>
        </div>
        </>
    );
}
