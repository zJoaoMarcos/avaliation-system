import { InteractionStatus } from "@azure/msal-browser";
import { useMsal } from "@azure/msal-react";
import { AnimationSignIn } from "../../components/AnimationSignIn";

export function SignIn() {
  const { instance, inProgress } = useMsal();

  const handleLogin = async () => {
    inProgress === InteractionStatus.None;
    await instance.handleRedirectPromise();
    const accounts = instance.getAllAccounts();
    if (accounts.length === 0) {
      // No user signed in
      instance.loginRedirect();
    }
  };

  return (
    <div className="w-screen h-screen flex flex-col items-center justify-center py-8 px-20 ">
      <AnimationSignIn />

      <div className="w-1/2 flex flex-col justify-center items-center gap-14 mt-10">
        <h2
          className="text-center text-2xl
         md:text-4xl font-bold"
        >
          Programa de Reconhecimento Patriani
        </h2>

        <button
          className="w-28 rounded-full bg-red-700 px-4 py-3 text-white font-semibold transition-colors shadow-md shadow-black/20 hover:bg-red-800 hover:font-bold"
          onClick={() => handleLogin()}
        >
          Avaliar
        </button>
      </div>
    </div>
  );
}
