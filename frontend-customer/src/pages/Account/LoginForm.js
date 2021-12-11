import React, { createRef, useRef, useState } from "react";
import "./styles.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

function LoginForm() {
  let navigate = useNavigate();
  const [errorName, setErrorName] = useState(
    "Phải nhập tên đăng nhập và mật khẩu!"
  );
  const emailInput = createRef();
  const passwordInput = createRef();

  const loginSubmit = () => {
    if (emailInput.current.value === "" || passwordInput.current.value === "") {
      alert(errorName);
    } else {
      axios
        .post("http://localhost:8000/tkkh/login", {
          ten_dn: emailInput.current.value,
          mat_khau: passwordInput.current.value,
        })
        .then((res) => {
          console.log(res.status);
          if (res.data === JSON.stringify("Đăng nhập thành công")) {
            alert("Đăng nhập thành công");
            navigate("/")
          }
        });
    }
  }
  return (
    <div
      className="container"
      style={{
        backgroundImage: `url('./images/Login-Form1.jpg')`,
        display: "flex",
      }}
    >
      <div className="app-wrapper">
        <div>
          <h2 className="title">Login</h2>
        </div>
        <form className="form-wrapper">
          <div className="name">
            <label className="label">Email</label>
            <input
              className="input"
              type="email"
              name="email"
              ref={emailInput}
            />
          </div>
          <div className="password">
            <label className="label">Password</label>
            <input
              className="input"
              type="password"
              name="password"
              ref={passwordInput}
            />
          </div>
          <div>
            <button className="submit" onClick={loginSubmit}>
              Login
            </button>
          </div>
          <div className="signuplink">
            You don't have an account?
            <Link to="/Signup" style={{ color: "#5899d6", fontWeight: "600" }}>
              {" "}
              Register here
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default LoginForm;

// class LoginForm extends React.Component {
//   constructor(props) {
//     super(props)
//     this.state = {
//       errorName: ""
//     }
//     this.emailInput = createRef();
//   this.passwordInput = createRef();
//   }

//   loginSubmit = () => {
//     if (
//       this.emailInput.current.value === "" ||
//       this.passwordInput.current.value === ""
//     ) {
//       this.setState({errorName: "Phải nhập tên đăng nhập và mật khẩu!"})
//       alert(this.state.errorName);
//     } else {
//       axios
//         .post("http://localhost:8000/tkkh/login", {
//           ten_dn: this.emailInput.current.value,
//           mat_khau: this.passwordInput.current.value,
//         })
//         .then((res) => {
//           console.log(res.status);
//           if(res.data === "Đăng nhập thành công"){
//             alert("Đăng nhập thành công")
//           }
//         });
//     }
//   };
//   render(){
//   return (
//     <div
//       className="container"
//       style={{
//         backgroundImage: `url('./images/Login-Form1.jpg')`,
//         display: "flex",
//       }}
//     >
//       <div className="app-wrapper">
//         <div>
//           <h2 className="title">Login</h2>
//         </div>
//         <form className="form-wrapper">
//           <div className="name">
//             <label className="label">Email</label>
//             <input
//               className="input"
//               type="email"
//               name="email"
//               ref={this.emailInput}
//             />
//           </div>
//           <div className="password">
//             <label className="label">Password</label>
//             <input
//               className="input"
//               type="password"
//               name="password"
//               ref={this.passwordInput}
//             />
//           </div>
//           <div>
//             <button className="submit" onClick={() => this.loginSubmit()}>
//               Login
//             </button>
//           </div>
//           <div className="signuplink">
//             You don't have an account?
//             <Link to="/Signup" style={{ color: "#5899d6", fontWeight: "600" }}>
//               {" "}
//               Register here
//             </Link>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// }
// }

// export default LoginForm;
