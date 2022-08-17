import { Box, Button, Flex, Heading, Text } from "@chakra-ui/react";
import React from "react";

const ChakraRoute = () => {
  return (
    <>
      <Box color="#f7fafc" bg="#6b46c1" pt="2">
        <Heading as="h1" fontSize="48px" mb="4">お試しサイト</Heading>
        <Text>ようこそエヴィバディ</Text>
      </Box>

      <Flex justifyContent="center" alignItems="center">
        <Box bg="green" w="120px" h="120px">
          ChakraRoute
        </Box>
        <Box bg="green" w="240px" h="240px">
          ChakraRoute
        </Box>
      </Flex>
      // Basic version
      <Text noOfLines={1}>
        "The quick brown fox jumps over the lazy dog" is an English-language
        pangram—a sentence that contains all of the letters of the English
        alphabet. Owing to its existence, Chakra was created.
      </Text>
      // Responsive version
      <Text noOfLines={[1, 2, 3]}>
        "The quick brown fox jumps over the lazy dog" is an English-language
        pangram—a sentence that contains all of the letters of the English
        alphabet. Owing to its existence, Chakra was created.
      </Text>
      <Button mt="32px" colorScheme="gray" _hover={{ background: "red" }}>
        送信
      </Button>
    </>
  );
};

export default ChakraRoute;
