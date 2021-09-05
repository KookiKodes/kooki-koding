import { useEffect, useRef, useState } from "react";

interface UseMessageArgs {
  state: string;
}

const useMessage = ({ state }: UseMessageArgs) => {
  const stateRef = useRef<string>(state);
  const [message, setMessage] = useState<string | []>("");

  useEffect(() => {}, [state]);
};

export default useMessage;
