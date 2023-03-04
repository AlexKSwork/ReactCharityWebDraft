import './App.css';
import AboutUsPage from './components/about/AboutUsPage';
import ContactPage from './components/contact/ContactPage';
import DonatePage from './components/donate/DonatePage';
import FacilitiesPage from './components/facilities/FacilitiesPage';
import Footer from './components/footer/Footer';
import GetInvolved from './components/getinvolved/GetInvolved';
import Header from './components/header/Header';
import Navbar from './components/navbar/Navbar';
import Team from './components/team/Team';

function App() {
  return (
    <main>
      <header className='header-bg'>
        <Navbar />
        <Header />
      </header>

      <AboutUsPage />
      <FacilitiesPage />
      <GetInvolved />
      <Team />
      <ContactPage />
      <DonatePage />
      <Footer />
    </main>
  );
}

export default App;
