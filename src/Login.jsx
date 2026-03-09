import "./Login.css";
import { useDispatch } from "react-redux";
import { checkLogIn } from "./dashboardSlice";

export default function Login() {
  const dispatch = useDispatch();
  // const handleAction = (formData) => {
  //   const username = formData.get("username");
  //   const password = formData.get("password");
  //   localStorage.setItem("user", JSON.stringify({ username, password }));
  //   // console.log(localStorage);
  //   dispatch(checkLogIn());
  // };

  const handleAction = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const username = formData.get("username");
    const password = formData.get("password");
    localStorage.setItem("user", JSON.stringify({ username, password }));
    // console.log(localStorage);
    dispatch(checkLogIn());
  };

  return (
    <div className="login-page">
      <form onSubmit={handleAction} className="login-form">
        <fieldset>
          <legend>Login Information</legend>
          <div className="form-groups">
            <div className="form-group">
              <label htmlFor="username">Username:</label>
              <input type="text" id="username" name="username" required />
            </div>
            <div className="form-group">
              <label htmlFor="password">&nbsp;Password:</label>
              <input
                type="password"
                id="password"
                name="current-password"
                required
              />
            </div>
          </div>
        </fieldset>
        <button>Sign In</button>
      </form>
    </div>
  );
}
