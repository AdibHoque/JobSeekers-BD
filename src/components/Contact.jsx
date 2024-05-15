import cimage from "../assets/Contact us-amico.svg";
import UseSwal from "../hooks/useSwal";

export default function Contact() {
  const MySwal = UseSwal();
  function handleContact(e) {
    e.preventDefault();
    MySwal.fire({
      position: "center",
      icon: "success",
      text: "Successfully Submitted!",
      showConfirmButton: false,
      timer: 1500,
    });
  }
  return (
    <>
      <div className="lg:px-24 px-4">
        <div className="my-6">
          <h1 className="text-4xl text-center md:text-5xl font-bold text-primary ">
            Contact Us
          </h1>
          <p className="text-center my-1">
            Send us an email if you want to contact us
          </p>
        </div>
        <div className="flex ">
          <img
            src={cimage}
            className="w-1/2 p-6 hidden lg:block h-[70vh]"
            alt=""
          />
          <form
            onSubmit={handleContact}
            className="p-6 max-sm:px-10 w-full lg:w-1/2"
          >
            <div className="flex flex-col gap-x-6 ">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Username</span>
                </label>
                <input
                  type="text"
                  placeholder="Enter your username"
                  name="username"
                  className="rounded-none input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  name="email"
                  className="rounded-none input input-bordered"
                  required
                />
              </div>
              <label className="label">
                <span className="label-text">Text</span>
              </label>
              <textarea
                placeholder="Enter your text"
                className="textarea textarea-bordered textarea-lg w-full"
                required
              ></textarea>
              <div className="mt-2 form-control">
                <button className="font-bold bg-primary rounded-none btn text-gray-950 hover:text-white">
                  Submit
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
