import AddProduct from "../screens/AddProduct";
import Product from "../screens/Product";
import Category from "../screens/Category";
import Contact from "../screens/Contact";
import Detail from "../screens/Detail";
import Homepage from "../screens/Homepage";
import ListProduct from "../screens/ListProduct";
import NotFoundPage from "../screens/NotFoundPage";
import UpdateProduct from "../screens/UpdateProduct";
import OrderManagement from "../screens/OrderManagement";
import UserProfile from "../screens/UserProfile";
import EditProfile from "../screens/EditProfile";

export const routers = [
  {
    path: "/",
    page: Homepage,
    isShowHeader: true,
  },
  {
    path: "/detail",
    page: Detail,
    isShowHeader: true,
  },
  {
    path: "/category",
    page: Category,
    isShowHeader: true,
  },
  {
    path: "/contact",
    page: Contact,
    isShowHeader: true,
  },

  {
    path: "*",
    page: NotFoundPage,
  },
  { path: "/addproduct", page: AddProduct, isShowHeader: true },
  { path: "/product", page: Product, isShowHeader: true },
  { path: "/updateproduct", page: UpdateProduct, isShowHeader: true },
  { path: "/ordermanagement", page: OrderManagement, isShowHeader: true },
  { path: "/userprofile", page: UserProfile, isShowHeader: true },
  { path: "/userprofile/editprofile", page: EditProfile, isShowHeader: true },

  {
    path: "/listP",
    page: ListProduct,
    isShowHeader: false,
  },
];
