import React from "react";
import {
  // Navbar,
  MobileNav,
  Typography,
  Button,
  IconButton,
} from "@material-tailwind/react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { logoutDetails } from "../../../Redux/UserSlice/UsserSlice";

export default function Navbar() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("token");
    dispatch(
      logoutDetails({
        id: "",
        name: "",
        email: "",
        mobile: "",
      })
    );
    navigate("/");
  };
  const [openNav, setOpenNav] = React.useState(false);
  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  const navList = (
    <ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal text-black-600 mr-10"
      >
        <a href="#" className="flex items-center">
          Pages
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal text-black-600 mr-10"
      >
        <a href="/hubs" className="flex items-center" >
          Hubs
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal text-black-600 "
      >
        <a href="#" className="flex items-center">
          Blocks
        </a>
      </Typography>
    </ul>
  );

  return (
    // <navbar className=" w-screen py-2 bg-blue-gray-500 lg:px-8 lg:py-4">
    //   <div className=" flex items-center justify-between bg-blue-gray-800 text-blue-gray-900">
    <navbar className="  lg:rounded-none   fixed top-0 left-0 right-0 bg-[#fcfdff] z-50">
      <div className="relative mx-auto flex items-center  justify-around text-blue-gray-900 py-3 bg-[#fcfdff] ">
        <Typography
          as="a"
          href="#"
          className="mr-4 cursor-pointer py-1.5 font-medium"
          color="black"
        >
          GRAB YOUR SPACE
        </Typography>
        <div className="hidden lg:block">{navList}</div>
        {localStorage.getItem("token") ? (
          <>
            
              <Button
                variant="gradient"
                size="sm"
                className="hidden lg:inline-block"
                color="blue"
                onClick={() => navigate('/profile')}
              >
                <span>profile</span>
              </Button>
           

            <Button onClick={handleLogout}>logout</Button>
          </>
        ) : (
          <Link to={"/login"}>
            <Button
              variant="gradient"
              size="sm"
              className="hidden lg:inline-block"    
            >
              <span>Log in</span>
            </Button>
          </Link>
        )}

        <IconButton
          variant="text"
          className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
          ripple={false}
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              className="h-6 w-6"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </IconButton>
      </div>
      <MobileNav open={openNav}>
        <div className="container mx-auto">
          {navList}
          <Button variant="gradient" size="sm" fullWidth className="mb-2">
            <span>Logout</span>
          </Button>
        </div>
      </MobileNav>
    </navbar>
  );
}
