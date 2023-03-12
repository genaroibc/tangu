import { useState } from "react";
import { LoginErrors } from "~/constants/error-messages";
import { useSupabaseClient } from "~/hooks/useSupabaseClient";

export function Login() {
  const [error, setError] = useState<LoginErrors | null>(null);

  const supabaseClient = useSupabaseClient();

  const handleSignOut = async () => {
    const { error } = await supabaseClient.auth.signOut();

    if (error) {
      return setError(LoginErrors.SIGNOUT_ERROR);
    }

    setError(null);
  };

  const handleLogin = async () => {
    const { error } = await supabaseClient.auth.signInWithOAuth({
      provider: "github",
    });

    if (error) {
      return setError(LoginErrors.LOGIN_ERROR);
    }

    setError(null);
  };

  return (
    <section className="flex justify-center items-center gap-4">
      <button onClick={handleLogin}>Log in</button>
      <button
        className="bg-transparent border-solid border-2 border-complement-color"
        onClick={handleSignOut}
      >
        Sign out
      </button>

      <p className="text-red-500 text-base">{error}</p>
    </section>
  );
}
