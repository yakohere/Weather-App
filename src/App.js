import { useEffect, useState } from "react";
import styled from "styled-components"
import { api } from "./axios";
import { Routes, Route } from "react-router-dom"
import WeatherDateList from "./WeatherDateList";
import WeatherHourly from "./WeatherHourly";
import { useDispatch } from "react-redux";
import { fetchForecast } from "./store/globalSlice";

const App = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchForecast())
    }, [dispatch])

    return (
        <Wrapper>
            <Routes>
                <Route path="/" element={<WeatherDateList />} />
                <Route path="/:date" element={<WeatherHourly />} />
            </Routes>
        </Wrapper>
    );
}

export default App;

const Wrapper = styled.div`

`;