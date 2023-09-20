import React from 'react';

const Product = () => {
    return (
        <div className='flex flex-col gap-3 text-indigo-300 items-start md:w-24 w-16'>
            <h2 className=' font-bold text-xs md:text-lg'>Product</h2>
            <p className="md:text-base text-xs">Prototype</p>
            <p className="md:text-base text-xs">Plans & Price</p>
            <p className="md:text-base text-xs">Customer</p>
            <p className="md:text-base text-xs">Integration</p>
        </div>
    );
};

export default Product;