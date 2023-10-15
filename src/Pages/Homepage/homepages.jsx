import First from "../../Pages/Homepage/components/Home/home.jsx";
import Category from "./components/Top Category/Category";
import Screen from "./components/App/Mobileapp.jsx";
import Appontment from "./components/DocterApointment/Docters.jsx";
import Footer from "./components/Footer/footer.jsx";

function homepages() {
  return (
    <>
      <First />
      <Category />
      <Appontment />
      <Screen />
      <Footer />
    </>
  );
}

export default homepages;
