import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [confirmpassword, setConfirmpassword] = useState("");
  const [values, setValues] = useState({
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
    password: "",
  });
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const navigate = useNavigate();

  const handleInput = (event) => {
    setValues((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
    // console.log(CryptoJS.MD5(event.target.value).toString())
  };
 
  const handleSubmit = (event) => {
    event.preventDefault();
    const { email, phone, password } = values;
    // if (userdetails.some((user) => user.email === email)) {
    //   setError("This Email already Registered");
    // } else if (userdetails.some((user) => user.phone.toString() === phone)) {
    //   setError("Phone number already exists");
    // } else 
    if (password !== confirmpassword) {
      setError("Passwords do not match");
    } else {
      const passwordRegex = /^(?=.*\d)(?=.*[a-zA-Z])(?=.*[!@#$%^&*]).{8,}$/;
      if (!passwordRegex.test(password)) {
        setError(
          "Password must contain at least 8 characters, including one number, one letter, and one special character."
        );
      } else {
        setError("");
        sessionStorage.setItem("registered_user",JSON.stringify(values));
        navigate("/main");
        // values.password = CryptoJS.MD5(values.password).toString();
        // navigate("/emailverification", { state: { values } });
      }
    }
  };
  // console.log(values);

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };
  const handleToggleConfirmPassword = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  return (
    <div className="fullscreen">
      <main>
        <div className="p-2 ps-lg-5 pe-lg-5 mb-5">
          <div className="col-xs-12 col-md-12 col-lg-12">
            <form method="post" onSubmit={handleSubmit}>
              <div>
                <div>
                  <h1 className="text-center fs-3">Register</h1>
                </div>
                <hr />
                <div className="form-group d-md-flex justify-content-center mt-4 mb-2">
                  <label
                    className="control-label col-sm-2 col-md-2 fw-bold"
                    htmlFor="firstname"
                  >
                    First Name
                  </label>
                  <div className="d-flex col-sm-6 col-md-4 col-xs-12">
                    <input
                      className="form-control mb-2"
                      type="text"
                      id="firstname"
                      name="firstname"
                      onChange={handleInput}
                      placeholder="Enter First Name"
                      pattern="[A-Z][a-z]*\s*\w*"
                      title="First letter should be uppercase, remaining letters are lowercase. No special characters"
                      required
                    />
                    <span className="text-danger fs-4"> &nbsp;*</span>
                  </div>
                </div>
                <div className="form-group  d-md-flex justify-content-center mt-2 mb-2">
                  <label
                    className="control-label col-sm-2 col-md-2 fw-bold"
                    htmlFor="lastname"
                  >
                    Last Name
                  </label>
                  <div className="d-flex col-sm-6 col-md-4 col-xs-12">
                    <input
                      className="form-control mb-2"
                      type="text"
                      id="lastname"
                      name="lastname"
                      onChange={handleInput}
                      placeholder="Enter Last Name"
                      pattern="[A-Z][a-z]*\s*\w*"
                      title="First letter should be uppercase, remaining letters are lowercase. No special characters"
                      required
                    />
                    <span className="text-danger fs-4"> &nbsp;*</span>
                  </div>
                </div>
                <div className="form-group  d-md-flex justify-content-center mt-2 mb-2">
                  <label
                    className="control-label col-sm-2 col-md-2 fw-bold"
                    htmlFor="email"
                  >
                    Email
                  </label>
                  <div className="d-flex col-sm-6 col-md-4 col-xs-12">
                    <input
                      className="form-control mb-2"
                      type="email"
                      id="email"
                      name="email"
                      onChange={handleInput}
                      placeholder="Enter Email"
                      required
                    />
                    <span className="text-danger fs-4"> &nbsp;*</span>
                  </div>
                </div>
              </div>
              <div>
                <div className="form-group  d-md-flex justify-content-center mt-2 mb-2">
                  <label
                    className="control-label col-sm-2 col-md-2 fw-bold"
                    htmlFor="phone"
                  >
                    Phone
                  </label>
                  <div className="d-flex col-sm-6 col-md-4 col-xs-12">
                    <input
                      className="form-control mb-2"
                      type="tel"
                      id="phone"
                      name="phone"
                      onChange={handleInput}
                      placeholder="Enter Phone Number"
                      pattern="[0-9]{10}"
                      title="10 digit numeric value only"
                      minLength={10}
                      maxLength={10}
                      required
                    />
                    <span className="text-danger fs-4"> &nbsp;*</span>
                  </div>
                </div>
              </div>
              <div>
                <div className="form-group  d-md-flex justify-content-center mt-2 mb-2">
                  <label
                    className="control-label col-sm-2 col-md-2 fw-bold"
                    htmlFor="password"
                  >
                    Password
                  </label>
                  <div className="d-flex col-sm-6 col-md-4 col-xs-12 passwordgroup">
                    <input
                      className="form-control mb-2"
                      type={showPassword ? 'text' : 'password'}
                      id="password"
                      name="password"
                      onChange={handleInput}
                      placeholder="Enter Password"
                      required
                      pattern="^(?=.*\d)(?=.*[a-zA-Z])(?=.*[!@#$%^&*]).{8,}$"
                      title="Password must contain at least 8 characters, including one number, one letter, and one special character."
                    />
                     <button
                      type="button"
                      id="btnToggle"
                      className="toggle12"
                      onClick={handleTogglePassword}
                    >
                      <i className={`bi ${showPassword ? 'bi-eye-slash' : 'bi-eye'}`}></i>
                    </button>
                    <span className="text-danger fs-4"> &nbsp;*</span>
                  </div>
                </div>
                <div className="form-group  d-md-flex justify-content-center mt-2 mb-2">
                  <label
                    className="control-label col-sm-2 col-md-2 fw-bold"
                    htmlFor="confirmpassword"
                  >
                    Confirm Password
                  </label>
                  <div className="d-flex col-sm-6 col-md-4 col-xs-12 passwordgroup">
                    <input
                      className="form-control mb-2"
                      type={showConfirmPassword ? 'text' : 'password'}
                      id="confirmpassword"
                      name="confirmpassword"
                      onChange={(e) =>
                        setConfirmpassword(e.currentTarget.value)
                      }
                      placeholder="Enter Confirm Password"
                      required
                    />
                     <button
                      type="button"
                      id="btnToggle"
                      className="toggle12"
                      onClick={handleToggleConfirmPassword}
                    >
                      <i className={`bi ${showConfirmPassword ? 'bi-eye-slash' : 'bi-eye'}`}></i>
                    </button>
                    <span className="text-danger fs-4"> &nbsp;*</span>
                  </div>
                </div>
              </div>
              {/* Error message */}
              {error && (
                <div className="text-danger text-center mb-3">{error}</div>
              )}
              <div className="form-group  d-md-flex justify-content-center">
                <div className="col-sm-2 col-md-2"></div>
                <div className="col-sm-6 col-md-4 col-xs-12 text-center">
                  <button
                    type="submit"
                    className="btn btn-primary register-next-step-button w-50 mt-3"
                  >
                    Register
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Register;
