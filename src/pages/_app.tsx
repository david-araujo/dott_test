import type { AppProps } from 'next/app'
import GlobalStyle from '../styles/GlobalStyle'
import { storeWrapper } from "../store";

const MyApp: React.FC<AppProps> = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Component {...pageProps} />
      <GlobalStyle />
    </>
  )
}

export default storeWrapper.withRedux(MyApp);
