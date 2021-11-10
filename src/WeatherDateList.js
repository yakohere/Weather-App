import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components"
import WeatherDaily from "./WeatherDaily";
import { gridStyle, Title } from "./WeatherHourly";

const WeatherDateList = () => {
    const forecast = useSelector(state => state.global.forecast)
    return (
        <>
            <Title>{forecast.length} days Forecast</Title>
            <WeatherListWrapper>
                {
                    forecast.map((e, i) =>
                        <Link
                            to={`/${e.date}`}
                            onClick={() => console.log(e)}
                            key={i}
                        >
                            <WeatherDaily
                                date={e.date}
                                icon={e.hourly[0].weather[0].icon}
                                main={e.main}
                                maxDegrees={e.maxDegrees}
                                minDegrees={e.minDegrees}
                                icons={e.icons}
                            />
                        </Link>
                    )}
            </WeatherListWrapper>
        </>
    )
}

export default WeatherDateList

const WeatherListWrapper = styled.div`
    ${gridStyle};
    gap: 20px;

    a {
        background-color: bisque;
        text-decoration: none;
        border-radius: 10px;
        font-size: 24px;
        color: rgba(0,0,0,0.5);
        transition: .3s;
        width: 100%;

        :hover {
            transform: scale(1.05);
        }
    }
`;