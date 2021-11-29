import React, { useState } from "react";
import axios from "axios";
import Skeleton from "react-loading-skeleton";

export default function CategoryBanner({ catid }) {
    const [image, setImage] = useState(null);
    const [showImage, setShowImage] = useState(true);
    axios
        .get(process.env.REACT_APP_MAGENTO_URI + "categories/" + catid, {
            headers: {
                Authorization:
                    "Bearer " + process.env.REACT_APP_MAGENTO_ADMIN_API,
            },
        })
        .then((res) => {
            setImage(
                res.data.custom_attributes.find(
                    (x) => x.attribute_code === "image"
                ).value
            );
        })
        .catch((err) => {
            setShowImage(false);
        });
    return (
        <div>
            {showImage && image ? (
                <img
                    src={
                        process.env.REACT_APP_MAGENTO_URI.replace(
                            "rest/V1/",
                            ""
                        ) +
                        "pub/media/catalog/category/" +
                        image
                    }
                    alt="img"
                    onError={() => setShowImage(false)}
                    className="banner-image"
                    srcset=""
                />
            ) : showImage && image == null ? null : null}
        </div>
    );
}
