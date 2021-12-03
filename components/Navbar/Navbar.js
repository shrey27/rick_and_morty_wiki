import { Link, Flex } from 'rebass';
import ActiveLink from './ActiveLink';

export default function Navbar() {
  return (
    <>
      <style jsx>{`
        .nav-head {
          text-decoration: none;
          color:black;
        }
        .nav-link {
          text-decoration: none;
          padding: 0rem 1rem 0.5rem;
          font-size: 1.25rem;
          color: rgba(0, 0, 0, 0.55);
          transition: all 300ms;
        }
        @media screen and (max-width: 768px) {
          .nav-link {
            font-size: 1rem;
          }
        }
        .active.nav-link:hover {
          color: #0b5ed7;
        }
        .nav-link:hover {
          color: rgba(0, 0, 0, 1);
        }
        .active {
          color: #0b5ed7;
          font-weight: bold;
          border-bottom: 3px solid #0b5ed7;
        }
      `}</style>
      <Flex
        px={[1, 6]}
        py={[2]}
        flexDirection={['column', 'column', 'column', 'row']}
        alignItems={['center']}
        justifyContent='space-between'
        backgroundColor='#f8f9fa'
      >
        <Link
          href='/'
          fontSize={['1.3rem', '1.5rem', '1.5rem', '1.75rem']}
          py={['0.5rem', '1rem']}
          color={'black'}
          sx={{
            textDecoration: 'none',
          }}
        >
          <a className='nav-head'>Rick & Morty </a>
          <span style={{ color: '#0d6efd' }}>Wiki</span>
        </Link>

        <Flex alignItems='center' justifyContent='center' pt={2}>
          <ActiveLink activeClassName='active' href='/'>
            <a className='nav-link'>Characters</a>
          </ActiveLink>

          <ActiveLink activeClassName='active' href='/episode'>
            <a className='nav-link'>Episodes</a>
          </ActiveLink>

          <ActiveLink activeClassName='active' href='/location'>
            <a className='nav-link'>Locations</a>
          </ActiveLink>
        </Flex>
      </Flex>
    </>
  );
}
