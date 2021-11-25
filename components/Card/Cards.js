import { Image, Flex, Box, Heading, Text } from 'rebass';

export default function Cards(props) {
  let { results } = props;
  return (
    <Flex
      flexWrap={['no-wrap', 'wrap', 'wrap']}
      width={['100%', '70%']}
      flexDirection={['column', 'row', 'row']}
      alignItems='flex-start'
      justifyContent='initial'
      sx={{
        position: 'absolute',
        right: '0',
      }}
    >
      {results.map((card) => {
        return (
          <Flex
            key={card.id}
            mx='auto'
            mb={[4]}
            flexDirection='column'
            alignItems='flex-start'
            justifyContent='space-around'
            width={['100%', '30%', '30%']}
            sx={{
              border: '2px solid #0b5ed7',
              borderRadius: '10px',
              overflow: 'hidden',
              position: 'relative',
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
                zIndex: 100,
              }}
            >
              {card.status}
            </Box>
            <Image
              alt='image'
              src={card.image}
              sx={{
                width: ['100%'],
                borderRadius: 0,
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
          </Flex>
        );
      })}
    </Flex>
  );
}
