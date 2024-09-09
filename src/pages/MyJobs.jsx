import {useQuery} from "@tanstack/react-query";
import {Link} from "react-router-dom";
import {useContext, useState} from "react";
import {AuthContext} from "../AuthProvider";
import UseSwal from "../hooks/useSwal";

const MySwal = UseSwal();

function deleteSpot(id) {
  MySwal.fire({
    title: "Delete?",
    text: "This data will be lost forever if you delete. Are you sure you want to Delete?",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Delete",
  }).then((result) => {
    if (result.isConfirmed) {
      fetch(`https://assignment-11-api.vercel.app/jobs?id=${id}`, {
        credentials: "include",
        method: "DELETE",
      });
      MySwal.fire({
        title: "Deleted!",
        text: "The Data has been deleted",
        icon: "success",
      });
    }
  });
}

export default function MyJobs() {
  const {user} = useContext(AuthContext);
  const [search, setSearch] = useState("");
  const {
    isPending,
    isError,
    error,
    data: myjobs,
  } = useQuery({
    queryKey: ["myjobs"],
    queryFn: async () => {
      const res = await fetch(
        `https://assignment-11-api.vercel.app/jobs?email=${user.email}`,
        {credentials: "include"}
      );
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
        <h1 className="text-4xl text-center md:text-5xl font-bold text-primary uppercase">
          My Jobs
        </h1>
        <p className="text-center my-1">
          List of Jobs that you have added as the employeer.
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
        <table className="table table-zebra table-xs md:table-md lg:table-lg">
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
            {myjobs
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
                  <td className="flex flex=wrap gap-2">
                    <Link
                      to={`/update/${j._id}`}
                      className="btn btn-warning btn-xs"
                    >
                      Update
                    </Link>
                    <button
                      onClick={() => deleteSpot(j._id)}
                      className="btn bg-red-500 btn-error btn-xs"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
        {myjobs.filter((j) =>
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
