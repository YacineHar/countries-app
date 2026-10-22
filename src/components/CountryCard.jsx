import { Card, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export default function CountryCard({ country }) {
  return (
    <Col xs={12} sm={6} md={4} lg={3} className='mb-4'>
      <Card as={Link} to={`/country/${country.alpha3Code}`} className='h-100 text-decoration-none text-dark shadow-sm'>
        <Card.Img
          variant='top'
          src={country.flags.svg}
          alt={'Drapeau de ' + country.name}
          loading='lazy'
          style={{ height: '160px', objectFit: 'cover' }}
        />
        <Card.Body>
          <Card.Title>{country.name}</Card.Title>
          <Card.Text className='mb-1'><strong>Capitale :</strong> {country.capital || 'Aucune'}</Card.Text>
          <Card.Text><strong>Région :</strong> {country.region}</Card.Text>
        </Card.Body>
      </Card>
    </Col>
  )
}
