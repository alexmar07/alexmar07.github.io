import { Container, Heading, Flex, Text } from "@radix-ui/themes";

export default function Home() {
  return (
    <Container align="center" asChild>
      <Flex asChild justify="center" direction="column" display="flex" py={{sm: "9"}}>
        <Heading size="8">Alessandro Marotta</Heading>
        <Text>Lorem ipsum</Text>
      </Flex>
    </Container>
  );
}
