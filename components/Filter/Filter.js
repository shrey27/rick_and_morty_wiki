import { Box, Heading, Button, Flex } from 'rebass';
import FilterOption from './FilterOption';
import Accordion from 'react-bootstrap/Accordion';
import 'bootstrap/dist/css/bootstrap.min.css';
import category from './category';

export default function Filter({ setGender, setSpecies, setStatus, updatePageNumber }) {

  const clearAll = () => {
    setSpecies('');
    setStatus('');
    setGender('');
    updatePageNumber(1);
    window.location.reload(false);
  }

  return (
    <Box>
      <Heading fontFamily={'ubuntu'} sx={{ textAlign: 'center' }}>
        Filters
      </Heading>
      <Button
        fontFamily={'ubuntu'}
        width={'100%'}
        onClick={clearAll}
        sx={{
          color: '#0d6efd',
          textDecoration: 'underline',
          backgroundColor: 'white',
          textAlign: 'center',
        }}
      >
        Clear filters
      </Button>

      <Accordion defaultActiveKey='Status'>
        <Accordion.Item eventKey='Status'>
          <Accordion.Header>Status</Accordion.Header>
          <Accordion.Body>
            <Flex flexWrap={'wrap'}>
              {category[0].options.map((op) => {
                return (
                  <FilterOption
                    key={op + category[0].id}
                    optionName={op}
                    name={category[0].name}
                    setFunction={setStatus}
                    updatePageNumber={updatePageNumber}
                  />
                );
              })}
            </Flex>
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey='Species'>
          <Accordion.Header>Species</Accordion.Header>
          <Accordion.Body>
            <Flex flexWrap={'wrap'}>
              {category[1].options.map((op) => {
                return (
                  <FilterOption
                    key={op + category[1].id}
                    optionName={op}
                    name={category[1].name}
                    setFunction={setSpecies}
                    updatePageNumber={updatePageNumber}
                  />
                );
              })}
            </Flex>
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey='Gender'>
          <Accordion.Header>Gender</Accordion.Header>
          <Accordion.Body>
            <Flex flexWrap={'wrap'}>
              {category[2].options.map((op) => {
                return (
                  <FilterOption
                    key={op + category[2].id}
                    optionName={op}
                    name={category[2].name}
                    setFunction={setGender}
                    updatePageNumber={updatePageNumber}
                  />
                );
              })}
            </Flex>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </Box>
  );
}
