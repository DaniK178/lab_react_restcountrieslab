import CountryListItem from "./CountryListItem";

const CountriesList = ({countries}) => {

    //it is the {} that does the destructuring
    const countryListItems = countries.map((country, index)=> {
        return <CountryListItem country={country} key = {index}/>
    })
    return(
        <>
        <h2>CountriesList here!</h2>
        
        {countryListItems}

            
        </>
    );
}

export default CountriesList;