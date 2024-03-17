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
import { Input } from "@material-tailwind/react";
import ProfileEdit from "./EditProfile";
import ChangeProfile from "./ChangeProfile";
import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import ProfileImg from "../../assets/UserAssets/RandomProfile.jpg";

export default function ProfileCard() {
  // const { id} = useSelector((state) => state.user);
  // const [datas, setData] = useState('');
  // console.log(datas)
  const navigate = useNavigate();
  const { isLoading, error, data, refetch } = useQuery({
    queryKey: ["profile"],
    queryFn: () => Profileview(),
  });
  if (data) {
    console.log(data, "profile");
  }

  if (isLoading) {
    return <div>fghj</div>;
  }
  if (error) {
    return <div>fghj</div>;
  }
  return (
    <>
      <div className=" ">
        <div
          className="flex flex-col items-center justify-center mt-12 mb-4 rounded dark:bg-gray-800"
          style={{ backgroundColor: "#1B4965" }}
        >
          <span className="text-[3rem] my-4 font-extrabold text-cyan-50">
            PROFILE
          </span>
          <Card className="h-[50rem] w-[40rem]  mb-20">
            <CardHeader floated={false} className="h-full">
              <img
                src={
                  data && data.data.profile.profileimage
                    ? data.data.profile.profileimage
                    : ProfileImg
                }
                alt="profile-picture"
                style={{ objectFit: "cover", width: "100%", height: "100%" }}
              />
            </CardHeader>
            <ChangeProfile />

            <CardBody className="text-center ">
              <Typography variant="h3" color="blue-gray" className="mb-2">
                {data ? data.data.profile.name : ""}
              </Typography>
              <Typography
                color="blue-gray"
                className="font-semibold"
                variant="h4"
                textGradient
              >
                {data.data ? data.data.profile.email : ""}
              </Typography>
              <Typography
                color="blue-gray"
                className="font-semibold"
                variant="h4"
                textGradient
              >
                {data.data ? data.data.profile.mobile : ""}
              </Typography><br/>
              <Typography
                color="blue-gray"
                className="font-semibold  border border-gray-500 ml-48 w-52"
                variant="h4"
                textGradient
              >
                <span className="  text-2xl font-bold text-black">Wallet: </span>
                {data.data ? data.data.profile.wallet : ""}
              </Typography><br/>

              <div className="ml-10 flex justify-center mt-5">
                <div className="flex items-center">
                  <ProfileEdit refetch={refetch} data={data.data.profile} />
                  <Button
                    className=" mx-14"
                    onClick={() => navigate("/passchangepro")}
                  >
                    Change Password
                  </Button>
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
      </div>
    </>
  );
}
