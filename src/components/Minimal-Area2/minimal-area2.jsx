/* eslint-disable @next/next/no-img-element */
import React from "react";
import Split from "../Split";
import Link from "next/link";
import { thumparallaxDown } from "../../common/thumparallax";

const MinimalArea2 = () => {
  React.useEffect(() => {
    setTimeout(() => {
      thumparallaxDown();
    }, 1000);
  }, []);
  return (
    <section className="min-area">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="img">
              <img
                className="thumparallax-down"
                src="/img/min-area.jpg"
                alt=""
              />
            </div>
          </div>
          <div className="col-lg-6 valign">
            <div className="content">
              <h4 className="color-font">Dream. Innovate. Implement.</h4>
              <Split>
                <p className="wow txt words chars splitting" data-splitting>
                  Cultivamos ideas inteligentes tanto para startups como para
                  jugadores experimentados. Siguiendo los estándares de la
                  industria, creamos portfolios impresionantes y apoyamos la creación de
                  marcas que redefinen los límites.
                </p>
              </Split>
              <ul>
                <li className="wow fadeInUp" data-wow-delay=".2s">
                Brindamos consulta inicial y soporte gratuitos.
                </li>
                <li className="wow fadeInUp" data-wow-delay=".4s">
                Trabajamos con algunas de las empresas más exitosas.
                </li>
              </ul>
              

              <br />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MinimalArea2;
