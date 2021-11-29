import React, { useEffect, useState } from "react";
// import axios from 'axios';
import ProductsToolBar from "../../Products/files/productsToolBar";
import Product from "../../Products/files/product";
import Sidebar from "../../Products/files/sidebar";
import Skeleton from "react-loading-skeleton";
import loadmore from "../../../../image/loader.svg";

export default function SearchResult() {
    const [products, setProducts] = useState([]);
    const [productCount, setProductCount] = useState(0);
    const [currentPage, setcurrentPage] = useState(0);
    const [sort, setSort] = useState(["relevance", "desc"]);
    const [selectvalue, setSelectvalue] = useState("relevance");
    const [loadingProduct, setloadingProduct] = useState(false);
    const [loadingmore, setloadingloadingmore] = useState(false);

    //Retrieve search text from URL
    const pathName = window.location.pathname.split("/");
    const searchText = pathName[pathName.length - 1].replaceAll("%20", " ");
    const errorText =
        searchText && searchText?.length >= 3
            ? "Your search returned no results"
            : "Minimum Search Query Length is 3";

    //Load More functionality
    const loadMore = () => {
        let testDiv = document.getElementById("loadmore");
        if (
            testDiv &&
            testDiv.getBoundingClientRect().top <= window.innerHeight &&
            !loadingmore &&
            productCount > products.length
        ) {
            setloadingloadingmore(true);
            setcurrentPage(currentPage + 1);
        }
    };
    useEffect(() => {
        if (!loadingmore) {
            window.addEventListener("scroll", loadMore);
        }
        return () => {
            window.removeEventListener("scroll", loadMore);
        };
    }, [loadMore]);

    return (
        <div className="page-main">
            <div className="cus-container">
                <h4 className="search-heading">
                    Search Results For: '{searchText}'
                </h4>
                <div className="product_wrapper_new">
                    <Sidebar
                        searchText={searchText}
                        setProducts={setProducts}
                        setProductCount={setProductCount}
                        currentPage={currentPage}
                        setcurrentPage={setcurrentPage}
                        products={products}
                        sort={sort}
                        loadingmore={loadingmore}
                        setloadingloadingmore={setloadingloadingmore}
                        setloadingProduct={setloadingProduct}
                    />
                    <div className="product_over_allwrapper_new">
                        <div className="product-list">
                            <ProductsToolBar
                                sortProduct={setSort}
                                productCount={productCount}
                                products={products}
                                setSelectvalue={setSelectvalue}
                                selectvalue={selectvalue}
                                loadingProduct={loadingProduct}
                            />
                        </div>
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
                                        <div className='load-more' id="loadmore">
                                            <img src={loadmore} alt="Loading..." />
                                        </div>
                                    ):null
                                } */}
                            </div>
                        ) : loadingProduct == true ? (
                            <div className="product-list">
                                <ol className="row">
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
                            </div>
                        ) : (
                            <div className="product-list">
                                {
                                    <p className="empty-search-result-message">
                                        {errorText}
                                    </p>
                                }
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
