import React, {useState} from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Loginform from "./components/loginForm";
import Creataccountform from "./components/creatAccount";

export default function LoginUser() {
    const [succToastMsg, setSuccToastMsg] = useState("");
    const [errMsgtost, seterrMsgtost] = useState("");
    return (
        <div className="page-main account">
            <div className="cus-container">
                <h1>SIGN IN OR CREATE ACCOUNT</h1>
                {errMsgtost ? <div className="popup_login_response"><i class="fas fa-exclamation-triangle"></i> {errMsgtost}</div> : null}
                {succToastMsg ? <div className="popup_login_response success"><i class="far fa-check-circle"></i> {succToastMsg}</div> : null}
                <Row>
                    <Col sm={6}>
                        <Loginform 
                            seterrMsgtost={seterrMsgtost} 
                        />
                    </Col>
                    <Col sm={6}>
                        <Creataccountform 
                            setSuccToastMsg={setSuccToastMsg}
                            seterrMsgtost={seterrMsgtost} 
                        />
                    </Col>
                </Row>
            </div>
        </div>
    );
}
