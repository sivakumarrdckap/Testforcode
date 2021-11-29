import React, { useEffect, useState } from "react";
import axios from "axios";
import { useHistory, useParams } from "react-router-dom";
import Productinfo from "./component/product-info";

export default function Description({ id, editValue }) {
    // const { id } = useParams();
    console.log({ id });
    const [productdata, setproductdata] = useState(null);
    const [loading, setloading] = useState(true);
    const history = useHistory();
    useEffect(() => {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
        setloading(true);
        let datalist = JSON.parse(localStorage.getItem("datalist"));
        let index = datalist && datalist.indexOf(id);

        let datalocal = index
            ? index !== -1
                ? JSON.parse(localStorage.getItem("data"))[index]
                : null
            : null;

        if (datalocal) {
            setproductdata(datalocal);
            setloading(false);
        } else {
            if (id) {
                axios
                    .get(process.env.REACT_APP_NODE_URL + "id/" + id)
                    .then(({ data, status }) => {
                        console.log({ data });
                        if (status === 200) {
                            setproductdata(data[0]);
                            setloading(false);
                        }
                        document.body.scrollTop = 0;
                        document.documentElement.scrollTop = 0;
                        document
                            .getElementById("productInforef")
                            ?.classList?.add("show");
                    });
                // .catch((err) => history.push("/"));
            }
        }
    }, [id]);
    return (
        // <>
        //     <Suspense fallback={() => <Skeleton />}>
        //         <Headers />
        <div className="page-main">
            <div className="cus-container">
                <Productinfo
                    productdata={productdata}
                    loading={loading}
                    showDesc={true}
                    editValue={editValue}
                />
            </div>
        </div>
        //         <Footer />
        //     </Suspense>
        // </>
    );
}
