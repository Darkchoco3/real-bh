import Navbar from "../Layout/NavBar";
import "../Styles/Hero.css";
import FilterSection from "./FilterSection";
// import office from "../assets/office.svg"
const Hero = () => {
  return (
    <main className="hero">
      <Navbar/> 
   {/* <img src={office} alt="" /> */}
    <div className="container browse">
      <div className="color">
        <h1 className="txt">Browse Our Properties</h1>
        <p>
          Find your perfect home among our curated properties. <br />Start browsing
          now!
        </p>
        <FilterSection/>
      </div>
    </div>
    </main>
  );
};

export default Hero;