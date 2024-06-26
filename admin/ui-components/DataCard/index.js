import styles from "./style.module.css";


const DataCard = ({
  label = null,
  value = null,
  percentageValue = null,
  Icon = null,
  inverse = null,
}) => {
  return (
    <div
      className={`${styles["data-container"]} ${
        inverse ? styles["inverse"] : ""
      }`}
    >
       <div className={styles["data-row"]}>
        {label && <p>{label}</p>}
        {Icon && <Icon /> }
      </div>
      <div className={styles["data-row"]}>
        {value && <p className={styles["data-value"]}>{value}</p>}
        {percentageValue && (
          <p className={styles["data-percentage"]}>
            {percentageValue > 0
              ? `+${percentageValue}%`
              : `-${percentageValue}%`}
          </p>
        )}
      </div>
    </div>
  );
};

export default DataCard;
