import Head from "next/head";
import Link from "next/link";

const Department = (props) => {
  const { dealerData } = props;
  return (
    <>
      <Head>
        <meta
          property="og:image"
          content={`https://hillzimage.blob.core.windows.net${dealerData?.tab_logo_url}`}
        />

        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0"
        />
        <meta
          name="description"
          content={`Know about ${
            dealerData?.business_city?.city
          } based car dealer - ${
            dealerData?.dba ? dealerData?.dba : dealerData?.bussiness_name
          }. Read more about who we are and how our team helps you in purchasing used cars.`}
        />
        <meta
          name="keywords"
          content={`used cars ${dealerData?.business_city?.city}, car dealerships ${dealerData?.business_city?.city}, ford dealership ${dealerData?.business_city?.city}, used car dealerships ${dealerData?.business_city?.city}, cars for sale in ${dealerData?.business_city?.city}, used cars ${dealerData?.business_city?.city} ${dealerData?.business_city?.Province?.province}, used car dealers ${dealerData?.business_city?.city} ${dealerData?.business_city?.Province?.province}, second hand cars ${dealerData?.business_city?.city}, cheap cars for sale in ${dealerData?.business_city?.city}, cars for sale in ${dealerData?.business_city?.city} ${dealerData?.business_city?.Province?.province}, used pickup trucks for sale in ${dealerData?.business_city?.city}, cars in ${dealerData?.business_city?.city}, auto traders ${dealerData?.business_city?.city} ${dealerData?.business_city?.Province?.province}, autotrader ${dealerData?.business_city?.Province?.province} ${dealerData?.business_city?.city}, ${dealerData?.business_city?.city} mercedes benz dealer, mercedes dealer ${dealerData?.business_city?.city}, used trucks ${dealerData?.business_city?.city}, car for sale by owner ${dealerData?.business_city?.city} ${dealerData?.business_city?.Province?.province}, honda dealership ${dealerData?.business_city?.city}`}
        />

        <title>
          {`About ${
            dealerData?.dba ? dealerData?.dba : dealerData?.bussiness_name
          } - Used Car Dealer in ${dealerData?.business_city?.city} ,
          ${dealerData?.business_city?.Province?.province}`}
        </title>

        <link
          rel="icon"
          href={`https://hillzimage.blob.core.windows.net${dealerData?.logo_url}`}
        />
      </Head>
      <div className="p-0 m-0 w-100 p-lg-5 p-3 row justify-content-center">
        <div className="deprtment_title p-0 m-0  col-12 d-flex justify-content-start p-4 ">
          <h1>Financing</h1>
        </div>

        <div className="p-0 m-0 col-12 d-flex flex-wrap justify-content-center align-items-start deprtment_body pl-4 pr-4 px-lg-0">
          <div className="p-0 m-0  pr-lg-5 d-flex flex-column   text-start">
            <div className="px-lg-3 ">
              <h1 className=" py-3">
                Your Best Bet for Auto Financing Anywhere near Toronto, Ontario
              </h1>
              <p>
                At The Auto King, we take Auto financing and reduce it to its
                most basic principles. Through a history of sensible lending,
                and through working with a long list of third party providers,
                we are able to give our customers a wide range of financing
                options, increasing the likelihood of repayment while still
                getting you the ride you need to get around our spread-out
                prairie province.
              </p>
              <p className="py-3">
                Everyone's situation is unique. That's why we listen to each
                customer to find out your credit needs. This is how we've
                secured car and truck loans not only to those drivers with great
                credit, but as well as applicants with the following
                difficulties that typically scare off the banks and other big
                lenders:
              </p>
              <ul className="pl-5">
                <li>Bad Credit</li>
                <li>No Credit</li>
                <li>Divorce</li>
                <li>Late or Missed Payments</li>
                <li>New Immigrants</li>
                <li>Students</li>
                <li>Repossessions</li>
                <li>Bankruptcies</li>
                <li>And Many More!</li>
              </ul>
              <div>
                <h2 className="py-3">Making It as Easy as 1 - 2 - 3</h2>
                <p>
                  To get the credit you need for the car or truck you want, it
                  takes just three simple steps:
                </p>
                <ul className="py-2 pl-5 ul_style">
                  <li>Complete our online credit application form</li>
                  <li>Get approved for a loan</li>
                  <li>Pick out your new vehicle from our Inventory</li>
                </ul>
                <p>
                  We told you we make things simple! Apply during our business
                  hours and we can get you approved and vehicle hunting in just
                  hours, not days. Of course, one of our credit specialists will
                  be there to assist you every step of the way, helping you find
                  the solutions that are right for you, while answering all of
                  the questions you may have.
                </p>
                <p className="py-4">
                  To contact one of our representatives, call us at{" "}
                  <strong>416-742-5464</strong>.
                </p>
              </div>
            </div>
          </div>
          <div className="p-0 m-0   col-lg-4 col-md-10 col-11 pl-xl-5 pl-2  px-3 text-start text_title">
            <div className="d-flex row justify-content-center align-items-center text-center w-100 p-0 m-0  gold_button_2 btn">
              <Link href="/forms/finance">
                <a>
                  <button type="submit" className="btn gold_button w-100">
                    Apply Online Today
                  </button>
                </a>
              </Link>
            </div>
          </div>
        </div>
        <div className="p-0 m-0 col-12 d-flex flex-wrap justify-content-center align-items-start deprtment_body ">
          <div className="p-0 m-0 col-lg-10 pr-lg-5 d-flex flex-column   text-start">
            <h1 className="pl-3 py-4 py-lg-2 ">
              Get in Touch with The Auto King
            </h1>
            <p className="pl-3 pb-2">
              Need to contact our automotive agency? Simply fill out the form
              below or give us a call at <strong>416-742-5464</strong>.
            </p>
            <div className="p-0 m-0  d-flex py-2 px-3 col-12 justlfy-content-center align-items-center">
              <Link href="/forms/finance">
                <a>
                  <button type="submit" className="btn gold_button w-100">
                    Apply Now
                  </button>
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export async function getServerSideProps(ctx) {
  const domain = ctx.req.headers.host;

  return {
    props: {
      domain,
    },
  };
}

export default Department;
