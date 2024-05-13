import {FaCalendar, FaCalendarTimes, FaUser, FaCoins} from "react-icons/fa";
import {Link} from "react-router-dom";

export default function Card({data}) {
  const {
    _id,
    name,
    job_title,
    job_posting_date,
    application_deadline,
    salary_range,
    job_applicants_number,
  } = data;
  return (
    <>
      <div className="card bg-[#B5E1F6] text-black shadow-sm">
        <div className="p-10">
          <h2 className="card-title font-extrabold text-[#190D5B]">
            {job_title}
          </h2>
          <p className="text-primary font-semibold">
            <span className="font-bold text-black">Posted By: </span>
            {name}
          </p>
          <div className="flex flex-wrap justify-between">
            <p className="flex justify-center items-center gap-1">
              <FaCalendar /> <span className="font-bold">Post Date: </span>
              {new Date(job_posting_date).toLocaleDateString("en-GB")}
            </p>
            <p className="flex justify-center items-center gap-1">
              <FaCalendarTimes /> <span className="font-bold">Deadline: </span>
              {new Date(application_deadline).toLocaleDateString("en-GB")}
            </p>
          </div>
          <div className="flex flex-wrap justify-between">
            <p className="flex justify-center items-center gap-1">
              <FaCoins /> <span className="font-bold">Salary: </span>
              {salary_range}
            </p>
            <p className="flex justify-center items-center gap-1">
              <FaUser /> <span className="font-bold">Applicants: </span>
              {job_applicants_number}
            </p>
          </div>
          <div className="w-full flex items-center justify-center mt-4">
            <Link to={`/job/${_id}`} className="btn btn-primary">
              View Details
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
