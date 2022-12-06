import { useState } from "react";
import { useMutation } from "react-query";
import { httpRequest } from "../../apis";

export const useGetVehiclesBaseOnFilter = ({ onSuccessFunction }, domain) => {
  const { data, isLoading, mutate } = useMutation(
    async (body) => {
      const { status, data } = await httpRequest(
        "POST",
        `/api/dealership/advance/search/vehicles/${domain}${
          body?.sortKind && body?.sortKind?.type !== null
            ? "?" +
              body?.sortKind?.kind +
              "=" +
              body?.sortKind?.type +
              `&offset=0&limit=${length}`
            : `?offset=0&limit=${(length = length + 10)}`
        }`,
        body,
        {},
        false
      );
      if (+status === 200) {
        return data;
      } else {
        throw new Error("error");
      }
    },
    {
      onSuccess: (data) => {
        onSuccessFunction(data);
      },
    }
  );
  return {
    // setLimit,
    // setOffset,
    data,
    isLoading,
    mutate,
  };
};