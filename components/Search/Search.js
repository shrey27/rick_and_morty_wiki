import { Flex, Heading } from 'rebass';
import { Input } from '@rebass/forms';

export default function Search() {
  return (
    <>
      <Flex
        mx={['auto']}
        py={['3']}
        flexDirection={'column'}
        alignItems={'center'}
        justifyContent={'center'}
        width={['80%', '60%', '50%']}
      >
        <Heading
          pb={['3']}
          fontFamily={'ubuntu'}
          fontSize={[5, 6]}
          fontWeight={500}
          color='rgba(0,0,0,0.80)'
        >
          Characters
        </Heading>
        <Input
          autoComplete='off'
          id='search'
          name='search'
          type='text'
          placeholder='Search for Characters'
          width={['100%', '80%']}
          fontSize={['0.9rem', '1rem']}
          sx={{
            outline: 'none',
            padding: '0.75rem 1rem',
            borderRadius: '7px',
            border: '2px solid #0b5ed7',
            boxShadow: '5px 5px 10px lightGrey;',
          }}
        />
      </Flex>
    </>
  );
}
