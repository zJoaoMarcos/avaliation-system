import { Player } from "@lottiefiles/react-lottie-player";
import animation from "../../assets/animation.json";

interface AnimationSignInProps {
  width: string;
}

export function AnimationSignIn() {
  return (
    <div className="w-full flex items-center justify-center">
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
