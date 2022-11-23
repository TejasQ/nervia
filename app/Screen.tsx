import { FC, PropsWithChildren } from "react";
import { JetBrains_Mono } from "@next/font/google";
import clsx from "clsx";

const font = JetBrains_Mono({ subsets: ["latin"], variable: "--font-jb-mono" });

export const Screen: FC<PropsWithChildren<{}>> = (props) => (
  <div
    {...props}
    className={clsx(
      font.className,
      "p-8 text-xl font-bold text-black border-b-2 border-r-2 border-white rounded md:text-2xl bg-cyan-200"
    )}
  />
);
