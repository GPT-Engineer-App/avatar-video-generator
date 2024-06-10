import { useRef } from "react";
import { Container, VStack, Text, Button, Box } from "@chakra-ui/react";
import { FaPlay, FaPause } from "react-icons/fa";

const Index = () => {
  const videoRef = useRef(null);

  const handlePlay = () => {
    videoRef.current.play();
  };

  const handlePause = () => {
    videoRef.current.pause();
  };

  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4}>
        <Text fontSize="2xl">Video Avatar</Text>
        <Box border="1px" borderColor="gray.200" borderRadius="md" overflow="hidden">
          <video ref={videoRef} width="320" height="240" controls>
            <source src="GPTENG:get_video('sample video')" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </Box>
        <VStack spacing={2} direction="row">
          <Button leftIcon={<FaPlay />} colorScheme="teal" onClick={handlePlay}>
            Play
          </Button>
          <Button leftIcon={<FaPause />} colorScheme="red" onClick={handlePause}>
            Pause
          </Button>
        </VStack>
      </VStack>
    </Container>
  );
};

export default Index;
