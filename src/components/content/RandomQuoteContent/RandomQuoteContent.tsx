import Section from '../../UI/Section/Section';
import Button from '../../UI/Button/Button';
import { useFetchData } from '../../../hooks/useFetchData';
import { useEffect, useState, useCallback, useRef } from 'react';
import styles from './RandomQuoteContent.module.css';

const API = 'https://api.quotable.io/random';

type Quote = { content: string };

const RandomQuoteContent = () => {
  const { data, isLoading, fetchData } = useFetchData(API);
  // const [isLoading, setIsLoading] = useState(false);
  // const [quote, setQuote] = useState('');
  const firstRender = useRef(false);

  // const fetchQuote = useCallback(async () => {
  //   setIsLoading(true);
  //   try {
  //     const res = await fetch(API);
  //     const data = await res.json();
  //     setQuote(data?.content);
  //     console.count();
  //   } catch (err) {
  //     console.log(err);
  //   }
  //   setIsLoading(false);
  // }, []);

  useEffect(() => {
    if (isLoading || firstRender.current) return;

    fetchData();
    firstRender.current = true;
  }, []);

  return (
    <>
      <Section id='RandomQuote'>
        <Button title='Get Random Quote' onClickHandler={fetchData} />
        <p className={styles.text}>{(data as Quote)?.content}</p>
      </Section>
    </>
  );
};

export default RandomQuoteContent;
