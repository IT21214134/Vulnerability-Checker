import { useState } from "react";
import {
  faSignInAlt,
  faUser,
  faUnlockAlt,
  faBriefcase,
  faBicycle,
  faCar,
  faCarSide,
  faPlane,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";
import toast from "react-hot-toast";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoginForm, setIsLoginForm] = useState(true);
  const [userName, setUserName] = useState("");
  const [birthday, setBirthDay] = useState("");
  const [country, setCountry] = useState("");
  const [gender, setGender] = useState("");
  const [tel_no, setTelNo] = useState("");
  const [badge, setBadge] = useState("");
  const [ProfilePicture, setImageName] = useState("");
  const navigate = useNavigate();

  const handleTabClick = (isLogin) => {
    setIsLoginForm(isLogin);
  };
  const handleCatImg = (e) => {
    setImageName(e.target.files[0]);
  };
  const userSignUp = (e) => {
    console.log("Hi");
    e.preventDefault();

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (userName === "") {
      toast.error("Please Enter User Name..", {
        id: "name",
      });
    } else if (birthday === "") {
      toast.error("Please Provide a Birthday..", {
        id: "bday",
      });
    } else if (country === "") {
      toast.error("Please Enter Country..", {
        id: "stafNo",
      });
    } else if (email === "") {
      toast.error("Please Provide Your Email..", {
        id: "email",
      });
    }
    // else if (!emailRegex.test(email)) {
    //     toast.error("Please Provide a Valid Email...", {
    //         id: 'valEmail'
    //     })
    // }
    else if (password === "") {
      toast.error("Please Provide a Password..", {
        id: "pwd",
      });
    } else if (password.length < 8) {
      toast.error("Password should be at least 8 characters long", {
        id: "pwdLength",
      });
    } else if (tel_no === "") {
      toast.error("Please Provide a Telphone Number..", {
        id: "tel",
      });
    } else if (gender === "") {
      toast.error("Please Provide the Gender..", {
        id: "tel",
      });
    } else if (
      userName !== "" &&
      birthday !== "" &&
      country !== "" &&
      email !== "" &&
      country !== "" &&
      password !== "" &&
      tel_no !== "" &&
      gender !== ""
    ) {
      const form = new FormData();

      form.append("userName", userName);
      form.append("birthday", birthday);
      form.append("email", email);
      form.append("password", password);
      form.append("country", country);
      form.append("gender", gender);
      form.append("badge", badge);
      form.append("tel_no", tel_no);
      form.append("ProfilePicture", ProfilePicture);

      console.log(badge);
      axios
        .post("http://localhost:9020/user/usersignup", form)
        .then(() => {
          toast.success("Successfully Registred");
          navigate("/userLogin");
        })
        .catch(() => {
          toast.success("Something Went Wrong");
        });

      setEmail("");
      setPassword("");
      setUserName("");
      setBirthDay("");
      setCountry("");
      setGender("");
      setTelNo("");
      setBadge("");
      setImageName(null);
    }
  };
  const userLogin = (e) => {
    e.preventDefault();
    console.log("Hi");
    if (email === "") {
      toast.error("Please Provide An Email..!", {
        id: "email",
      });
    } else if (password === "") {
      toast.error("Please Provide the Password..!", {
        id: "'password'",
      });
    } else if (email === "" && password === "") {
      toast.error("PPlease provide the Credentials...!", {
        id: "credential",
      });
    } else if ((email !== "") & (password !== "")) {
      const user = {
        email,
        password,
      };

      const uid = axios
        .post("http://localhost:9020/user/usersignin", user)
        .then((response) => {
          toast.success("Successfull Login!");
          const uid = response.data.payload.uid;
          console.log(uid);
          toast.success("Login Success!");
          navigate("/user/profile/" + uid);
        })
        .catch(() => {
          alert("Not ok");
          toast.error("Something Went Wrong!");
        });

      setEmail("");
      setPassword("");
    }
  };

  const buttonVariants = {
    visible: {
      x: [0, -20, 20, -20, 20, 0],
      transition: { delay: 2 },
    },
    hover: {
      scale: 1.1,
      // scale:[1,1.1,1,1.1,1,1.1,1,1.1,1,1.5],
      textShadow: "0px 0px 8px rgb(255,255,255)",
      boxShadow: "0px 0px 8px rgb(255,255,255)",
      transition: {
        duration: 0.3,
        yoyo: Infinity,
      },
    },
  };
  const loaderVariants = {
    animationOne: {
      x: [-150, 150],
      // y: [0, -50],
      transition: {
        x: {
          yoyo: Infinity,
          duration: 15,
          repeat: Infinity,
        },
        // y: {
        //   yoyo: Infinity,
        //   duration: 9,
        //   repeat: Infinity,
        // }
      },
    },
  };

  return (
    <section className="vh-100">
      <div
        className="container-fluid"
        style={{
          backgroundImage: `url('https://th.bing.com/th/id/R.dde94b0bb9c08c01f57e7dfe47bd6a1c?rik=do7j1ZUvxsznYw&pid=ImgRaw&r=0')`,
        }}
      >
        {" "}
        <br />
        <br />
        <div className="row">
          <div>
            <center>
              <motion.div
                style={{
                  border: "2px solid #8B4513",
                  backgroundColor: "#f0f3ff",
                  borderRadius: "20px",
                  padding: "10px",
                  width: "40%",
                }}
                transition={{
                  delay: 0.2,
                  duration: 2.0,
                  type: "spring",
                  stiffness: 120,
                }}
                whileHover={{
                  boxShadow: "0px 0px 8px rgb(255,255,255)",
                  scale: 1.03,
                }}
              >
                <h3>Ceylon Tours </h3> <hr />
                <div className="px-5 ms-xl-4">
                  <i
                    className="fas fa-crow fa-2x me-3 pt-5 mt-xl-4"
                    style={{ color: "#709085" }}
                  ></i>

                  <motion.span
                    className="h1 fw-bold mb-0"
                    whileHover={{
                      scale: 1.3,
                      color: ["#f8e112", "#ff00ff", "#00ffff"],
                      originX: 0,
                    }}
                    transition={{ type: "spring", stiffness: 500 }}
                  >
                    <span
                      style={{
                        background:
                          "-webkit-linear-gradient(#800000, #A52A2A, #A0522D)",
                        "-webkit-background-clip": "text",
                        "-webkit-text-fill-color": "transparent",
                        textAlign: "center",
                      }}
                    >
                      ආයුබෝවන් !
                    </span>{" "}
                    <br />
                  </motion.span>
                </div>{" "}
                <br />
                <motion.div
                  className="loader"
                  variants={loaderVariants}
                  animate="animationOne"
                >
                  <FontAwesomeIcon icon={faPlane} />
                </motion.div>
                <div style={{ width: "80%" }}>
                  <br />

                  <ul
                    className="nav nav-pills nav-justified mb-3"
                    id="ex1"
                    role="tablist"
                  >
                    <li className="nav-item" role="presentation">
                      <motion.a
                        className={`nav-link ${isLoginForm ? "active" : ""}`}
                        id="tab-login"
                        data-mdb-toggle="pill"
                        href="#pills-login"
                        role="tab"
                        aria-controls="pills-login"
                        aria-selected={isLoginForm}
                        onClick={() => handleTabClick(true)}
                        whileHover={{
                          scale: 1.1,
                          textShadow: "0px 0px 8px rgb(255,255,255)",
                          boxShadow: "0px 0px 8px rgb(255,255,255)",
                        }}
                        style={{
                          background:
                            "linear-gradient(90deg, #8B0000, #CD5C5C, #B22222,#CD5C5C, #8B0000)",
                          borderRadius: "20px",
                          color: "white",
                          fontWeight: "bold",
                          textShadow: "2px 2px 4px rgba(0,0,0,0.4)",
                          transition: "all 0.3s ease",
                          marginRight: "10px",
                        }}
                      >
                        Login
                      </motion.a>
                    </li>

                    <li className="nav-item" role="presentation">
                      <motion.a
                        className={`nav-link ${!isLoginForm ? "active" : ""}`}
                        id="tab-register"
                        data-mdb-toggle="pill"
                        href="#pills-register"
                        role="tab"
                        aria-controls="pills-register"
                        aria-selected={!isLoginForm}
                        onClick={() => handleTabClick(false)}
                        whileHover={{
                          scale: 1.1,
                          textShadow: "0px 0px 8px rgb(255,255,255)",
                          boxShadow: "0px 0px 8px rgb(255,255,255)",
                        }}
                        style={{
                          background:
                            "linear-gradient(90deg, #8B0000, #CD5C5C, #B22222,#CD5C5C, #8B0000)",
                          borderRadius: "20px",
                          color: "white",
                          fontWeight: "bold",
                          textShadow: "2px 2px 4px rgba(0,0,0,0.4)",
                          transition: "all 0.3s ease",
                          marginLeft: "10px",
                        }}
                      >
                        Register
                      </motion.a>
                    </li>
                    <li className="nav-item" role="presentation">
                      <motion.a
                        className={`nav-link ${!isLoginForm ? "active" : ""}`}
                        id="tab-register"
                        data-mdb-toggle="pill"
                        href="/adminLogin"
                        role="tab"
                        aria-controls="pills-register"
                        aria-selected={!isLoginForm}
                        onClick={() => handleTabClick(false)}
                        whileHover={{
                          scale: 1.1,
                          textShadow: "0px 0px 8px rgb(255,255,255)",
                          boxShadow: "0px 0px 8px rgb(255,255,255)",
                        }}
                        style={{
                          background:
                            "linear-gradient(90deg, #8B0000, #CD5C5C, #B22222,#CD5C5C, #8B0000)",
                          borderRadius: "20px",
                          color: "white",
                          fontWeight: "bold",
                          textShadow: "2px 2px 4px rgba(0,0,0,0.4)",
                          transition: "all 0.3s ease",
                          marginLeft: "10px",
                        }}
                      >
                        Admin Login
                      </motion.a>
                    </li>
                  </ul>

                  {isLoginForm ? (
                    <div
                      className="tab-pane fade show active"
                      id="pills-login"
                      role="tabpanel"
                      aria-labelledby="tab-login"
                      style={{ width: "80%" }}
                    >
                      <form onSubmit={userLogin}>
                        {" "}
                        <br />
                        <div className="form-outline mb-4">
                          <br />
                          <input
                            type="email"
                            id="loginName"
                            className="form-control"
                            onChange={(e) => setEmail(e.target.value)}
                          />
                          <label className="form-label" htmlFor="loginName">
                            Email
                          </label>
                        </div>
                        <div className="form-outline mb-4">
                          <input
                            type="password"
                            id="loginPassword"
                            className="form-control"
                            onChange={(e) => setPassword(e.target.value)}
                          />
                          <label className="form-label" htmlFor="loginPassword">
                            Password
                          </label>
                        </div>
                        <button
                          type="submit"
                          className="btn btn-block mb-4"
                          style={{
                            background:
                              "linear-gradient(90deg, #8B0000, #CD5C5C, #B22222,#CD5C5C, #8B0000)",
                            borderRadius: "20px",
                            color: "white",
                            fontWeight: "bold",
                            textShadow: "2px 2px 4px rgba(0,0,0,0.4)",
                            transition: "all 0.3s ease",
                          }}
                          whileHover={{
                            scale: 1.1,
                            textShadow: "0px 0px 8px rgb(255,255,255)",
                            boxShadow: "0px 0px 8px rgb(255,255,255)",
                          }}
                        >
                          Sign in
                        </button>
                        <div className="text-center">
                          <p style={{ color: "grey" }}>
                            Not a member?{" "}
                            <a
                              href="#pills-register"
                              style={{
                                color: "#6a11cb",
                                textDecoration: "underline",
                              }}
                            >
                              Register
                            </a>
                          </p>
                        </div>
                      </form>
                    </div>
                  ) : (
                    <div
                      className="tab-pane fade show active"
                      id="pills-register"
                      role="tabpanel"
                      aria-labelledby="tab-register"
                    >
                      <form onSubmit={userSignUp}>
                        <br />
                        <div className="row">
                          <div className="col-md-6">
                            <div className="form-outline mb-4">
                              <input
                                type="text"
                                id="registerName"
                                className="form-control"
                                onChange={(e) => setUserName(e.target.value)}
                                placeholder="ex: Ceylon Tours"
                              />
                              <label
                                className="form-label"
                                htmlFor="registerName"
                              >
                                Name
                              </label>
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="form-outline mb-4">
                              <input
                                type="date"
                                id="registerUsername"
                                className="form-control"
                                onChange={(e) => setBirthDay(e.target.value)}
                              />
                              <label
                                className="form-label"
                                htmlFor="registerUsername"
                              >
                                Birthday
                              </label>
                            </div>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-md-6">
                            <div className="form-outline mb-4">
                              <input
                                type="email"
                                id="registerEmail"
                                className="form-control"
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="ex: CeylonTours@gmail.com"
                              />
                              <label
                                className="form-label"
                                htmlFor="registerEmail"
                              >
                                Email
                              </label>
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="form-outline mb-4">
                              <input
                                type="password"
                                id="registerPassword"
                                className="form-control"
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder="ex: CeylonX11"
                              />
                              <label
                                className="form-label"
                                htmlFor="registerPassword"
                              >
                                Password
                              </label>
                            </div>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-md-6">
                            <div className="form-outline mb-4">
                              <input
                                type="text"
                                id="registerCountry"
                                className="form-control"
                                onChange={(e) => setCountry(e.target.value)}
                                placeholder="ex: Sri Lanka"
                              />
                              <label
                                className="form-label"
                                htmlFor="registerCountry"
                              >
                                Country
                              </label>
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="form-outline mb-4">
                              <select
                                className="form-select"
                                id="registerGender"
                                onChange={(e) => setGender(e.target.value)}
                              >
                                <option selected disabled>
                                  Select Gender
                                </option>
                                <option value="male">Male</option>
                                <option value="female">Female</option>
                              </select>
                              <label
                                className="form-label"
                                htmlFor="registerGender"
                              >
                                Gender
                              </label>
                            </div>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-md-6">
                            <div className="form-outline mb-4">
                              <input
                                type="text"
                                id="registerCountry"
                                className="form-control"
                                onChange={(e) => setTelNo(e.target.value)}
                                placeholder="ex: +255 589 4225"
                              />
                              <label
                                className="form-label"
                                htmlFor="registerCountry"
                              >
                                Tel No
                              </label>
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="form-outline mb-4">
                              <select
                                className="form-select"
                                id="registerGender"
                                onChange={(e) => setBadge(e.target.value)}
                              >
                                <option selected disabled>
                                  Select Level
                                </option>
                                <option value="Silver">Level 01</option>
                                <option value="Gold" disabled>
                                  Level 02
                                </option>
                                <option value="Platinum" disabled>
                                  Level 03
                                </option>
                              </select>
                              <label
                                className="form-label"
                                htmlFor="registerGender"
                              >
                                Badge
                              </label>
                            </div>
                          </div>
                        </div>

                        <div className="form-outline mb-4">
                          <input
                            type="file"
                            id="registerFile"
                            className="form-control"
                            onChange={(e) => {
                              handleCatImg(e);
                            }}
                          />
                          <label className="form-label" htmlFor="registerFile">
                            Choose file
                          </label>
                        </div>
                        <motion.button
                          type="submit"
                          className="btn btn-block mb-3"
                          style={{
                            background:
                              "linear-gradient(90deg, #8B0000, #CD5C5C, #B22222,#CD5C5C, #8B0000)",
                            borderRadius: "20px",
                            color: "white",
                            fontWeight: "bold",
                            textShadow: "2px 2px 4px rgba(0,0,0,0.4)",
                            transition: "all 0.3s ease",
                            marginLeft: "10px",
                          }}
                        >
                          Sign Up
                        </motion.button>
                      </form>
                    </div>
                  )}

                  <div class="tab-content">
                    <div
                      class="tab-pane fade show active"
                      id="pills-login"
                      role="tabpanel"
                      aria-labelledby="tab-login"
                    ></div>
                    <div
                      class="tab-pane fade"
                      id="pills-register"
                      role="tabpanel"
                      aria-labelledby="tab-register"
                    ></div>
                  </div>

                  <span
                    style={{
                      background:
                        "-webkit-linear-gradient(#f8e112, #ff00ff, #00ffff)",
                      "-webkit-background-clip": "text",
                      "-webkit-text-fill-color": "transparent",
                    }}
                  >
                    # VISIT SRI LANKA
                  </span>
                </div>
              </motion.div>
            </center>
          </div>
        </div>{" "}
        <br /> <br />
      </div>
    </section>
  );
}
export default Login;
