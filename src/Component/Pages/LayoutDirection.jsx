import Axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { BrowserRouter as Router, Route, useParams } from "react-router-dom";
import Veratad from "../Common/veratad";
import Description from "./Description";
import Products from "./Products/Products";

export const LayoutRedirection = ({ component: Component, ...res }) => {
    const { slug } = useParams();
    const [type, settype] = useState("");
    const [id, setid] = useState("");

    useEffect(() => {
        settype("");
        setid("");
        Axios.get(
            `${process.env.REACT_APP_NODE_URL}getRedirection/${slug}`
        ).then(({ data }) => {
            settype(data.type);
            setid(data.entity_id);
        });
    }, [slug]);
    return (
        <React.Fragment>
            <Veratad />
            <Router></Router>
            <Route
                {...res}
                render={(props) => {
                    return type && id && type === "category" ? (
                        <Products catid={id} {...props} />
                    ) : type === "product" ? (
                        <Description id={id} {...props} />
                    ) : (
                        ""
                    );
                }}
            />
        </React.Fragment>
    );
};
