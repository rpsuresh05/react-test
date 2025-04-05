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
      {/* <InfiniteScrollv2 /> */}
      {/* <InfiniteScrollv3 /> */}
      <ISV4 />
      {/* <InfinitScroll1 /> */}
    </>
  );
}

export default App;
