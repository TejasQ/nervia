import { StartButton } from "./StartButton";
import { WatchButton } from "./WatchButton";

const IndexPage = () => {
  return (
    <div className="flex gap-2">
      <StartButton />
      <WatchButton />
    </div>
  );
};

export default IndexPage;
