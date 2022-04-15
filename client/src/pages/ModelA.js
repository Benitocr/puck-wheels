import React, { useState } from "react";
import ModelA1 from "../assets/img/1-a.png";


const ModelA = () => {

    return (
      <>
        <div class="row">
          <div class="col-md-12">
            <div class="box">
              <div className="model-container">
                <div className="inner">
                  <div className="image-bg">
                    <div>
                      <img className="image" src={ModelA1} alt="ModelA-1" />
                    </div>
                    <div className="image-txt">
                      <h1>THE 2022 GENESIS G80</h1>
                      <h4>UNRIVALED. UNCOMPROMISED.</h4>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-md-12 description">
                      <div class="row text">
                        <div class="col-md-6 align-flex">
                          <div class="fuel">
                            <p>FUEL CONSUMPTION</p>
                            <h1>22/28</h1>
                            <p class="text-small">Lorem costam</p>
                          </div>
                          <div class="horse">
                            <p>HORSEPOWER</p>
                            <h1>300</h1>
                          </div>
                          <div class="price">
                            <p>STARTING AT</p>
                            <span>$</span>
                            <h1>90,000</h1>
                          </div>
                        </div>
                        <div class="col-md-6">
                          <p>
                            Lorem Ipsum har ikke alene overlevet fem
                            århundreder, men har også vundet indpas i
                            elektronisk typografi uden væsentlige ændringer.
                            Sætningen blev gjordt kendt i 1960'erne med
                            lanceringen af Letraset-ark, som indeholdt afsnit
                            med Lorem Ipsum, og senere med layoutprogrammer som
                            Aldus PageMaker, som også indeholdt en udgave af
                            Lorem Ipsum. Lorem Ipsum har ikke alene overlevet
                            fem århundreder, men har også vundet indpas i
                            elektronisk typografi uden væsentlige ændringer.
                            Sætningen blev gjordt kendt i 1960'erne med
                            lanceringen af Letraset-ark
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
}

export default ModelA;