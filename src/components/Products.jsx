import React, { useEffect, useState } from "react";
import Product from "./Product";
import AddProduct from "./AddProduct";
import Pagination from "./Pagination";
import axios from 'axios'
import { Flex, Spacer, Grid } from '@chakra-ui/react'

const Products = () => {

  const [data, setData] = useState([])
  const [total, setTotal] = useState(0);
  const [page,setPage] = useState(1);
  const [limit,setLimit] = useState(3);

  useEffect(()=>{
    getdata(page,limit);
  },[page,limit])
  
  const getdata = (page,limit)=>{
    axios.get(`http://localhost:8080/products?_page=${page}&_limit=${limit}`)
    .then((res)=>{
      setData(res.data);
      setTotal(Number(res.headers["x-total-count"]))
      
    })
    
  }
  // TODO: Remove below const and instead import them from chakra
  // const Flex = () => <div />;
  // const Grid = () => <div />;

  const setNewData = (info) =>{
    // console.log(info)
    axios.post("http://localhost:8080/products",info)
    // .then((res)=>{
    //   // console.log(res.data)
    //   setData([...data,res.data])
    // })
    //  console.log(data)
     getdata();
  }
  console.log("data",data)
  return (
    <Flex  flexDirection="column" justifyContent="center" alignItems="center">
      {/*  AddProduct */}
      <AddProduct AddData={setNewData}/>
      <Grid templateColumns="repeat(3, 1fr)" gap={4}>
        {/* List of Products */}
        {data.map((item)=>(
          <Product key={item.id} item1={item}/>
        
        ))}
        </Grid>
      {/* Pagination */}
      <Pagination page={page} limit={limit} setPage={setPage} setLimit={setLimit} totalCount={total}/>
    </Flex>
  );
};

export default Products;
