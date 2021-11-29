import React, { version } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Footer from "../Common/Footer";
import { useDispatch } from "react-redux";
import Headers from "../Common/Headers";
import { displayCart } from "../../redux/actions";
import Veratad from "../Common/veratad";

export const Layout = ({ component: Component, ...res }) => {

    const dispatch = useDispatch();
    dispatch(displayCart(false));
    if (res.title) {
        document.title = res.title;
    } else {
        document.title = "Element Vape";
    }
    return (
        <React.Fragment>
            <Veratad />
            <Router></Router>
            <Route
                {...res}
                render={(props) => {
                    return (
                        <div className="flexible-content">
                            {props.location.pathname !== '/checkout' ? <Headers /> : null}
                            <main id="content">
                                <Component {...props} />
                            </main>
                            <Footer />
                        </div>
                    );
                }}
            />
        </React.Fragment>
    );
};
