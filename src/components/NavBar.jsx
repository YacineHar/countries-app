import { Container, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import globe from '../assets/globe.svg'

export default function NavBar() {
  return (
    <Navbar bg='primary' variant='dark' className='mb-4'>
      <Container>
        <Navbar.Brand as={Link} to='/'>
          <img src={globe} alt='' width='24' className='me-2 mb-1' />
          Pays du monde
        </Navbar.Brand>
      </Container>
    </Navbar>
  )
}
