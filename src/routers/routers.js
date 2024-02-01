import Blog from "../screens/Blog";
import Category from "../screens/Category";
import Contact from "../screens/Contact";
import Detail from "../screens/Detail";
import Homepage from "../screens/Homepage";
import NotFoundPage from "../screens/NotFoundPage";
import UserList from "../screens/UserList";

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
        path: '/blog',
        page: Blog
    },
    
    {
        path: '/user',
        page: UserList
    },
   
    {
        path: '*',
        page: NotFoundPage
    }
]