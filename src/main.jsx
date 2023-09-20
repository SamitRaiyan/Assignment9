import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Home/Home';
import Blog from './Blog/Blog';
import Firstpage from './FirstPage/Firstpage';
import Statistics from './Statistics/Statistics';
import AppliedJobs from './AppliedJobs/AppliedJobs';
import Error from './Error/Error';
import JobDetails from './JobDetails/JobDetails';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    children: [
      {
        path: '/',
        element: <Firstpage></Firstpage>,
        loader:()=>fetch('Jobs.json')
      },
      {
        path: '/Statistic',
        element: <Statistics></Statistics>
      },
      {
        path: '/Applied',
        element: <AppliedJobs></AppliedJobs>
      },
      {
        path: '/Blog',
        element: <Blog></Blog>
      },
      {
        path:'/details/:jobId',
        element: <JobDetails></JobDetails>,
        loader:({params})=>fetch(`/Jobs.json`)
      },
      {
        path: '*',
        element: <Error></Error>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router} />
  </React.StrictMode>,
)
