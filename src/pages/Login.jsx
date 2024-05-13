import {FcGoogle} from "react-icons/fc";
import {FaGithub} from "react-icons/fa";
import {Link, useLocation} from "react-router-dom";
import {useContext, useEffect, useState} from "react";
import {AuthContext} from "../AuthProvider";
import {useNavigate} from "react-router-dom";
import {FaEyeSlash, FaEye} from "react-icons/fa";
import loginVector from "../assets/Login-amico.svg";

export default function Login() {
  const {user, logIn, errorMessage, googleLogIn, githubLogIn} =
    useContext(AuthContext);
  const [showpass, setShowpass] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (user) {
      navigate(location?.state ? location?.state : "/");
    }
  }, [user, navigate]);

  const handleLogin = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const email = form.get("email");
    const password = form.get("password");
    logIn(email, password);
  };
  return (
    <>
      <div className="hero min-h-[88vh] bg-base-200 animate__animated animate__slideInLeft">
        <div className="w-full hero-content flex flex-col lg:flex-row gap-x-10">
          <img className="w-96" src={loginVector} alt="" />
          <div className="w-full max-w-md border-2 border-primary rounded-xs shadow-2xl card bg-base-100">
            <form onSubmit={handleLogin} className="card-body">
              <caption className="text-2xl font-bold text-primary">
                Login
              </caption>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="youremail@example.com"
                  name="email"
                  className="rounded-xs input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <div className="flex items-center">
                  <input
                    type={showpass ? "text" : "password"}
                    placeholder="password"
                    name="password"
                    className="w-full rounded-xs input input-bordered"
                    required
                  />
                  <span
                    onClick={() => setShowpass(!showpass)}
                    className="absolute text-xl right-12"
                  >
                    {showpass ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>}
                  </span>
                </div>

                <label className="label">
                  <Link
                    to="/register"
                    className="label-text-alt link link-hover"
                  >
                    Don&#39;t have an account?
                    <span className="text-blue-600 underline"> Register</span>
                  </Link>
                </label>
              </div>
              <div className="flex items-center justify-center gap-5">
                <a
                  onClick={googleLogIn}
                  className="text-3xl btn btn-circle border hover:border-primary"
                >
                  <FcGoogle />
                </a>
                <a
                  onClick={githubLogIn}
                  className="text-3xl btn btn-circle border hover:border-primary"
                >
                  <FaGithub />
                </a>
              </div>
              <div className="mt-2 form-control">
                <button className="font-bold hover:text-primary bg-primary rounded-xs btn text-gray-950 ">
                  Login
                </button>
              </div>

              {errorMessage ? (
                <h3 className="text-red-600">{errorMessage}</h3>
              ) : (
                ""
              )}
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
