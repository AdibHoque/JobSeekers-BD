import {useQuery} from "@tanstack/react-query";
import {Link} from "react-router-dom";
import {useState} from "react";

export default function AllJobs() {
  const [search, setSearch] = useState("");
  const {
    isPending,
    isError,
    error,
    data: jobs,
  } = useQuery({
    queryKey: ["jobs"],
    queryFn: async () => {
      const res = await fetch("https://assignment-11-api.vercel.app/jobs", {
        credentials: "include",
      });
      return res.json();
    },
  });

  if (isPending) {
    return (
      <div className="flex justify-center w-full">
        <span className="text-primary loading loading-spinner size-40"></span>
      </div>
    );
  }

  if (isError) {
    return <p>{error.message}</p>;
  }
  return (
    <div className="lg:px-24 px-4">
      <div className="my-6">
        <h1 className="text-4xl text-center md:text-5xl font-bold text-primary ">
          All Jobs
        </h1>
        <p className="text-center my-1">
          List of all the Jobs Available at the moment.
        </p>
      </div>
      <label className="input input-bordered flex items-center gap-2 my-2">
        <input
          onChange={(e) => setSearch(e.target.value)}
          type="text"
          className="grow bg-transparent"
          placeholder="Search Job"
        />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 16 16"
          fill="currentColor"
          className="w-4 h-4 opacity-70"
        >
          <path
            fillRule="evenodd"
            d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
            clipRule="evenodd"
          />
        </svg>
      </label>
      <div className="overflow-x-auto my-6">
        <table className="table table-xs table-zebra md:table-md lg:table-lg">
          <thead>
            <tr>
              <th>Job Title</th>
              <th>Posting Date</th>
              <th>Deadline</th>
              <th>Salary</th>
              <th></th>
            </tr>
          </thead>
          <tbody className="animate-flip-down">
            {jobs
              .filter((j) =>
                j.job_title.toLowerCase().includes(search.toLowerCase())
              )
              .map((j) => (
                <tr key={j._id}>
                  <td>{j.job_title}</td>
                  <td>
                    {new Date(j.job_posting_date).toLocaleDateString("en-GB")}
                  </td>
                  <td>
                    {new Date(j.application_deadline).toLocaleDateString(
                      "en-GB"
                    )}
                  </td>
                  <td>{j.salary_range}</td>
                  <td>
                    <Link
                      to={`/job/${j._id}`}
                      className="btn btn-primary btn-xs"
                    >
                      Details
                    </Link>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
        {jobs.filter((j) =>
          j.job_title.toLowerCase().includes(search.toLowerCase())
        ).length === 0 ? (
          <h1 className="text-xl text-center">No Job Matches Your Search.</h1>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}
