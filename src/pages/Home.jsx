import {
  Container,
  ExchangeForm,
  ExchangeInfo,
  Heading,
  Loader,
  Section,
} from 'components';
import { useSelector } from 'react-redux';
import {
  selectError,
  selectExchangeInfo,
  selectLoading,
} from '../redux/selectors';

const Home = () => {
  const isError = useSelector(selectError);
  const isLoading = useSelector(selectLoading);
  const exchangeInfo = useSelector(selectExchangeInfo);
  // console.log('exchangeInfo:', exchangeInfo);

  return (
    <Section>
      <Container>
        <ExchangeForm />
        {isLoading && <Loader />}
        {exchangeInfo && <ExchangeInfo {...exchangeInfo} />}
        {!isError && !exchangeInfo && (
          <Heading info title="What currencies do you want to exchange?🙂" />
        )}

        {isError && (
          <Heading
            error
            title="Something went wrong...😐 Check the data validity and try again!"
          />
        )}
      </Container>
    </Section>
  );
};

export default Home;
