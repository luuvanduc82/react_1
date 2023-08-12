import React from "react";
import Banner from "./Banner";
import Item from "./Item";

export default function Body() {
  return (
    <>
      <Banner />
      <section className="pt-4">
        <div className="container">
          <div className="row px-lg-5">
            <div className="col-lg-6 col-xxl-3 mb-5">
              <Item />
            </div>
            <div className="col-lg-6 col-xxl-3 mb-5">
              <Item />
            </div>
            <div className="col-lg-6 col-xxl-3 mb-5">
              <Item />
            </div>
            <div className="col-lg-6 col-xxl-3 mb-5">
              <Item />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
