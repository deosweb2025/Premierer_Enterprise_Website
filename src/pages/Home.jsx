import React from 'react';
import Hero from '../components/home/Hero';
import StatsCounter from '../components/home/StatsCounter';
import GlassShowcase from '../components/home/GlassShowcase';
import FeaturedServices from '../components/home/FeaturedServices';
import WorkshopCraftsmanship from '../components/home/WorkshopCraftsmanship';
import FeaturedGallery from '../components/home/FeaturedGallery';
import GlassSpecificationGuide from '../components/home/GlassSpecificationGuide';
import HomeCTA from '../components/home/HomeCTA';

export default function Home() {
  return (
    <>
      {/* 1. Cinematic Hero with GSAP and Showroom Showcase */}
      <Hero />

      {/* 2. Key Metrics with Number Count Animation (Placed directly after Hero) */}
      <StatsCounter />

      {/* 3. About Premiere Enterprise Glimpse — 10+ Years Heritage & Pillars */}
      <GlassShowcase />

      {/* 4. Comprehensive Glass Services */}
      <FeaturedServices />

      {/* 5. Inside Our Workshop (Cutting table, belt edge grinder, float slabs) */}
      <WorkshopCraftsmanship />

      {/* 6. Real Client Gallery with Box Screen Modal Preview */}
      <FeaturedGallery />

      {/* 7. Technical Engineering Specification Standards */}
      <GlassSpecificationGuide />

      {/* 8. High-Converting Closing CTA */}
      <HomeCTA />
    </>
  );
}
