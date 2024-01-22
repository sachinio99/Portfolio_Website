import "../main.scss";
import {Layout} from "../layout/index";

import { AppProps } from 'next/app';

export const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
};

export default App;