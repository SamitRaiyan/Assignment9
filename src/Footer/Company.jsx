import React from 'react';

const Company = () => {
    return (
        <div className='flex flex-col gap-3 text-indigo-300 items-start md:w-24 w-16'>
             <h2 className=' font-bold text-xs md:text-lg'>Company</h2>
            <p className="md:text-base text-xs">About us</p>
            <p className="md:text-base text-xs">Work</p>
            <p className="md:text-base text-xs">Latest news</p>
            <p className="md:text-base text-xs">Career</p>
        </div>
    );
};

export default Company;