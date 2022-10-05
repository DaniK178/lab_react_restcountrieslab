import { useState, useEffect } from "react";

import CountriesList from "../components/CountriesList";
import VisitedCountriesList from "../components/VisitedCountriesList";

const CountriesContainer = () => {

    const [countries, setCountries] = useState([]);

    const fetchCountries = () => {
        //console.log("Getting some country data");
        // fetch data from the RESTCountries 
        fetch ("https://restcountries.com/v3.1/all")
        // set the countries state to the result of the API call
        .then((response) => response.json())
        // pass it down to relevant components
        .then((response) =>setCountries(response));
    }

    useEffect(() => {
        fetchCountries();
        // right now it just logs out message
        // it need to fetch data, and load data, using the josn in the example
    }, [])

    const [visitedCountries, setVistedCountries] = useState ([]);

    const addVisitedCountry = (newCountry) => {
        const newVisitedList = [...visitedCountries, newCountry]
         setVistedCountries(newVisitedList)
        
    }


    return(
        <>
            <h1>I'm a country container!</h1>
            {/* i can remove this header */}
            <CountriesList 
            countries={countries} 
            visitedCountriesList = {VisitedCountriesList}
            handlevisitedCountries={addVisitedCountry}/>
            
            <VisitedCountriesList 
            // addVisitedCountry = {addVisitedCountry} 
            // countries = {countries}
            /> 
        </>
    );
}

export default CountriesContainer;