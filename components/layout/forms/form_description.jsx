import { findScript } from "../../../utils/common/html_script";

const FormDescription = (props) => {
  const { title, description = "" } = props;
  return (
    <div className="rounded  p-0 m-0">
      <h2 className=" rounded  p-0  m-0 mb-4 text-center text-sm-left">
        {title}
      </h2>
      <div
        className="py-1 px-2 m-0 detail_context_text"
        dangerouslySetInnerHTML={{
          __html: findScript(description),
        }}
      />
      {/* <p>{description}</p> */}
    </div>
  );
};

export default FormDescription;
