'use client';


import Image from 'next/image';
import { Product } from '../../../interfaces/product.interface';
import Link from 'next/link';
import { useState } from 'react';

interface Props {
    product:Product;
}



export const ProductGridItems = ( { product }:Props ) => {

    const [displayImage, setDisplayImage] = useState( product.images[0]);



  return (
    <div className='rounded-md overflow-hidden fade-in'>
        <Link href={`/product/${product.slug}`}>
            <Image
            src={`/products/${ displayImage }`}
            alt={product.title}
            className='w-full object-cover rounded'
            width={500}
            height={500}
            onMouseEnter={ () => setDisplayImage(product.images[1]) }
            onMouseLeave={ () => setDisplayImage(product.images[0]) }
            />
        
        </Link>
        

        <div className='p-4 flex flex-col'>
            <Link 
            className='hover:text-blue-600'
            href={`/product/${product.slug}`}>
            { product.title}
            <span className='font-bold'>${product.price}</span>
            </Link>

        </div>

    </div>
  )
}
