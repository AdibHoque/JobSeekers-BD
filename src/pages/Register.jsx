import {FcGoogle} from "react-icons/fc";
import {FaGithub} from "react-icons/fa";
import {Link} from "react-router-dom";
import {useContext, useEffect, useState} from "react";
import {AuthContext} from "../AuthProvider";
import {useNavigate} from "react-router-dom";
import {FaEyeSlash, FaEye} from "react-icons/fa";
import registerVector from "../assets/Sign up-amico.svg";

export default function Register() {
  const {user, createUser, errorMessage, googleLogIn, githubLogIn} =
    useContext(AuthContext);
  const [showpass, setShowpass] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      navigate("/");
    }
  }, [user, navigate]);
  const handleRegister = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const email = form.get("email");
    const password = form.get("password");
    const username = form.get("username");
    const photo = form.get("photo");

    createUser(email, password, username, photo);
  };
  return (
    <>
      <div className="hero min-h-[86vh] bg-base-200 animate__animated animate__slideInRight">
        <div className="hero-content flex flex-col lg:flex-row gap-10">
          <img className="w-96" src={registerVector} alt="" />
          <div className="w-96 border-2 border-primary rounded-xs shadow-2xl card bg-base-100">
            <form onSubmit={handleRegister} className="card-body w-full">
              <caption className="text-2xl font-bold text-primary">
                Register
              </caption>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Username</span>
                </label>
                <input
                  type="text"
                  placeholder="Your Username"
                  name="username"
                  className="rounded-xs input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo URL</span>
                </label>
                <input
                  type="url"
                  placeholder="URL of photo"
                  name="photo"
                  className="rounded-xs input input-bordered"
                  required
                />
              </div>
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
                  <Link to="/login" className="label-text-alt link link-hover">
                    Already have an account?
                    <span className="text-blue-600 underline"> Login</span>
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
                <button className="font-bold  hover:text-primary bg-primary rounded-xs btn text-gray-950">
                  Register
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
