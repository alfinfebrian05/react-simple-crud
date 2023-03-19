import { LandingPage, CreateProduct, ProductDetail } from "../../pages";

const routers = [
  {
    pathname: "/",
    element: <LandingPage />,
  },
  {
    pathname: "/create-product",
    element: <CreateProduct />,
  },
  {
    pathname: "/product/:id",
    element: <ProductDetail />,
  },
];

export default routers;
