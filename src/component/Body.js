import React from 'react';
import Login from './login/Login';
import Browse from './browse/Browse';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

const Body = () => {
    const appRouter = createBrowserRouter([
        {
            path: "/",
            element: <Login />
        },
        {
            path: "/browse",
            element: <Browse />
        },
    ])

  return (
    <div>
        <RouterProvider router={appRouter} />
    </div>
  )
}

export default Body