import React, { useEffect, useState } from "react";
import PriceComponent from "./priceComponent";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { updateCart, displayCart , update_checkout_option} from "../../../../redux/actions";
import { GetYotpoData } from "../../../Common/ReviewData";
import { AiFillHeart } from "react-icons/ai";
import axios from "axios";
import ImageGallery from "./imageGallery";
import Option from "./options";
import ReactHtmlParser from "react-html-parser";
import ProductDiscription from "./productDiscription";
import InstagramBlock from "./instagramBlock";
import Quantity from "./qty";
import Reviews from "./reviews";
import RelatedProducts from "./relatedProducts";
import Swal from "sweetalert2";
import { FireToast } from "../../../Common/Toasta";

export default function Productinfo({
    productdata,
    loading,
    showDesc,
    setOpen,
    editValue
}) {
    const dispatch = useDispatch();
    const cartData = useSelector((state) => state.update_cart);
    const checkoutDetails = useSelector((state) => state.checkoutItem);
    const cartid = useSelector((state)=>state.customer_cart_id);
    const customertoken = useSelector((state)=>state.customer_token);
    const customerdetails = useSelector((state) => state.customer_details);
    const [media_gallery_entries, setmedia_gallery_entries] = useState("");
    const [name, setname] = useState("");
    const [sku, setsku] = useState("");
    const [price, setprice] = useState("");
    const [short, setshort] = useState("");
    const [options, setOptions] = useState(null);
    const { id } = useParams();
    const [qty, setQty] = useState(1);
    const [option_type_id, setOption_type_id] = useState(null);
    const [option_type_data, setOption_type_data] = useState(null);
    const [description, setdescription] = useState("");
    const [yotpo, setYotpo] = useState(null);
    const [fields_required, setFields_required] = useState(false);
    const [popuploader, setpopuploader] = useState("");
    const [star, setStar] = useState(0);
    const [optionPair, setoptionPair] = useState([]);
   
    //Differentiate between edit page and description page.
    const url = window.location.pathname.split('/');
    const path = url[1]+'/'+url[2];
    useEffect(() => {
        if (productdata) {
            GetYotpoData(setStar, setYotpo, productdata.prod_id);
            setname(productdata.name);
            setprice(productdata.price);
            setsku(productdata.sku);
            if (productdata.image) {
                let val = { file: productdata.image };
                val = JSON.stringify(val);
                setmedia_gallery_entries([val]);
            }
            productdata.custom_attributes && setdata();
            // console.log({ productdata: productdata.media_gallery_entries });
            productdata?.media_gallery_entries &&
                setmedia_gallery_entries(productdata.media_gallery_entries);
            productdata.custom_attributes
                ? setdata()
                : axios
                      .get(
                          process.env.REACT_APP_NODE_URL +
                              "id/" +
                              (id ||
                                  productdata.prod_id ||
                                  productdata.url_key ||
                                  "443")
                      )
                      .then(({ data }) => {
                          console.log({ EXECUTED: data }, "executed");
                          if (data.length) {
                              setmedia_gallery_entries(
                                  data[0].media_gallery_entries
                              );
                              setdata(data[0]);
                              setpopuploader("show");
                          } else {
                              setOpen(false);
                          }
                      });
        }
    }, [productdata]);

    useEffect(() => {
        if (productdata) {
            let price = productdata.price;
            if (option_type_data) {
                Object.keys(option_type_data).map((key) => {
                    price += parseFloat(option_type_data[key].price);
                    return null;
                });
                setprice(price);
            }
        }
    }, [option_type_data]);

    const setdata = (data = productdata) => {
        setOptions(data.options);
        data.custom_attributes.map((val) => {
            val.attribute_code === "short_description" && setshort(val.value);
            val.attribute_code === "description" && setdescription(val.value);
        });
    };

    // To get option_type_id in key value pair
    useEffect(() => {
        if(option_type_id){
            setoptionPair([])
            const id = option_type_id && Object.keys(option_type_id);
            const value =  option_type_id && Object.values(option_type_id);
            id.map((val,i)=>{
                setoptionPair([...optionPair,{option_id:id[i],option_value:value[i]}])
            })
        }
    }, [option_type_id])

    //Add To Cart Function
    const addToCart = ()=>{
        if(checkoutDetails.length){
            dispatch(update_checkout_option([...checkoutDetails , productdata]));
        }
        else{
            dispatch(update_checkout_option([productdata]));  
        }
        setFields_required(true);
        let option_pass = true;
        options.map((val) => {
            if (val.is_require==='1') {
                if (option_type_data) {
                    if (!option_type_data[val.title.replace(/" "/g, "_")])
                        option_pass = false;
                } else {
                    option_pass = false;
                }
            }
            return null;
        });
       
        if(options && option_pass){
            
            // Immediately state update when the item is added to cart
            if (cartData.length) {
                            let tempcart = cartData;
                            let index = null;
                            tempcart.map((val, i) => {
                                if (val.sku === productdata.sku) {
                                    if (
                                        JSON.stringify(val.option_type_id) ===
                                        JSON.stringify(option_type_id)
                                    ) {
                                        index = i;
                                    }
                                }
                            });
                            if (index !== null) {
                                tempcart[index].qty = tempcart[index].qty + qty;
                            } else {
                                if(optionPair.length){
                                        optionPair.map(({option_id,option_value},i)=>{
                                            if(option_id !== cartData[i]?.option_id){
                                                tempcart.push({
                                                    option_id,
                                                    option_value,
                                                    name,
                                                    price,
                                                    qty,
                                                    sku: productdata.sku,
                                                    id: productdata.id,
                                                    prod_id: productdata.prod_id,
                                                    media_gallery_entries: media_gallery_entries[0].file,
                                                    local:true,
                                                })
                                            }
                                        
                                    })
                                }
                                else {
                                    const defaultCart = {
                                        option_type_id,
                                        option_type_data,
                                        name,
                                        price,
                                        qty,
                                        sku: productdata.sku,
                                        id: productdata.id,
                                        prod_id: productdata.prod_id,
                                        media_gallery_entries:
                                        media_gallery_entries[0].file,
                                        local:true,
                                    }
                                    tempcart.push(defaultCart);
                                } 
                            }
                            setOpen && setOpen(false);
                            dispatch(updateCart(tempcart));
                            showcart();
                            setOption_type_data(null);
                            setOption_type_id(null);
                            setFields_required(false);
                        } 
            else {
                let tempCart1 = [];
                const defaultCart = [{
                    option_type_id,
                    option_type_data,
                    name,
                    price,
                    qty,
                    sku: productdata.sku,
                    id: productdata.id,
                    prod_id: productdata.prod_id,
                    media_gallery_entries:
                    media_gallery_entries[0].file,
                    local:true,
                }]
                optionPair.length && optionPair.map(({option_id,option_value})=>{
                    tempCart1.push({
                        option_id,
                        option_value,
                        name,
                        price,
                        qty,
                        sku: productdata.sku,
                        id: productdata.id,
                        prod_id: productdata.prod_id,
                        media_gallery_entries:
                        media_gallery_entries[0].file,
                        local:true,
                    })
                })
                dispatch(updateCart(tempCart1.length ? tempCart1 : defaultCart));
                showcart();
                setOption_type_data(null);
                setOption_type_id(null);
                setFields_required(false);
            }

            // Updating the API endpoint after adding an item            
            if(customertoken){
                let cart_item = {
                    product_option:{
                        extension_attributes:{
                            custom_options:optionPair
                        }
                    },
                    quote_id:cartid,
                    sku:productdata.sku,
                    qty:qty
                }
                axios.post(process.env.REACT_APP_MAGENTO_URI + "carts/mine/items",{cart_item},{
                    headers: {
                        Authorization: "Bearer " + customertoken,
                        ContentType : "application/json"
                    }
                  })
                    .then((res) => {
                        if(res.status===200){
                            // Swal.fire('Success','Item added to cart successfully','success');
                            axios.get(process.env.REACT_APP_MAGENTO_URI + "carts/mine/items", {
                                headers: {
                                    Authorization: "Bearer " + customertoken,
                                },
                            })
                                .then((res) => {
                                    if(res.status===200){
                                        dispatch(updateCart(res.data));
                                    }
                                })
                                .catch((err)=>{
                                    console.log(err);
                                    Swal.fire('Error',err?.response?.data?.message ,'error')
                                })
                            }
                    })
                    .catch(err =>{
                        if(err?.response?.data?.message !== "The quote couldn't be saved."){
                            // FireToast({
                            //     icon:"warning",
                            //     message:'The product you are trying to add is not available'
                            // })
                            cartData.length && dispatch(
                                updateCart(
                                    cartData?.filter(
                                        (item) => !item.local
                                    )
                                )
                            );
                            console.log(err)
                        }else{
                            FireToast({
                                icon:"warning",
                                message:'The product you are trying to add is not available'
                            })
                        }
                        // Swal.fire('Error','The product you are trying to add is not available','error');
                    })
            }
        }
    }

    // Function to automatically open minicart when the item is added to cart
    const showcart = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
        dispatch(displayCart(true));
        setTimeout(() => {
            dispatch(displayCart(false));
        }, 3000);
    };

    return (
        !loading && (
            <div
                id={"productInforef"}
                className={`product-info-main row ${popuploader}`}
            >
                <div className="product-info-left col-sm-6">
                    <ImageGallery
                        images={media_gallery_entries && media_gallery_entries}
                    />
                </div>
                <div className="product-info-right col-sm-6">
                    <div className="product-info-wrap">
                        <div className="page-title-wrapper" />
                        <h2 className="page-title">
                            <span
                                className="base"
                                data-ui-id="page-title-wrapper"
                                itemProp="name"
                            >
                                {productdata && productdata.name}
                            </span>
                        </h2>
                    </div>
                    <div className="product-info-price">
                        <div className="price-box">
                            <PriceComponent price={price} />
                        </div>
                        <div className="product-info-stock-sku">
                            <div className="stock available">
                                <span>In stock</span>
                            </div>
                        </div>
                    </div>
                    {star > 0 ? (
                        <div className="product-review product-description">
                            <div className="review-star">
                                <i
                                    className={`${
                                        star > 0 ? "fas" : "far"
                                    } fa-star`}
                                />
                                <i
                                    className={`${
                                        star > 1 ? "fas" : "far"
                                    } fa-star`}
                                />
                                <i
                                    className={`${
                                        star > 2 ? "fas" : "far"
                                    } fa-star`}
                                />
                                <i
                                    className={`${
                                        star > 3 ? "fas" : "far"
                                    } fa-star`}
                                />
                                <i
                                    className={`${
                                        star > 4 ? "fas" : "far"
                                    } fa-star`}
                                />
                            </div>
                            <div className="review-text">
                                <p>
                                    <span className="count">
                                        {yotpo && yotpo.bottomline.total_review}
                                    </span>{" "}
                                    Reviews
                                </p>
                            </div>
                        </div>
                    ) : null}
                    <div className="discription-box">
                        <p>
                            {productdata &&
                                ReactHtmlParser(
                                    short.replace(
                                        /https:\/\/www.elementvape.com/g,
                                        ""
                                    )
                                )}
                        </p>
                    </div>
                    <div className="options-wrapper">
                        {options && (
                            <Option
                                setOption_type_id={setOption_type_id}
                                setOption_type_data={setOption_type_data}
                                option_type_id={option_type_id}
                                option_type_data={option_type_data}
                                fields_required={fields_required}
                                options={options}
                                path={path}
                                editValue={editValue}
                            />
                        )}
                    </div>

                    <Quantity qty={qty} setQty={setQty} />
                    <div className="wishlist-addtocart">
                        {
                            path === 'cartPage/configure' ? (
                                <button onClick={addToCart} className="addtocart">
                                    <span>Update Cart</span>
                                </button>
                            ):(
                                <button onClick={addToCart} className="addtocart">
                                    <span>Add to Cart</span>
                                </button>
                            )
                        }
                        <hr />
                        <button className="towishlist">
                            <AiFillHeart /> Add to Wish List
                        </button>
                    </div>
                </div>
                {showDesc && <ProductDiscription description={description} />}
                {showDesc && <InstagramBlock productId={productdata?.prod_id} />}
                {showDesc && yotpo && <Reviews yotpo={yotpo} />}
                {showDesc && (
                    <RelatedProducts productSku={sku} customerwhobought />
                )}
                {showDesc && <RelatedProducts productSku={sku} />}
            </div>
        )
    );
}
