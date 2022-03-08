import { AppBar, Container, IconButton, Link, Toolbar, Typography } from "@material-ui/core"
import { Person, ShoppingCart } from "@material-ui/icons"
import Head from "next/head"
import NextLink from 'next/link'
import useStyles from "../utils/styles"

const Layout = ({title, description, children}) => {
  const classes = useStyles();

  return (
    <div>
      <Head>
        <title>{title ? `${title} - Nexty Shop` : 'Nexty Shop'}</title>
        {description && <meta name="description" content={description}></meta>}
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
                <IconButton
                  size="large"
                  edge="start"
                  color="inherit"
                  aria-label="menu"
                >
                  <ShoppingCart className={classes.menuIcon} />
                </IconButton>
              </Link>
            </NextLink>
            <NextLink href="/login" passHref>
              <Link>
                <IconButton
                  size="large"
                  edge="start"
                  color="inherit"
                  aria-label="menu"
                >
                  <Person className={classes.menuIcon} />
                </IconButton>
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
