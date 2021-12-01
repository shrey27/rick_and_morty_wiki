import Navbar from '../components/Navbar/Navbar';
import { Box, Flex, Heading, Image, Text } from 'rebass';

let CHAR_API = 'https://rickandmortyapi.com/api/character/';

export default function Character(props) {
  const { name, image, status, gender, location, origin, species } =
    props.characterData;
  return (
    <Box>
      <Navbar />
      <Flex
        flexDirection={'column'}
        mx={['auto']}
        mb={['1']}
        width={['80%', '20%']}
        overflow={['hidden']}
      >
        <Heading
          fontSize={[4, 5]}
          fontWeight={'500'}
          fontFamily={'ubuntu'}
          textAlign={'center'}
        >
          {name}
        </Heading>
        <Image
          alt='image'
          src={image}
          mt={2}
          sx={{
            width: ['100%'],
            borderRadius: '5px',
          }}
        />
        <Box
          textAlign={'center'}
          my={2}
          fontSize={2}
          py={1}
          sx={{
            display: 'inline-block',
            color: 'white',
            fontWeight: 'bold',
            bg:
              `${status}` === 'Alive'
                ? '#59981A'
                : `${status}` === 'Dead'
                ? '#d9262e'
                : 'grey',

            borderRadius: '5px',
          }}
        >
          {status}
        </Box>
        <Box>
          <Text fontSize={2} fontWeight={'bold'}>
            Gender: <span style={{ fontWeight: 'normal' }}>{gender}</span>
          </Text>
          <Text fontSize={2} fontWeight={'bold'}>
            Location: <span style={{ fontWeight: 'normal' }}>{location?.name}</span>
          </Text>
          <Text fontSize={2} fontWeight={'bold'}>
            Origin: <span style={{ fontWeight: 'normal' }}>{origin?.name}</span>
          </Text>
          <Text fontSize={2} fontWeight={'bold'}>
            Species: <span style={{ fontWeight: 'normal' }}>{species}</span>
          </Text>
        </Box>
      </Flex>
    </Box>
  );
}

export async function getServerSideProps(context) {
  const { params } = context;
  let data = await fetch(CHAR_API + params.characterId).then((res) =>
    res.json()
  );
  return {
    props: {
      characterData: data,
    },
  };
}
