import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Shield, 
  BarChart3, 
  FileText, 
  Lock, 
  CheckCircle2, 
  ArrowRight, 
  Menu, 
  X, 
  Star, 
  Mail, 
  Phone, 
  Clock, 
  Globe, 
  Share2, 
  AtSign,
  Zap,
  Network,
  Activity
} from 'lucide-react';

// --- Components ---

const Navbar = ({ activePage, setActivePage }: { activePage: string, setActivePage: (page: string) => void }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', id: 'home' },
    { name: 'Features', id: 'features' },
    { name: 'Pricing', id: 'pricing' },
    { name: 'Testimonials', id: 'testimonials' },
    { name: 'Contact', id: 'contact' },
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${isScrolled ? 'glass-header py-3 shadow-sm' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        <div 
          className="text-lg font-black tracking-[0.2em] text-primary font-headline cursor-pointer uppercase"
          onClick={() => setActivePage('home')}
        >
          GRC<span className="text-on-surface-variant font-light ml-1">Excellence</span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => setActivePage(link.id)}
              className={`text-[10px] uppercase font-bold tracking-[0.2em] transition-all hover:text-primary relative group ${
                activePage === link.id ? 'text-primary' : 'text-on-surface-variant/70'
              }`}
            >
              {link.name}
              <span className={`absolute -bottom-1 left-0 w-full h-0.5 bg-primary transform origin-left transition-transform duration-300 ${activePage === link.id ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`}></span>
            </button>
          ))}
          <button className="bg-primary text-white px-8 py-2.5 rounded-full font-bold text-[11px] uppercase tracking-widest hover:bg-primary-container hover:shadow-xl hover:-translate-y-0.5 transition-all shadow-lg shadow-primary/20">
            Get Started
          </button>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-on-surface" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-white shadow-xl border-t border-outline-variant/10 p-6 flex flex-col gap-4 md:hidden"
          >
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => {
                  setActivePage(link.id);
                  setIsMobileMenuOpen(false);
                }}
                className={`text-left text-xs font-bold uppercase tracking-[0.2em] py-2 ${activePage === link.id ? 'text-primary' : 'text-on-surface-variant'}`}
              >
                {link.name}
              </button>
            ))}
            <button className="bg-primary text-white w-full py-4 rounded-full font-bold text-xs uppercase tracking-widest mt-4">
              Get Started
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Footer = () => (
  <footer className="bg-surface-container-low border-t border-outline-variant/10 pt-20 pb-10">
    <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
      <div className="col-span-1">
        <div className="text-xl font-extrabold tracking-tighter text-primary font-headline mb-6">GRC Excellence</div>
        <p className="text-on-surface-variant text-sm leading-relaxed mb-6">
          Redefining governance through architectural precision and automated intelligence.
        </p>
        <div className="flex gap-4">
          <button className="text-on-surface-variant hover:text-primary transition-colors"><Globe size={20} /></button>
          <button className="text-on-surface-variant hover:text-primary transition-colors"><Share2 size={20} /></button>
        </div>
      </div>
      <div>
        <h4 className="font-bold text-primary mb-6 text-sm uppercase tracking-widest">Product</h4>
        <ul className="space-y-4 text-sm text-on-surface-variant">
          <li><a href="#" className="hover:text-primary transition-colors">Features</a></li>
          <li><a href="#" className="hover:text-primary transition-colors">Pricing</a></li>
          <li><a href="#" className="hover:text-primary transition-colors">Status</a></li>
        </ul>
      </div>
      <div>
        <h4 className="font-bold text-primary mb-6 text-sm uppercase tracking-widest">Company</h4>
        <ul className="space-y-4 text-sm text-on-surface-variant">
          <li><a href="#" className="hover:text-primary transition-colors">Privacy Policy</a></li>
          <li><a href="#" className="hover:text-primary transition-colors">Terms of Service</a></li>
          <li><a href="#" className="hover:text-primary transition-colors">Security</a></li>
        </ul>
      </div>
      <div>
        <h4 className="font-bold text-primary mb-6 text-sm uppercase tracking-widest">Social</h4>
        <ul className="space-y-4 text-sm text-on-surface-variant">
          <li><a href="#" className="hover:text-primary transition-colors">LinkedIn</a></li>
          <li><a href="#" className="hover:text-primary transition-colors">Twitter</a></li>
        </ul>
      </div>
    </div>
    <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:row justify-between items-center pt-8 border-t border-outline-variant/10 text-xs text-on-surface-variant/60">
      <span>© 2024 Editorial GRC Excellence. All rights reserved.</span>
      <span className="mt-4 md:mt-0">Made with precision.</span>
    </div>
  </footer>
);

// --- Pages ---

const HomePage = () => {
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-40 bg-gradient-to-br from-primary via-primary-container to-primary/80">
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h1 className="font-headline text-5xl md:text-7xl font-extrabold text-white leading-[1.1] tracking-tight mb-8">
              Automate your GRC workflows in minutes
            </h1>
            <p className="text-lg md:text-xl text-white/80 font-light mb-10 max-w-lg leading-relaxed">
              Transform complex governance, risk, and compliance management into a streamlined, automated experience. Built for the modern enterprise architect.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-white text-primary font-bold px-8 py-4 rounded-lg shadow-xl hover:bg-surface-container-low transition-all text-lg">
                Start free trial
              </button>
              <button className="bg-white/10 text-white font-semibold px-8 py-4 rounded-lg border border-white/20 backdrop-blur-md hover:bg-white/20 transition-all text-lg">
                View demo
              </button>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotate: 5 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
            className="relative"
          >
            <div className="bg-white/10 p-2 rounded-2xl backdrop-blur-sm shadow-2xl border border-white/20">
              <img 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuD06akR5Ub3340lpQy8fPbc-Mz57SwGXmqDV8S7WALszSTQor3CT6PMMrJOEq3MdXlrVWVqOMbZlWlmFFJqKG4yFEMzVS1CCAN7y5SF0WSvaZs_BX7Uk4DD_P7_aykrkeVUeACnyyjPdWWRNWU_7uCooNdODE7RkFBE0cSWGGZiQQVQTzoQWA8TaIshiVwE_-ruJieXgndVvkmCofCzpSpaRzCb5fsE_m9RkEfl0xYROlm4tATbFxMCvsZ-mNCnfA1onHBOS00EtME" 
                alt="Dashboard Preview" 
                className="rounded-xl w-full shadow-inner"
                referrerPolicy="no-referrer"
              />
            </div>
            {/* Floating elements */}
            <div className="absolute -top-10 -right-10 w-32 h-32 bg-white/10 blur-3xl rounded-full" />
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-white/5 blur-3xl rounded-full" />
          </motion.div>
        </div>
      </section>

      {/* Features Row */}
      <section className="bg-white py-12 border-y border-outline-variant/10">
        <div className="max-w-7xl mx-auto px-6 md:px-12 overflow-hidden">
          <div className="flex flex-wrap justify-center md:justify-between items-center gap-8 md:gap-12">
            {[
              { icon: <Shield size={20} />, text: 'Compliance Tracking' },
              { icon: <BarChart3 size={20} />, text: 'Risk Assessment' },
              { icon: <FileText size={20} />, text: 'Reporting' },
              { icon: <Lock size={20} />, text: 'Enterprise Security' }
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-3 text-on-surface-variant/70 font-headline font-bold uppercase tracking-widest text-[10px] md:text-xs">
                <span className="text-primary">{item.icon}</span>
                {item.text}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Precision Governance Grid */}
      <section id="features" className="py-24 md:py-32 bg-surface-container-low">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="mb-16 md:mb-24">
            <h2 className="font-headline text-3xl md:text-4xl font-extrabold text-on-surface tracking-tight mb-4">Precision Governance</h2>
            <div className="w-20 h-1.5 bg-primary rounded-full"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div 
              whileHover={{ y: -10 }}
              className="architect-card group"
            >
              <div className="w-14 h-14 bg-primary/5 rounded-xl flex items-center justify-center mb-8 group-hover:bg-primary transition-colors">
                <Network className="text-primary group-hover:text-white transition-colors" />
              </div>
              <h3 className="font-headline text-xl font-bold mb-4 text-on-surface">Integrated Control</h3>
              <p className="text-on-surface-variant leading-relaxed text-sm">
                Centralize all governance activities within a single, immutable ledger of truth. No more siloed spreadsheets.
              </p>
            </motion.div>

            <motion.div 
              whileHover={{ y: -10 }}
              className="architect-card group"
            >
              <div className="w-14 h-14 bg-primary/5 rounded-xl flex items-center justify-center mb-8 group-hover:bg-primary transition-colors">
                <Zap className="text-primary group-hover:text-white transition-colors" />
              </div>
              <h3 className="font-headline text-xl font-bold mb-4 text-on-surface">Real-time Mitigation</h3>
              <p className="text-on-surface-variant leading-relaxed text-sm">
                Automated risk triggers alert your team instantly when compliance drift occurs beyond your set thresholds.
              </p>
            </motion.div>

            <motion.div 
              whileHover={{ y: -10 }}
              className="architect-card group"
            >
              <div className="w-14 h-14 bg-primary/5 rounded-xl flex items-center justify-center mb-8 group-hover:bg-primary transition-colors">
                <Activity className="text-primary group-hover:text-white transition-colors" />
              </div>
              <h3 className="font-headline text-xl font-bold mb-4 text-on-surface">Dynamic Reporting</h3>
              <p className="text-on-surface-variant leading-relaxed text-sm">
                Generate board-ready audit reports with one click. Transparent, accurate, and completely automated data collection.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center mb-20">
            <span className="text-primary font-bold uppercase tracking-[0.2em] text-xs">Framework</span>
            <h2 className="font-headline text-4xl md:text-5xl font-extrabold mt-4">How it works</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-4">
            {[
              { num: '01', title: 'Connect data sources', desc: 'Securely link your existing tech stack and databases in minutes.' },
              { num: '02', title: 'Configure workflows', desc: 'Define compliance rules and automated action triggers for your team.' },
              { num: '03', title: 'Monitor risks', desc: 'Watch as our engine scans for vulnerabilities and compliance gaps 24/7.' },
              { num: '04', title: 'Get reports', desc: 'Instantly export audits and strategy maps for stakeholders and regulators.' }
            ].map((step, i) => (
              <div key={i} className="relative p-8 group">
                <div className="text-8xl font-black text-surface-container-low absolute -top-8 -left-4 z-0 group-hover:text-primary/10 transition-colors">
                  {step.num}
                </div>
                <div className="relative z-10 pt-12">
                  <h4 className="font-headline text-lg font-bold mb-3 text-on-surface">{step.title}</h4>
                  <p className="text-on-surface-variant text-sm leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-24 md:py-32 bg-surface-container-low">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center mb-20">
            <h2 className="font-headline text-4xl md:text-5xl font-extrabold mb-4">Investment Tiers</h2>
            <p className="text-on-surface-variant max-w-2xl mx-auto">Scalable solutions designed for every stage of enterprise growth.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
            {/* Free */}
            <div className="bg-white p-10 rounded-xl flex flex-col border border-outline-variant/10">
              <div className="mb-8">
                <span className="text-xs font-bold text-on-surface-variant/60 uppercase tracking-wider">Free</span>
                <div className="mt-4 flex items-baseline gap-1">
                  <span className="text-4xl font-black text-on-surface">$0</span>
                  <span className="text-on-surface-variant/60 text-sm">/mo</span>
                </div>
              </div>
              <ul className="space-y-4 mb-10 flex-grow">
                {['Up to 2 data sources', 'Basic risk assessment', 'Email support'].map((feat, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm text-on-surface-variant">
                    <CheckCircle2 size={18} className="text-primary" />
                    {feat}
                  </li>
                ))}
              </ul>
              <button className="w-full py-4 rounded-lg font-bold text-primary border-2 border-primary hover:bg-primary hover:text-white transition-all">
                Choose Free
              </button>
            </div>

            {/* Starter */}
            <div className="bg-primary p-10 rounded-xl flex flex-col text-white relative shadow-2xl scale-105 z-10">
              <div className="absolute top-0 right-10 transform -translate-y-1/2 bg-on-surface text-white px-4 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest">
                Most popular
              </div>
              <div className="mb-8">
                <span className="text-xs font-bold text-white/60 uppercase tracking-wider">Starter</span>
                <div className="mt-4 flex items-baseline gap-1">
                  <span className="text-4xl font-black text-white">$149</span>
                  <span className="text-white/60 text-sm">/mo</span>
                </div>
              </div>
              <ul className="space-y-4 mb-10 flex-grow">
                {['Unlimited data sources', 'Advanced workflows', 'Custom dashboards', 'Priority 24/7 support'].map((feat, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm">
                    <CheckCircle2 size={18} className="text-white/60" />
                    {feat}
                  </li>
                ))}
              </ul>
              <button className="w-full py-4 rounded-lg font-bold bg-white text-primary hover:bg-surface-container-low transition-all">
                Start 14-day trial
              </button>
            </div>

            {/* Pro */}
            <div className="bg-white p-10 rounded-xl flex flex-col border border-outline-variant/10">
              <div className="mb-8">
                <span className="text-xs font-bold text-on-surface-variant/60 uppercase tracking-wider">Pro</span>
                <div className="mt-4 flex items-baseline gap-1">
                  <span className="text-4xl font-black text-on-surface">$499</span>
                  <span className="text-on-surface-variant/60 text-sm">/mo</span>
                </div>
              </div>
              <ul className="space-y-4 mb-10 flex-grow">
                {['All Starter features', 'AI-driven predictive risk', 'Dedicated account manager'].map((feat, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm text-on-surface-variant">
                    <CheckCircle2 size={18} className="text-primary" />
                    {feat}
                  </li>
                ))}
              </ul>
              <button className="w-full py-4 rounded-lg font-bold text-primary border-2 border-primary hover:bg-primary hover:text-white transition-all">
                Contact Sales
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-24 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div>
              <h2 className="font-headline text-4xl md:text-5xl font-extrabold text-on-surface mb-12">Trusted by industry leaders</h2>
              <div className="space-y-10">
                <div className="bg-surface-container-low p-10 rounded-2xl relative">
                  <div className="flex items-center gap-1 mb-6">
                    {[...Array(5)].map((_, i) => <Star key={i} size={16} className="fill-primary text-primary" />)}
                  </div>
                  <p className="italic text-on-surface text-lg mb-8 leading-relaxed">
                    "The transition to GRC Excellence saved our compliance team over 40 hours a week. It's the most intuitive tool we've ever used in the governance sector."
                  </p>
                  <div className="flex items-center gap-4">
                    <img 
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuCp9UsqkjmGfS3rnohYs6nctppGmtF-IUZaHMb1iEIlD64dhAAfDTR6iQZQdyYhYqYoPcKup4KxpqUQ9rtyt9BbIMPpTrwHeb1IdrDTvISx4t7CbF_XrMTcDnsrAYTG39_-rbJkykXNvmAYWteLV42bezHdLlq1nh5vmm-rQiZbFW7o3I0ePtup7bT65tDEJM7llgqu80ySmJOC68WKG958aXKj-PhFyBwJ9ys6eXmd5C-vr-_PStMX3YdK40X8araW6i9shBSju7o" 
                      className="w-14 h-14 rounded-full object-cover" 
                      alt="Marcus Thorne"
                      referrerPolicy="no-referrer"
                    />
                    <div>
                      <div className="font-bold text-on-surface">Marcus Thorne</div>
                      <div className="text-xs text-on-surface-variant uppercase tracking-widest">CTO, Vertex Logistics</div>
                    </div>
                  </div>
                </div>

                <div className="bg-surface-container-low p-10 rounded-2xl relative lg:ml-12">
                  <div className="flex items-center gap-1 mb-6">
                    {[...Array(5)].map((_, i) => <Star key={i} size={16} className="fill-primary text-primary" />)}
                  </div>
                  <p className="italic text-on-surface text-lg mb-8 leading-relaxed">
                    "Audit season used to be a nightmare. Now, it's just a matter of hitting export. The reporting accuracy is unmatched."
                  </p>
                  <div className="flex items-center gap-4">
                    <img 
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuArJzVDDPINcMYd0g-fc83ofeV-TgQmZkpW81KQxYnMnB5H_5uSkhI_GvP0HOixvwO260ANSjM_yp-jJ72aFhPjSk2qAbcA6c0KRYQfwvyZrmFxoiz_SNZTHYIfuKu5Y1iihqY7ECn4eKrMxz0HAM7zuXLv1IN4wLDdVQXYwPo_1nfOk0am4DT-CCT-OfqKsbShZ8k_imlPbyhTqubW9Hy3Q8QfO0vJOxeFiq_mFByGXrXvf2yHAtNxWTlhEdgGq5f_rae0jz39FhA" 
                      className="w-14 h-14 rounded-full object-cover" 
                      alt="Sarah Jenkins"
                      referrerPolicy="no-referrer"
                    />
                    <div>
                      <div className="font-bold text-on-surface">Sarah Jenkins</div>
                      <div className="text-xs text-on-surface-variant uppercase tracking-widest">Head of Compliance, FinTech Corp</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="hidden lg:block">
              <img 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuD_rjM2ujeCjZdnK7KbIGPDYrOY8OHDtrdX0fog7VzsUHBF1QLNVZCVszSJJWOdLGEwfpmXmRRuRoGHM7rLuyDxoxog61bXGc2_7AT-704AM36kbK9UFLXWcPJ3K48h_9xqYNls6mi9ibpRUQh9Myqu73fKjW8LBfr78OsCa7rqjtkLDTSv4KSB8G4H3aPSi2M81bP8wkFBJsyQ8z69oslSjt9EuGQz3E2i6O0_enfLaso7eKpIpCMNrk7P-ccqO_2q_TDGviw9mpE" 
                className="rounded-3xl grayscale hover:grayscale-0 transition-all duration-700 shadow-2xl" 
                alt="Team working"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-primary">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="font-headline text-4xl md:text-5xl font-extrabold text-white mb-8">Ready to architect your compliance?</h2>
          <p className="text-white/70 text-lg mb-12">Join 500+ enterprises automating their GRC workflows with precision.</p>
          <button className="bg-white text-primary font-bold px-10 py-5 rounded-xl shadow-2xl hover:bg-surface-container-low transition-all text-xl flex items-center gap-3 mx-auto">
            Get Started Now <ArrowRight size={24} />
          </button>
        </div>
      </section>
    </div>
  );
};

const ContactPage = () => {
  return (
    <div className="pt-32 pb-24 px-6 md:px-12 max-w-7xl mx-auto">
      <header className="mb-16 max-w-3xl">
        <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-bold rounded-full mb-6 font-headline tracking-widest uppercase">Connectivity</span>
        <h1 className="text-5xl md:text-7xl font-extrabold font-headline tracking-tighter text-on-surface leading-[1.1] mb-8">
          Get in touch with our team
        </h1>
        <p className="text-lg md:text-xl text-on-surface-variant leading-relaxed max-w-2xl">
          Our architectural approach to compliance doesn't just stop at software. Reach out to our GRC specialists for a technical deep-dive or partnership inquiry.
        </p>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
        {/* Form */}
        <section className="lg:col-span-7 bg-white rounded-2xl p-8 md:p-12 shadow-sm border border-outline-variant/10">
          <form className="space-y-10" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <div className="relative group">
                <label className="block text-xs font-bold text-on-surface-variant uppercase tracking-widest mb-3">Name</label>
                <input 
                  className="w-full bg-transparent border-0 border-b-2 border-outline-variant focus:ring-0 focus:border-primary px-0 py-3 text-on-surface placeholder:text-outline transition-all" 
                  placeholder="Alex Rivera" 
                  type="text"
                />
              </div>
              <div className="relative group">
                <label className="block text-xs font-bold text-on-surface-variant uppercase tracking-widest mb-3">Email</label>
                <input 
                  className="w-full bg-transparent border-0 border-b-2 border-outline-variant focus:ring-0 focus:border-primary px-0 py-3 text-on-surface placeholder:text-outline transition-all" 
                  placeholder="alex@company.com" 
                  type="email"
                />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <div className="relative group">
                <label className="block text-xs font-bold text-on-surface-variant uppercase tracking-widest mb-3">Company</label>
                <input 
                  className="w-full bg-transparent border-0 border-b-2 border-outline-variant focus:ring-0 focus:border-primary px-0 py-3 text-on-surface placeholder:text-outline transition-all" 
                  placeholder="Global Systems Inc." 
                  type="text"
                />
              </div>
              <div className="relative group">
                <label className="block text-xs font-bold text-on-surface-variant uppercase tracking-widest mb-3">Phone <span className="text-outline-variant italic lowercase font-normal">(optional)</span></label>
                <input 
                  className="w-full bg-transparent border-0 border-b-2 border-outline-variant focus:ring-0 focus:border-primary px-0 py-3 text-on-surface placeholder:text-outline transition-all" 
                  placeholder="+1 (555) 000-0000" 
                  type="tel"
                />
              </div>
            </div>
            <div className="relative group">
              <label className="block text-xs font-bold text-on-surface-variant uppercase tracking-widest mb-3">Message</label>
              <textarea 
                className="w-full bg-transparent border-0 border-b-2 border-outline-variant focus:ring-0 focus:border-primary px-0 py-3 text-on-surface placeholder:text-outline transition-all resize-none" 
                placeholder="How can we assist your compliance journey?" 
                rows={4}
              ></textarea>
            </div>
            <div className="flex items-center gap-4 py-4">
              <div className="h-2 w-2 rounded-full bg-primary animate-pulse"></div>
              <p className="text-xs text-on-surface-variant font-medium">Typical response time: 2 business hours</p>
            </div>
            <button className="w-full md:w-auto px-10 py-5 bg-primary text-white font-headline font-extrabold text-sm uppercase tracking-widest rounded-lg shadow-lg hover:bg-primary-container transition-all active:scale-[0.98]">
              Send message
            </button>
          </form>
        </section>

        {/* Sidebar */}
        <aside className="lg:col-span-5 flex flex-col gap-8">
          <div className="bg-surface-container-low p-10 rounded-2xl space-y-12">
            <div className="space-y-4">
              <h3 className="text-xl font-bold font-headline text-primary tracking-tight">Technical Support</h3>
              <p className="text-on-surface-variant leading-relaxed text-sm">Our architectural support team is available for real-time resolution during core hours.</p>
              <div className="pt-6 space-y-6">
                <div className="flex items-center gap-4 group">
                  <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-primary shadow-sm group-hover:bg-primary group-hover:text-white transition-colors">
                    <Mail size={18} />
                  </div>
                  <span className="text-on-surface font-semibold text-sm">support@grcexcellence.io</span>
                </div>
                <div className="flex items-center gap-4 group">
                  <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-primary shadow-sm group-hover:bg-primary group-hover:text-white transition-colors">
                    <Phone size={18} />
                  </div>
                  <span className="text-on-surface font-semibold text-sm">+1 (888) 555-GRC-0</span>
                </div>
                <div className="flex items-center gap-4 group">
                  <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-primary shadow-sm group-hover:bg-primary group-hover:text-white transition-colors">
                    <Clock size={18} />
                  </div>
                  <span className="text-on-surface font-semibold text-sm">Mon - Fri, 9am - 6pm EST</span>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-xs font-bold text-on-surface-variant uppercase tracking-widest">Connect Socially</h3>
              <div className="flex gap-4">
                {[Share2, AtSign, Globe].map((Icon, i) => (
                  <button key={i} className="w-12 h-12 rounded-xl bg-white flex items-center justify-center text-primary shadow-sm hover:bg-primary hover:text-white transition-all duration-300">
                    <Icon size={20} />
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="relative h-72 w-full rounded-2xl overflow-hidden group shadow-xl">
            <img 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDAPDZfwrtX2el1fE43rE9VrewIdiT9n6cvl1LUBZa6j4RS6GAxaRSh31lp_hxbKTwFh1qk4tkPrTyrWaHm-wulkwWmRFeNtr7tHLRgBvajq4qUekEG9i15Y5dG8mMeIILFD2D_SNcg14c6qTsRSeLpnrUE7FTYU8yRmer5P87bOV3SwZaJdszwN2qkynWN366m4MLoz-bjCZcvw9SuL0O4GqlafGilPx11uK1lZCtPpcYTHYJ0FCUItvHZ3yL-Xh1hGrB8THXWoEk" 
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
              alt="Office"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/20 to-transparent flex items-end p-8">
              <div>
                <p className="text-white/80 text-[10px] font-bold uppercase tracking-widest mb-1">Headquarters</p>
                <h4 className="text-white text-xl font-bold font-headline">Financial District, New York</h4>
              </div>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
};

export default function App() {
  const [activePage, setActivePage] = useState('home');

  // Scroll to top on page change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [activePage]);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar activePage={activePage} setActivePage={setActivePage} />
      
      <main className="flex-grow">
        <AnimatePresence mode="wait">
          {activePage === 'home' ? (
            <motion.div
              key="home"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              <HomePage />
            </motion.div>
          ) : (
            <motion.div
              key="contact"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              <ContactPage />
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      <Footer />
    </div>
  );
}
