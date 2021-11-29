import Axios from "axios";
import React, { useState, useEffect } from "react";
import Skeleton from "react-loading-skeleton";
import AccordionElement from "./AccordionElement";
import InputRangeSlider from "../../../Common/InputRangeSlider";
import "../../../Common/InputRangeSlider.css";

import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from "react-accessible-accordion";

export default function Sidebar({
    catid,
    setProducts,
    setProductCount,
    currentPage,
    searchText,
    setcurrentPage,
    loadingComplete,
    setLoadingComplete,
    sort,
    setloadingProduct,
    loadingmore,
    setloadingloadingmore,
}) {
    const [bucketArr, setbucketArr] = useState([]);
    const [loading, setLoading] = useState(true);
    const [label, setlabel] = useState([]);
    const [filterObj, setFilterObj] = useState({});
    const [filterDetails, setfilterDetails] = useState({});
    const [baseProducts, setBaseProducts] = useState([]);
    const [isActive, setActive] = useState(false);
    useEffect(() => {
        if (currentPage != 0) {
            setcurrentPage(0);
        }
    }, [filterObj, sort]);
    useEffect(() => {
        // setLoading(true);
        // if (!loadingmore) {
        //     setloadingProduct(true);
        // }
        let searchresultapi = `${process.env.REACT_APP_MAGENTO_URI}search?searchCriteria[requestName]=quick_search_container&searchCriteria[filterGroups][0][filters][0][field]=search_term&searchCriteria[filterGroups][0][filters][0][value]=${searchText}&searchCriteria[filterGroups][0][filters][1][field]=visibility&searchCriteria[filterGroups][0][filters][1][value]=4`;
        let productlistapi = `${process.env.REACT_APP_MAGENTO_URI}search?searchCriteria[requestName]=catalog_view_container&searchCriteria[filterGroups][0][filters][0][field]=category_ids&searchCriteria[filterGroups][0][filters][0][value]=${catid}`;
        let appendUrl = catid ? productlistapi : searchresultapi;
        if (baseProducts.length) {
            if (!Object.keys(filterObj).length)
                return setProducts(baseProducts);
            let filtered = baseProducts.map((product) => {
                let filter = Object.keys(filterObj).map((key, j) => {
                    let data = product?.filter.map((prod, i) => {
                        let nested = filterObj[key].map((item) => {
                            if (
                                prod.attribute_code == key &&
                                prod.value.includes(item)
                            ) {
                                return product;
                            }
                        });
                        nested = nested.filter(Boolean);
                        return nested;
                    });
                    data = data.filter(Boolean);
                    return data?.length && [].concat(...data);
                });
                filter = filter.filter(Boolean);
                return filter.length && filter[0];
            });
            filtered = filtered.filter(Boolean);
            setProducts([].concat(...filtered));
        } else {
            appendUrl =
                appendUrl +
                `&searchCriteria[sortOrders][0][field]=${sort[0]}&searchCriteria[sortOrders][0][direction]=${sort[1]}&searchCriteria[pageSize]=16&searchCriteria[currentPage]=${currentPage}`;
            getSearchResult(appendUrl);
        }
    }, [searchText, catid, currentPage, filterObj, sort]);

    const getSearchResult = (newUrl, page) => {
        if (page) {
            Axios.post(process.env.REACT_APP_NODE_URL + "category", {
                id: catid,
                page,
                sort: "",
                count: 16,
                type: "name",
            }).then(async (res) => {
                setProducts((prod) => [...prod, ...res.data.rows]);
                setBaseProducts((prod) => [...prod, ...res.data.rows]);
                console.log(
                    "Loading ",
                    page,
                    res.data.count / 16,
                    res.data.count / 16 > page
                );
                if (res.data.count / 16 > page) {
                    getSearchResult(newUrl, page + 1);
                } else {
                    console.log("Load Completed");
                    setLoadingComplete(true);
                }
            });
        } else {
            Axios.get(newUrl, {
                headers: {
                    Authorization:
                        "Bearer " + process.env.REACT_APP_MAGENTO_ADMIN_API,
                    "content-type": "application/json",
                },
            })
                .then(async (res) => {
                    const buckets = res.data.aggregations.buckets;
                    setbucketArr(buckets);
                    setLoading(false);
                    setloadingProduct(false);
                    setloadingloadingmore(false);
                })
                .catch((err) => {
                    console.log(err.message);
                    setLoading(false);
                    setloadingProduct(false);
                    setloadingloadingmore(false);
                });
            Axios.post(process.env.REACT_APP_NODE_URL + "category", {
                id: catid,
                page: 0,
                sort: "",
                count: 16,
                type: "name",
            }).then(async (res) => {
                setProducts(res.data.rows);
                setBaseProducts(res.data.rows);
                setProductCount(res.data.count);
                setLoading(false);
                setloadingProduct(false);
                setloadingloadingmore(false);
                getSearchResult(newUrl, 1);
            });
        }
    };

    //Retreiving bucket based on condition
    const displayBucket =
        bucketArr &&
        bucketArr.map((data) => {
            if (
                data.name !== "category_bucket" &&
                data.name !== "stock_status_bucket" &&
                data.values.length != 0
            ) {
                return data;
            }
        });

    //Removing all undefined values and retreiving arrays only with values
    const bucketWithValues = [];
    displayBucket.map((data) => {
        if (data) {
            bucketWithValues.push(data);
        }
    });

    //Condition to get the params for label api
    const attributeName = [];
    const attributeValue = [];

    bucketWithValues.map((data) => {
        let name = data.name.replace("_bucket", "");
        attributeName.push(name);

        let value = data.values.map((item) => {
            return item.value;
        });
        attributeValue.push(value);
    });

    // combining all attributes into single object
    let atObj = {};
    useEffect(() => {
        for (let i = 0; i < attributeValue.length; i++) {
            if (attributeValue) {
                atObj[attributeName[i]] = attributeValue[i];
            }
        }
    }, [bucketArr]);

    //api request for getting label
    useEffect(() => {
        // setLoading(true);
        Axios.post(
            process.env.REACT_APP_MAGENTO_URI + "get_option_label_byid",
            {
                attributes: atObj,
            },
            {
                headers: {
                    Authorization:
                        "Bearer " + process.env.REACT_APP_MAGENTO_ADMIN_API,
                    "content-type": "application/json",
                },
            }
        )
            .then((res) => {
                if (res.status === 200) {
                    setlabel(res.data);
                    setLoading(false);
                }
            })
            .catch((err) => {
                console.log(err);
                setLoading(false);
            });
    }, [bucketArr]);

    const showHideMenu = () => {
        setActive((isActive) => !isActive);
        document.getElementById("filter-nav").classList.toggle("active");
    };
    const removefilters = (filterlable, val, labelIndex, valueIndex, e) => {
        e.preventDefault();
        if (filterDetails[filterlable] && Object.keys(filterDetails).length) {
            let temp = filterDetails[filterlable];
            if (temp.includes(val)) {
                if (temp.length <= 1) {
                    const { [filterlable]: foo, ...remvedlabel } =
                        filterDetails;
                    setfilterDetails(remvedlabel);
                } else {
                    setfilterDetails((filterDetails) => ({
                        ...filterDetails,
                        [filterlable]: temp.filter((arr) => arr !== val),
                    }));
                }
            }
        }
        let attributeCode = Object.keys(filterObj)[labelIndex];
        if (filterObj[attributeCode] && Object.keys(filterObj).length) {
            let temp = filterObj[attributeCode];
            let attributeValue = temp[valueIndex];
            if (temp.includes(attributeValue)) {
                if (temp.length <= 1) {
                    const { [attributeCode]: foo, ...filterkey } = filterObj;
                    setFilterObj(filterkey);
                } else {
                    setFilterObj((filterObj) => ({
                        ...filterObj,
                        [attributeCode]: temp.filter(
                            (arr) => arr !== attributeValue
                        ),
                    }));
                }
            }
        }
    };

    return (
        <div className="sidebar filters">
            <div
                className="filter-btn-mobile"
                isActive={isActive}
                setActive={setActive}
                onClick={showHideMenu}
            >
                Filter
            </div>

            {Object.keys(filterDetails).length ? (
                <div className="filterInfo">
                    <div className="now_shoing_by">Now Shopping by</div>
                    <div className="filters_inner_wrap_new">
                        {Object.keys(filterDetails).map(
                            (filterlable, labelIndex) => {
                                return (
                                    <div className="list-wrrap">
                                        <div className="heading">
                                            {filterlable.replaceAll("_", " ")}
                                        </div>
                                        <ul className="selection">
                                            {filterDetails[filterlable].map(
                                                (val, valueIndex) => {
                                                    return (
                                                        <li>
                                                            {val}{" "}
                                                            <span
                                                                className="removefilter"
                                                                onClick={(e) =>
                                                                    removefilters(
                                                                        filterlable,
                                                                        val,
                                                                        labelIndex,
                                                                        valueIndex,
                                                                        e
                                                                    )
                                                                }
                                                            >
                                                                <i class="fas fa-times"></i>
                                                            </span>
                                                        </li>
                                                    );
                                                }
                                            )}
                                        </ul>
                                    </div>
                                );
                            }
                        )}
                    </div>

                    <div className="filter_btn_wrap">
                        <span
                            onClick={() => {
                                setFilterObj({});
                                setfilterDetails({});
                            }}
                            className="clear-button"
                        >
                            Clear
                        </span>
                    </div>
                </div>
            ) : null}

            {bucketArr && !loading ? (
                <div className="filter-block" id="filter-nav">
                    <div className="colapse">
                        <Accordion allowZeroExpanded>
                            <AccordionItem>
                                <AccordionItemHeading>
                                    <AccordionItemButton>
                                        Price
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel>
                                    <InputRangeSlider />
                                </AccordionItemPanel>
                            </AccordionItem>

                            {displayBucket &&
                                bucketWithValues?.map((data, i) => {
                                    let temp = data?.name?.replaceAll(
                                        "_bucket",
                                        ""
                                    );
                                    let val = data?.values?.map((item) => {
                                        return item.metrics[1];
                                    });
                                    return (
                                        label[0] &&
                                        label[0][temp] && (
                                            <AccordionElement
                                                key={i}
                                                i={i}
                                                data={temp}
                                                label={label[0][temp]}
                                                filterObj={filterObj}
                                                setFilterObj={setFilterObj}
                                                val={val}
                                                filterDetails={filterDetails}
                                                setfilterDetails={
                                                    setfilterDetails
                                                }
                                                loadingComplete={
                                                    loadingComplete
                                                }
                                            />
                                        )
                                    );
                                })}
                        </Accordion>
                    </div>
                </div>
            ) : Object.keys(filterDetails).length == 0 ? (
                <>
                    <Skeleton height={50} />
                    <br />
                    <br />
                    <Skeleton height={50} />
                    <br />
                    <br />
                    <Skeleton height={50} />
                    <br />
                    <br />
                    <Skeleton height={50} />
                </>
            ) : null}
        </div>
    );
}
