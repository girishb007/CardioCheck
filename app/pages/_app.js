/**
 *
 * TODO: Inject the styles defined into this root app
 */

import { Provider } from 'react-redux';
import Head from 'next/head';
import App from 'next/app';
import { CookiesProvider } from 'react-cookie';
import withReduxStore from '../src/store/lib/with-redux-store';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.css';
import 'react-bootstrap-table2-paginator/dist/react-bootstrap-table2-paginator.min.css';
import '../src/styles/main.css';
import '../src/styles/auth.css';
import '../src/styles/app.css';
import '../src/styles/home.css';
import '../src/styles/popup.css';
import '../src/styles/fileUpload.css';
import '../src/styles/checkScore.css';
import '../src/styles/visualization.css';

function MyApp({ Component, pageProps, store }) {
    return (
        <CookiesProvider>
            <Head>
                <link
                    rel="shortcut icon"
                    href="/favicon.ico"
                    type="image/x-icon"
                />
            </Head>
            <Provider store={store}>
                <Component {...pageProps} />
            </Provider>
        </CookiesProvider>
    );
}

export default withReduxStore(MyApp);
