// packages
import { Tooltip, Flex } from "@chakra-ui/react";
import Image from "next/image";

// static
import avatar from "@lib/assets/avatar/old-avatar-picture.jpg";

interface Props {
  name: string;
}

function ProfileImage({ name }: Props) {
  return (
    <Tooltip
      label={`Picture of ${name}`}
      color="dark.solid"
      bg="Accent.solid"
      placement="top"
      hasArrow
      arrowSize={10}
      openDelay={500}
    >
      <Flex
        overflow="hidden"
        justifyItems="center"
        alignItems="center"
        position="relative"
        borderRadius="50%"
        color="Accent.solid"
        border=".4rem solid"
        borderColor="currentColor"
        boxShadow="0 0 50px currentColor"
        w={215}
        h={215}
      >
        <Image
          src={avatar.src}
          alt={`Picture of ${name}`}
          width={300}
          height={400}
        />
      </Flex>
    </Tooltip>
  );
}

export default ProfileImage;
