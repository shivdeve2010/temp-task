import { Menu } from "@/types/menu";

const menuData: Menu[] = [
  {
    id: 1,
    title: "Home",
    path: "/",
    newTab: false,
  },
  {
    id: 2,
    title: "About",
    path: "/",
    newTab: false,
  },
  
  {
    id: 3,
    title: "Support",
    path: "/",
    newTab: false,
  },
  {
    id: 4,
    title: "More",
    newTab: false,
    submenu: [
      {
        id: 41,
        title: "About Page",
        path: "/",
        newTab: false,
      },
      {
        id: 42,
        title: "Contact Page",
        path: "/",
        newTab: false,
      },
      
      {
        id: 46,
        title: "Sign In Page",
        path: "/",
        newTab: false,
      },
      {
        id: 47,
        title: "Sign Up Page",
        path: "/signup",
        newTab: false,
      },
      {
        id: 48,
        title: "Error Page",
        path: "/error",
        newTab: false,
      },
    ],
  },
  {
    id: 4,
    title: "Study Material",
    newTab: false,
    submenu: [
      
      
    ],
  },
];
export default menuData;
