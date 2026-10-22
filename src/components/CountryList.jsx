import { Row } from 'react-bootstrap'
import CountryCard from './CountryCard'

export default function CountryList({ countries }) {
  if (countries.length === 0) {
    return <p className='text-center'>Aucun pays trouvé</p>
  }

  return (
    <Row>
      {countries.map((country) => (
        <CountryCard key={country.alpha3Code} country={country} />
      ))}
    </Row>
  )
}
