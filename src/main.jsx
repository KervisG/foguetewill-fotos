import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Footer from './components/footer/Footer'
import Header from './components/header/Header'
import CourseSection from './components/para-quem/ParaQuem'
import CourseSectionTwo from './components/course/CourseSectionTwo'
import EdicoesSection from './components/edition/EdicoesSection'
import TestimonialSection from './components/testimonial/TestimonialSection'
import DiscountSection from './components/discount/DiscountSection'
import SevenSection from './components/seven/SevenSection'
import AboutWill from './components/about/AboutWill'
import FloatingWhatsAppButton from './components/floatingwhats/FloatingWhatssap'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header></Header>
    <FloatingWhatsAppButton></FloatingWhatsAppButton>
<CourseSection></CourseSection>
<CourseSectionTwo></CourseSectionTwo>
<EdicoesSection></EdicoesSection>
<TestimonialSection></TestimonialSection>
<DiscountSection></DiscountSection>
<SevenSection></SevenSection>
<AboutWill></AboutWill>
   <Footer></Footer>
  </StrictMode>,
)
