import React, { useRef, useState, useEffect, useCallback } from "react";
// import axios from "axios";
import Product from "./files/product";
import Sidebar from "./files/sidebar";
import ProductsToolBar from "./files/productsToolBar";
import Skeleton from "react-loading-skeleton";
import CategoryBanner from "./files/categoryBanner";
import loadmore from "../../../image/loader.svg";

export default function Products({ catid }) {
    const [products, setProducts] = useState([]);
    const [productCount, setProductCount] = useState(0);
    const [currentPage, setcurrentPage] = useState(0);
    const [sort, setSort] = useState(["relevance", "desc"]);
    const [selectvalue, setSelectvalue] = useState("relevance");
    const [loadingProduct, setloadingProduct] = useState(false);
    const [loadingmore, setloadingloadingmore] = useState(false);
    const [loadingComplete, setLoadingComplete] = useState(false);
    //Load More functionality
    // const loadMore = () => {
    //     let loadmoreDiv = document.getElementById("loadmore");
    //     if (
    //         loadmoreDiv &&
    //         loadmoreDiv.getBoundingClientRect().top <= window.innerHeight &&
    //         !loadingmore &&
    //         productCount > products.length
    //     ) {
    //         setloadingloadingmore(true);
    //         setcurrentPage(currentPage + 1);
    //     }
    // };
    // useEffect(() => {
    //     if (!loadingmore) {
    //         window.addEventListener("scroll", loadMore);
    //     }
    //     return () => {
    //         window.removeEventListener("scroll", loadMore);
    //     };
    // }, [loadMore]);
    return (
        <div className="page-main">
            <div className="cus-container">
                <CategoryBanner catid={catid} />
                <div className="product_wrapper_new">
                    <Sidebar
                        catid={catid}
                        setProducts={setProducts}
                        setProductCount={setProductCount}
                        currentPage={currentPage}
                        setcurrentPage={setcurrentPage}
                        products={products}
                        sort={sort}
                        loadingmore={loadingmore}
                        setloadingloadingmore={setloadingloadingmore}
                        setloadingProduct={setloadingProduct}
                        setLoadingComplete={setLoadingComplete}
                        loadingComplete={loadingComplete}
                    />
                    <div className="product_over_allwrapper_new">
                        <ProductsToolBar
                            sortProduct={setSort}
                            productCount={productCount}
                            products={products}
                            setSelectvalue={setSelectvalue}
                            selectvalue={selectvalue}
                            loadingProduct={loadingProduct}
                            loadingComplete={loadingComplete}
                        />
                        {products.length && !loadingProduct ? (
                            <div className="product-list">
                                <div className="product-grid-wrapper">
                                    <ol>
                                        {products
                                            .filter(
                                                (data) => data !== undefined
                                            )
                                            .map((val) => {
                                                return (
                                                    <Product product={val} />
                                                );
                                            })}
                                    </ol>
                                </div>
                                {/* {productCount > products.length ? (
                                    <div className="load-more" id="loadmore">
                                        <img src={loadmore} alt="Loading..." />
                                    </div>
                                ) : null} */}
                            </div>
                        ) : loadingProduct == true ? (
                            <div className="product-list">
                                {new Array(4).fill(0).map((_, i) => (
                                    <ol className="row mt-3">
                                        <li className="col-3">
                                            <Skeleton height={250} />
                                        </li>
                                        <li className="col-3">
                                            <Skeleton height={250} />
                                        </li>
                                        <li className="col-3">
                                            <Skeleton height={250} />
                                        </li>
                                        <li className="col-3">
                                            <Skeleton height={250} />
                                        </li>
                                    </ol>
                                ))}
                            </div>
                        ) : // <div className="empty-search-result">
                        //     {
                        //         <p className="empty-search-result-message">
                        //             No more products avilable
                        //         </p>
                        //     }
                        // </div>
                        null}
                    </div>
                </div>
            </div>
        </div>
    );
}
