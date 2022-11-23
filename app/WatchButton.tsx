"use client";

import { Button } from "./Button";

export const WatchButton = () => {
  return (
    <Button
      className="text-white bg-gradient-to-tr from-red-400 to-pink-600"
      onClick={() => window.open("https://youtu.be/lXK88y9e3Ys", "_blank")}
    >
      Watch the Video
    </Button>
  );
};
