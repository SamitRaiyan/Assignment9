import React from 'react';
import Banner from './Banner';
import Category from './Category';
import Jobs from './Jobs';
import { useLoaderData } from 'react-router-dom';


const Firstpage = () => {
    const data=useLoaderData();
   
    return (
        <div>
            <Banner></Banner>
            <Category></Category>   
            <Jobs data={data}></Jobs>         
        </div>
    );
};

export default Firstpage;