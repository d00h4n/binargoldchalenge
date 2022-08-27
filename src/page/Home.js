import Cardetails from "../componen/carsdetail";
import Carsewa from "../componen/carsewa";
import Navbar from "../componen/navbar";
import Banner from "../componen/banner";
import Faq from "../componen/faq";
import Testis from "../componen/testis";
import Footer from "../componen/footer";
import Service from "../componen/service";
import Whyus from "../componen/whyus";

function Home() {
    return (
<>
        <Navbar />
        <Banner />
        <Cardetails />
        <Service />
        <Whyus />
        <Testis />
        <Carsewa />
        <Faq />
        <Footer />
        </>
    );
}
export default Home;