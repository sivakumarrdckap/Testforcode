import React, { useEffect } from "react";
import loadable from "@loadable/component";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import { AnimatedSwitch } from "react-router-transition";
import { Provider } from "react-redux";
import { store } from "./redux/ReduxStore";
import HomePage from "./Component/Pages/Homepage";
import "./style.scss";
import { Layout } from "./Component/Pages/Layout";
import { LayoutRedirection } from "./Component/Pages/LayoutDirection";
// import firebase from "./firebase";

const Description = loadable(() => import("./Component/Pages/Description"));
const Products = loadable(() => import("./Component/Pages/Products/Products"));
const Cart = loadable(() => import("./Component/Pages/Cart"));
const EditCart = loadable(()=> import("./Component/Pages/Cart/fragments/editCart"))
const Login = loadable(() => import("./Component/Pages/login"));
const Account = loadable(() => import("./Component/Pages/account"));
const Checkout = loadable(() => import("./Component/Pages/Checkout"));
const Print = loadable(() => import("./Component/Pages/Printorder"));
const Signout =  loadable(() => import("../src/Component/Common/Errors/Signout")); 
const Forgot =  loadable(() => import("../src/Component/Pages/login/forgot-password"));
const Password =  loadable(() => import("../src/Component/Pages/login/password"));
const SearchResult = loadable(()=> import("../src/Component/Pages/Description/component/searchResult"));

function App() {
    // useEffect(() => {
    //     const messaging = firebase.messaging();
    //     messaging
    //         .getToken()
    //         .then((token) => console.warn({ token }))
    //         .catch((err) => console.warn({ err }));
    // }, []);
    return (
        <Provider store={store}>
            <Router>
                <Switch
                // atEnter={{ opacity: 0 }}
                // atLeave={{ opacity: 0 }}
                // atActive={{ opacity: 1 }}
                // className="switch-wrapper"
                >
                    <Layout path="/" exact component={HomePage} />
                    {/* <Layout path="/plp" exact component={Products} />
                    <Layout path="/plp/:catid" exact component={Products} />
                    <Layout path="/description" exact component={Description} />
                    <Layout
                        path="/description/:id"
                        exact
                        component={Description}
                    /> */}
                    <Layout
                        path="/customer/account/logoutSuccess/"
                        exact
                        component={Signout}
                    />
                    <Layout path="/cartpage" exact component={Cart} />
                    <Layout path="/cartpage/configure/item_id/:item_id/prod_id/:prod_id" exact component={EditCart} />
                    <Layout path="/account/login" exact component={Login} />
                    <Layout path="/account/login" exact component={Login} />
                    <Layout path="/account" exact component={Account} />
                    <Layout
                        path="/sales/order/history/"
                        exact
                        component={Account}
                    />
                    <Layout path="/wishlist" exact component={Account} />
                    <Layout path="/catalogsearch/result/:q"  component={SearchResult}/>
                    <Layout
                        path="/customer/address"
                        exact
                        component={Account}
                    />
                    <Layout
                        path="/customer/order-view"
                        exact
                        component={Account}
                    />
                    <Layout path="/account/edit" exact component={Account} />
                    <Layout
                        path="/gdpr/customer/settings/"
                        exact
                        component={Account}
                    />
                    <Layout
                        path="/newsletter/manage"
                        exact
                        component={Account}
                    />
                    <Layout path="/checkout" exact component={Checkout} />
                    <Layout path="/account/forgotpassword" exact component={Forgot} />
                    <Layout path="/customer/account/createpassword" exact component={Password} />
                    <Layout path="/amstorecredit" exact component={Account} />
                    <Layout path="/rewards/account" exact component={Account} />
                    <Route path="/account/print" exact component={Print} />
                    <Layout path="/:slug" exact component={LayoutRedirection} />
                </Switch>
            </Router>
        </Provider>
    );
}

export default App;