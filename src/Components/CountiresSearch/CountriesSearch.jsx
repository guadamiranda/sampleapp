import { BsSearchHeart } from 'react-icons/bs'
import Button from "../Button/Button"
import { useState } from "react"
import './countriesSearch.scss'
import axios from 'axios';

const CountriesSearch = () => {
    const headerTitle = ['Bandera', 'Nombre', 'Capital', 'Continente']
    const [country, setCountry] = useState([]) 
    const [countryName, setCountryName] = useState('')
    const [countryExist, setCountryExist] = useState(false)

    const getCountryByName = async (name) => {
        try{
            const getCountry = await axios(`https://restcountries.com/v3.1/name/${name}?fullText=true`);
            setCountryExist(true)
            return getCountry.data

        } catch(error) {
            console.log(error)
            setCountryExist(false)
        }
    }

    const formatTable = async(name) => {
        const country = await getCountryByName(name)
        console.log(countryExist)

        if(countryExist === true){
            const newCountries = {
                flag: country[0].flags.png,
                name: country[0].name.common, 
                capital: country[0].capital,
                continent: country[0].continents[0]
            }
            
            setCountry(newCountries)
        }
        
    }

    return(
        <div className='countriesListContainer'>
            <div className='countriesListContainer__listContainer'>
                <div onClick={() => getCountryByName} className='countriesListContainer__searchContainer'>
                    <input className='countriesListContainer__input' placeholder='Ingresa un país a buscar' onChange={e => setCountryName(e.target.value)}></input>
                    <div onClick={() => formatTable(countryName)}>
                        <Button nombre='Buscar país' icono={<BsSearchHeart/>}></Button>
                    </div>
                </div>
                {country.length === 0 ? <></> : 
                    countryExist? 
                 <div>
                    <div className='countriesListContainer__listHeader'>
                        {headerTitle.map((title) => <div><b>{title}</b></div>)}
                    </div>
                    <div className='countriesListContainer__listBody'>
                        <div className='countriesListContainer__listItem'>
                            <div>
                                <img className='countriesListContainer__img' src={country.flag}></img>
                            </div>
                            <div>{country.name}</div>
                            <div>{country.capital}</div>
                            <div>{country.continent}</div>
                        </div>     
                    </div>
                </div> :
                <div className='countriesListContainer__listHeader'>El país no existe o esta mal escrito</div>
                }
            </div>
        </div>
    )
}

export default CountriesSearch