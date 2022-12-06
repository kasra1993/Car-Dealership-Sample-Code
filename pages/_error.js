function Error({ statusCode, err }) {
  return (
    <div className="p-0 m-0 row w-100  align-items-center justify-content-center">
      <div className="p-0 m-0 col-12 col-md-10">
        <img src="/images/404/404.png" className="w-100" />
      </div>
    </div>
  );
}

Error.getInitialProps = ({ res, err }) => {
  console.log("err", err);
  console.log("res", res);
  const statusCode = res ? res?.statusCode : err ? err?.statusCode : 404;
  return { statusCode, err };
};

export default Error;
