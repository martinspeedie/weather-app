import React from 'react';
import tw from 'twin.macro';
import moment from 'moment';

// Styles
const CardWrapper = tw.div`cursor-pointer border border-gray-300 rounded flex flex-col justify-start items-center text-center p-6 bg-white`;

const DateWrapper = tw.div`text-base font-bold flex flex-col text-gray-900`;

const IconWrapper = tw.div`w-32 h-32 flex items-center justify-center`;

const WeatherText = tw.p`text-gray-700 mb-2 text-base `;

const TempWrapper = tw.div`text-xl font-bold text-gray-900 mb-6`;

const WeatherCard = ({ data }) => {
    if (!data) return null;

    const { applicable_date, weather_state_abbr, weather_state_name, min_temp, max_temp } = data;

    const showDate = (date) => {
        return moment(date).calendar(null, {
            lastDay: '[Yesterday]',
            sameDay: '[Today]',
            nextDay: '[Tomorrow]',
            lastWeek: '[last] dddd',
            nextWeek: 'dddd',
            sameElse: 'L',
        });
    };

    return (
        <CardWrapper>
            <DateWrapper>
                <span tw="uppercase">{showDate(applicable_date)}</span>
                <span tw="font-normal text-gray-700 text-sm">{applicable_date}</span>
            </DateWrapper>
            <IconWrapper>
                <img tw="h-20" src={`https://www.metaweather.com/static/img/weather/${weather_state_abbr}.svg`} />
            </IconWrapper>
            <WeatherText>{weather_state_name}</WeatherText>
            <TempWrapper>
                {Math.round(min_temp)}º<span tw="font-normal text-gray-400 mx-1">/</span>
                {Math.round(max_temp)}º
            </TempWrapper>
        </CardWrapper>
    );
};

export default WeatherCard;
