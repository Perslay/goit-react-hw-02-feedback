import css from '../styles/FeedbackOptions.module.css';

export const FeedbackOptions = ({ onLeaveFeedback, options }) => {
  return (
    <ul className={css.list}>
      {options.map(option => (
        <li className={css.listItem} key={option}>
          <button
            className={css.button}
            type="button"
            onClick={() => onLeaveFeedback(option)}
          >
            {option}
          </button>
        </li>
      ))}
    </ul>
  );
};
