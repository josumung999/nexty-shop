import { AppBar, Container, Toolbar, Typography } from "@material-ui/core"
import Head from "next/head"
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
          <Typography>
            Nexty Shop
          </Typography>
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
