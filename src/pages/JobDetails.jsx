import {FaCalendar, FaCalendarTimes, FaUser, FaCoins} from "react-icons/fa";
import {useLoaderData} from "react-router-dom";
import {AuthContext} from "../AuthProvider";
import {useContext} from "react";
import UseSwal from "../hooks/useSwal";

export default function JobDetails() {
  const {user} = useContext(AuthContext);
  const data = useLoaderData();
  const MySwal = UseSwal();
  const {
    _id,
    category,
    job_title,
    job_posting_date,
    application_deadline,
    salary_range,
    job_applicants_number,
    job_description,
    image,
    email,
  } = data;
  const handleSubmit = (e) => {
    const date = new Date();
    if (email === user.email) {
      return MySwal.fire({
        position: "center",
        icon: "error",
        title: "You cannot apply for your own job.",
        showConfirmButton: false,
        timer: 1500,
      });
    }
    if (application_deadline - date <= 0) {
      return MySwal.fire({
        position: "center",
        icon: "erorr",
        title: "Deadline Over",
        showConfirmButton: false,
        timer: 1500,
      });
    }
    const form = new FormData(e.currentTarget);
    const username = user.displayName;
    const resume = form.get("resume_link");
    const obj = {
      username: username,
      email: user.email,
      resume_link: resume,
      job_title: job_title,
      category: category,
    };
    fetch(`http://localhost:5000/appliedjobs/${_id}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(obj),
    })
      .then(() => {
        MySwal.fire({
          position: "center",
          icon: "success",
          title: "Successfully Applied!",
          showConfirmButton: false,
          timer: 1500,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };
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
            {/* Open the modal using document.getElementById('ID').showModal() method */}
            <button
              className="btn btn-primary font-bold"
              onClick={() => document.getElementById("my_modal_5").showModal()}
            >
              Apply for Job
            </button>
            <dialog
              id="my_modal_5"
              className="modal modal-bottom sm:modal-middle"
            >
              <div className="modal-box">
                <form onSubmit={handleSubmit} method="dialog">
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Username</span>
                    </label>
                    <input
                      type="text"
                      defaultValue={user.displayName}
                      placeholder={user.displayName}
                      name="username"
                      className="rounded-none input input-bordered"
                      disabled
                    />
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Email</span>
                    </label>
                    <input
                      type="email"
                      placeholder={user.email}
                      defaultValue={user.email}
                      name="email"
                      className="rounded-none input input-bordered"
                      disabled
                    />
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Resume Link</span>
                    </label>
                    <input
                      type="url"
                      placeholder="Enter a link to your resume"
                      name="resume_link"
                      className="rounded-xs input input-bordered"
                      required
                    />
                  </div>
                  <div className="mt-2 form-control">
                    <button className="font-bold hover:text-primary bg-primary rounded-xs btn text-gray-950 ">
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </dialog>
          </div>
        </div>
      </div>
    </>
  );
}
