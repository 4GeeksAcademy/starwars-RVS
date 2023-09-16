import React from "react";
import { People } from "../component/People";
import { Vehicles } from "../component/Vehicles";
import { Planets } from "../component/Planets";

export const Home = () => {
  return (
    <>
      <section className="characters my-5 border border-primary" >
        <h1 className="border border-primary ps-5 text-primary">Characters</h1>
        <div className="container-xxl d-flex overflow-auto">{<People />}</div>
      </section>
      <section className="vehicles my-5 border border-primary">
        <h1 className="border border-primary ps-5 text-primary">Vehicles</h1>
        <div className="container-xxl d-flex overflow-auto">
          <Vehicles />
        </div>
      </section>
      <section className="border border-primary planets my-5">
        <h1 className="border border-primary ps-5 text-primary">Planets</h1>

        <div className="container-xxl d-flex overflow-auto">
          <Planets />
        </div>
      </section>
    </>
  );
};