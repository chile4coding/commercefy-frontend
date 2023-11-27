import '@/styles/globals.css'
import Providers from '@/redux/Provider'
import "react-toastify/dist/ReactToastify.css";

export default function App({ Component, pageProps }) {

 
    return (
      <Providers>
    
        <Component {...pageProps} />{" "}
      </Providers>
    );
}
