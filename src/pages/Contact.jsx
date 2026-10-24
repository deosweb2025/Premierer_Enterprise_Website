import React, { useState } from 'react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Send, 
  CheckCircle2, 
  ExternalLink,
  ShieldCheck
} from 'lucide-react';
import { siteData } from '../data/siteData';
import PageHeader from '../components/common/PageHeader';
import WhatsAppIcon from '../components/common/WhatsAppIcon';
import headerContact from '../assets/images/header-contact.jpg';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    productType: 'Mirror Wall Panels (Diamond Bevelled)',
    dimensions: '',
    location: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const phoneClean = siteData.contact.phoneRaw;
  const whatsappClean = siteData.contact.whatsapp.replace(/[^0-9]/g, '');
  const whatsappUrl = `https://wa.me/${whatsappClean}?text=${encodeURIComponent(
    siteData.contact.whatsappDefaultMessage
  )}`;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="bg-gradient-to-b from-[#131929] via-[#0f1422] to-[#0c101a] text-slate-100 min-h-screen">
      {/* 1. Page Header with Architectural Studio & Consultation Lounge Background */}
      <PageHeader
        badge="Premiere Enterprise • spells quality"
        title="Consult Directly With Our"
        gradientTitle="Kolkata Workshop"
        description="Connect with our technical team at 2/16, K. Bose Sarani, Kolkata. Request quotations, on-site laser measurements, and custom fabrication for glass, mirrors, UPVC, aluminium, and epoxy flooring."
        breadcrumbs={[{ name: "Contact" }]}
        image={headerContact}
      />

      {/* 2. Main Contact Layout */}
      <section className="py-20 border-b border-white/5 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Left Column: Direct Contact Details & Information */}
            <div className="lg:col-span-5 flex flex-col gap-6">
              
              <div className="p-8 rounded-3xl glass-panel border border-white/10 bg-slate-950/80 shadow-2xl">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xs uppercase font-mono tracking-widest text-amber-400 font-bold">
                    Head Office & Workshop
                  </span>
                  <span 
                    className="text-xs text-rose-500 font-serif italic font-bold"
                    style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
                  >
                    • spells quality
                  </span>
                </div>

                <h3 className="text-2xl font-black text-white font-heading">
                  Premiere Enterprise
                </h3>

                <p className="mt-2 text-sm text-slate-300 leading-relaxed font-normal">
                  Visit our Kolkata office & works or connect directly with our master technicians for technical guidance, material samples, and commercial quotations.
                </p>

                {/* Contact Points */}
                <div className="mt-8 space-y-5">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-amber-950/50 border border-amber-500/30 text-amber-400 flex items-center justify-center shrink-0">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <h5 className="text-xs font-mono uppercase text-slate-400">Address</h5>
                      <p className="text-sm font-semibold text-white mt-0.5">
                        {siteData.contact.address}
                      </p>
                      <a
                        href={siteData.contact.mapShareUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs text-amber-400 hover:underline inline-flex items-center gap-1 mt-1 font-semibold"
                      >
                        <span>Open in Google Maps</span>
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-amber-950/50 border border-amber-500/30 text-amber-400 flex items-center justify-center shrink-0">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <h5 className="text-xs font-mono uppercase text-slate-400">Direct Telephone</h5>
                      <a
                        href={`tel:${phoneClean}`}
                        className="text-base font-bold text-amber-300 hover:text-amber-200 transition-colors block mt-0.5"
                      >
                        {siteData.contact.phoneDisplay}
                      </a>
                      <span className="text-[11px] text-slate-400">Direct Call: {siteData.contact.phoneSecondaryDisplay}</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-amber-950/50 border border-amber-500/30 text-amber-400 flex items-center justify-center shrink-0">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <h5 className="text-xs font-mono uppercase text-slate-400">Official Email</h5>
                      <a
                        href={`mailto:${siteData.contact.email}`}
                        className="text-sm font-semibold text-white hover:text-amber-300 transition-colors block mt-0.5"
                      >
                        {siteData.contact.email}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-amber-950/50 border border-amber-500/30 text-amber-400 flex items-center justify-center shrink-0">
                      <Clock className="w-5 h-5" />
                    </div>
                    <div>
                      <h5 className="text-xs font-mono uppercase text-slate-400">Business Hours</h5>
                      <p className="text-xs text-slate-300 mt-0.5">
                        {siteData.contact.businessHours.weekdays}
                      </p>
                      <p className="text-xs text-slate-400 mt-0.5">
                        {siteData.contact.businessHours.sunday}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Instant Action Buttons */}
                <div className="mt-8 pt-6 border-t border-white/10 flex flex-col gap-3">
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-3.5 px-4 rounded-xl text-xs sm:text-sm font-bold bg-[#25D366] hover:bg-[#20ba5a] text-white shadow-xl shadow-green-500/20 transition-all flex items-center justify-center gap-2 border border-emerald-300/40"
                  >
                    <WhatsAppIcon className="w-5 h-5 fill-white" />
                    <span>Instant WhatsApp Chat</span>
                  </a>

                  <a
                    href={`tel:${phoneClean}`}
                    className="w-full py-3.5 px-4 rounded-xl text-xs sm:text-sm font-bold glass-panel text-slate-200 hover:text-white border border-white/15 transition-all flex items-center justify-center gap-2"
                  >
                    <Phone className="w-4 h-4 text-amber-400" />
                    <span>Call 7890000195 Directly</span>
                  </a>
                </div>

              </div>

              {/* Verified Trust Badge */}
              <div className="p-4 rounded-2xl glass-panel border border-amber-500/30 bg-amber-950/20 text-xs text-slate-300 flex items-center gap-3">
                <ShieldCheck className="w-6 h-6 text-amber-400 shrink-0" />
                <div>
                  <span className="font-bold text-white block mb-0.5">Kolkata Direct Manufacturer</span>
                  <span className="text-slate-400">Full on-site laser measurement and turnkey installation across Greater Kolkata & West Bengal.</span>
                </div>
              </div>

            </div>

            {/* Right Column: Interactive Quotation Form */}
            <div className="lg:col-span-7">
              <div className="p-8 sm:p-10 rounded-3xl glass-panel border border-white/10 bg-slate-950/90 shadow-2xl">
                
                <div className="mb-8">
                  <h3 className="text-2xl font-bold text-white font-heading">
                    Request a Custom Project Quotation
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300 mt-1 leading-relaxed">
                    Select your required solution below. Our engineering and estimation team will calculate your personalized cutting, material, and installation quote.
                  </p>
                </div>

                {submitted ? (
                  <div className="p-8 rounded-2xl glass-panel border border-amber-500/40 bg-amber-950/20 text-center">
                    <CheckCircle2 className="w-12 h-12 text-amber-400 mx-auto mb-4 animate-bounce" />
                    <h4 className="text-xl font-bold text-white">Quotation Request Received!</h4>
                    <p className="text-sm text-slate-300 mt-2 max-w-md mx-auto leading-relaxed">
                      Thank you, <span className="text-white font-semibold">{formData.name}</span>. The Premiere Enterprise team has received your inquiry for <span className="text-amber-300 font-semibold">{formData.productType}</span> and will contact you directly at <span className="text-white font-semibold">{formData.phone}</span>.
                    </p>
                    <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
                      <button
                        onClick={() => setSubmitted(false)}
                        className="px-6 py-2.5 rounded-xl text-xs font-semibold glass-panel text-slate-300 hover:text-white"
                      >
                        Submit Another Inquiry
                      </button>
                      <a
                        href={whatsappUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-6 py-2.5 rounded-xl text-xs font-bold bg-[#25D366] text-white flex items-center gap-2"
                      >
                        <WhatsAppIcon className="w-4 h-4 fill-white" />
                        <span>Chat on WhatsApp</span>
                      </a>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    
                    {/* Name & Phone */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-2 font-mono">
                          Your Name *
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="e.g. Rajesh Sharma"
                          className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-white/10 focus:border-amber-400 focus:outline-none text-sm text-white placeholder-slate-500 transition-colors"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-2 font-mono">
                          Phone Number *
                        </label>
                        <input
                          type="tel"
                          required
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          placeholder="e.g. 7890000195"
                          className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-white/10 focus:border-amber-400 focus:outline-none text-sm text-white placeholder-slate-500 transition-colors"
                        />
                      </div>
                    </div>

                    {/* Email & Solution Type */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-2 font-mono">
                          Email Address
                        </label>
                        <input
                          type="email"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="e.g. client@gmail.com"
                          className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-white/10 focus:border-amber-400 focus:outline-none text-sm text-white placeholder-slate-500 transition-colors"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-2 font-mono">
                          Required Solution *
                        </label>
                        <select
                          value={formData.productType}
                          onChange={(e) => setFormData({ ...formData, productType: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-white/10 focus:border-amber-400 focus:outline-none text-sm text-white transition-colors"
                        >
                          <option value="Mirror Wall Panels (Diamond Bevelled)">Mirror Wall Panels (Diamond Bevelled)</option>
                          <option value="Smart LED Designer Mirrors">Smart LED Designer Mirrors</option>
                          <option value="Toughened Glass Partitions">Toughened Glass Partitions</option>
                          <option value="Frameless Glass Doors">Frameless Glass Doors</option>
                          <option value="UPVC Windows & Doors">UPVC Windows & Doors</option>
                          <option value="Aluminium Sliding Systems">Aluminium Sliding Systems</option>
                          <option value="Architectural Hardware & Silicon">Architectural Hardware & Silicon</option>
                          <option value="Industrial & Decorative Epoxy Flooring">Industrial & Decorative Epoxy Flooring</option>
                          <option value="Digital UV Printed Glass Art">Digital UV Printed Glass Art</option>
                          <option value="Custom Glass Cutting & CNC Edging">Custom Glass Cutting & CNC Edging</option>
                        </select>
                      </div>
                    </div>

                    {/* Dimensions & Project Location */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-2 font-mono">
                          Dimensions / Quantity (Optional)
                        </label>
                        <input
                          type="text"
                          value={formData.dimensions}
                          onChange={(e) => setFormData({ ...formData, dimensions: e.target.value })}
                          placeholder="e.g. 10ft x 12ft wall or 4 mirrors"
                          className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-white/10 focus:border-amber-400 focus:outline-none text-sm text-white placeholder-slate-500 transition-colors"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-2 font-mono">
                          Project Location in Kolkata
                        </label>
                        <input
                          type="text"
                          value={formData.location}
                          onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                          placeholder="e.g. Salt Lake, New Town, Dum Dum"
                          className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-white/10 focus:border-amber-400 focus:outline-none text-sm text-white placeholder-slate-500 transition-colors"
                        />
                      </div>
                    </div>

                    {/* Project Notes */}
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-2 font-mono">
                        Specific Project Specifications
                      </label>
                      <textarea
                        rows={4}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Detail your requirements: glass thickness, bevel size, LED warm/cool glow, UPVC series, or aluminium track configurations..."
                        className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-white/10 focus:border-amber-400 focus:outline-none text-sm text-white placeholder-slate-500 transition-colors resize-none"
                      />
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      className="w-full py-4 rounded-xl text-sm font-bold bg-gradient-to-r from-amber-500 via-amber-400 to-yellow-500 hover:from-amber-400 hover:to-yellow-400 text-slate-950 shadow-xl shadow-amber-500/25 transition-all duration-300 flex items-center justify-center gap-2 group cursor-pointer"
                    >
                      <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      <span>Send Project Quotation Request</span>
                    </button>

                  </form>
                )}

              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 3. Interactive Map & Showroom Visit Section */}
      <section className="py-16 bg-[#0a0e17]/50 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl glass-panel border border-white/10 overflow-hidden shadow-2xl">
            <div className="p-6 sm:p-8 bg-slate-950/90 border-b border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <span className="text-xs uppercase font-mono text-amber-400 font-bold">2/16, K. Bose Sarani, Kolkata - 700080</span>
                <h3 className="text-xl font-bold text-white mt-1">Premiere Enterprise Office & Fabrication Facility</h3>
                <p className="text-xs text-slate-300 mt-0.5">Visit us in person or schedule an on-site technical inspection.</p>
              </div>
              <div className="flex items-center gap-3">
                <a
                  href={siteData.contact.mapShareUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2.5 rounded-xl text-xs font-bold glass-panel text-white hover:border-amber-400 transition-all flex items-center gap-2 shrink-0"
                >
                  <ExternalLink className="w-4 h-4 text-amber-400" />
                  <span>Google Maps Link</span>
                </a>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2.5 rounded-xl text-xs font-bold bg-[#25D366] text-white flex items-center gap-2 shrink-0"
                >
                  <WhatsAppIcon className="w-4 h-4 fill-white" />
                  <span>WhatsApp Location</span>
                </a>
              </div>
            </div>

            {/* Split Location Map & Storefront Photo */}
            <div className="grid grid-cols-1 lg:grid-cols-12 bg-slate-950">
              {/* Google Maps Embed Frame */}
              <div className="lg:col-span-7 h-[360px] sm:h-[440px] relative">
                <iframe
                  title="Premiere Enterprise 2/16 K. Bose Sarani Kolkata Location"
                  src={siteData.contact.googleMapsEmbed}
                  width="100%"
                  height="100%"
                  style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg)' }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>

              {/* Physical Facility Preview with Storefront Photo */}
              <div className="lg:col-span-5 p-6 sm:p-8 flex flex-col justify-between border-t lg:border-t-0 lg:border-l border-white/10 bg-gradient-to-b from-slate-900/90 to-slate-950">
                <div className="relative rounded-2xl overflow-hidden border border-white/10 group mb-4 shadow-xl">
                  <img
                    src={siteData.company.storefrontImage}
                    alt="Premiere Enterprise 2/16 K. Bose Sarani storefront entrance"
                    className="w-full h-48 sm:h-56 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-transparent to-transparent" />
                  <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-slate-950/80 backdrop-blur-md border border-amber-400/40 text-[11px] font-bold text-amber-300">
                    Kolkata Storefront
                  </div>
                  <div className="absolute bottom-3 left-3 right-3 text-white">
                    <span className="text-[10px] font-mono uppercase text-amber-400 block font-semibold">Street-Level Entrance</span>
                    <span className="text-xs font-bold">2/16, K. Bose Sarani, Kolkata - 700080</span>
                  </div>
                </div>

                <div className="space-y-3 text-xs text-slate-300">
                  <div className="flex items-center justify-between p-2.5 rounded-lg bg-white/5 border border-white/5">
                    <span className="text-slate-400">GSTIN Registration:</span>
                    <span className="font-mono font-bold text-amber-400">19AJFPP0751P1ZO</span>
                  </div>
                  <div className="flex items-center justify-between p-2.5 rounded-lg bg-white/5 border border-white/5">
                    <span className="text-slate-400">Workshop & Fabrication:</span>
                    <span className="font-semibold text-white">Direct In-House Processing</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
