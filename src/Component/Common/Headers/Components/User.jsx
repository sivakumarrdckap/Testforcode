import React,{useRef} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import { displayUser } from '../../../../redux/actions/index.js';
import UserMiniDropdown from './UserMiniDropdown';

export default function User() {
    const dispatch = useDispatch();
    let history = useHistory();
    const display_user = useSelector((state) => state.display_user);
    const customer_token = useSelector((state) => state.customer_token);

    let menuRef = useRef();

    const miniUserFn = () => {
        if(!customer_token){
                !customer_token && history.push("/account/login");
        }else{
            dispatch(displayUser(!display_user));
            document.addEventListener("mousedown", (e) => {
                try {
                    if (!menuRef.current.contains(e.target)) {
                        setTimeout(() => {
                            dispatch(displayUser(false));
                        }, 200);
                    }
                } catch (error) {
                    console.log(error);
                }
            });
        }  
    };

    return (
        <div>
            <li className="authorization-link" ref={menuRef}>
                <span onClick={miniUserFn}>
                    <i className="fas fa-user" />
                </span>
                {
                    customer_token ? (
                        <div className={`${!display_user && 'hide-user'}`}>
                            <UserMiniDropdown/>
                        </div>
                    ):null
                }
            </li> 
        </div>
    )
}
