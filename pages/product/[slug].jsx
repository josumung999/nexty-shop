import { Box, Button, Card, Grid, Link, List, ListItem, Typography } from '@material-ui/core';
import NextLink from 'next/link'
import { useRouter } from 'next/router';
import React from 'react'
import Layout from '../../components/Layout';
import data from '../../utils/data';
import Image from 'next/image';

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
    <Layout title={product.name} description={product.description}>
      <Box style={{ marginTop: '2rem' }}>
        <NextLink href="/" passHref>
          <Link>
            <Typography>
              Back to Products
            </Typography>
          </Link>
        </NextLink>
        <Grid container spacing={1}>
          <Grid item md={6} xs={12}>
            <Image
              alt={product.name}
              src={product.image}
              width={640}
              height={640}
              layout='responsive'
            />
          </Grid>
          <Grid item md={3} xs={12} >
            <List>
              <ListItem>
                <Typography component='h1' variant='h5'>
                  {product.name}
                </Typography>
              </ListItem>
              <ListItem>
                <Typography>
                  Category: {product.category}
                </Typography>
              </ListItem>
              <ListItem>
                <Typography>
                  Brand: {product.brand}
                </Typography>
              </ListItem>
              <ListItem>
                <Typography color="initial">
                  Rating: {product.rating} stars ({product.numReviews} reviews)
                </Typography>
              </ListItem>
              <ListItem>
                <Typography color="initial">
                  {`Description: ${product.description}`}
                </Typography>
              </ListItem>
            </List>
          </Grid>
          <Grid item md={3} xs={12}>
            <Card>
              <List>
                <ListItem>
                  <Grid container>
                    <Grid item xs={6}>
                      <Typography >
                        Price
                      </Typography>
                    </Grid>
                    <Grid item xs={6}>
                      <Typography variant='h6' color='text.secondary'>
                        $ {product.price}
                      </Typography>
                    </Grid>
                  </Grid>
                </ListItem>
                <ListItem>
                  <Grid container>
                    <Grid item xs={6}>
                      <Typography >
                        Status
                      </Typography>
                    </Grid>
                    <Grid item xs={6}>
                      {product.countInStock > 0 ? 
                        <Typography variant='h6' color='secondary'>In Stock</Typography> :
                        <Typography variant='h6' color='primary'>Out of Stock</Typography>
                      }
                    </Grid>
                  </Grid>
                </ListItem>
                <ListItem>
                  <Button fullWidth variant='contained' color="primary">
                    Add to cart
                  </Button>
                </ListItem>
              </List>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </Layout>
  )
}

export default ProductScreen; 