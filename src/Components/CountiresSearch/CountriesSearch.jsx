import { useEffect, useState } from "react"
import './countriesSearch.scss'
import axios from 'axios';

const CountriesSearch = () => {
    const headerTitle = ['Bandera', 'Nombre', 'Capital', 'Continente']
    const [filtredCountries, setFiltredCountries] = useState([])
    const [countryName, setCountryName] = useState('')
    const [countries, setCountries] = useState([]) 
    
    const getCountry = async () => {
        try{
            const getCountry = await axios('https://restcountries.com/v3.1/all');

            setCountries(getCountry.data)

        } catch(error) {
            console.log(error)
        }
    }

    const formatTable = async() => {
        const countryFilter = Object.values(countries).filter(country => country.name.common.toLowerCase().includes(countryName.toLowerCase()))

        const newCountries = countryFilter.map((countrie) => ({
            flag: countrie.flags.png,
            name: countrie.name.common, 
            capital: countrie.capital,
            continent: countrie.continents[0]})
        )

        setFiltredCountries(newCountries)
    }

    useEffect(() => {
        getCountry()
    }, [])

    useEffect(() => {
        formatTable()
    }, [countryName])

    return(
        <div className='countriesSearchContainer'>
            <div className='countriesSearchContainer__listContainer'>
                <div className='countriesSearchContainer__searchContainer'>
                    <input className='countriesSearchContainer__input' placeholder='Ingresa un país a buscar' onChange={e => setCountryName(e.target.value)}></input>
                </div>
                <div>
                    <div className='countriesSearchContainer__listHeader'>
                        {headerTitle.map((title) => <div><b>{title}</b></div>)}
                    </div>

                    <div className='countriesSearchContainer__listBody'>
                        {filtredCountries.map((country) => 
                            <div className='countriesSearchContainer__listItem'>
                                <div>
                                    <img className='countriesSearchContainer__img' src={country.flag}></img>
                                </div>
                                <div>{country.name}</div>
                                <div>{country.capital}</div>
                                <div>{country.continent}</div>
                            </div>   
                        )}  
                    </div> 
                </div> 
                
            </div>
        </div>
    )
}

export default CountriesSearch