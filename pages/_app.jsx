import { useEffect } from 'react'
import '../styles/globals.css'
import { StoreProvider } from '../utils/Store';
import { SnackbarProvider } from 'notistack';

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    const jssStyles = document.querySelector('#iss-server-side');
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, [])
  return (
    <SnackbarProvider anchorOrigin={{ vertical: 'top', horizontal: 'center' }}>
      <StoreProvider>
        <Component {...pageProps} />
      </StoreProvider>
    </SnackbarProvider>
  )
}

export default MyApp
