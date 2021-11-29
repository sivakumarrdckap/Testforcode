import React from "react";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
// import { useHistory } from "react-router-dom";
import Product from "../../Products/files/product";
import Swal from "sweetalert2";

export default function EachProd({ id }) {
    console.log({ id });
    const [prod, setprod] = useState(null);
    useEffect(() => {
        axios
            .get(process.env.REACT_APP_NODE_URL + "id/" + (id || "443"))
            .then(({ data }) => {
                let temp = data[0];
                let {
                    media_gallery_entries,
                    option,
                    options,
                    product_links,
                    status,
                    category,
                    custom_attributes,
                    extension_attributes,
                    tier_prices,
                    visibility,
                    ...rest
                } = temp;
                setprod(rest);
            })
            .catch((err) => {
                Swal.fire(
                    "Oops",
                    "There was ann error connecting to the server",
                    "error"
                );
            });
    }, []);
    return prod && <Product product={prod} />;
}
