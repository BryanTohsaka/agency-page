import React from "react";
import Navbar from "../../components/Navbar/navbar";
import Intro4 from "../../components/Intro4/intro4";
import MinimalArea2 from "../../components/Minimal-Area2/minimal-area2";
import Blogs2 from "../../components/blogs/Blogs2/blogs2";
import CallToAction from "../../components/Call-to-action/call-to-action";
import Footer from "../../components/Footer/footer";
import DarkTheme from "../../layouts/Dark";
import Services3 from "../../components/Services3/services3";
import AboutUs2 from "../../components/About-us2/about-us2";
import WorksStyle3 from "../../components/Works-style3/works-style3";
import FullTestimonials from "../../components/Full-testimonials/full-testimonials";

const Homepage1 = () => {
  const fixedSlider = React.useRef(null);
  const MainContent = React.useRef(null);
  const navbarRef = React.useRef(null);
  const logoRef = React.useRef(null);

  React.useEffect(() => {
    setInterval(() => {
      if (fixedSlider.current) {
        var slidHeight = fixedSlider.current.offsetHeight;
      }
      if (MainContent.current) {
        MainContent.current.style.marginTop = slidHeight + "px";
      }
    }, 1000);
    var navbar = navbarRef.current;
    if (window.pageYOffset > 300) {
      navbar.classList.add("nav-scroll");
    } else {
      navbar.classList.remove("nav-scroll");
    }
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 300) {
        navbar.classList.add("nav-scroll");
      } else {
        navbar.classList.remove("nav-scroll");
      }
    });
  }, [fixedSlider, MainContent, navbarRef]);

  return (
    <DarkTheme>
      <Navbar nr={navbarRef} lr={logoRef} />
      <Intro4 />
      <AboutUs2 />
      <div ref={MainContent} className="main-content">
        <WorksStyle3 />
        <Services3 />
        <MinimalArea2 />
        <FullTestimonials />
        <CallToAction img="/img/patrn1.png" />
        <Footer />
      </div>
    </DarkTheme>
  );
};

export default Homepage1;