import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { StyledLoginPage } from "../styles/LoginPageStyles.js";

export const LoginPage = () => {
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState({
    userName: "",
    password: "",
  });
  const [redirectToHome, setRedirectToHome] = useState(false);

  console.log(redirectToHome);
  
  useEffect(() => {
    fetch("/api/users", { method: "get" })
      .then((res) => {
        return res.json();
      })
      .then((json) => {
        console.log(json.data);
        setUsers(json.data);
      })
      .catch((err) => {
        console.log("Error getting users");
      });
  }, []);

  const handleSignUp = (e) => {
    e.preventDefault();
    createUser();
  };

  const createUser = () => {
    console.log("TEST", user);
    fetch("/api/users", {
      method: "POST",
      body: JSON.stringify(user),
      headers: { "Content-Type": "application/json; charset=utf-8" },
    })
      .then((res) => {
        return res.json();
      })
      .then((json) => {
        setUsers(json.data);
        setUser({});
        setRedirectToHome(true);
      })
      .catch((err) => {
        console.log("Error creating user", err);
      });
  };

  const handleChange = (e) => {
    const newUser = { ...user };
    newUser[e.target.name] = e.target.value;
    setUser(newUser);
  };
  // console.log(users);

  return (
    <StyledLoginPage>
      <div>
        <h1>Welcome!</h1>
        <h3>Please Select an Existing User</h3>
        {users.map((user) => (
          <div key={user._id}>
            <Link to={`/user/${user._id}`}>{user.userName}</Link>
          </div>
        ))}

        <h1>Sign Up!</h1>
        <form onSubmit={handleSignUp}>
          <div>
            <label htmlFor="userName">User Name</label>
            <input
              onChange={handleChange}
              name="userName"
              type="text"
              value={user.userName}
            />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input
              onChange={handleChange}
              name="password"
              type="text"
              value={user.password}
            />
          </div>
          <button>Sign Up</button>
        </form>
      </div>
    </StyledLoginPage>
  );
};
