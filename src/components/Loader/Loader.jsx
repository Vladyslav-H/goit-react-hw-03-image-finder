import { BallTriangle } from 'react-loader-spinner';

const Loader = () => {
  return (
    <BallTriangle
      height={100}
      width={100}
      radius={5}
      color="#FFD100"
      ariaLabel="ball-triangle-loading"
      wrapperClass={{}}
      wrapperStyle={{
        justifyContent: 'center',
        marginTop: '30vh',

      }}
      visible={true}
    />
  );
};

export default Loader;
