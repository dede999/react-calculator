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
import { handleNumberClick } from "./lib/handleActions";

function App() {
  const [currentNumber, setCurrentNumber] = useState("0");
  const [firstNumber, setFirstNumber] = useState("0");
  const [operation, setOperation] = useState(null);
  const displayValue = operation !== null ? firstNumber : currentNumber;

  const numberClick = (number) => () => {
    if (operation !== null) {
      setFirstNumber(handleNumberClick(firstNumber, number));
    } else {
      setCurrentNumber(handleNumberClick(currentNumber, number));
    }
    console.log({ currentNumber, firstNumber, operation, displayValue });
  };

  const reset = () => {
    setCurrentNumber("0");
    setFirstNumber("0");
    setOperation(null);
  };

  const makeFloat = () => {
    const isNumberFloat = displayValue.includes(".");
    if (!isNumberFloat) {
      if (operation !== null) {
        setFirstNumber(firstNumber + ".");
      } else {
        setCurrentNumber(currentNumber + ".");
      }
    }
  };

  const setOperator = (operator) => () => {
    console.log(operator);
    setOperation(operator);
    setFirstNumber("0");
    console.log({ currentNumber, firstNumber, operation, displayValue });
  };

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
                    {displayValue}
                  </Text>
                </Box>
              </GridItem>
              <GridItem>
                <Button onClick={numberClick("7")} w="100%">
                  7
                </Button>
              </GridItem>
              <GridItem>
                <Button onClick={numberClick("8")} w="100%">
                  8
                </Button>
              </GridItem>
              <GridItem>
                <Button onClick={numberClick("9")} w="100%">
                  9
                </Button>
              </GridItem>
              <GridItem>
                <Button onClick={setOperator("/")} w="100%">
                  /
                </Button>
              </GridItem>

              <GridItem>
                <Button onClick={numberClick("4")} w="100%">
                  4
                </Button>
              </GridItem>
              <GridItem>
                <Button onClick={numberClick("5")} w="100%">
                  5
                </Button>
              </GridItem>
              <GridItem>
                <Button onClick={numberClick("6")} w="100%">
                  6
                </Button>
              </GridItem>
              <GridItem>
                <Button onClick={setOperator("*")} w="100%">
                  *
                </Button>
              </GridItem>

              <GridItem>
                <Button onClick={numberClick("1")} w="100%">
                  1
                </Button>
              </GridItem>
              <GridItem>
                <Button onClick={numberClick("2")} w="100%">
                  2
                </Button>
              </GridItem>
              <GridItem>
                <Button onClick={numberClick("3")} w="100%">
                  3
                </Button>
              </GridItem>
              <GridItem>
                <Button onClick={setOperator("-")} w="100%">
                  -
                </Button>
              </GridItem>

              <GridItem colSpan={2}>
                <Button onClick={numberClick("0")} w="100%">
                  0
                </Button>
              </GridItem>
              <GridItem>
                <Button onClick={makeFloat} w="100%">
                  .
                </Button>
              </GridItem>
              <GridItem>
                <Button onClick={setOperator("+")} w="100%">
                  +
                </Button>
              </GridItem>
              <GridItem colSpan={2}>
                <Button w="100%" colorScheme="purple" onClick={reset}>
                  C
                </Button>
              </GridItem>
              <GridItem colSpan={2}>
                <Button w="100%" colorScheme="teal">
                  =
                </Button>
              </GridItem>
            </Grid>
          </Box>
        </Container>
      </ChakraProvider>
    </div>
  );
}

export default App;
