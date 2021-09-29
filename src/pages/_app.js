import { Provider as StateProvider } from 'react-redux';

// Local imports
import { store } from '../state/store';
import GlobalStyles from '../styles/GlobalStyles';

function MyApp({ Component, pageProps }) {
    return (
        <div>
            <GlobalStyles />
            <StateProvider store={store}>
                <Component {...pageProps} />
            </StateProvider>
        </div>
    );
}

export default MyApp;
