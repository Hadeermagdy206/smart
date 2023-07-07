
import home from './components/home/index'
import about from './components/about/index'
import services from './components/services/index'
import studies from './components/projects/index'
import clients from './components/clients/index'
import faq from './components/faq/index'
import blogs from './components/blogs/index'
import contact from './components/contact/index'

const routes = [
    {
        path: "/",
        name: "Home",
        component: home
    },
    { 
        path: "/about", 
        name: "About",
        component: about,
        meta: { breadcrumb: 'About Us' }
    },
    { 
        path: "/services", 
        component: services,
        name: "Services",
        meta: { breadcrumb: 'Services' }
    },
    { 
        path: "/studies", 
        component: studies,
        name: "Studies",
        meta: { breadcrumb: 'Studies' }
    },
    { 
        path: "/clients", 
        component: clients,
        name: "Clients",
        meta: { breadcrumb: 'Clients' }
    },
    { 
        path: "/faq", 
        component: faq,
        name: "Faq",
        meta: { breadcrumb: 'Faq' }
    },
    { 
        path: "/blogs", 
        component: blogs,
        name: "Blogs",
        meta: { breadcrumb: 'Blogs' }
    },
    { 
        path: "/contact", 
        component: contact,
        name: "Contact",
        meta: { breadcrumb: 'Contact' }
    },
    // {path: "/posts/:id", component: SinglePost, props: true, name: "single-post"},
    // {path: "/users", component: UsersPage, children: [
    //     {path: "", component: UsersHomePage},
    //     {path: ":id", component: UsersViewPage, props: true}
    // ]},
    // // {path: "*", redirect: "/"}, 
    // {path: "*", component: NotFoundPage}, // 404 Error
    // {path: "/store/counterH", component: SmartCounter},
];

export default routes;