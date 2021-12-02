import Navbar from '../../components/Navbar/Navbar';
import Head from 'next/head';
import { Box, Heading, Text, Flex } from 'rebass';
import Cards from '../../components/Card/Cards';
import Dropdown from '../../components/Filter/Dropdown';
import { useState, useEffect } from 'react';

let EPISODE_API = `https://rickandmortyapi.com/api/episode/`;

export default function Episodes(props) {
  let {count} = props;
  let [fetchedData, setFetchedData] = useState([]);
  let [results, setResults] = useState([]);
  let [episode, setEpisode] = useState(1);
  let api = EPISODE_API + `${episode}`;

  useEffect(() => {
    (async function () {
      let data = await fetch(api).then((res) => res.json());
      setFetchedData(data);

      let chars = await Promise.all(
        data.characters.map((x) => {
          return fetch(x).then((res) => res.json());
        })
      );
      setResults(chars);
    })();
  }, [api]);

  let { name, air_date } = fetchedData;

  return (
    <Box>
      <Head>
        <title>Rick and Morty Wiki</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/logo.jpg' />
      </Head>
      <Navbar />
      <Heading
        my={[3]}
        fontFamily={'ubuntu'}
        fontSize={[4, 6]}
        fontWeight={500}
        textAlign={'center'}
      >
        Episode Name: <span style={{ color: '#0b5ed7' }}>{name}</span>
      </Heading>
      <Text
        my={[3]}
        fontFamily={'ubuntu'}
        fontSize={[3, 4]}
        fontWeight={500}
        textAlign={'center'}
      >
        Air Date: {air_date}
      </Text>
      <Flex
        flexDirection={['column', 'row']}
        mx={['auto']}
        mt={['0', '4']}
        width={'85%'}
      >
        <Box width={['100%', '25%']}>
          <Dropdown name={'Episode'} count={count} setFunction={setEpisode}/>
        </Box>
        <Box mt={['4', '1']} pb={4} width={['100%', '75%']}>
          <Cards results={results} />
        </Box>
      </Flex>
    </Box>
  );
}

export async function getStaticProps() {
  let data = await fetch(EPISODE_API).then((res) => res.json());
  console.log('data.info.count', data.info.count);
  return {
    props: {
      count: data.info.count
    },
  };
}
