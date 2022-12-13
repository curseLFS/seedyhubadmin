import { createBrowserRouter } from "react-router-dom";
import { userInputs, productInputs, orderInputs, deliveryInputs } from "../formSource";
import { Home, Login, List, Single, New, Delivery, Stat, Notification, Service, Log, System, Profile } from "./index";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <Profile />,
    },
    {
      path: "/dashboard",
      element: <Home />,
    },
    {
      path: "login",
      element: <Login />,
    },
    {
      path: "users",
      element: <List />,
    },
    {
      path: "users/:userId",
      element: <Single />,
    },
    {
      path: "users/new",
      element: <New inputs={userInputs} title="Add New User" />,
    },
    {
      path: "products",
      element: <List />,
    },
    {
      path: "products/:productId",
      element: <Single />,
    },
    {
      path: "products/new",
      element: <New inputs={productInputs} title="Add New Product" />,
    },
    {
      path: "orders",
      element: <List />,
    },
    {
      path: "orders/:orderId",
      element: <Single />,
    },
    {
      path: "orders/new",
      element: <New inputs={orderInputs} title="Add New Order" />,
    },
    {
        path: "delivery",
        element: <Delivery />,
      },
      {
        path: "delivery/:deliveryId",
        element: <Single />,
      },
      {
        path: "delivery/new",
        element: <New inputs={deliveryInputs} title="Add New Delivery" />,
      },
      {
        path: "stats",
        element: <Stat />,
      },
      {
        path: "notifications",
        element: <Notification />,
      },
      {
        path: "services",
        element: <Service />,
      },
      {
        path: "logs",
        element: <Log />,
      },
      {
        path: "settings",
        element: <System />,
      },
      {
        path: "profile",
        element: <Profile />,
      },
  ]);