import { AppBar, Container, Link, Toolbar, Typography } from "@material-ui/core"
import { Person, ShoppingCart } from "@material-ui/icons"
import Head from "next/head"
import NextLink from 'next/link'
import useStyles from "../utils/styles"

const Layout = ({children}) => {
  const classes = useStyles();

  return (
    <div>
      <Head>
        <title>Nexty</title>
      </Head>
      <AppBar className={classes.navBar} position="static">
        <Toolbar>
          <NextLink href="/" passHref>
            <Link>
              <Typography className={classes.brand}>
                Nexty Shop
              </Typography>
            </Link>
          </NextLink>
          <div className={classes.grow}></div>
          <div>
            <NextLink href="/cart" passHref>
              <Link>
                <ShoppingCart />
              </Link>
            </NextLink>
            <NextLink href="/login" passHref>
              <Link>
                <Person/>
              </Link>
            </NextLink>
          </div>
        </Toolbar>
      </AppBar>
      <Container className={classes.main}>
        {children}
      </Container>
      <footer className={classes.footer}>
        <Typography>
          © 2022 - Nexty Shop.
        </Typography>
      </footer>
    </div>
  )
}

export default Layout
