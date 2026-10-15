import usePageMeta from '../hooks/usePageMeta'
import Hero from '../sections/Hero'
import TrustedBy from '../sections/TrustedBy'
import Services from '../sections/Services'
import Certifications from '../sections/Certifications'
import About from '../sections/About'
import Leadership from '../sections/Leadership'
import TechStack from '../sections/TechStack'
import Stats from '../sections/Stats'
import CaseStudies from '../sections/CaseStudies'
import Industries from '../sections/Industries'
import Testimonials from '../sections/Testimonials'
import Insights from '../sections/Insights'
import FAQ from '../sections/FAQ'
import Contact from '../sections/Contact'

export default function Home() {
  usePageMeta({
    title: 'Vunetram Technologies | Cloud Migration, Hybrid Cloud, DevOps, AI & GenAI',
    description:
      'Vunetram Technologies helps enterprises migrate to AWS, Azure, and GCP, build hybrid platforms, automate delivery with DevOps, add full-stack observability, and take AI/GenAI from pilot to production.',
  })

  return (
    <>
      <Hero />
      <TrustedBy />
      <Services />
      <Stats />
      <Certifications />
      <About />
      <Leadership />
      <TechStack />
      <CaseStudies />
      <Industries />
      <Testimonials />
      <Insights />
      <FAQ />
      <Contact />
    </>
  )
}
