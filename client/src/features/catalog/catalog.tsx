import {Product} from "../../app/models/product"
import{Avatar,Button,List,ListItem} from "@mui/material";
import{ListItemAvatar} from "@mui/material"
import{ListItemText} from "@mui/material"
import ProductList from "./ProductList";
import { useState, useEffect } from "react";
// interface Props{
//     products:Product[];
//     addProduct:()=>void;
// }

export default function Catalog(){
    const [products, setProducts] = useState<Product[]>([]);

    useEffect(()=>{
      fetch('http://localhost:5079/api/products')
      .then(response=>response.json())
      .then(data=>setProducts(data))
    },[]);
    
    // function addProduct(){
    //   setProducts(prevState=> 
    //     [...prevState,
    //       {
    //       id:prevState.length+101,
    //       name:"product"+ (prevState.length+1), 
    //       price:(prevState.length*100)+100,
    //       brand:'some Brand',
    //       description:'some description',
    //       pictureUrl:'http://picsum.photos/200',
    
          
    //     }])
    // }

    return(
        
        <>
           <ProductList products={products}/>
        </>
    )
        
    
}