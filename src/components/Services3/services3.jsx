import React from "react";
import Link from "next/link";
import cardMouseEffect from "../../common/cardMouseEffect";

const Services3 = () => {
  React.useEffect(() => {
    cardMouseEffect(document.querySelectorAll(".feat .items"));
  }, []);
  return (
    <section className="feat sub-bg section-padding" id="services">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 col-md-10">
            <div className="sec-head">
              <h6 className="wow fadeIn" data-wow-delay=".5s">
                Los mejores servicios
              </h6>
              <h3 className="wow color-font">
              Ayudamos a crear estrategias, de diseño y desarrollo.
              </h3>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-3 col-md-6 items md-mb30">
            <div className="item wow fadeIn" data-wow-delay=".3s">
              <span className="icon">
                <i className="ion-ios-monitor"></i>
              </span>
              <h5>Escucha y comprensión</h5>
              <p>
              Nos tomamos el tiempo para entender tu negocio, tus metas y necesidades específicas.
              </p>
              <Link href="/about/about-dark">
                <a className="more-stroke">
                  <span></span>
                </a>
              </Link>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 items active md-mb30">
            <div className="item wow fadeIn" data-wow-delay=".3s">
              <span className="icon">
                <i className="ion-ios-bolt-outline"></i>
              </span>
              <h5>Diseño y desarrollo</h5>
              <p>
              Creamos un sitio web atractivo, funcional y fácil de navegar que refleje la identidad única de tu marca.
              </p>
              <Link href="/about/about-dark">
                <a className="more-stroke">
                  <span></span>
                </a>
              </Link>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 items sm-mb30">
            <div className="item wow fadeIn" data-wow-delay=".3s">
              <span className="icon">
                <i className="ion-cube"></i>
              </span>
              <h5>Contenido relevante</h5>
              <p>
              Generamos elementos interactivos que resalten los valores y productos/servicios de tu negocio.
              </p>
              <Link href="/about/about-dark">
                <a className="more-stroke">
                  <span></span>
                </a>
              </Link>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 items">
            <div className="item wow fadeIn" data-wow-delay=".3s">
              <span className="icon">
                <i className="ion-ios-color-wand"></i>
              </span>
              <h5>Optimización y promoción</h5>
              <p>
              Te asesoramos en estrategias de marketing digital para impulsar el crecimiento de tu marca en Internet.
              </p>
              <Link href="/about/about-dark">
                <a className="more-stroke">
                  <span></span>
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services3;
