const FooterTitle = ({ title = "", className = "" }) => {
  return (
    <div className={`py-2 align-items-center ${className}`}>
      <div className="p-0 m-0 w-100 d-flex justify-content-left align-items-center footer_title">
        {title}
        <img src="/icons/home/Group 24.png" className="p-0 m-0 ml-2" />
      </div>
    </div>
  );
};

export default FooterTitle;
