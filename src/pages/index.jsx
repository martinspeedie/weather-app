import Head from 'next/head';
import tw from 'twin.macro';
import { connect } from 'react-redux';

// Components
import Header from 'src/components/Layout/Header';
import Container from 'src/components/Layout/Container';
import SearchBox from 'src/components/Layout/SearchBox';
import Weather from 'src/components/Layout/Weather';

// Styles
const SearchWrapper = tw.div`flex flex-col mb-6 lg:(flex-row mb-0)`;

const Home = ({ searchData }) => {
    return (
        <div>
            <Head>
                <title>The Weather App</title>
                <meta name="description" content="The Weather App" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Header />

            <Container>
                <main>
                    <SearchWrapper>
                        <SearchBox />
                        <Weather />
                    </SearchWrapper>
                </main>
            </Container>
        </div>
    );
};

const mapStateToProps = ({ searchData }) => ({ searchData });

export default connect(mapStateToProps)(Home);
