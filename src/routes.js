/** 
  For adding a new route you can follow the existing routes in the routes array.
  1. The `type` key with the `collapse` value is used for a route.
  2. The `type` key with the `title` value is used for a title inside the Sidenav. 
  3. The `type` key with the `divider` value is used for a divider between Sidenav items.
  4. The `name` key is used for the name of the route on the Sidenav.
  5. The `key` key is used for the key of the route (It will help you with the key prop inside a loop).
  6. The `icon` key is used for the icon of the route on the Sidenav, you have to add a node.
  7. The `collapse` key is used for making a collapsible item on the Sidenav that has other routes
  inside (nested routes), you need to pass the nested routes inside an array as a value for the `collapse` key.
  8. The `route` key is used to store the route location which is used for the react router.
  9. The `href` key is used to store the external links location.
  10. The `title` key is only for the item with the type of `title` and its used for the title text on the Sidenav.
  10. The `component` key is used to store the component of its route.
*/

// Soft UI Dashboard React layouts
import Dashboard from "layouts/dashboard";
import Module from "layouts/module";
import Feedback from "layouts/feedback";
import Reports from "layouts/reports";
import GroupsAndMessages from "layouts/groupsAndMessages";
import AssistantOutlinedIcon from '@mui/icons-material/AssistantOutlined';
import Profile from "layouts/profile";
import SignIn from "layouts/authentication/sign-in";
import SignUp from "layouts/authentication/sign-up";
import Organization from "layouts/organization";
import DeleteIcon from '@mui/icons-material/Delete';
import Modules from "layouts/modules";
import ClassOutlinedIcon from '@mui/icons-material/ClassOutlined';
import DashboardOutlinedIcon from '@mui/icons-material/DashboardOutlined';
import TimerOutlinedIcon from '@mui/icons-material/TimerOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import CorporateFareIcon from '@mui/icons-material/CorporateFare';
import People from "layouts/people";
import ViewInArIcon from '@mui/icons-material/ViewInAr';
const routes = [
  {
    type: "collapse",
    name: "Dashboard",
    key: "dashboard",
    route: "/dashboard",
    icon: <DashboardOutlinedIcon />,
    component: <Dashboard />,
    noCollapse: true,
  },
  {
    type: "collapse",
    name: "Modules",
    key: "modules",
    route: "/modules",
    icon: <ViewInArIcon />,
    component: <Modules />,
    noCollapse: true,
  },
  {
    type: "collapse",
    name: "Courses",
    key: "courses",
    route: "/courses",
    icon: <ClassOutlinedIcon />,
    component: <Feedback />,
    noCollapse: true,
  },
  {
    type: "non-visible",
    name: "Module",
    key: "modules/module",
    route: "/modules/module",
    icon: <ClassOutlinedIcon />,
    component: <Module />,
    noCollapse: true,
  },

  { type: "title", title: "Manage", key: "account-pages" },
  {
    type: "collapse",
    name: "Profile",
    key: "profile",
    route: "/profile",
    icon:<AccountCircleOutlinedIcon />,
    component: <Profile />,
    noCollapse: true,
  },
  {
    type: "collapse",
    name: "Organization",
    key: "organization",
    route: "/organization",
    icon:<CorporateFareIcon />,
    component: <Organization />,
    noCollapse: true,
  },
  {
    type: "non-visible",
    name: "Sign In",
    key: "sign-in",
    route: "/sign-in",
    icon: <DeleteIcon />,
    component: <SignIn />,
    noCollapse: true,
  },
  {
    type: "non-visible",
    name: "Sign Up",
    key: "sign-up",
    route: "/sign-up",
    icon:<DeleteIcon />,
    component: <SignUp />,
    noCollapse: true,
  },
  
  {
    type: "collapse",
    name: "People",
    key: "people",
    route: "/people",
    icon:<PeopleAltIcon />,
    component: <People />,
    noCollapse: true,
  },
  {
    type: "collapse",
    name: "Send Feedback",
    key: "feedback",
    route: "/feedback",
    icon: <AssistantOutlinedIcon />,
    component: <Feedback />,
    noCollapse: true,
  },
  
];

export default routes;
