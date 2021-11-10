import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router"
import styled, { css } from "styled-components"
import Weather from "./Weather"

const WeatherHourly = (props) => {
    const { date } = useParams();
    const [hourly, setHourly] = useState([])
    const forecast = useSelector(state => state.global.forecast)

    useEffect(() => {
        const data = forecast.filter(e => e.date === date);
        setHourly(data[0]?.hourly)
    }, [date, forecast])

    return (
        <>
            <Title>Hourly Forecast in {date}</Title>
            <WeatherWrapper>
                {
                    hourly?.map((e, i) => {
                        return (
                            <Weather
                                key={i}
                                date={e.dt_txt.substring(10, 19)}
                                icon={e.weather[0].icon}
                                max={e.main.temp_max}
                                min={e.main.temp_min}
                                title={e.weather[0].main}
                            />
                        )
                    })
                }
            </WeatherWrapper>
        </>
    )
}

export default WeatherHourly

export const gridStyle = css`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    place-items: center;
    gap: 20px;
    padding: 20px 100px;
`

const WeatherWrapper = styled.div`
    ${gridStyle}
`;

export const Title = styled.h1`
    text-align: center;
    font-size: 48px;
    margin-top: 80px;
`