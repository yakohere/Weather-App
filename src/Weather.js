import styled from "styled-components"

const Weather = (props) => {
    return (
        <Wrapper>
            <p className="date">{props.date}</p>

            <img src={`http://openweathermap.org/img/wn/${props.icon}@2x.png`} alt="weather-icon" />

            <div className="weather-title">
                <b>{props.title}</b>
            </div>

            <div className="degree">
                <p className="max">{props.max}°</p>
                <p className="min">{props.min}°</p>
            </div>
        </Wrapper>
    )
}

export default Weather

export const Wrapper = styled.div`
    background-color: bisque;
    width: 100%;
    min-height: 200px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    border-radius: 16px;
    padding: 10px;
    box-sizing: border-box;

    .weather-title {
        margin-bottom: 20px;
    }

    .degree {
        display: flex;
        gap: 20px;
        font-size: 24px;
        margin-top: -35px;

        .max {
            color: rgba(0,0,0,0.7);
        }

        .min {
            color: rgba(0,0,0,0.4);
        }
    }

    .date {
        font-weight: bold;
        color: rgba(0,0,0,0.5);
        margin-bottom: -10px;
    }
`;