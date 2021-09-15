import { Link } from "@chakra-ui/react";

interface Props {
  children: string;
  color: string | string[];
  href: string;
}

function ProjectCardBtn({ children, color, href }: Props) {
  return (
    <Link
      target="_blank"
      href={href}
      display="flex"
      alignItems="center"
      justifyContent="center"
      color={color}
      border=".1rem solid"
      borderColor="currentColor"
      borderRadius=".3rem"
      boxShadow="0 0 .5rem currentColor"
      bg="dark.solid"
      py={1}
      px={2}
      _hover={{
        textDecoration: "none",
        boxShadow: "0 0 1rem currentColor",
        transform: "scale(1.1)",
      }}
      _active={{
        boxShadow: "0 0 .75rem currentColor",
        transform: "scale(.9)",
      }}
    >
      {children}
    </Link>
  );
}

export default ProjectCardBtn;
