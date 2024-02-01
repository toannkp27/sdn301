import Category from "../screens/Category";
import Contact from "../screens/Contact";
import Detail from "../screens/Detail";
import Homepage from "../screens/Homepage";
import NotFoundPage from "../screens/NotFoundPage";
import Payment from "../screens/Payment";
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
        path: '/payment',
        page: Payment,
        isShowHeader: true
    },
    {
        path: '*',
        page: NotFoundPage
    }
]