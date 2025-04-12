import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Two from "./Two";
import RGB from "./RGB";
import BasicsOfMotion from "./BasicsOfMotion";
import Gestures from "./Gestures";
import AnimationControl from "./AnimationControl";
import ViewBasedAnimations from "./ViewBasedAnimations";
import ScrollAnimations from "./ScrollAnimations";
import MSInput from "./MSInput";
import InfiniteScroll from "./InfiniteScroll";
import InfinitScroll1 from "./IS1";
import InfiniteScrollv2 from "./InfiniteScrollv2";
import InfiniteScrollv3 from "./InfiniteScrollv3";
import { ISV4 } from "./ISV4";
import InfiniteScrollIO from "./InfiniteScrollIO";
import InfiniteScrollIO2 from "./ISIO2";
import ISIOWithRef from "./ISIOWithRef";
import WDSInfiniteScroll from "./WDS_InfiniteScroll";
// import ImageCarousel from "./ImageCarousel";
import ImageCarouselv2 from "./ImageCarouselv2";
import TicTacToe from "./TicTacToe";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      {/* <RGB/> */}
      {/* <BasicsOfMotion/> */}
      {/* <Gestures/> */}
      {/* <AnimationControl/> */}
      {/* <ViewBasedAnimations/> */}
      {/* <ScrollAnimations/> */}
      {/* <MSInput/> */}
      {/* <InfiniteScroll /> */}
      {/* <InfiniteScrollIO />     */}
      {/* <InfiniteScrollIO2 /> */}
      {/* <ISIOWithRef /> */}
      {/* <WDSInfiniteScroll /> */}
      {/* <ImageCarouselv2
        images={[
          {
            src: "https://picsum.photos/id/600/600/400",
            alt: "Forest",
          },
          {
            src: "https://picsum.photos/id/100/600/400",
            alt: "Beach",
          },
          {
            src: "https://picsum.photos/id/200/600/400",
            alt: "Yak",
          },
          {
            src: "https://picsum.photos/id/300/600/400",
            alt: "Hay",
          },
          {
            src: "https://picsum.photos/id/400/600/400",
            alt: "Plants",
          },
          {
            src: "https://picsum.photos/id/500/600/400",
            alt: "Building",
          },
        ]}
      /> */}

      <TicTacToe />
      {/* <InfiniteScrollv2 /> */}
      {/* <InfiniteScrollv3 /> */}
      {/* <ISV4 /> */}
      {/* <InfinitScroll1 /> */}
    </>
  );
}

export default App;
