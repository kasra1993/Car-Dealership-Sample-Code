import { useEffect, useState } from "react";
import {
  useInventoryFilterFormik,
  useInventoryFilterFormLoading,
} from "../../../../hooks/context/useInventoryFilterFormik";
import { reactSortSelectInputStyle } from "../../../../utils/common/react_select_styles";
import { handleSortOfInventory } from "../../../../utils/inventory/inventory";
import SelectBox from "../../../layout/forms/select_box";

const InventorySortVehicles = ({ vehiclesData }) => {
  const formik = useInventoryFilterFormik();
  const loading = useInventoryFilterFormLoading();
  const [inputValue, setInputValue] = useState();
  const sortOptions = [
    { value: "1", label: "Sort By" },
    { value: "Year Descending", label: "Year Descending" },
    { value: "Year Ascending", label: "Year Ascending" },
    { value: "Make Descending", label: "Make Descending" },
    { value: "Make Ascending", label: "Make Ascending" },
    { value: "Model Descending", label: "Model Descending" },
    { value: "Model Ascending", label: "Model Ascending" },
    { value: "Bodysyle Descending", label: "Bodysyle Descending" },
    { value: "Bodysyle Ascending", label: "Bodysyle Ascending" },
    { value: "Price Descending", label: "Price Descending" },
    { value: "Price Ascending", label: "Price Ascending" },
  ];
  useEffect(() => {
    switch (inputValue) {
      case "Year Descending":
        handleSortOfInventory(formik, "sortYear", true);
        break;
      case "Year Ascending":
        handleSortOfInventory(formik, "sortYear", false);
        break;
      case "Make Descending":
        handleSortOfInventory(formik, "sortMake", true);
        break;
      case "Make Ascending":
        handleSortOfInventory(formik, "sortMake", false);
        break;
      case "Model Descending":
        handleSortOfInventory(formik, "sortModel", true);

        break;
      case "Model Ascending":
        handleSortOfInventory(formik, "sortModel", false);
        break;
      case "Price Descending":
        handleSortOfInventory(formik, "sortPrice", true);
      case "Price Ascending":
        handleSortOfInventory(formik, "sortPrice", false);
      default:
        break;
    }
  }, [inputValue]);
  return (
    <div className="col-12 p-0 m-0 row justify-content-between ">
      {/* <div className="p-0 pr-3 m-0 inventory_count_div__container  ">
        {vehiclesData?.length} Vehicles
      </div> */}
      {/* <div className="p-0 m-0 col-12 col-sm-7 col-md-4 col-lg-3 d-flex justify-content-end">
        <SelectBox
          style={reactSortSelectInputStyle}
          options={sortOptions}
          name={"sort_inventory"}
          placeholder={"Sort By"}
          formik={formik}
          className="w-100"
        />
      </div> */}
      {/* <select
        name="sort_inventory"
        className="form-select py-2 sort_select px-2 w-100 "
        onChange={(e) => setInputValue(e.target.value)}
        onBlur={formik.handleBlur}
        // placeholder="Sort By"
      >
        <option value="1" defaultValue></option>
        <option value="Year Descending">Sort by: Year Descending</option>
        <option value="Year Ascending">Sort by: Year Ascending</option>
        <option value="Make Descending">Sort by: Make Descending</option>
        <option value="Make Ascending">Sort by: Make Ascending</option>
        <option value="Model Descending">Sort by: Model Descending</option>
        <option value="Model Ascending">Sort by: Model Ascending</option>
        <option value="Bodysyle Descending">
          Sort by: Bodysyle Descending
        </option>
        <option value="Bodysyle Ascending">Sort by: Bodysyle Ascending</option>
        <option value="Price Descending">Sort by: Price Descending</option>
        <option value="Price Ascending">Sort by: Price Ascending</option>
      </select> */}
    
     <div className="p-0 m-0 w-100">
       <div className="py-3 px-3 m-0 w-100 inventory_sort_div__container row align-items-center ">
     <div className="p-0 m-0 pb-2">
           <div className="p-0 m-0 d-flex flex-column">
           <span className="p-0 m-0 inventory_count_div__container text-center">
               {vehiclesData?.length} Vehicles
             </span>
           </div>
         </div>
       <div className="col-12 p-0 m-0 pb-2">
         <div className="p-0 m-0 row col-12 col-lg-10">
           <div className="p-0 m-0  p-1">
             <p className="inventory_sort-title p-0 m-0 pt-1"><strong>Sort:</strong></p>
           </div>
            <div className="p-0 m-0 m-md-0 px-2 p-1">
            <button
                type="button"
                disabled={loading}
                className={`p-0 m-0 w-100 py-1 inventory_sort_button__container ${
                  formik.values.sortKind.kind === "sortYear" &&
                  formik.values.sortKind.order === 1
                    ? "ASC"
                    : formik.values.sortKind.kind === "sortYear" &&
                      formik.values.sortKind.order === 2
                    ? "DESC"
                    : ""
                }`}
                onClick={(e) => {
                  e.preventDefault();
                  handleSortOfInventory(formik, "sortYear", true);
                }}
              >
                Year
              </button>
            </div>
            <div className="p-0 m-0 m-md-0 px-2 p-1">
              <button
                type="button"
                disabled={loading}
                className={`p-0 m-0 w-100 py-1 inventory_sort_button__container ${
                  formik.values.sortKind.kind === "sortMake" &&
                  formik.values.sortKind.order === 1
                    ? "ASC"
                    : formik.values.sortKind.kind === "sortMake" &&
                      formik.values.sortKind.order === 2
                    ? "DESC"
                    : ""
                }`}
                onClick={(e) => {
                  e.preventDefault();
                  handleSortOfInventory(formik, "sortMake");
                }}
              >
                Make
              </button>
            </div>
            <div className="p-0 m-0 m-md-0 px-2 p-1">
              <button
                type="button"
                disabled={loading}
                className={`p-0 m-0 w-100 py-1 inventory_sort_button__container ${
                  formik.values.sortKind.kind === "sortModel" &&
                  formik.values.sortKind.order === 1
                    ? "ASC"
                    : formik.values.sortKind.kind === "sortModel" &&
                      formik.values.sortKind.order === 2
                    ? "DESC"
                    : ""
                }`}
                onClick={(e) => {
                  e.preventDefault();
                  handleSortOfInventory(formik, "sortModel");
                }}
              >
                Model
              </button>
            </div>
            <div className="p-0 m-0 m-md-0 px-2 p-1">
              <button
                type="button"
                disabled={loading}
                className={`p-0 m-0 w-100 py-1 inventory_sort_button__container ${
                  formik.values.sortKind.kind === "sortBodyStyle" &&
                  formik.values.sortKind.order === 1
                    ? "ASC"
                    : formik.values.sortKind.kind === "sortBodyStyle" &&
                      formik.values.sortKind.order === 2
                    ? "DESC"
                    : ""
                }`}
                onClick={(e) => {
                  e.preventDefault();
                  handleSortOfInventory(formik, "sortBodyStyle");
                }}
              >
                Body Style
              </button>
            </div>
            <div className="p-0 m-0 m-md-0 px-2 p-1">
              <button
                type="button"
                disabled={loading}
                className={`p-0 m-0 w-100 py-1 inventory_sort_button__container ${
                  formik.values.sortKind.kind === "sortPrice" &&
                  formik.values.sortKind.order === 1
                    ? "ASC"
                    : formik.values.sortKind.kind === "sortPrice" &&
                      formik.values.sortKind.order === 2
                    ? "DESC"
                    : ""
                }`}
                onClick={(e) => {
                  e.preventDefault();
                  handleSortOfInventory(formik, "sortPrice", true);
                }}
              >
                Price
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default InventorySortVehicles;
