import { createBrowserRouter } from "react-router-dom";
import MainLayout from "~/layouts/main";
import Home from "~/pages/Home";
import Explore from "~/pages/Explore";
import Notifications from "~/pages/Notifications";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "explore",
        element: <Explore />,
      },
      {
        path: "notifications",
        element: <Notifications />,
      },
      {
        path: "messages",
        element: <div>Mesajlar</div>,
      },
      {
        path: "lists",
        element: <div>Listeler</div>,
      },
      {
        path: "bookmarks",
        element: <div>Yer İşaretleri</div>,
      },
      {
        path: "verify",
        element: <div>Onaylanmış</div>,
      },
      {
        path: "profile",
        element: <div>Profil</div>,
      },
    ],
  },
]);

export default routes;
