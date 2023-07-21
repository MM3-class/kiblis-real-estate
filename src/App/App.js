import { Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "../components/footer/Footer";
import Nav from "../components/nav/Nav";
import Home from "../pages/home/Home";
import About from "../pages/about/About";
import Explore from "../pages/explore/Explore";
import NotFound from "../components/notFound/NotFound";
import Agents from "../pages/agents/Agents";
import AgentsDetails from "../pages/agentsDetails/AgentsDetails";
import Rent from "../pages/rent/Rent";
import Buy from "../pages/buy/Buy";
import PropertyDetails from "../pages/propertyDetails/PropertyDetails";
import ReviewsPopup from "../components/reviews/reviewsPopup/ReviewsPopup";
import { useEffect, useRef, useState } from "react";


function App() {
  const ref = useRef()
  const [isDropdown, setIsDropdown] = useState(false);
  useEffect(() => {
    const closingDropdown = (e) => {
      if(isDropdown && ref.current && ref.current.contains(e.target)) {
        setIsDropdown(false)
      }
    }
    document.addEventListener("mouseover", closingDropdown);
    return() => {
      document.removeEventListener("mouseout", closingDropdown)
    }
  }, [isDropdown])

  return (
    <div className="App">
      <Nav isDropdown={isDropdown} setIsDropdown={setIsDropdown}/>
      <div ref={ref}>
      <Routes >
        <Route path="/" element={<Home />} />
        <Route path="/for-buy" element={<Buy />} />
        <Route path="for-buy/propertyDetails/:property_id" element={<PropertyDetails />}/>
        <Route path="/for-rent" element={<Rent />} />
        <Route path="for-rent/propertyDetails/:property_id" element={<PropertyDetails />}/>
        <Route path="/agents" element={<Agents />} />
        <Route path="/agents/agentsDetails/:advertiser_id/:nrds_id" element={<AgentsDetails />} />
        <Route path="/about" element={<About />} />
        <Route path="/about/reviewPopup/:id" element={<ReviewsPopup />} />
        <Route path="/about/agents/agentsDetails/:advertiser_id/:nrds_id" element={<AgentsDetails />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
