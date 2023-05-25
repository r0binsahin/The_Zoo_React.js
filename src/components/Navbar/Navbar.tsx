import { Link } from 'react-router-dom';
import './Navbar.scss';

export const Navbar = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to='/' style={{ textDecoration: 'none', color: 'white' }}>
              | start |
            </Link>
          </li>
          <li>
            <Link
              to='/animals'
              style={{ textDecoration: 'none', color: 'white' }}
            >
              | våra djur |
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
};
