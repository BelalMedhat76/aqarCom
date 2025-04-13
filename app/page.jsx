
'use client';
import { useTranslation } from 'react-i18next';
import TopNav from './components/topNav';
import Navbar from './components/Navbar';
import HeroSlider from './components/HeroSlider';
import MostPopular from './components/MostPopular';

export default function HomePage() {
  const { t} = useTranslation();

  return (
    <>
    
    <Navbar/>
<HeroSlider/>
<MostPopular/>
    </>
  
 
  );
}
