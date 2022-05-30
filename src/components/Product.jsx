import { Stack,Image,Text,Tag,Heading,Box,TagLabel, Flex } from "@chakra-ui/react";
import React from "react";

const Product = ({item1}) => {

  // TODO: Remove below const and instead import them from chakra
  // const Text = () => <div />;
  // const Image = () => <div />;
  // const Box = () => <div />;
  // const Stack = () => <div />;
  // const Heading = () => <div />;
  // const Tag = () => <div />;
  // const TagLabel = () => <div />;
  // console.log(item1.imageSrc)

  return (
    <Stack boxShadow="2xl" p="6" rounded="lg" textAlign='center'>
      <Image data-cy="product-image" src={item1.imageSrc} />
      <Flex gap='80'>
      <Text data-cy="product-category">{item1.category}</Text>
      <Tag>
        <TagLabel bgColor='cyan.300' data-cy="product-gender">{item1.gender}</TagLabel>
      </Tag>
      </Flex>
      <Heading fontSize='xl' colorScheme='cyan.300' textAlign='center' data-cy="product-title">{item1.title}</Heading>
      <Box w='28' ml={'24'} display={'flex'} justifyContent='center' textAlign='center'   data-cy="product-price">{"Rs  "}{item1.price}{"/unit"}</Box>
    </Stack>
  );
};

export default Product;
