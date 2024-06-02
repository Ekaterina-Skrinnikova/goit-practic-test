import { useDispatch } from 'react-redux';
import styles from './Filter.module.css';
import { setFilter } from '../../redux/filter/filterSlice';
export const Filter = () => {
  const dispatch = useDispatch();
  const handleChange = e => {
    dispatch(setFilter(e.target.value));
  };
  return (
    <input
      type="text"
      onChange={handleChange}
      placeholder="What currency are you looking for?🧐"
      className={styles.input}
    />
  );
};
