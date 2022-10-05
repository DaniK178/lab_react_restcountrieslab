import CountryListItem from "./CountryListItem";
import VisitedCountriesList from "./VisitedCountriesList";

// const CountriesList = ({countries},{visitedCountriesList},{handlevisitedCountries})

const CountriesList = ({countries}) =>{
    // const VisitedCountriesList = visitedCountriesList
    // const handlevisitedCountries = handlevisitedCountries

    //it is the {} that does the destructuring
    const countryListItems = countries.map((country, index)=> {
        return <CountryListItem country={country} key = {index}/>
    })
    return(
        <>
        <h2>CountriesList here!</h2>
        
        
        {countryListItems}
        {/* <VisitedCountriesList/> */}

            
        </>
    );
}

export default CountriesList;