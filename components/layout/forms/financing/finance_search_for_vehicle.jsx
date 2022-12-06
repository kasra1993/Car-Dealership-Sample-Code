import { useRouter } from "next/router";
import { useState } from "react";
import { useRef } from "react";
import { useMemo } from "react";
import { FaTrash } from "react-icons/fa";

const FinanceSearchForVehicle = (props) => {
  const { vehicleDataForSearch, formik, vehicle_id } = props;
  const [searchResult, setSearchResult] = useState(null);
  const [selectedVehicle, setSelectedVehicle] = useState(null);
  const inputRef = useRef(null);
  const router = useRouter();
  const stringDataForSearch = useMemo(() => {
    return vehicleDataForSearch?.data?.map((vehicle) => ({
      name:
        vehicle?.Vehicle?.model_year +
        " " +
        vehicle?.Vehicle?.make?.toLowerCase() +
        " " +
        vehicle?.Vehicle?.model?.toLowerCase() +
        " - " +
        vehicle?.stock_NO,
      id: vehicle?.id,
    }));
  }, []);
  const handleSearchBoxChange = (e) => {
    const inputValue = e.target.value;
    if (inputValue === "") {
      setSearchResult(null);
    } else {
      const searchingResult = stringDataForSearch?.filter((vehicle) =>
        vehicle?.name?.includes(inputValue)
      );
      setSearchResult(searchingResult);
    }
  };
  const handleSelectVehicle = (id, name) => {
    if (
      router.pathname === "/forms/finance" &&
      formik.values.frk_desire_MidVclDS_id !== id
    ) {
      formik.setFieldValue("frk_desire_MidVclDS_id", id);
    }
    if (
      router.pathname === "/forms/value-your-trade" &&
      formik.values.frk_desire_MidV_id !== id
    ) {
      formik.setFieldValue("frk_desire_MidV_id", id);
    }
    if (
      router.pathname === "/forms/test-drive" &&
      formik.values.frk_vehicle_id !== id
    ) {
      formik.setFieldValue("frk_vehicle_id", id);
    }
    if (selectedVehicle !== name) {
      setSelectedVehicle(name);
    }
    setSearchResult(null);
    inputRef.current.value = "";
  };
  const handleRemoveVehicle = () => {
    if (router.pathname === "/forms/finance") {
      formik.setFieldValue("frk_desire_MidVclDS_id", null);
    }
    if (router.pathname === "/forms/value-your-trade") {
      formik.setFieldValue("frk_desire_MidV_id", null);
    }
    if (router.pathname === "/forms/test-drive") {
      formik.setFieldValue("frk_vehicle_id", null);
    }
    setSelectedVehicle();
  };
  return (
    <div className="p-0 m-0 w-100">
      <div
        className="form-group p-0 m-0 mt-2 mb-2 p-1"
        style={{ position: "relative" }}
      >
        <input
          ref={inputRef}
          name="user_prev_emp_Duration_month"
          className="form-control  eforms_input_container"
          placeholder="Search (Year Make Model)"
          onChange={handleSearchBoxChange}
        />
        {router.pathname === "/forms/finance" ? (
          <>
            {formik.values.frk_desire_MidVclDS_id && selectedVehicle !== null && (
              <div className="p-0 m-0 my-2 mb-1 col-12">
                <div className="p-0 m-0 d-flex align-items-center justify-content-between">
                  <span className="mx-2 text-dark">{selectedVehicle}</span>
                  <FaTrash
                    color="#000"
                    style={{ cursor: "pointer" }}
                    onClick={handleRemoveVehicle}
                  />
                </div>
              </div>
            )}
          </>
        ) : router.pathname === "/forms/test-drive" ? (
          <>
            {formik.values.frk_vehicle_id && selectedVehicle !== null && (
              <div className="p-0 m-0 my-2 mb-1 col-12">
                <div className="p-0 m-0 d-flex align-items-center justify-content-between">
                  <span className="mx-2 text-dark">{selectedVehicle}</span>
                  <FaTrash
                    color="#000"
                    style={{ cursor: "pointer" }}
                    onClick={handleRemoveVehicle}
                  />
                </div>
              </div>
            )}
          </>
        ) : (
          <>
            {formik.values.frk_desire_MidV_id && selectedVehicle !== null && (
              <div className="p-0 m-0 my-2 mb-1 col-12">
                <div className="p-0 m-0 d-flex align-items-center justify-content-between">
                  <span className="mx-2 text-dark">{selectedVehicle}</span>
                  <FaTrash
                    color="#000"
                    style={{ cursor: "pointer" }}
                    onClick={handleRemoveVehicle}
                  />
                </div>
              </div>
            )}
          </>
        )}
        {searchResult !== null && (
          <div
            className="p-0 m-0 result-input-simple-search w-100 border-0"
            style={{
              maxHeight: "300px",
            }}
          >
            <div
              className={`p-1 m-0 w-100 row rounded bg-white`}
              // style={{
              //   backgroundColor: "#323232",
              // }}
            >
              {searchResult?.map((vehicle) => (
                <div
                  className="p-0 px-2 m-0 mb-1 col-12"
                  style={{ cursor: "pointer" }}
                  onClick={() =>
                    handleSelectVehicle(vehicle?.id, vehicle?.name)
                  }
                >
                  <div className="p-0 m-0 d-flex align-items-center">
                    {router.pathname === "/forms/finance" ? (
                      <input
                        type="checkbox"
                        name={vehicle?.name}
                        id={vehicle?.name}
                        style={{ cursor: "pointer" }}
                        checked={
                          formik.values.frk_desire_MidVclDS_id === vehicle?.id
                        }
                        //   value={
                        //     formik.values.frk_desire_MidVclDS_id === vehicle?.id
                        //   }
                      />
                    ) : router.pathname === "/forms/value-your-trade" ? (
                      <input
                        type="checkbox"
                        name={vehicle?.name}
                        id={vehicle?.name}
                        style={{ cursor: "pointer" }}
                        checked={
                          formik.values.frk_desire_MidV_id === vehicle?.id
                        }
                        //   value={
                        //     formik.values.frk_desire_MidV_id === vehicle?.id
                        //   }
                      />
                    ) : (
                      <input
                        type="checkbox"
                        name={vehicle?.name}
                        id={vehicle?.name}
                        style={{ cursor: "pointer" }}
                        checked={formik.values.frk_vehicle_id === vehicle?.id}
                        //   value={
                        //     formik.values.frk_desire_MidV_id === vehicle?.id
                        //   }
                      />
                    )}

                    <span className="mx-2">{vehicle?.name}</span>
                  </div>
                </div>
              ))}
              {searchResult?.length === 0 && (
                <div className="p-0 m-0 col-12">
                  There isn't any vehicle with this detail
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default FinanceSearchForVehicle;
