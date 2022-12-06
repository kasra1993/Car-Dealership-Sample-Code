import { useFormik } from "formik";
import { reactSelectInputStyleHome } from "../../../utils/common/react_select_styles";
import SelectBox from "../forms/select_box";
import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import Link from "next/link";
import { calculateYear } from "../../../utils/common/calculate_year";
export const HomeAdvanceSearch = (props) => {
  const [years] = useState(calculateYear);
  const { advanceSearchData } = props;
  const { vehicleModel } = advanceSearchData;
  const makes = vehicleModel ? Object.entries(vehicleModel) : [];

  const getOptionsForMakeAndModel = (typeOfState) => {
    let makeOption = [];
    let modelOption = [];
    makes?.map((makeAndModel) => {
      makeOption.push({
        value: makeAndModel[0],
        label: makeAndModel[0],
        models: makeAndModel[1],
      });
      makeAndModel[1].map((model) => {
        modelOption.push({
          value: model,
          label: model,
        });
      });
    });
    if (typeOfState === "make") {
      return makeOption;
    } else if (typeOfState === "model") {
      return modelOption;
    } else {
      return [];
    }
  };
  const [makeOptions, setMakeOptions] = useState(() =>
    getOptionsForMakeAndModel("make")
  );
  const [modelOptions, setModelOptions] = useState(() =>
    getOptionsForMakeAndModel("model")
  );
  const formik = useFormik({
    initialValues: {
      make: "",
      model: "",
      Minyear: "",
      Maxyear: "",
    },
  });
  return (
    <div
      className="m-0 p-2 w-100 d-flex justify-content-center align-items-center "
      style={{ zIndex: "0" }}
    >
      <div className="p-0 m-0 col-12 d-flex flex-row justify-content-center align-items-center">
        <div
          className="p-0 m-0 w-100 row justify-content-center align-items-center"
          style={{ zIndex: 555 }}
        >
          <div className="p-0 m-0 col-12 col-md-10 ">
            <div className="p-0 m-0 row w-100 justify-content-center align-items-center home-advance-search">
              <div className="p-0 m-0 col-12 col-md-3 px-2  ">
                <SelectBox
                  style={reactSelectInputStyleHome}
                  options={makeOptions}
                  name={"make"}
                  placeholder={"Make"}
                  formik={formik}
                  onChange={(e) => {
                    formik.setFieldValue("make", e?.value);
                    const modelOption = e?.models?.map((model) => ({
                      value: model,
                      label: model,
                    }));
                    setModelOptions(modelOption);
                  }}
                  className="w-100 my-2"
                />
              </div>
              <div className="p-0 m-0 col-12 col-md-3 px-2 ">
                <SelectBox
                  style={reactSelectInputStyleHome}
                  options={modelOptions}
                  name={"model"}
                  placeholder={"Model"}
                  formik={formik}
                  className="w-100 my-2  "
                />
              </div>
              <div className="p-0 m-0 col-12 col-md-3 px-2 ">
                <SelectBox
                  style={reactSelectInputStyleHome}
                  options={years}
                  name={"Minyear"}
                  placeholder={"Min Year"}
                  formik={formik}
                  className="w-100 my-2  "
                />
              </div>
              <div className="p-0 m-0 col-12 col-md-3 px-2 ">
                <SelectBox
                  style={reactSelectInputStyleHome}
                  options={years}
                  name={"Maxyear"}
                  placeholder={"Max Year"}
                  formik={formik}
                  className="w-100 my-2 "
                />
              </div>
            </div>
          </div>
          <div className="p-0 m-0 col-12 col-md-2">
            <div className="p-0 m-0 px-2 my-0">
              <div className="p-0 m-0 w-100">
                <Link
                  href={`/cars?make=${formik.values.make}&model=${formik.values.model}&Minyear=${formik.values.Minyear}&Maxyear=${formik.values.Maxyear}`}
                >
                  <a>
                    <div className=" m-0 p-1 home-advance-btn d-flex w-100 justify-content-center align-items-center py-2">
                      <div className=" linkto_button d-flex w-100 align-items-center justify-content-center">
                        <div className="p-0 m-0 d-none d-md-flex pr-2 pb-1">
                          <FaSearch />
                        </div>
                        <div className="p-0 m-0 d-flex ">SEARCH</div>
                      </div>
                    </div>
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default HomeAdvanceSearch;
