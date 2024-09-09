import {Link} from "react-router-dom";
import banner from "../assets/Job hunt-amico.svg";

export default function Banner() {
  return (
    <>
      <div className="hero pb-8 md:py-8 bg-[#B5E1F6] lg:px-24 lg:rounded-b-[33%]">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img src={banner} className="max-w-md animate-fade-left" />
          <div className="animate-fade-right">
            <h1 className="text-4xl md:text-5xl font-bold text-[#190D5B]">
              Discover Your Career Path with JobSeekers
            </h1>
            <p className="py-6 text-accent">
              Embark on a journey towards fulfilling employment with our
              comprehensive JobSeekers platform. Designed to empower individuals
              at every stage of their career, we offer a myriad of resources and
              opportunities tailored to your unique aspirations.
            </p>
            <Link
              to="/addjob"
              className="btn text-center btn-primary font-bold mx-1"
            >
              HIRE EMPLOYEE
            </Link>
            <Link to="/jobs" className="btn  btn-secondary font-bold  mx-1">
              GET HIRED
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
