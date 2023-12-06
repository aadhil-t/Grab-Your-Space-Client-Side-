import React, { useEffect } from "react";
import {
  // Navbar,
  MobileNav,
  Typography,
  Button,
  IconButton,
} from "@material-tailwind/react";
import { useDispatch } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import { logoutDetails } from "../../../Redux/UserSlice/UsserSlice";
import { EmailVerify } from "../../../Api/HubAdminApi";
export default function HubNavbar() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    console.log("Logout button clicked");
    localStorage.removeItem("hubtoken");
    console.log();
    dispatch(
      logoutDetails({
        id: "",
        name: "",
        email: "",
        mobile: "",
      })
    );
    navigate("/hub/login");
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
        className="p-1 font-normal text-red-600 mr-10"
      >
        <a href="#" className="flex items-center">
          Pages
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal text-red-600 mr-10"
      >
        <a href="#" className="flex items-center">
          Account
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal text-red-600 "
      >
        <a href="#" className="flex items-center">
          Blocks
        </a>
      </Typography>
    </ul>
  );

  const params = useParams();
  const { id, token } = params;

  useEffect(() => {
    const verifyEmailUrl = async () => {
      try {
        const response = await EmailVerify(id, token);
        console.log(response, "i am the response of the email verify");
        if (response.data.status) {
          localStorage.getItem("hubtoken", response.data.token);
        }
      } catch (error) {
        console.log(error);
      }
    };
    verifyEmailUrl();
  }, [id, token,params.id,params.token]);

  return (
    // <navbar className=" w-screen py-2 bg-blue-gray-500 lg:px-8 lg:py-4">
    //   <div className=" flex items-center justify-between bg-blue-gray-800 text-blue-gray-900">
    <navbar className="  lg:rounded-none   fixed top-0 left-0 right-0 bg-[#1749ea] z-50">
      <div className="relative mx-auto flex items-center  justify-around text-blue-gray-900 py-3 bg-[#d341fb] ">
        <Typography
          as="a"
          href="#"
          className="mr-4 cursor-pointer py-1.5 font-medium"
          color="yellow"
        >
          GRAB YOUR SPACE
        </Typography>
        <div className="hidden lg:block">{navList}</div>

        <Button onClick={handleLogout}>logout</Button>

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
