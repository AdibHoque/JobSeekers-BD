import {useContext} from "react";
import {AuthContext} from "./AuthProvider";
import {Navigate, useLocation} from "react-router-dom";
import PropTypes from "prop-types";
import UseSwal from "./hooks/useSwal";

PrivateRoute.propTypes = {
  children: PropTypes.node,
};

export default function PrivateRoute({children}) {
  const MySwal = UseSwal();
  const {user, loading} = useContext(AuthContext);
  const location = useLocation();
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
    text: "Kindly Login first to enter this page.",
    showConfirmButton: false,
    timer: 2000,
  });
  return <Navigate state={location.pathname} to="/login" replace></Navigate>;
}
