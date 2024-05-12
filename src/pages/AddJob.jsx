import {FcGoogle} from "react-icons/fc";
import {FaGithub} from "react-icons/fa";
import {Link} from "react-router-dom";
import {useContext, useEffect, useState} from "react";
import {AuthContext} from "../AuthProvider";
import {useNavigate} from "react-router-dom";
import {FaEyeSlash, FaEye} from "react-icons/fa";
import jobVector from "../assets/Design team-bro.svg";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default function AddJobs() {
  const {user} = useContext(AuthContext);
  const [startDate, setStartDate] = useState(new Date());
  const navigate = useNavigate();

  const handleAdd = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const email = form.get("email");
    const username = form.get("username");
    const job_name = form.get("job_name");
    const description = form.get("description");
    const photo = form.get("photo");
    const category_name = form.get("category_name");
    const postdate = new Date().toLocaleDateString();
    const deadline = form.get("deadline");
    const salary = form.get("salary");
    const applicants = 0;
    const obj = {
      category: category_name,
      name: username,
      email: email,
      job_title: job_name,
      job_posting_date: new Date(postdate).getTime(),
      application_deadline: new Date(deadline).getTime(),
      salary_range: salary,
      job_applicants_number: applicants,
      image: photo,
      job_description: description,
    };
    console.log(obj);
  };
  return (
    <>
      <div className="hero min-h-[86vh] bg-base-200 animate__animated animate__slideInRight">
        <div className="hero-content flex flex-col lg:flex-row gap-10">
          <img src={jobVector} alt="" />
          <div className="flex-grow max-w-lg max-sm:w-96 border-2 border-primary rounded-xs shadow-2xl card bg-base-100">
            <form onSubmit={handleAdd} className="p-6 ">
              <div className="flex flex-col gap-x-6 md:flex-row">
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
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Job Title</span>
                </label>
                <input
                  type="text"
                  placeholder="Name of the Job"
                  name="job_name"
                  className="rounded-none input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Job Description</span>
                </label>
                <input
                  type="text"
                  placeholder="Description of the Job"
                  name="description"
                  className="rounded-none input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Job Banner URL</span>
                </label>
                <input
                  type="url"
                  placeholder="Job Banner Image URL"
                  name="photo"
                  className="rounded-none input input-bordered"
                  required
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Job Category</span>
                </label>
                <select
                  name="category_name"
                  required
                  className="rounded-none select select-bordered"
                >
                  <option disabled selected>
                    Category Name
                  </option>
                  <option>Onsite</option>
                  <option>Remote</option>
                  <option>Part-Time</option>
                  <option>Hybrid</option>
                </select>
              </div>

              <div className="flex flex-col gap-x-6 md:flex-row">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Job Posting Date</span>
                  </label>
                  <DatePicker
                    selected={new Date()}
                    className="rounded-none input input-bordered"
                    disabled
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Application Deadline</span>
                  </label>
                  <DatePicker
                    selected={startDate}
                    defaultValue={startDate}
                    onChange={(date) => setStartDate(date)}
                    className="rounded-none input input-bordered"
                    name="deadline"
                    required
                  />
                </div>
              </div>
              <div className="flex flex-col gap-x-6 md:flex-row">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Salary range</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Salary Range of the Job"
                    name="salary"
                    className="rounded-none input input-bordered"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Job Applicants Number</span>
                  </label>
                  <input
                    type="number"
                    value="0"
                    name="applicants"
                    className="rounded-none input input-bordered"
                    required
                    disabled
                  />
                </div>
              </div>
              <div className="mt-2 form-control">
                <button className="font-bold bg-primary rounded-none btn text-gray-950 hover:text-white">
                  Add Job
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
