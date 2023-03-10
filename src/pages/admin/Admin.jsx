import "./admin.scss";
import { Link } from "react-router-dom";
import AdminPanelSettingsOutlinedIcon from "@mui/icons-material/AdminPanelSettingsOutlined";
import { useState } from "react";

const Admin = () => {
  const [inputs, setInputs] = useState({
    username: "",
    password: "",
  });
  const [err, setErr] = useState(null);

  const handleChange = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  const handleLogin = async (e) => {
    e.preventDefault();
  };
  console.log(inputs);
  return (
    <div className="login">
      <div className="card">
        <div className="left">
          <h1>Hello Admin.</h1>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Amet
            inventore illum sint eius, tenetur voluptatem quibusdam. Sit dicta
            aliquid vitae laboriosam, aperiam quod iusto recusandae, debitis
            tempore repellendus fugiat! Molestias!
          </p>
          <span>Create Admin Account?</span>
          <Link to="/adminregister">
            <button>Register</button>
          </Link>
        </div>
        <div className="right">
          <div className="icon">
            <AdminPanelSettingsOutlinedIcon style={{ fontSize: "200px" }} />
          </div>
          <h1>Admin Login</h1>
          <form>
            <input
              type="text"
              placeholder="Username"
              name="username"
              onChange={handleChange}
            />
            <input
              type="password"
              placeholder="Password"
              name="password"
              onChange={handleChange}
            />
            {/* {err && err} */}
            <button onClick={handleLogin}>Login</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Admin;
