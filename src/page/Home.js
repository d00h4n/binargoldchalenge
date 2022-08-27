import cardetails from "../componen/carsdetail";
import carsewa from "../componen/carsewa";
import navbar from "../componen/navbar";
import banner from "../componen/banner";
import faq from "../componen/faq";
import testis from "../componen/testis";
import footer from "../componen/footer";
import service from "../componen/service";
import whyus from "../componen/whyus";

function home() {
    return (
<>
        <cardetails />
        <carsewa />
        <navbar />
        <banner />
        <faq />
        <testis />
        <footer />
        <service />
        <whyus />
        </>
    );
}
export default home;