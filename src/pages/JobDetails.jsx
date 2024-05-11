import {FaCalendar, FaCalendarTimes, FaUser, FaCoins} from "react-icons/fa";

export default function JobDetails({data}) {
  const {
    name,
    job_title,
    job_posting_date,
    application_deadline,
    salary_range,
    job_applicants_number,
  } = data;
  return (
    <>
      <div className="card lg:card-side bg-base-100 shadow-xl">
        <figure>
          <img
            src="https://img.daisyui.com/images/stock/photo-1494232410401-ad00d5433cfa.jpg"
            alt="Album"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">New album is released!</h2>
          <p>Click the button to listen on Spotiwhy app.</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Listen</button>
          </div>
        </div>
      </div>
    </>
  );
}
