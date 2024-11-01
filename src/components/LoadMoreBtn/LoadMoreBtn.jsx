import s from "./LoadMoreBtn.module.css";

const LoadMoreBtn = ({ onClick }) => {
  return (
    <button className={s.loadMoreBtn} onClick={onClick} type="button">
      Load more
    </button>
  );
};

export default LoadMoreBtn;