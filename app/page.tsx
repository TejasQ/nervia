import { StartButton } from "./StartButton";
import { TwitterButton } from "./TwitterButton";
import { WatchButton } from "./WatchButton";

const IndexPage = () => {
  return (
    <div className="grid w-full max-w-xl gap-12 mx-auto">
      <div className="flex items-center justify-center gap-2">
        <StartButton />
        <TwitterButton />
      </div>
      <div className="grid gap-4">
        <h1 className="text-3xl font-bold">Watch the Video (How It's Built)</h1>
        <p>
          Nervia is a sample Next.js 13 application built to explore and get a
          feel for Next.js. Watch the video below to learn more.
        </p>
        <iframe
          className="max-w-full"
          width="560"
          height="315"
          src="https://www.youtube.com/embed/lXK88y9e3Ys"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

export default IndexPage;
