import { AppBar, Container, Toolbar, Typography } from "@material-ui/core"
import Head from "next/head"

const Layout = ({children}) => {
  return (
    <div>
      <Head>
        <title>Nexty</title>
      </Head>
      <AppBar position="static">
        <Toolbar>
          <Typography>
            Nexty Shop
          </Typography>
        </Toolbar>
      </AppBar>
      <Container>
        {children}
      </Container>
      <footer>
        <Typography>
          © 2022 - Nexty Shop.
        </Typography>
      </footer>
    </div>
  )
}

export default Layout
