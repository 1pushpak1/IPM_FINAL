import React from "react";

const BookingForm = () => {
  return (
  
    <div
      style={{
        backgroundColor: "rgb(131,53,137)",
        // height: "",
        width: "100vw",
        fontFamily:'Roboto'
      }}
    >
      <div className="container" style={{ display:'flex', flexDirection:"row"}}>
          <div className="col-sm-6" style={{width:"50%"}}>
            <div
              className="text-white mt-5"
              style={{ fontSize: "30px", fontWeight: "bold" , textAlign:'left', paddingTop:'40px' }}
            >
              <span>Book a FREE Session for </span>
              <br />
              <span>Prime Mentorship Batch </span>
              <br />
              <span>By IPM Prime Tutorials </span>
            </div>
            <button
              type="button"
              style={{padding: "0.375rem 0.75rem", color: "#212529"}}
              class="btn bg-warning w-10/12 rounded-full mt-3 font-medium"
            >
              One-On-Live Clasess
            </button>
            <button
              type="button"
              style={{padding: "0.375rem 0.75rem", color: "#212529"}}
              class="btn bg-warning w-10/12 rounded-full mt-3 font-medium"
            >
              Ten One-On-One Session with RV Sir
            </button>
          </div>
          <div className="col-sm-6" style={{width:"50%", }}>
            <div class="container mt-5">
              <div class="card rounded-lg  my-5">
                <div class="card-body " style={{backgroundColor:'#fff', borderRadius:"8px", padding:"16px"}}>
                  <div style={{
                        color: "rgb(131,53,137)",
                        fontSize: "24px",
                        fontWeight: "bold",
                      }}>
                    <span
                    >
                      Fill out the form to Book a Free 
                    </span>
                    <br />
                    <span>
                    DEMO for Prime Mentorship batch!!
                    </span>
                  </div>
                  <div className="mt-2">
                    <input
                      type="text"
                      class="form-control"
                      id="name"
                      placeholder="Enter your name"
                    />
                    <div class="valid-feedback">Looks good!</div>
                    <div class="invalid-feedback">
                      Please choose a username.
                    </div>
                  </div>
                  <div class="mt-2">
                    <input
                      type="text"
                      class="form-control"
                      id="email"
                      placeholder="Enter Your Email"
                    />
                    <div class="valid-feedback">Looks good!</div>
                    <div class="invalid-feedback">
                      Please choose a username.
                    </div>
                  </div>
                  <div class="mt-2">
                    <input
                      type="text"
                      class="form-control"
                      id="password"
                      placeholder="Enter Your Password"
                    />
                    <div class="valid-feedback">Looks good!</div>
                    <div class="invalid-feedback">
                      Please choose a password.
                    </div>
                  </div>
                  <div class="mt-2">
                    <input
                      type="text"
                      class="form-control"
                      id="cpassword"
                      placeholder="Confirm Your Password"
                    />
                    <div class="valid-feedback">Looks good!</div>
                    <div class="invalid-feedback">
                      Please Recheck Your Password.
                    </div>
                  </div>
                  <span style={{ color: "red", fontSize: "14px" }}>
                    Please fill the all fields
                  </span>
                  <button
                    type="button"
                    class="btn bg-warning w-100 mt-3 p-2 rounded-lg font-medium"
                  >
                    SUBMIT
                  </button>
                  <p class="text-center mt-3  font-medium">
                    Your Data is End-to-End Increpeted!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
    </div>);
};

export default BookingForm;
