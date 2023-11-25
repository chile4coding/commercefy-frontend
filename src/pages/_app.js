import '@/styles/globals.css'
import Providers from '@/redux/Provider'

export default function App({ Component, pageProps }) {

 
    return (
      <Providers>
    
        <Component {...pageProps} />{" "}
      </Providers>
    );
}
