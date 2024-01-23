import React from "react";
import Bg from "../assets/moi.gif";
import Bg1 from "../assets/bg.png";
import Bg2 from "../assets/water.gif";
import Bg3 from "../assets/water-pix.gif";
import Bg4 from "../assets/fire.gif";
import Bg5 from "../assets/fire-pix-inv.gif";
import Bg6 from "../assets/st185.gif";
import Bg7 from "../assets/stars.gif";
import Bg8 from "../assets/mobydick.gif";
import Bg9 from "../assets/pinkpanther.gif";
import Bg10 from "../assets/ciontea.gif";
import Bg11 from "../assets/bb.gif";
import Bg12 from "../assets/chloe.gif";
import Bg13 from "../assets/eye.gif";
import Bg14 from "../assets/afx.gif";
import Bg15 from "../assets/2001.gif";
import Bg16 from "../assets/arabia.gif";
import Bg17 from "../assets/ironmonkey.gif";
import Bg18 from "../assets/akirasm.gif";
import Bg19 from "../assets/sheep.gif";

const backgroundImages = [
  Bg1,
  Bg,
  Bg2,
  Bg3,
  Bg4,
  Bg5,
  Bg6,
  Bg7,
  Bg8,
  Bg9,
  Bg10,
  Bg11,
  Bg12,
  Bg13,
  Bg14,
  Bg15,
  Bg16,
  Bg17,
  Bg18,
  Bg19,
];
interface BackgroundProps {
  backgroundIndex: number;
}

const Background: React.FC<BackgroundProps> = ({ backgroundIndex }) => {
  return (
    <div className="fixed top-0 left-0 w-full h-full z-[-10] overflow-hidden">
      <img
        src={backgroundImages[backgroundIndex]}
        alt="Background"
        className="object-cover w-full h-full"
        style={{ userSelect: "none" }}
      />
    </div>
  );
};

export default Background;

// export default function Background() {
//   return (
//     <div className="fixed top-0 left-0 w-full h-full z-[-10] bg-no-repeat bg-center">
//       <img
//         src={BgImg}
//         alt="Background"
//         className="object-cover w-full h-full"
//       ></img>
//     </div>
//   );
// }
