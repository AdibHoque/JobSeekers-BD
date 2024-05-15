import {useEffect, useState} from "react";
import Testimonial from "./Testimonial";

export default function Testimons() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("/testimonials.json")
      .then((data) => data.json())
      .then((data) => setData(data));
  }, []);
  return (
    <div className="my-6 pb-4">
      <div className="my-6">
        <h1 className="text-4xl text-center md:text-5xl font-bold text-primary ">
          Testimonials
        </h1>
        <p className="text-center my-1">
          Don&apos;t just take our words, hear from our clients
        </p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 px-4 lg:px-24 gap-4 gap-y-6">
        {data.map((d) => (
          <Testimonial data={d} key={d.id}></Testimonial>
        ))}
      </div>
    </div>
  );
}
