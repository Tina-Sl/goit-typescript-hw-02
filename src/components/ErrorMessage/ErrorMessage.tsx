import { FC } from "react";
import s from "./ErrorMessage.module.css";

type Props = {
  message: string;
};

const ErrorMessage: FC<Props> = ({ message }) => {
  const isVisible: boolean = true;
  return (
    <div className={isVisible ? "s.errorBox" : "s.visually-hidden"}>
      <p className={s.errorText}>{message}</p>
    </div>
  );
};

export default ErrorMessage;
