const HomeTitle = ({ title = "", className = "" }) => {
  return (
    <div className={`pb-3 align-items-center ${className}`}>
      <div className="p-0 m-0 w-100 d-flex justify-content-left">
        <h2>
          <b>{title}</b>
        </h2>
      </div>
    </div>
  );
};

export default HomeTitle;
