const CountryListItem = ({country},{onClick}) => {
    return (
    
        <li>{country.name.common}-{country.flag} - <button onClick={onClick}> Add to visited list </button> </li>
    );
}

export default CountryListItem;
//this should display the induvidual countries 