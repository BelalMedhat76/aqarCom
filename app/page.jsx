
'use client';
import { useTranslation } from 'react-i18next';
import HeroSlider from './components/HeroSlider';
import MostPopular from './components/MostPopular';
import OurPartner from './components/OurPartner';
import Card from './components/projectCards';

export default function HomePage() {
  const { t} = useTranslation();

  return (
    <>
    
  
<HeroSlider/>
<Card/>
<MostPopular/>
<OurPartner/>
    </>
  
 
  );
}
