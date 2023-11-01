  import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Tooltip,
    Button,
  } from "@material-tailwind/react";

  import { Profileview } from "../../Api/UserApi";
  import { useSelector } from "react-redux";
  import EditProfile from "./EditProfile";
  import { Input } from "@material-tailwind/react";
  import ChangeProfile from "./ChangeProfile";
  import { useState } from "react";
  import { useQuery } from "@tanstack/react-query";

  export default function ProfileCard() {
    const { id} = useSelector((state) => state.user);
    const [datas, setData] = useState('');
    console.log(datas)

      const { isLoading, error, data } = useQuery({
        queryKey: ['profile'],
        queryFn: () =>  Profileview(id).then((res) => {
          setData(res.data);  
          console.log(res.data, 'hj');
        })
        .catch((err) => {
          console.error("Error:", err);
        })
      });

    return (
      <div className="h-[50rem] flex items-center justify-center mt-24 mr-48 ml-96 w-auto md:w-[1200px] bg-blue-900">
        <Card className="h-[40rem] w-[40rem] mt-32 mb-20">
          <CardHeader floated={false} className="h-80">
            <img src="../../../src/assets/UserAssets/kkk.jpg" alt="profile-picture" />
          </CardHeader>
          <ChangeProfile/>

          <CardBody className="text-center">
            <Typography variant="h4" color="blue-gray" className="mb-2">
              {datas.data ? datas.data.name: ""}
            </Typography>
            <Typography color="blue-gray" className="font-semibold" textGradient>
              {datas.data ? datas.data.email: ""}
            </Typography>
            <Typography color="blue-gray" className="font-semibold" textGradient>
              {datas.data ? datas.data.mobile: ""}
            </Typography>
          
            <div className="flex justify-center mt-5">
              <div className="flex items-center">
                <EditProfile  />
                <Button className="mx-10">Change Password</Button>
              </div>
            </div>
          </CardBody>
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
    );
  }