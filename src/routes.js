import React from 'react';
const Users = React.lazy(() => import('./views/users/Users'))
const User = React.lazy(() => import('./views/users/User'))
const CreateUser = React.lazy(() => import('./views/users/CreateUser'))

const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/users', exact: true, name: 'Users', component: Users },
  { path: '/users/:id', exact: true, name: 'User Details', component: User },
  { path: '/create-user', exact: true, name: 'Create User', component: CreateUser }
];

export default routes;
