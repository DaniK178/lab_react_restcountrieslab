const CountryListItem = ({country},{onClick}) => {
    return (
    
        <li>{country.name.common}-{country.flag} </li>
    );
}

export default CountryListItem;
//this should display the induvidual countries 