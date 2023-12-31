import React, { useState } from "react";
import { PencilSquareIcon } from "@heroicons/react/24/solid";
// import { useQueryClient } from "@tanstack/react-query";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  Input,
} from "@material-tailwind/react";
// import { useDispatch, useSelector } from "react-redux";
import { setUserDetails } from "../../Redux/UserSlice/UsserSlice";

export default function ChangeProfile() {
  const [open, setOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
//   const { id, image } = useSelector((state) => state.lawyer);
//   const queryClient = useQueryClient();
//   const dispatch = useDispatch()

  const handleOpen = () => setOpen(!open);

  const handleImageChange = (e) => {
    setSelectedImage(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // try {
    //   const response = await UpdateImage(id, selectedImage);
    //   if (response.status === 200) {
    //       const detail = response.data.data;
    //       dispatch(
    //           setUserDetails({
    //           id: detail?._id,
    //           name: detail?.name,
    //           email: detail?.email,
    //           mobile: detail?.mobile,
    //           place: detail?.place,
    //           verified: detail?.verified,
    //           experience: detail?.experience,
    //           about: detail?.about,
    //           image: detail?.image,
    //         })
    //         );
    //         console.log("sxsxsxsx",detail);
    //         handleOpen();
    //     }
    //   queryClient.invalidateQueries(["lawyer", id]);
    // } catch (error) {
    //   //setisLoading(false);
    //   console.error("Error uploading image:", error);
    // }
  };

  return (
    <>
      <p
        onClick={handleOpen}
        className="flex items-center hover:border-1 hover:text-black me-10 cursor-pointer rounded-xl text-[#5d7582] text-xs"
      >
        <PencilSquareIcon className="w-28 h-9 text-black hover:text-black" />
      </p>

      <Dialog
        open={open}
        handler={handleOpen}
        size="sm"
        className="rounded-none"
      >
        <DialogHeader>EDIT PROFILE IMAGE</DialogHeader>
        <DialogBody className="flex justify-center">
          {/* <div className="w-20 h-20 me-6">
            <img
              size=""
              src={selectedImage ? selectedImage : image}
              alt="tania andrew"
              className="rounded-full  m-5 lg:w-20 lg:h-20 w-20 h-20 me-10"
            />
          </div> */}
          <form onSubmit={handleSubmit}>
            <div className="mt-8 mb-2 w-70 max-w-screen-lg sm:w-96">
              <Input
                type="file"
                name="image"
                label="Choose Image"
                onChange={handleImageChange}
              />
            </div>

            <DialogFooter className="flex justify-between">
              <Button
                variant="text"
                color="red"
                onClick={handleOpen}
                className="mr-1"
              >
                <span>Cancel</span>
              </Button>
              <Button variant="filled" type="submit" color="green">
                <span>Save</span>
              </Button>
            </DialogFooter>
          </form>
        </DialogBody>
      </Dialog>
    </>
  );
}

