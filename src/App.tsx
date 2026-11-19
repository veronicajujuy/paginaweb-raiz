import {AboutSection} from './components/AboutSection';
import {ContactSection} from './components/ContactSection';
import {Footer} from './components/Footer';
import {Header} from './components/Header';
import {Hero} from './components/Hero';
import {HowItWorksSection} from './components/HowItWorksSection';
import {ProposalSection} from './components/ProposalSection';

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-crema text-oliva-deep">
      <Header />
      <main className="flex-1">
        <Hero />
        <AboutSection />
        <ProposalSection />
        <HowItWorksSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
