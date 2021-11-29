import React, { useState, useRef } from "react";
import { useEffect } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import Skeleton from "react-loading-skeleton";
import { Link } from "react-router-dom";

export default function Searchbar() {
    let history = useHistory();
    const [show, setshow] = useState("visiblitiyHidden");
    const [open, setopen] = useState("close-btn");
    const [dropdown, setdropdown] = useState("select_menu_down");
    const [searchText, setSearchText] = useState("");
    const [searchData, setSearchData] = useState(null);
    const [selecteted, setselecteted] = useState("All Catogries");
    const [selectetedId, setselectetedId] = useState("All Catogries");
    const [bodyoverflow, setbodyoverflow] = useState(false);
    const [searchCount, setsearchCount] = useState(0);
    const [loading, setloading] = useState(false);
    const [categories, setCategories] = useState([]);

    const showHideSearch = () => {
        setshow((show) =>
            show === "visibleShow" ? "visiblitiyHidden" : "visibleShow"
        );
        setopen((open) => (open === "open" ? "close-btn" : "open"));
        setSearchData(null);
        setSearchText("");
        document
            .getElementsByTagName("body")[0]
            .classList.toggle(!bodyoverflow ? "overflowhidden" : "");
    };
    const dropDownToggler = () => {
        setdropdown((dropdown) =>
            dropdown == "dropOpen select_menu_down"
                ? "select_menu_down"
                : "dropOpen select_menu_down"
        );
    };
    const optionSelected = (e) => {
        setselecteted(e.target.textContent);
        setselectetedId(e.target.id);
        dropDownToggler();
    };
    const selectRef = useRef();
    useEffect(() => {
        const checkIfClickedOutside = (e) => {
            if (
                dropdown === "dropOpen select_menu_down" &&
                selectRef.current &&
                !selectRef.current.contains(e.target)
            ) {
                setdropdown("select_menu_down");
            }
        };
        document.addEventListener("click", checkIfClickedOutside);
        return () => {
            document.removeEventListener("click", checkIfClickedOutside);
        };
    }, [dropdown]);

    const changeRoute = (url_key) => {
        // history.push("/description/" + url_key + "/");
        history.push(`/${url_key}`);
        setSearchData(null);
        setSearchText("");
        showHideSearch();
    };

    //Total Count Of Search Products
    useEffect(() => {
        if (searchText?.length >= 3) {
            axios
                .get(
                    process.env.REACT_APP_NODE_URL +
                        "searchProductCount/" +
                        searchText
                )
                .then((res) => {
                    setsearchCount(res.data[0].count);
                })
                .catch((err) => {
                    console.log(err);
                });
        }
    }, [searchText]);

    //Search Result API
    useEffect(() => {
        setSearchData([]);
        setloading(true);
        if (searchText?.length >= 3) {
            axios
                .get(
                    `
                    ${process.env.REACT_APP_NODE_URL}searchProduct/${searchText}`
                )
                .then(({ data, status }) => {
                    status === 200 && setSearchData(data);
                    setloading(false);
                })
                .catch((err) => {
                    setloading(false);
                    console.log(err);
                });
        }
    }, [searchText]);

    //Search Form Submit
    const handleSubmit = (e) => {
        if (searchText) {
            history.push(`/catalogsearch/result/${searchText}`);
        } else {
            e.preventDefault();
        }
    };

    //Mobile Categories
    useEffect(() => {
        axios
            .get(process.env.REACT_APP_MAGENTO_URI + "categories", {
                headers: {
                    Authorization: "Bearer 229rz5jria2b5cz5zo6lnnac4n2gc0xm",
                },
            })
            .then(({ data, status }) => {
                if (status === 200) {
                    // const sorted = data.sort((a, b) => a.id - b.id);
                    setCategories(data.children_data);
                }
            });
    }, []);

    return (
        <li className="search-link">
            <button
                onClick={showHideSearch}
                className={`mobile_search ${open}`}
            >
                search
            </button>
            <div className={show} id="search-bar">
                <div className="responsive_searc_overlay">
                    <div className="mobile_search_responsive_wrap">
                        <div className="search_close_wrapper">
                            <a onClick={showHideSearch} className={open}>
                                <i className="fas fa-times"></i>
                            </a>
                        </div>
                        <div className="select_wrapper" ref={selectRef}>
                            <div
                                onClick={dropDownToggler}
                                className="selected_items"
                            >
                                {selecteted}{" "}
                                <i className="fas fa-chevron-down"></i>
                            </div>
                            <ul className={dropdown}>
                                {categories.map(
                                    ({ name, children_data, id }) => (
                                        <li>
                                            <a id={id} onClick={optionSelected}>
                                                {name}
                                            </a>
                                            {children_data && (
                                                <ul className="chiled_list">
                                                    {children_data.map(
                                                        ({
                                                            name: children_name,
                                                            id: childId,
                                                        }) => (
                                                            <li>
                                                                <a
                                                                    id={childId}
                                                                    onClick={
                                                                        optionSelected
                                                                    }
                                                                >
                                                                    {
                                                                        children_name
                                                                    }
                                                                </a>
                                                            </li>
                                                        )
                                                    )}
                                                </ul>
                                            )}
                                        </li>
                                    )
                                )}
                            </ul>
                        </div>
                    </div>
                    <form
                        name="searchForm"
                        className="form minisearch"
                        id="search_mini_form"
                        action
                        method
                        onSubmit={(e) => handleSubmit(e)}
                    >
                        <label className="textfield__label" htmlFor="search">
                            Search entire store here...
                        </label>
                        <div className="input_wrapper">
                            <input
                                id="search"
                                type="text"
                                name="search"
                                value={searchText}
                                onChange={({ target }) =>
                                    setSearchText(target.value)
                                }
                                defaultValue=""
                                className="input-text textfield__input responsive_mobile_search"
                                maxLength={128}
                                placeholder="Search entire store here..."
                            />
                            <span className="input_group_adon">
                                <i className="fas fa-search"></i>
                            </span>
                        </div>
                        {searchData && searchText.length >= 3 && !loading ? (
                            searchData.length ? (
                                <div className="search-result">
                                    <div className="title-head">Products</div>
                                    {searchData.map(
                                        ({ image, price, name, url_key }) => {
                                            return (
                                                <>
                                                    <div
                                                        onClick={() =>
                                                            changeRoute(url_key)
                                                        }
                                                        className="product"
                                                    >
                                                        <img
                                                            src={
                                                                "https://elementvape.com/pub/media/catalog/product" +
                                                                image
                                                            }
                                                            alt=""
                                                        />
                                                        <p> {name}</p>
                                                        <div className="price">
                                                            <span>
                                                                ${price}
                                                            </span>
                                                        </div>{" "}
                                                    </div>
                                                    <hr />
                                                </>
                                            );
                                        }
                                    )}
                                    <button
                                        type="submit"
                                        className="view-all-link"
                                        onClick={(e) => handleSubmit(e)}
                                    >
                                        View All{" "}
                                        {searchCount
                                            ? `(${searchCount})`
                                            : null}
                                    </button>
                                </div>
                            ) : (
                                <div className="search-result">
                                    <div className="title-head">
                                        Your search returned no products
                                    </div>
                                </div>
                            )
                        ) : (
                            searchText.length >= 3 && (
                                <div className="search-result">
                                    <Skeleton count={3} height={60} />
                                </div>
                            )
                        )}
                    </form>
                </div>
            </div>
        </li>
    );
}
