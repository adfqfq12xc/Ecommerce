'use client'
import React, { useEffect, useState } from 'react';
import Cart from './cart';

function Products() {
 
    const [productData, setProductData] = useState([]);
    const [limit, setLimit] = useState(7); // Initial limit
    const [hidden ,sethidden]=useState(true)

    const fetchProductData = async (currentLimit:number) => {
        try {
            const response = await fetch(`http://localhost:3000/api/post?limit=${currentLimit}`);
            if (response.ok) {
                const data = await response.json();
                if(data.length<limit){
                    sethidden(false)

                }
                setProductData(data);
            } else {
                throw new Error('Failed to fetch product data');
            }
        } catch (error) {
            console.error('Error fetching product data:', error);
        }
    };

    useEffect(() => {
        fetchProductData(limit);
    }, [limit]);

    const handleShowMore = () => {
        setLimit(prevLimit => prevLimit + 7); // Increase the limit by 8
    };

    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 m-10 max-w-screen-2xl mx-auto' id='product'>
            {productData?.map((item) => (
                <Cart key={item?.id} item={item} />
            ))}
            {hidden &&
            <div className='mt-4 flex items-center justify-center '>
                <p 
                    className='px-3 py-3 bg-orange-500 flex justify-center cursor-pointer' 
                    onClick={handleShowMore}
                >
                    Show More{'>'}{'>'}
                </p>
            </div>
            }
        </div>
    );
}

export default Products;
