"use client";

import { useRouter } from "next/navigation";
import { Button } from "./Button";

export const StartButton = () => {
  const { push } = useRouter();

  return (
    <Button className="text-black bg-white" onClick={() => push("/game")}>
      Start!
    </Button>
  );
};
