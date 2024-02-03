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
  // const { isLoading, error, data, refetch } = useQuery({
  //   queryKey: ['profile'],
  //   queryFn: async () => {
  //     try {
  //       const res = await Profileview();
  //       console.log(res,'gfdghgfjg');
  //       return res.data;
  //     } catch (err) {
  //       console.error("Error:", err);

  //       // Log more details about the error
  //       console.log("Error details:", err.response);

  //       // Rethrow the error to let React Query handle it
  //       throw err;
  //     }
  //   }
  // });

  if (isLoading) {
    return <div>fghj</div>;
  }
  if (error) {
    return <div>fghj</div>;
  }
  return (

    <>
  <div className="p-4 ">
      <div className="flex items-center justify-center mt-6 mb-4 rounded bg-gray-50 dark:bg-gray-800">
      <Card className="h-[40rem] w-[40rem] mt-20 mb-20">
        <CardHeader floated={false} className="h-80">
          <img
            src="../../../src/assets/UserAssets/kkk.jpg"
            alt="profile-picture"
          />
        </CardHeader>
        <ChangeProfile />

        <CardBody className="text-center">
          <Typography variant="h4" color="blue-gray" className="mb-2">
            {data ? data.data.profile.name : ""}
          </Typography>
          <Typography color="blue-gray" className="font-semibold" textGradient>
            {data.data ? data.data.profile.email : ""}
          </Typography>
          <Typography color="blue-gray" className="font-semibold" textGradient>
            {data.data ? data.data.profile.mobile : ""}
          </Typography>

          <div className="flex justify-center mt-5">
            <div className="flex items-center">
              <ProfileEdit refetch={refetch} data={data.data.profile} />
              <Button className="mx-10" onClick={() => navigate("/forgot")}>
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
