import "./style/Auth.css";
import "./style/Button.css";
import BouncingBalls from "./components/BouncingBalls";
import { supabase } from "./supabaseClient";

function Auth(props) {
  async function signInWithGoogle() {
    await supabase.auth.signIn({
      provider: "google",
    }, {
      redirectTo: typeof window !== "undefined" && `${window.location.protocol}//${window.location.host}`
    });
  }

  return (
    <>
      <BouncingBalls/>
      <div className="auth">
        <div className="panel">
          <h1 className="text">Login</h1>
          <button
            class="button"
            style={{ "background-color": "#DB4437", color: "white" }}
            onClick={signInWithGoogle}
          >
            Google
          </button>
        </div>
      </div>
    </>
  );
}

export default Auth;
