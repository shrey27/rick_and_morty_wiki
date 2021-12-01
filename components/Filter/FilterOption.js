import { useState } from 'react';
import { Box, Text } from 'rebass';

export default function FilterOption({ optionName }) {
  
  return (
    <Box
      p={[2]}
      m={2}
      width={'fit-content'}
      backgroundColor={'white'}
      sx={{
        border: '1px solid #0d6efd',
        borderRadius: '5px',
      }}
    >
      <Text
        fontSize='2'
        fontFamily={'ubuntu'}
        color={'#0d6efd'}
      >
        {optionName}
      </Text>
    </Box>
  );
}
