import React, { useState,useEffect } from "react";
import {
  Button,
  Dialog,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Input,
} from "@material-tailwind/react";
import { UpdatedEdit } from "../../Api/UserApi"; 
import { useSelector, } from "react-redux";
import { useQueryClient } from "@tanstack/react-query";
// import { Profileview } from "../../Api/UserApi";

export default function UserProfileEdit() {
  const { name, mobile, email,id} = useSelector((state) => state.user);
  const [open, setOpen] = React.useState(false);
  const queryClient=useQueryClient()

  const [error, setError] = useState("");

  const [formData, setFormData] = useState({
    name:name?name: "",
    email:email?email: "",
    mobile:mobile?mobile: "",
    id:id?id: "",
  }); 
  
  // useEffect(() => {
  //   // Define an async function to fetch user profile data
  //   const fetchData = async () => {
  //     try {
  //       // Call your Profileview function to fetch the user's profile data
  //       const response = await Profileview(id);
  //       const userData = response.data; // Assuming your API response contains user data
  //       console.log(userData,"jjjj")
        
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };

  //   fetchData(); // Call the function to fetch data when the component mounts

  // }, [id]); // Ensure this effect runs whenever the 'id' changes

  
  const handleOpen = () => setOpen((open)=>!open);

  const handleInputChange = (e, field) => {
    const { value } = e.target;
    setFormData({
      ...formData,
      [field]: value,
    });
  };
  

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      const { name, email,mobile } = formData;
      if (name.trim() === "") {
        setError("Invalid Name");
      } else if (email.trim() === "") {
        setError("Invalid Email");
      
      }else if (mobile.trim() === "") {
        setError("Invalid Mobile");
      
      } else {
        const response = await UpdatedEdit(formData);

          // 
        console.log("Updated Values: ", response.data.data);
        queryClient.invalidateQueries('profile')

        handleOpen();
      }
    } catch (error) {
      console.log(error);
    }
  };


  return (
    <>
      <Button onClick={handleOpen}>Edit Profile</Button>
      <Dialog
        size="sm"
        open={open}
        onClose={handleOpen}
        className="bg-transparent shadow-none"
      >
        <Card className="mx-auto w-full max-w-[24rem]">
          <CardHeader className="text-center">
            <Typography variant="h4" color="blue-gray">
              Profile Edit
            </Typography>
            <Typography
              className="mb-3 font-normal"
              variant="paragraph"
              color="gray"
            >
              Enter your details to edit your profile.
            </Typography>
          </CardHeader>
          <CardBody className="flex flex-col gap-4">
            <Typography className="-mb-2" variant="h6">
              Your Name
            </Typography>
            <Input
                 label="Name"
                 value={formData.name}
                 size="lg"
                 onChange ={(e) => handleInputChange(e, "name")}
               />

            <Typography className="-mb-2" variant="h6">
              Your Email
            </Typography>
            <Input
              label="Email"
              value={formData.email}
              size="lg"
              onChange={(e) => handleInputChange(e, "email")}
            />
            <Typography className="-mb-2" variant="h6">
              Your Mobile
            </Typography>
            <Input
              label="Mobile"
              value={formData.mobile}
              size="lg"
              onChange={(e) => handleInputChange(e, "mobile")}
            />
          </CardBody>
          <CardFooter className="pt-0">
            <Button variant="gradient" onClick={handleUpdate} fullWidth>
              Update
            </Button>
          </CardFooter>
        </Card>
      </Dialog>
    </>
  );
}
