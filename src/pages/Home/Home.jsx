import Banner from "./Banner";
import Sponsors from "./Sponsors";
import BusinessToAi from "../../components/design/BusinessToAi";
import OurBuinessSoultions from "../../components/design/Solutions/OurBuinessSolutions";
import BookAppointmentSection from "../../components/design/BookAppoinment/BookAppointmentSection";

const Home = () => {
  return (
    <div className=" ">
      <Banner />
      <Sponsors />
      <BusinessToAi/>
      <OurBuinessSoultions/>
      <BookAppointmentSection/>
      {/* <Solutions /> */}
    </div>
  );
};

export default Home;
