import React, { useEffect, useState } from 'react';
import CategoryCard from './CategoryCard';

const Category = () => {
    const [Category,setCategory]=useState([]);
    useEffect(()=>{
        fetch('category.json')
        .then(res=>res.json())
        .then (data=> setCategory(data))
    })
   
    return (
        <div className=' py-4 px-16 md:px-24 text-center'>
            <h1 className=' font-bold text-xl md:text-4xl'>Job Category List</h1>
            <p className='md:text-base text-sm'>Find your desired job from best companies with best package</p>
            <div className='flex flex-col md:flex-row gap-4 justify-around pt-4 '>
                {
                    Category.map(form=><CategoryCard key={form.id} Category={form}></CategoryCard>)
                }
            </div>
        </div>
    );
};

export default Category;