import { Player } from "@lottiefiles/react-lottie-player";
import animation from "../../assets/animation.json";

export function AnimationSignIn() {
  return (
    <div className="w-full">
      <Player
        src={animation}
        style={{ width: "350px" }}
        autoplay
        loop
        speed={1}
      ></Player>
    </div>
  );
}
