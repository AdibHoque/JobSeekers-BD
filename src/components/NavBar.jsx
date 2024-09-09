import {Link, NavLink, useLocation, useMatch} from "react-router-dom";
import {FaRegClock, FaXTwitter} from "react-icons/fa6";
import {FiPhone} from "react-icons/fi";
import {MdMenu, MdMenuOpen, MdOutlineLocationOn} from "react-icons/md";
import {
  FaFacebookF,
  FaInstagram,
  FaPinterest,
  FaSignInAlt,
  FaSignOutAlt,
  FaTimes,
  FaUserCircle,
  FaUserPlus,
} from "react-icons/fa";
import {useContext, useEffect, useState} from "react";
import logo from "../assets/logo.svg";
import {LiaTimesSolid} from "react-icons/lia";
import {AuthContext} from "../AuthProvider";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Navbar() {
  useEffect(() => {
    AOS.init();
  }, []);

  const [sidebar, setSidebar] = useState(false);
  const location = useLocation();
  const storedTheme = JSON.parse(localStorage.getItem("theme"));
  const [darkTheme, setDarkTheme] = useState(
    storedTheme !== null ? storedTheme : false
  );

  useEffect(() => {
    localStorage.setItem("theme", JSON.stringify(darkTheme));
    document
      .querySelector("html")
      .setAttribute("data-theme", darkTheme ? "dark" : "light");
  }, [darkTheme]);

  const {user, logOut, loading} = useContext(AuthContext);
  const [navToggle, setNavToggle] = useState(false);
  const match = useMatch("/login");

  const navClass = ({isActive, isPending}) =>
    isPending || isActive ? "active-path" : "links";

  const links = (
    <>
      <li>
        <NavLink to="/" className={navClass}>
          HOME
        </NavLink>
      </li>
      <li>
        <NavLink to="/jobs" className={navClass}>
          ALL JOBS
        </NavLink>
      </li>
      {user ? (
        <>
          <li>
            <NavLink to="/appliedjobs" className={navClass}>
              APPLIED JOBS
            </NavLink>
          </li>
          <li>
            <NavLink to="/addjob" className={navClass}>
              ADD A JOB
            </NavLink>
          </li>
          <li>
            <NavLink to="/myjobs" className={navClass}>
              MY JOBS
            </NavLink>
          </li>
        </>
      ) : (
        ""
      )}
      <li>
        <NavLink to="/blogs" className={navClass}>
          BLOGS
        </NavLink>
      </li>
    </>
  );

  return (
    <div className="mx-auto ">
      <div className="py-4 top-5 navbar lg:px-8 bg-[#B5E1F6]">
        <div className="navbar-start">
          <Link className="flex items-center justify-start gap-1 mb-0 text-2xl font-bold md:text-2xl lg:leading-none lg:text-2xl text-[#190D5B]">
            <img src={logo} className="size-12" /> JobSeekers
          </Link>
        </div>
        <div className="hidden navbar-center lg:flex">
          <ul className="flex gap-6">{links}</ul>
        </div>
        <div className="navbar-end gap-x-4">
          <label className="swap swap-rotate hover:text-primary max-md:hidden">
            {/* this hidden checkbox controls the state */}
            <input onClick={() => setDarkTheme(!darkTheme)} type="checkbox" />

            {/* sun icon */}
            <svg
              data-tooltip-id="theme-tooltip"
              data-tooltip-content="Dark Theme"
              className="w-10 h-10 fill-current swap-off text-yellow-500 animate-spin animate-once"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
            </svg>

            {/* moon icon */}
            <svg
              data-tooltip-id="theme-tooltip"
              data-tooltip-content="Light Theme"
              className="w-10 h-10 fill-current swap-on text-slate-500"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
            </svg>
          </label>
          {loading ? (
            <span className="text-primary loading loading-spinner loading-lg"></span>
          ) : user ? (
            <div className="flex justify-center md:gap-2">
              <details className="dropdown dropdown-end">
                <summary className="text-4xl text-white btn btn-circle btn-ghost">
                  {user.photoURL ? (
                    <div
                      className="tooltip tooltip-left tooltip-primary"
                      data-tip={user.email + ` - Click to Logout`}
                    >
                      <div className="avatar">
                        <div className="w-10 rounded-full">
                          <img src={user.photoURL} />
                        </div>
                      </div>
                    </div>
                  ) : (
                    <FaUserCircle />
                  )}
                </summary>
                <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52 animate-flip-down animate-once font-bold">
                  <li>
                    <button
                      onClick={logOut}
                      className="btn btn-outline bg-transparent font-roboto border-muted border-2 text-muted rounded-xs hover:border-primary hover:text-primary hover:bg-transparent"
                    >
                      <FaSignOutAlt className="text-2xl" />
                      <span className="">LOGOUT</span>
                    </button>
                  </li>
                </ul>
              </details>
            </div>
          ) : match ? (
            <Link
              to="/register"
              className="flex flex-col items-center p-1 mx-0 bg-transparent md:btn md:btn-outline font-roboto md:border-black md:border-2 text-black rounded-xs"
            >
              <FaUserPlus className="text-2xl md:text-xl text-black" />
              <span className="text-xs  text-black"> Register</span>
            </Link>
          ) : (
            <Link
              to="/login"
              className="text-black hover:text-primary md:border-black flex flex-col items-center p-1 mx-0 bg-transparent md:btn md:btn-outline font-roboto md:border-2 rounded-xs"
            >
              <FaSignInAlt className="text-2xl text-black md:text-xl" />
              <span className="text-xs text-black font-bold"> LOGIN</span>
            </Link>
          )}
          <div className="cursor-pointer dropdown dropdown-end">
            <div
              onClick={() => setSidebar(true)}
              className="text-black lg:hidden"
            >
              {sidebar ? (
                <MdMenuOpen className="size-11" />
              ) : (
                <MdMenu className="size-11" />
              )}
            </div>
          </div>
          {sidebar ? (
            <div
              data-aos="slide-left"
              className="absolute top-0 right-0 z-50 w-full h-screen bg-black bg-opacity-15"
            >
              <div
                data-aos="slide-left"
                data-aos-easing="ease-in-out"
                data-aos-delay="100"
                className="p-4 absolute w-[65%] top-0 right-0 h-screen bg-base-100"
              >
                <div className="flex justify-between">
                  <Link className="flex items-center justify-start gap-1 mb-0 text-2xl text-primary font-bold md:text-2xl lg:leading-none lg:text-2xl ">
                    <img src={logo} className="size-12" /> JobSeekers
                  </Link>
                  <button
                    onClick={() => setSidebar(false)}
                    className="border text-xl  font-bold p-3 bg-transparent rounded-full hover:bg-[#fe5624]"
                  >
                    <LiaTimesSolid />
                  </button>
                </div>

                <ul className="mt-8 text-xl divide-y-2">{links}</ul>
                <label className="swap swap-rotate hover:text-primary ">
                  {/* this hidden checkbox controls the state */}
                  <input
                    onClick={() => setDarkTheme(!darkTheme)}
                    type="checkbox"
                  />

                  {/* sun icon */}
                  <svg
                    data-tooltip-id="theme-tooltip"
                    data-tooltip-content="Dark Theme"
                    className="w-10 h-10 fill-current swap-off text-yellow-500 animate-spin animate-once"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                  >
                    <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
                  </svg>

                  {/* moon icon */}
                  <svg
                    data-tooltip-id="theme-tooltip"
                    data-tooltip-content="Light Theme"
                    className="w-10 h-10 fill-current swap-on text-slate-500"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                  >
                    <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
                  </svg>
                </label>
              </div>
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
}
