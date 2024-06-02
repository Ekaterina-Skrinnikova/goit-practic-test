import Select from 'react-select';

import symbols from './symbols.json';

import styles from './SelectRates.module.css';

import './ReactSelect.css';
import { useDispatch } from 'react-redux';
import { setBaseCurrency } from '../../redux/currency/currencySlice';

export const SelectRates = ({ baseCurrency }) => {
  const dispatch = useDispatch();
  const handleChange = selectedOptions => {
    dispatch(setBaseCurrency(selectedOptions.value));
  };
  return (
    <div className={styles.box}>
      <p className={styles.text}>Your base currency:&nbsp;</p>
      <Select
        value={{ label: baseCurrency, value: baseCurrency }}
        options={symbols}
        onChange={handleChange}
        className={styles.select}
        classNamePrefix="react-select"
        isSearchable
      />
    </div>
  );
};
