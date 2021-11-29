import React,{useState, useEffect} from 'react';
import Description from '../../Description';
import axios from 'axios';
import { useSelector } from 'react-redux';

export default function EditCart() {
    const url = ('window',window.location.pathname.split('/'));
    const cartid = useSelector((state)=>state.customer_cart_id);
    
    const [editProduct, seteditProduct] = useState(''); 

    const productId = url[6];
    const itemId = url[4];

    useEffect(() => {
        axios.put(`${process.env.REACT_APP_MAGENTO_URI}carts/${cartid}/items/${itemId}`,{
            cartItem:{
                qty:1,
                quote_id:cartid
            }},
            {
                headers:{
                    Authorization: 'Bearer '+ process.env.REACT_APP_MAGENTO_ADMIN_API
                }
            }).then((res)=>{
                if(res.status===200){
                    seteditProduct(res.data);
                }
            })
    }, [productId])

    return (
        <div>
            <Description id={productId} editValue={editProduct}/>
        </div>
    )
}
