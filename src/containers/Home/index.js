import LawOfficeSliderSection from "../../components/LawOfficeSliderSection";
import CaseStudiesZPattern from "../../components/CaseStudiesZPattern";
import ResultsDrivenServices from "../../components/ResultsDrivenServices";
import ServicesSection from "../../components/ServicesSection";
import QuoteForm from "../../components/QuoteForm";
import HeroSection from "../../components/HeroSection";
import DisclaimerPage from "../../components/DisclaimerPage";

import {
  Container,
  Row,
  Col,
  Button,
  Card,
  Modal,
  Form,
} from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import {
  AiOutlineRise,
  AiOutlineMail,
  AiOutlineAntDesign,
  AiOutlineUser,
} from "react-icons/ai";
import { MdMouse } from "react-icons/md";
import { FaInstagram, FaLaptopCode, FaArrowRight } from "react-icons/fa";
import { BsStarFill, BsBriefcase, BsChatDots } from "react-icons/bs";
import { FiPhone } from "react-icons/fi";
import BrandScroller from "../BrandScroller";
import WhyChooseUsSlider from "../WhyChooseUsSlider";


function Home() {
  
  return (
    <div
      className="bg-dark text-light"
      style={{
        fontFamily: "Inter, sans-serif",
        overflowX: "hidden",
        width: "100%",
      }}
    >
      {/* HERO SECTION (Center-Aligned) */}
      
      <HeroSection />
      <DisclaimerPage />

      <BrandScroller />
      <ServicesSection />
      <LawOfficeSliderSection />
      <CaseStudiesZPattern />
      <ResultsDrivenServices />
      <QuoteForm />
      <WhyChooseUsSlider />
      
    </div>
  );
}

export default Home;
