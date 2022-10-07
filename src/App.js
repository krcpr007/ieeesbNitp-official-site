import { Route, Routes } from "react-router-dom"
import Navbar from './Components/NavBar/Navbar'
import Home from './Components/Home/Home'
import AboutUs from "./pages/About/AboutUs";
import Blogs from "./pages/Blogs/Blogs";
import Membership from './pages/Membership/Membership'
import Events from './pages/Events/Events'
import Footer from "./Components/Footer/Footer";
import Committee from "./pages/committee/Committee";
import Gallery from "./pages/Gallery/Gallery";
import ContactUs from "./pages/ContactUs/ContactUs";
import Login from "./pages/upload/Login";
import DashBoard from "./pages/upload/DashBoard";
import ListEvent from "./pages/upload/ListEvent";
import UploadCertificates from "./pages/upload/UploadCertificates";
import DownloadCertificates from "./pages/certificates/DownloadCertificates";
import EventsDetails from "./pages/Events/EventsDetails";
import UploadExcom from "./pages/upload/UploadExcom";
function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/committee" element={<Committee />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/certificate-download" element={<DownloadCertificates />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/events" element={<Events />} />
        <Route path="/events/:name" element={<EventsDetails />} />
        <Route path="/membership" element={<Membership />} />
        {/* @todo ->> if admin is not login then following routes can't be access */}
        <Route path="/dashboard" element={<DashBoard />} />
        <Route path="/list-event" element={<ListEvent />} />
        <Route path="/upload-certificate" element={<UploadCertificates />} />
        <Route path="/add-excom" element={<UploadExcom />} />

      </Routes>
      <Footer />
    </>
  );
}

export default App;
