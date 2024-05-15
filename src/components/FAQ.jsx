import {useEffect, useState} from "react";
import PropTypes from "prop-types";
import faqimage from "../assets/FAQs-amico.svg";

Accordions.propTypes = {
  data: PropTypes.object,
};

function Accordions({data}) {
  const {question, answer} = data;
  return (
    <div className="mb-2 collapse collapse-plus bg-base-200 animate-fade-up animate-once">
      <input type="radio" name="my-accordion-3" />
      <div className="text-xl font-bold collapse-title">{question}</div>
      <div className="collapse-content">
        <p>{answer}</p>
      </div>
    </div>
  );
}

export default function FAQ() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("/faq.json")
      .then((data) => data.json())
      .then((data) => setData(data));
  }, []);
  return (
    <>
      <div className="mt-10">
        <h1 className="text-4xl text-center md:text-5xl font-bold text-primary ">
          FAQ
        </h1>
        <p className="text-center my-1">
          Frequently asked questions by our clients
        </p>
      </div>
      <div className="hero">
        <div className="hero-content flex-col lg:flex-row">
          <img src={faqimage} className="w-1/2 p-6 hidden lg:block h-[70vh]" />
          <div>
            <div className="w-full join join-vertical">
              <div className="mb-2 collapse collapse-plus bg-base-200"></div>
              {data.map((d) => (
                <Accordions
                  key={Math.round(Math.random() * 948248)}
                  data={d}
                ></Accordions>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
