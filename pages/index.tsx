import { Stack, Heading } from '@chakra-ui/react';
import type { NextPage } from 'next';

const Home: NextPage = () => (
  <Stack spacing={6}>
    <Heading as="h2" size="xl">
      Never gonna give you up.
      Never gonna let you down.
      Never gonna run around and disheart you.
    </Heading>
  </Stack>
);

export default Home;
