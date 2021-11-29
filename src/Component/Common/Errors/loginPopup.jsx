import React from 'react';
import Loginform from '../../Pages/login/components/loginForm';
import { useHistory } from 'react-router';

export default function LoginPopup() {
    const history = useHistory();

    return (
        <div className='loginPopup'>
            <div className='loginPopup-left'>
                <Loginform loginPopup={true}/>
            </div>
            
            <div className='loginPopup-right'>
                <h5 className="block-title">Checkout as a new customer</h5>
                <p>Creating an account has many benefits:</p>
                <ul>
                    <li>See order and shipping status</li>
                    <li>Track order history</li>
                    <li>Check out faster</li>
                    <li>Earn reward points for every checkout</li>
                </ul>
                <button className='loginPopup-right-button' onClick={()=>history.push('/account/login')}>CREATE AN ACCOUNT</button>
            </div>
            <div className='loginPopup-center'>OR</div>
        </div>
    )
}
