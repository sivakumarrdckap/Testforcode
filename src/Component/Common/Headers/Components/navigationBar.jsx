import React from "react";
import { useRef } from "react";
import { useHistory } from "react-router-dom";

export default function Navigationbar({ changeRoute: parentRouteChange }) {
    let history = useHistory();
    const brand = useRef(null);
    const starter = useRef(null);
    const device = useRef(null);
    const rebuildable = useRef(null);
    const tank = useRef(null);
    const accessories = useRef(null);
    const liquids = useRef(null);
    const altervatives = useRef(null);

    const changeRoute = (route) => {
        brand.current.classList.remove("show-details");
        starter.current.classList.remove("show-details");
        device.current.classList.remove("show-details");
        rebuildable.current.classList.remove("show-details");
        tank.current.classList.remove("show-details");
        accessories.current.classList.remove("show-details");
        liquids.current.classList.remove("show-details");
        altervatives.current.classList.remove("show-details");
        parentRouteChange(route);
    };

    return (
        <nav id="nav">
            <div className="cus-container">
                <ul className="groupmenu">
                    <li
                        className="item level0 evp-new-arrivals level-top"
                        onClick={() => history.push("/22")}
                    >
                        <a
                            className="menu-link"
                            alt="NEW"
                            id="skip-to-navigation"
                        >
                            <i className="menu-icon img-icon">
                                <img
                                    src="https://www.elementvape.com/pub/media/Dckap/menu-level1/Mobile_Menu_Category_NEW_ARRIVALS_70x62.png"
                                    alt="https://www.elementvape.com/pub/media/Dckap/menu-level1/Mobile_Menu_Category_NEW_ARRIVALS_70x62.png"
                                />
                            </i>
                            <span>NEW</span>
                        </a>
                    </li>
                    <li
                        onClick={() => brand.current.classList.toggle("active")}
                        className="item level0  level-top parent"
                        onMouseEnter={() =>
                            brand.current.classList.add("show-details")
                        }
                        onMouseLeave={() =>
                            brand.current.classList.remove("show-details")
                        }
                    >
                        <a
                            className="menu-link"
                            onClick={() => changeRoute("/53")}
                            alt="BRANDS"
                        >
                            <i className="menu-icon img-icon">
                                <img
                                    src="https://www.elementvape.com/pub/media/Dckap/menu-level1/Mobile_Menu_Category_BRANDS_70x62.png"
                                    alt="https://www.elementvape.com/pub/media/Dckap/menu-level1/Mobile_Menu_Category_BRANDS_70x62.png"
                                />
                            </i>
                            <span>BRANDS</span>
                        </a>
                        <ul ref={brand} className="groupmenu-drop">
                            <li className="item level1">
                                <div className="groupmenu-drop-content">
                                    <div className="container">
                                        <div className="row">
                                            <div className="col-sm-2">
                                                <h3>DEVICE BRANDS</h3>
                                                <ul className="sub-menu">
                                                    <li
                                                        onClick={() =>
                                                            changeRoute("/103")
                                                        }
                                                    >
                                                        <a alt="SMOKTech">
                                                            <span className="mega-menu-sub-title">
                                                                SMOKTech
                                                            </span>
                                                        </a>
                                                    </li>
                                                    <li
                                                        onClick={() =>
                                                            changeRoute("/339")
                                                        }
                                                    >
                                                        <span className="mega-menu-sub-title">
                                                            <a alt="VOOPOO">
                                                                VOOPOO
                                                            </a>
                                                        </span>
                                                    </li>
                                                    <li
                                                        onClick={() =>
                                                            changeRoute("/155")
                                                        }
                                                    >
                                                        <a alt="Geek Vape">
                                                            <span className="mega-menu-sub-title">
                                                                Geek Vape
                                                            </span>
                                                        </a>
                                                    </li>
                                                    <li
                                                        onClick={() =>
                                                            changeRoute("/54")
                                                        }
                                                    >
                                                        <a alt="Innokin">
                                                            <span className="mega-menu-sub-title">
                                                                Innokin
                                                            </span>
                                                        </a>
                                                    </li>
                                                    <li
                                                        onClick={() =>
                                                            changeRoute("/61")
                                                        }
                                                    >
                                                        <a alt="Joyetech">
                                                            <span className="mega-menu-sub-title">
                                                                Joyetech
                                                            </span>
                                                        </a>
                                                    </li>
                                                    <li
                                                        onClick={() =>
                                                            changeRoute("/60")
                                                        }
                                                    >
                                                        <a alt="Eleaf">
                                                            <span className="mega-menu-sub-title">
                                                                Eleaf
                                                            </span>
                                                        </a>
                                                    </li>
                                                    <li
                                                        onClick={() =>
                                                            changeRoute("/129")
                                                        }
                                                    >
                                                        <a alt="Wismec">
                                                            <span className="mega-menu-sub-title">
                                                                Wismec
                                                            </span>
                                                        </a>
                                                    </li>
                                                    <li
                                                        onClick={() =>
                                                            changeRoute("/305")
                                                        }
                                                    >
                                                        <a alt="Suorin">
                                                            <span className="mega-menu-sub-title">
                                                                Suorin
                                                            </span>
                                                        </a>
                                                    </li>
                                                    <li
                                                        onClick={() =>
                                                            changeRoute("/135")
                                                        }
                                                    >
                                                        <a alt="Lost Vape">
                                                            <span className="mega-menu-sub-title">
                                                                Lost Vape
                                                            </span>
                                                        </a>
                                                    </li>
                                                    <li
                                                        onClick={() =>
                                                            changeRoute("/495")
                                                        }
                                                    >
                                                        <span className="mega-menu-sub-title">
                                                            <a alt="Rincoe">
                                                                Rincoe
                                                            </a>
                                                        </span>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="col-sm-2">
                                                <ul className="sub-menu">
                                                    <li
                                                        onClick={() =>
                                                            changeRoute("/57")
                                                        }
                                                    >
                                                        <a alt="Aspire Vape">
                                                            <span className="mega-menu-sub-title">
                                                                Aspire Vape
                                                            </span>
                                                        </a>
                                                    </li>
                                                    <li
                                                        onClick={() =>
                                                            changeRoute("/281")
                                                        }
                                                    >
                                                        <span className="mega-menu-sub-title">
                                                            <a alt="Vandy Vape">
                                                                Vandy Vape
                                                            </a>
                                                        </span>
                                                    </li>
                                                    <li
                                                        onClick={() =>
                                                            changeRoute("/158")
                                                        }
                                                    >
                                                        <a alt="Vaporesso">
                                                            <span className="mega-menu-sub-title">
                                                                Vaporesso
                                                            </span>
                                                        </a>
                                                    </li>
                                                    <li
                                                        onClick={() =>
                                                            changeRoute("/62")
                                                        }
                                                    >
                                                        <a alt="Sigelei">
                                                            <span className="mega-menu-sub-title">
                                                                Sigelei
                                                            </span>
                                                        </a>
                                                    </li>
                                                    <li
                                                        onClick={() =>
                                                            changeRoute("/336")
                                                        }
                                                    >
                                                        <a alt="SnowWolf">
                                                            <span className="mega-menu-sub-title">
                                                                SnowWolf
                                                            </span>
                                                        </a>
                                                    </li>
                                                    <li
                                                        onClick={() =>
                                                            changeRoute("/183")
                                                        }
                                                    >
                                                        <a alt="iJoy">
                                                            <span className="mega-menu-sub-title">
                                                                iJoy
                                                            </span>
                                                        </a>
                                                    </li>
                                                    <li
                                                        onClick={() =>
                                                            changeRoute("/335")
                                                        }
                                                    >
                                                        <a alt="HellVape">
                                                            <span className="mega-menu-sub-title">
                                                                HellVape
                                                            </span>
                                                        </a>
                                                    </li>
                                                    <li
                                                        onClick={() =>
                                                            changeRoute("/98")
                                                        }
                                                    >
                                                        <span className="mega-menu-sub-title">
                                                            <a alt="Uwell">
                                                                Uwell
                                                            </a>
                                                        </span>
                                                    </li>
                                                    <li
                                                        onClick={() =>
                                                            changeRoute("/73")
                                                        }
                                                    >
                                                        <a alt="Wotofo">
                                                            <span className="mega-menu-sub-title">
                                                                Wotofo
                                                            </span>
                                                        </a>
                                                    </li>
                                                    <li
                                                        className="view-all"
                                                        onClick={() =>
                                                            changeRoute("/53")
                                                        }
                                                    >
                                                        <a alt="View All Brands">
                                                            <span className="mega-menu-sub-title">
                                                                View All Brands
                                                            </span>
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="col-sm-2">
                                                <h3>E-JUICE BRANDS</h3>
                                                <ul
                                                    className="sub-menu"
                                                    style={{
                                                        textAlign: "left",
                                                    }}
                                                >
                                                    <li
                                                        onClick={() =>
                                                            changeRoute("/226")
                                                        }
                                                    >
                                                        <a alt="SUA Vapors">
                                                            <span className="mega-menu-sub-title">
                                                                SUA Vapors
                                                            </span>
                                                        </a>
                                                    </li>
                                                    <li
                                                        onClick={() =>
                                                            changeRoute("/265")
                                                        }
                                                    >
                                                        <a alt="Naked 100">
                                                            <span className="mega-menu-sub-title">
                                                                Naked 100
                                                            </span>
                                                        </a>
                                                    </li>
                                                    <li
                                                        onClick={() =>
                                                            changeRoute("/525")
                                                        }
                                                    >
                                                        <a alt="Finest E-Liquid">
                                                            <span className="mega-menu-sub-title">
                                                                Finest E-Liquid
                                                            </span>
                                                        </a>
                                                    </li>
                                                    <li
                                                        onClick={() =>
                                                            changeRoute("/104")
                                                        }
                                                    >
                                                        <a alt="Charlie’s Chalk Dust">
                                                            <span className="mega-menu-sub-title">
                                                                Charlie’s Chalk
                                                                Dust
                                                            </span>
                                                        </a>
                                                    </li>
                                                    <li
                                                        onClick={() =>
                                                            changeRoute("/50")
                                                        }
                                                    >
                                                        <a alt="Cosmic Fog">
                                                            <span className="mega-menu-sub-title">
                                                                Cosmic Fog
                                                            </span>
                                                        </a>
                                                    </li>
                                                    <li
                                                        onClick={() =>
                                                            changeRoute("/227")
                                                        }
                                                    >
                                                        <a alt="Vapetasia">
                                                            Vapetasia
                                                        </a>
                                                    </li>
                                                    <li
                                                        onClick={() =>
                                                            changeRoute("/627")
                                                        }
                                                    >
                                                        <a alt="Sadboy E-Liquid">
                                                            Sadboy E-Liquid
                                                        </a>
                                                    </li>
                                                    <li
                                                        onClick={() =>
                                                            changeRoute("/76")
                                                        }
                                                    >
                                                        <a alt="KILO E-Liquid">
                                                            <span className="mega-menu-sub-title">
                                                                KILO E-Liquid
                                                            </span>
                                                        </a>
                                                    </li>
                                                    <li
                                                        onClick={() =>
                                                            changeRoute("/145")
                                                        }
                                                    >
                                                        <a alt="Mad Hatter Juice">
                                                            <span className="mega-menu-sub-title">
                                                                Mad Hatter Juice
                                                            </span>
                                                        </a>
                                                    </li>
                                                    <li
                                                        onClick={() =>
                                                            changeRoute("/404")
                                                        }
                                                    >
                                                        <a alt="Humble Juice Co.">
                                                            <span className="mega-menu-sub-title">
                                                                Humble Juice Co.
                                                            </span>
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="col-sm-2">
                                                <ul
                                                    className="sub-menu"
                                                    style={{
                                                        textAlign: "left",
                                                    }}
                                                >
                                                    <li
                                                        onClick={() =>
                                                            changeRoute("/525")
                                                        }
                                                    >
                                                        <span className="mega-menu-sub-title">
                                                            <a alt="Finest E-Liquid">
                                                                Finest E-Liquid
                                                            </a>
                                                        </span>
                                                    </li>
                                                    <li
                                                        onClick={() =>
                                                            changeRoute("/145")
                                                        }
                                                    >
                                                        <span className="mega-menu-sub-title">
                                                            <a alt="Mad Hatter Juice">
                                                                Mad Hatter Juice
                                                            </a>
                                                        </span>
                                                    </li>
                                                    <li
                                                        onClick={() =>
                                                            changeRoute("/291")
                                                        }
                                                    >
                                                        <a alt="SKWEZED">
                                                            <span className="mega-menu-sub-title">
                                                                SKWEZED
                                                            </span>
                                                        </a>
                                                    </li>
                                                    <li
                                                        onClick={() =>
                                                            changeRoute("/60")
                                                        }
                                                    >
                                                        <a alt="Shinjin Vapor">
                                                            <span className="mega-menu-sub-title">
                                                                Shinjin Vapor
                                                            </span>
                                                        </a>
                                                    </li>
                                                    <li
                                                        onClick={() =>
                                                            changeRoute("/364")
                                                        }
                                                    >
                                                        <a alt="TWIST E-Liquid">
                                                            <span className="mega-menu-sub-title">
                                                                TWIST E-Liquid
                                                            </span>
                                                        </a>
                                                    </li>
                                                    <li
                                                        onClick={() =>
                                                            changeRoute("/444")
                                                        }
                                                    >
                                                        <a alt="I Love Salts">
                                                            I Love Salts
                                                        </a>
                                                    </li>
                                                    <li
                                                        onClick={() =>
                                                            changeRoute("/420")
                                                        }
                                                    >
                                                        <a alt="SOLACE Vapor">
                                                            <span className="mega-menu-sub-title">
                                                                SOLACE Vapor
                                                            </span>
                                                        </a>
                                                    </li>
                                                    <li
                                                        onClick={() =>
                                                            changeRoute("/588")
                                                        }
                                                    >
                                                        <a alt="GOST Vapor">
                                                            <span className="mega-menu-sub-title">
                                                                GOST Vapor
                                                            </span>
                                                        </a>
                                                    </li>
                                                    <li
                                                        onClick={() =>
                                                            changeRoute("/298")
                                                        }
                                                    >
                                                        <span className="mega-menu-sub-title">
                                                            <a alt="BLVK Unicorn">
                                                                BLVK Unicorn
                                                            </a>
                                                        </span>
                                                    </li>
                                                    <li
                                                        onClick={() =>
                                                            changeRoute("/53")
                                                        }
                                                    >
                                                        <a alt="View All Brands">
                                                            <span className="mega-menu-sub-title">
                                                                View All Brands
                                                            </span>
                                                        </a>
                                                    </li>
                                                </ul>
                                                <div
                                                    id="gtx-trans"
                                                    style={{
                                                        position: "absolute",
                                                        left: "23px",
                                                        top: "121.66px",
                                                    }}
                                                >
                                                    <div className="gtx-trans-icon">
                                                        &nbsp;
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-sm-4">
                                                <div className="menu-img-bloc">
                                                    <a
                                                        onClick={() =>
                                                            changeRoute("/158")
                                                        }
                                                        alt="Vaporesso"
                                                    >
                                                        <img
                                                            src="https://www.elementvape.com/pub/media/wysiwyg/STARTER_KIT_-_Vaporess.jpg"
                                                            alt="Vaporess"
                                                        />
                                                        <p>Vaporesso</p>
                                                    </a>
                                                    <a
                                                        onClick={() =>
                                                            changeRoute("/336")
                                                        }
                                                        alt="SnowWolf"
                                                    >
                                                        {" "}
                                                        <img
                                                            src="https://www.elementvape.com/pub/media/wysiwyg/STARTER_KIT_-_SnowWolf.jpg"
                                                            alt="SnowWolf"
                                                        />
                                                        <p>SnowWolf</p>
                                                    </a>
                                                    <a
                                                        onClick={() =>
                                                            changeRoute("/457")
                                                        }
                                                        alt="SMOK"
                                                    >
                                                        {" "}
                                                        <img
                                                            src="https://www.elementvape.com/pub/media/wysiwyg/STARTER_KIT_-_SMOK.jpg"
                                                            alt="SMOK"
                                                        />
                                                        <p>SMOK</p>
                                                    </a>
                                                    <a
                                                        onClick={() =>
                                                            changeRoute("/155")
                                                        }
                                                        alt="Geek Vape"
                                                    >
                                                        {" "}
                                                        <img
                                                            src="https://www.elementvape.com/pub/media/wysiwyg/STARTER_KIT_-_Geek_Vape.jpg"
                                                            alt="Geek Vape"
                                                        />
                                                        <p>Geek Vape</p>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </li>
                    <li
                        onMouseEnter={() =>
                            starter.current.classList.add("show-details")
                        }
                        onMouseLeave={() =>
                            starter.current.classList.remove("show-details")
                        }
                        onClick={() =>
                            starter.current.classList.toggle("active")
                        }
                        className="item level0  level-top parent"
                    >
                        <a className="menu-link" alt="STARTER KITS">
                            <i className="menu-icon img-icon">
                                <img
                                    src="https://www.elementvape.com/pub/media/Dckap/menu-level1/Mobile_Menu_Category_STARTER_KITS_70x62.png"
                                    alt="https://www.elementvape.com/pub/media/Dckap/menu-level1/Mobile_Menu_Category_STARTER_KITS_70x62.png"
                                />
                            </i>
                            <span>STARTER KITS</span>
                        </a>
                        <ul ref={starter} className="groupmenu-drop">
                            <li className="item level1">
                                <div className=" groupmenu-drop-content">
                                    <div className="container">
                                        <div className="row">
                                            <div className="col-sm-3">
                                                <ul>
                                                    <li
                                                        className="view-all"
                                                        onClick={() =>
                                                            changeRoute("/16")
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
                                                                width={50}
                                                                height={50}
                                                            />
                                                            <a alt="View All Starter Kit">
                                                                View All Starter
                                                                Kit
                                                            </a>
                                                        </span>
                                                    </li>
                                                    <li
                                                        onClick={() =>
                                                            changeRoute("/309")
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
                                                                width={50}
                                                                height={50}
                                                            />{" "}
                                                            <a alt="Box Mod Kits">
                                                                Box Mod Kits
                                                            </a>
                                                        </span>
                                                    </li>
                                                    <li
                                                        onClick={() =>
                                                            changeRoute("/238")
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
                                                                width={50}
                                                                height={50}
                                                            />{" "}
                                                            <a alt="Pod Systems">
                                                                Pod Systems
                                                            </a>
                                                        </span>
                                                    </li>
                                                    <li
                                                        onClick={() =>
                                                            changeRoute("/680")
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
                                                                width={50}
                                                                height={50}
                                                            />{" "}
                                                            <a alt="Pod Mod Systems">
                                                                Pod
                                                                Mod&nbsp;Systems
                                                            </a>
                                                        </span>
                                                    </li>
                                                    <li
                                                        onClick={() =>
                                                            changeRoute("/307")
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
                                                                width={50}
                                                            />{" "}
                                                            <a alt="All-In-One Systems">
                                                                All-In-One
                                                                Systems
                                                            </a>
                                                        </span>
                                                    </li>
                                                    <li
                                                        onClick={() =>
                                                            changeRoute("/308")
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
                                                                width={50}
                                                            />{" "}
                                                            <a alt="Vape Pen Kits">
                                                                Vape Pen Kits
                                                            </a>
                                                        </span>
                                                    </li>
                                                    <li
                                                        onClick={() =>
                                                            changeRoute("/399")
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
                                                                width={50}
                                                            />{" "}
                                                            <a alt="Squonk Kits">
                                                                Squonk Kits
                                                            </a>
                                                        </span>
                                                    </li>
                                                    <li
                                                        onClick={() =>
                                                            changeRoute("/310")
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
                                                                width={50}
                                                            />{" "}
                                                            <a alt="High Power Kits 150W+">
                                                                High Power Kits
                                                                150W+
                                                            </a>
                                                        </span>
                                                    </li>
                                                    <li
                                                        onClick={() =>
                                                            changeRoute("/465")
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
                                                                width={50}
                                                                height={50}
                                                            />{" "}
                                                            <a alt="Disposable E-Cigs">
                                                                Disposable
                                                                E-Cigs
                                                            </a>
                                                        </span>
                                                    </li>
                                                    <li
                                                        onClick={() =>
                                                            changeRoute("/324")
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
                                                                width={50}
                                                                height={50}
                                                            />{" "}
                                                            <a alt="Clearance Vape Kits">
                                                                Clearance Vape
                                                                Kits
                                                            </a>
                                                        </span>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="col-sm-3">
                                                <h3>Starter Kit Brands</h3>
                                                <ul>
                                                    <li
                                                        onClick={() =>
                                                            changeRoute("/103")
                                                        }
                                                    >
                                                        <a alt="SMOKTech">
                                                            SMOKTech
                                                        </a>
                                                    </li>
                                                    <li
                                                        onClick={() =>
                                                            changeRoute("/155")
                                                        }
                                                    >
                                                        <a alt="Geek Vape">
                                                            Geek Vape
                                                        </a>
                                                    </li>
                                                    <li
                                                        onClick={() =>
                                                            changeRoute("/339")
                                                        }
                                                    >
                                                        <a alt="VOOPOO">
                                                            VOOPOO
                                                        </a>
                                                    </li>
                                                    <li
                                                        onClick={() =>
                                                            changeRoute("/54")
                                                        }
                                                    >
                                                        <a alt="Innokin">
                                                            Innokin
                                                        </a>
                                                    </li>
                                                    <li
                                                        onClick={() =>
                                                            changeRoute("/158")
                                                        }
                                                    >
                                                        <a alt="Vaporesso">
                                                            Vaporesso
                                                        </a>
                                                    </li>
                                                    <li
                                                        onClick={() =>
                                                            changeRoute("/129")
                                                        }
                                                    >
                                                        <a alt="Wismec">
                                                            Wismec
                                                        </a>
                                                    </li>
                                                    <li
                                                        onClick={() =>
                                                            changeRoute("/336")
                                                        }
                                                    >
                                                        <a alt="SnowWolf">
                                                            SnowWolf
                                                        </a>
                                                    </li>
                                                    <li
                                                        onClick={() =>
                                                            changeRoute("/98")
                                                        }
                                                    >
                                                        <a alt="UWELL">UWELL</a>
                                                    </li>
                                                    <li
                                                        onClick={() =>
                                                            changeRoute("/62")
                                                        }
                                                    >
                                                        <a alt="Sigelei">
                                                            Sigelei
                                                        </a>
                                                    </li>
                                                    <li
                                                        onClick={() =>
                                                            changeRoute("/61")
                                                        }
                                                    >
                                                        <a alt="Joyetech">
                                                            Joyetech
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="col-sm-6">
                                                <div className="menu-img-bloc">
                                                    <a
                                                        onClick={() =>
                                                            changeRoute("/158")
                                                        }
                                                        alt="Vaporesso"
                                                    >
                                                        <img
                                                            src="https://www.elementvape.com/pub/media/wysiwyg/STARTER_KIT_-_Vaporess.jpg"
                                                            alt="Vaporesso"
                                                        />
                                                        <p>Vaporesso</p>
                                                    </a>
                                                    <a
                                                        onClick={() =>
                                                            changeRoute("/336")
                                                        }
                                                        alt="SnowWolf"
                                                    >
                                                        <img
                                                            src="https://www.elementvape.com/pub/media/wysiwyg/STARTER_KIT_-_SnowWolf.jpg"
                                                            alt="SnowWolf"
                                                        />
                                                        <p>SnowWolf</p>
                                                    </a>
                                                    <a
                                                        alt="SMOK"
                                                        onClick={() =>
                                                            changeRoute("/377")
                                                        }
                                                    >
                                                        <img
                                                            src="https://www.elementvape.com/pub/media/wysiwyg/STARTER_KIT_-_SMOK.jpg"
                                                            alt="SMOK"
                                                        />
                                                        <p>SMOK</p>
                                                    </a>
                                                    <a
                                                        alt="Geek Vape"
                                                        onClick={() =>
                                                            changeRoute("/155")
                                                        }
                                                    >
                                                        <img
                                                            src="https://www.elementvape.com/pub/media/wysiwyg/STARTER_KIT_-_Geek_Vape.jpg"
                                                            alt="Geek Vape"
                                                        />
                                                        <p>Geek Vape</p>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </li>
                    <li
                        onMouseEnter={() =>
                            device.current.classList.add("show-details")
                        }
                        onMouseLeave={() =>
                            device.current.classList.remove("show-details")
                        }
                        onClick={() =>
                            device.current.classList.toggle("active")
                        }
                        className="item level0  level-top parent"
                    >
                        <a className="menu-link" alt="DEVICES">
                            <i className="menu-icon img-icon">
                                <img
                                    src="https://www.elementvape.com/pub/media/Dckap/menu-level1/Mobile_Menu_Category_DEVICES_70x62.png"
                                    alt="https://www.elementvape.com/pub/media/Dckap/menu-level1/Mobile_Menu_Category_DEVICES_70x62.png"
                                />
                            </i>
                            <span>DEVICES</span>
                        </a>
                        <ul ref={device} className="groupmenu-drop">
                            <li className="item level1">
                                <div className=" groupmenu-drop-content">
                                    <div className="container">
                                        <div className="row">
                                            <div className="col-sm-3">
                                                <ul>
                                                    <li
                                                        className="view-all"
                                                        onClick={() =>
                                                            changeRoute("/48")
                                                        }
                                                    >
                                                        <img
                                                            src="https://www.elementvape.com/pub/media/subcategory_icons/All_Box_Mods.jpg"
                                                            alt="All Box Mods"
                                                            width={50}
                                                            height={50}
                                                        />{" "}
                                                        <a alt="All Box Mods">
                                                            All Box Mods
                                                        </a>
                                                    </li>
                                                    <li
                                                        onClick={() =>
                                                            changeRoute("/362")
                                                        }
                                                    >
                                                        <img
                                                            src="https://www.elementvape.com/pub/media/subcategory_icons/Squonk_Box_Mod.jpg"
                                                            alt="Squonk Mods"
                                                            width={50}
                                                            height={50}
                                                        />{" "}
                                                        <a alt="Squonk Mods">
                                                            Squonk Mods
                                                        </a>
                                                    </li>
                                                    <li
                                                        onClick={() =>
                                                            changeRoute("/313")
                                                        }
                                                    >
                                                        <img
                                                            src="https://www.elementvape.com/pub/media/subcategory_icons/High-End_Mod.jpg"
                                                            alt="High-End Mods"
                                                            width={50}
                                                            height={50}
                                                        />{" "}
                                                        <a alt="High-End Mods">
                                                            High-End Mods
                                                        </a>
                                                    </li>
                                                    <li
                                                        onClick={() =>
                                                            changeRoute("/84")
                                                        }
                                                    >
                                                        <img
                                                            src="https://www.elementvape.com/pub/media/subcategory_icons/Temperature_Control_Mod.jpg"
                                                            alt="Temperature Control"
                                                            width={50}
                                                            height={50}
                                                        />{" "}
                                                        <a alt="Temperature Control">
                                                            Temperature Control
                                                        </a>
                                                    </li>
                                                    <li
                                                        onClick={() =>
                                                            changeRoute("/312")
                                                        }
                                                    >
                                                        <img
                                                            src="https://www.elementvape.com/pub/media/subcategory_icons/Built-In_Battery_Mods.jpg"
                                                            alt="Built-In Battery Mods"
                                                            width={50}
                                                            height={50}
                                                        />{" "}
                                                        <a alt="Built-In Battery Mods">
                                                            Built-In Battery
                                                            Mods
                                                        </a>
                                                    </li>
                                                    <li
                                                        onClick={() =>
                                                            changeRoute("/333")
                                                        }
                                                    >
                                                        <img
                                                            src="https://www.elementvape.com/pub/media/subcategory_icons/LED_Light-Up_Mod.jpg"
                                                            alt="Light-Up LED Mods"
                                                            width={50}
                                                            height={50}
                                                        />{" "}
                                                        <a alt="Light-Up LED Mods">
                                                            Light-Up LED Mods
                                                        </a>
                                                    </li>
                                                    <li
                                                        onClick={() =>
                                                            changeRoute("/173")
                                                        }
                                                    >
                                                        <img
                                                            src="https://www.elementvape.com/pub/media/subcategory_icons/Touch_Screen_Box_Mod.jpg"
                                                            alt="Touch Screen Mods"
                                                            width={50}
                                                            height={50}
                                                        />{" "}
                                                        <a alt="Touch Screen Mods">
                                                            Touch Screen Mods
                                                        </a>
                                                    </li>
                                                    <li
                                                        onClick={() =>
                                                            changeRoute("/260")
                                                        }
                                                    >
                                                        <img
                                                            src="https://www.elementvape.com/pub/media/subcategory_icons/DNA_Chip_Box_Mods.jpg"
                                                            alt="DNA Chip Box Mods"
                                                            width={50}
                                                            height={50}
                                                        />{" "}
                                                        <a alt="DNA Chip Box Mods">
                                                            DNA Chip Box Mods
                                                        </a>
                                                    </li>
                                                    <li
                                                        onClick={() =>
                                                            changeRoute("/314")
                                                        }
                                                    >
                                                        <img
                                                            src="https://www.elementvape.com/pub/media/subcategory_icons/High-Power_Mod.jpg"
                                                            alt="High Power Mods 150W+"
                                                            width={50}
                                                            height={50}
                                                        />{" "}
                                                        <a alt="High Power Mods 150W+">
                                                            High Power Mods
                                                            150W+
                                                        </a>
                                                    </li>
                                                    <li
                                                        onClick={() =>
                                                            changeRoute("/415")
                                                        }
                                                    >
                                                        <img
                                                            src="https://www.elementvape.com/pub/media/subcategory_icons/20700_21700_Battery_Mod.jpg"
                                                            alt="20700 / 21700 Battery Mods"
                                                            width={50}
                                                            height={50}
                                                        />
                                                        <a alt="20700 / 21700 Battery Mods">
                                                            20700 / 21700
                                                            Battery Mods
                                                        </a>
                                                    </li>
                                                    <li
                                                        onClick={() =>
                                                            changeRoute("/353")
                                                        }
                                                    >
                                                        <img
                                                            src="https://www.elementvape.com/pub/media/subcategory_icons/Clearance_Mods.jpg"
                                                            alt="Clearance Vape Mods"
                                                            width={50}
                                                            height={50}
                                                        />{" "}
                                                        <a alt="Clearance Vape Mods">
                                                            Clearance Vape Mods
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="col-sm-3">
                                                <h3>Device Brands</h3>
                                                <ul>
                                                    <li
                                                        onClick={() =>
                                                            changeRoute("/367")
                                                        }
                                                    >
                                                        <a alt="DOVPO">DOVPO</a>
                                                    </li>
                                                    <li
                                                        onClick={() =>
                                                            changeRoute("/199")
                                                        }
                                                    >
                                                        <a alt="asMODus">
                                                            asMODus
                                                        </a>
                                                    </li>
                                                    <li
                                                        onClick={() =>
                                                            changeRoute("/142")
                                                        }
                                                    >
                                                        <a alt="YiHi SXmini">
                                                            YiHi SXmini
                                                        </a>
                                                    </li>
                                                    <li
                                                        onClick={() =>
                                                            changeRoute("/651")
                                                        }
                                                    >
                                                        <a alt="EHPRO">EHPRO</a>
                                                    </li>
                                                    <li
                                                        onClick={() =>
                                                            changeRoute("/183")
                                                        }
                                                    >
                                                        <a alt="iJoy">iJoy</a>
                                                    </li>
                                                    <li
                                                        onClick={() =>
                                                            changeRoute("/184")
                                                        }
                                                    >
                                                        <a alt="dotmod">
                                                            dotmod
                                                        </a>
                                                    </li>
                                                    <li
                                                        onClick={() =>
                                                            changeRoute("/391")
                                                        }
                                                    >
                                                        <a alt="Squid Industries">
                                                            Squid Industries
                                                        </a>
                                                    </li>
                                                    <li
                                                        onClick={() =>
                                                            changeRoute("/215")
                                                        }
                                                    >
                                                        <a alt="Smoant">
                                                            Smoant
                                                        </a>
                                                    </li>
                                                    <li
                                                        onClick={() =>
                                                            changeRoute("/60")
                                                        }
                                                    >
                                                        <a alt="Eleaf">Eleaf</a>
                                                    </li>
                                                    <li
                                                        onClick={() =>
                                                            changeRoute("/162")
                                                        }
                                                    >
                                                        <a alt="OBS">OBS</a>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="col-sm-6">
                                                <div className="menu-img-bloc">
                                                    <a
                                                        alt="Wismec"
                                                        onClick={() =>
                                                            changeRoute("/129")
                                                        }
                                                    >
                                                        <img
                                                            src="https://www.elementvape.com/pub/media/wysiwyg/Devices_-_Wismec.jpg"
                                                            alt="Wismec"
                                                        />
                                                        <p>Wismec</p>
                                                    </a>
                                                    <a
                                                        alt="VOOPOO"
                                                        onClick={() =>
                                                            changeRoute("/339")
                                                        }
                                                    >
                                                        <img
                                                            src="https://www.elementvape.com/pub/media/wysiwyg/Devices_-_VOOPOO.jpg"
                                                            alt="VOOPOO"
                                                        />
                                                        <p>VOOPOO</p>
                                                    </a>
                                                    <a
                                                        alt="Lost Vape"
                                                        onClick={() =>
                                                            changeRoute("/135")
                                                        }
                                                    >
                                                        <img
                                                            src="https://www.elementvape.com/pub/media/wysiwyg/Devices_-_Lost_Vape.jpg"
                                                            alt="Lost Vape"
                                                        />
                                                        <p>Lost Vape</p>
                                                    </a>
                                                    <a
                                                        alt="DOVPO"
                                                        onClick={() =>
                                                            changeRoute("/367")
                                                        }
                                                    >
                                                        <img
                                                            src="https://www.elementvape.com/pub/media/wysiwyg/Devices_-_DOVPO.jpg"
                                                            alt="DOVPO"
                                                        />
                                                        <p>DOVPO</p>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </li>
                    <li
                        onMouseEnter={() =>
                            rebuildable.current.classList.add("show-details")
                        }
                        onMouseLeave={() =>
                            rebuildable.current.classList.remove("show-details")
                        }
                        onClick={() =>
                            rebuildable.current.classList.toggle("active")
                        }
                        className="item level0  level-top parent"
                    >
                        <a
                            className="menu-link"
                            alt="REBUILDABLES"
                            onClick={() => changeRoute("/317")}
                        >
                            <i className="menu-icon img-icon">
                                <img
                                    src="https://www.elementvape.com/pub/media/Dckap/menu-level1/Mobile_Menu_Category_REBUILDABLES_70x62.png"
                                    alt="https://www.elementvape.com/pub/media/Dckap/menu-level1/Mobile_Menu_Category_REBUILDABLES_70x62.png"
                                />
                            </i>
                            <span>REBUILDABLES</span>
                        </a>
                        <ul ref={rebuildable} className="groupmenu-drop">
                            <li className="item level1">
                                <div className=" groupmenu-drop-content">
                                    <div className="container">
                                        <div className="row">
                                            <div className="col-sm-3">
                                                <ul>
                                                    <li
                                                        className="view-all"
                                                        onClick={() =>
                                                            changeRoute("/317")
                                                        }
                                                    >
                                                        <img
                                                            src="https://www.elementvape.com/pub/media/subcategory_icons/Clearance_Rebuildables_1.jpg"
                                                            alt="Clearance Rebuildables"
                                                            width={50}
                                                            height={50}
                                                        />
                                                        <a alt="View All Rebuildables">
                                                            View All
                                                            Rebuildables
                                                        </a>
                                                    </li>
                                                    <li
                                                        onClick={() =>
                                                            changeRoute("/43")
                                                        }
                                                    >
                                                        <img
                                                            src="https://www.elementvape.com/pub/media/subcategory_icons/RDA_1.jpg"
                                                            alt="RDA"
                                                            width={50}
                                                            height={50}
                                                        />
                                                        <a alt="RDA">RDA</a>
                                                    </li>
                                                    <li
                                                        onClick={() =>
                                                            changeRoute("/138")
                                                        }
                                                    >
                                                        <img
                                                            src="https://www.elementvape.com/pub/media/subcategory_icons/RTA_1.jpg"
                                                            alt="RTA"
                                                            width={50}
                                                            height={50}
                                                        />
                                                        <a alt="RTA">RTA</a>
                                                    </li>
                                                    <li
                                                        onClick={() =>
                                                            changeRoute("/32")
                                                        }
                                                    >
                                                        <img
                                                            src="https://www.elementvape.com/pub/media/subcategory_icons/RDTA_1.jpg"
                                                            alt="RDTA"
                                                            width={50}
                                                            height={50}
                                                        />
                                                        <a alt="RDTA">RDTA</a>
                                                    </li>
                                                    <li
                                                        onClick={() =>
                                                            changeRoute("/171")
                                                        }
                                                    >
                                                        <img
                                                            src="https://www.elementvape.com/pub/media/subcategory_icons/Postless_Deck_1.jpg"
                                                            alt="Postless Deck"
                                                            width={50}
                                                            height={50}
                                                        />
                                                        <a alt="Postless Deck">
                                                            Postless Deck{" "}
                                                        </a>
                                                    </li>
                                                    <li
                                                        onClick={() =>
                                                            changeRoute("/170")
                                                        }
                                                    >
                                                        <img
                                                            src="https://www.elementvape.com/pub/media/subcategory_icons/Two-Post_Deck_1.jpg"
                                                            alt="Two-Post Deck"
                                                            width={50}
                                                            height={50}
                                                        />
                                                        <a alt="Two-Post Deck">
                                                            Two-Post Deck{" "}
                                                        </a>
                                                    </li>
                                                    <li
                                                        onClick={() =>
                                                            changeRoute("/334")
                                                        }
                                                    >
                                                        <img
                                                            src="https://www.elementvape.com/pub/media/subcategory_icons/Squonk_BF_Rebuildables.jpg"
                                                            alt="Squonk BF RDA"
                                                            width={50}
                                                            height={50}
                                                        />
                                                        <a alt="Squonk BF Rebuildables">
                                                            Squonk BF
                                                            Rebuildables{" "}
                                                        </a>
                                                    </li>
                                                    <li
                                                        onClick={() =>
                                                            changeRoute("/361")
                                                        }
                                                    >
                                                        <img
                                                            src="https://www.elementvape.com/pub/media/subcategory_icons/Clearance_Rebuildables_1.jpg"
                                                            alt="Clearance Rebuildables"
                                                            width={50}
                                                            height={50}
                                                        />{" "}
                                                        <a alt="Clearance Rebuildables">
                                                            Clearance
                                                            Rebuildables{" "}
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="col-sm-3">
                                                <h3>Rebuildables Brands</h3>
                                                <ul>
                                                    <li
                                                        onClick={() =>
                                                            changeRoute("/335")
                                                        }
                                                    >
                                                        <a alt="HellVape">
                                                            HellVape
                                                        </a>
                                                    </li>
                                                    <li
                                                        onClick={() =>
                                                            changeRoute("/155")
                                                        }
                                                    >
                                                        <a alt="Geek Vape">
                                                            Geek Vape
                                                        </a>
                                                    </li>
                                                    <li
                                                        onClick={() =>
                                                            changeRoute("/73")
                                                        }
                                                    >
                                                        <a alt="Wotofo">
                                                            Wotofo
                                                        </a>
                                                    </li>
                                                    <li
                                                        onClick={() =>
                                                            changeRoute("/281")
                                                        }
                                                    >
                                                        <a alt="Vandy Vape">
                                                            Vandy Vape
                                                        </a>
                                                    </li>
                                                    <li
                                                        onClick={() =>
                                                            changeRoute("/619")
                                                        }
                                                    >
                                                        <a alt="OUMIER">
                                                            OUMIER
                                                        </a>
                                                    </li>
                                                    <li
                                                        onClick={() =>
                                                            changeRoute("/645")
                                                        }
                                                    >
                                                        <a alt="Damn Vape">
                                                            Damn Vape
                                                        </a>
                                                    </li>
                                                    <li
                                                        onClick={() =>
                                                            changeRoute("/214")
                                                        }
                                                    >
                                                        <a alt="CoilART">
                                                            CoilART
                                                        </a>
                                                    </li>
                                                    <li
                                                        onClick={() =>
                                                            changeRoute("/195")
                                                        }
                                                    >
                                                        <a alt="Augvape">
                                                            Augvape
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="col-sm-6">
                                                <div className="menu-img-bloc">
                                                    <a
                                                        alt="Wotofo"
                                                        onClick={() =>
                                                            changeRoute("/73")
                                                        }
                                                    >
                                                        <img
                                                            src="https://www.elementvape.com/pub/media/wysiwyg/Rebuildables_-_Wotofo.png"
                                                            alt="Wotofo"
                                                        />
                                                        <p>Wotofo</p>
                                                    </a>
                                                    <a
                                                        alt="Vandy Vape"
                                                        onClick={() =>
                                                            changeRoute("/281")
                                                        }
                                                    >
                                                        {" "}
                                                        <img
                                                            src="https://www.elementvape.com/pub/media/wysiwyg/Rebuildables_-_Vandy_Vape.png"
                                                            alt="Vandy Vape"
                                                        />
                                                        <p>Vandy Vape</p>
                                                    </a>
                                                    <a
                                                        alt="HellVape"
                                                        onClick={() =>
                                                            changeRoute("/335")
                                                        }
                                                    >
                                                        {" "}
                                                        <img
                                                            src="https://www.elementvape.com/pub/media/wysiwyg/Rebuildables_-_HellVape.png"
                                                            alt="HellVape"
                                                        />
                                                        <p>HellVape</p>
                                                    </a>
                                                    <a
                                                        alt="Geek Vape"
                                                        onClick={() =>
                                                            changeRoute("/155")
                                                        }
                                                    >
                                                        {" "}
                                                        <img
                                                            src="https://www.elementvape.com/pub/media/wysiwyg/Rebuildables_-_Geek_Vape.png"
                                                            alt="Geek Vape"
                                                        />
                                                        <p>Geek Vape</p>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </li>
                    <li
                        onMouseEnter={() =>
                            tank.current.classList.add("show-details")
                        }
                        onMouseLeave={() =>
                            tank.current.classList.remove("show-details")
                        }
                        onClick={() => tank.current.classList.toggle("active")}
                        className="item level0  level-top parent"
                    >
                        <a
                            onClick={() => changeRoute("/13")}
                            className="menu-link"
                            alt="TANKS"
                        >
                            <i className="menu-icon img-icon">
                                <img
                                    src="https://www.elementvape.com/pub/media/Dckap/menu-level1/Mobile_Menu_Category_TANKS_70x62.png"
                                    alt="https://www.elementvape.com/pub/media/Dckap/menu-level1/Mobile_Menu_Category_TANKS_70x62.png"
                                />
                            </i>
                            <span>TANKS</span>
                        </a>
                        <ul
                            ref={tank}
                            className="groupmenu-drop slidedown"
                            style={{
                                width: "1484px",
                                left: "-785.266px",
                                display: "none",
                            }}
                        >
                            <li className="item level1  text-content">
                                <div
                                    className=" groupmenu-drop-content groupmenu-width-18"
                                    style={{}}
                                >
                                    <div className="container">
                                        <div className="row">
                                            <div className="col-sm-3">
                                                <ul>
                                                    <li
                                                        className="view-all"
                                                        onClick={() =>
                                                            changeRoute("/13")
                                                        }
                                                    >
                                                        <img
                                                            src="https://www.elementvape.com/pub/media/subcategory_icons/All_Sub-Ohm_Tanks_1.jpg"
                                                            alt="All Sub-Ohm Tanks"
                                                            width={50}
                                                            height={50}
                                                        />
                                                        <a alt="All Sub-Ohm Tanks">
                                                            All Sub-Ohm Tanks{" "}
                                                        </a>
                                                    </li>
                                                    <li
                                                        onClick={() =>
                                                            changeRoute("/516")
                                                        }
                                                    >
                                                        <img
                                                            src="https://www.elementvape.com/pub/media/subcategory_icons/Mesh_Coil_Tanks__1.jpg"
                                                            alt="Mesh Coil Tanks"
                                                            width={50}
                                                            height={50}
                                                        />
                                                        <a alt="Mesh Coil Tanks">
                                                            {" "}
                                                            Mesh Coil Tanks
                                                        </a>
                                                    </li>
                                                    <li
                                                        onClick={() =>
                                                            changeRoute("/169")
                                                        }
                                                    >
                                                        <img
                                                            src="https://www.elementvape.com/pub/media/subcategory_icons/Ceramic_Coil_Tanks_1.jpg"
                                                            alt="Ceramic Coil Tanks"
                                                            width={50}
                                                            height={50}
                                                        />
                                                        <a alt="Ceramic Coil Tanks">
                                                            {" "}
                                                            Ceramic Coil Tanks{" "}
                                                        </a>
                                                    </li>
                                                    <li
                                                        onClick={() =>
                                                            changeRoute("/94")
                                                        }
                                                    >
                                                        <img
                                                            src="https://www.elementvape.com/pub/media/subcategory_icons/Temperature_Control_1.jpg"
                                                            alt="Temperature Control"
                                                            width={50}
                                                            height={50}
                                                        />
                                                        <a alt="Temperature Control">
                                                            Temperature Control{" "}
                                                        </a>
                                                    </li>
                                                    <li
                                                        onClick={() =>
                                                            changeRoute("/315")
                                                        }
                                                    >
                                                        <img
                                                            src="https://www.elementvape.com/pub/media/subcategory_icons/High_Power_Tanks_150W__1.jpg"
                                                            alt="High Power Tanks"
                                                            width={50}
                                                            height={50}
                                                        />
                                                        <a alt="High Power Tanks 150W+">
                                                            High Power Tanks
                                                            150W+{" "}
                                                        </a>
                                                    </li>
                                                    <li
                                                        onClick={() =>
                                                            changeRoute("/618")
                                                        }
                                                    >
                                                        <img
                                                            src="https://www.elementvape.com/pub/media/subcategory_icons/Disposable_Vape_Tanks_1.jpg"
                                                            alt="Disposable Vape Tanks"
                                                            width={50}
                                                            height={50}
                                                        />
                                                        <a alt="Disposable Vape Tanks">
                                                            Disposable Vape
                                                            Tanks{" "}
                                                        </a>
                                                    </li>
                                                    <li
                                                        onClick={() =>
                                                            changeRoute("/316")
                                                        }
                                                    >
                                                        <img
                                                            src="https://www.elementvape.com/pub/media/subcategory_icons/Clearance_Tanks_1.jpg"
                                                            alt="Clearance Tanks"
                                                            width={50}
                                                            height={50}
                                                        />
                                                        <a alt="Clearance Tanks">
                                                            {" "}
                                                            Clearance Tanks
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="col-sm-3">
                                                <h3>Tanks Brands</h3>
                                                <ul>
                                                    <li
                                                        onClick={() =>
                                                            changeRoute("/74")
                                                        }
                                                    >
                                                        <a alt="Horizon Tech">
                                                            Horizon Tech
                                                        </a>
                                                    </li>
                                                    <li
                                                        onClick={() =>
                                                            changeRoute("/392")
                                                        }
                                                    >
                                                        <a alt="FreeMaX">
                                                            FreeMaX
                                                        </a>
                                                    </li>
                                                    <li
                                                        onClick={() =>
                                                            changeRoute("/98")
                                                        }
                                                    >
                                                        <a alt="UWELL">UWELL</a>
                                                    </li>
                                                    <li
                                                        onClick={() =>
                                                            changeRoute("/57")
                                                        }
                                                    >
                                                        <a alt="Aspire">
                                                            Aspire
                                                        </a>
                                                    </li>
                                                    <li
                                                        onClick={() =>
                                                            changeRoute("/54")
                                                        }
                                                    >
                                                        <a alt="Innokin">
                                                            Innokin
                                                        </a>
                                                    </li>
                                                    <li
                                                        onClick={() =>
                                                            changeRoute("/457")
                                                        }
                                                    >
                                                        <a alt="SMOK">SMOK</a>
                                                    </li>
                                                    <li
                                                        onClick={() =>
                                                            changeRoute("/155")
                                                        }
                                                    >
                                                        <a alt="Geek Vape">
                                                            Geek Vape
                                                        </a>
                                                    </li>
                                                    <li
                                                        onClick={() =>
                                                            changeRoute("/99")
                                                        }
                                                    >
                                                        <a alt="Sense Tech">
                                                            Sense Tech
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="col-sm-6">
                                                <div className="menu-img-bloc">
                                                    <a
                                                        alt="UWELL"
                                                        onClick={() =>
                                                            changeRoute("/98")
                                                        }
                                                    >
                                                        <img
                                                            src="https://www.elementvape.com/pub/media/wysiwyg/Tanks_-_UWELL.jpg"
                                                            alt="UWELL"
                                                        />
                                                        <p>UWELL</p>
                                                    </a>
                                                    <a
                                                        alt="SMOKTech"
                                                        onClick={() =>
                                                            changeRoute("/103")
                                                        }
                                                    >
                                                        {" "}
                                                        <img
                                                            src="https://www.elementvape.com/pub/media/wysiwyg/Tanks_-_SMOK.jpg"
                                                            alt="SMOKTech"
                                                        />
                                                        <p>SMOKTech</p>
                                                    </a>
                                                    <a
                                                        alt="HorizonTech"
                                                        onClick={() =>
                                                            changeRoute("/74")
                                                        }
                                                    >
                                                        {" "}
                                                        <img
                                                            src="https://www.elementvape.com/pub/media/wysiwyg/Tanks_-_Horizon.jpg"
                                                            alt="HorizonTech"
                                                        />
                                                        <p>HorizonTech</p>
                                                    </a>
                                                    <a
                                                        alt="FreeMaX"
                                                        onClick={() =>
                                                            changeRoute("/392")
                                                        }
                                                    >
                                                        {" "}
                                                        <img
                                                            src="https://www.elementvape.com/pub/media/wysiwyg/Tanks_-_FreeMaX.jpg"
                                                            alt="FreeMaX"
                                                        />
                                                        <p>FreeMaX</p>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </li>
                    <li
                        onMouseEnter={() =>
                            accessories.current.classList.add("show-details")
                        }
                        onMouseLeave={() =>
                            accessories.current.classList.remove("show-details")
                        }
                        onClick={() =>
                            accessories.current.classList.toggle("active")
                        }
                        className="item level0  level-top parent"
                    >
                        <a
                            className="menu-link"
                            alt="ACCESSORIES"
                            onClick={() => changeRoute("/9")}
                        >
                            <i className="menu-icon img-icon">
                                <img
                                    src="https://www.elementvape.com/pub/media/Dckap/menu-level1/Mobile_Menu_Category_ACCESSORIES_70x62.png"
                                    alt="https://www.elementvape.com/pub/media/Dckap/menu-level1/Mobile_Menu_Category_ACCESSORIES_70x62.png"
                                />
                            </i>
                            <span>ACCESSORIES</span>
                        </a>
                        <ul
                            ref={accessories}
                            className="groupmenu-drop slidedown"
                        >
                            <li className="item level1">
                                <div className=" groupmenu-drop-content">
                                    <div className="container">
                                        <div className="row">
                                            <div className="col-sm-3">
                                                <ul>
                                                    <li
                                                        className="view-all"
                                                        onClick={() =>
                                                            changeRoute("/9")
                                                        }
                                                    >
                                                        <img
                                                            src="https://www.elementvape.com/pub/media/subcategory_icons/Replacement_Pod_Cartridges.jpg"
                                                            alt="Replacement Pod Cartridges"
                                                            width={50}
                                                            height={50}
                                                        />
                                                        <a alt="View All Accessories">
                                                            View All Accessories
                                                        </a>
                                                    </li>
                                                    <li
                                                        onClick={() =>
                                                            changeRoute("/8")
                                                        }
                                                    >
                                                        <img
                                                            src="https://www.elementvape.com/pub/media/subcategory_icons/Drip_Tips.jpg"
                                                            alt="Drip Tips"
                                                            width={50}
                                                            height={50}
                                                        />{" "}
                                                        <a alt="Drip Tips">
                                                            {" "}
                                                            Drip Tips{" "}
                                                        </a>
                                                    </li>
                                                    <li
                                                        onClick={() =>
                                                            changeRoute("/22")
                                                        }
                                                    >
                                                        <img
                                                            src="https://www.elementvape.com/pub/media/subcategory_icons/Batteries.jpg"
                                                            alt="Batteries"
                                                            width={50}
                                                            height={50}
                                                        />{" "}
                                                        <a alt="Batteries">
                                                            {" "}
                                                            Batteries{" "}
                                                        </a>
                                                    </li>
                                                    <li
                                                        onClick={() =>
                                                            changeRoute("/23")
                                                        }
                                                    >
                                                        <img
                                                            src="https://www.elementvape.com/pub/media/subcategory_icons/Chargers.jpg"
                                                            alt="Chargers"
                                                            width={50}
                                                            height={50}
                                                        />{" "}
                                                        <a alt="Chargers">
                                                            {" "}
                                                            Chargers{" "}
                                                        </a>
                                                    </li>
                                                    <li
                                                        onClick={() =>
                                                            changeRoute("/45")
                                                        }
                                                    >
                                                        <img
                                                            src="https://www.elementvape.com/pub/media/subcategory_icons/Replacement_Parts.jpg"
                                                            alt="Replacement Parts"
                                                            width={50}
                                                            height={50}
                                                        />{" "}
                                                        <a alt="Replacement Parts">
                                                            Replacement Parts{" "}
                                                        </a>
                                                    </li>
                                                    <li
                                                        onClick={() =>
                                                            changeRoute("/86")
                                                        }
                                                    >
                                                        <img
                                                            src="https://www.elementvape.com/pub/media/subcategory_icons/Rebuildable_Materials.jpg"
                                                            alt="Rebuildable Materials"
                                                            width={50}
                                                            height={50}
                                                        />{" "}
                                                        <a alt="Rebuildable Materials">
                                                            Rebuildable
                                                            Materials{" "}
                                                        </a>
                                                    </li>
                                                    <li
                                                        onClick={() =>
                                                            changeRoute("/93")
                                                        }
                                                    >
                                                        <img
                                                            src="https://www.elementvape.com/pub/media/subcategory_icons/Replacement_Coils.jpg"
                                                            alt=" Replacement Coils"
                                                            width={50}
                                                            height={50}
                                                        />{" "}
                                                        <a alt="Replacement Coils">
                                                            Replacement Coils{" "}
                                                        </a>
                                                    </li>
                                                    <li
                                                        onClick={() =>
                                                            changeRoute("/318")
                                                        }
                                                    >
                                                        <img
                                                            src="https://www.elementvape.com/pub/media/subcategory_icons/Rebuildable_Tools.jpg"
                                                            alt="Rebuildable Tools"
                                                            width={50}
                                                            height={50}
                                                        />{" "}
                                                        <a alt="Rebuildable Tools">
                                                            Rebuildable Tools{" "}
                                                        </a>
                                                    </li>
                                                    <li
                                                        onClick={() =>
                                                            changeRoute("/319")
                                                        }
                                                    >
                                                        <img
                                                            src="https://www.elementvape.com/pub/media/subcategory_icons/Rebuildable_Materials.jpg"
                                                            alt="Performance Wires"
                                                            width={50}
                                                            height={50}
                                                        />{" "}
                                                        <a alt="Performance Wires">
                                                            Performance Wires{" "}
                                                        </a>
                                                    </li>
                                                    <li
                                                        onClick={() =>
                                                            changeRoute("/411")
                                                        }
                                                    >
                                                        <img
                                                            src="https://www.elementvape.com/pub/media/subcategory_icons/Replacement_Pod_Cartridges.jpg"
                                                            alt="Replacement Pod Cartridges"
                                                            width={50}
                                                            height={50}
                                                        />
                                                        <a alt="Replacement Pod Cartridges">
                                                            {" "}
                                                            Replacement Pod
                                                            Cartridges
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="col-sm-3">
                                                <h3>Accessories Brands</h3>
                                                <ul>
                                                    <li
                                                        onClick={() =>
                                                            changeRoute("/229")
                                                        }
                                                    >
                                                        <a alt="Coil Master">
                                                            Coil Master
                                                        </a>
                                                    </li>
                                                    <li
                                                        onClick={() =>
                                                            changeRoute("/337")
                                                        }
                                                    >
                                                        <a alt="Coilology">
                                                            Coilology
                                                        </a>
                                                    </li>
                                                    <li
                                                        onClick={() =>
                                                            changeRoute("/56")
                                                        }
                                                    >
                                                        <a alt="Efest">Efest</a>
                                                    </li>
                                                    <li
                                                        onClick={() =>
                                                            changeRoute("/66")
                                                        }
                                                    >
                                                        <a alt="Nitecore">
                                                            Nitecore
                                                        </a>
                                                    </li>
                                                    <li
                                                        onClick={() =>
                                                            changeRoute("/130")
                                                        }
                                                    >
                                                        <a alt="Hohm Tech">
                                                            Hohm Tech
                                                        </a>
                                                    </li>
                                                    <li
                                                        onClick={() =>
                                                            changeRoute("/73")
                                                        }
                                                    >
                                                        <a alt="Wotofo">
                                                            Wotofo
                                                        </a>
                                                    </li>
                                                    <li
                                                        onClick={() =>
                                                            changeRoute("/281")
                                                        }
                                                    >
                                                        <a alt="Vandy Vape">
                                                            Vandy Vape
                                                        </a>
                                                    </li>
                                                    <li
                                                        onClick={() =>
                                                            changeRoute("/155")
                                                        }
                                                    >
                                                        <a alt="Geek Vape">
                                                            Geek Vape
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="col-sm-6">
                                                <div className="menu-img-bloc">
                                                    <a
                                                        alt="Nitecore"
                                                        onClick={() =>
                                                            changeRoute("/66")
                                                        }
                                                    >
                                                        <img
                                                            src="https://www.elementvape.com/pub/media/wysiwyg/Acessories_-_Nitecore.jpg"
                                                            alt="Nitecore"
                                                        />
                                                        <p>Nitecore</p>
                                                    </a>
                                                    <a
                                                        alt="Hohm Tech"
                                                        onClick={() =>
                                                            changeRoute("/130")
                                                        }
                                                    >
                                                        {" "}
                                                        <img
                                                            src="https://www.elementvape.com/pub/media/wysiwyg/Accessories_-_Hohm_Tech.jpg"
                                                            alt="Hohm Tech"
                                                        />
                                                        <p>Hohm Tech</p>
                                                    </a>
                                                    <a
                                                        alt="COTN Threads"
                                                        onClick={() =>
                                                            changeRoute("/4")
                                                        }
                                                    >
                                                        {" "}
                                                        <img
                                                            src="https://www.elementvape.com/pub/media/wysiwyg/Accessories_-_COTN.jpg"
                                                            alt="COTN Threads"
                                                        />
                                                        <p>COTN Threads</p>
                                                    </a>
                                                    <a
                                                        alt="Coil Master"
                                                        onClick={() =>
                                                            changeRoute("/229")
                                                        }
                                                    >
                                                        {" "}
                                                        <img
                                                            src="https://www.elementvape.com/pub/media/wysiwyg/Accessories_-_Coil_Master.jpg"
                                                            alt="Coil Master"
                                                        />
                                                        <p>Coil Master</p>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </li>
                    <li
                        onMouseEnter={() =>
                            liquids.current.classList.add("show-details")
                        }
                        onMouseLeave={() =>
                            liquids.current.classList.remove("show-details")
                        }
                        onClick={() =>
                            liquids.current.classList.toggle("active")
                        }
                        className="item level0  level-top parent"
                    >
                        <a className="menu-link" alt="E-LIQUIDS">
                            <i className="menu-icon img-icon">
                                <img
                                    src="https://www.elementvape.com/pub/media/Dckap/menu-level1/Mobile_Menu_Category_E-LIQUIDS_70x62.png"
                                    alt="https://www.elementvape.com/pub/media/Dckap/menu-level1/Mobile_Menu_Category_E-LIQUIDS_70x62.png"
                                />
                            </i>
                            <span>E-LIQUIDS</span>
                        </a>
                        <ul ref={liquids} className="groupmenu-drop slidedown">
                            <li className="item level1">
                                <div className=" groupmenu-drop-content">
                                    <div className="container">
                                        <div className="row">
                                            <div className="col-sm-3">
                                                <ul>
                                                    <li
                                                        className="view-all"
                                                        onClick={() =>
                                                            changeRoute("/389")
                                                        }
                                                    >
                                                        <img
                                                            src="https://www.elementvape.com/pub/media/subcategory_icons/All_E-Liquids.jpg"
                                                            alt="All E-Liquids"
                                                            width={50}
                                                            height={50}
                                                        />
                                                        <a alt="All E-Liquids">
                                                            {" "}
                                                            All E-Liquids{" "}
                                                        </a>
                                                    </li>
                                                    <li
                                                        onClick={() =>
                                                            changeRoute("/373")
                                                        }
                                                    >
                                                        <img
                                                            src="https://www.elementvape.com/pub/media/subcategory_icons/Nicotine_Salts_E-Liquid.jpg"
                                                            alt="Nicotine Salts"
                                                            width={50}
                                                            height={50}
                                                        />
                                                        <a alt="Nicotine Salts E-Liquid">
                                                            Nicotine Salts
                                                            E-Liquid{" "}
                                                        </a>
                                                    </li>
                                                    <li
                                                        onClick={() =>
                                                            changeRoute("/105")
                                                        }
                                                    >
                                                        <img
                                                            src="https://www.elementvape.com/pub/media/subcategory_icons/Combo_Packs_Deal.jpg"
                                                            alt="Combo Packs"
                                                            width={50}
                                                            height={50}
                                                        />
                                                        <a alt="Combo Packs Deal">
                                                            Combo Packs Deal{" "}
                                                        </a>
                                                    </li>
                                                    <li
                                                        onClick={() =>
                                                            changeRoute("/478")
                                                        }
                                                    >
                                                        <img
                                                            src="https://www.elementvape.com/pub/media/subcategory_icons/Fruit_Flavors_E-Liquid.jpg"
                                                            alt="Fruit Flavors E-Liquid"
                                                            width={50}
                                                            height={50}
                                                        />
                                                        <a alt="Fruit Flavors E-Liquid">
                                                            Fruit Flavors
                                                            E-Liquid{" "}
                                                        </a>
                                                    </li>
                                                    <li
                                                        onClick={() =>
                                                            changeRoute("/609")
                                                        }
                                                    >
                                                        <img
                                                            src="https://www.elementvape.com/pub/media/subcategory_icons/Dessert_Flavors_E-Liquid.jpg"
                                                            alt="Dessert Flavors E-Liquid"
                                                            width={50}
                                                            height={50}
                                                        />
                                                        <a alt="Dessert Flavors E-Liquid">
                                                            Dessert Flavors
                                                            E-Liquid{" "}
                                                        </a>
                                                    </li>
                                                    <li
                                                        onClick={() =>
                                                            changeRoute("/608")
                                                        }
                                                    >
                                                        <img
                                                            src="https://www.elementvape.com/pub/media/subcategory_icons/Methol_Flavors_E-Liquid.jpg"
                                                            alt="Menthol Flavors E-Liquid"
                                                            width={50}
                                                            height={50}
                                                        />
                                                        <a alt="Menthol Flavors E-Liquid">
                                                            Menthol Flavors
                                                            E-Liquid{" "}
                                                        </a>
                                                    </li>
                                                    <li
                                                        onClick={() =>
                                                            changeRoute("/607")
                                                        }
                                                    >
                                                        <img
                                                            src="https://www.elementvape.com/pub/media/subcategory_icons/Tobacco_Flavors_E-Liquid.jpg"
                                                            alt="Tobacco Flavors E-Liquid"
                                                            width={50}
                                                            height={50}
                                                        />
                                                        <a alt="Tobacco Flavors E-Liquid">
                                                            Tobacco Flavors
                                                            E-Liquid{" "}
                                                        </a>
                                                    </li>
                                                    <li
                                                        onClick={() =>
                                                            changeRoute("/320")
                                                        }
                                                    >
                                                        <img
                                                            src="https://www.elementvape.com/pub/media/subcategory_icons/Clearance_E-Liquids.jpg"
                                                            alt="Clearance E-Liquid"
                                                            width={50}
                                                            height={50}
                                                        />
                                                        <a alt="Clearance E-Liquids">
                                                            Clearance E-Liquids{" "}
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="col-sm-3">
                                                <h3>E-Liquids Brands</h3>
                                                <ul>
                                                    <li
                                                        onClick={() =>
                                                            changeRoute("/265")
                                                        }
                                                    >
                                                        <a alt="Naked 100">
                                                            Naked 100
                                                        </a>
                                                    </li>
                                                    <li
                                                        onClick={() =>
                                                            changeRoute("/226")
                                                        }
                                                    >
                                                        <a alt="SUA Vapors">
                                                            SUA Vapors
                                                        </a>
                                                    </li>
                                                    <li
                                                        onClick={() =>
                                                            changeRoute("/227")
                                                        }
                                                    >
                                                        <a alt="Vapetasia">
                                                            Vapetasia
                                                        </a>
                                                    </li>
                                                    <li
                                                        onClick={() =>
                                                            changeRoute("/525")
                                                        }
                                                    >
                                                        <a alt="Finest E-Liquid">
                                                            Finest E-Liquid
                                                        </a>
                                                    </li>
                                                    <li
                                                        onClick={() =>
                                                            changeRoute("/112")
                                                        }
                                                    >
                                                        <a alt="7 Daze E-Liquid">
                                                            7 Daze E-Liquid
                                                        </a>
                                                    </li>
                                                    <li
                                                        onClick={() =>
                                                            changeRoute("/599")
                                                        }
                                                    >
                                                        <a alt="Coastal Clouds">
                                                            Coastal Clouds
                                                        </a>
                                                    </li>
                                                    <li
                                                        onClick={() =>
                                                            changeRoute("/455")
                                                        }
                                                    >
                                                        <a alt="Pachamama E-Liquid">
                                                            Pachamama E-Liquid
                                                        </a>
                                                    </li>
                                                    <li
                                                        onClick={() =>
                                                            changeRoute("/286")
                                                        }
                                                    >
                                                        <a alt="Jam Monster Liquids">
                                                            Jam Monster Liquids
                                                        </a>
                                                    </li>
                                                    <li
                                                        onClick={() =>
                                                            changeRoute("/627")
                                                        }
                                                    >
                                                        <a alt="Sadboy E-Liquid">
                                                            Sadboy E-Liquid
                                                        </a>
                                                    </li>
                                                    <li
                                                        onClick={() =>
                                                            changeRoute("/175")
                                                        }
                                                    >
                                                        <a alt="Ruthless E-Liquid">
                                                            Ruthless E-Liquid
                                                        </a>
                                                    </li>
                                                </ul>
                                                <div
                                                    id="gtx-trans"
                                                    style={{
                                                        position: "absolute",
                                                        left: "-107px",
                                                        top: "113.771px",
                                                    }}
                                                >
                                                    <div className="gtx-trans-icon">
                                                        &nbsp;
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-sm-6">
                                                <div className="menu-img-bloc">
                                                    <a
                                                        alt="Finest E-Liquid"
                                                        onClick={() =>
                                                            changeRoute("/525")
                                                        }
                                                    >
                                                        {" "}
                                                        <img
                                                            src="https://www.elementvape.com/pub/media/homepage_banners/finest2.jpg"
                                                            alt="finest2"
                                                        />
                                                        <p>Finest E-Liquid</p>
                                                    </a>
                                                    <a
                                                        alt="Twist E-Liquid"
                                                        onClick={() =>
                                                            changeRoute("/364")
                                                        }
                                                    >
                                                        {" "}
                                                        <img
                                                            src="https://www.elementvape.com/pub/media/homepage_banners/twstsalt2.jpg"
                                                            alt="twstsalt2"
                                                            width={180}
                                                            height={120}
                                                        />
                                                        <p>Twist E-Liquid</p>
                                                    </a>
                                                    <a
                                                        alt="Solace Vapor"
                                                        onClick={() =>
                                                            changeRoute("/420")
                                                        }
                                                    >
                                                        {" "}
                                                        <img
                                                            src="https://www.elementvape.com/pub/media/homepage_banners/Solace.jpg"
                                                            alt="Solace"
                                                        />
                                                        <p>Solace Vapor</p>
                                                    </a>
                                                    <a
                                                        alt="Charlie's Chalk Dusts"
                                                        onClick={() =>
                                                            changeRoute("/104")
                                                        }
                                                    >
                                                        <img
                                                            src="https://www.elementvape.com/pub/media/homepage_banners/Charlie.jpg"
                                                            alt="Charlie"
                                                            width={180}
                                                            height={120}
                                                        />
                                                        <p>
                                                            Charlie's Chalk
                                                            Dusts
                                                        </p>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </li>
                    <li
                        onMouseEnter={() =>
                            altervatives.current.classList.add("show-details")
                        }
                        onMouseLeave={() =>
                            altervatives.current.classList.remove(
                                "show-details"
                            )
                        }
                        onClick={() =>
                            altervatives.current.classList.toggle("active")
                        }
                        className="item level0  level-top parent"
                    >
                        <a
                            className="menu-link"
                            alt="ALTERNATIVES"
                            onClick={() => changeRoute("/448")}
                        >
                            <i className="menu-icon img-icon">
                                <img
                                    src="https://www.elementvape.com/pub/media/Dckap/menu-level1/Mobile_Menu_Category_ALTERNATIVES_70x62.png"
                                    alt="https://www.elementvape.com/pub/media/Dckap/menu-level1/Mobile_Menu_Category_ALTERNATIVES_70x62.png"
                                />
                            </i>
                            <span>ALTERNATIVES</span>
                        </a>
                        <ul
                            ref={altervatives}
                            className="groupmenu-drop slidedown"
                        >
                            <li className="item level1">
                                <div className=" groupmenu-drop-content">
                                    <div className="container">
                                        <div className="row">
                                            <div className="col-sm-3">
                                                <ul>
                                                    <li
                                                        className="view-all"
                                                        className="view-all"
                                                        onClick={() =>
                                                            changeRoute("/653")
                                                        }
                                                    >
                                                        <img
                                                            src="https://elementvape.com/pub/media/subcategory_icons/Mobile_Menu_Sub-Category_ALTERNATIVES_All_50x50.jpg"
                                                            alt="All Vaporizers"
                                                            width={50}
                                                            height={50}
                                                        />
                                                        <a alt="All Vaporizers">
                                                            All Vaporizers
                                                        </a>
                                                    </li>
                                                    <li
                                                        className="view-all"
                                                        onClick={() =>
                                                            changeRoute("/669")
                                                        }
                                                    >
                                                        <img
                                                            src="https://www.elementvape.com/pub/media/subcategory_icons/Mobile_Menu_Sub-Category_ALTERNATIVES_eGo_510_Battery_Devices_100x100.jpg"
                                                            alt="Dry Herb Vaporizers"
                                                            width={50}
                                                            height={50}
                                                        />
                                                        <a alt="eGo 510 Battery Device">
                                                            eGo 510 Battery
                                                            Device
                                                        </a>
                                                    </li>
                                                    <li
                                                        onClick={() =>
                                                            changeRoute("/639")
                                                        }
                                                    >
                                                        <img
                                                            src="https://www.elementvape.com/pub/media/subcategory_icons/Mobile_Menu_Sub-Category_ALTERNATIVES_Dry_Herb_Vaporizers_100x100.jpg"
                                                            alt="Dry Herb Vaporizers"
                                                            width={50}
                                                            height={50}
                                                        />{" "}
                                                        <a alt="Dry Herb Vaporizers">
                                                            Dry Herb Vaporizers{" "}
                                                        </a>
                                                    </li>
                                                    <li
                                                        onClick={() =>
                                                            changeRoute("/640")
                                                        }
                                                    >
                                                        <img
                                                            src="https://www.elementvape.com/pub/media/subcategory_icons/Mobile_Menu_Sub-Category_ALTERNATIVES_Concentrate_Vaporizers_100x100.jpg"
                                                            alt="Concentrate Vaporizers"
                                                            width={50}
                                                            height={50}
                                                        />{" "}
                                                        <a alt="Concentrate Vaporizers">
                                                            Concentrate
                                                            Vaporizers{" "}
                                                        </a>
                                                    </li>
                                                    <li
                                                        onClick={() =>
                                                            changeRoute("/641")
                                                        }
                                                    >
                                                        <img
                                                            src="https://www.elementvape.com/pub/media/subcategory_icons/Mobile_Menu_Sub-Category_ALTERNATIVES_Portable_Vaporizers_100x100.jpg"
                                                            alt="Portable Vaporizers"
                                                            width={50}
                                                            height={50}
                                                        />{" "}
                                                        <a alt="Portable Vaporizers">
                                                            Portable Vaporizers{" "}
                                                        </a>
                                                    </li>
                                                    <li
                                                        onClick={() =>
                                                            changeRoute("/642")
                                                        }
                                                    >
                                                        <img
                                                            src="https://www.elementvape.com/pub/media/subcategory_icons/Mobile_Menu_Sub-Category_ALTERNATIVES_Pen_Vaporizers_100x100.jpg"
                                                            alt="Pen Vaporizers"
                                                            width={50}
                                                            height={50}
                                                        />{" "}
                                                        <a alt="Pen Vaporizers">
                                                            {" "}
                                                            Pen Vaporizers
                                                        </a>
                                                    </li>
                                                    <li
                                                        onClick={() =>
                                                            changeRoute("/643")
                                                        }
                                                    >
                                                        <img
                                                            src="https://www.elementvape.com/pub/media/subcategory_icons/Mobile_Menu_Sub-Category_ALTERNATIVES_Desktop_Vaporizers_100x100.jpg"
                                                            alt="Desktop Vaporizers"
                                                            width={50}
                                                            height={50}
                                                        />{" "}
                                                        <a alt="Desktop Vaporizers">
                                                            Desktop Vaporizers{" "}
                                                        </a>
                                                    </li>
                                                    <li
                                                        onClick={() =>
                                                            changeRoute("/644")
                                                        }
                                                    >
                                                        <img
                                                            src="https://www.elementvape.com/pub/media/subcategory_icons/Mobile_Menu_Sub-Category_ALTERNATIVES_Accessories_100x100.jpg"
                                                            alt="Vaporizers Accessories"
                                                            width={50}
                                                            height={50}
                                                        />{" "}
                                                        <a alt="Vaporizers Accessories">
                                                            Vaporizers
                                                            Accessories{" "}
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="col-sm-3">
                                                <h3>Alternatives Brands</h3>
                                                <ul>
                                                    <li
                                                        onClick={() =>
                                                            changeRoute("/657")
                                                        }
                                                    >
                                                        <a alt="PAX Labs">
                                                            PAX Labs
                                                        </a>
                                                    </li>
                                                    <li
                                                        onClick={() =>
                                                            changeRoute("/636")
                                                        }
                                                    >
                                                        <a alt="YOCAN">YOCAN</a>
                                                    </li>
                                                    <li
                                                        onClick={() =>
                                                            changeRoute("/664")
                                                        }
                                                    >
                                                        <a alt="CCELL">CCELL</a>
                                                    </li>
                                                    <li
                                                        onClick={() =>
                                                            changeRoute("/647")
                                                        }
                                                    >
                                                        <a alt="Leaf Buddi">
                                                            Leaf Buddi
                                                        </a>
                                                    </li>
                                                    <li
                                                        onClick={() =>
                                                            changeRoute("/646")
                                                        }
                                                    >
                                                        <a alt="DazzVape">
                                                            DazzVape
                                                        </a>
                                                    </li>
                                                    <li
                                                        onClick={() =>
                                                            changeRoute("/659")
                                                        }
                                                    >
                                                        <a alt="Storz & Bickel VOLCANO">
                                                            Storz &amp; Bickel
                                                            VOLCANO
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="col-sm-6">
                                                <div className="menu-img-bloc">
                                                    <a
                                                        alt="YoCan"
                                                        onClick={() =>
                                                            changeRoute("/636")
                                                        }
                                                    >
                                                        <img
                                                            src="https://www.elementvape.com/pub/media/wysiwyg/Alternatives_-_YoCan.jpg"
                                                            alt="YoCan"
                                                        />
                                                        <p>YoCan</p>
                                                    </a>
                                                    <a
                                                        alt="Leaf Buddi"
                                                        onClick={() =>
                                                            changeRoute("/647")
                                                        }
                                                    >
                                                        <img
                                                            src="https://www.elementvape.com/pub/media/wysiwyg/Alternatives_-_Leaf_Buddi.jpg"
                                                            alt="Leaf Buddi"
                                                        />
                                                        <p>Leaf Buddi</p>
                                                    </a>
                                                    <a
                                                        alt="Pax Labs"
                                                        onClick={() =>
                                                            changeRoute("/657")
                                                        }
                                                    >
                                                        <img
                                                            src="https://www.elementvape.com/pub/media/wysiwyg/Alternatives_-_JUUL.jpg"
                                                            alt="Pax Labs"
                                                        />
                                                        <p>Pax Labs</p>
                                                    </a>
                                                    <a
                                                        alt="CCELL"
                                                        onClick={() =>
                                                            changeRoute("/664")
                                                        }
                                                    >
                                                        {" "}
                                                        <img
                                                            src="https://www.elementvape.com/pub/media/wysiwyg/Alternatives_-_CCELL.jpg"
                                                            alt="CCELL"
                                                        />
                                                        <p>CCELL</p>
                                                    </a>
                                                </div>
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
    );
}
