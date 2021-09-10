import { Badge } from "@chakra-ui/react";

interface Props {
  children: string;
}
function EducationYear({ children }: Props) {
  return (
    <Badge bg="dark.solid" color="light.70" fontSize="md">
      {children}
    </Badge>
  );
}

export default EducationYear;
