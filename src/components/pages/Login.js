import Button from "../button";
import LoginForm from "../login-form";
function Login() {
  return (
    <>
      <LoginForm />
      <Button to="/" className={"button"}>
        Go Home
      </Button>
    </>
  );
}
export default Login;
