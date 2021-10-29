import {
  Stack,
  Flex,
  Modal,
  ModalOverlay,
  ModalFooter,
  ModalCloseButton,
  ModalBody,
  ModalHeader,
  ModalContent,
  useDisclosure,
} from "@chakra-ui/react";
import { cloneElement, ReactElement } from "react";
import ProjectCardTitle from "./ProjectCardTitle";

interface Props {
  children: ReactElement[];
  id: string;
}

function ProjectCard({ children, id }: Props) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Flex
        h="min-content"
        w="100%"
        justifyContent="center"
        id={id ? id : ""}
        cursor="pointer"
        onClick={onOpen}
      >
        <Stack
          p="1rem"
          borderRadius=".3rem"
          bgGradient="linear(to bottom right, Neutral.default.20, Neutral.light.15, Neutral.dark.10)"
          boxShadow="0 .8rem 1.6rem rgba(0, 0, 0, .25)"
          flexDir="column"
          color="light.70"
          maxW="25rem"
          transition="all .3s ease"
          _hover={{
            boxShadow: "0 1.6rem 1.6rem rgba(0, 0, 0, .25)",
            transform: "scale(1.05)",
          }}
        >
          {children}
        </Stack>
      </Flex>
      <Modal isOpen={isOpen} onClose={onClose} size="xl">
        <ModalOverlay />
        <ModalContent isLazy>
          <ModalCloseButton />
          <ModalBody p={10}>
            {children.map((child) => {
              return cloneElement(child, {
                isTruncated: true,
                minH: "full",
              });
            })}
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}

export default ProjectCard;
