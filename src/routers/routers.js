import Category from "../screens/Category";
import Contact from "../screens/Contact";
import Detail from "../screens/Detail";
import Homepage from "../screens/Homepage";
import ListProduct from "../screens/ListProduct";
import NotFoundPage from "../screens/NotFoundPage";

export const routers = [
    {
        path: '/',
        page: Homepage,
        isShowHeader: true
    },
    {
        path: '/detail',
        page: Detail,
        isShowHeader: true
    },
    {
        path: '/category',
        page: Category,
        isShowHeader: true
    },
    {
        path: '/contact',
        page: Contact,
        isShowHeader: true
    },
    {
        path: '/listP',
        page: ListProduct,
        isShowHeader: false
    },
    {
        path: '*',
        page: NotFoundPage
    }
]