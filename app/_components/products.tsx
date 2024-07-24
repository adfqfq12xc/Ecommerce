'use client'
import React, { useEffect, useState } from 'react';
import Cart from './cart';

function Products() {
    const [productData, setProductData] = useState(null);

    useEffect(() => {
        const fetchProductData = async () => {
            try {
                const response = await fetch('http://localhost:3000/api/product');
                if (response.ok) {
                    const data = await response.json();
                    setProductData(data);
                    console.log(data);
                } else {
                    throw new Error('Failed to fetch product data');
                }
            } catch (error) {
                console.error('Error fetching product data:', error);
            }
        };

        fetchProductData();
    }, []);

    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 m-10 max-w-screen-2xl mx-auto' id='product'>
            {productData?.map((item:any) => (
                <Cart key={item._id} item={item} />
            ))}
        </div>
    );
}

export default Products;
