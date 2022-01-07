import "./style/Auth.css";
import "./style/Button.css";

function Auth() {
  return (
    <>
      <BouncingBalls></BouncingBalls>
      <div class="auth">
        <h1 class="text">Login</h1>
        <button
          class="button"
          style={{ "background-color": "#DB4437", color: "white" }}
        >
          Google
        </button>
      </div>
    </>
  );
}

export default Auth;
