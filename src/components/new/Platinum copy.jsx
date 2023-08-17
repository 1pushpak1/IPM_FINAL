import React from "react";
import logo from "../asset/ipm_logo (1).svg";
import carosoul from "../asset/platinum-web.png";
const Platinum = () => {
  return (
    <>
      <div style={{marginTop: '80px' }}>
        {/* <div className="d-flex justify-center pt-3 pb-3 border bottom-7 shadow-sm p-1 mb-2 bg-body-tertiary rounded">
          <img src={logo} height={"360px"} width={"360px"} alt="" />
        </div> */}
        {/* <div><img src={carosoul} alt="" /></div> */}
        <div className="row mt-5">
          <div className="col-sm-8">
            <div className="mt-5" style={{ marginLeft: 40 }}>
             
            </div>

            <div style={{ marginTop: 50, marginLeft: 50, fontSize: 60 }}>
             The Expert in ANYTHING <span className="text-warning">Was Once a BEGINNER</span>
            </div>
            <div style={{ marginLeft: 50 }}>
              <div className="col-sm-5">
                <hr />
              </div>
              <div className="py-2" style={{ fontSize: 25 }}>
                Prepare for{" "}
                <span style={{ fontStyle: "normal" }} className="text-warning">
                  IPMAT 2024
                </span>
                <div className="col-sm-5 my-2">
                  <hr />
                </div>
                <div style={{ fontSize: 18, fontWeight: "bold" }}>
                  <div>
                    <input type="checkbox" checked />{" "}
                    <span> IPM Prime is your mate in this journey </span>
                  </div>
                  <div>
                    <input type="checkbox" checked />{" "}
                    <span>Prepare for IPMAT 2024-25 with your trusted mentorship Program </span>
                  </div>
                  <div>
                    <input type="checkbox" checked />{" "}
                    <span>IPM Prime Presonalised Mentorship Program </span>
                  </div>
                  <div>
                    <input type="checkbox" checked />{" "}
                    <span>Most Popular Mentorship Program </span>
                  </div>
                  <div>
                    <input type="checkbox" checked />{" "}
                    <span>Personalized Study Plans & Material </span>
                  </div>
                  <div>
                    <input type="checkbox" checked />{" "}
                    <span>Top Faculties</span>
                  </div>
                </div>
                <span
                  style={{
                    border: "2px solid black",
                    fontWeight: "bold",
                    position: "relative",
                    top: -40,
                    left: 370,
                  }}
                  className="bg-warning , p-2"
                >
                  Book a Free Demo
                </span>
              </div>
            </div>
          </div>

          <div className="col-sm-4">
            <img src="homePage.png" alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Platinum;
