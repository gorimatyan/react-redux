import { Box, Button, Flex, Heading, Text } from '@chakra-ui/react'
import React from 'react'

const Pricing = () => {
  return (
    <Box>
      <Flex>
        <Box bg="#f0eafb" p="60px">
          <Text size="2xl" fontWeight="800">プレミアム</Text>
          <Heading>320000円</Heading>
          <Text>一回払い</Text>
          <Button colorScheme="purple" size="lg" mt="24px" >購入</Button>
        </Box>
      </Flex>
    </Box>
  )
}

export default Pricing