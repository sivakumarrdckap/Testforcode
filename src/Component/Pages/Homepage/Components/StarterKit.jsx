import React,{useState, useEffect} from "react";
import axios from "axios";
import ReactHtmlParser from "react-html-parser";
import Skeleton from "react-loading-skeleton";

export default function StarterKit() {

    const [loading, setloading] = useState(false);
    const [headerMiddleLeft, setheaderMiddleLeft] = useState(null)
    const [headerMiddleRight, setheaderMiddleRight] = useState(null)

    useEffect(() => {
        setloading(true)
        axios.get(process.env.REACT_APP_MAGENTO_URI+"get_home_cms_middle_banner")
        .then((res)=>{
            if(res.status===200){
                setheaderMiddleLeft(res.data[2][0])
                setheaderMiddleRight(res.data[5][0])
                setloading(false)
            } 
        }).catch((err)=>{
            console.log(err);
            setloading(false)
        })
    }, [])
    
    return (
        <div className="cus-container">
                <div className="promotion-2columns bottom">
                <div className="row">
                    <div className="col-sm-6">
                        {
                            headerMiddleLeft && !loading ? (
                                ReactHtmlParser(
                                unescape(headerMiddleLeft?.settings?.content)
                                .replace("Starter Kits"," ")
                                .replace("{{media url=" , "https://dev3.elementvape.com/pub/media/")
                                .replace("}}","")
                                .replace("https://elementvape.com//starter-kits","/starter-kits")
                                .replace("https://www.elementvape.com/starter-kits","/starter-kits")
                                .replaceAll("&quot;","")
                            )
                            ):(loading && <Skeleton width={"100%"} height={200} count={1}/>)
                        }
                    </div>
                    
                    <div className="col-sm-6">
                        {
                            headerMiddleRight && !loading ? (
                                ReactHtmlParser(
                                unescape(headerMiddleRight?.settings?.content)
                                .replace("Starter Kits"," ")
                                .replace("{{media url=" , "https://dev3.elementvape.com/pub/media/")
                                .replace("}}","")
                                .replace("https://elementvape.com/reviews","javascript:void(0)")
                                .replaceAll("&quot;","")
                            )
                            ):(loading && <Skeleton width={"100%"} height={200} count={1}/>)
                        }
                    </div>
                </div>
            </div>
        </div>
    );
}
