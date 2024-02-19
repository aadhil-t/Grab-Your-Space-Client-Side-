import {
    Card,
    Typography,
    List,
    ListItem,
    ListItemPrefix,
    ListItemSuffix,
    Chip,
  } from "@material-tailwind/react";
  import {
    PresentationChartBarIcon,
    ShoppingBagIcon,
    UserCircleIcon,
    Cog6ToothIcon,
    InboxIcon,
    PowerIcon,
  } from "@heroicons/react/24/solid";
import { useNavigate } from "react-router-dom";
   
  export default function DefaultSidebar() {
    const navigate = useNavigate()
    return (
        <div className="fixed">
      <Card className="h-[calc(100vh-2rem)] w-full max-w-[20rem] p-4 shadow-xl rounded-none shadow-blue-gray-900/5 ">
        <div className="mb-2 p-4">
          <Typography variant="h5" color="blue-gray">
            
          </Typography>
        </div>
        <List>
          <ListItem onClick={()=>navigate('/admin/dashboard')}>
            <ListItemPrefix>
              <PresentationChartBarIcon className="h-5 w-5" />
            </ListItemPrefix>
            Dashboard
          </ListItem>
          <ListItem onClick={()=> navigate('/admin/users')}>
            <ListItemPrefix>
              <ShoppingBagIcon className="h-5 w-5" />
            </ListItemPrefix>
            User 
          </ListItem>

          <ListItem onClick={()=> navigate('/admin/hubadminlist')}>
            <ListItemPrefix>
            <UserCircleIcon className="h-5 w-5" />
            </ListItemPrefix>
            Hub Admin 
            <ListItemSuffix>
              <Chip value="14" size="sm" variant="ghost" color="blue-gray" className="rounded-full" />
            </ListItemSuffix>
          </ListItem>

          <ListItem onClick={()=> navigate('/admin/hubaproval')}>
            <ListItemPrefix>
            <InboxIcon className="h-5 w-5" />
            </ListItemPrefix>
            Approval Hub
          </ListItem>

          <ListItem>
            <ListItemPrefix>
              <Cog6ToothIcon className="h-5 w-5" />
            </ListItemPrefix>
            Settings
          </ListItem>
          <ListItem>
            <ListItemPrefix>
              <PowerIcon className="h-5 w-5" />
            </ListItemPrefix>
            Log Out
          </ListItem>
        </List>
      </Card>
      </div>
    );
  }