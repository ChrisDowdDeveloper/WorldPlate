import countriesData from '../utils/countries.json';
import CountryCard from "../components/cards/CountryCard";

export default async function CountriesPage() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-3">
            {countriesData.countries.map(country => (
                <CountryCard key={country.id} country={country}/>
            ))}
        </div>
    );
}
