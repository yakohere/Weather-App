import styled from "styled-components"
import { Wrapper } from "./Weather"

const WeatherDaily = (props) => {
    return (
        <StyledWrapper>
            <p className="date">{props.date}</p>

            <table>
                <tr>
                    <td>
                        <img src={`http://openweathermap.org/img/wn/${props?.icons[0]}.png`} alt="weather-icon" />
                    </td>
                    <td> - </td>
                    <td>
                        <img src={`http://openweathermap.org/img/wn/${props?.icons[1]}.png`} alt="weather-icon" />
                    </td>
                    <td> - </td>
                    <td>
                        <img src={`http://openweathermap.org/img/wn/${props?.icons[2]}.png`} alt="weather-icon" />
                    </td>
                </tr>
                <tr className="weather-title">
                    <td></td>
                    <td></td>
                    <td>{props.main}</td>
                </tr>

                <tr className="max">
                    <td>{props?.maxDegrees[0]}°</td>
                    <td> - </td>
                    <td>{props?.maxDegrees[1]}°</td>
                    <td>- </td>
                    <td>{props?.maxDegrees[2]}°</td>
                </tr>

                <tr className="min">
                    <td>{props?.minDegrees[0]}°</td>
                    <td> - </td>
                    <td>{props?.minDegrees[1]}°</td>
                    <td>- </td>
                    <td>{props?.minDegrees[2]}°</td>
                </tr>
            </table>
        </StyledWrapper >
    )
}

export default WeatherDaily


const StyledWrapper = styled(Wrapper)`

    padding-bottom: 20px;
    
    table {
        tr {
            td {
                text-align: center;
            }
        }
    }

    .weather-images {
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 10px 0;

        display: grid;
        grid-template-columns: repeat(5, 1fr);
    }

    .min, .max {
        font-size: 18px;
    }

    .weather-title {
        td {
            padding: 10px 0;
        }
    }
`;