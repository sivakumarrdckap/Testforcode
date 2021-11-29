import React, { useState, useEffect } from "react";
import axios from "axios";
import ReactHtmlParser from "react-html-parser";
import Skeleton from "react-loading-skeleton";

export default function BestVape() {
    const [headerTopLeft, setheaderTopLeft] = useState(null);
    const [headerTopRight, setheaderTopRight] = useState(null);
    const [loading, setloading] = useState(false);

    useEffect(() => {
        setloading(true);
        axios
            .get(process.env.REACT_APP_MAGENTO_URI + "get_home_cms_top_banner")
            .then((res) => {
                if (res.status === 200) {
                    setheaderTopLeft(res.data[2][0]);
                    setheaderTopRight(res.data[5][0]);
                    setloading(false);
                }
            })
            .catch((err) => {
                console.log(err);
                setloading(false);
            });
    }, []);

    return (
        <div className="cus-container">
            <div className="promotion-2columns">
                <div className="row">
                    <div className="col-sm-6">
                        {headerTopLeft && !loading
                            ? ReactHtmlParser(
                                  unescape(headerTopLeft?.settings?.content)
                                      .replace("Starter Kits", " ")
                                      .replace(
                                          "{{media url=",
                                          "https://elementvape.com/pub/media/"
                                      )
                                      .replace("}}", "")
                                      .replace(
                                          "https://www.elementvape.com/e-liquids",
                                          "/e-liquids"
                                      )
                                      .replaceAll("&quot;", "")
                              )
                            : loading && (
                                  <Skeleton
                                      width={"100%"}
                                      height={200}
                                      count={1}
                                  />
                              )}
                    </div>
                    <div className="col-sm-6">
                        {headerTopRight && !loading
                            ? ReactHtmlParser(
                                  unescape(headerTopRight?.settings?.content)
                                      .replace("Starter Kits", " ")
                                      .replace(
                                          "{{media url=",
                                          "https://elementvape.com/pub/media/"
                                      )
                                      .replace("}}", "")
                                      .replace(
                                          "https://www.elementvape.com/e-liquids",
                                          "/best-vape"
                                      )
                                      .replaceAll("&quot;", "")
                              )
                            : loading && (
                                  <Skeleton
                                      width={"100%"}
                                      height={200}
                                      count={1}
                                  />
                              )}
                    </div>
                </div>
            </div>
        </div>
    );
}
