import Head from 'next/head';
import { useRouter } from 'next/router';
import React from 'react'
import data from '../../utils/data';

function ProductScreen() {
  const router = useRouter();
  const {slug} = router.query;
  const product = data.products.find(a => a.slug === slug);
  if(!product) {
    return (
      <div>Product Not Found</div>
    )
  }

  return (
    <>
    <Head>
      <title>{product.name} - Nexty Shop</title>
    </Head>
    <h1>
      {product.name}
    </h1>
    </>
  )
}

export default ProductScreen; 