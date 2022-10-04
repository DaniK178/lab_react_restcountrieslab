import { useState, useEffect } from "react";

import CountriesList from "../components/CountriesList";
import VisitedCountriesList from "../components/VisitedCountriesList";

const CountriesContainer = () => {

    const [countries, setCountries] = useState([]);

    const fetchCountries = () => {
        console.log("Getting some country data");
        // fetch data from the RESTCountries API
        // set the countries state to the result of the API call
        // pass it down to relevant components
    }

    useEffect(() => {
        fetchCountries();
        // right now it just logs out message
        // it need to fetch data, and load data, using the josn in the example
    }, [])


    return(
        <>
            <h1>I'm a country container!</h1>
            {/* i can remove this header */}
            <CountriesList />
            <VisitedCountriesList/>
        </>
    );
}

export default CountriesContainer;