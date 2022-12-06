import Link from "next/link";
const Location = (props) => {
  const { direction, dealerData } = props;
  return (
    <div
      className="p-0 m-0 d-flex justify-content-center row w-100"
      style={{
        zIndex: 53,
      }}
    >
      <iframe
        allow="geolocation"
        src={dealerData?.map_url}
        frameborder="0"
        width="100%"
        height={direction ? "450" : "400"}
        className="border-0 w-100 p-0 m-0"
        aria-hidden="false"
        tabindex="0"
        id="iframe"
        // style={{
        //   clipPath:
        //     "polygon(0 76%, 0 60%, 0 34%, 0 24%, 0 0, 100% 0, 100% 20%, 90% 30%, 90% 70%, 100% 77%, 100% 100%, 0 100%)",
        // }}
      />
    </div>
  );
};

export default Location;
