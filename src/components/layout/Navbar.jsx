import { FaGithub } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

function Navbar({ title }) {
  return (
    <nav className='navbar mb-12 text-neutral-content'>
      <div className='flex justify-center container mx-auto'>
        <div className='flex-none px-2 mx-2'>
          <FaGithub size={'43px'} className='inline pr-2' />
          <Link to='/' className='font-mono text-2xl font-bold align-middle'>
            {title}
          </Link>
        </div>
      </div>
    </nav>
  )
}

Navbar.defaultProps = {
  title: 'Github Finder',
}

Navbar.propTypes = {
  title: PropTypes.string,
}

export default Navbar
