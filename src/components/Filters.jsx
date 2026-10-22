import { Row, Col, Form } from 'react-bootstrap'

const regions = ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania']

export default function Filters({ search, setSearch, region, setRegion }) {
  return (
    <Row className='mb-4'>
      <Col md={8} className='mb-2'>
        <Form.Control
          type='text'
          placeholder='Rechercher un pays...'
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </Col>
      <Col md={4}>
        <Form.Select value={region} onChange={(e) => setRegion(e.target.value)}>
          <option value=''>Toutes les régions</option>
          {regions.map((item) => (
            <option key={item} value={item}>{item}</option>
          ))}
        </Form.Select>
      </Col>
    </Row>
  )
}
