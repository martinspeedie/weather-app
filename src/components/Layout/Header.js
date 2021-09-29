import React from 'react';
import tw from 'twin.macro';

// Local imports
import WeatherIcon from 'public/svg/weather.svg';

// Components
import Container from './Container';

// Styles
const LogoWrapper = tw.div`bg-blue-200 p-4 mb-8`;

const StyledContainer = tw(Container)`flex items-center`;
const StyledWeatherIcon = tw(WeatherIcon)`height[2.5rem]`;

const Title = tw.div`font-bold ml-3 text-lg text-yellow-500 lg:(text-3xl)`;

const Header = () => {
    return (
        <LogoWrapper>
            <StyledContainer>
                <StyledWeatherIcon />
                <Title>The Weather App</Title>
            </StyledContainer>
        </LogoWrapper>
    );
};

export default Header;
