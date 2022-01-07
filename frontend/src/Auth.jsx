import "./style/Auth.css";
import "./style/Button.css";
import { supabase } from "./supabaseClient";

function Auth(props) {
  async function signInWithGoogle() {
    const { user, session, error } = await supabase.auth.signIn({
      provider: "google",
    });
  }

  return (
    <div class="auth">
      <h1 class="text">Login</h1>
      <button
        class="button"
        style={{ "background-color": "#DB4437", color: "white" }}
        onClick={signInWithGoogle}
      >
        Google
      </button>
    </div>
  );
}

export default Auth;
