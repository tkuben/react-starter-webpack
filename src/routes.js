import Person from "@material-ui/icons/Person";
import SettingsIcon from '@material-ui/icons/Settings';
// core components/views for Admin layout
import Settings from "Pages/Settings.js";
import UserProfile from "Pages/UserProfile.js";

const dashboardRoutes = [
  {
    path: "/settings",
    name: "Settings",
    icon: SettingsIcon,
    component: Settings,
    layout: "/dashboard"
  },
  {
    path: "/user",
    name: "User Profile",
    icon: Person,
    component: UserProfile,
    layout: "/dashboard"
  }
];

export default dashboardRoutes;
