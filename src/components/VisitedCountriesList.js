
 import CountryListItem from "./CountryListItem";



const VisitedCountriesList = ({visitedCountries, selectCountry}) => {


    const visitedCountriesListItems = visitedCountries.map((country, index)=> {
     return( 
         <CountryListItem country={country} key = {index} selectCountry={selectCountry}/>)
    
         })

     return (
         <>
//           <h2>All the countries I've visited!</h2>
            <ul>
            {visitedCountriesListItems}
            </ul>

           
         </>
 );
 }

export default VisitedCountriesList;

//     <button onClick={addVisitedCountry}> Add to visited list </button>
    //    return <CountryListItem onClick = {country} key = {index}/>

    //    <button onclick = {handlevisitedCountries(country)} >Get visitedCountriesList </button>
    