import React, { useState, useEffect } from "react";
import HomePageSearchItems from "../search/search_items_component";
import Link from "next/link";
import { FaSearch } from "react-icons/fa";
const Search = (props) => {
  const { data: dataForSearch } = props;
  const [simplesearchname, setsimplesearchname] = useState("");
  const [data] = useState(dataForSearch);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [displaysearch, setdisplaysearch] = useState(false);
  const handleChange = (event) => {
    if (event.target.value.length > 0) {
      setdisplaysearch(true);
    } else {
      setdisplaysearch(false);
    }
    setSearchTerm(event.target.value?.toLowerCase());
  };
  let doubles = data?.map((i) => {
    return {
      cars:
        i?.Vehicle?.model_year +
        " " +
        i?.Vehicle?.make +
        " " +
        i?.Vehicle?.model,
      ids: i?.Vehicle?.id,
      idd: i?.id,
      model_year: i?.Vehicle?.model_year,
      make: i?.Vehicle?.make,
      model: i?.Vehicle?.model,
    };
  });
  useEffect(() => {
    if (doubles) {
      const result2 = doubles?.filter((i) =>
        i.cars.toLowerCase().includes(searchTerm)
      );
      let result3 = result2?.filter((data, index) => {
        return result2.indexOf(data) === index;
      });
      setSearchResults(result3);
    }
  }, [searchTerm]);
  const simplesearches = () => {
    setdisplaysearch(false);
  };
  return (
    <div className="p-0 m-0 d-flex row justify-content-center align-items-center w-100">
      <div className="p-0 m-0 col-12">
        <div
          className="p-0 m-0 d-flex row justify-content-center align-items-center"
          style={{
            position: "relative",
          }}
        >
          <input
            className="p-2 py-2 px-4 m-0 mt-3 mb-3 col-12 home_search_input-style"
            type="text"
            placeholder="Search inventory"
            defaultValue={simplesearchname}
            onChange={handleChange}
          />
          <div className="p-0 m-0 result-input-simple-search w-100">
            <div
              className={`p-1 m-0 text-left ${
                displaysearch ? "d-flex" : "d-none"
              } flex-column `}
              style={{
                zIndex: 2000,
              }}
            >
              {searchResults?.map((item) => (
                <HomePageSearchItems
                  key={item?.idd}
                  item={item}
                  simplesearches={simplesearches}
                  setsimplesearchname={setsimplesearchname}
                />
              ))}
              {searchResults?.length === 0 && (
                <div className="w-100 text-center">
                  <span>Let Us Find Your Dream Car!</span>
                  <Link href="/forms/car-finder">
                    <a className="mx-1">Car Finder</a>
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Search;
