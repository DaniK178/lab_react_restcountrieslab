import CountryListItem from "./CountryListItem";

// const CountriesList = ({countries},{visitedCountriesList},{handlevisitedCountries})

const CountriesList = ({countries, selectedCountry, addVisitedCountry}) =>{
    

    //it is the {} that does the destructuring
    const countryListItems = countries.map((country, index)=> {
        return <CountryListItem 
            country={country} 
            key = {index}
            selectedCountry = {selectedCountry}
            addVisitedCountry = {addVisitedCountry}/>
    })
    return(
        <>
        <h2>CountriesList here!</h2>
        
        <ul>
        {countryListItems}
        {/* <VisitedCountriesList/> */}
        </ul>
            
        </>
    );
}

export default CountriesList;