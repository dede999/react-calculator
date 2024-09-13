import {
  Box,
  Button,
  ChakraProvider,
  Container,
  Grid,
  GridItem,
  Text,
} from "@chakra-ui/react";
import { useState } from "react";
import "./App.css";
import "./index.css";

function App() {
  const [currentNumber] = useState("0");
  return (
    <div className="App">
      <ChakraProvider>
        <Container borderRadius={60} bg="gray.300" my={20}>
          <Box width="350px" margin="0 auto" padding="20px">
            <Grid templateColumns="repeat(4, 1fr)" gap={4}>
              <GridItem colSpan={4}>
                <Box bg="gray.200" h="50px" rounded={10}>
                  <Text
                    justifySelf="flex-end"
                    align="end"
                    px={5}
                    fontSize="3xl"
                    fontWeight={700}
                  >
                    {currentNumber}
                  </Text>
                </Box>
              </GridItem>
              <GridItem>
                <Button w="100%">7</Button>
              </GridItem>
              <GridItem>
                <Button w="100%">8</Button>
              </GridItem>
              <GridItem>
                <Button w="100%">9</Button>
              </GridItem>
              <GridItem>
                <Button w="100%">/</Button>
              </GridItem>

              <GridItem>
                <Button w="100%">4</Button>
              </GridItem>
              <GridItem>
                <Button w="100%">5</Button>
              </GridItem>
              <GridItem>
                <Button w="100%">6</Button>
              </GridItem>
              <GridItem>
                <Button w="100%">*</Button>
              </GridItem>

              <GridItem>
                <Button w="100%">1</Button>
              </GridItem>
              <GridItem>
                <Button w="100%">2</Button>
              </GridItem>
              <GridItem>
                <Button w="100%">3</Button>
              </GridItem>
              <GridItem>
                <Button w="100%">-</Button>
              </GridItem>

              <GridItem colSpan={2}>
                <Button w="100%">0</Button>
              </GridItem>
              <GridItem>
                <Button w="100%">.</Button>
              </GridItem>
              <GridItem>
                <Button w="100%">+</Button>
              </GridItem>
            </Grid>
            <Button w="100%" mt="4" colorScheme="teal" size="lg">
              =
            </Button>
          </Box>
        </Container>
      </ChakraProvider>
    </div>
  );
}

export default App;
