import { PencilIcon,NoSymbolIcon } from "@heroicons/react/24/solid";
import {
  ArrowDownTrayIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/24/outline";
import {
  Card,
  CardHeader,
  Typography,
  Button,
  CardBody,
  Chip,
  CardFooter,
  Avatar,
  IconButton,
  Tooltip,
  Input,
} from "@material-tailwind/react";

import { useEffect, useState } from "react";
import { UsersList, adminApi } from "../../Api/AdminApi";
import { UserBlock } from "../../Api/AdminApi";
import { useQuery, useQueryClient } from "@tanstack/react-query";

const TABLE_HEAD = [
  "User Name",
  "Mobile No",
  "Email",
  "Block",
];



export default function Users() {
  const [userDetails, setUser] = useState([]);

  const TABLE_ROWS = userDetails.map((item) => ({
    // img: "/im,
    name: item.name,
    mobile: item.mobile,
    email: item.email,
    id:item._id,
    is_blocked:item.is_blocked
  }));
  

  
  useEffect(() => {

    UserList();
    
  },[]);

  const UserList = async() =>{
    UsersList().then((response) => {
      const userData = response.data;
      console.log(userData.UserData,"user list");
      setUser(userData.UserData);
      // handleAction(id)  
      console.log(userDetails);
    }).catch((error) => console.log(error));

  }

  const handleAction = async (id) => {
    console.log(id);
    try {
      const response = await UserBlock(id);
      UserList();
   
    } catch (error) {
      console.log(error);
    }
  };
  

  return (
    <Card className="h-full w-full">
      <CardHeader floated={false} shadow={false} className="rounded-none">
        <div className="mb-4 flex flex-col justify-between gap-8 md:flex-row md:items-center">
          <div>
            <Typography variant="h5" color="blue-gray">
              Users
            </Typography>
          </div>
          <div className="flex w-full shrink-0 gap-2 md:w-max">
            <div className="w-full md:w-72">
              <Input
                label="Search"
                icon={<MagnifyingGlassIcon className="h-5 w-5" />}
              />
            </div>
            <Button className="flex items-center gap-3" size="sm">
              <ArrowDownTrayIcon strokeWidth={2} className="h-4 w-4" /> Download
            </Button>
          </div>
        </div>
      </CardHeader>
      <CardBody className="overflow-scroll px-0">
        <table className="w-full min-w-max table-auto text-left">
          <thead>
            <tr>
              {TABLE_HEAD.map((head) => (
                <th
                  key={head}
                  className="border-y border-blue-gray-100 bg-blue-gray-50/50 p-4"
                >
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal leading-none opacity-70"
                  >
                    {head}
                  </Typography>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {TABLE_ROWS.map(
              (
                {
                  img,
                  name,
                  mobile,
                  email,
                  id,
                  is_blocked
                },
                index
              ) => {
                const isLast = index === TABLE_ROWS.length - 1;
                const classes = isLast
                  ? "p-4"
                  : "p-4 border-b border-blue-gray-50";

                return (
                    // {userData}
                  <tr key={name}>
                    <td className={classes}>
                      <div className=" ml-3 flex items-center gap-3">
                        <Avatar
                          src={img}
                          alt={name}
                          size="md"
                          className="border border-blue-gray-50 bg-blue-gray-50/50 object-contain p-1"
                        />
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-bold"
                        >
                          {name}
                        </Typography>
                      </div>
                    </td>
                    <td className={classes}>
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                      >
                        {mobile}
                      </Typography>
                    </td>
                    <td className={classes}>
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                      >
                        {email}
                      </Typography>
                    </td>
                   
                    <>
                     
                        <td className={classes}>
                          <Tooltip content="Block User">
                             {is_blocked === false ? (
                            <Button
                              size="sm"
                              color="red"
                              className="rounded-md flex gap-3"
                              variant="outlined"
                              onClick={() =>handleAction(id)}
                            >
                              <NoSymbolIcon
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="h-4 w-4"
                              />
                              block
                            </Button>
                             ):(
                              <Button
                              size="sm"
                              color="green"
                              className="rounded-md flex gap-3"
                              variant="outlined"
                              onClick={() =>handleAction(id)}
                            >
                              <NoSymbolIcon
                                strokeWidth={1.5}
                                stroke="green"
                                className="h-4 w-4"
                              />
                              Unblock
                            </Button>
                             )}
                          </Tooltip>
                        </td>
                  
                    </>

                  </tr>
                  
                );
              }
            )}
          </tbody>
        </table>
      </CardBody>
      <CardFooter className="flex items-center justify-between border-t border-blue-gray-50 p-4">
        <Button variant="outlined" size="sm">
          Previous
        </Button>
        <div className="flex items-center gap-2">
          <IconButton variant="outlined" size="sm">
            1
          </IconButton>
          <IconButton variant="text" size="sm">
            2
          </IconButton>
          <IconButton variant="text" size="sm">
            3
          </IconButton>
          <IconButton variant="text" size="sm">
            ...
          </IconButton>
          <IconButton variant="text" size="sm">
            8
          </IconButton>
          <IconButton variant="text" size="sm">
            9
          </IconButton>
          <IconButton variant="text" size="sm">
            10
          </IconButton>
        </div>
        <Button variant="outlined" size="sm">
          Next
        </Button>
      </CardFooter>
    </Card>
  );
}
