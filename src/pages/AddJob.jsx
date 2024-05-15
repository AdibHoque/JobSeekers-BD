import {useContext, useState} from "react";
import {AuthContext} from "../AuthProvider";
import jobVector from "../assets/Design team-bro.svg";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import UseSwal from "../hooks/useSwal";

export default function AddJobs() {
  const {user} = useContext(AuthContext);
  const [startDate, setStartDate] = useState(new Date());
  const MySwal = UseSwal();

  const handleAdd = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
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
      name: user.displayName,
      email: user.email,
      job_title: job_name,
      job_posting_date: new Date(postdate).getTime(),
      application_deadline: new Date(deadline).getTime(),
      salary_range: salary,
      job_applicants_number: applicants,
      image: photo,
      job_description: description,
    };
    fetch("https://assignment-11-api.vercel.app/jobs", {
      credentials: "include",
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
          text: "Successfully Added New Job!",
          showConfirmButton: false,
          timer: 1500,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="bg-base-200 lg:px-24">
      <div className="py-6">
        <h1 className="text-4xl text-center md:text-5xl font-bold text-primary ">
          Add a Job
        </h1>
        <p className="text-center my-1">
          Become an employeer by adding your Job recruitment.
        </p>
      </div>
      <div className="hero min-h-[86vh] bg-base-200 pb-6">
        <div className="hero-content flex flex-col lg:flex-row gap-10">
          <img src={jobVector} alt="" />
          <div className="flex-1 w-full border-2 border-primary rounded-xs shadow-2xl card bg-base-100">
            <form onSubmit={handleAdd} className="p-6 max-sm:px-10">
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
                  className="rounded-none select select-bordered"
                  required
                >
                  <option disabled>Category Name</option>
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
                    className="rounded-none input input-bordered w-full"
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
                    className="rounded-none input input-bordered w-full"
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
    </div>
  );
}
