import {useEffect, useState} from "react";

function Blog({data}) {
  const {title, image, content1, content2, content3, content4, content5} = data;
  return (
    <div className="w-full flex flex-col gap-y-6 border border-slate-400 rounded p-2">
      <img className="md:h-[70vh] w-full" src={image} alt="" />

      <div>
        <div className="flex gap-2 items-center">
          <div className="avatar online">
            <div className="w-8 rounded-full">
              <img src="https://i.ibb.co/fGHbZw7/image.png" />
            </div>
          </div>
          <h3 className="text-sm font-semibold">ADIB HOQUE</h3>
        </div>

        <h1 className="font-bold text-3xl">{title}</h1>
        <p className="font-medium">- 2 Minute Read</p>
      </div>

      <div>
        <p>{content1}</p>
        <br></br>
        <p>{content2}</p>
        <br></br>
        <p>{content3}</p>
        <br></br>
        <p>{content4}</p>
        <br></br>
        <p>{content5}</p>
      </div>
    </div>
  );
}

export default function Blogs() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("/blogs.json")
      .then((data) => data.json())
      .then((data) => setData(data));
  }, []);
  if (data.length === 0) {
    return (
      <div className="flex justify-center w-full">
        <span className="text-primary loading loading-spinner size-40"></span>
      </div>
    );
  }
  return (
    <>
      <div className="lg:px-24 px-4">
        <div className="my-6">
          <h1 className="text-4xl text-center md:text-5xl font-bold text-primary uppercase">
            Blogs
          </h1>
          <p className="text-center my-1">Here you will find Blogs by us.</p>
        </div>
        <div className="flex flex-col gap-6 mb-8">
          {data.map((d) => (
            <Blog key={d.id} data={d}></Blog>
          ))}
        </div>
      </div>
    </>
  );
}
