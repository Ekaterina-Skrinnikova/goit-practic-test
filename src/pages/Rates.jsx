import { Wave } from 'react-animated-text';

import { Container, Heading, Loader, RatesList, Section } from 'components';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectBaseCurrency,
  selectError,
  selectLoading,
  selectRates,
} from '../redux/selectors';
import { useEffect } from 'react';
import { fetchLatestSymbols } from '../redux/currency/operations';

const Rates = () => {
  const isError = useSelector(selectError);
  const isLoading = useSelector(selectLoading);
  const baseCurrency = useSelector(selectBaseCurrency);
  const rates = useSelector(selectRates);
  const dispatch = useDispatch();
  // console.log(rates);
  useEffect(() => {
    dispatch(fetchLatestSymbols(baseCurrency));
  }, [dispatch, baseCurrency]);

  return (
    <Section>
      <Container>
        <Heading
          info
          bottom
          title={
            <Wave
              text={`$ $ $ Current exchange rate for 1 ${baseCurrency} $ $ $`}
              effect="fadeOut"
              effectChange={4.0}
            />
          }
        />
        {rates.length > 0 && <RatesList rates={rates}/>}
        {isLoading && <Loader />}
        {isError && (
          <Heading
            error
            title="Something went wrong...😐 We cannot show current rates!"
          />
        )}
      </Container>
    </Section>
  );
};

export default Rates;
