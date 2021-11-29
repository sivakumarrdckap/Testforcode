import Axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
import { useRef } from "react";
import { useHistory } from "react-router-dom";
import ReactHtmlParser from "react-html-parser";

export default function Navigationbar({ changeRoute: parentRouteChange }) {
    let history = useHistory();
    const [MegaMenu, setMegaMenu] = useState([]);
    const brand = useRef(new Array());
    const changeRoute = (route) => {
        brand.current.map((val) => {
            parentRouteChange(route);
        });
    };
    useEffect(() => {
        Axios.post(process.env.REACT_APP_NODE_URL + "sync/getHeader").then(
            (res) => {
                let Master = [];
                JSON.parse(res.data.header).map((data) => {
                    if (data.depth === 0) {
                        Master.push([data.content]);
                    } else {
                        Master[Master.length - 1].push(data.content);
                    }
                });
                setMegaMenu(Master);
            }
        );
    }, []);

    return (
        <nav id="nav">
            <div className="cus-container">
                <ul className="groupmenu">
                    {MegaMenu.length
                        ? MegaMenu.map((menu, i) => {
                              return (
                                  <li
                                      onClick={() =>
                                          brand.current[
                                              i - 1
                                          ]?.classList?.toggle("active")
                                      }
                                      className="item level0  level-top parent"
                                      onMouseEnter={() => {
                                          menu.length > 1 &&
                                              brand.current[
                                                  i - 1
                                              ].classList.add("show-details");
                                      }}
                                      onMouseLeave={() =>
                                          menu.length > 1 &&
                                          brand.current[i - 1].classList.remove(
                                              "show-details"
                                          )
                                      }
                                  >
                                      <a
                                          className="menu-link"
                                          onClick={() =>
                                              changeRoute(
                                                  menu[0].url.replaceAll(
                                                      '{{config path="web/unsecure/base_url"}}',
                                                      "/"
                                                  )
                                              )
                                          }
                                          alt="BRANDS"
                                      >
                                          <i className="menu-icon img-icon">
                                              <img
                                                  src="https://www.elementvape.com/pub/media/Dckap/menu-level1/Mobile_Menu_Category_BRANDS_70x62.png"
                                                  alt="https://www.elementvape.com/pub/media/Dckap/menu-level1/Mobile_Menu_Category_BRANDS_70x62.png"
                                              />
                                          </i>
                                          <span>{menu[0].label}</span>
                                      </a>
                                      {menu.length > 1 && (
                                          <ul
                                              ref={(element) =>
                                                  menu.length > 1 &&
                                                  brand.current.push(element)
                                              }
                                              className="groupmenu-drop"
                                          >
                                              <li className="item level1">
                                                  <div className="groupmenu-drop-content">
                                                      <div className="container">
                                                          <div className="row">
                                                              {menu[1] &&
                                                                  menu[1]
                                                                      .content &&
                                                                  menu[1].content.map(
                                                                      (
                                                                          val,
                                                                          i
                                                                      ) => {
                                                                          return (
                                                                              <div
                                                                                  className={
                                                                                      "col-sm-" +
                                                                                      parseInt(
                                                                                          [
                                                                                              menu[1].layout.split(
                                                                                                  ","
                                                                                              )[
                                                                                                  i
                                                                                              ],
                                                                                          ]
                                                                                      ) *
                                                                                          (menu[0]
                                                                                              .label ===
                                                                                          "BRANDS"
                                                                                              ? 2
                                                                                              : 3)
                                                                                  }
                                                                              >
                                                                                  {ReactHtmlParser(
                                                                                      val
                                                                                          .replaceAll(
                                                                                              "{{config path=web/secure/base_url}}",
                                                                                              "/"
                                                                                          )
                                                                                          .replaceAll(
                                                                                              "{{media url=",
                                                                                              "https://www.elementvape.com/pub/media/"
                                                                                          )
                                                                                          .replaceAll(
                                                                                              "}}",
                                                                                              ""
                                                                                          )
                                                                                  )}
                                                                              </div>
                                                                          );
                                                                      }
                                                                  )}
                                                          </div>
                                                      </div>
                                                  </div>
                                              </li>
                                          </ul>
                                      )}
                                  </li>
                              );
                          })
                        : ""}
                </ul>
            </div>
        </nav>
    );
}
