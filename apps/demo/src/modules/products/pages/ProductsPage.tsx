import type { FunctionComponent } from 'react';

import axios from 'axios';

import { useQuery } from '@tanstack/react-query';
import type { Product } from '@/modules/products/types';

import ProductCard from '@/modules/products/components/ProductCard';

import './ProductsPage.css';

const HomePage: FunctionComponent = () => {
  const { data } = useQuery({
    queryFn: async () => {
      try {
        const response = await axios.get<Product[]>('https://fakestoreapi.com/products');

        return response.data;
      } catch (error) {
        throw new Error('Error while fetching products');
      }
    },
    queryKey: ['products'],
  });

  return (
    <div className="bg-neutral-900">
      <div className="relative mx-auto flex max-w-3xl flex-col items-center px-6 py-8 text-center sm:py-16 lg:px-0">
        <h1 className="text-4xl font-bold tracking-tight theme-text lg:text-6xl">
          New arrivals are here
        </h1>
      </div>
      <div className="mx-auto max-w-2xl px-4 py-8 sm:px-6 sm:py-16 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight theme-text">Customers also purchased</h2>

        {/* <pre>{JSON.stringify(data, null, 2)}</pre> */}
        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {data?.map((product) => <ProductCard key={product.id} product={product} />)}
          {/* {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))} */}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
