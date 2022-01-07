import "./style/Auth.css";
import "./style/Button.css";
import BouncingBalls from "./components/BouncingBalls";

function Auth() {
  return (
    <>
      <BouncingBalls/>
      <div className="auth">
        <div className="panel">
          <h1 className="text">Login</h1>
          <button
            class="button"
            style={{ "background-color": "#DB4437", color: "white" }}
          >
            Google
          </button>
        </div>
      </div>
    </>
  );
}

export default Auth;
