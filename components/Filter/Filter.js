import { Box, Heading, Button, Flex } from 'rebass';
import FilterOption from './FilterOption';
import Accordion from 'react-bootstrap/Accordion';
import 'bootstrap/dist/css/bootstrap.min.css';
import category from './category';

export default function Filter() {
  return (
    <Box>
      <Heading fontFamily={'ubuntu'} sx={{ textAlign: 'center' }}>
        Filters
      </Heading>
      <Button
        fontFamily={'ubuntu'}
        width={'100%'}
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
        {category.map((elem) => {
          return (
            <Accordion.Item eventKey={elem.name} key={elem.id}>
              <Accordion.Header>{elem.name}</Accordion.Header>
              <Accordion.Body>
                <Flex flexWrap={'wrap'} p={2}>
                  {elem.options.map((op) => {
                    return <FilterOption key={op + elem.id} optionName={op} />;
                  })}
                </Flex>
              </Accordion.Body>
            </Accordion.Item>
          );
        })}
      </Accordion>
    </Box>
  );
}
