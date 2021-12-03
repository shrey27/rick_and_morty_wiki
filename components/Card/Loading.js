import { Box, Text } from 'rebass';
import Image from 'next/image';

export default function Loading({ empty }) {
  return (
    <Box mx={['auto']}>
      <Text color={'#d9262e'} fontSize={4}>
        {empty ? (
          'Oops! Your have reached a dead end'
        ) : (
          <Image
            src={`/Ghost.gif`}
            alt={`LOADING...`}
            width={'100px'}
            height={'100px'}
            quality='100'
          />
        )}
      </Text>
    </Box>
  );
}
