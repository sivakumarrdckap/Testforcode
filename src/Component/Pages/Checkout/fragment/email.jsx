import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { BsCaretUpFill } from "react-icons/bs";
import { AiOutlineCheckCircle } from "react-icons/ai";
import { VscLoading } from "react-icons/vsc";
import Axios from "axios";
import Swal from "sweetalert2";
import {
    update_customer_token,
    update_customer_email,
} from "../../../../redux/actions";
import { useDispatch } from "react-redux";

export default function Email({
    setemail,
    email,
    emailValidation,
    validateFields,
    setLoginUserToken,
    isemail,
    setIsemail,
}) {
    const [password, setPassword] = useState("");
    const [loading, setloading] = useState(false);
    const dispatch = useDispatch();
    useEffect(async () => {
        setIsemail("loading");
        setIsemail(await emailValidation());
    }, [email]);

    const loginUser = () => {
        setloading(true);
        Axios.post(
            `${process.env.REACT_APP_MAGENTO_URI}integration/customer/token`,
            {
                username: email,
                password: password,
            }
        )
            .then((res) => {
                if (res.status === 200) {
                    setLoginUserToken(res.data);
                    dispatch(update_customer_token(res.data));
                    dispatch(update_customer_email(email));
                }
            })
            .catch(({ response }) =>
                Swal.fire("Oops...", "Worng User Name Or Password", "warning")
            );
    };

    return (
        <div className="border-box">
            <h2>
                {/* <span className="mark">1</span> */}
                <span className="title">Email</span>
            </h2>
            <p>
                Already have an account? Login <a href="#">here</a>
            </p>
            <div className={`input-field ${validateFields && "validate"}`}>
                <label htmlFor="email"> Email</label>
                <input
                    id="email"
                    value={email}
                    required
                    onChange={({ target: { value } }) => setemail(value)}
                    type="email"
                />
                {isemail === "loading" ? (
                    <span>
                        <VscLoading />
                    </span>
                ) : (
                    email && (
                        <span>
                            <AiOutlineCheckCircle />
                        </span>
                    )
                )}
            </div>
            {isemail !== "loading" && isemail && (
                <div className={`input-field ${validateFields && "validate"}`}>
                    <label htmlFor="password"> Password</label>
                    <input
                        id="password"
                        value={password}
                        required
                        onChange={({ target: { value } }) => setPassword(value)}
                        type="password"
                    />
                </div>
            )}
            <p>
                <BsCaretUpFill /> You can create an account after checkout.
            </p>
            {isemail !== "loading" && isemail && (
                <div className="login-footer mt-3">
                    <button onClick={loginUser} className="place-order">
                        {loading ? (
                            <span className="loading">
                                <VscLoading />
                            </span>
                        ) : (
                            "Login"
                        )}
                    </button>
                </div>
            )}
        </div>
    );
}
