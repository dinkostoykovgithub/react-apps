import { MainLayout } from "../Layouts";
import { Banner } from "../Components/Banner";
import WorldTimeBanner from "../imgs/time/world-time.png";
import { useState, useEffect } from "react";

import WorldTimeService from "../Services/WorldTimeService";

import timezones from 'google-timezones-json';

const timezonesList = Object.keys(timezones)

const initTime = {
    time: "",
    day_full: "",
    month_full: "",
    day: "",
    year: "",
    offset_tzab: "",
    offset_tzfull: "",
    offset_tzid: "",
    country_name: "",
    capital: "",
    location: "",
    currency_alpha_code: "",
    currency_name: "",
    phone_prefix: "",
    offset_gmt: "",
    date_time_txt: ""
};

const WorldTimePage = () => {
    const [time, setTime] = useState(initTime);
    const [error, setError] = useState(false);
    const [place, setPlace] = useState("Europe/Sofia");

    const getTime = async () => {
        const timeData = await WorldTimeService.getTimeInPlace(place);

        if (timeData) {
            setTime(timeData);
            setError(false);
        } else {
            setTime(initTime);
            setError(true);
        }
    };
    
    useEffect(() => {
        getTime();
    }, []);

    const onPlaceChange = ({ target: { value } }) => {
        setPlace(value);
    };

    const handleSubmit = () => {
        getTime();
    };

    return (
        <MainLayout>
            <h1>World Time</h1>
            <div className="row">
                {error && (
                    <div className="col-12">
                        <div className="msg error-msg">Place is not found</div>
                    </div>
                )}

                <div className="col-12 col-md-3 col-sm-6">
                    <div className="form world-time-form">
                        <div className="form__row">
                            <label
                                htmlFor="search-time-by-place"
                                className="form__label"
                            >
                                Select Timezone
                            </label>
                        </div>
                        <div className="form__row">
                            <select
                                className="form__select"
                                onChange={onPlaceChange}
                            >
                                <option hidden value={place} name="place">
                                    {place}
                                </option>
                                {timezonesList.map((place, index) => {
                                    return (
                                        <option
                                            value={place}
                                            key={index}
                                        >
                                            {place}
                                        </option>
                                    )
                                })}
                            </select>
                        </div>
                        
                        <div className="form__row">
                            <button
                                className="button button-primary form__button"
                                onClick={handleSubmit}
                            >
                                Get time
                            </button>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-12 col-sm-6">
                        <div className="time">
                            <div className="time__clock">
                                <span className="icon clock-icon icon-100"></span>
                                <p className="time__current-time">
                                    {time.time}
                                </p>
                                
                                <p>
                                    {time.offset_tzfull !== null && (
                                        time.offset_tzfull
                                    )
                                    } 
                                    ({time.offset_tzab})
                                </p>
                                <p>{time.day_full}, {time.day} {time.month_full} {time.year}</p>
                            </div>
                            <ul className="time__table">
                                {time.country_name && (
                                    <li>
                                        <span className="time__table-col">
                                            Country:
                                        </span>
                                        <span className="time__table-col">
                                            {time.country_name}
                                        </span>
                                    </li>
                                )}
                                
                                {time.capital && (
                                    <li>
                                        <span className="time__table-col">
                                            Capital:
                                        </span>
                                        <span className="time__table-col">
                                            {time.capital}
                                        </span>
                                    </li>
                                )}
                                {time.location && (
                                    <li>
                                        <span className="time__table-col">
                                            Lat / Long:
                                        </span>
                                        <span className="time__table-col">
                                            {time.location}
                                        </span>
                                    </li>
                                )}
                                {time.currency_name && (
                                    <li>
                                        <span className="time__table-col">
                                            Currency:
                                        </span>
                                        <span className="time__table-col">
                                            {time.currency_name} ({time.currency_alpha_code})
                                        </span>
                                    </li>
                                )}
                                {time.phone_prefix && (
                                    <li>
                                        <span className="time__table-col">
                                            Country Code:
                                        </span>
                                        <span className="time__table-col">
                                            +{time.phone_prefix}
                                        </span>
                                    </li>
                                )}
                                {time.offset_gmt && (
                                    <li>
                                        <span className="time__table-col">
                                            Current Offset:
                                        </span>
                                        <span className="time__table-col">
                                            UTC/GMT {time.offset_gmt}
                                        </span>
                                    </li>

                                )

                                }
                                {time.date_time_txt && (
                                    <li className="centered">
                                        <span>{time.date_time_txt}</span>
                                    </li>
                                )}
                            </ul>
                        </div>
                    </div>
                    <div className="col-12 col-sm-6">
                        <Banner
                            bannerImgSrc={WorldTimeBanner}
                            bannerImgAlt="World Time Banner"
                            bannerImgTitle="World Time Banner"
                        />{" "}
                    </div>
                </div>
            </div>
        </MainLayout>
    );
};

export default WorldTimePage;
