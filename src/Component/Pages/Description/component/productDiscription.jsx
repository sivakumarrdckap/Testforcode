import React, { useEffect, useState } from "react";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import ReactHtmlParser from "react-html-parser";


export default function ProductDiscription({ description }) {
    const [decoder, setDecoder] = useState(false);
    const [decoderfun, setdecoderfun] = useState();
    useEffect(() => {
        if(description.search("&lt") >= 0 || description.search("&gt") >= 0){
            setDecoder(true)
            setdecoderfun(function() {
            var element = document.createElement('div');
            function decodeHTMLEntities (str) {
                if(str && typeof str === 'string') {
                    str = str.replace(/<script[^>]*>([\S\s]*?)<\/script>/gmi, '');
                    str = str.replace(/<\/?\w(?:[^"'>]|"[^"]*"|'[^']*')*>/gmi, '');
                    element.innerHTML = str;
                    str = element.textContent;
                    element.textContent = null;
                }
                    return str;
                }
                return decodeHTMLEntities;
            })
        }
        else{
            setDecoder(false)
        }
    }, [description])
    return (
        <div className="product-discription-box">
            <div className="tab-wrapper">
                <Tabs defaultActiveKey="home" id="uncontrolled-tab-example">
                    <Tab eventKey="home" title="DESCRIPTION">
                        <div>{decoder ? ReactHtmlParser(decoderfun(description)) : ReactHtmlParser(description)} </div>
                    </Tab>
                </Tabs>
            </div>
        </div>
    );
}
