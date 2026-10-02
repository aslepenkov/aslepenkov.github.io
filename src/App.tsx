import Experience from './components/Experience'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Projects from './components/Projects'
import Skills from './components/Skills'

export default function App() {
  return (
    <>
      <main className="mx-auto max-w-5xl px-4 sm:px-8">
        <Hero />
        <Projects />
        <Experience />
        <Skills />
      </main>
      <Footer />
    </>
  )
}
