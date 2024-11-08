import s from "./Loader.module.css";
import { MagnifyingGlass } from "react-loader-spinner";

const Loader = () => {
  return (
    <div className={s.container}>
      <MagnifyingGlass
        visible={true}
        height="100"
        width="100"
        ariaLabel="magnifying-glass-loading"
        wrapperStyle={{}}
        wrapperClass="magnifying-glass-wrapper"
        glassColor="#c0efff"
        color="#e15b64"
      />
    </div>
  );
};

export default Loader;
// @npmteam2024/nesciunt-tempore-occaecati
