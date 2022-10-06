const CountryListItem = ({country, addVisitedCountry}) => {

    const handleClick = () => {
        addVisitedCountry(country)
    }


    return (
    
        <li> {country.name.common}-{country.flag} 
         <button onClick={handleClick}>Add to visited!</button>
        
        </li>
    );
}

export default CountryListItem;
//this should display the induvidual countries 

//<li>{country.name.common}-{country.flag} - <button onClick={onClick}> Add to visited list </button> </li>

{/* <li id={index}>{displayCountry} <button onClick= {handleClick}> {status} </button></li>
</> */}