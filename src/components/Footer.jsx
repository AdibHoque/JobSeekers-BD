import logo from "../assets/logo.svg";

export default function Footer() {
  return (
    <>
      <footer className="footer p-10 bg-[#B5E1F6] text-black mt-2">
        <aside>
          <img className="size-16" src={logo} alt="" />
          <p>
            <h1 className="text-[#190D5B] text-2xl font-extrabold">
              JobSeekers
            </h1>
            <br />
            Providing reliable jobs since 2024
          </p>
        </aside>
        <nav>
          <h6 className="footer-title">Services</h6>
          <a className="link link-hover hover:text-primary">Branding</a>
          <a className="link link-hover hover:text-primary">Design</a>
          <a className="link link-hover hover:text-primary">Marketing</a>
          <a className="link link-hover hover:text-primary">Advertisement</a>
        </nav>
        <nav>
          <h6 className="footer-title">Company</h6>
          <a className="link link-hover hover:text-primary">About us</a>
          <a className="link link-hover hover:text-primary">Contact</a>
          <a className="link link-hover hover:text-primary">Jobs</a>
          <a className="link link-hover hover:text-primary">Press kit</a>
        </nav>
        <nav>
          <h6 className="footer-title">Legal</h6>
          <a className="link link-hover hover:text-primary">Terms of use</a>
          <a className="link link-hover hover:text-primary">Privacy policy</a>
          <a className="link link-hover hover:text-primary">Cookie policy</a>
        </nav>
      </footer>
    </>
  );
}
