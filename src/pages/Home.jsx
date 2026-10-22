import { useEffect, useState } from 'react'
import { Container, Alert } from 'react-bootstrap'
import Filters from '../components/Filters'
import CountryList from '../components/CountryList'
import { getAllCountries, getCountriesByName, getCountriesByRegion } from '../services/countries'

export default function Home() {
  const [countries, setCountries] = useState([])
  const [search, setSearch] = useState('')
  const [region, setRegion] = useState('')
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    const fetchCountries = async () => {
      setLoading(true)
      setError('')

      try {
        let data
        if (search.trim() !== '') {
          data = await getCountriesByName(search.trim())
          if (region !== '') {
            data = data.filter((country) => country.region === region)
          }
        } else if (region !== '') {
          data = await getCountriesByRegion(region)
        } else {
          data = await getAllCountries()
        }
        setCountries(data)
      } catch (err) {
        setError(err.message)
      }

      setLoading(false)
    }

    fetchCountries()
  }, [search, region])

  return (
    <Container>
      <h1 className='mb-4'>Liste des pays</h1>
      <Filters search={search} setSearch={setSearch} region={region} setRegion={setRegion} />

      {loading && <p className='text-center'>Chargement...</p>}

      {error && <Alert variant='danger'>{error}</Alert>}

      {!loading && !error && (
        <>
          <p className='text-muted'>{countries.length} pays</p>
          <CountryList countries={countries} />
        </>
      )}
    </Container>
  )
}
