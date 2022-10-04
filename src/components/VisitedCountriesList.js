import CountryListItem from "./CountryListItem";

const VisitedCountriesList = (vistedCountries) => {
    // const vistedCountriesListItems = countries.map((country, index)=> {
    //     return <CountryListItem country={country} key = {index}/>
    //}

    return(
        <>
            <h2>All the countries I've visited!</h2>
            
            {CountryListItem}

           
        </>
    );
}

export default VisitedCountriesList;