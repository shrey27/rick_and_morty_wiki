import styles from '../../styles/common.module.css';

export default function FilterOption({
  optionName,
  name,
  setFunction,
  updatePageNumber,
}) {
  const handleClick = (e) => {
    setFunction(e.target.value);
    updatePageNumber(1);
  };
  return (
    <div className={styles.filterBox}>
      <input
        type='radio'
        name={name}
        className={styles.filterInput}
        value={optionName}
        id={optionName}
        onClick={handleClick}
      />
      <span className={styles.filterName}>{optionName}</span>
      <button className={styles.filterBtn} onClick={() => setFunction('')}>
        X
      </button>
    </div>
  );
}
