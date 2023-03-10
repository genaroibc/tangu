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
    <section className="login_form">
      <button onClick={handleLogin}>Log in</button>
      <button className="login_form__signout_btn" onClick={handleSignOut}>
        Sign out
      </button>

      <p className="login_form__error_pgph">{error}</p>
    </section>
  );
}
