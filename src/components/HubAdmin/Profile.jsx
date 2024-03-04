  import {
    Card,
    CardBody,
    CardFooter,
    Typography,
    Tooltip,
  } from "@material-tailwind/react";
  import { useEffect, useState } from "react";
  import { HubProfile } from "../../Api/HubAdminApi";
  import AddhubForm from "./AddHub";
  import EditHubAdminProfile from "./EditProfile";


  export default function HubProfileForm() {
    const [Prodata, setProData] = useState({});
    const [child,setChild] = useState()

    const onDataUpdate =(data)=>{
        setChild(data)
    }

    useEffect(() => {
      const fetchProfile = async () => {
        const response = await HubProfile();
        setChild(false)
        setProData(response.data.profile,"iam the data of the profile of the user");
        
      };
      fetchProfile();
    }, [child]);

    console.log("Prodatada of the profile state", Prodata);
    return (
      <div className="flex flex-col " style={{ backgroundColor: "#1B4965"}}>
      <div className="flex my-24  justify-center ">
        <Card className="mt-10 w-[60rem] h-[40rem] bg-[#f1f1fc] shadow-xl ">
          <div className="flex mx-80 w-[20rem] -mt-24 bg-transparent ">
            <div
              floated={false}
              className="flex justify-center h-80  rounded-lg overflow-hidden transition-transform transform bg-transparent"
            >
              <img
                src="https://docs.material-tailwind.com/img/team-3.jpg"
                alt="profile-picture"
                className="object-cover w-72 h-72 rounded-full"
              />
            </div>
          </div>

          <CardBody className="text-center">
            <Typography variant="h2" color="blue-gray" className="mb-2">
              {Prodata ? Prodata.name : ""}
            </Typography>
            <Typography
              color="blue-gray"
              variant="h4"
              className="font-medium"
              textGradient
            >
              {Prodata ? Prodata.email : ""}
            </Typography>
            <Typography
              color="blue-gray"
              variant="h4"
              className="font-medium"
              textGradient
            >
              {Prodata ? Prodata.mobile : ""}
            </Typography>
          </CardBody>

          <div className="mt-10 flex justify-evenly ">
          <AddhubForm/>
          <EditHubAdminProfile data = {Prodata} onDataUpdate={onDataUpdate}/>
          </div>

          <CardFooter className="flex justify-center gap-7 pt-2">
            <Tooltip content="Like">
              <Typography
                as="a"
                href="#facebook"
                variant="lead"
                color="blue"
                textGradient
              >
                <i className="fab fa-facebook" />
              </Typography>
            </Tooltip>
            <Tooltip content="Follow">
              <Typography
                as="a"
                href="#twitter"
                variant="lead"
                color="light-blue"
                textGradient
              >
                <i className="fab fa-twitter" />
              </Typography>
            </Tooltip>
            <Tooltip content="Follow">
              <Typography
                as="a"
                href="#instagram"
                variant="lead"
                color="purple"
                textGradient
              >
                <i className="fab fa-instagram" />
              </Typography>
            </Tooltip>
          </CardFooter>
        </Card> 
      </div>
      </div>
    );
  }
