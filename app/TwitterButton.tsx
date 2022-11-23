"use client";

import { Button } from "./Button";

export const TwitterButton = () => {
  return (
    <Button
      className="text-white bg-gradient-to-tr from-sky-600 to-teal-400"
      onClick={() => window.open("https://twitter.com/tejaskumar_", "_blank")}
    >
      Twitter
    </Button>
  );
};
