import React from 'react';

const CategoryCard = (props) => {
    const {categoryName,logo,jobsAvailable}=props.Category;
    return (
        <div className='flex flex-col gap-3 items-center md:p-8 p-2  rounded-lg bg-blue-100'>
            <img className=' w-20 rounded-xl' src={logo} alt="" />
            <h2 className='font-bold text-xl'>{categoryName}</h2>
            <p>Jobs available {jobsAvailable}</p>
        </div>
    );
};

export default CategoryCard;