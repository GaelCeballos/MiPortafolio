import DevBackground from './components/DevBackground';
import Header from './components/Header';
import Hero from './components/Hero';
import TechTicker from './components/TechTicker';
import ProjectsSection from './components/ProjectsSection';
import Footer from './components/Footer';
import FloatingSocial from './components/FloatingSocial';

export default function App() {
  return (
    <div className="app">
      <DevBackground />
      <Header />
      <main>
        <Hero />
        <TechTicker />
        <ProjectsSection />
      </main>
      <Footer />
      <FloatingSocial />
    </div>
  );
}
