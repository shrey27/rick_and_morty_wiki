import { Image, Flex, Box, Heading, Text } from 'rebass';
import { useRouter } from 'next/router';
import Loading from './Loading';
import { useState, useEffect } from 'react';

export default function Cards(props) {
  let [empty, setEmpty] = useState(false);
  let { results } = props;
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => setEmpty(results ? false : true), 2000);
  }, [results]);

  return (
    <Flex
      flexWrap={['no-wrap', 'wrap', 'wrap']}
      width={['100%']}
      flexDirection={['column', 'row', 'row']}
    >
      {results ? (
        results.map((card) => {
          return (
            <Box
              key={card.id}
              mx='auto'
              mb={[4]}
              flexDirection='column'
              width={['100%', '30%']}
              onClick={() => router.push(`/${card.id}`)}
              sx={{
                border: '2px solid #0b5ed7',
                borderRadius: '10px',
                overflow: 'hidden',
                position: 'relative',
                cursor: 'pointer',
              }}
            >
              <Box
                sx={{
                  display: 'inline-block',
                  color: 'white',
                  fontWeight: 'bold',
                  bg:
                    `${card.status}` === 'Alive'
                      ? '#59981A'
                      : `${card.status}` === 'Dead'
                      ? '#d9262e'
                      : 'grey',
                  px: 2,
                  py: 1,
                  borderRadius: '5px',
                  position: 'absolute',
                  top: 2,
                  right: 2,
                }}
              >
                {card.status}
              </Box>
              <Image
                alt='image'
                src={card.image}
                sx={{
                  width: ['100%'],
                  borderRadius: '10px 10px 0 0',
                }}
              />
              <Box p={[2]}>
                <Heading fontFamily={'ubuntu'} fontSize={[3]} mb={[4]}>
                  {card.name}
                </Heading>
                <Text fontSize={[1]} mb={[2]}>
                  Last Location
                </Text>
                <Text fontSize={[3]}>{card.location.name}</Text>
              </Box>
            </Box>
          );
        })
      ) : (
        <Loading empty={empty} />
      )}
    </Flex>
  );
}
