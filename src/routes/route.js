
import Dashboard from "../components/admin/Dashboard";
import Profile from "../components/admin/Profile";

import AddMedia from "../components/admin/medias/AddMedia";
import ViewMedia from "../components/admin/medias/ViewMedia";
import EditMedia from "../components/admin/medias/EditMedia";

import AddEvent from "../components/admin/events/AddEvent";
import ViewEvent from "../components/admin/events/ViewEvent";
import EditEvent from "../components/admin/events/EditEvent";

import AddPost from "../components/admin/posts/AddPost";
import ViewPost from "../components/admin/posts/ViewPost";
import EditPost from "../components/admin/posts/EditPost";

import AddStaff from "../components/admin/staffs/AddStaff";
import ViewStaff from "../components/admin/staffs/ViewStaff";
import EditStaff from "../components/admin/staffs/EditStaff";



const routes = [
    {path: '/admin', exact: true, name: 'Admin'},
    {path: '/admin/dashboard', exact: true, name: 'Dashboard', component: Dashboard},
    {path: '/admin/profile', exact: true, name: 'Profile', component: Profile},

//Routes Media
    {path: '/admin/add-media', exact: true, name: 'AddMedia', component: AddMedia},
    {path: '/admin/view-media', exact: true, name: 'ViewMedia', component: ViewMedia},
    {path: '/admin/edit-media', exact: true, name: 'EditMedia', component: EditMedia},

//Routes Events
    {path: '/admin/add-event', exact: true, name: 'AddEvent', component: AddEvent},
    {path: '/admin/view-event', exact: true, name: 'ViewEvent', component: ViewEvent},
    {path: '/admin/edit-event', exact: true, name: 'EditEvent', component: EditEvent},

//Routes Posts
    {path: '/admin/add-post', exact: true, name: 'AddPost', component: AddPost},
    {path: '/admin/view-post', exact: true, name: 'ViewPost', component: ViewPost},
    {path: '/admin/edit-post', exact: true, name: 'EditPost', component: EditPost},

//Routes Staffs
    {path: '/admin/add-staff', exact: true, name: 'AddStaff', component: AddStaff},
    {path: '/admin/view-staff', exact: true, name: 'ViewStaff', component: ViewStaff},
    {path: '/admin/edit-staff', exact: true, name: 'EditStaff', component: EditStaff},



];

export default routes;