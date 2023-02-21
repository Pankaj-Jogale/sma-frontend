import "./register.scss";

const Register = () => {
  return (
    <div className="register">
      <div className="card">
        <div className="left">
          <h1>Hello User.</h1>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Amet
            inventore illum sint eius, tenetur voluptatem quibusdam. Sit dicta
            aliquid vitae laboriosam, aperiam quod iusto recusandae, debitis
            tempore repellendus fugiat! Molestias!
          </p>
          <span>Do you have an Account?</span>
          <button>Login</button>
        </div>
        <div className="right">
          <h1>Register</h1>
          <form>
            <input type="text" placeholder="Name" />
            <input type="email" placeholder="Email" />
            <input type="text" placeholder="Username" />
            <input type="password" placeholder="Password" />

            <button>Register</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
