const year = new Date().getFullYear();
const PowerdBy = (props) => {
  const { dealerData } = props;
  return (
    <div className="p-0 m-0 row w-100 py-3">
      <div className="my-2 my-md-0 col-12 col-md-4 d-flex justify-content-center align-items-center footer_privacy__text ">
        © {year} {dealerData?.bussiness_name}
      </div>
      <div className="my-2 my-md-0 col-12 col-md-4 ">
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.hillzdealer.com/"
          className="p-0 m-0 text-decoration-none d-flex justify-content-center align-items-center"
        >
          <p className="p-0 m-0 px-1 footer_privacy__text ">Powered by</p>
          <img
            alt="Hillz Logo"
            style={{ width: 30, height: 30 }}
            src="/images/hillz_big_logo.png"
          />
          <p className="p-0 m-0 px-1 footer_privacy__text ">HillzDealer</p>
        </a>
      </div>
      <div className="my-2 my-md-0 col-12 col-md-4 d-flex justify-content-center align-items-center">
        <a className="p-0 m-0 footer_privacy__text " href="/privacy">
          Privacy & Policy
        </a>
      </div>
    </div>
  );
};
export default PowerdBy;
