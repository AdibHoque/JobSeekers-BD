import {FaCalendar, FaCalendarTimes, FaUser, FaCoins} from "react-icons/fa";
import {useLoaderData} from "react-router-dom";

export default function JobDetails() {
  const data = useLoaderData();
  const {
    job_title,
    job_posting_date,
    application_deadline,
    salary_range,
    job_applicants_number,
    job_description,
    image,
  } = data;
  return (
    <>
      <div className="card lg:flex-row bg-base-100 shadow-xl px-4 lg:px-24">
        <figure>
          <img src={image} alt="JobBanner" />
        </figure>
        <div className="p-10">
          <h2 className="card-title font-extrabold text-[#190D5B] my-2">
            {job_title}
          </h2>
          <hr></hr>
          <p className="my-2">{job_description}</p>
          <div className="w-full flex flex-wrap justify-between my-6">
            <p className="flex justify-center items-center gap-1">
              <FaCoins /> <span className="font-bold">Salary: </span>
              {salary_range}
            </p>
            <p className="flex justify-center items-center gap-1">
              <FaUser /> <span className="font-bold">Applicants: </span>
              {job_applicants_number}
            </p>
          </div>
          <div className="flex flex-wrap justify-between my-6">
            <p className="flex justify-center items-center gap-1">
              <FaCalendar /> <span className="font-bold">Post Date: </span>
              {new Date(job_posting_date).toLocaleDateString("en-GB")}
            </p>
            <p className="flex justify-center items-center gap-1">
              <FaCalendarTimes /> <span className="font-bold">Deadline: </span>
              {new Date(application_deadline).toLocaleDateString("en-GB")}
            </p>
          </div>
          <div className="w-full flex items-center justify-center mt-4">
            <button className="btn btn-primary font-bold">Apply for Job</button>
          </div>
        </div>
      </div>
    </>
  );
}
