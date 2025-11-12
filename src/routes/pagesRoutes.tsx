import { Bell, LayoutPanelLeft, MonitorPlay, Presentation, Touchpad, User } from "lucide-react";
import { lazy } from "react";
 


export const navMainRoutes = [
{
    menuId:1,
    title:"OverView",
    Desc:"Tutor Dashboard",
          url: "/",
         component: lazy(
          () => import("../pages/home")
        ),
        icon:<LayoutPanelLeft />

},
{
    menuId:2,
    title:"Sessions",
      Desc:"Video Sessions",
          url: "/sessions",
         component: lazy(
          () => import("../pages/sessions")
        ),
        icon:<Touchpad />

},

{
    menuId:3,
    title:"Notification",
      Desc:"All Notification",
          url: "/notification",
         component: lazy(
          () => import("../pages/notigication")
        ),
        icon:<Bell />

},

{
    menuId:4,
    title:"Media",
      Desc:"All Media",
          url: "/media",
         component: lazy(
          () => import("../pages/media")
        ),
        icon:<MonitorPlay />

},

{
    menuId:5,
    title:"WhiteBorad",
      Desc:"WhiteBoard",
          url: "/whiteborad",
         component: lazy(
          () => import("../pages/whiteboard")
        ),
        icon:<Presentation />

},
{
    menuId:6,
    title:"Account",
      Desc:"User Porfile",
          url: "/account",
         component: lazy(
          () => import("../pages/accounts")
        ),
        icon:<User />

}








];