import { Button, ButtonGroup, Select } from "@chakra-ui/react";
import React from "react";

const Pagination = ({limit,page,setPage,setLimit,totalCount}) => {
  // TODO: Remove below const and instead import them from chakra
  // const Button = () => <div />;
  // const ButtonGroup = () => <div />;
  // const Select = () => <div />;

  const handlePage = (value)=>{
    setPage(page+value)
    console.log(page)
  }
  const handleLimit = (e)=>{
      // console.log(e.target.value)
      setLimit(e.target.value)
  }
  return (
    <ButtonGroup marginTop={'16'} size='lg'>
      <Button data-cy="pagination-first-button" disabled={page <= 1} onClick={()=>{setPage(1)}} >First</Button>
      <Button data-cy="pagination-previous-button" disabled={page <= 1} onClick={()=>handlePage(-1)} >Previous</Button>
      <Select w={'16'} size='md' data-cy="pagination-limit-select" onChange={handleLimit} >
        <option data-cy="pagination-limit-3">3</option>
        <option data-cy="pagination-limit-6">6</option>
        <option data-cy="pagination-limit-9">9</option>
      </Select>
      <Button data-cy="pagination-next-button" disabled={totalCount <= page*limit  } onClick={()=>handlePage(1)} >Next</Button>
      <Button data-cy="pagination-last-button" disabled={totalCount <= page*limit  }  onClick={()=>{setPage(Math.ceil(totalCount / limit))}} >Last</Button>
    </ButtonGroup>
  );
};

export default Pagination;
