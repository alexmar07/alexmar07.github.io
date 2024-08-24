import { Container, Heading, Flex, Text, Box } from "@radix-ui/themes";

export default function Home() {
  return (
    <Box  width="100%" maxHeight="100vh">
      <Flex justify="center" align="center" direction="column"  minWidth="100vw" minHeight="80vh">
        <Heading size={{
          initial: "7", xs : "7", xl: "9"
          }}>
            Alessandro Marotta
        </Heading>
        <Text size={{initial: "7"}}> Sviluppatore Backend</Text>
      </Flex>
    </Box>
  );
}
