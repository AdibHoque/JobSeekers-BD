import {useQuery} from "@tanstack/react-query";
import {Link} from "react-router-dom";
import {useContext, useState} from "react";
import {AuthContext} from "../AuthProvider";
import UseSwal from "../hooks/useSwal";

export default function AppliedJobs() {
  const {user} = useContext(AuthContext);
  const [search, setSearch] = useState("");
  console.log(search);
  const {
    isPending,
    isError,
    error,
    data: myjobs,
  } = useQuery({
    queryKey: ["myjobs"],
    queryFn: async () => {
      const res = await fetch(
        `http://localhost:5000/appliedjobs?email=${user.email}`
      );
      return res.json();
    },
  });

  if (isPending) {
    return <span className="loading loading-spinner text-primary"></span>;
  }

  if (isError) {
    return <p>{error.message}</p>;
  }

  function handleSelect(e) {
    if (e.target.value == "All") setSearch("");
    else setSearch(e.target.value);
  }
  return (
    <div className="lg:px-24 px-4">
      <div className="my-6">
        <h1 className="text-4xl text-center md:text-5xl font-bold text-primary ">
          Applied Jobs
        </h1>
        <p className="text-center my-1">
          List of Jobs that you have applied for.
        </p>
      </div>

      <div className="form-control">
        <label className="label">
          <span className="label-text">Search by Category</span>
        </label>
        <select
          name="category_name"
          className="rounded-none select select-bordered"
          required
          onChange={handleSelect}
        >
          <option selected>All</option>
          <option>Onsite</option>
          <option>Remote</option>
          <option>Part-Time</option>
          <option>Hybrid</option>
        </select>
      </div>
      <div className="overflow-x-auto my-6">
        <table className="table table-xs md:table-md lg:table-lg">
          <thead>
            <tr>
              <th>Job Title</th>
              <th>Category</th>
              <th>Resume</th>
            </tr>
          </thead>
          <tbody>
            {myjobs
              .filter((j) =>
                j.category.toLowerCase().includes(search.toLowerCase())
              )
              .map((j) => (
                <tr key={j._id}>
                  <td>{j.job_title}</td>
                  <td>{j.category}</td>
                  <td>{j.resume_link}</td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
