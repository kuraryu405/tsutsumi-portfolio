import Heading from './components/Heading'
import ProfileCard from './components/ProfileCard'
import Hobby from './components/Hobby'
import Affiliations from './components/Affiliations'
import SNSLinks from './components/SNSLinks'
import MutualLinks from './components/MutualLinks'

function App() {
  return (
    <>
      <div className="app-background"></div>
      <header className="glassmorphism flex justify-between items-center px-4 sm:px-6 lg:px-8 py-3 sm:py-4 text-white mx-3 sm:mx-6 lg:mx-8 my-4 mb-6 sm:mb-8 rounded-2xl">
        <div className="font-bold tracking-wide text-base sm:text-lg lg:text-xl">
          つつみん
        </div>
        <nav>
          <ul className="flex gap-4 sm:gap-6 lg:gap-8 text-xs sm:text-sm lg:text-base">
            <li>
              <a href="#about" className="hover:text-sky-400 transition-colors duration-200">
                About
              </a>
            </li>
            <li>
              <a href="#affiliations" className="hover:text-sky-400 transition-colors duration-200">
                Affiliations
              </a>
            </li>
            <li>
              <a href="#links" className="hover:text-sky-400 transition-colors duration-200">
                Links
              </a>
            </li>
          </ul>
        </nav>
      </header>

      <main className="flex flex-col gap-16 sm:gap-20 lg:gap-24 pb-16 sm:pb-20 lg:pb-24">
        <section id="about" className="scroll-mt-20">
          <Heading as="h2">About</Heading>
          <Heading as="h3">Profile</Heading>
          <div className="flex justify-center items-center w-full">
            <ProfileCard />
          </div>
          <Heading as="h3">Hobby</Heading>
          <div className="flex justify-center items-center w-full">
            <Hobby />
          </div>
        </section>
        <section id="affiliations" className="scroll-mt-20">
          <Heading as="h2">Affiliations</Heading>
          <div className="flex justify-center items-center w-full">
            <Affiliations />
          </div>
        </section>
        <section id="links" className="scroll-mt-20">
          <Heading as="h2">Links</Heading>
          <Heading as="h3">SNS</Heading>
          <div className="flex justify-center items-center w-full">
            <SNSLinks />
          </div>
          <Heading as="h3">相互リンク</Heading>
          <div className="flex justify-center items-center w-full">
            <MutualLinks />
          </div>
        </section>
      </main>
    </>
  )
}

export default App
