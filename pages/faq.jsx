import { useState } from "react";
import { Accordion } from "react-bootstrap";
import { FaCaretDown, FaCaretUp } from "react-icons/fa";
import EformsHeader from "../components/common/layout/header/eform_header";
export default function ContactUpPage(props) {
  const OptionTitles = [
    {
      title: "AM I GUARANTEED APPROVED?",
      option:
        "Yes we will assess your current financial situation and provide you financing that fits your needs and what you can afford monthly.",
    },
    {
      title: "HOW LONG DOES IT TAKE TO FILL OUT AN APPLICATION?",
      option:
        "The application process only takes a few minutes online. We have 5 step form that will help you provide the information we need to get you approved right away.",
    },
    {
      title: "WHAT HAPPENS WHEN I AM DONE THE ONLINE FORM?",
      option:
        "One of our credit specialist will contact you shortly with your approval. It is that simple!",
    },
    {
      title: "IF I APPLY AM I OBLIGATED TO PURCHASE THE VEHICLE?",
      option:
        "No, we will get your approval and work with you to select the right car, this application just starts the process off and show you what your options are.",
    },
    {
      title: "WHAT KIND OF INFORMATION WILL YOU NEED?",
      option:
        "We only ask the basics, generally your age, contact info, monthly income and whether you own or rent your home. Please fill out the online form and you will see what information we need.",
    },
    {
      title: "I HAVE BAD CREDIT, WILL THAT BE A PROBLEM?",
      option:
        "We have a very high approval rate for those who may have a bad credit score. Fill out the form and we will work to find you financing that fits your need.",
    },
  ];
  const CustomeToggle = ({ children, onClick }) => {
    const [showDown, setShowDown] = useState(false);

    return (
      <div className="p-0 px-3 m-0">
        <div
          className="p-0 m-0 vehicle_options_toggle_div__container py-3"
          onClick={onClick}
        >
          <div className="p-0 m-0 h-100 w-100 d-flex justify-content-between align-items-center">
            <span className="vehicle_options_toggle_span__style p-3 col-6">
              <span
                onClick={() => setShowDown(!showDown)}
                className="d-flex justify-content-between align-items-center"
              >
                {showDown ? (
                  <div className="icon col-1">
                    <b>-</b>
                  </div>
                ) : (
                  <div className="icon col-1">
                    <b>+</b>
                  </div>
                )}
              </span>{" "}
              <b> {children}</b>
            </span>

            {/* <img
              src="/images/vehicle-detail/vehicle-detail-options.png"
              alt=""
              className="vehicle_options_toggle_img__style"
            /> */}
          </div>
        </div>
      </div>
    );
  };
  return (
    <div className="mt-5 w-100 ">
      <div className="p-0 m-0 col-12 my-5 d-flex justify-content-center">
        <EformsHeader title="Frequently Ask Questions(FAQ)" />
      </div>

      <div className="mt-5 row col-12 px-md-5 px-sm-3">
        <Accordion className="p-0 m-0 pb-2 col-12 col-md-6 h-100 ">
          <>
            {OptionTitles.map((optionTitle, index) => {
              return (
                <div className="accordion-body my-4 accordion_main">
                  <Accordion.Toggle
                    className="accordian-header "
                    as={CustomeToggle}
                    eventKey={index + 1}
                  >
                    {optionTitle.title}
                  </Accordion.Toggle>
                  <Accordion.Collapse
                    className="p-0 px-3 m-0 mb-3"
                    eventKey={index + 1}
                  >
                    <>
                      <div className="p-1 m-0 mt-2 vehicle_options_collapse_div__container d-flex align-items-center justify-content-start">
                        {optionTitle.option}
                      </div>
                    </>
                  </Accordion.Collapse>
                </div>
              );
            })}
          </>
        </Accordion>
        <div className="col-12 col-md-6">
          <img src="/images/faq.png" />
        </div>
      </div>
    </div>
  );
}

export async function getServerSideProps(ctx) {
  const domain = ctx.req.headers.host;

  return {
    props: {
      domain,
    },
  };
}
// export async function getServerSideProps(ctx) {
//   const domain = ctx.req.headers.host;
//   return {
//     props: {
//       domain,
//     },
//   };
// }
