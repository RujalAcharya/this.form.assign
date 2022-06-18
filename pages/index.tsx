import { Stack, Heading, Flex, Input, Text, Button } from '@chakra-ui/react';
import type { NextPage } from 'next';
import Head from 'next/head';

const Home: NextPage = () => (
  
  <Flex height={"100vh"} alignItems={"center"} background={"gray.200"} justifyContent={"center"}>
    <Flex direction={"column"} background={"white"} width={"640px"} height={"536px"} alignItems={"center"} justifyContent={"center"} p={12} rounded={6}>
      <Heading color={"green.500"} width={"161px"} height={"43px"} marginBottom={"17px"}>this.form</Heading>
      <Heading color={"black"} width={"295px"} height={"36px"} fontSize={"30px"} marginBottom={"22px"}>Create new account</Heading>
      <Flex direction={"column"} width={"400px"} alignItems={"center"} p={"2px"} marginBottom={"28px"}>
        <div>
          <Text align={"left"}>Name</Text>
          <Input width={"400px"} placeholder="John Doe"></Input>
        </div>
      </Flex>
      <Flex direction={"column"} width={"400px"} alignItems={"center"} p={"2px"} marginBottom={"28px"}>
        <div>
          <Text align={"left"}>Email</Text>
          <Input type={"email"} width={"400px"} placeholder="johndoe@example.com"></Input>
        </div>
        </Flex>
      <Flex direction={"column"} width={"400px"} alignItems={"center"} p={"2px"} marginBottom={"28px"}>
        <div>
          <Text align={"left"}>Password</Text>
          <Input type={"password"} width={"400px"} placeholder="********"></Input>
        </div>
      </Flex>
      <Button  p={4} width={"400px"} height={"40px"} backgroundColor={"green.500"} color={"white"}>Create</Button>
    </Flex>
    
  </Flex>
  // );
);

export default Home;
