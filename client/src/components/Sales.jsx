import React,{useState,useEffect} from 'react'
import axios from 'axios';
import "../Stylesheet/Sales.css";

const Sales=()=> {


    const [mounted,setMounted] = useState(true);
    const [products,setProducts] = useState([]);

     useEffect(async ()=>{
         const {data}=await axios.get("http://localhost:5000/api/products");

         if(mounted){
                setProducts(data);
                localStorage.setItem("data",JSON.stringify(data));
            }
        return()=>{
            setMounted(false);
        };
    },[mounted]);

    console.log(products);
    return(
    <div className="Products_container">
{
    products && (
        <div className="Products">
       {products.map((item)=>{
                return (
                    <div className="item">
                    <img src={item.image} alt=""/>
                    <h4>{item.name}</h4>
                    <h3>{item.owner}</h3>
                    <h3>{item.price}</h3>
                </div>
                );
            }
        )}
        </div>
    )
}
    </div>
    );
}

    


export default Sales;
