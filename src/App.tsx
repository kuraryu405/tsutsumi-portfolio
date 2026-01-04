import './App.css'
import ThreeDCard from './components/3dcard'
import Title from './components/title'
import Subtitle from './components/subtitle'
import Hobby from './components/hobby'
import Affiliations from './components/affiliations'

function App() {
  return (
    <>
      <div className="app-background"></div>
      <header className="glassmorphism flex justify-between items-center px-4 md:px-6 lg:px-8 py-3 md:py-4 shadow-md text-white mx-2 md:mx-4 lg:mx-8 my-4 mb-8">
        <div className="font-bold tracking-wide text-lg md:text-xl lg:text-2xl">
          つつみん
        </div>
        <nav>
          <ul className="flex gap-3 md:gap-6 lg:gap-8 text-sm md:text-base">
            <li>
              <a href="#about" className="hover:text-blue-500 transition-colors duration-200">
                About
              </a>
            </li>
            <li>
              <a href="#affiliations" className="hover:text-blue-500 transition-colors duration-200">
                Affiliations
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-blue-500 transition-colors duration-200">
                contact
              </a>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        <section id="about">
          <Title title="About" />
          <Subtitle subtitle="Profile" />
          <div className="flex justify-center items-center w-full h-full ">
            <ThreeDCard />
          </div>
          <Subtitle subtitle="Hobby" />
          <div className="flex justify-center items-center w-full h-full">
            <Hobby />
          </div>
        </section>
        <section id="affiliations">
          <Title title="Affiliations" />
          <Subtitle subtitle="Affiliations" />
          <div className="flex justify-center items-center w-full h-full">
            <Affiliations />
          </div>
        </section>

      </main>
    </>
  );
}

export default App;
