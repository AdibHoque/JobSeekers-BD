import {Link} from "react-router-dom";

export default function ErrorPage() {
  return (
    <>
      <div className="h-[100vh] flex justify-center items-center bg-base-200 flex-col">
        <div className="flex justify-center items-center bg-base-200 flex-col gap-y-4">
          <h1 className="text-9xl font-extrabold">404</h1>
          <p className="text-xl">Sorry we couldn&apos;t find this page.</p>
          <Link className="btn btn-primary font-bold w-full" to="/">
            Return Home
          </Link>
        </div>
      </div>
    </>
  );
}
