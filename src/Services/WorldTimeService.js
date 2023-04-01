const getTimeApiLink = (place) => {
    return `${process.env.REACT_APP_TIME_API_URL}${place}&token=${process.env.REACT_APP_TIME_API_KEY}`;
};

const getTimeInPlace = async (place) => {
    const timeLink = getTimeApiLink(place);

    try {
        const result = await fetch(timeLink);
        const {
            data: {
                datetime: {
                    time,
                    day_full,
                    month_full,
                    day,
                    year,
                    offset_tzab,
                    offset_tzfull,
                    offset_tzid,
                    offset_gmt,
                    date_time_txt
                },
                timezone: {
                    country_name,
                    capital,
                    location,
                    currency_alpha_code,
                    currency_name,
                    phone_prefix
                }
            }
        } = await result.json();

        return {
            time,
            day_full,
            month_full,
            day,
            year,
            offset_tzab,
            offset_tzfull,
            offset_tzid,
            offset_gmt,
            country_name,
            capital,
            location,
            currency_alpha_code,
            currency_name,
            phone_prefix,
            date_time_txt
        };
    } catch (error) {
        return false;
    }
};

const WorldTimeService = {
    getTimeInPlace,
};

export default WorldTimeService;
