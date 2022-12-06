import React, { useEffect, useState } from "react";
import { FaFilter, FaTimes } from "react-icons/fa";
import ComponentHeader from "../layout/header/component_header";
import CarItem from "./CarItem";
import { Modal } from "react-bootstrap";
import AdvanceFilter from "./filter/AdvanceFilter";
import {
  useInventoryFilterFormik,
  useInventoryFilterFormLoading,
} from "../../../hooks/context/useInventoryFilterFormik";
import Loading from "./loading/loading";
import InfiniteScroll from "react-infinite-scroll-component";
import { useGetVehiclesBaseOnFilter } from "../../../hooks/vehicles/useGetVehiclesBaseOnFilter";
import ReactPaginate from "react-paginate";
const Cars = (props) => {
  const {
    dealerData,
    vehiclesData,
    isFinancial = false,
    otherFormik = undefined,
    onClose,
    mobileRenderComponent,
    domain,
    advanceSearchData,
    // body,
    posts,
    setPosts,
    query,
  } = props;
  const loading = useInventoryFilterFormLoading();
  const [showMobileFilter, setShowMobileFilter] = useState(false);
  const [lengthdata, setlengthdata] = useState(false);
  const formik = useInventoryFilterFormik();
  const onCloseHandler = () => {
    setShowMobileFilter(false);
  };
  const { data, isLoading, mutate } = useGetVehiclesBaseOnFilter(
    {
      onSuccessFunction: (data) => {
        setlengthdata(data?.length);
        setPosts(data);
      },
    },
    domain
  );
  const [hasMore, setHasMore] = useState(true);
  useEffect(() => {
    (query?.make && query?.make !== "") ||
    (query?.model && query?.model !== "") ||
    (query?.Minyear && query?.Minyear !== "") ||
    (query?.Maxyear && query?.Maxyear !== "")
      ? setHasMore(lengthdata > 10)
      : setHasMore(lengthdata >= posts?.length ? false : true);
  }, [posts, query]);
  useEffect(() => {
    setPosts(vehiclesData);
    (query?.make && query?.make !== "") ||
    (query?.model && query?.model !== "") ||
    (query?.Minyear && query?.Minyear !== "") ||
    (query?.Maxyear && query?.Maxyear !== "")
      ? setHasMore(lengthdata > 10)
      : setHasMore(lengthdata >= posts?.length ? false : true);
  }, [vehiclesData, query]);
  const [pageNumber, setPageNumber] = useState(0);
  const usersPerPage = 10;
  const pagesVisited = pageNumber * usersPerPage;
  const displayCars = posts
    .slice(pagesVisited, pagesVisited + usersPerPage)
    .map((item, index) => {
      return (
        <div
          key={`carInventory${item?.id}`}
          className="row w-100 p-0 m-0 pb-2 d-flex justify-content-center align-items-center "
          style={{ backgroundColor: "#f9f9f9" }}
        >
          <CarItem
            car={item}
            otherFormik={otherFormik}
            onClose={onClose}
            dealerData={dealerData}
            isFinancial={isFinancial}
          />
        </div>
      );
    });
  const pageCount = Math.ceil(posts[0]?.fullSearchCount / usersPerPage);
  const changePage = ({ selected }) => {
    setPageNumber(selected);
    mutate(formik?.values);
  };

  return (
    <div className="row p-0 m-0  px-xl-2 w-100 inventory_border_wrapper">
      {" "}
      {/* <div className="p-0 m-0 col-12">
        <div className="p-0 m-0 mt-3 mt-lg-0 row w-100 d-flex justify-content-start align-items-center">
          <div className="p-0 m-0  d-flex d-lg-none w-100">
            <button
              // style={{ border: "1px solid #333", backgroundColor: "#efefef" }}
              className="btn p-0 m-0 w-100 text-white"
              onClick={(e) => {
                setShowMobileFilter((prev) => !prev);
              }}
            >
              Filters
              <img src="/images/inventory/Group 115.png" />
            </button>
          </div>
        </div>
      </div> */}
      {loading ? (
        <div className="p-0 m-0 w-100">
          <Loading />
        </div>
      ) : (
        <>
          {/* <InfiniteScroll
            dataLength={posts?.length ? posts?.length : []}
            next={() => {
              query?.make || query?.model || query?.Minyear || query?.Maxyear
                ? undefined
                : mutate(formik?.values);
            }}
            hasMore={hasMore}
            loader={<Loading />}
            style={{ overflow: "hidden" }}
           
          >
          </InfiniteScroll> */}
          {/* {posts?.map((item, index) => (
            <div key={`carInventory${item?.id}`} className="col-12 p-0 m-0">
              <CarItem
                car={item}
                otherFormik={otherFormik}
                onClose={onClose}
                dealerData={dealerData}
              />
            </div>
          ))} */}
        </>
      )}
      {displayCars}
      <div className="bg-white  d-flex justify-content-center w-100 p-4">
        <ReactPaginate
          previousLabel={"<<"}
          nextLabel={">>"}
          pageCount={pageCount}
          onPageChange={changePage}
          containerClassName={"paginationBttns"}
          previousLinkClassName={"previousBttn"}
          nextLinkClassName={"nextBttn"}
          disabledClassName={"paginationDisabled"}
          activeClassName={"paginationActive"}
        />
      </div>
      <div className=" p-0 m-0 row w-100 d-flex d-lg-none">
        <Modal
          backdropClassName="d-flex d-lg-none"
          size="xl"
          centered
          show={showMobileFilter}
          onHide={onCloseHandler}
          className="d-flex d-lg-none"
          contentClassName="p-2 m-0 rounded eforms_inventory_div__container d-flex d-lg-none"
        >
          <Modal.Header className="p-0 m-0 border-0">
            <Modal.Title className="d-flex justify-content-between py-3 p-0 m-0 w-100 text-white">
              Advance Search
              <button
                className="p-0 m-0 modal_close_button__style"
                onClick={onCloseHandler}
              >
                <FaTimes size={28} />
              </button>
            </Modal.Title>
          </Modal.Header>
          {mobileRenderComponent}
        </Modal>
      </div>
      {/* <div
        className="p-0 m-0"
        style={{ position: "absolute", zIndex: "1", bottom: "0", left: "25%" }}
      >
        <img src="/images/inventory/Group532.png" />
      </div> */}
      {/* <div
        className="p-0 m-0 d-none d-lg-flex bg-danger"
        style={{
          position: "absolute",
          zIndex: "1",
          bottom: "0",
          left: "-32.5%",
        }}
      >
        <img src="/images/inventory/Group297.png" />
      </div> */}
    </div>
  );
};

// export default Cars;
export default React.memo(Cars);
