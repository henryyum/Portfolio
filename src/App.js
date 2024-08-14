import "./styles.css";
import Header from "./Components/Header/Header";
import Hero from "./Components/Hero/Hero";
import About from "./Components/About/About";
import Projects from "./Components/Projects/Projects";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";
import ProjectCard from "./Components/Projects/ProjectCard";

export default function App() {
  return (
    <div className="App">
      <div className="Header-Container">
        <Header />
      </div>

      <div id="home" className="Hero-Container">
        <Hero />
      </div>

      <div id="about" className="About-Container">
        <div className="abouts-wrapper">
          <About />
        </div>
      </div>

      <div id="projects" className="Projects-Container">
        <div className="projects-wrapper">
          <Projects />

          <ProjectCard
            projectName="TravelSpot"
            projectDescription="The aim of this website was to create a landing page that has an original design with React, as well as implement navigation with React Router DOM, and carousels. Data files have been manually created, which are then retrieved using a get function that passes endpoints to simulate the fetching of real third-party APIs. The data is then mapped to be displayed onto the page"
            projectLanguage1="React"
            projectLanguage2="React Router DOM"
            projectLanguage3="CSS"
            projectBtn1="Code"
            projectBtn2="Live Demo"
            projectBtnLink1="https://github.com/henryyum/travelspot"
            projectBtnLink2="https://travelspot-hy.netlify.app/"
            image="/images/TravelWebsite.jpeg"
            imageLink="https://nrdymx.csb.app/"
          />

          <ProjectCard
            projectName="Ecommerce Website"
            projectDescription="This website was created to practice a cart system using a cart context component. It simulates an e-commerce store that allows the user to select and add products to a cart, where products could be incremented or decremented and the price would be calculated accordingly, each product also takes the user to a unique page with a description. Users can also browse the diferent products using the category tabs provided in the categories page."
            projectLanguage1="React"
            projectLanguage2="React Router DOM"
            projectLanguage3="CSS"
            projectBtn1="Code"
            projectBtn2="Live Demo"
            projectBtnLink1="https://github.com/henryyum/E-Commerce"
            projectBtnLink2="https://ecommerce-hy.netlify.app/"
            image="/images/eCommerceWebsite.jpeg"
            imageLink="https://ecommerce-hy.netlify.app/"
          />
          <ProjectCard
            projectName="Filmania"
            projectDescription="This website retrieves data from the TMDB API to display the latest Movies and TV Shows onto the page. It includes a working search bar that allows users to search any Movie/TV Show of their choice, as well as tabs that filters either by Day/Week, or Movie/TV Show. In the navigation pages, users can also filter Movies/TV Shows based by their genre using the genre selector. When a Movie/TV Show is clicked, it takes them to an unique page that displays the information of the selected Movie/TV Show, that also provides the ability to watch its trailer and videos."
            projectLanguage1="React"
            projectLanguage2="React Router DOM"
            projectLanguage3="APIs"
            projectBtn1="Code"
            projectBtn2="Live Demo"
            projectBtnLink1="https://github.com/henryyum/Filmania"
            projectBtnLink2="https://filmania-hy.netlify.app/"
            image="/images/MovieWebsite.jpeg"
            imageLink="https://filmania-hy.netlify.app/"
          />
        </div>
      </div>

      <div id="contact" className="Contact-Container">
        <Contact />
      </div>

      <div className="Footer-Container">
        <Footer />
      </div>
    </div>
  );
}
