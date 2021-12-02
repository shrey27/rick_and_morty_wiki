import React from 'react';
import Select from 'react-select';
import { useState } from 'react';
import { Box } from 'rebass';

const Dropdown = ({ name, setFunction, count }) => {
  let [selectedOption, setSelectedOption] = useState(null);

  const options = [...Array(count).keys()].map((x, index) => {
    return { value: `${x + 1}`, label: `${name} - ${x + 1}` };
  });

  const handleChange = (e) => {
    setSelectedOption(e.lable);
    setFunction(e.value);
  };
  return (
    <Box>
      <Select
        placeholder='Choose Episode'
        value={selectedOption}
        onChange={handleChange}
        options={options}
      />
    </Box>
  );
};

export default Dropdown;
