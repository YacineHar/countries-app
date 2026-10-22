import { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { Container, Row, Col, Alert, ListGroup } from 'react-bootstrap'
import { getCountryByCode } from '../services/countries'
import arrowLeft from '../assets/arrow-left.svg'

export default function CountryDetail() {
  const { code } = useParams()
  const [country, setCountry] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    const fetchCountry = async () => {
      setLoading(true)
      setError('')

      try {
        const data = await getCountryByCode(code)
        setCountry(data)
      } catch (err) {
        setError(err.message)
      }

      setLoading(false)
    }

    fetchCountry()
  }, [code])

  if (loading) {
    return <p className='text-center'>Chargement...</p>
  }

  if (error) {
    return (
      <Container>
        <Alert variant='danger'>{error}</Alert>
        <Link to='/' className='btn btn-outline-primary'>Retour</Link>
      </Container>
    )
  }

  return (
    <Container>
      <Link to='/' className='btn btn-outline-primary mb-4'>
        <img src={arrowLeft} alt='' width='16' className='me-2 mb-1' />
        Retour
      </Link>
      <Row>
        <Col md={6} className='mb-4'>
          <img src={country.flags.svg} alt={'Drapeau de ' + country.name} className='img-fluid border' />
        </Col>
        <Col md={6}>
          <h1>{country.name}</h1>
          <p className='text-muted'>{country.nativeName}</p>
          <ListGroup>
            <ListGroup.Item><strong>Capitale :</strong> {country.capital || 'Aucune'}</ListGroup.Item>
            <ListGroup.Item><strong>Région :</strong> {country.region}</ListGroup.Item>
            <ListGroup.Item><strong>Sous-région :</strong> {country.subregion}</ListGroup.Item>
            <ListGroup.Item><strong>Population :</strong> {country.population.toLocaleString('fr-FR')}</ListGroup.Item>
            <ListGroup.Item><strong>Superficie :</strong> {country.area ? country.area.toLocaleString('fr-FR') + ' km²' : 'Inconnue'}</ListGroup.Item>
            <ListGroup.Item>
              <strong>Langues :</strong> {country.languages ? country.languages.map((langue) => langue.name).join(', ') : 'Inconnues'}
            </ListGroup.Item>
            <ListGroup.Item>
              <strong>Monnaies :</strong> {country.currencies ? country.currencies.map((monnaie) => monnaie.name).join(', ') : 'Inconnues'}
            </ListGroup.Item>
          </ListGroup>
        </Col>
      </Row>
    </Container>
  )
}
