import banner from "../assets/Job hunt-amico.svg";

export default function Banner() {
  return (
    <>
      <div className="hero py-4 md:py-8 bg-[#B5E1F6] lg:px-24 lg:rounded-b-[33%]">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img src={banner} className="max-w-md" />
          <div>
            <h1 className="text-5xl font-bold text-[#190D5B]">
              Best Choice For Seeking Jobs
            </h1>
            <p className="py-6 text-accent">
              Embark on a journey towards fulfilling employment with our
              comprehensive JobSeekers platform. Designed to empower individuals
              at every stage of their career, we offer a myriad of resources and
              opportunities tailored to your unique aspirations.
            </p>
            <button className="btn btn-secondary font-bold mx-1">
              HIRE EMPLOYEE
            </button>
            <button className="btn btn-primary font-bold btn-outline mx-1">
              GET HIRED
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
