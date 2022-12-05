import { useMsal } from "@azure/msal-react";
import { loginRequest } from "../../services/authConfig";

/**
 * Renders a button which, when selected, will redirect the page to the login prompt
 */
export function SignIn() {
  const { instance } = useMsal();

  const handleLogin = () => {
    instance.loginPopup(loginRequest).catch((e) => {
      console.log(e);
    });
  };
  return (
    <div className="w-screen h-screen flex items-center justify-center">
      <button
        className="rounded bg-red-700 px-3 py-4"
        onClick={() => handleLogin()}
      >
        Sign in using Redirect
      </button>
    </div>
  );
}
