// import { useState } from "react";
import s from "./ErrorMessage.module.css";

const ErrorMessage = ({ message }) => {
  // const [isVisible, setIsVisible] = useState(true);
  // const handleClick = () => {
  //   setIsVisible(false);
  // };
  const isVisible = true;
  return (
    <div className={isVisible ? "s.errorBox" : "s.visually-hidden"}>
      <p className={s.errorText}>
        {/* {" "} */}
        {message}
        {/* Something went wrong. Check your internet connection. */}
      </p>
      {/* <button type="button" onClick={handleClick}>
        Click to continue
      </button> */}
    </div>
  );
};

export default ErrorMessage;
