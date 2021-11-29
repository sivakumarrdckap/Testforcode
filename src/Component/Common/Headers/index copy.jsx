import React from "react";
import { useHistory } from "react-router-dom";

function Headers() {
    let history = useHistory();
    return (
        <div>
            <header className="page-header header-style-08">
                <div className="header-top">
                    <div
                        data-content-type="row"
                        data-appearance="contained"
                        data-element="main"
                    >
                        <div
                            data-enable-parallax={0}
                            data-parallax-speed="0.5"
                            data-background-images="{}"
                            data-element="inner"
                            style={{
                                justifyContent: "flex-start",
                                display: "flex",
                                flexDirection: "column",
                                backgroundPosition: "left top",
                                backgroundSize: "cover",
                                backgroundRepeat: "no-repeat",
                                backgroundAttachment: "scroll",
                                borderStyle: "none",
                                borderWidth: "1px",
                                borderRadius: "0px",
                                margin: "0px 0px 10px",
                                padding: "10px",
                            }}
                        >
                            <div
                                data-content-type="html"
                                data-appearance="default"
                                data-element="main"
                                style={{
                                    borderStyle: "none",
                                    borderWidth: "1px",
                                    borderRadius: "0px",
                                    margin: "0px",
                                    padding: "0px",
                                }}
                                data-decoded="true"
                            >
                                <div className="header-warning-block">
                                    <p>
                                        WARNING: This product contains nicotine.
                                        Nicotine is an addictive chemical.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div
                        data-content-type="row"
                        data-appearance="contained"
                        data-element="main"
                    >
                        <div
                            data-enable-parallax={0}
                            data-parallax-speed="0.5"
                            data-background-images="{}"
                            data-element="inner"
                            style={{
                                justifyContent: "flex-start",
                                display: "flex",
                                flexDirection: "column",
                                backgroundPosition: "left top",
                                backgroundSize: "cover",
                                backgroundRepeat: "no-repeat",
                                backgroundAttachment: "scroll",
                                borderStyle: "none",
                                borderWidth: "1px",
                                borderRadius: "0px",
                                margin: "0px 0px 10px",
                                padding: "10px",
                            }}
                        />
                    </div>
                </div>
                <div className="container sticky-menu js-sticky-menu">
                    <div className="container panel wrapper">
                        <div className="panel header">
                            <ul className="header links visible-xs">
                                <li>
                                    <a>My Account</a>
                                </li>
                                <li
                                    className="authorization-link"
                                    data-label="or"
                                >
                                    <a>Sign In</a>
                                </li>
                                <li
                                    className="item link compare"
                                    data-bind="scope: 'compareProducts'"
                                    data-role="compare-products-link"
                                >
                                    <a
                                        href="/"
                                        className="action compare"
                                        title="Compare"
                                    >
                                        Compare
                                        {/* ko if: compareProducts().countCaption */}
                                        <span
                                            className="counter qty"
                                            data-bind="text: '(' + compareProducts().countCaption + ')'"
                                        />
                                        {/* /ko */}
                                    </a>
                                </li>
                                <li
                                    className="link rewards"
                                    data-bind="scope: 'rewards'"
                                >
                                    <a>
                                        Reward Points
                                        {/* ko if: rewards().amount */}
                                        <span
                                            data-bind="text: rewards().amount"
                                            className="counter amount"
                                        />
                                        {/* /ko */}
                                    </a>
                                </li>
                                <li>
                                    <a>Create an Account</a>
                                </li>
                                <li>
                                    <a>Contact Us</a>
                                </li>
                                <li
                                    className="greet welcome"
                                    data-bind="scope: 'customer'"
                                >
                                    {/* ko if: customer().fullname  */}
                                    <span
                                        className="logged-in"
                                        data-bind="text: new String('Welcome, %1!').replace('%1', customer().fullname)"
                                    ></span>
                                    {/* /ko */}
                                    {/* ko ifnot: customer().fullname  */}
                                    <span
                                        className="not-logged-in"
                                        data-bind='html:"Welcome to Element Vape!"'
                                    />
                                    {/* /ko */}
                                </li>
                            </ul>
                            <a className="action skip contentarea age-popup-skip skip-main-content">
                                <span>Skip to Content</span>
                            </a>
                            <a className="action skip contentarea">
                                <span>Skip to Navigation</span>
                            </a>
                            <div className="row cdz-fix-left container">
                                <div className="header-panel-left">
                                    <span
                                        data-action="toggle-nav"
                                        className="action nav-toggle"
                                    >
                                        <span>Toggle Nav</span>
                                    </span>
                                    <a className="logo" title="Element Vape">
                                        <img
                                            className="main-logo hidden-xs"
                                            src="https://www.elementvape.com/pub/media/logo/stores/1/logo_ev_02.png"
                                            alt="Element Vape"
                                        />
                                        <img
                                            className="small-logo visible-xs"
                                            src="https://www.elementvape.com/pub/media/logo/stores/1/logo_ev_02.png"
                                            alt="Element Vape"
                                        />
                                    </a>
                                </div>
                                <div className="col-sm-24 col-md-24 header-panel-right">
                                    <ul className="header features-links items hidden-xs">
                                        <li className="search-link">
                                            <button
                                                className="mdl-button mdl-js-button mdl-button--fab mdl-js-ripple-effect search-trigger"
                                                alt="Press enter to expand search box"
                                            >
                                                Search
                                            </button>
                                        </li>
                                        <li className="authorization-link authorization-style-01">
                                            <div className="cdz-dropdown account-wrapper">
                                                <a className="account-trigger cdz-dd-trigger cdz-top-link">
                                                    <span className="text-underlink">
                                                        <i
                                                            className="fa fa-user"
                                                            aria-hidden="true"
                                                        />
                                                    </span>
                                                    <span className="text-uppercase">
                                                        Your account
                                                    </span>
                                                </a>
                                            </div>
                                        </li>
                                        <li className="cart-link">
                                            <div
                                                data-block="minicart"
                                                className="minicart-wrapper"
                                                id="desk_cart-wrapper"
                                            >
                                                <div
                                                    className="cdz-dropdown"
                                                    data-role="cdz-dropdown"
                                                >
                                                    <a
                                                        data-role="cdz-dd-trigger"
                                                        className="action showcart cdz-dd-trigger cdz-top-link"
                                                        data-bind="scope: 'minicart_content'"
                                                        alt="My cart"
                                                    >
                                                        <span className="hide">
                                                            0
                                                        </span>
                                                        <span
                                                            className="counter qty empty"
                                                            data-bind="css: { empty: !!getCartParam('summary_count') == false }, blockLoader: isLoading"
                                                        >
                                                            <span className="counter-label">
                                                                {/* ko i18n: 'My cart' */}
                                                                {/* /ko */}
                                                            </span>
                                                            <span className="counter-number">
                                                                {/* ko text: getCartParam('summary_count') */}
                                                                {/* /ko */}
                                                            </span>
                                                            <span className="counter-label">
                                                                {/* ko i18n: 'items' */}
                                                                {/* /ko */}
                                                            </span>
                                                        </span>
                                                    </a>
                                                    <div
                                                        className="cdz-dd-content"
                                                        data-role="cdz-dd-content"
                                                    >
                                                        <div className="cdz-dd-content-inner">
                                                            <div
                                                                className="block block-minicart empty"
                                                                style={{
                                                                    height:
                                                                        "auto",
                                                                }}
                                                            >
                                                                <div
                                                                    id="minicart-content-wrapper"
                                                                    data-bind="scope: 'minicart_content'"
                                                                >
                                                                    {/* ko template: getTemplate() */}
                                                                    {/* /ko */}
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="linkslist-link">
                                            <div className="utilies-toggle-wrap hidden-xs">
                                                <button
                                                    className="mdl-button mdl-js-button mdl-button--fab mdl-js-ripple-effect toggle-btn"
                                                    data-sidebartrigger='{"side": "right", "section":"utilities-linkslist"}'
                                                >
                                                    <span className="hide">
                                                        Toggle
                                                    </span>
                                                </button>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                                <div
                                    id="header-search-container"
                                    className="col-sm-24 header-search-container"
                                >
                                    <div
                                        className="header-search no-full-box"
                                        data-role="search_container"
                                        data-mage-init='{"themewidgets":{"codazon.searchtoggle":{"onlyMobi":true},"codazon.fullsearchbox":{"enable":false}}}'
                                    >
                                        <div
                                            className="hidden-xs"
                                            data-role="search_form"
                                        >
                                            <form
                                                name="searchForm"
                                                className="form minisearch"
                                                id="search_mini_form"
                                                action="https://www.elementvape.com/catalogsearch/result/"
                                                method="get"
                                            >
                                                <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label relative_pos md-input-container">
                                                    <label
                                                        className="mdl-textfield__label"
                                                        htmlFor="search"
                                                        data-role="minisearch-label"
                                                    >
                                                        Search entire store
                                                        here...
                                                    </label>
                                                    <input
                                                        id="search"
                                                        data-mage-init='{"quickSearch":{
                        "formSelector":"#search_mini_form",
                        "url":"https://www.elementvape.com/search/ajax/suggest/",
                        "destinationSelector":"#search_autocomplete"}
                   }'
                                                        type="text"
                                                        name="q"
                                                        defaultValue
                                                        className="input-text mdl-textfield__input"
                                                        maxLength={128}
                                                        role="combobox"
                                                        aria-haspopup="false"
                                                        aria-autocomplete="both"
                                                        autoComplete="off"
                                                        aria-expanded="true"
                                                    />
                                                    <div
                                                        id="search_autocomplete"
                                                        className="search-autocomplete"
                                                    />
                                                </div>
                                                <div className="nested">
                                                    <a className="action advanced">
                                                        <span className="label">
                                                            Advanced Search
                                                        </span>
                                                    </a>
                                                </div>
                                                <div className="actions">
                                                    <button
                                                        type="submit"
                                                        title="Search"
                                                        className="action search mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect"
                                                    >
                                                        Search
                                                    </button>
                                                </div>
                                            </form>
                                        </div>
                                        <div className="visible-xs search-toggle-wrap">
                                            <button
                                                className="search-toggle mdl-js-button mdl-button--fab mdl-js-ripple-effect"
                                                data-role="search_toggle"
                                            >
                                                <span className="icon">
                                                    Search
                                                </span>
                                            </button>
                                        </div>
                                    </div>
                                    <div
                                        id="mobi_cart-wrapper"
                                        className="visible-xs pos_static mobi-cart-wrapper"
                                    />
                                </div>
                            </div>
                            <div className="header-panel-middle">
                                <div
                                    id="desk_menu-container"
                                    className="hidden-xs pos_static"
                                >
                                    <nav
                                        className="cdz-navigation desktop-view-menu"
                                        data-action="navigation"
                                    >
                                        <div
                                            className="cdz-menu no-loaded cdz-horizontal-menu dropdown-fullwidth evp-menu cdz-normal"
                                            id="menu-22-5fbe4664f1f84"
                                            data-mage-init='{"megamenu":{"dropdownEffect":"normal","type":0,"useAjaxMenu":0,"menu":"element-vape-menu","ajaxUrl":"https:\/\/www.elementvape.com\/megamenu\/index\/ajax"}}'
                                        >
                                            <ul className="groupmenu">
                                                <li
                                                    onClick={() =>
                                                        history.push("/plp/22")
                                                    }
                                                    className="item level0 evp-new-arrivals level-top"
                                                >
                                                    <a className="menu-link">
                                                        <i className="menu-icon img-icon">
                                                            <img
                                                                src="https://www.elementvape.com/pub/media/Dckap/menu-level1/Mobile_Menu_Category_NEW_ARRIVALS_70x62.png"
                                                                alt="https://www.elementvape.com/pub/media/Dckap/menu-level1/Mobile_Menu_Category_NEW_ARRIVALS_70x62.png"
                                                            />
                                                        </i>
                                                        <span>NEW</span>
                                                    </a>
                                                </li>
                                                <li className="item level0 level-top parent">
                                                    <a
                                                        className="menu-link"
                                                        onClick={() =>
                                                            history.push(
                                                                "/plp/53"
                                                            )
                                                        }
                                                    >
                                                        <i className="menu-icon img-icon">
                                                            <img
                                                                src="https://www.elementvape.com/pub/media/Dckap/menu-level1/Mobile_Menu_Category_BRANDS_70x62.png"
                                                                alt="https://www.elementvape.com/pub/media/Dckap/menu-level1/Mobile_Menu_Category_BRANDS_70x62.png"
                                                            />
                                                        </i>
                                                        <span>BRANDS</span>
                                                    </a>
                                                    <ul className="groupmenu-drop">
                                                        <li className="item level1 evp-brands text-content">
                                                            <div
                                                                className="evp-brands groupmenu-drop-content groupmenu-width-18"
                                                                style={{}}
                                                            >
                                                                <div className="row">
                                                                    <div className="col-sm-4">
                                                                        <h3>
                                                                            DEVICE
                                                                            BRANDS
                                                                        </h3>
                                                                        <ul className="sub-menu">
                                                                            <li
                                                                                onClick={() =>
                                                                                    history.push(
                                                                                        "/plp/103"
                                                                                    )
                                                                                }
                                                                            >
                                                                                <span className="mega-menu-sub-title">
                                                                                    SMOKTech
                                                                                </span>
                                                                            </li>
                                                                            <li
                                                                                onClick={() =>
                                                                                    history.push(
                                                                                        "/plp/339"
                                                                                    )
                                                                                }
                                                                            >
                                                                                <span className="mega-menu-sub-title">
                                                                                    VOOPOO
                                                                                </span>
                                                                            </li>
                                                                            <li
                                                                                onClick={() =>
                                                                                    history.push(
                                                                                        "/plp/155"
                                                                                    )
                                                                                }
                                                                            >
                                                                                <span className="mega-menu-sub-title">
                                                                                    Geek
                                                                                    Vape
                                                                                </span>
                                                                            </li>
                                                                            <li
                                                                                onClick={() =>
                                                                                    history.push(
                                                                                        "/plp/54"
                                                                                    )
                                                                                }
                                                                            >
                                                                                <span className="mega-menu-sub-title">
                                                                                    Innokin
                                                                                </span>
                                                                            </li>
                                                                            <li
                                                                                onClick={() =>
                                                                                    history.push(
                                                                                        "/plp/61"
                                                                                    )
                                                                                }
                                                                            >
                                                                                <span className="mega-menu-sub-title">
                                                                                    Joyetech
                                                                                </span>
                                                                            </li>
                                                                            <li
                                                                                onClick={() =>
                                                                                    history.push(
                                                                                        "/plp/60"
                                                                                    )
                                                                                }
                                                                            >
                                                                                <span className="mega-menu-sub-title">
                                                                                    Eleaf
                                                                                </span>
                                                                            </li>
                                                                            <li
                                                                                onClick={() =>
                                                                                    history.push(
                                                                                        "/plp/129"
                                                                                    )
                                                                                }
                                                                            >
                                                                                <span className="mega-menu-sub-title">
                                                                                    Wismec
                                                                                </span>
                                                                            </li>
                                                                            <li
                                                                                onClick={() =>
                                                                                    history.push(
                                                                                        "/plp/305"
                                                                                    )
                                                                                }
                                                                            >
                                                                                <span className="mega-menu-sub-title">
                                                                                    Suorin
                                                                                </span>
                                                                            </li>
                                                                            <li
                                                                                onClick={() =>
                                                                                    history.push(
                                                                                        "/plp/135"
                                                                                    )
                                                                                }
                                                                            >
                                                                                <span className="mega-menu-sub-title">
                                                                                    Lost
                                                                                    Vape
                                                                                </span>
                                                                            </li>
                                                                            <li
                                                                                onClick={() =>
                                                                                    history.push(
                                                                                        "/plp/495"
                                                                                    )
                                                                                }
                                                                            >
                                                                                <span className="mega-menu-sub-title">
                                                                                    Rincoe
                                                                                </span>
                                                                            </li>
                                                                        </ul>
                                                                    </div>
                                                                    <div className="col-sm-4">
                                                                        <ul className="sub-menu">
                                                                            <li
                                                                                onClick={() =>
                                                                                    history.push(
                                                                                        "/plp/57"
                                                                                    )
                                                                                }
                                                                            >
                                                                                <span className="mega-menu-sub-title">
                                                                                    Aspire
                                                                                    Vape
                                                                                </span>
                                                                            </li>
                                                                            <li
                                                                                onClick={() =>
                                                                                    history.push(
                                                                                        "/plp/281"
                                                                                    )
                                                                                }
                                                                            >
                                                                                <span className="mega-menu-sub-title">
                                                                                    Vandy
                                                                                    Vape
                                                                                </span>
                                                                            </li>
                                                                            <li
                                                                                onClick={() =>
                                                                                    history.push(
                                                                                        "/plp/158"
                                                                                    )
                                                                                }
                                                                            >
                                                                                <span className="mega-menu-sub-title">
                                                                                    Vaporesso
                                                                                </span>
                                                                            </li>
                                                                            <li
                                                                                onClick={() =>
                                                                                    history.push(
                                                                                        "/plp/62"
                                                                                    )
                                                                                }
                                                                            >
                                                                                <span className="mega-menu-sub-title">
                                                                                    Sigelei
                                                                                </span>
                                                                            </li>
                                                                            <li
                                                                                onClick={() =>
                                                                                    history.push(
                                                                                        "/plp/336"
                                                                                    )
                                                                                }
                                                                            >
                                                                                <span className="mega-menu-sub-title">
                                                                                    SnowWolf
                                                                                </span>
                                                                            </li>
                                                                            <li
                                                                                onClick={() =>
                                                                                    history.push(
                                                                                        "/plp/183"
                                                                                    )
                                                                                }
                                                                            >
                                                                                <span className="mega-menu-sub-title">
                                                                                    iJoy
                                                                                </span>
                                                                            </li>
                                                                            <li
                                                                                onClick={() =>
                                                                                    history.push(
                                                                                        "/plp/335"
                                                                                    )
                                                                                }
                                                                            >
                                                                                <span className="mega-menu-sub-title">
                                                                                    HellVape
                                                                                </span>
                                                                            </li>
                                                                            <li
                                                                                onClick={() =>
                                                                                    history.push(
                                                                                        "/plp/98"
                                                                                    )
                                                                                }
                                                                            >
                                                                                <span className="mega-menu-sub-title">
                                                                                    Uwell
                                                                                </span>
                                                                            </li>
                                                                            <li
                                                                                onClick={() =>
                                                                                    history.push(
                                                                                        "/plp/73"
                                                                                    )
                                                                                }
                                                                            >
                                                                                <span className="mega-menu-sub-title">
                                                                                    Wotofo
                                                                                </span>
                                                                            </li>
                                                                            <li
                                                                                className="view-all"
                                                                                onClick={() =>
                                                                                    history.push(
                                                                                        "/plp/53"
                                                                                    )
                                                                                }
                                                                            >
                                                                                <span className="mega-menu-sub-title">
                                                                                    View
                                                                                    All
                                                                                    Brands
                                                                                </span>
                                                                            </li>
                                                                        </ul>
                                                                    </div>
                                                                    <div className="col-sm-4">
                                                                        <h3>
                                                                            E-JUICE
                                                                            BRANDS
                                                                        </h3>
                                                                        <ul
                                                                            className="sub-menu"
                                                                            style={{
                                                                                textAlign:
                                                                                    "left",
                                                                            }}
                                                                        >
                                                                            <li
                                                                                onClick={() =>
                                                                                    history.push(
                                                                                        "/plp/226"
                                                                                    )
                                                                                }
                                                                            >
                                                                                <span className="mega-menu-sub-title">
                                                                                    SUA
                                                                                    Vapors
                                                                                </span>
                                                                            </li>
                                                                            <li
                                                                                onClick={() =>
                                                                                    history.push(
                                                                                        "/plp/265"
                                                                                    )
                                                                                }
                                                                            >
                                                                                <span className="mega-menu-sub-title">
                                                                                    Naked
                                                                                    100
                                                                                </span>
                                                                            </li>
                                                                            <li
                                                                                onClick={() =>
                                                                                    history.push(
                                                                                        "/plp/525"
                                                                                    )
                                                                                }
                                                                            >
                                                                                <span className="mega-menu-sub-title">
                                                                                    Finest
                                                                                    E-Liquid
                                                                                </span>
                                                                            </li>
                                                                            <li
                                                                                onClick={() =>
                                                                                    history.push(
                                                                                        "/plp/104"
                                                                                    )
                                                                                }
                                                                            >
                                                                                <span className="mega-menu-sub-title">
                                                                                    Charlie’s
                                                                                    Chalk
                                                                                    Dust
                                                                                </span>
                                                                            </li>
                                                                            <li
                                                                                onClick={() =>
                                                                                    history.push(
                                                                                        "/plp/50"
                                                                                    )
                                                                                }
                                                                            >
                                                                                <span className="mega-menu-sub-title">
                                                                                    Cosmic
                                                                                    Fog
                                                                                </span>
                                                                            </li>
                                                                            <li
                                                                                onClick={() =>
                                                                                    history.push(
                                                                                        "/plp/227"
                                                                                    )
                                                                                }
                                                                            >
                                                                                Vapetasia
                                                                            </li>
                                                                            <li
                                                                                onClick={() =>
                                                                                    history.push(
                                                                                        "/plp/627"
                                                                                    )
                                                                                }
                                                                            >
                                                                                Sadboy
                                                                                E-Liquid
                                                                            </li>
                                                                            <li
                                                                                onClick={() =>
                                                                                    history.push(
                                                                                        "/plp/76"
                                                                                    )
                                                                                }
                                                                            >
                                                                                <span className="mega-menu-sub-title">
                                                                                    KILO
                                                                                    E-Liquid
                                                                                </span>
                                                                            </li>
                                                                            <li
                                                                                onClick={() =>
                                                                                    history.push(
                                                                                        "/plp/145"
                                                                                    )
                                                                                }
                                                                            >
                                                                                <span className="mega-menu-sub-title">
                                                                                    Mad
                                                                                    Hatter
                                                                                    Juice
                                                                                </span>
                                                                            </li>
                                                                            <li
                                                                                onClick={() =>
                                                                                    history.push(
                                                                                        "/plp/404"
                                                                                    )
                                                                                }
                                                                            >
                                                                                <span className="mega-menu-sub-title">
                                                                                    Humble
                                                                                    Juice
                                                                                    Co.
                                                                                </span>
                                                                            </li>
                                                                        </ul>
                                                                    </div>
                                                                    <div className="col-sm-4">
                                                                        <ul
                                                                            className="sub-menu"
                                                                            style={{
                                                                                textAlign:
                                                                                    "left",
                                                                            }}
                                                                        >
                                                                            <li
                                                                                onClick={() =>
                                                                                    history.push(
                                                                                        "/plp/525"
                                                                                    )
                                                                                }
                                                                            >
                                                                                <span className="mega-menu-sub-title">
                                                                                    Finest
                                                                                    E-Liquid
                                                                                </span>
                                                                            </li>
                                                                            <li
                                                                                onClick={() =>
                                                                                    history.push(
                                                                                        "/plp/145"
                                                                                    )
                                                                                }
                                                                            >
                                                                                <span className="mega-menu-sub-title">
                                                                                    Mad
                                                                                    Hatter
                                                                                    Juice
                                                                                </span>
                                                                            </li>
                                                                            <li
                                                                                onClick={() =>
                                                                                    history.push(
                                                                                        "/plp/291"
                                                                                    )
                                                                                }
                                                                            >
                                                                                <span className="mega-menu-sub-title">
                                                                                    SKWEZED
                                                                                </span>
                                                                            </li>
                                                                            <li
                                                                                onClick={() =>
                                                                                    history.push(
                                                                                        "/plp/60"
                                                                                    )
                                                                                }
                                                                            >
                                                                                <span className="mega-menu-sub-title">
                                                                                    Shinjin
                                                                                    Vapor
                                                                                </span>
                                                                            </li>
                                                                            <li
                                                                                onClick={() =>
                                                                                    history.push(
                                                                                        "/plp/364"
                                                                                    )
                                                                                }
                                                                            >
                                                                                <span className="mega-menu-sub-title">
                                                                                    TWIST
                                                                                    E-Liquid
                                                                                </span>
                                                                            </li>
                                                                            <li
                                                                                onClick={() =>
                                                                                    history.push(
                                                                                        "/plp/444"
                                                                                    )
                                                                                }
                                                                            >
                                                                                I
                                                                                Love
                                                                                Salts
                                                                            </li>
                                                                            <li
                                                                                onClick={() =>
                                                                                    history.push(
                                                                                        "/plp/420"
                                                                                    )
                                                                                }
                                                                            >
                                                                                <span className="mega-menu-sub-title">
                                                                                    SOLACE
                                                                                    Vapor
                                                                                </span>
                                                                            </li>
                                                                            <li
                                                                                onClick={() =>
                                                                                    history.push(
                                                                                        "/plp/588"
                                                                                    )
                                                                                }
                                                                            >
                                                                                <span className="mega-menu-sub-title">
                                                                                    GOST
                                                                                    Vapor
                                                                                </span>
                                                                            </li>
                                                                            <li
                                                                                onClick={() =>
                                                                                    history.push(
                                                                                        "/plp/298"
                                                                                    )
                                                                                }
                                                                            >
                                                                                <span className="mega-menu-sub-title">
                                                                                    BLVK
                                                                                    Unicorn
                                                                                </span>
                                                                            </li>
                                                                            <li
                                                                                onClick={() =>
                                                                                    history.push(
                                                                                        "/plp/53"
                                                                                    )
                                                                                }
                                                                            >
                                                                                <span className="mega-menu-sub-title">
                                                                                    View
                                                                                    All
                                                                                    Brands
                                                                                </span>
                                                                            </li>
                                                                        </ul>
                                                                        <div
                                                                            id="gtx-trans"
                                                                            style={{
                                                                                position:
                                                                                    "absolute",
                                                                                left:
                                                                                    "23px",
                                                                                top:
                                                                                    "121.66px",
                                                                            }}
                                                                        >
                                                                            <div className="gtx-trans-icon">
                                                                                &nbsp;
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-sm-8">
                                                                        <div className="menu-img-bloc">
                                                                            <a
                                                                                onClick={() =>
                                                                                    history.push(
                                                                                        "/plp/158"
                                                                                    )
                                                                                }
                                                                            >
                                                                                <img
                                                                                    src="https://www.elementvape.com/pub/media/wysiwyg/STARTER_KIT_-_Vaporess.jpg"
                                                                                    alt="Vaporess"
                                                                                />
                                                                                <p>
                                                                                    Vaporesso
                                                                                </p>
                                                                            </a>
                                                                            <a
                                                                                onClick={() =>
                                                                                    history.push(
                                                                                        "/plp/336"
                                                                                    )
                                                                                }
                                                                            >
                                                                                <img
                                                                                    src="https://www.elementvape.com/pub/media/wysiwyg/STARTER_KIT_-_SnowWolf.jpg"
                                                                                    alt="SnowWolf"
                                                                                />
                                                                                <p>
                                                                                    SnowWolf
                                                                                </p>
                                                                            </a>
                                                                            <a
                                                                                onClick={() =>
                                                                                    history.push(
                                                                                        "/plp/457"
                                                                                    )
                                                                                }
                                                                            >
                                                                                <img
                                                                                    src="https://www.elementvape.com/pub/media/wysiwyg/STARTER_KIT_-_SMOK.jpg"
                                                                                    alt="SMOK"
                                                                                />
                                                                                <p>
                                                                                    SMOK
                                                                                </p>
                                                                            </a>
                                                                            <a
                                                                                onClick={() =>
                                                                                    history.push(
                                                                                        "/plp/155"
                                                                                    )
                                                                                }
                                                                            >
                                                                                <img
                                                                                    src="https://www.elementvape.com/pub/media/wysiwyg/STARTER_KIT_-_Geek_Vape.jpg"
                                                                                    alt="Geek Vape"
                                                                                />
                                                                                <p>
                                                                                    Geek
                                                                                    Vape
                                                                                </p>
                                                                            </a>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </li>
                                                    </ul>
                                                </li>
                                                <li className="item level0 level-top parent">
                                                    <a
                                                        onClick={() =>
                                                            history.push(
                                                                "/plp/16"
                                                            )
                                                        }
                                                        className="menu-link"
                                                    >
                                                        <i className="menu-icon img-icon">
                                                            <img
                                                                src="https://www.elementvape.com/pub/media/Dckap/menu-level1/Mobile_Menu_Category_STARTER_KITS_70x62.png"
                                                                alt="https://www.elementvape.com/pub/media/Dckap/menu-level1/Mobile_Menu_Category_STARTER_KITS_70x62.png"
                                                            />
                                                        </i>
                                                        <span>
                                                            STARTER KITS
                                                        </span>
                                                    </a>
                                                    <ul className="groupmenu-drop">
                                                        <li className="item level1 text-content">
                                                            <div
                                                                className="groupmenu-drop-content groupmenu-width-18"
                                                                style={{}}
                                                            >
                                                                <div className="row">
                                                                    <div className="col-sm-6">
                                                                        <ul>
                                                                            <li
                                                                                className="view-all"
                                                                                onClick={() =>
                                                                                    history.push(
                                                                                        "/plp/16"
                                                                                    )
                                                                                }
                                                                            >
                                                                                <span
                                                                                    style={{
                                                                                        fontSize:
                                                                                            "14px",
                                                                                    }}
                                                                                >
                                                                                    <img
                                                                                        src="https://www.elementvape.com/pub/media/subcategory_icons/All_Starter_Kit.jpg"
                                                                                        alt="View All Starter Kit"
                                                                                        width={
                                                                                            50
                                                                                        }
                                                                                        height={
                                                                                            50
                                                                                        }
                                                                                    />
                                                                                    View
                                                                                    All
                                                                                    Starter
                                                                                    Kit
                                                                                </span>
                                                                            </li>
                                                                            <li
                                                                                onClick={() =>
                                                                                    history.push(
                                                                                        "/plp/309"
                                                                                    )
                                                                                }
                                                                            >
                                                                                <span
                                                                                    style={{
                                                                                        fontSize:
                                                                                            "14px",
                                                                                    }}
                                                                                >
                                                                                    <img
                                                                                        src="https://www.elementvape.com/pub/media/subcategory_icons/Box_Mod_Kit.jpg"
                                                                                        alt="Box Mod Kit"
                                                                                        width={
                                                                                            50
                                                                                        }
                                                                                        height={
                                                                                            50
                                                                                        }
                                                                                    />
                                                                                    Box
                                                                                    Mod
                                                                                    Kits
                                                                                </span>
                                                                            </li>
                                                                            <li
                                                                                onClick={() =>
                                                                                    history.push(
                                                                                        "/plp/238"
                                                                                    )
                                                                                }
                                                                            >
                                                                                <span
                                                                                    style={{
                                                                                        fontSize:
                                                                                            "14px",
                                                                                    }}
                                                                                >
                                                                                    <img
                                                                                        src="https://www.elementvape.com/pub/media/subcategory_icons/Pod_Systems.jpg"
                                                                                        alt="Pod Systems"
                                                                                        width={
                                                                                            50
                                                                                        }
                                                                                        height={
                                                                                            50
                                                                                        }
                                                                                    />
                                                                                    Pod
                                                                                    Systems
                                                                                </span>
                                                                            </li>
                                                                            <li
                                                                                onClick={() =>
                                                                                    history.push(
                                                                                        "/plp/680"
                                                                                    )
                                                                                }
                                                                            >
                                                                                <span
                                                                                    style={{
                                                                                        fontSize:
                                                                                            "14px",
                                                                                    }}
                                                                                >
                                                                                    <img
                                                                                        src="https://www.elementvape.com/pub/media/subcategory_icons/Pod_Mod.jpg"
                                                                                        alt="Pod Systems"
                                                                                        width={
                                                                                            50
                                                                                        }
                                                                                        height={
                                                                                            50
                                                                                        }
                                                                                    />
                                                                                    Pod
                                                                                    Mod&nbsp;Systems
                                                                                </span>
                                                                            </li>
                                                                            <li
                                                                                onClick={() =>
                                                                                    history.push(
                                                                                        "/plp/307"
                                                                                    )
                                                                                }
                                                                            >
                                                                                <span
                                                                                    style={{
                                                                                        fontSize:
                                                                                            "14px",
                                                                                    }}
                                                                                >
                                                                                    <img
                                                                                        src="https://www.elementvape.com/pub/media/subcategory_icons/All-In-One.jpg"
                                                                                        alt="All-In-One Systems"
                                                                                        width={
                                                                                            50
                                                                                        }
                                                                                    />
                                                                                    All-In-One
                                                                                    Systems
                                                                                </span>
                                                                            </li>
                                                                            <li
                                                                                onClick={() =>
                                                                                    history.push(
                                                                                        "/plp/308"
                                                                                    )
                                                                                }
                                                                            >
                                                                                <span
                                                                                    style={{
                                                                                        fontSize:
                                                                                            "14px",
                                                                                    }}
                                                                                >
                                                                                    <img
                                                                                        src="https://www.elementvape.com/pub/media/subcategory_icons/Vape_Pen.jpg"
                                                                                        alt="Vape Pen Kits"
                                                                                        width={
                                                                                            50
                                                                                        }
                                                                                    />
                                                                                    Vape
                                                                                    Pen
                                                                                    Kits
                                                                                </span>
                                                                            </li>
                                                                            <li
                                                                                onClick={() =>
                                                                                    history.push(
                                                                                        "/plp/399"
                                                                                    )
                                                                                }
                                                                            >
                                                                                <span
                                                                                    style={{
                                                                                        fontSize:
                                                                                            "14px",
                                                                                    }}
                                                                                >
                                                                                    <img
                                                                                        src="https://www.elementvape.com/pub/media/subcategory_icons/Squonk_Kits.jpg"
                                                                                        alt="Squonk Kits"
                                                                                        width={
                                                                                            50
                                                                                        }
                                                                                    />
                                                                                    Squonk
                                                                                    Kits
                                                                                </span>
                                                                            </li>
                                                                            <li
                                                                                onClick={() =>
                                                                                    history.push(
                                                                                        "/plp/310"
                                                                                    )
                                                                                }
                                                                            >
                                                                                <span
                                                                                    style={{
                                                                                        fontSize:
                                                                                            "14px",
                                                                                    }}
                                                                                >
                                                                                    <img
                                                                                        src="https://www.elementvape.com/pub/media/subcategory_icons/High-Power_Kits.jpg"
                                                                                        alt="High-Power Kits"
                                                                                        width={
                                                                                            50
                                                                                        }
                                                                                    />
                                                                                    High
                                                                                    Power
                                                                                    Kits
                                                                                    150W+
                                                                                </span>
                                                                            </li>
                                                                            <li
                                                                                onClick={() =>
                                                                                    history.push(
                                                                                        "/plp/465"
                                                                                    )
                                                                                }
                                                                            >
                                                                                <span
                                                                                    style={{
                                                                                        fontSize:
                                                                                            "14px",
                                                                                    }}
                                                                                >
                                                                                    <img
                                                                                        src="https://www.elementvape.com/pub/media/subcategory_icons/Disposable_E-Cigs.jpg"
                                                                                        alt="Disposable E-Cigs"
                                                                                        width={
                                                                                            50
                                                                                        }
                                                                                        height={
                                                                                            50
                                                                                        }
                                                                                    />
                                                                                    Disposable
                                                                                    E-Cigs
                                                                                </span>
                                                                            </li>
                                                                            <li
                                                                                onClick={() =>
                                                                                    history.push(
                                                                                        "/plp/324"
                                                                                    )
                                                                                }
                                                                            >
                                                                                <span
                                                                                    style={{
                                                                                        fontSize:
                                                                                            "14px",
                                                                                    }}
                                                                                >
                                                                                    <img
                                                                                        src="https://www.elementvape.com/pub/media/subcategory_icons/Clearance_Vape_Kits.jpg"
                                                                                        alt="Clearance Vape Kits"
                                                                                        width={
                                                                                            50
                                                                                        }
                                                                                        height={
                                                                                            50
                                                                                        }
                                                                                    />
                                                                                    Clearance
                                                                                    Vape
                                                                                    Kits
                                                                                </span>
                                                                            </li>
                                                                        </ul>
                                                                    </div>
                                                                    <div className="col-sm-6">
                                                                        <h3>
                                                                            Starter
                                                                            Kit
                                                                            Brands
                                                                        </h3>
                                                                        <ul>
                                                                            <li
                                                                                onClick={() =>
                                                                                    history.push(
                                                                                        "/plp/103"
                                                                                    )
                                                                                }
                                                                            >
                                                                                SMOKTech
                                                                            </li>
                                                                            <li
                                                                                onClick={() =>
                                                                                    history.push(
                                                                                        "/plp/155"
                                                                                    )
                                                                                }
                                                                            >
                                                                                Geek
                                                                                Vape
                                                                            </li>
                                                                            <li
                                                                                onClick={() =>
                                                                                    history.push(
                                                                                        "/plp/339"
                                                                                    )
                                                                                }
                                                                            >
                                                                                VOOPOO
                                                                            </li>
                                                                            <li
                                                                                onClick={() =>
                                                                                    history.push(
                                                                                        "/plp/54"
                                                                                    )
                                                                                }
                                                                            >
                                                                                Innokin
                                                                            </li>
                                                                            <li
                                                                                onClick={() =>
                                                                                    history.push(
                                                                                        "/plp/158"
                                                                                    )
                                                                                }
                                                                            >
                                                                                Vaporesso
                                                                            </li>
                                                                            <li
                                                                                onClick={() =>
                                                                                    history.push(
                                                                                        "/plp/129"
                                                                                    )
                                                                                }
                                                                            >
                                                                                Wismec
                                                                            </li>
                                                                            <li
                                                                                onClick={() =>
                                                                                    history.push(
                                                                                        "/plp/336"
                                                                                    )
                                                                                }
                                                                            >
                                                                                SnowWolf
                                                                            </li>
                                                                            <li
                                                                                onClick={() =>
                                                                                    history.push(
                                                                                        "/plp/98"
                                                                                    )
                                                                                }
                                                                            >
                                                                                UWELL
                                                                            </li>
                                                                            <li
                                                                                onClick={() =>
                                                                                    history.push(
                                                                                        "/plp/62"
                                                                                    )
                                                                                }
                                                                            >
                                                                                Sigelei
                                                                            </li>
                                                                            <li
                                                                                onClick={() =>
                                                                                    history.push(
                                                                                        "/plp/61"
                                                                                    )
                                                                                }
                                                                            >
                                                                                Joyetech
                                                                            </li>
                                                                        </ul>
                                                                    </div>
                                                                    <div className="col-sm-12">
                                                                        <div className="menu-img-bloc">
                                                                            <a
                                                                                onClick={() =>
                                                                                    history.push(
                                                                                        "/plp/158"
                                                                                    )
                                                                                }
                                                                            >
                                                                                <img
                                                                                    src="https://www.elementvape.com/pub/media/wysiwyg/STARTER_KIT_-_Vaporess.jpg"
                                                                                    alt="Vaporesso"
                                                                                />
                                                                                <p>
                                                                                    Vaporesso
                                                                                </p>
                                                                            </a>
                                                                            <a
                                                                                onClick={() =>
                                                                                    history.push(
                                                                                        "/plp/336"
                                                                                    )
                                                                                }
                                                                            >
                                                                                <img
                                                                                    src="https://www.elementvape.com/pub/media/wysiwyg/STARTER_KIT_-_SnowWolf.jpg"
                                                                                    alt="SnowWolf"
                                                                                />
                                                                                <p>
                                                                                    SnowWolf
                                                                                </p>
                                                                            </a>
                                                                            <a
                                                                                onClick={() =>
                                                                                    history.push(
                                                                                        "/plp/377"
                                                                                    )
                                                                                }
                                                                            >
                                                                                <img
                                                                                    src="https://www.elementvape.com/pub/media/wysiwyg/STARTER_KIT_-_SMOK.jpg"
                                                                                    alt="SMOK"
                                                                                />
                                                                                <p>
                                                                                    SMOK
                                                                                </p>
                                                                            </a>
                                                                            <a
                                                                                onClick={() =>
                                                                                    history.push(
                                                                                        "/plp/155"
                                                                                    )
                                                                                }
                                                                            >
                                                                                <img
                                                                                    src="https://www.elementvape.com/pub/media/wysiwyg/STARTER_KIT_-_Geek_Vape.jpg"
                                                                                    alt="Geek Vape"
                                                                                />
                                                                                <p>
                                                                                    Geek
                                                                                    Vape
                                                                                </p>
                                                                            </a>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </li>
                                                    </ul>
                                                </li>
                                                <li className="item level0 level-top parent">
                                                    <a className="menu-link">
                                                        <i
                                                            className="menu-icon img-icon"
                                                            onClick={() =>
                                                                history.push(
                                                                    "/plp/4"
                                                                )
                                                            }
                                                        >
                                                            <img
                                                                src="https://www.elementvape.com/pub/media/Dckap/menu-level1/Mobile_Menu_Category_DEVICES_70x62.png"
                                                                alt="https://www.elementvape.com/pub/media/Dckap/menu-level1/Mobile_Menu_Category_DEVICES_70x62.png"
                                                            />
                                                        </i>
                                                        <span>DEVICES</span>
                                                    </a>
                                                    <ul className="groupmenu-drop">
                                                        <li className="item level1 text-content">
                                                            <div
                                                                className="groupmenu-drop-content groupmenu-width-18"
                                                                style={{}}
                                                            >
                                                                <div className="row">
                                                                    <div className="col-sm-6">
                                                                        <ul>
                                                                            <li
                                                                                className="view-all"
                                                                                onClick={() =>
                                                                                    history.push(
                                                                                        "/plp/48"
                                                                                    )
                                                                                }
                                                                            >
                                                                                <img
                                                                                    src="https://www.elementvape.com/pub/media/subcategory_icons/All_Box_Mods.jpg"
                                                                                    alt="All Box Mods"
                                                                                    width={
                                                                                        50
                                                                                    }
                                                                                    height={
                                                                                        50
                                                                                    }
                                                                                />
                                                                                All
                                                                                Box
                                                                                Mods
                                                                            </li>
                                                                            <li
                                                                                onClick={() =>
                                                                                    history.push(
                                                                                        "/plp/362"
                                                                                    )
                                                                                }
                                                                            >
                                                                                <img
                                                                                    src="https://www.elementvape.com/pub/media/subcategory_icons/Squonk_Box_Mod.jpg"
                                                                                    alt="Squonk Mods"
                                                                                    width={
                                                                                        50
                                                                                    }
                                                                                    height={
                                                                                        50
                                                                                    }
                                                                                />
                                                                                Squonk
                                                                                Mods
                                                                            </li>
                                                                            <li
                                                                                onClick={() =>
                                                                                    history.push(
                                                                                        "/plp/313"
                                                                                    )
                                                                                }
                                                                            >
                                                                                <img
                                                                                    src="https://www.elementvape.com/pub/media/subcategory_icons/High-End_Mod.jpg"
                                                                                    alt="High-End Mods"
                                                                                    width={
                                                                                        50
                                                                                    }
                                                                                    height={
                                                                                        50
                                                                                    }
                                                                                />
                                                                                High-End
                                                                                Mods
                                                                            </li>
                                                                            <li
                                                                                onClick={() =>
                                                                                    history.push(
                                                                                        "/plp/84"
                                                                                    )
                                                                                }
                                                                            >
                                                                                <img
                                                                                    src="https://www.elementvape.com/pub/media/subcategory_icons/Temperature_Control_Mod.jpg"
                                                                                    alt="Temperature Control"
                                                                                    width={
                                                                                        50
                                                                                    }
                                                                                    height={
                                                                                        50
                                                                                    }
                                                                                />
                                                                                Temperature
                                                                                Control
                                                                            </li>
                                                                            <li
                                                                                onClick={() =>
                                                                                    history.push(
                                                                                        "/plp/312"
                                                                                    )
                                                                                }
                                                                            >
                                                                                <img
                                                                                    src="https://www.elementvape.com/pub/media/subcategory_icons/Built-In_Battery_Mods.jpg"
                                                                                    alt="Built-In Battery Mods"
                                                                                    width={
                                                                                        50
                                                                                    }
                                                                                    height={
                                                                                        50
                                                                                    }
                                                                                />
                                                                                Built-In
                                                                                Battery
                                                                                Mods
                                                                            </li>
                                                                            <li
                                                                                onClick={() =>
                                                                                    history.push(
                                                                                        "/plp/333"
                                                                                    )
                                                                                }
                                                                            >
                                                                                <img
                                                                                    src="https://www.elementvape.com/pub/media/subcategory_icons/LED_Light-Up_Mod.jpg"
                                                                                    alt="Light-Up LED Mods"
                                                                                    width={
                                                                                        50
                                                                                    }
                                                                                    height={
                                                                                        50
                                                                                    }
                                                                                />
                                                                                Light-Up
                                                                                LED
                                                                                Mods
                                                                            </li>
                                                                            <li
                                                                                onClick={() =>
                                                                                    history.push(
                                                                                        "/plp/173"
                                                                                    )
                                                                                }
                                                                            >
                                                                                <img
                                                                                    src="https://www.elementvape.com/pub/media/subcategory_icons/Touch_Screen_Box_Mod.jpg"
                                                                                    alt="Touch Screen Mods"
                                                                                    width={
                                                                                        50
                                                                                    }
                                                                                    height={
                                                                                        50
                                                                                    }
                                                                                />
                                                                                Touch
                                                                                Screen
                                                                                Mods
                                                                            </li>
                                                                            <li
                                                                                onClick={() =>
                                                                                    history.push(
                                                                                        "/plp/260"
                                                                                    )
                                                                                }
                                                                            >
                                                                                <img
                                                                                    src="https://www.elementvape.com/pub/media/subcategory_icons/DNA_Chip_Box_Mods.jpg"
                                                                                    alt="DNA Chip Box Mods"
                                                                                    width={
                                                                                        50
                                                                                    }
                                                                                    height={
                                                                                        50
                                                                                    }
                                                                                />
                                                                                DNA
                                                                                Chip
                                                                                Box
                                                                                Mods
                                                                            </li>
                                                                            <li
                                                                                onClick={() =>
                                                                                    history.push(
                                                                                        "/plp/314"
                                                                                    )
                                                                                }
                                                                            >
                                                                                <img
                                                                                    src="https://www.elementvape.com/pub/media/subcategory_icons/High-Power_Mod.jpg"
                                                                                    alt="High Power Mods 150W+"
                                                                                    width={
                                                                                        50
                                                                                    }
                                                                                    height={
                                                                                        50
                                                                                    }
                                                                                />
                                                                                High
                                                                                Power
                                                                                Mods
                                                                                150W+
                                                                            </li>
                                                                            <li
                                                                                onClick={() =>
                                                                                    history.push(
                                                                                        "/plp/415"
                                                                                    )
                                                                                }
                                                                            >
                                                                                <img
                                                                                    src="https://www.elementvape.com/pub/media/subcategory_icons/20700_21700_Battery_Mod.jpg"
                                                                                    alt="20700 / 21700 Battery Mods"
                                                                                    width={
                                                                                        50
                                                                                    }
                                                                                    height={
                                                                                        50
                                                                                    }
                                                                                />
                                                                                20700
                                                                                /
                                                                                21700
                                                                                Battery
                                                                                Mods
                                                                            </li>
                                                                            <li
                                                                                onClick={() =>
                                                                                    history.push(
                                                                                        "/plp/353"
                                                                                    )
                                                                                }
                                                                            >
                                                                                <img
                                                                                    src="https://www.elementvape.com/pub/media/subcategory_icons/Clearance_Mods.jpg"
                                                                                    alt="Clearance Vape Mods"
                                                                                    width={
                                                                                        50
                                                                                    }
                                                                                    height={
                                                                                        50
                                                                                    }
                                                                                />
                                                                                Clearance
                                                                                Vape
                                                                                Mods
                                                                            </li>
                                                                        </ul>
                                                                    </div>
                                                                    <div className="col-sm-6">
                                                                        <h3>
                                                                            Device
                                                                            Brands
                                                                        </h3>
                                                                        <ul>
                                                                            <li
                                                                                onClick={() =>
                                                                                    history.push(
                                                                                        "/plp/367"
                                                                                    )
                                                                                }
                                                                            >
                                                                                DOVPO
                                                                            </li>
                                                                            <li
                                                                                onClick={() =>
                                                                                    history.push(
                                                                                        "/plp/199"
                                                                                    )
                                                                                }
                                                                            >
                                                                                asMODus
                                                                            </li>
                                                                            <li
                                                                                onClick={() =>
                                                                                    history.push(
                                                                                        "/plp/142"
                                                                                    )
                                                                                }
                                                                            >
                                                                                YiHi
                                                                                SXmini
                                                                            </li>
                                                                            <li
                                                                                onClick={() =>
                                                                                    history.push(
                                                                                        "/plp/651"
                                                                                    )
                                                                                }
                                                                            >
                                                                                <a>
                                                                                    EHPRO
                                                                                </a>
                                                                            </li>
                                                                            <li
                                                                                onClick={() =>
                                                                                    history.push(
                                                                                        "/plp/183"
                                                                                    )
                                                                                }
                                                                            >
                                                                                iJoy
                                                                            </li>
                                                                            <li
                                                                                onClick={() =>
                                                                                    history.push(
                                                                                        "/plp/184"
                                                                                    )
                                                                                }
                                                                            >
                                                                                dotmod
                                                                            </li>
                                                                            <li
                                                                                onClick={() =>
                                                                                    history.push(
                                                                                        "/plp/391"
                                                                                    )
                                                                                }
                                                                            >
                                                                                Squid
                                                                                Industries
                                                                            </li>
                                                                            <li
                                                                                onClick={() =>
                                                                                    history.push(
                                                                                        "/plp/215"
                                                                                    )
                                                                                }
                                                                            >
                                                                                Smoant
                                                                            </li>
                                                                            <li
                                                                                onClick={() =>
                                                                                    history.push(
                                                                                        "/plp/60"
                                                                                    )
                                                                                }
                                                                            >
                                                                                Eleaf
                                                                            </li>
                                                                            <li
                                                                                onClick={() =>
                                                                                    history.push(
                                                                                        "/plp/162"
                                                                                    )
                                                                                }
                                                                            >
                                                                                OBS
                                                                            </li>
                                                                        </ul>
                                                                    </div>
                                                                    <div className="col-sm-12">
                                                                        <div className="menu-img-bloc">
                                                                            <a
                                                                                onClick={() =>
                                                                                    history.push(
                                                                                        "/plp/129"
                                                                                    )
                                                                                }
                                                                            >
                                                                                <img
                                                                                    src="https://www.elementvape.com/pub/media/wysiwyg/Devices_-_Wismec.jpg"
                                                                                    alt="Wismec"
                                                                                />
                                                                                <p>
                                                                                    Wismec
                                                                                </p>
                                                                            </a>
                                                                            <a
                                                                                onClick={() =>
                                                                                    history.push(
                                                                                        "/plp/339"
                                                                                    )
                                                                                }
                                                                            >
                                                                                <img
                                                                                    src="https://www.elementvape.com/pub/media/wysiwyg/Devices_-_VOOPOO.jpg"
                                                                                    alt="VOOPOO"
                                                                                />
                                                                                <p>
                                                                                    VOOPOO
                                                                                </p>
                                                                            </a>
                                                                            <a
                                                                                onClick={() =>
                                                                                    history.push(
                                                                                        "/plp/135"
                                                                                    )
                                                                                }
                                                                            >
                                                                                <img
                                                                                    src="https://www.elementvape.com/pub/media/wysiwyg/Devices_-_Lost_Vape.jpg"
                                                                                    alt="Lost Vape"
                                                                                />
                                                                                <p>
                                                                                    Lost
                                                                                    Vape
                                                                                </p>
                                                                            </a>
                                                                            <a
                                                                                onClick={() =>
                                                                                    history.push(
                                                                                        "/plp/367"
                                                                                    )
                                                                                }
                                                                            >
                                                                                <img
                                                                                    src="https://www.elementvape.com/pub/media/wysiwyg/Devices_-_DOVPO.jpg"
                                                                                    alt="DOVPO"
                                                                                />
                                                                                <p>
                                                                                    DOVPO
                                                                                </p>
                                                                            </a>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </li>
                                                    </ul>
                                                </li>
                                                <li className="item level0 level-top parent">
                                                    <a
                                                        onClick={() =>
                                                            history.push(
                                                                "/plp/317"
                                                            )
                                                        }
                                                        className="menu-link"
                                                    >
                                                        <i className="menu-icon img-icon">
                                                            <img
                                                                src="https://www.elementvape.com/pub/media/Dckap/menu-level1/Mobile_Menu_Category_REBUILDABLES_70x62.png"
                                                                alt="https://www.elementvape.com/pub/media/Dckap/menu-level1/Mobile_Menu_Category_REBUILDABLES_70x62.png"
                                                            />
                                                        </i>
                                                        <span>
                                                            REBUILDABLES
                                                        </span>
                                                    </a>
                                                    <ul className="groupmenu-drop">
                                                        <li className="item level1 text-content">
                                                            <div
                                                                className="groupmenu-drop-content groupmenu-width-18"
                                                                style={{}}
                                                            >
                                                                <div className="row">
                                                                    <div className="col-sm-6">
                                                                        <ul>
                                                                            <li
                                                                                className="view-all"
                                                                                onClick={() =>
                                                                                    history.push(
                                                                                        "/plp/317"
                                                                                    )
                                                                                }
                                                                            >
                                                                                <img
                                                                                    src="https://www.elementvape.com/pub/media/subcategory_icons/Clearance_Rebuildables_1.jpg"
                                                                                    alt="Clearance Rebuildables"
                                                                                    width={
                                                                                        50
                                                                                    }
                                                                                    height={
                                                                                        50
                                                                                    }
                                                                                />
                                                                                View
                                                                                All
                                                                                Rebuildables
                                                                            </li>
                                                                            <li
                                                                                onClick={() =>
                                                                                    history.push(
                                                                                        "/plp/43"
                                                                                    )
                                                                                }
                                                                            >
                                                                                <img
                                                                                    src="https://www.elementvape.com/pub/media/subcategory_icons/RDA_1.jpg"
                                                                                    alt="RDA"
                                                                                    width={
                                                                                        50
                                                                                    }
                                                                                    height={
                                                                                        50
                                                                                    }
                                                                                />
                                                                                RDA
                                                                            </li>
                                                                            <li
                                                                                onClick={() =>
                                                                                    history.push(
                                                                                        "/plp/138"
                                                                                    )
                                                                                }
                                                                            >
                                                                                <img
                                                                                    src="https://www.elementvape.com/pub/media/subcategory_icons/RTA_1.jpg"
                                                                                    alt="RTA"
                                                                                    width={
                                                                                        50
                                                                                    }
                                                                                    height={
                                                                                        50
                                                                                    }
                                                                                />
                                                                                RTA
                                                                            </li>
                                                                            <li
                                                                                onClick={() =>
                                                                                    history.push(
                                                                                        "/plp/32"
                                                                                    )
                                                                                }
                                                                            >
                                                                                <img
                                                                                    src="https://www.elementvape.com/pub/media/subcategory_icons/RDTA_1.jpg"
                                                                                    alt="RDTA"
                                                                                    width={
                                                                                        50
                                                                                    }
                                                                                    height={
                                                                                        50
                                                                                    }
                                                                                />
                                                                                RDTA
                                                                            </li>
                                                                            <li
                                                                                onClick={() =>
                                                                                    history.push(
                                                                                        "/plp/171"
                                                                                    )
                                                                                }
                                                                            >
                                                                                <img
                                                                                    src="https://www.elementvape.com/pub/media/subcategory_icons/Postless_Deck_1.jpg"
                                                                                    alt="Postless Deck"
                                                                                    width={
                                                                                        50
                                                                                    }
                                                                                    height={
                                                                                        50
                                                                                    }
                                                                                />
                                                                                Postless
                                                                                Deck
                                                                            </li>
                                                                            <li
                                                                                onClick={() =>
                                                                                    history.push(
                                                                                        "/plp/170"
                                                                                    )
                                                                                }
                                                                            >
                                                                                <img
                                                                                    src="https://www.elementvape.com/pub/media/subcategory_icons/Two-Post_Deck_1.jpg"
                                                                                    alt="Two-Post Deck"
                                                                                    width={
                                                                                        50
                                                                                    }
                                                                                    height={
                                                                                        50
                                                                                    }
                                                                                />
                                                                                Two-Post
                                                                                Deck
                                                                            </li>
                                                                            <li
                                                                                onClick={() =>
                                                                                    history.push(
                                                                                        "/plp/334"
                                                                                    )
                                                                                }
                                                                            >
                                                                                <img
                                                                                    src="https://www.elementvape.com/pub/media/subcategory_icons/Squonk_BF_Rebuildables.jpg"
                                                                                    alt="Squonk BF RDA"
                                                                                    width={
                                                                                        50
                                                                                    }
                                                                                    height={
                                                                                        50
                                                                                    }
                                                                                />
                                                                                Squonk
                                                                                BF
                                                                                Rebuildables
                                                                            </li>
                                                                            <li
                                                                                onClick={() =>
                                                                                    history.push(
                                                                                        "/plp/361"
                                                                                    )
                                                                                }
                                                                            >
                                                                                <img
                                                                                    src="https://www.elementvape.com/pub/media/subcategory_icons/Clearance_Rebuildables_1.jpg"
                                                                                    alt="Clearance Rebuildables"
                                                                                    width={
                                                                                        50
                                                                                    }
                                                                                    height={
                                                                                        50
                                                                                    }
                                                                                />
                                                                                Clearance
                                                                                Rebuildables
                                                                            </li>
                                                                        </ul>
                                                                    </div>
                                                                    <div className="col-sm-6">
                                                                        <h3>
                                                                            Rebuildables
                                                                            Brands
                                                                        </h3>
                                                                        <ul>
                                                                            <li
                                                                                onClick={() =>
                                                                                    history.push(
                                                                                        "/plp/335"
                                                                                    )
                                                                                }
                                                                            >
                                                                                HellVape
                                                                            </li>
                                                                            <li
                                                                                onClick={() =>
                                                                                    history.push(
                                                                                        "/plp/155"
                                                                                    )
                                                                                }
                                                                            >
                                                                                Geek
                                                                                Vape
                                                                            </li>
                                                                            <li
                                                                                onClick={() =>
                                                                                    history.push(
                                                                                        "/plp/73"
                                                                                    )
                                                                                }
                                                                            >
                                                                                Wotofo
                                                                            </li>
                                                                            <li
                                                                                onClick={() =>
                                                                                    history.push(
                                                                                        "/plp/281"
                                                                                    )
                                                                                }
                                                                            >
                                                                                Vandy
                                                                                Vape
                                                                            </li>
                                                                            <li
                                                                                onClick={() =>
                                                                                    history.push(
                                                                                        "/plp/619"
                                                                                    )
                                                                                }
                                                                            >
                                                                                OUMIER
                                                                            </li>
                                                                            <li
                                                                                onClick={() =>
                                                                                    history.push(
                                                                                        "/plp/645"
                                                                                    )
                                                                                }
                                                                            >
                                                                                Damn
                                                                                Vape
                                                                            </li>
                                                                            <li
                                                                                onClick={() =>
                                                                                    history.push(
                                                                                        "/plp/214"
                                                                                    )
                                                                                }
                                                                            >
                                                                                CoilART
                                                                            </li>
                                                                            <li
                                                                                onClick={() =>
                                                                                    history.push(
                                                                                        "/plp/195"
                                                                                    )
                                                                                }
                                                                            >
                                                                                Augvape
                                                                            </li>
                                                                        </ul>
                                                                    </div>
                                                                    <div className="col-sm-12">
                                                                        <div className="menu-img-bloc">
                                                                            <a
                                                                                onClick={() =>
                                                                                    history.push(
                                                                                        "/plp/73"
                                                                                    )
                                                                                }
                                                                            >
                                                                                <img
                                                                                    src="https://www.elementvape.com/pub/media/wysiwyg/Rebuildables_-_Wotofo.png"
                                                                                    alt="Wotofo"
                                                                                />
                                                                                <p>
                                                                                    Wotofo
                                                                                </p>
                                                                            </a>
                                                                            <a
                                                                                onClick={() =>
                                                                                    history.push(
                                                                                        "/plp/281"
                                                                                    )
                                                                                }
                                                                            >
                                                                                <img
                                                                                    src="https://www.elementvape.com/pub/media/wysiwyg/Rebuildables_-_Vandy_Vape.png"
                                                                                    alt="Vandy Vape"
                                                                                />
                                                                                <p>
                                                                                    Vandy
                                                                                    Vape
                                                                                </p>
                                                                            </a>
                                                                            <a
                                                                                onClick={() =>
                                                                                    history.push(
                                                                                        "/plp/335"
                                                                                    )
                                                                                }
                                                                            >
                                                                                <img
                                                                                    src="https://www.elementvape.com/pub/media/wysiwyg/Rebuildables_-_HellVape.png"
                                                                                    alt="HellVape"
                                                                                />
                                                                                <p>
                                                                                    HellVape
                                                                                </p>
                                                                            </a>
                                                                            <a
                                                                                onClick={() =>
                                                                                    history.push(
                                                                                        "/plp/155"
                                                                                    )
                                                                                }
                                                                            >
                                                                                <img
                                                                                    src="https://www.elementvape.com/pub/media/wysiwyg/Rebuildables_-_Geek_Vape.png"
                                                                                    alt="Geek Vape"
                                                                                />
                                                                                <p>
                                                                                    Geek
                                                                                    Vape
                                                                                </p>
                                                                            </a>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </li>
                                                    </ul>
                                                </li>
                                                <li className="item level0 level-top parent">
                                                    <a
                                                        onClick={() =>
                                                            history.push(
                                                                "/plp/13"
                                                            )
                                                        }
                                                        className="menu-link"
                                                    >
                                                        <i className="menu-icon img-icon">
                                                            <img
                                                                src="https://www.elementvape.com/pub/media/Dckap/menu-level1/Mobile_Menu_Category_TANKS_70x62.png"
                                                                alt="https://www.elementvape.com/pub/media/Dckap/menu-level1/Mobile_Menu_Category_TANKS_70x62.png"
                                                            />
                                                        </i>
                                                        <span>TANKS</span>
                                                    </a>
                                                    <ul className="groupmenu-drop">
                                                        <li className="item level1 text-content">
                                                            <div
                                                                className="groupmenu-drop-content groupmenu-width-18"
                                                                style={{}}
                                                            >
                                                                <div className="row">
                                                                    <div className="col-sm-6">
                                                                        <ul>
                                                                            <li
                                                                                className="view-all"
                                                                                onClick={() =>
                                                                                    history.push(
                                                                                        "/plp/13"
                                                                                    )
                                                                                }
                                                                            >
                                                                                <img
                                                                                    src="https://www.elementvape.com/pub/media/subcategory_icons/All_Sub-Ohm_Tanks_1.jpg"
                                                                                    alt="All Sub-Ohm Tanks"
                                                                                    width={
                                                                                        50
                                                                                    }
                                                                                    height={
                                                                                        50
                                                                                    }
                                                                                />
                                                                                All
                                                                                Sub-Ohm
                                                                                Tanks
                                                                            </li>
                                                                            <li
                                                                                onClick={() =>
                                                                                    history.push(
                                                                                        "/plp/516"
                                                                                    )
                                                                                }
                                                                            >
                                                                                <img
                                                                                    src="https://www.elementvape.com/pub/media/subcategory_icons/Mesh_Coil_Tanks__1.jpg"
                                                                                    alt="Mesh Coil Tanks"
                                                                                    width={
                                                                                        50
                                                                                    }
                                                                                    height={
                                                                                        50
                                                                                    }
                                                                                />
                                                                                Mesh
                                                                                Coil
                                                                                Tanks
                                                                            </li>
                                                                            <li
                                                                                onClick={() =>
                                                                                    history.push(
                                                                                        "/plp/169"
                                                                                    )
                                                                                }
                                                                            >
                                                                                <img
                                                                                    src="https://www.elementvape.com/pub/media/subcategory_icons/Ceramic_Coil_Tanks_1.jpg"
                                                                                    alt="Ceramic Coil Tanks"
                                                                                    width={
                                                                                        50
                                                                                    }
                                                                                    height={
                                                                                        50
                                                                                    }
                                                                                />
                                                                                Ceramic
                                                                                Coil
                                                                                Tanks
                                                                            </li>
                                                                            <li
                                                                                onClick={() =>
                                                                                    history.push(
                                                                                        "/plp/94"
                                                                                    )
                                                                                }
                                                                            >
                                                                                <img
                                                                                    src="https://www.elementvape.com/pub/media/subcategory_icons/Temperature_Control_1.jpg"
                                                                                    alt="Temperature Control"
                                                                                    width={
                                                                                        50
                                                                                    }
                                                                                    height={
                                                                                        50
                                                                                    }
                                                                                />
                                                                                Temperature
                                                                                Control
                                                                            </li>
                                                                            <li
                                                                                onClick={() =>
                                                                                    history.push(
                                                                                        "/plp/315"
                                                                                    )
                                                                                }
                                                                            >
                                                                                <img
                                                                                    src="https://www.elementvape.com/pub/media/subcategory_icons/High_Power_Tanks_150W__1.jpg"
                                                                                    alt="High Power Tanks"
                                                                                    width={
                                                                                        50
                                                                                    }
                                                                                    height={
                                                                                        50
                                                                                    }
                                                                                />
                                                                                High
                                                                                Power
                                                                                Tanks
                                                                                150W+
                                                                            </li>
                                                                            <li
                                                                                onClick={() =>
                                                                                    history.push(
                                                                                        "/plp/618"
                                                                                    )
                                                                                }
                                                                            >
                                                                                <img
                                                                                    src="https://www.elementvape.com/pub/media/subcategory_icons/Disposable_Vape_Tanks_1.jpg"
                                                                                    alt="Disposable Vape Tanks"
                                                                                    width={
                                                                                        50
                                                                                    }
                                                                                    height={
                                                                                        50
                                                                                    }
                                                                                />
                                                                                Disposable
                                                                                Vape
                                                                                Tanks
                                                                            </li>
                                                                            <li
                                                                                onClick={() =>
                                                                                    history.push(
                                                                                        "/plp/316"
                                                                                    )
                                                                                }
                                                                            >
                                                                                <img
                                                                                    src="https://www.elementvape.com/pub/media/subcategory_icons/Clearance_Tanks_1.jpg"
                                                                                    alt="Clearance Tanks"
                                                                                    width={
                                                                                        50
                                                                                    }
                                                                                    height={
                                                                                        50
                                                                                    }
                                                                                />
                                                                                Clearance
                                                                                Tanks
                                                                            </li>
                                                                        </ul>
                                                                    </div>
                                                                    <div className="col-sm-6">
                                                                        <h3>
                                                                            Tanks
                                                                            Brands
                                                                        </h3>
                                                                        <ul>
                                                                            <li
                                                                                onClick={() =>
                                                                                    history.push(
                                                                                        "/plp/74"
                                                                                    )
                                                                                }
                                                                            >
                                                                                Horizon
                                                                                Tech
                                                                            </li>
                                                                            <li
                                                                                onClick={() =>
                                                                                    history.push(
                                                                                        "/plp/392"
                                                                                    )
                                                                                }
                                                                            >
                                                                                FreeMaX
                                                                            </li>
                                                                            <li
                                                                                onClick={() =>
                                                                                    history.push(
                                                                                        "/plp/98"
                                                                                    )
                                                                                }
                                                                            >
                                                                                UWELL
                                                                            </li>
                                                                            <li
                                                                                onClick={() =>
                                                                                    history.push(
                                                                                        "/plp/57"
                                                                                    )
                                                                                }
                                                                            >
                                                                                Aspire
                                                                            </li>
                                                                            <li
                                                                                onClick={() =>
                                                                                    history.push(
                                                                                        "/plp/54"
                                                                                    )
                                                                                }
                                                                            >
                                                                                Innokin
                                                                            </li>
                                                                            <li
                                                                                onClick={() =>
                                                                                    history.push(
                                                                                        "/plp/457"
                                                                                    )
                                                                                }
                                                                            >
                                                                                SMOK
                                                                            </li>
                                                                            <li
                                                                                onClick={() =>
                                                                                    history.push(
                                                                                        "/plp/155"
                                                                                    )
                                                                                }
                                                                            >
                                                                                Geek
                                                                                Vape
                                                                            </li>
                                                                            <li
                                                                                onClick={() =>
                                                                                    history.push(
                                                                                        "/plp/99"
                                                                                    )
                                                                                }
                                                                            >
                                                                                Sense
                                                                                Tech
                                                                            </li>
                                                                        </ul>
                                                                    </div>
                                                                    <div className="col-sm-12">
                                                                        <div className="menu-img-bloc">
                                                                            <a
                                                                                onClick={() =>
                                                                                    history.push(
                                                                                        "/plp/98"
                                                                                    )
                                                                                }
                                                                            >
                                                                                <img
                                                                                    src="https://www.elementvape.com/pub/media/wysiwyg/Tanks_-_UWELL.jpg"
                                                                                    alt="UWELL"
                                                                                />
                                                                                <p>
                                                                                    UWELL
                                                                                </p>
                                                                            </a>
                                                                            <a
                                                                                onClick={() =>
                                                                                    history.push(
                                                                                        "/plp/103"
                                                                                    )
                                                                                }
                                                                            >
                                                                                <img
                                                                                    src="https://www.elementvape.com/pub/media/wysiwyg/Tanks_-_SMOK.jpg"
                                                                                    alt="SMOKTech"
                                                                                />
                                                                                <p>
                                                                                    SMOKTech
                                                                                </p>
                                                                            </a>
                                                                            <a
                                                                                onClick={() =>
                                                                                    history.push(
                                                                                        "/plp/74"
                                                                                    )
                                                                                }
                                                                            >
                                                                                <img
                                                                                    src="https://www.elementvape.com/pub/media/wysiwyg/Tanks_-_Horizon.jpg"
                                                                                    alt="HorizonTech"
                                                                                />
                                                                                <p>
                                                                                    HorizonTech
                                                                                </p>
                                                                            </a>
                                                                            <a
                                                                                onClick={() =>
                                                                                    history.push(
                                                                                        "/plp/392"
                                                                                    )
                                                                                }
                                                                            >
                                                                                <img
                                                                                    src="https://www.elementvape.com/pub/media/wysiwyg/Tanks_-_FreeMaX.jpg"
                                                                                    alt="FreeMaX"
                                                                                />
                                                                                <p>
                                                                                    FreeMaX
                                                                                </p>
                                                                            </a>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </li>
                                                    </ul>
                                                </li>
                                                <li className="item level0 level-top parent">
                                                    <a
                                                        onClick={() =>
                                                            history.push(
                                                                "/plp/9"
                                                            )
                                                        }
                                                        className="menu-link"
                                                    >
                                                        <i className="menu-icon img-icon">
                                                            <img
                                                                src="https://www.elementvape.com/pub/media/Dckap/menu-level1/Mobile_Menu_Category_ACCESSORIES_70x62.png"
                                                                alt="https://www.elementvape.com/pub/media/Dckap/menu-level1/Mobile_Menu_Category_ACCESSORIES_70x62.png"
                                                            />
                                                        </i>
                                                        <span>ACCESSORIES</span>
                                                    </a>
                                                    <ul className="groupmenu-drop">
                                                        <li className="item level1 text-content">
                                                            <div
                                                                className="groupmenu-drop-content groupmenu-width-18"
                                                                style={{}}
                                                            >
                                                                <div className="row">
                                                                    <div className="col-sm-6">
                                                                        <ul>
                                                                            <li className="view-all">
                                                                                <img
                                                                                    onClick={() =>
                                                                                        history.push(
                                                                                            "/plp/9"
                                                                                        )
                                                                                    }
                                                                                    src="https://www.elementvape.com/pub/media/subcategory_icons/Replacement_Pod_Cartridges.jpg"
                                                                                    alt="Replacement Pod Cartridges"
                                                                                    width={
                                                                                        50
                                                                                    }
                                                                                    height={
                                                                                        50
                                                                                    }
                                                                                />
                                                                                View
                                                                                All
                                                                                Accessories
                                                                            </li>
                                                                            <li
                                                                                onClick={() =>
                                                                                    history.push(
                                                                                        "/plp/8"
                                                                                    )
                                                                                }
                                                                            >
                                                                                <img
                                                                                    src="https://www.elementvape.com/pub/media/subcategory_icons/Drip_Tips.jpg"
                                                                                    alt="Drip Tips"
                                                                                    width={
                                                                                        50
                                                                                    }
                                                                                    height={
                                                                                        50
                                                                                    }
                                                                                />
                                                                                Drip
                                                                                Tips
                                                                            </li>
                                                                            <li
                                                                                onClick={() =>
                                                                                    history.push(
                                                                                        "/plp/22"
                                                                                    )
                                                                                }
                                                                            >
                                                                                <img
                                                                                    src="https://www.elementvape.com/pub/media/subcategory_icons/Batteries.jpg"
                                                                                    alt="Batteries"
                                                                                    width={
                                                                                        50
                                                                                    }
                                                                                    height={
                                                                                        50
                                                                                    }
                                                                                />
                                                                                Batteries
                                                                            </li>
                                                                            <li
                                                                                onClick={() =>
                                                                                    history.push(
                                                                                        "/plp/23"
                                                                                    )
                                                                                }
                                                                            >
                                                                                <img
                                                                                    src="https://www.elementvape.com/pub/media/subcategory_icons/Chargers.jpg"
                                                                                    alt="Chargers"
                                                                                    width={
                                                                                        50
                                                                                    }
                                                                                    height={
                                                                                        50
                                                                                    }
                                                                                />
                                                                                Chargers
                                                                            </li>
                                                                            <li
                                                                                onClick={() =>
                                                                                    history.push(
                                                                                        "/plp/45"
                                                                                    )
                                                                                }
                                                                            >
                                                                                <img
                                                                                    src="https://www.elementvape.com/pub/media/subcategory_icons/Replacement_Parts.jpg"
                                                                                    alt="Replacement Parts"
                                                                                    width={
                                                                                        50
                                                                                    }
                                                                                    height={
                                                                                        50
                                                                                    }
                                                                                />
                                                                                Replacement
                                                                                Parts
                                                                            </li>
                                                                            <li
                                                                                onClick={() =>
                                                                                    history.push(
                                                                                        "/plp/86"
                                                                                    )
                                                                                }
                                                                            >
                                                                                <img
                                                                                    src="https://www.elementvape.com/pub/media/subcategory_icons/Rebuildable_Materials.jpg"
                                                                                    alt="Rebuildable Materials"
                                                                                    width={
                                                                                        50
                                                                                    }
                                                                                    height={
                                                                                        50
                                                                                    }
                                                                                />
                                                                                Rebuildable
                                                                                Materials
                                                                            </li>
                                                                            <li
                                                                                onClick={() =>
                                                                                    history.push(
                                                                                        "/plp/93"
                                                                                    )
                                                                                }
                                                                            >
                                                                                <img
                                                                                    src="https://www.elementvape.com/pub/media/subcategory_icons/Replacement_Coils.jpg"
                                                                                    alt=" Replacement Coils"
                                                                                    width={
                                                                                        50
                                                                                    }
                                                                                    height={
                                                                                        50
                                                                                    }
                                                                                />
                                                                                Replacement
                                                                                Coils
                                                                            </li>
                                                                            <li
                                                                                onClick={() =>
                                                                                    history.push(
                                                                                        "/plp/318"
                                                                                    )
                                                                                }
                                                                            >
                                                                                <img
                                                                                    src="https://www.elementvape.com/pub/media/subcategory_icons/Rebuildable_Tools.jpg"
                                                                                    alt="Rebuildable Tools"
                                                                                    width={
                                                                                        50
                                                                                    }
                                                                                    height={
                                                                                        50
                                                                                    }
                                                                                />
                                                                                Rebuildable
                                                                                Tools
                                                                            </li>
                                                                            <li
                                                                                onClick={() =>
                                                                                    history.push(
                                                                                        "/plp/319"
                                                                                    )
                                                                                }
                                                                            >
                                                                                <img
                                                                                    src="https://www.elementvape.com/pub/media/subcategory_icons/Rebuildable_Materials.jpg"
                                                                                    alt="Performance Wires"
                                                                                    width={
                                                                                        50
                                                                                    }
                                                                                    height={
                                                                                        50
                                                                                    }
                                                                                />
                                                                                Performance
                                                                                Wires
                                                                            </li>
                                                                            <li
                                                                                onClick={() =>
                                                                                    history.push(
                                                                                        "/plp/411"
                                                                                    )
                                                                                }
                                                                            >
                                                                                <img
                                                                                    src="https://www.elementvape.com/pub/media/subcategory_icons/Replacement_Pod_Cartridges.jpg"
                                                                                    alt="Replacement Pod Cartridges"
                                                                                    width={
                                                                                        50
                                                                                    }
                                                                                    height={
                                                                                        50
                                                                                    }
                                                                                />
                                                                                Replacement
                                                                                Pod
                                                                                Cartridges
                                                                            </li>
                                                                        </ul>
                                                                    </div>
                                                                    <div className="col-sm-6">
                                                                        <h3>
                                                                            Accessories
                                                                            Brands
                                                                        </h3>
                                                                        <ul>
                                                                            <li
                                                                                onClick={() =>
                                                                                    history.push(
                                                                                        "/plp/229"
                                                                                    )
                                                                                }
                                                                            >
                                                                                Coil
                                                                                Master
                                                                            </li>
                                                                            <li
                                                                                onClick={() =>
                                                                                    history.push(
                                                                                        "/plp/337"
                                                                                    )
                                                                                }
                                                                            >
                                                                                Coilology
                                                                            </li>
                                                                            <li
                                                                                onClick={() =>
                                                                                    history.push(
                                                                                        "/plp/56"
                                                                                    )
                                                                                }
                                                                            >
                                                                                Efest
                                                                            </li>
                                                                            <li
                                                                                onClick={() =>
                                                                                    history.push(
                                                                                        "/plp/66"
                                                                                    )
                                                                                }
                                                                            >
                                                                                Nitecore
                                                                            </li>
                                                                            <li
                                                                                onClick={() =>
                                                                                    history.push(
                                                                                        "/plp/130"
                                                                                    )
                                                                                }
                                                                            >
                                                                                Hohm
                                                                                Tech
                                                                            </li>
                                                                            <li
                                                                                onClick={() =>
                                                                                    history.push(
                                                                                        "/plp/73"
                                                                                    )
                                                                                }
                                                                            >
                                                                                Wotofo
                                                                            </li>
                                                                            <li
                                                                                onClick={() =>
                                                                                    history.push(
                                                                                        "/plp/281"
                                                                                    )
                                                                                }
                                                                            >
                                                                                Vandy
                                                                                Vape
                                                                            </li>
                                                                            <li
                                                                                onClick={() =>
                                                                                    history.push(
                                                                                        "/plp/155"
                                                                                    )
                                                                                }
                                                                            >
                                                                                Geek
                                                                                Vape
                                                                            </li>
                                                                        </ul>
                                                                    </div>
                                                                    <div className="col-sm-12">
                                                                        <div className="menu-img-bloc">
                                                                            <a
                                                                                onClick={() =>
                                                                                    history.push(
                                                                                        "/plp/66"
                                                                                    )
                                                                                }
                                                                            >
                                                                                <img
                                                                                    src="https://www.elementvape.com/pub/media/wysiwyg/Acessories_-_Nitecore.jpg"
                                                                                    alt="Nitecore"
                                                                                />
                                                                                <p>
                                                                                    Nitecore
                                                                                </p>
                                                                            </a>
                                                                            <a
                                                                                onClick={() =>
                                                                                    history.push(
                                                                                        "/plp/130"
                                                                                    )
                                                                                }
                                                                            >
                                                                                <img
                                                                                    src="https://www.elementvape.com/pub/media/wysiwyg/Accessories_-_Hohm_Tech.jpg"
                                                                                    alt="Hohm Tech"
                                                                                />
                                                                                <p>
                                                                                    Hohm
                                                                                    Tech
                                                                                </p>
                                                                            </a>
                                                                            <a
                                                                                onClick={() =>
                                                                                    history.push(
                                                                                        "/plp/4"
                                                                                    )
                                                                                }
                                                                            >
                                                                                <img
                                                                                    src="https://www.elementvape.com/pub/media/wysiwyg/Accessories_-_COTN.jpg"
                                                                                    alt="COTN Threads"
                                                                                />
                                                                                <p>
                                                                                    COTN
                                                                                    Threads
                                                                                </p>
                                                                            </a>
                                                                            <a
                                                                                onClick={() =>
                                                                                    history.push(
                                                                                        "/plp/229"
                                                                                    )
                                                                                }
                                                                            >
                                                                                <img
                                                                                    src="https://www.elementvape.com/pub/media/wysiwyg/Accessories_-_Coil_Master.jpg"
                                                                                    alt="Coil Master"
                                                                                />
                                                                                <p>
                                                                                    Coil
                                                                                    Master
                                                                                </p>
                                                                            </a>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </li>
                                                    </ul>
                                                </li>
                                                <li className="item level0 level-top parent">
                                                    <a
                                                        onClick={() =>
                                                            history.push(
                                                                "/plp/389"
                                                            )
                                                        }
                                                        className="menu-link"
                                                    >
                                                        <i className="menu-icon img-icon">
                                                            <img
                                                                src="https://www.elementvape.com/pub/media/Dckap/menu-level1/Mobile_Menu_Category_E-LIQUIDS_70x62.png"
                                                                alt="https://www.elementvape.com/pub/media/Dckap/menu-level1/Mobile_Menu_Category_E-LIQUIDS_70x62.png"
                                                            />
                                                        </i>
                                                        <span>E-LIQUIDS</span>
                                                    </a>
                                                    <ul className="groupmenu-drop">
                                                        <li className="item level1 text-content">
                                                            <div
                                                                className="groupmenu-drop-content groupmenu-width-18"
                                                                style={{}}
                                                            >
                                                                <div className="row">
                                                                    <div className="col-sm-6">
                                                                        <ul>
                                                                            <li
                                                                                className="view-all"
                                                                                onClick={() =>
                                                                                    history.push(
                                                                                        "/plp/389"
                                                                                    )
                                                                                }
                                                                            >
                                                                                <img
                                                                                    src="https://www.elementvape.com/pub/media/subcategory_icons/All_E-Liquids.jpg"
                                                                                    alt="All E-Liquids"
                                                                                    width={
                                                                                        50
                                                                                    }
                                                                                    height={
                                                                                        50
                                                                                    }
                                                                                />
                                                                                All
                                                                                E-Liquids
                                                                            </li>
                                                                            <li
                                                                                onClick={() =>
                                                                                    history.push(
                                                                                        "/plp/373"
                                                                                    )
                                                                                }
                                                                            >
                                                                                <img
                                                                                    src="https://www.elementvape.com/pub/media/subcategory_icons/Nicotine_Salts_E-Liquid.jpg"
                                                                                    alt="Nicotine Salts"
                                                                                    width={
                                                                                        50
                                                                                    }
                                                                                    height={
                                                                                        50
                                                                                    }
                                                                                />
                                                                                Nicotine
                                                                                Salts
                                                                                E-Liquid
                                                                            </li>
                                                                            <li
                                                                                onClick={() =>
                                                                                    history.push(
                                                                                        "/plp/105"
                                                                                    )
                                                                                }
                                                                            >
                                                                                <img
                                                                                    src="https://www.elementvape.com/pub/media/subcategory_icons/Combo_Packs_Deal.jpg"
                                                                                    alt="Combo Packs"
                                                                                    width={
                                                                                        50
                                                                                    }
                                                                                    height={
                                                                                        50
                                                                                    }
                                                                                />
                                                                                Combo
                                                                                Packs
                                                                                Deal
                                                                            </li>
                                                                            <li
                                                                                onClick={() =>
                                                                                    history.push(
                                                                                        "/plp/478"
                                                                                    )
                                                                                }
                                                                            >
                                                                                <img
                                                                                    src="https://www.elementvape.com/pub/media/subcategory_icons/Fruit_Flavors_E-Liquid.jpg"
                                                                                    alt="Fruit Flavors E-Liquid"
                                                                                    width={
                                                                                        50
                                                                                    }
                                                                                    height={
                                                                                        50
                                                                                    }
                                                                                />
                                                                                Fruit
                                                                                Flavors
                                                                                E-Liquid
                                                                            </li>
                                                                            <li
                                                                                onClick={() =>
                                                                                    history.push(
                                                                                        "/plp/609"
                                                                                    )
                                                                                }
                                                                            >
                                                                                <img
                                                                                    src="https://www.elementvape.com/pub/media/subcategory_icons/Dessert_Flavors_E-Liquid.jpg"
                                                                                    alt="Dessert Flavors E-Liquid"
                                                                                    width={
                                                                                        50
                                                                                    }
                                                                                    height={
                                                                                        50
                                                                                    }
                                                                                />
                                                                                Dessert
                                                                                Flavors
                                                                                E-Liquid
                                                                            </li>
                                                                            <li
                                                                                onClick={() =>
                                                                                    history.push(
                                                                                        "/plp/608"
                                                                                    )
                                                                                }
                                                                            >
                                                                                <img
                                                                                    src="https://www.elementvape.com/pub/media/subcategory_icons/Methol_Flavors_E-Liquid.jpg"
                                                                                    alt="Menthol Flavors E-Liquid"
                                                                                    width={
                                                                                        50
                                                                                    }
                                                                                    height={
                                                                                        50
                                                                                    }
                                                                                />
                                                                                Menthol
                                                                                Flavors
                                                                                E-Liquid
                                                                            </li>
                                                                            <li
                                                                                onClick={() =>
                                                                                    history.push(
                                                                                        "/plp/607"
                                                                                    )
                                                                                }
                                                                            >
                                                                                <img
                                                                                    src="https://www.elementvape.com/pub/media/subcategory_icons/Tobacco_Flavors_E-Liquid.jpg"
                                                                                    alt="Tobacco Flavors E-Liquid"
                                                                                    width={
                                                                                        50
                                                                                    }
                                                                                    height={
                                                                                        50
                                                                                    }
                                                                                />
                                                                                Tobacco
                                                                                Flavors
                                                                                E-Liquid
                                                                            </li>
                                                                            <li
                                                                                onClick={() =>
                                                                                    history.push(
                                                                                        "/plp/320"
                                                                                    )
                                                                                }
                                                                            >
                                                                                <img
                                                                                    src="https://www.elementvape.com/pub/media/subcategory_icons/Clearance_E-Liquids.jpg"
                                                                                    alt="Clearance E-Liquid"
                                                                                    width={
                                                                                        50
                                                                                    }
                                                                                    height={
                                                                                        50
                                                                                    }
                                                                                />
                                                                                Clearance
                                                                                E-Liquids
                                                                            </li>
                                                                        </ul>
                                                                    </div>
                                                                    <div className="col-sm-6">
                                                                        <h3>
                                                                            E-Liquids
                                                                            Brands
                                                                        </h3>
                                                                        <ul>
                                                                            <li
                                                                                onClick={() =>
                                                                                    history.push(
                                                                                        "/plp/265"
                                                                                    )
                                                                                }
                                                                            >
                                                                                Naked
                                                                                100
                                                                            </li>
                                                                            <li
                                                                                onClick={() =>
                                                                                    history.push(
                                                                                        "/plp/226"
                                                                                    )
                                                                                }
                                                                            >
                                                                                SUA
                                                                                Vapors
                                                                            </li>
                                                                            <li
                                                                                onClick={() =>
                                                                                    history.push(
                                                                                        "/plp/227"
                                                                                    )
                                                                                }
                                                                            >
                                                                                Vapetasia
                                                                            </li>
                                                                            <li
                                                                                onClick={() =>
                                                                                    history.push(
                                                                                        "/plp/525"
                                                                                    )
                                                                                }
                                                                            >
                                                                                Finest
                                                                                E-Liquid
                                                                            </li>
                                                                            <li
                                                                                onClick={() =>
                                                                                    history.push(
                                                                                        "/plp/112"
                                                                                    )
                                                                                }
                                                                            >
                                                                                7
                                                                                Daze
                                                                                E-Liquid
                                                                            </li>
                                                                            <li
                                                                                onClick={() =>
                                                                                    history.push(
                                                                                        "/plp/599"
                                                                                    )
                                                                                }
                                                                            >
                                                                                Coastal
                                                                                Clouds
                                                                            </li>
                                                                            <li
                                                                                onClick={() =>
                                                                                    history.push(
                                                                                        "/plp/455"
                                                                                    )
                                                                                }
                                                                            >
                                                                                Pachamama
                                                                                E-Liquid
                                                                            </li>
                                                                            <li
                                                                                onClick={() =>
                                                                                    history.push(
                                                                                        "/plp/286"
                                                                                    )
                                                                                }
                                                                            >
                                                                                Jam
                                                                                Monster
                                                                                Liquids
                                                                            </li>
                                                                            <li
                                                                                onClick={() =>
                                                                                    history.push(
                                                                                        "/plp/627"
                                                                                    )
                                                                                }
                                                                            >
                                                                                Sadboy
                                                                                E-Liquid
                                                                            </li>
                                                                            <li
                                                                                onClick={() =>
                                                                                    history.push(
                                                                                        "/plp/175"
                                                                                    )
                                                                                }
                                                                            >
                                                                                Ruthless
                                                                                E-Liquid
                                                                            </li>
                                                                        </ul>
                                                                        <div
                                                                            id="gtx-trans"
                                                                            style={{
                                                                                position:
                                                                                    "absolute",
                                                                                left:
                                                                                    "-107px",
                                                                                top:
                                                                                    "113.771px",
                                                                            }}
                                                                        >
                                                                            <div className="gtx-trans-icon">
                                                                                &nbsp;
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-sm-12">
                                                                        <div className="menu-img-bloc">
                                                                            <a
                                                                                onClick={() =>
                                                                                    history.push(
                                                                                        "/plp/525"
                                                                                    )
                                                                                }
                                                                            >
                                                                                <img
                                                                                    src="https://www.elementvape.com/pub/media/homepage_banners/finest2.jpg"
                                                                                    alt="finest2"
                                                                                />
                                                                                <p>
                                                                                    Finest
                                                                                    E-Liquid
                                                                                </p>
                                                                            </a>
                                                                            <a
                                                                                onClick={() =>
                                                                                    history.push(
                                                                                        "/plp/364"
                                                                                    )
                                                                                }
                                                                            >
                                                                                <img
                                                                                    src="https://www.elementvape.com/pub/media/homepage_banners/twstsalt2.jpg"
                                                                                    alt="twstsalt2"
                                                                                    width={
                                                                                        180
                                                                                    }
                                                                                    height={
                                                                                        120
                                                                                    }
                                                                                />
                                                                                <p>
                                                                                    Twist
                                                                                    E-Liquid
                                                                                </p>
                                                                            </a>
                                                                            <a
                                                                                onClick={() =>
                                                                                    history.push(
                                                                                        "/plp/420"
                                                                                    )
                                                                                }
                                                                            >
                                                                                <img
                                                                                    src="https://www.elementvape.com/pub/media/homepage_banners/Solace.jpg"
                                                                                    alt="Solace"
                                                                                />
                                                                                <p>
                                                                                    Solace
                                                                                    Vapor
                                                                                </p>
                                                                            </a>
                                                                            <a
                                                                                onClick={() =>
                                                                                    history.push(
                                                                                        "/plp/104"
                                                                                    )
                                                                                }
                                                                            >
                                                                                <img
                                                                                    src="https://www.elementvape.com/pub/media/homepage_banners/Charlie.jpg"
                                                                                    alt="Charlie"
                                                                                    width={
                                                                                        180
                                                                                    }
                                                                                    height={
                                                                                        120
                                                                                    }
                                                                                />
                                                                                <p>
                                                                                    Charlie's
                                                                                    Chalk
                                                                                    Dusts
                                                                                </p>
                                                                            </a>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </li>
                                                    </ul>
                                                </li>
                                                <li className="item level0 level-top parent">
                                                    <a
                                                        onClick={() =>
                                                            history.push(
                                                                "/plp/448"
                                                            )
                                                        }
                                                        className="menu-link"
                                                    >
                                                        <i className="menu-icon img-icon">
                                                            <img
                                                                src="https://www.elementvape.com/pub/media/Dckap/menu-level1/Mobile_Menu_Category_ALTERNATIVES_70x62.png"
                                                                alt="https://www.elementvape.com/pub/media/Dckap/menu-level1/Mobile_Menu_Category_ALTERNATIVES_70x62.png"
                                                            />
                                                        </i>
                                                        <span>
                                                            ALTERNATIVES
                                                        </span>
                                                    </a>
                                                    <ul className="groupmenu-drop">
                                                        <li className="item level1 text-content">
                                                            <div className="groupmenu-drop-content groupmenu-width-18">
                                                                <div className="row">
                                                                    <div className="col-sm-6">
                                                                        <ul>
                                                                            <li
                                                                                className="view-all"
                                                                                onClick={() =>
                                                                                    history.push(
                                                                                        "/plp/653"
                                                                                    )
                                                                                }
                                                                            >
                                                                                <img
                                                                                    src="https://elementvape.com/pub/media/subcategory_icons/Mobile_Menu_Sub-Category_ALTERNATIVES_All_50x50.jpg"
                                                                                    alt="All Vaporizers"
                                                                                    width={
                                                                                        50
                                                                                    }
                                                                                    height={
                                                                                        50
                                                                                    }
                                                                                />
                                                                                All
                                                                                Vaporizers
                                                                            </li>
                                                                            <li
                                                                                className="view-all"
                                                                                onClick={() =>
                                                                                    history.push(
                                                                                        "/plp/669"
                                                                                    )
                                                                                }
                                                                            >
                                                                                <img
                                                                                    src="https://www.elementvape.com/pub/media/subcategory_icons/Mobile_Menu_Sub-Category_ALTERNATIVES_eGo_510_Battery_Devices_100x100.jpg"
                                                                                    alt="Dry Herb Vaporizers"
                                                                                    width={
                                                                                        50
                                                                                    }
                                                                                    height={
                                                                                        50
                                                                                    }
                                                                                />
                                                                                eGo
                                                                                510
                                                                                Battery
                                                                                Device
                                                                            </li>
                                                                            <li
                                                                                onClick={() =>
                                                                                    history.push(
                                                                                        "/plp/639"
                                                                                    )
                                                                                }
                                                                            >
                                                                                <img
                                                                                    src="https://www.elementvape.com/pub/media/subcategory_icons/Mobile_Menu_Sub-Category_ALTERNATIVES_Dry_Herb_Vaporizers_100x100.jpg"
                                                                                    alt="Dry Herb Vaporizers"
                                                                                    width={
                                                                                        50
                                                                                    }
                                                                                    height={
                                                                                        50
                                                                                    }
                                                                                />
                                                                                Dry
                                                                                Herb
                                                                                Vaporizers
                                                                            </li>
                                                                            <li
                                                                                onClick={() =>
                                                                                    history.push(
                                                                                        "/plp/640"
                                                                                    )
                                                                                }
                                                                            >
                                                                                <img
                                                                                    src="https://www.elementvape.com/pub/media/subcategory_icons/Mobile_Menu_Sub-Category_ALTERNATIVES_Concentrate_Vaporizers_100x100.jpg"
                                                                                    alt="Concentrate Vaporizers"
                                                                                    width={
                                                                                        50
                                                                                    }
                                                                                    height={
                                                                                        50
                                                                                    }
                                                                                />
                                                                                Concentrate
                                                                                Vaporizers
                                                                            </li>
                                                                            <li
                                                                                onClick={() =>
                                                                                    history.push(
                                                                                        "/plp/641"
                                                                                    )
                                                                                }
                                                                            >
                                                                                <img
                                                                                    src="https://www.elementvape.com/pub/media/subcategory_icons/Mobile_Menu_Sub-Category_ALTERNATIVES_Portable_Vaporizers_100x100.jpg"
                                                                                    alt="Portable Vaporizers"
                                                                                    width={
                                                                                        50
                                                                                    }
                                                                                    height={
                                                                                        50
                                                                                    }
                                                                                />
                                                                                Portable
                                                                                Vaporizers
                                                                            </li>
                                                                            <li
                                                                                onClick={() =>
                                                                                    history.push(
                                                                                        "/plp/642"
                                                                                    )
                                                                                }
                                                                            >
                                                                                <img
                                                                                    src="https://www.elementvape.com/pub/media/subcategory_icons/Mobile_Menu_Sub-Category_ALTERNATIVES_Pen_Vaporizers_100x100.jpg"
                                                                                    alt="Pen Vaporizers"
                                                                                    width={
                                                                                        50
                                                                                    }
                                                                                    height={
                                                                                        50
                                                                                    }
                                                                                />
                                                                                Pen
                                                                                Vaporizers
                                                                            </li>
                                                                            <li
                                                                                onClick={() =>
                                                                                    history.push(
                                                                                        "/plp/643"
                                                                                    )
                                                                                }
                                                                            >
                                                                                <img
                                                                                    src="https://www.elementvape.com/pub/media/subcategory_icons/Mobile_Menu_Sub-Category_ALTERNATIVES_Desktop_Vaporizers_100x100.jpg"
                                                                                    alt="Desktop Vaporizers"
                                                                                    width={
                                                                                        50
                                                                                    }
                                                                                    height={
                                                                                        50
                                                                                    }
                                                                                />
                                                                                Desktop
                                                                                Vaporizers
                                                                            </li>
                                                                            <li
                                                                                onClick={() =>
                                                                                    history.push(
                                                                                        "/plp/644"
                                                                                    )
                                                                                }
                                                                            >
                                                                                <img
                                                                                    src="https://www.elementvape.com/pub/media/subcategory_icons/Mobile_Menu_Sub-Category_ALTERNATIVES_Accessories_100x100.jpg"
                                                                                    alt="Vaporizers Accessories"
                                                                                    width={
                                                                                        50
                                                                                    }
                                                                                    height={
                                                                                        50
                                                                                    }
                                                                                />
                                                                                Vaporizers
                                                                                Accessories
                                                                            </li>
                                                                        </ul>
                                                                    </div>
                                                                    <div className="col-sm-6">
                                                                        <h3>
                                                                            Alternatives
                                                                            Brands
                                                                        </h3>
                                                                        <ul>
                                                                            <li
                                                                                onClick={() =>
                                                                                    history.push(
                                                                                        "/plp/657"
                                                                                    )
                                                                                }
                                                                            >
                                                                                PAX
                                                                                Labs
                                                                            </li>
                                                                            <li
                                                                                onClick={() =>
                                                                                    history.push(
                                                                                        "/plp/636"
                                                                                    )
                                                                                }
                                                                            >
                                                                                YOCAN
                                                                            </li>
                                                                            <li
                                                                                onClick={() =>
                                                                                    history.push(
                                                                                        "/plp/664"
                                                                                    )
                                                                                }
                                                                            >
                                                                                CCELL
                                                                            </li>
                                                                            <li
                                                                                onClick={() =>
                                                                                    history.push(
                                                                                        "/plp/647"
                                                                                    )
                                                                                }
                                                                            >
                                                                                Leaf
                                                                                Buddi
                                                                            </li>
                                                                            <li
                                                                                onClick={() =>
                                                                                    history.push(
                                                                                        "/plp/646"
                                                                                    )
                                                                                }
                                                                            >
                                                                                DazzVape
                                                                            </li>
                                                                            <li
                                                                                onClick={() =>
                                                                                    history.push(
                                                                                        "/plp/659"
                                                                                    )
                                                                                }
                                                                            >
                                                                                Storz
                                                                                &amp;
                                                                                Bickel
                                                                                VOLCANO
                                                                            </li>
                                                                        </ul>
                                                                    </div>
                                                                    <div className="col-sm-12">
                                                                        <div className="menu-img-bloc">
                                                                            <a
                                                                                onClick={() =>
                                                                                    history.push(
                                                                                        "/plp/636"
                                                                                    )
                                                                                }
                                                                            >
                                                                                <img
                                                                                    src="https://www.elementvape.com/pub/media/wysiwyg/Alternatives_-_YoCan.jpg"
                                                                                    alt="YoCan"
                                                                                />
                                                                                <p>
                                                                                    YoCan
                                                                                </p>
                                                                            </a>
                                                                            <a
                                                                                onClick={() =>
                                                                                    history.push(
                                                                                        "/plp/647"
                                                                                    )
                                                                                }
                                                                            >
                                                                                <img
                                                                                    src="https://www.elementvape.com/pub/media/wysiwyg/Alternatives_-_Leaf_Buddi.jpg"
                                                                                    alt="Leaf Buddi"
                                                                                />
                                                                                <p>
                                                                                    Leaf
                                                                                    Buddi
                                                                                </p>
                                                                            </a>
                                                                            <a
                                                                                onClick={() =>
                                                                                    history.push(
                                                                                        "/plp/657"
                                                                                    )
                                                                                }
                                                                            >
                                                                                <img
                                                                                    src="https://www.elementvape.com/pub/media/wysiwyg/Alternatives_-_JUUL.jpg"
                                                                                    alt="Pax Labs"
                                                                                />
                                                                                <p>
                                                                                    Pax
                                                                                    Labs
                                                                                </p>
                                                                            </a>
                                                                            <a
                                                                                onClick={() =>
                                                                                    history.push(
                                                                                        "/plp/664"
                                                                                    )
                                                                                }
                                                                            >
                                                                                <img
                                                                                    src="https://www.elementvape.com/pub/media/wysiwyg/Alternatives_-_CCELL.jpg"
                                                                                    alt="CCELL"
                                                                                />
                                                                                <p>
                                                                                    CCELL
                                                                                </p>
                                                                            </a>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </li>
                                                    </ul>
                                                </li>
                                            </ul>
                                        </div>
                                    </nav>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div
                    data-content-type="row"
                    data-appearance="contained"
                    data-element="main"
                >
                    <div
                        data-enable-parallax={0}
                        data-parallax-speed="0.5"
                        data-background-images="{}"
                        data-video-fallback-src
                        data-element="inner"
                        style={{
                            justifyContent: "flex-start",
                            display: "flex",
                            flexDirection: "column",
                            backgroundPosition: "left top",
                            backgroundSize: "cover",
                            backgroundRepeat: "no-repeat",
                            backgroundAttachment: "scroll",
                            borderStyle: "none",
                            borderWidth: "1px",
                            borderRadius: "0px",
                            margin: "0px 0px 10px",
                            padding: "10px",
                        }}
                    >
                        <div
                            data-content-type="html"
                            data-appearance="default"
                            data-element="main"
                            style={{
                                borderStyle: "none",
                                borderWidth: "1px",
                                borderRadius: "0px",
                                margin: "0px",
                                padding: "0px",
                            }}
                            data-decoded="true"
                        >
                            <div className="container header-shipping-discount">
                                <a title="coupons">
                                    <p style={{ background: "#850003" }}>
                                        <span>
                                            Black Friday Early Access | Free
                                            U.S. Shipping $75+
                                        </span>
                                    </p>
                                </a>
                            </div>
                            <style
                                dangerouslySetInnerHTML={{
                                    __html:
                                        "\n                                .evpbody .header-shipping-discount p:hover span,\n                                .evpbody\n                                    .header-shipping-discount\n                                    a:focus\n                                    span {\n                                    border-bottom: 4px solid #010101;\n                                }\n                            ",
                                }}
                            />
                        </div>
                    </div>
                </div>
            </header>
        </div>
    );
}

export default React.memo(Headers);
