import {useContext} from "react";
import {AuthContext} from "./AuthProvider";
import {Navigate} from "react-router-dom";
import PropTypes from "prop-types";
import UseSwal from "./hooks/useSwal";

PrivateRoute.propTypes = {
  children: PropTypes.node,
};

export default function PrivateRoute({children}) {
  const MySwal = UseSwal();
  const {user, loading} = useContext(AuthContext);
  if (loading) {
    return (
      <div className="flex justify-center w-full">
        <span className="text-primary loading loading-spinner size-40"></span>
      </div>
    );
  }
  if (user) return children;
  MySwal.fire({
    position: "center",
    icon: "error",
    title: "Kindly Login first to enter this page.",
    showConfirmButton: false,
    timer: 2000,
  });
  return <Navigate to="/login"></Navigate>;
}
