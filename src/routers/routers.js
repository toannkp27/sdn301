import AddProduct from "../screens/AddProduct";
import Login from "../screens/auth/Login";
import Register from "../screens/auth/Register";
import Category from "../screens/Category";
import Contact from "../screens/Contact";
import Detail from "../screens/Detail";
import EditProfile from "../screens/EditProfile";
import Homepage from "../screens/Homepage";
import ListProduct from "../screens/ListProduct";
import NotFoundPage from "../screens/NotFoundPage";
import OrderManagement from "../screens/OrderManagement";
import Payment from "../screens/Payment";
import ListProducts from "../screens/products/ListProducts";
import UpdateProduct from "../screens/UpdateProduct";
import UserProfile from "../screens/UserProfile";

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
  {
    path: "/addproduct",
    page: AddProduct,
    isShowHeader: true,
  },
  {
    path: "/listproduct",
    page: ListProducts,
    isShowHeader: true,
  },
  {
    path: "/updateproduct",
    page: UpdateProduct,
    isShowHeader: true,
  },
  {
    path: "/ordermanagement",
    page: OrderManagement,
    isShowHeader: true
  },
  {
    path: "/userprofile",
    page: UserProfile,
    isShowHeader: true
  }, {
    path: "/userprofile/editprofile",
    page: EditProfile,
    isShowHeader: true
  },
  {
    path: '/listP',
    page: ListProduct,
    isShowHeader: false
  },
  {
    path: '/payment',
    page: Payment,
    isShowHeader: false
  },
  {
    path: '/login',
    page: Login,
    isShowHeader: false
  },
  {
    path: '/register',
    page: Register,
    isShowHeader: false
  }

];

