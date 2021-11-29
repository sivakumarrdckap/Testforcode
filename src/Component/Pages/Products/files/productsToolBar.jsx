import React from "react";
import Skeleton from "react-loading-skeleton";

export default function ProductsToolBar({
    productCount,
    sortProduct,
    products,
    selectvalue,
    setSelectvalue,
    loadingProduct,
    loadingComplete,
}) {
    return (
        <div className="toolbar-products">
            <div className="total-produts">
                {products.length && !loadingProduct ? (
                    <p className="toolbar-amount" id="toolbar-amount">
                        <span>Displays</span>{" "}
                        <span className="toolbar-number">
                            {productCount === 0 ? 0 : 1}
                        </span>{" "}
                        - {""}
                        <span className="toolbar-number" id="lastnum">
                            {products?.length}
                        </span>{" "}
                        {loadingComplete && (
                            <span className="toolbar-number">
                                {" "}
                                of {productCount}
                            </span>
                        )}
                    </p>
                ) : loadingProduct == true ? (
                    <Skeleton height={35} width={130} />
                ) : null}
            </div>
            {productCount != 0 && products.length ? (
                <div className="toolbar-sorter">
                    <div className="select-box-wrap">
                        <label
                            className="sorter-label"
                            htmlFor="sorter"
                            alt="press enter key to expand Sort By"
                        >
                            Sort By
                        </label>
                        <select
                            id="sorter"
                            data-role="sorter"
                            className="sorter-options"
                            onChange={({ target: { value } }) => {
                                sortProduct(value.split(" "));
                                setSelectvalue(value);
                            }}
                            value={selectvalue}
                        >
                            <option value="relevance desc">Relevance</option>
                            <option value="new_products asc">
                                New Arrivals{" "}
                            </option>
                            <option value="price desc">
                                Price High - Low{" "}
                            </option>
                            <option value="price asc">Price Low - High </option>
                        </select>
                    </div>
                </div>
            ) : null}
        </div>
    );
}
