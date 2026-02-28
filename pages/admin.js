import { useState } from "react";

export default function Admin() {
  const [password, setPassword] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);

  const correctPassword = "4826La18";

  const login = () => {
    if (password === correctPassword) {
      setLoggedIn(true);
    } else {
      alert("Wrong password");
    }
  };

  if (!loggedIn) {
    return (
      <div style={{ padding: 20 }}>
        <h2>Admin Login</h2>
        <input
          type="password"
          placeholder="Enter password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={login} style={{ marginLeft: 10 }}>
          Login
        </button>
      </div>
    );
  }

  return (
    <div style={{ padding: 20 }}>
      <h2>Admin Panel</h2>
      <p>You are logged in successfully.</p>
    </div>
  );
}
