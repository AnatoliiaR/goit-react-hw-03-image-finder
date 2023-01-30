import { Puff } from 'react-loader-spinner';
import style from './Loader.module.css';

const Loader = () => {
  return (
    <>
      <Puff
        height="80"
        width="80"
        radius={1}
        color="#0a47bd"
        ariaLabel="puff-loading"
        wrapperClass={style.loader}
        visible={true}
      />
      <p className={style.text}>...Loading</p>
    </>
  );
};

export default Loader;
