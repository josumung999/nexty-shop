import { AppBar, Badge, Container, createTheme, CssBaseline, IconButton, Link, Menu, MenuItem, Switch, ThemeProvider, Toolbar, Typography } from "@material-ui/core"
import { Person, ShoppingCart } from "@material-ui/icons"
import Cookies from "js-cookie"
import Head from "next/head"
import NextLink from 'next/link'
import { useContext, useState } from "react"
import { Store } from "../utils/Store"
import useStyles from "../utils/styles"
import { useRouter } from 'next/router';

const Layout = ({title, description, children}) => {
  const router = useRouter()
  const {state, dispatch} = useContext(Store);
  const {darkMode, cart, userInfo} = state;
  const theme = createTheme({
    typography: {
      h1: {
        fontSize: '1.6rem',
        fontWeight: 500,
        margin: '1rem 0',
      },
      h2: {
        fontSize: '1.6rem',
        fontWeight: 400,
        margin: '1rem 0'
      }
    },
    palette: {
      type: darkMode ? 'dark' : 'light',
      primary: {
        main: '#f0c000'
      },
      secondary: {
        main: '#208080'
      },
    }
  })
  const classes = useStyles();
  const darkModeChangeHandler = () => {
    dispatch({type: darkMode ? 'DARK_MODE_OFF' : 'DARK_MODE_ON' });
    const newDarkMode = !darkMode;
    Cookies.set('darkMode', newDarkMode ? 'ON': 'OFF');
  }

  const [anchorEl, setAnchorEl] = useState(null);
  const loginClickHandler = (e) => {
    setAnchorEl(e.currentTarget);
  }
  const loginMenuCloseHandler = () => {
    setAnchorEl(null);
  }
  const logoutClickHandler = () => {
    setAnchorEl(null);
    dispatch({ type: 'USER_LOGOUT' });
    Cookies.remove('userInfo');
    Cookies.remove('cartItem');
    router.push('/');
  };


  return (
    <div>
      <Head>
        <title>{title ? `${title} - Nexty Shop` : 'Nexty Shop'}</title>
        {description && <meta name="description" content={description}></meta>}
      </Head>
      <ThemeProvider theme={theme}>
        <CssBaseline />
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
              <Switch 
                checked={darkMode} 
                onChange={darkModeChangeHandler}
              ></Switch>
              <NextLink href="/cart" passHref>
                <Link>
                  <IconButton
                    edge="start"
                    color="inherit"
                    aria-label="menu"
                  >
                    {cart.cartItems.length > 0 ?
                      <Badge color="secondary" badgeContent={cart.cartItems.length}>
                        <ShoppingCart className={classes.menuIcon} />
                      </Badge> : <ShoppingCart className={classes.menuIcon} />
                    }  
                  </IconButton>
                </Link>
              </NextLink>
              {userInfo ? (
                <>
                  <IconButton
                    ria-controls="simple-menu"
                    aria-haspopup="true"
                    onClick={loginClickHandler}
                    className={classes.navbarButton}
                  >{userInfo.name}
                  </IconButton>
                  <Menu
                    id="simple-menu"
                    anchorEl={anchorEl}
                    keepMounted
                    open={Boolean(anchorEl)}
                    onClose={loginMenuCloseHandler}
                  >
                    <MenuItem onClick={loginMenuCloseHandler}>Profile</MenuItem>
                    <MenuItem onClick={loginMenuCloseHandler}>
                      My Account  
                    </MenuItem>
                    <MenuItem onClick={logoutClickHandler}>Logout</MenuItem>
                  </Menu>
                </>
              ) : (
                <NextLink href="/login" passHref>
                  <Link>
                    <IconButton
                      edge="start"
                      color="inherit"
                      aria-label="menu"
                    >
                      <Person className={classes.menuIcon} />
                    </IconButton>
                  </Link>
                </NextLink>
              )}
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
      </ThemeProvider>
    </div>
  )
}

export default Layout
