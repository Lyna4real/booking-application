import Navibar from "./navbar";
import Home from "./home";
import ServicesSection from "./services";
import About from "./about";
import BookingForm from "./bookapp";
import Contact from "./contact";
import Footer from "./footer";

export default function User({ accountClick, account }) {
  return (
    <>
      <Navibar account={account} accountClick={accountClick}></Navibar>
      <div className="flex flex-col items-center mt-20">
        <Home></Home>
        <About></About>
        <ServicesSection></ServicesSection>
        <BookingForm></BookingForm>
        <Contact></Contact>
        <Footer></Footer>
      </div>
    </>
  );
}
