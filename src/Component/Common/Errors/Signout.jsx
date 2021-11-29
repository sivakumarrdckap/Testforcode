import React, {useEffect, useState} from "react";
import {useHistory} from "react-router";
import {Link} from "react-router-dom";

export default function Signout() {
    const [count, setCount] = useState(5);
    let history = useHistory()

    useEffect(() => {
        setTimeout(() => {
            count > 1 ? setCount(count - 1) : history.push('/')
        }, 1000)
    }, [count])

    return (
            <div className="sign-out">
                <h1>You are signed out</h1>
                <p>
                    You have signed out and will go to our homepage in {count} seconds.
                </p>
                <p>
                    <Link to={"/"} className='homepageLink'>Click here</Link> to go homepage
                </p>
            </div>
    )    
}