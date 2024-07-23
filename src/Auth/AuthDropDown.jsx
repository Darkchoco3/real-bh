import { CgProfile } from "react-icons/cg";
import { Link, useNavigate } from "react-router-dom";

const AuthDropDown = () => {
  const navigate = useNavigate();

  const logOut = () => {
    localStorage.removeItem("clientToken");
    navigate("/");
  };

  return (
    <main className="p-3 rounded-4 shadow bg-white">
      <div className="d-flex flex-column">
        <Link to="#" className="text-decoration-none text-black">
          <div className="d-flex gap-2">
            <CgProfile className="iconsSize" />
            <p>Profile</p>
          </div>
        </Link>
        <hr />

        <Link to="#" className="text-decoration-none text-black">
          <div className="d-flex align-items-center gap-2">
            <p>Edit Profile</p>
          </div>
        </Link>
        <hr />

        <Link to="#" className="text-decoration-none text-black">
          <div className="d-flex align-items-center gap-2">
            <p>Notification</p>
          </div>
        </Link>
        <hr />

        <Link to="/" className="text-decoration-none text-black" onClick={logOut}>
          <div className="d-flex align-items-center gap-2">
            <p className="my-1">Log Out</p>
          </div>
        </Link>
      </div>
    </main>
  );
};

export default AuthDropDown;