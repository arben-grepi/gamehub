import { PhoneIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  ButtonGroup,
  Center,
  Circle,
  Grid,
  GridItem,
  Heading,
  HStack,
  SimpleGrid,
  Square,
  Stack,
  StackDivider,
  VStack,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";
import { Container } from "@chakra-ui/react";
import { Flex, Spacer } from "@chakra-ui/react";
import { Text } from "@chakra-ui/react";

function App() {
  return (
    <Grid>
      {/* Put any child element inside it, give it any width or/and height, it'll ensure the child is centered. */}
      <Center mb={"30px"} bg="gold" h="50px" color="white">
        This is the Center
      </Center>
      {/* Center can be used to create frames around icons or numbers. */}
      <HStack mb={"30px"}>
        <Center w="40px" h="40px" bg="tomato" color="white">
          <PhoneIcon />
        </Center>
        <Center w="40px" h="40px" bg="tomato" color="white">
          <Box as="span" fontWeight="bold" fontSize="lg">
            1
          </Box>
        </Center>
      </HStack>
      {/* To reduce boilerplate, we've exported Square and Circle components that automatically centers its children given the size */}
      <HStack mb={"30px"}>
        <Circle size="40px" bg="tomato" color="white">
          <PhoneIcon />
        </Circle>
        <Square size="40px" bg="purple.700" color="white">
          <PhoneIcon />
        </Square>
      </HStack>
      {/* To contain any piece of content, wrap it in the Container component. */}
      <Container mb={"30px"}>
        There are many benefits to a joint design and development system. Not
        only does it bring benefits to the design team, but it also brings
        benefits to engineering teams. It makes sure that our experiences have a
        consistent look and feel, not just in our design specs, but in
        production
      </Container>
      {/* By default, the Container component sets the maxWidth of the content to 60
      characters (60ch) but you can customize this by passing custom maxWidth
      values or changing the size tokens defined in theme.sizes.container. */}
      <VStack mb={"30px"}>
        <Container maxW="md" bg="blue.600" color="white">
          "md" Container
        </Container>
        <Container maxW="550px" bg="purple.600" color="white">
          "550px" Container
        </Container>
        <Container maxW="container.sm" bg="green.400" color="#262626">
          "container.sm" Container
        </Container>
      </VStack>
      {/* In some cases, the width of the content can be smaller than the
      container's width. You can use the centerContent prop to center the
      content. It renders a flexbox with flexDirection set to column and
      alignItems set to center. */}
      <Container mb={"30px"} maxW="2xl" bg="blue.600" centerContent>
        <Box padding="4" bg="blue.400" color="black" maxW="md">
          There are many benefits to a joint design and development system. Not
          only does it bring benefits to the design team, but it also brings
          benefits to engineering teams. It makes sure that our experiences have
          a consistent look and feel, not just in our design specs, but in
          production.
        </Box>
      </Container>
      {/* FLEX */}
      <Flex mb={"30px"}>
        <Box p="4" bg="red.400">
          Box 1
        </Box>
        <Spacer />
        <Box p="4" bg="green.400">
          Box 2
        </Box>
      </Flex>
      {/* Flex and Spacer vs Grid vs Stack#
The Flex and Spacer components, Grid and HStack treat children of different widths differently.

In HStack, the children will have equal spacing between them but they won't span the entire width of the container.
In Grid, the starting points of the children will be equally spaced but the gaps between them will not be equal.
With Flex and Spacer, the children will span the entire width of the container and also have equal spacing between them. */}
      <Box mb={"30px"}>
        <Text>Flex and Spacer: Full width, equal Spacing</Text>
        <Flex mb={"30px"}>
          <Box w="70px" h="10" bg="red.500" />
          <Spacer />
          <Box w="170px" h="10" bg="red.500" />
          <Spacer />
          <Box w="180px" h="10" bg="red.500" />
        </Flex>

        <Text>
          Grid: The children start at the beginning, the 1/3 mark and 2/3 mark
        </Text>
        <Grid mb={"30px"} templateColumns="repeat(3, 1fr)" gap={10}>
          <Box w="70px" h="10" bg="blue.500" />
          <Box w="170px" h="10" bg="blue.500" />
          <Box w="180px" h="10" bg="blue.500" />
        </Grid>

        <Text>
          HStack: The children have equal spacing but don't span the whole
          container
        </Text>
        <HStack mb={"30px"} spacing="24px">
          <Box w="70px" h="10" bg="teal.500" />
          <Box w="170px" h="10" bg="teal.500" />
          <Box w="180px" h="10" bg="teal.500" />
        </HStack>
        {/* A good use case for Spacer is to create a navbar with a signup/login button aligned to the right.
Since Spacer renders a div, any gap value provided to the parent is applied to both sides of this component, 
and therefore make the gap appear doubled when the spacer is completely collapsed.
The example below is not responsive on purpose as you might switch to a collapsed menu on mobile. */}
        <Flex mb={"30px"} minWidth="max-content" alignItems="center" gap="2">
          <Box p="2">
            <Heading size="md">Chakra App</Heading>
          </Box>
          <Spacer />
          <ButtonGroup gap="2">
            <Button colorScheme="teal">Sign Up</Button>
            <Button colorScheme="teal">Log in</Button>
          </ButtonGroup>
        </Flex>
      </Box>
      {/* Template columns */}
      {/* Here's an example of using grid template columns with the grid component, 
      and applying a gap or space between the grid items. */}
      <Grid mb={"30px"} templateColumns="repeat(5, 1fr)" gap={10}>
        <GridItem w="100%" h="10" bg="blue.500" />
        <GridItem w="100%" h="10" bg="blue.500" />
        <GridItem w="100%" h="10" bg="blue.500" />
        <GridItem w="100%" h="10" bg="blue.500" />
        <GridItem w="100%" h="10" bg="blue.500" />
      </Grid>
      {/* Spanning columns */}
      {/* In some layouts, you may need certain grid items to span specific amount of columns 
      or rows instead of an even distribution. To achieve this, you need to pass the 
      colSpan prop to the GridItem component to span across columns and also pass the 
      rowSpan component to span across rows. You also need to specify the templateColumns 
      and templateRows. */}
      <Grid
        mb={"30px"}
        h="200px" // The height of the grid is set to 200px.
        templateRows="repeat(2, 1fr)" // Creates 2 equal rows. '1fr' means each row will take up an equal fraction of available space.
        templateColumns="repeat(5, 1fr)" // Creates 5 equal columns. Each column will take up 1 fraction (1fr) of the grid's width.
        gap={4} // Adds spacing (4 units) between the grid items.
      >
        {/* // Item spans 2 rows and 1 column, colored 'tomato' */}
        <GridItem rowSpan={2} colSpan={1} bg="tomato" />
        {/* // Item spans 2 columns, colored 'papayawhip' */}
        <GridItem colSpan={2} bg="papayawhip" />
        {/* // Item spans 2 columns,colored 'papayawhip' */}
        <GridItem colSpan={2} bg="papayawhip" />
        {/* // Item spans 4 columns, colored 'tomato' */}
        <GridItem colSpan={4} bg="tomato" />
      </Grid>
      {/* Starting and ending lines# */}
      {/* Pass the colStart and colEnd prop to GridItem component to make an 
      element start or end at the nth grid position. */}
      <Grid mb={"30px"} templateColumns="repeat(5, 1fr)" gap={4}>
        <GridItem colSpan={2} h="10" bg="yellow" />
        <GridItem colStart={4} colEnd={6} h="10" bg="yellow" />
      </Grid>
      {/* Template areas#
The templateAreas prop specifies areas within the grid layout. Use template literals to name the area. 
Now you can reference the area by passing area prop in the <GridItem /> component. */}
      <Grid
        mb={"30px"}
        templateAreas={`"header header"
                  "nav main"
                  "nav footer"`}
        gridTemplateRows={"50px 1fr 30px"}
        gridTemplateColumns={"150px 1fr"}
        h="200px"
        gap="1"
        color="blackAlpha.700"
        fontWeight="bold"
      >
        <GridItem pl="2" bg="orange.300" area={"header"}>
          Header
        </GridItem>
        <GridItem pl="2" bg="pink.300" area={"nav"}>
          Nav
        </GridItem>
        <GridItem pl="2" bg="green.300" area={"main"}>
          Main
        </GridItem>
        <GridItem pl="2" bg="blue.300" area={"footer"}>
          Footer
        </GridItem>
      </Grid>
      {/* Usage#
    Specifying the number of columns for the grid layout. */}
      <SimpleGrid mb={"30px"} columns={2} spacing={10}>
        <Box bg="tomato" height="80px"></Box>
        <Box bg="tomato" height="80px"></Box>
        <Box bg="tomato" height="80px"></Box>
        <Box bg="tomato" height="80px"></Box>
        <Box bg="tomato" height="80px"></Box>
      </SimpleGrid>
      {/* You can also make it responsive by passing array or object values into the columns prop. */}
      {/* // Passing `columns={[2, null, 3]}` and `columns={{ sm: 2, md: 3 }}` //
      will have the same effect. */}
      <SimpleGrid mb={"30px"} columns={[2, null, 3]} spacing="40px">
        <Box bg="yellow" height="80px"></Box>
        <Box bg="yellow" height="80px"></Box>
        <Box bg="yellow" height="80px"></Box>
        <Box bg="yellow" height="80px"></Box>
        <Box bg="yellow" height="80px"></Box>
      </SimpleGrid>
      {/* Auto-responsive grid# */}
      {/* To make the grid responsive and adjust automatically without passing columns, simply pass 
      the minChildWidth prop to specify the min-width a child should have before adjusting the layout.
      This uses css grid auto-fit and minmax() internally. */}
      <SimpleGrid mb={"30px"} minChildWidth="120px" spacing="40px">
        <Box bg="blue" height="80px"></Box>
        <Box bg="blue" height="80px"></Box>
        <Box bg="blue" height="80px"></Box>
        <Box bg="blue" height="80px"></Box>
        <Box bg="blue" height="80px"></Box>
        <Box bg="blue" height="80px"></Box>
      </SimpleGrid>
      {/* Changing the spacing for columns and rows
      Simply pass the spacing prop to change the row and column spacing between the grid items. 
      SimpleGrid also allows you pass spacingX and spacingY to define the space between columns and 
      rows respectively. */}
      <SimpleGrid mb={"30px"} columns={2} spacingX="40px" spacingY="20px">
        <Box bg="tomato" height="80px"></Box>
        <Box bg="tomato" height="80px"></Box>
        <Box bg="tomato" height="80px"></Box>
        <Box bg="tomato" height="80px"></Box>
        <Box bg="tomato" height="80px"></Box>
      </SimpleGrid>
      {/* STACK */}
      {/* Usage# */}
      {/* Stack uses a modified version of the CSS lobotomized owl selector to add spacing between its children.
To stack elements in horizontal or vertical direction only, use the HStack or VStack components. 
You can also use the Stack component as well and pass the direction prop. */}
      <HStack mb={"30px"} spacing="24px">
        <Box w="40px" h="40px" bg="yellow.200">
          1
        </Box>
        <Box w="40px" h="40px" bg="tomato">
          2
        </Box>
        <Box w="40px" h="40px" bg="pink.100">
          3
        </Box>
      </HStack>
      {/* Responsive direction#
You can pass responsive values to the Stack component to change stack direction and/or spacing between elements. */}
      <Stack mb={"30px"} direction={["column", "row"]} spacing="24px">
        <Box w="40px" h="40px" bg="yellow.200">
          1
        </Box>
        <Box w="40px" h="40px" bg="tomato">
          2
        </Box>
        <Box w="40px" h="40px" bg="pink.100">
          3
        </Box>
      </Stack>
      {/* Stack Dividers#
In some scenarios, you may want to add dividers between stacked elements. 
Pass the divider prop and set its value to the StackDivider or any custom React element. */}
      <VStack
        mb="20px"
        divider={<StackDivider borderColor="gray.200" />}
        spacing={4}
        align="stretch"
      >
        <Box h="40px" bg="yellow.200">
          1
        </Box>
        <Box h="40px" bg="tomato">
          2
        </Box>
        <Box h="40px" bg="pink.100">
          3
        </Box>
      </VStack>
      {/* Usage#
Think of Wrap component as a flex box container with flex-wrap and spacing support. 
It works really well with things like dialog buttons, tags, and chips.
In the example below, you see that the last Box wrapped to the next line. */}
      <Wrap mb="20px" className="mb-3">
        <WrapItem>
          <Center w="180px" h="80px" bg="red.200">
            Box 1
          </Center>
        </WrapItem>
        <WrapItem>
          <Center w="180px" h="80px" bg="green.200">
            Box 2
          </Center>
        </WrapItem>
        <WrapItem>
          <Center w="180px" h="80px" bg="tomato">
            Box 3
          </Center>
        </WrapItem>
        <WrapItem>
          <Center w="180px" h="80px" bg="blue.200">
            Box 4
          </Center>
        </WrapItem>
      </Wrap>
      {/* Change the spacing# Pass the spacing prop to apply consistent spacing
      between each child, even if it wraps. 
      Pro Tip: You can pass responsive values for the spacing.*/}
      <Wrap mb="20px" spacing="30px">
        <WrapItem>
          <Center w="180px" h="80px" bg="red.200">
            Box 1
          </Center>
        </WrapItem>
        <WrapItem>
          <Center w="180px" h="80px" bg="green.200">
            Box 2
          </Center>
        </WrapItem>
        <WrapItem>
          <Center w="180px" h="80px" bg="tomato">
            Box 3
          </Center>
        </WrapItem>
        <WrapItem>
          <Center w="180px" h="80px" bg="blue.200">
            Box 4
          </Center>
        </WrapItem>
        <WrapItem>
          <Center w="180px" h="80px" bg="blackAlpha.500">
            Box 5
          </Center>
        </WrapItem>
      </Wrap>
      {/* Change the alignment# Pass the align prop to change the alignment of the
      child along the cross axis. */}
      <Wrap mb={"20px"} spacing="30px" align="center">
        <WrapItem>
          <Center w="180px" h="80px" bg="red.200">
            Box 1
          </Center>
        </WrapItem>
        <WrapItem>
          <Center w="180px" h="40px" bg="green.200">
            Box 2
          </Center>
        </WrapItem>
        <WrapItem>
          <Center w="120px" h="80px" bg="tomato">
            Box 3
          </Center>
        </WrapItem>
        <WrapItem>
          <Center w="180px" h="40px" bg="blue.200">
            Box 4
          </Center>
        </WrapItem>
        <WrapItem>
          <Center w="180px" h="80px" bg="blackAlpha.500">
            Box 5
          </Center>
        </WrapItem>
      </Wrap>
      {/* Pass the justify prop to change the alignment of the child along the main axis. */}
      <Wrap mb={"20px"} spacing="30px" justify="center">
        <WrapItem>
          <Center w="180px" h="80px" bg="red.200">
            Box 1
          </Center>
        </WrapItem>
        <WrapItem>
          <Center w="180px" h="80px" bg="green.200">
            Box 2
          </Center>
        </WrapItem>
        <WrapItem>
          <Center w="120px" h="80px" bg="tomato">
            Box 3
          </Center>
        </WrapItem>
        <WrapItem>
          <Center w="180px" h="80px" bg="blue.200">
            Box 4
          </Center>
        </WrapItem>
        <WrapItem>
          <Center w="180px" h="80px" bg="blackAlpha.500">
            Box 5
          </Center>
        </WrapItem>
      </Wrap>
      {/* Button Sizes# Use the size prop to change the size of the button. You can
      set the value to xs, sm, md, or lg. */}
      <Stack mb={"30px"} spacing={4} direction="row" align="center">
        <Button colorScheme="teal" size="xs">
          Button
        </Button>
        <Button colorScheme="teal" size="sm">
          Button
        </Button>
        <Button colorScheme="teal" size="md">
          Button
        </Button>
        <Button colorScheme="teal" size="lg">
          Button
        </Button>
      </Stack>
    </Grid>
  );
}

export default App;
