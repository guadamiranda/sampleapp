import { useEffect, useState } from "react"
import './countriesList.scss'

const CountriesList = () => {
    const headerTitle = ['Bandera', 'Nombre', 'Capital', 'Continente']
    const [countries, setCountries] = useState([]) 
    console.log(countries)

    const getCountries = async () => {
        try{
            const response = await fetch('https://restcountries.com/v3.1/all');
            const allCountries = await response.json();
            return allCountries

        } catch(error) {
            console.log(error)
        }
    }

    const formatTable = async() => {
        const countriesList = await getCountries()
        console.log(countriesList)
        const newCountries = countriesList.map((countrie) => ({
            flag: countrie.flags.png,
            name: countrie.name.common, 
            capital: countrie.capital,
            continent: countrie.continents[0]})
        )

        setCountries(newCountries)
    }
    

    useEffect(() => {
        formatTable()
    }, [])

    return(
        <div className='countriesListContainer'>
            <div className='countriesListContainer__listContainer'>
                <div className='countriesListContainer__listHeader'>
                    {headerTitle.map((title) => <div><b>{title}</b></div>)}
                </div>
                <div>
                    {countries.map((country) => {
                        {country.name}
                    })}
                </div>
            </div>

        </div>
    )
}

export default CountriesList