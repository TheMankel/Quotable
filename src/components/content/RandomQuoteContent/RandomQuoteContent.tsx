import Section from '../../UI/Section/Section';
import Button from '../../UI/Button/Button';
import { useFetchData } from '../../../hooks/useFetchData';
import { useEffect, useRef } from 'react';
import { QuoteCard, Text, Wrapper } from './RandomQuoteContent.style';
import Spinner from '../../UI/Spinner/Spinner';

const API = 'https://api.quotable.io/random';

type Quote = { content: string };

const RandomQuoteContent = () => {
  const { data, isLoading, fetchData } = useFetchData(API);
  const firstRender = useRef(false);

  useEffect(() => {
    if (isLoading || firstRender.current) return;

    fetchData();
    firstRender.current = true;
  }, []);

  return (
    <Section id='RandomQuote'>
      <Wrapper>
        <Button title='Get Random Quote' onClickHandler={fetchData} />
        <QuoteCard>
          {isLoading ? <Spinner /> : <Text>{(data as Quote)?.content}</Text>}
        </QuoteCard>
      </Wrapper>
    </Section>
  );
};

export default RandomQuoteContent;
