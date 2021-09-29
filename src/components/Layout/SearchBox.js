import React from 'react';
import tw, { styled } from 'twin.macro';
import { connect } from 'react-redux';

// Local imports
import { getLocationSearch, getLocationWeather } from '../../state/actions/search';

// Styles
const SearchLI = tw.li`p-2`;

const SearchBoxLI = styled(SearchLI)`
    &:before {
        ${tw`absolute left-4 top-3.5 h-6 w-6 content[url(/svg/search.svg);]`};
    }
`;

const StyledInput = styled.input`
    ${tw`border-2 rounded h-8 w-full p-4 pl-10`};
`;

const SearchBox = ({ searchData, getLocationSearch, getLocationWeather }) => {
    const [location, setLocation] = React.useState('');

    React.useEffect(() => {
        if (location && location.length > 2) getLocationSearch(location);
    }, [location]);

    const onLocationInputChange = (event) => {
        setLocation(event.target.value);
    };

    const onSelectLocation = (woed) => {
        getLocationWeather(woed);
    };

    return (
        <div tw="rounded overflow-hidden shadow-lg lg:(mr-16)">
            <div tw="border-b-2 m-0"></div>
            <p tw="p-4">Select a location: </p>
            <div tw="mr-8 ml-4">
                <div tw="relative">
                    <div tw="rounded shadow-md my-2 relative">
                        <ul tw="">
                            <SearchBoxLI>
                                <StyledInput placeholder={`Search`} value={location} onChange={onLocationInputChange} />
                            </SearchBoxLI>
                            {searchData?.locations?.map((location) => (
                                <SearchLI key={location.woeid}>
                                    <p
                                        tw="p-2 block text-black hover:bg-blue-200 cursor-pointer"
                                        onClick={() => onSelectLocation(location.woeid)}
                                    >
                                        {location.title}
                                    </p>
                                </SearchLI>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

const mapStateToProps = ({ searchData }) => ({ searchData });

export default connect(mapStateToProps, { getLocationSearch, getLocationWeather })(SearchBox);
