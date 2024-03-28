import React from "react";
import { Link } from "react-router-dom";
import Verifying from "../../../src/assets/HubAdminAssets/verifyEmail.png"

export default function EmailVerify(){
    return(
        <div className="flex items-center justify-center h-screen">
            <div>
            <div className="flex flex-col items-center  space-y-2">
                <img src={Verifying} className="h-[30rem] w-[70rem]"  alt="" />
                <h1 className="text-4xl font-bold">Thank You !</h1>
          <p className="pb-3">
            Please verify this email address by click button below. 
          </p>
          <Link
            className="px-5 py-2 text-white bg-[#000] border border-[#000]  rounded-md hover:bg-[#000000d3] focus:outline-none focus:ring"
            to="https://mail.google.com/mail/u/0/#inbox"
          >
            <span className="text-sm font-medium">verify your email</span>
          </Link>
            </div>
          </div>
        </div>
    )
}


