import { Player } from "@lottiefiles/react-lottie-player";
import animation from "../../assets/loading-stars.json";

export function AnimationLoading() {
  return (
    <div className="w-full min-h-[400px] flex items-center justify-center">
      <Player
        src={animation}
        style={{ width: "280px" }}
        autoplay
        loop
        speed={1}
      ></Player>
    </div>
  );
}
