import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useAuthStore from "./../Components/store";
import "./../styles/loginpage.css";

export default function LoginPage() {
  const [user, setUser] = React.useState("");
  const [pass, setPass] = React.useState("");
  const login = useAuthStore((state) => state.login);
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);
  const navigate = useNavigate();

  
  useEffect(() => {
    if (isAuthenticated) {
      navigate("/logpage");
    }
  }, [isAuthenticated, navigate]);

  const handleSubmit = (e) => {
    e.preventDefault();
    login(user, pass); 
 
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Username"
          value={user}
          onChange={(e) => setUser(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={pass}
          onChange={(e) => setPass(e.target.value)}
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}
