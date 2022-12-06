import { FaClock } from "react-icons/fa";
import { DAYS } from "../../../../constant/footer/footer";

const EformsTimeWork = (props) => {
  const { timework } = props;
  return (
    <div className="p-0 m-0 my-3">
      <h3> Business Hours </h3>
      <div className="p-0 pt-3 m-0">
        <div className="d-flex flex-column justify-content-center">
          {timework?.map((time, index) => (
            <div className="p-0 m-0 d-flex align-items-center justify-content-between">
              <h6 className="p-0 m-0 mx-2 my-1 time_work_font">
                {DAYS[index]?.title}
              </h6>
              <h6 className="p-0 m-0 time_work_font">
                {time?.startAt}
                {time?.holiday === 1 ? "" : " - "}
                {time?.endAt}
              </h6>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EformsTimeWork;
