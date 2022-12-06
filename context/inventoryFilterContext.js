import { useFormik } from "formik";
import { useRouter } from "next/router";
import { createContext } from "react";
import { useGetVehiclesBaseOnFilter } from "../hooks/vehicles/useGetVehiclesBaseOnFilter";

export const InventoryFilterContextFormik = createContext();
export const InventoryFilterContextFormLoading = createContext();
const InventoryFilterContext = ({
  children,
  domain,
  advanceSearchData,
  setVehiclesData,
  makeParam,
  minOdometer,
  maxOdometer,
  kmMin,
  kmMax,
  minPrice,
  maxPrice,
}) => {
  const { isLoading, mutate } = useGetVehiclesBaseOnFilter(
    {
      onSuccessFunction: (data) => {
        setVehiclesData(data);
      },
    },
    domain
  );
  const { query } = useRouter();
  const router = useRouter();
  const currentYear = new Date().getFullYear();
  const formik = useFormik({
    initialValues: {
      // url: domain,
      fuel_type: "",
      engine_cylinders: "",
      year_start: "1970",
      year_end: currentYear,
      price_low: minPrice,
      price_high: maxPrice,
      odometer_low: kmMin,
      odometer_high: kmMax,
      odometer_type: 2,
      make: makeParam || "",
      model: "",
      transmission: "",
      body_style: "",
      drive_train: "",
      doors: "",
      interior_color: "",
      Exterior_color: "",
      sortKind: {
        kind: "",
        type: null,
        order: 0,
      },
      is_it_special: router?.pathname === "/cars/Special-Inventory" ? 1 : 0,
      // query?.is_it_special ? query?.is_it_special : null,
    },
    onSubmit: (values, { resetForm }) => {
      const body = {
        ...values,
        fuel_type: values.fuel_type,
        engine_cylinders: values.engine_cylinders,
        make: values.make,
        model: values.model,
        transmission: values.transmission,
        body_style: values.body_style,
        drive_train: values.drive_train,
        doors: values.doors,
        interior_color: values.interior_color,
        Exterior_color: values.Exterior_color,
        odometer_type: values.odometer_type,
      };
      mutate(body);
    },
    enableReinitialize: true,
  });
  return (
    <InventoryFilterContextFormik.Provider value={formik}>
      <InventoryFilterContextFormLoading.Provider value={isLoading}>
        {children}
      </InventoryFilterContextFormLoading.Provider>
    </InventoryFilterContextFormik.Provider>
  );
};

export default InventoryFilterContext;
