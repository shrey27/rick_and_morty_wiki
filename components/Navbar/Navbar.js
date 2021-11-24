import { Link, Flex, Button } from 'rebass';
import styles from '../../styles/common.module.css';

export default function Navbar() {
  return (
    <Flex
      px={[1, 6]}
      py={[2]}
      flexDirection={['column', 'column', 'row']}
      alignItems={['center']}
      justifyContent='space-between'
      sx={{
        backgroundColor: '#f8f9fa',
      }}
    >
      <Link
        href='/'
        fontSize={['1.3rem', '1.5rem', '1.75rem']}
        py={['0.5rem', '1rem']}
      >
        <a className={styles.logoStyle}>
          Rick & Morty <span style={{ color: '#0d6efd' }}>Wiki</span>
        </a>
      </Link>

      <Flex
        alignItems='center'
        justifyContent='center'
      >
        <Link
          href='/'
          fontSize={['1rem', '1.1rem', '1.3rem']}
          px='1rem'
          sx={{
            color: 'rgba(0, 0, 0, 0.55)',
            transition: 'all 300ms',
            ':hover,focus': {
              color: '#0b5ed7',
              paddingBottom: '0.5rem',
              borderBottom: '3px solid #0b5ed7',
            },
          }}
        >
          Characters
        </Link>
        <Link
          href='/episodes'
          px='1rem'
          fontSize={['1rem', '1.1rem', '1.3rem']}
          sx={{
            color: 'rgba(0, 0, 0, 0.55)',
            transition: 'all 300ms',
            ':hover,focus': {
              color: '#0b5ed7',
              paddingBottom: '0.5rem',
              borderBottom: '3px solid #0b5ed7',
            },
          }}
        >
          Episodes
        </Link>
        <Link
          href='/locations'
          px='1rem'
          fontSize={['1rem', '1.1rem', '1.3rem']}
          sx={{
            color: 'rgba(0, 0, 0, 0.55)',
            transition: 'all 300ms',
            ':hover,focus': {
              color: '#0b5ed7',
              paddingBottom: '0.5rem',
              borderBottom: '3px solid #0b5ed7',
            },
          }}
        >
          Locations
        </Link>
      </Flex>
    </Flex>
  );
}
