import ClipLoader from "react-spinners/ClipLoader";

interface SpinnerProp {
  loading: boolean;
}

const Spinner: React.FC<SpinnerProp> = ({ loading }) => {
  const override = { display: "block", margin: "100px auto" };

  return (
    <div>
      <ClipLoader
        color="#4338ca"
        loading={loading}
        size={150}
        cssOverride={override}
      />
    </div>
  );
};

export default Spinner;
