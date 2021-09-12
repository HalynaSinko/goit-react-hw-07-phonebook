import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

import s from "./Loader.module.css";

const LoaderSpinner = () => {
  return (
    <div className={s.container}>
      <Loader
        type="ThreeDots"
        color="#3f51b5"
        height={50}
        width={50}
        timeout={3000}
      />
    </div>
  );
};

export default LoaderSpinner;
