import { ImageResponse } from "@vercel/og";

export const config = {
  runtime: "experimental-edge",
};

export default async function () {
  const font = await fetch(
    new URL("../../assets/jbm.ttf", import.meta.url)
  ).then((res) => res.arrayBuffer());

  return new ImageResponse(
    (
      <div
        style={{
          background: "#9334e9",
          width: "100%",
          height: "100%",
          padding: 16,
          display: "flex",
        }}
      >
        <div
          style={{
            background: "#a5f3fc",
            width: "100%",
            height: "100%",
            borderRadius: 8,
            borderRight: "4px solid white",
            borderBottom: "4px solid white",
            display: "flex",
            flexDirection: "column",
            padding: 64,
          }}
        >
          <h1
            style={{
              fontFamily: "monospace",
              fontSize: 256,
              lineHeight: 1,
            }}
          >
            NERVIA
          </h1>
          <p style={{ marginTop: 200, fontSize: 32, fontWeight: "bold" }}>
            The Nerdy Next.js 13 Trivia Game
          </p>
          <p style={{ fontSize: 32, fontWeight: "bold" }}>nervia.tej.as</p>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 600,
      fonts: [{ data: font, name: "jbm" }],
    }
  );
}
