import React, { useState } from "react";
import { Button, ButtonGroup, Input, Radio, RadioGroup, Select, useDisclosure,FormControl } from '@chakra-ui/react'
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from '@chakra-ui/react'

const AddProduct = ({AddData}) => {

  const [info, setInfo] = useState({
    imageSrc:"https://picsum.photos/seed/picsum2/421/261"
  })

  const { isOpen, onOpen, onClose } = useDisclosure()

  const initialRef = React.useRef()
  const finalRef = React.useRef()

  const handleChange = (e)=>{
    let {name, value,checked} = e.target
    setInfo({...info,[name]:value})
  }
  const handleRadio = (value)=>{
    setInfo({...info, gender:value})

  }
  const handlesubmit = (e)=>{
    e.preventDefault();
    AddData(info)
    onClose();
  }

  return (
    <>
      <Button my={4} data-cy="add-product-button" onClick={onOpen}>Add Product</Button>
      <Modal
      // initialFocusRef={initialRef}
      // finalFocusRef={finalRef}
      isOpen={isOpen}
      onClose={onClose}
      size="xl"
      isCentered
      >
        <ModalContent>
        {/* <ModalOverlay/> */}
        <ModalHeader>Add new Product</ModalHeader>
        <ModalCloseButton />
        
        <ModalBody pb={6} size="xl">
          <form onSubmit={handlesubmit}>
            <label htmlFor="">Title</label>
          <Input data-cy="add-product-title" name="title"  onChange={handleChange}/>
          <label htmlFor="">Category</label>
          <Select data-cy="add-product-category" name="category" onChange={handleChange}>
            <option data-cy="add-product-category-shirt" value="shirt" checked>Shirt</option>
            <option data-cy="add-product-category-pant" vlaue="tshirt" checked>T-shirt</option>
            <option data-cy="add-product-category-jeans" value="jeans" checked>jeans</option>
          </Select>
          <label htmlFor="">Gender</label>
          <RadioGroup data-cy="add-product-gender" name="gender" onChange={handleRadio}>
            <Radio data-cy="add-product-gender-male"  value='male' checked>Male</Radio>
            <Radio data-cy="add-product-gender-female"  value='female' checked>Female</Radio>
            <Radio data-cy="add-product-gender-unisex"  value='unisex' checked>Unisex</Radio>
          </RadioGroup>
          <label htmlFor="">Price</label>
          <Input data-cy="add-product-price" name='price'  onChange={handleChange} />
          <Button data-cy="add-product-submit-button" type="submit">Create</Button>
          </form>
        </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default AddProduct;
