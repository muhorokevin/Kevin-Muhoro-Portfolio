
import React, { useState, useEffect, useRef } from 'react';
import { 
  Linkedin, 
  Mail, 
  MapPin, 
  Download, 
  ExternalLink, 
  Briefcase, 
  GraduationCap, 
  Award, 
  Phone, 
  ChevronUp, 
  FileText, 
  X, 
  ShieldCheck, 
  Trophy, 
  Zap, 
  Cpu, 
  Rocket, 
  BookOpen, 
  TrendingUp, 
  MessageCircle,
  ArrowUpRight,
  Target,
  BrainCircuit,
  Settings,
  Activity,
  CheckCircle,
  Flame,
  LifeBuoy,
  Tent,
  Menu,
  Search,
  Command
} from 'lucide-react';
import { cvData } from './data';
import AIChatAssistant from './components/AIChatAssistant';

const SectionHeader: React.FC<{ label: string; title: string; subtitle?: string }> = ({ label, title, subtitle }) => (
  <div className="mb-16 space-y-4">
    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20">
      <div className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" />
      <span className="text-[10px] font-black uppercase tracking-[0.2em] text-blue-400">{label}</span>
    </div>
    <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tight uppercase">{title}</h2>
    {subtitle && <p className="text-slate-500 max-w-2xl text-lg font-medium">{subtitle}</p>}
  </div>
);

const DFTReportModal: React.FC<{ isOpen: boolean; onClose: () => void }> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 no-print">
      <div className="absolute inset-0 bg-black/90 backdrop-blur-2xl" onClick={onClose} />
      <div className="relative w-full max-w-5xl max-h-[90vh] bg-[#0a0f1e] rounded-[2rem] shadow-2xl overflow-hidden flex flex-col border border-white/10">
        <div className="p-6 border-b border-white/10 flex justify-between items-center bg-slate-900/40 backdrop-blur-md sticky top-0 z-10">
          <div className="flex items-center gap-4">
            <div className="p-2.5 bg-blue-500/10 text-blue-400 rounded-xl border border-blue-500/20">
              <FileText size={18} />
            </div>
            <div>
              <h3 className="font-bold text-white text-sm">Industrial Analysis Archive</h3>
              <p className="text-[10px] text-blue-400 font-bold uppercase tracking-widest">Technical Division 01</p>
            </div>
          </div>
          <button onClick={onClose} className="p-2 hover:bg-white/5 rounded-full transition-colors text-slate-400 hover:text-white">
            <X size={20} />
          </button>
        </div>
        <div className="flex-1 overflow-y-auto p-10 sm:p-20 text-slate-300 leading-relaxed custom-scrollbar bg-[#0a0f1e]">
          <div className="max-w-4xl mx-auto space-y-12">
            <div className="text-center space-y-6">
              <div className="inline-block px-3 py-1 rounded-md bg-blue-500/5 text-blue-400 border border-blue-500/20 text-[10px] font-black uppercase tracking-[0.2em]">Quantum Materials Research</div>
              <h1 className="text-4xl sm:text-5xl font-bold text-white tracking-tight">First-Principles Investigation of <span className="text-blue-500">TiNiSn</span> Properties</h1>
              <p className="text-slate-500 font-medium">Conducted by Kevin Muhoro | Lead Research Analyst</p>
            </div>
            <div className="space-y-6 text-lg text-slate-400">
              <p>This initiative leveraged advanced Density Functional Theory (DFT) to analyze the semiconducting phase of TiNiSn. The core objective was was to determine its viability for next-generation solar energy harvesting and UV photodetection.</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {['SIESTA Framework Integration', 'Optical Band Gap Mapping', 'Dielectric Response Analysis', 'Atomic Structure Optimization'].map((item, i) => (
                  <div key={i} className="p-4 rounded-xl bg-white/5 border border-white/5 flex items-center gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                    <span className="text-sm font-semibold">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="p-6 border-t border-white/10 bg-[#0a0f1e] flex justify-end">
          <button onClick={onClose} className="px-8 py-3 bg-blue-600 text-white rounded-xl font-bold text-xs uppercase tracking-widest hover:bg-blue-500 transition-all">Dismiss Archive</button>
        </div>
      </div>
    </div>
  );
};

const App: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [reportModalOpen, setReportModalOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('about');
  const [statusMessage, setStatusMessage] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollTop;
      const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      setScrollProgress(totalScroll / windowHeight);
      setScrolled(totalScroll > 50);
      setShowBackToTop(totalScroll > 500);
    };

    // Scrollspy Logic
    const observerOptions = {
      root: null,
      rootMargin: '-20% 0px -60% 0px',
      threshold: 0
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActiveTab(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    const sections = ['about', 'experience', 'expertise', 'projects', 'education', 'certificates', 'contact'];
    sections.forEach(id => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      observer.disconnect();
    };
  }, []);

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const handleDownloadCV = () => {
    const link = document.createElement('a');
    link.href = '/Kevin_Muhoro_CV.pdf';
    link.download = 'Kevin_Muhoro_CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleProjectClick = (project: any) => {
    if (project.hasReport) setReportModalOpen(true);
    else if (project.link && project.link !== '#') window.open(project.link, '_blank', 'noopener,noreferrer');
  };

  const checkStatus = () => {
    setStatusMessage("Systems 100% Operational • Latency: 14ms");
    setTimeout(() => setStatusMessage(null), 3000);
  };

  const whatsappLink = `https://wa.me/${cvData.personal.phone.replace(/[^0-9]/g, '')}`;

  const navLinks = [
    { id: 'about', label: 'Identity' },
    { id: 'experience', label: 'Ecosystem' },
    { id: 'expertise', label: 'Matrix' },
    { id: 'projects', label: 'Projects' },
    { id: 'education', label: 'Blueprint' },
  ];

  return (
    <div className="min-h-screen selection:bg-blue-600/30">
      {/* Dynamic Background */}
      <div className="fixed inset-0 -z-50 overflow-hidden bg-[#020617] no-print">
        <div className="absolute top-0 -left-20 w-[600px] h-[600px] bg-blue-900/10 blur-[150px] rounded-full" />
        <div className="absolute bottom-0 -right-20 w-[800px] h-[800px] bg-indigo-900/10 blur-[200px] rounded-full" />
        <div className="absolute inset-0 opacity-[0.02]" style={{ backgroundImage: `radial-gradient(circle at 2px 2px, #fff 1px, transparent 0)`, backgroundSize: '48px 48px' }} />
      </div>

      {/* Status Toast */}
      {statusMessage && (
        <div className="fixed top-24 right-6 z-[100] premium-glass px-6 py-3 rounded-2xl border-blue-500/30 animate-reveal flex items-center gap-3">
          <Activity size={16} className="text-blue-400 animate-pulse" />
          <span className="text-[10px] font-black uppercase tracking-widest text-white">{statusMessage}</span>
        </div>
      )}

      {/* Progress Bar */}
      <div className="fixed top-0 left-0 w-full h-[2px] bg-white/5 z-[110] no-print">
        <div className="h-full bg-gradient-to-r from-blue-600 to-cyan-500 shadow-[0_0_10px_#3b82f6]" style={{ width: `${scrollProgress * 100}%` }} />
      </div>

      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-[100] transition-all duration-700 no-print ${scrolled ? 'py-3 translate-y-0' : 'py-6'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className={`flex justify-between items-center px-6 sm:px-8 py-3 rounded-[1.5rem] sm:rounded-[2rem] transition-all duration-700 ${scrolled ? 'bg-slate-950/80 backdrop-blur-xl border border-white/10 shadow-2xl' : 'bg-transparent border border-transparent'}`}>
            
            {/* Logo Integrated into Search Bar */}
            <div className="flex items-center gap-4">
              <button 
                onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})} 
                className={`group flex items-center gap-2 px-2 py-2 pr-6 rounded-[1.25rem] transition-all duration-500 border ${scrolled ? 'bg-white/5 border-white/10' : 'bg-white/10 border-white/20'} hover:border-blue-500/50 hover:bg-blue-600/5`}
              >
                <div className="w-9 h-9 sm:w-10 sm:h-10 bg-white text-slate-950 rounded-xl flex items-center justify-center text-base sm:text-lg font-black group-hover:rotate-12 transition-transform shadow-lg">KM</div>
                <div className="flex flex-col text-left">
                  <div className="flex items-center gap-2">
                    <Search size={12} className="text-blue-500" />
                    <span className="font-bold text-[10px] tracking-tight text-white uppercase leading-none">Search Expertise...</span>
                  </div>
                  <span className="text-[8px] font-black text-slate-500 tracking-[0.2em] uppercase leading-none mt-1">Command v1.0</span>
                </div>
                <div className="ml-4 px-2 py-1 bg-white/5 rounded-md border border-white/10 hidden xl:flex items-center gap-1">
                   <Command size={10} className="text-slate-500" />
                   <span className="text-[8px] font-black text-slate-500">K</span>
                </div>
              </button>
            </div>

            {/* Desktop Links */}
            <div className="hidden lg:flex items-center gap-10">
              {navLinks.map((link) => (
                <button 
                  key={link.id} 
                  onClick={() => scrollToSection(link.id)} 
                  className={`relative group text-[10px] font-black uppercase tracking-[0.2em] transition-all py-2 ${activeTab === link.id ? 'text-blue-400' : 'text-slate-500 hover:text-slate-200'}`}
                >
                  {link.label}
                  <span className={`absolute bottom-0 left-0 h-0.5 bg-blue-500 transition-all duration-500 ${activeTab === link.id ? 'w-full shadow-[0_0_8px_#3b82f6]' : 'w-0 group-hover:w-1/2 opacity-50'}`} />
                </button>
              ))}
            </div>

            {/* Actions */}
            <div className="flex items-center gap-4">
              <button 
                onClick={() => scrollToSection('contact')} 
                className="hidden sm:block px-6 py-2.5 rounded-xl bg-blue-600 text-white text-[10px] font-black uppercase tracking-widest hover:bg-blue-500 hover:-translate-y-1 transition-all shadow-xl shadow-blue-600/20"
              >
                Inquire
              </button>
              
              {/* Mobile Toggle */}
              <button 
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden p-2 rounded-lg bg-white/5 border border-white/10 text-slate-300 hover:text-white transition-all"
              >
                {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        <div className={`fixed inset-0 top-[88px] bg-slate-950/95 backdrop-blur-2xl lg:hidden transition-all duration-500 ease-in-out ${mobileMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4 pointer-events-none'}`}>
          <div className="p-8 flex flex-col gap-6">
            {navLinks.map((link) => (
              <button 
                key={link.id} 
                onClick={() => scrollToSection(link.id)} 
                className={`flex items-center justify-between p-5 rounded-2xl border transition-all ${activeTab === link.id ? 'bg-blue-600/10 border-blue-500/30 text-white' : 'bg-white/5 border-white/5 text-slate-400'}`}
              >
                <span className="text-sm font-black uppercase tracking-widest">{link.label}</span>
                <ArrowUpRight size={16} className={activeTab === link.id ? 'text-blue-400' : 'text-slate-600'} />
              </button>
            ))}
            <button 
              onClick={() => scrollToSection('contact')} 
              className="mt-4 w-full p-6 rounded-2xl bg-blue-600 text-white font-black uppercase tracking-widest text-center shadow-2xl shadow-blue-600/20"
            >
              Consult Executive
            </button>
            
            <div className="mt-auto pt-8 border-t border-white/5 flex justify-center gap-8">
               <a href={cvData.personal.socials.linkedin} className="text-slate-500 hover:text-blue-400"><Linkedin size={20} /></a>
               <a href={`mailto:${cvData.personal.email}`} className="text-slate-500 hover:text-blue-400"><Mail size={20} /></a>
               <a href={whatsappLink} className="text-slate-500 hover:text-green-400"><MessageCircle size={20} /></a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="about" className="relative min-h-[95vh] flex items-center pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto w-full">
          <div className="grid lg:grid-cols-12 gap-16 items-center">
            <div className="lg:col-span-8 space-y-12 reveal-item" style={{ animationDelay: '0.1s' }}>
              <div className="inline-flex items-center gap-3 px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-[10px] font-black uppercase tracking-[0.3em] text-blue-400">
                <Zap size={14} /> Systems Orchestrator & Specialist
              </div>
              
              <div className="space-y-6">
                <h1 className="text-7xl md:text-[9.5rem] font-bold leading-[0.85] tracking-tight text-white uppercase">
                  KEVIN <br/>
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-indigo-400 to-slate-200">MUHORO</span>
                </h1>
                <div className="flex flex-wrap gap-5 items-center pt-2">
                  <span className="text-blue-400 text-xs font-bold uppercase tracking-widest border-b border-blue-500/30 pb-1">Founder: Cross Connect Africa</span>
                  <span className="text-slate-600 text-xl font-thin">/</span>
                  <span className="text-slate-300 text-xs font-bold uppercase tracking-widest border-b border-white/10 pb-1">Physicist</span>
                  <span className="text-slate-600 text-xl font-thin">/</span>
                  <span className="text-slate-300 text-xs font-bold uppercase tracking-widest border-b border-white/10 pb-1">Security Specialist</span>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-8 items-start">
                <p className="text-xl md:text-2xl text-slate-400 leading-relaxed font-medium">
                  {cvData.personal.bio.substring(0, 140)}...
                </p>
                <div className="flex flex-col gap-4 p-7 premium-glass rounded-[2rem] glow-hover transition-all">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-blue-500/10 text-blue-400 rounded-lg"><Target size={18} /></div>
                    <p className="text-[10px] font-black uppercase tracking-widest text-white">Strategic Vision</p>
                  </div>
                  <p className="text-sm text-slate-400 leading-relaxed italic">"Faith-centered and purpose-driven, I value excellence, continuous growth, and creating solutions that make a difference."</p>
                </div>
              </div>

              <div className="flex flex-wrap gap-6 no-print">
                <button onClick={handleDownloadCV} className="group relative flex items-center gap-4 bg-white text-slate-950 px-10 py-5 rounded-2xl hover:scale-105 transition-all font-black text-xs uppercase tracking-widest overflow-hidden shadow-2xl">
                  <Download size={18} /> Export Profile
                </button>
                <div className="flex items-center gap-4">
                  <a href={cvData.personal.socials.linkedin} target="_blank" rel="noopener noreferrer" className="p-5 bg-white/5 border border-white/10 rounded-2xl hover:bg-white/10 hover:border-blue-500/50 transition-all text-slate-400 hover:text-white" title="LinkedIn"><Linkedin size={22} /></a>
                  <a href={`mailto:${cvData.personal.email}`} className="p-5 bg-white/5 border border-white/10 rounded-2xl hover:bg-white/10 hover:border-blue-500/50 transition-all text-slate-400 hover:text-white" title="Email"><Mail size={22} /></a>
                  <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="p-5 bg-white/5 border border-white/10 rounded-2xl hover:bg-white/10 hover:border-blue-500/50 transition-all text-slate-400 hover:text-white" title="WhatsApp"><MessageCircle size={22} /></a>
                </div>
              </div>
            </div>
            
            <div className="lg:col-span-4 hidden lg:block reveal-item" style={{ animationDelay: '0.3s' }}>
              <div className="relative group p-4">
                <div className="absolute inset-0 bg-blue-600/10 blur-[100px] rounded-full group-hover:bg-blue-600/20 transition-all duration-1000" />
                <div className="relative aspect-[4/5] rounded-[2.5rem] overflow-hidden border border-white/10 group-hover:border-blue-500/30 transition-all duration-700 bg-slate-900 shadow-2xl scale-95 group-hover:scale-100">
                  <img src={cvData.personal.profileImage} alt="Profile" className="w-full h-full object-cover grayscale brightness-[0.7] group-hover:grayscale-0 group-hover:brightness-90 transition-all duration-1000" />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent opacity-60" />
                  <div className="absolute bottom-10 right-10 flex justify-end items-end">
                    <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center bg-black/40 backdrop-blur-md">
                      <ShieldCheck size={18} className="text-blue-400" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Business & Experience */}
      <section id="experience" className="py-32 px-6 border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <SectionHeader 
            label="Strategic Ventures" 
            title="THE PROFESSIONAL ECOSYSTEM." 
            subtitle="Architecting growth-oriented platforms and leading teams through complex operational challenges."
          />
          <div className="grid lg:grid-cols-12 gap-6">
            {cvData.experiences.map((exp, idx) => (
              <div 
                key={idx} 
                className={`group relative p-12 rounded-[2.5rem] transition-all duration-500 ${idx < 2 ? 'lg:col-span-6 bg-blue-900/5 border border-blue-500/20' : 'lg:col-span-4 bg-white/[0.02] border border-white/5'} hover:border-blue-500/40 hover:bg-blue-900/10`}
              >
                <div className="flex flex-col h-full justify-between gap-12">
                  <div className="space-y-8">
                    <div className="flex justify-between items-start">
                      <div className="space-y-3">
                        <div className="flex items-center gap-3">
                           <span className="text-[10px] font-black bg-white text-slate-950 px-3 py-1.5 rounded-lg uppercase tracking-widest">{exp.period}</span>
                           <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">{exp.location}</span>
                        </div>
                        <h3 className="text-2xl font-bold text-white tracking-tight leading-tight">{exp.role}</h3>
                        <p className="text-blue-500 font-bold text-md tracking-widest uppercase">{exp.company}</p>
                      </div>
                      <div className="p-4 rounded-2xl bg-white/5 border border-white/10 group-hover:bg-blue-600 group-hover:text-white transition-all">
                        <Briefcase size={22} />
                      </div>
                    </div>
                    <ul className="space-y-4">
                      {exp.description.map((item, i) => (
                        <li key={i} className="text-slate-400 text-sm leading-relaxed flex gap-4">
                          <div className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-2 flex-shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="flex flex-wrap gap-2.5">
                    {exp.skills.map((s, i) => (
                      <span key={i} className="text-[9px] font-black uppercase tracking-widest text-slate-400 bg-white/5 px-4 py-2 rounded-lg border border-white/5">{s}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Matrix */}
      <section id="expertise" className="py-32 px-6 bg-black/40">
        <div className="max-w-7xl mx-auto">
          <SectionHeader 
            label="Competency Matrix" 
            title="TECHNICAL ARCHITECTURE." 
            subtitle="A multi-disciplinary stack combining technical engineering with high-stakes safety and leadership readiness."
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {cvData.skills.map((skillGroup, idx) => (
              <div key={idx} className={`group p-10 rounded-[2.5rem] border transition-all duration-500 relative overflow-hidden ${skillGroup.category === 'Tactical & Safety' ? 'bg-blue-600/5 border-blue-500/20' : 'bg-[#0a0f1e] border-white/5 hover:border-blue-500/30'}`}>
                <div className="absolute top-0 right-0 p-8 text-white/5 group-hover:text-blue-500/10 transition-colors">
                  {skillGroup.category === 'Tactical & Safety' ? <Flame size={100} strokeWidth={1} /> : <BrainCircuit size={100} strokeWidth={1} />}
                </div>
                <div className="relative z-10">
                  <h4 className="font-black text-blue-500 text-[10px] uppercase tracking-[0.3em] mb-12 border-b border-white/5 pb-4">{skillGroup.category}</h4>
                  <div className="space-y-4">
                    {skillGroup.items.map((skill, i) => (
                      <div key={i} className="flex items-center gap-3.5 group/item">
                        <div className={`w-2 h-2 rounded-full transition-colors ${skillGroup.category === 'Tactical & Safety' ? 'bg-blue-500' : 'bg-slate-800 group-hover/item:bg-blue-500'}`} />
                        <span className="text-slate-400 font-semibold text-sm tracking-tight group-hover/item:text-white transition-colors">{skill}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Initiatives */}
      <section id="projects" className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end gap-10 mb-20">
            <div className="max-w-xl">
               <SectionHeader label="Portfolio" title="SYSTEMS & INITIATIVES." />
            </div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {cvData.projects.map((project, idx) => (
              <div 
                key={idx} 
                onClick={() => handleProjectClick(project)} 
                className="group cursor-pointer relative rounded-[3rem] overflow-hidden border border-white/5 transition-all duration-700 hover:border-blue-500/30 bg-white/[0.01]"
              >
                <div className="relative aspect-[16/11] overflow-hidden">
                  <img src={project.image} alt={project.title} className="w-full h-full object-cover grayscale brightness-[0.6] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-transparent" />
                  <div className="absolute top-8 right-8 no-print">
                    <div className="w-12 h-12 premium-glass rounded-2xl flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-all scale-75 group-hover:scale-100">
                      {project.hasReport ? <FileText size={20} /> : <ArrowUpRight size={20} />}
                    </div>
                  </div>
                </div>
                <div className="p-10 space-y-5">
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, i) => (
                      <span key={i} className="text-[8px] font-black uppercase tracking-widest text-blue-400 px-3 py-1 rounded-md bg-blue-500/5 border border-blue-500/10">{tag}</span>
                    ))}
                  </div>
                  <h3 className="text-2xl font-bold text-white tracking-tight">{project.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed font-medium line-clamp-2 group-hover:line-clamp-none transition-all">{project.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Qualifications */}
      <section id="education" className="py-32 px-6 bg-white/[0.02]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-24">
             <SectionHeader label="Academic Blueprint" title="EXECUTIVE QUALIFICATIONS." />
          </div>
          <div className="max-w-4xl mx-auto space-y-6">
            {cvData.education.map((edu, idx) => (
              <div key={idx} className="group premium-glass p-12 rounded-[2.5rem] flex flex-col md:flex-row justify-between items-center gap-10 hover:bg-white/[0.04] transition-all duration-500 border border-white/5">
                <div className="flex items-center gap-10">
                  <div className="w-20 h-20 rounded-3xl bg-blue-500/5 border border-blue-500/10 flex items-center justify-center text-blue-500 group-hover:bg-blue-600 group-hover:text-white transition-all shadow-xl shadow-blue-500/5">
                    <GraduationCap size={32} />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-2xl font-bold text-white tracking-tight">{edu.degree}</h3>
                    <p className="text-blue-500 font-bold uppercase tracking-widest text-sm">{edu.institution}</p>
                    <p className="text-slate-500 text-xs font-bold uppercase tracking-widest">{edu.location}</p>
                  </div>
                </div>
                <div className="text-center md:text-right">
                   <p className="text-xs font-black uppercase tracking-widest text-slate-500 mb-2">{edu.period}</p>
                   {edu.details && <p className="text-slate-400 text-xs font-medium tracking-tight uppercase">{edu.details.join(' • ')}</p>}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Credentials */}
      <section id="certificates" className="py-32 px-6 border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end gap-10 mb-24">
            <SectionHeader label="Verification" title="CERTIFIED EXPERTISE." subtitle="Industry-standard validations of technical and analytical proficiency." />
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {cvData.certificates.map((cert, idx) => (
              <div key={idx} className="group premium-glass p-8 rounded-[2.5rem] border border-white/5 hover:border-blue-500/50 transition-all duration-700">
                <div className="aspect-video rounded-2xl overflow-hidden mb-8 relative bg-slate-800 border border-white/5">
                  <img src={cert.image} alt={cert.title} className="w-full h-full object-cover opacity-40 group-hover:opacity-100 group-hover:scale-105 transition-all duration-1000" />
                  <div className="absolute inset-0 bg-blue-600/10 mix-blend-multiply" />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                     <ShieldCheck className="text-white drop-shadow-2xl" size={40} />
                  </div>
                </div>
                <h3 className="font-bold text-white text-lg leading-tight mb-2 uppercase tracking-tight">{cert.title}</h3>
                <p className="text-blue-500 font-black text-[10px] uppercase tracking-widest mb-6">{cert.issuer}</p>
                <div className="pt-4 border-t border-white/5 flex items-center justify-between">
                   <span className="text-slate-500 text-[9px] font-black uppercase tracking-widest">{cert.date}</span>
                   <Award size={14} className="text-blue-500/40" />
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-24 grid md:grid-cols-2 gap-8">
             {cvData.awards.map((award, idx) => (
                <div key={idx} className="p-10 rounded-[2.5rem] bg-white/[0.02] border border-white/5 group hover:bg-white/[0.04] transition-all duration-500 flex gap-8 items-start">
                  <div className="w-14 h-14 rounded-2xl bg-blue-500/5 flex items-center justify-center text-blue-500 border border-blue-500/10 group-hover:bg-blue-600 group-hover:text-white transition-all flex-shrink-0">
                    <Trophy size={24} />
                  </div>
                  <div className="space-y-3">
                    <h4 className="text-white font-bold text-lg tracking-tight uppercase">{award.title}</h4>
                    <p className="text-blue-500 text-[10px] font-black uppercase tracking-widest">{award.organization}</p>
                    <p className="text-slate-400 text-sm leading-relaxed font-medium">{award.description}</p>
                  </div>
                </div>
             ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-40 px-6 relative overflow-hidden bg-black/20">
        <div className="max-w-5xl mx-auto text-center space-y-20">
          <div className="space-y-6">
            <div className="inline-block px-4 py-2 rounded-xl bg-blue-500/5 text-blue-400 border border-blue-500/10 text-[10px] font-black uppercase tracking-[0.4em]">Initialize Communication</div>
            <h2 className="text-6xl md:text-[8rem] font-bold text-white tracking-tighter leading-[0.85] uppercase">SECURE <br/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-white">CONNECT.</span></h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <a href={`mailto:${cvData.personal.email}`} className="group p-12 rounded-[3rem] premium-glass hover:bg-white/5 transition-all duration-500">
               <div className="w-14 h-14 bg-white text-slate-950 mx-auto mb-8 flex items-center justify-center rounded-2xl group-hover:scale-110 transition-transform"><Mail size={24} /></div>
               <p className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-500 mb-3">Protocol</p>
               <p className="text-white font-bold text-sm break-all tracking-tight">{cvData.personal.email}</p>
            </a>
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="group p-12 rounded-[3rem] premium-glass hover:bg-white/5 transition-all duration-500">
               <div className="w-14 h-14 bg-blue-600 text-white mx-auto mb-8 flex items-center justify-center rounded-2xl group-hover:scale-110 transition-transform"><MessageCircle size={24} /></div>
               <p className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-500 mb-3">Direct Sync</p>
               <p className="text-white font-bold text-lg tracking-tight uppercase">{cvData.personal.phone}</p>
            </a>
            <a href={cvData.personal.socials.linkedin} target="_blank" rel="noopener noreferrer" className="group p-12 rounded-[3rem] premium-glass hover:bg-white/5 transition-all duration-500">
               <div className="w-14 h-14 bg-indigo-600 text-white mx-auto mb-8 flex items-center justify-center rounded-2xl group-hover:scale-110 transition-transform"><Linkedin size={24} /></div>
               <p className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-500 mb-3">Network ID</p>
               <p className="text-white font-bold text-lg tracking-tight uppercase">LinkedIn</p>
            </a>
          </div>

          <div className="pt-20">
             <button onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})} className="p-6 rounded-full bg-white/5 border border-white/10 text-white hover:bg-white/10 hover:-translate-y-2 transition-all">
                <ChevronUp size={28} />
             </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-24 border-t border-white/5 bg-[#020617] px-6 no-print">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-12">
          <div className="flex items-center gap-6">
            <div className="w-12 h-12 bg-white text-slate-950 rounded-xl flex items-center justify-center text-xl font-black">KM</div>
            <div className="text-left">
              <h4 className="font-bold text-white uppercase text-sm tracking-widest">Kevin Muhoro</h4>
              <p className="text-blue-500 text-[9px] font-black tracking-[0.3em] uppercase">Venture Strategy & Systems Security</p>
            </div>
          </div>
          <div className="flex gap-10 text-[10px] font-black uppercase tracking-[0.3em] text-slate-500">
             <button onClick={() => scrollToSection('projects')} className="hover:text-blue-400 transition-colors uppercase">Digital Archive</button>
             <button onClick={() => scrollToSection('contact')} className="hover:text-blue-400 transition-colors uppercase">Privacy Node</button>
             <button onClick={checkStatus} className="hover:text-blue-400 transition-colors uppercase flex items-center gap-2">
               System Status
               <div className="w-1.5 h-1.5 rounded-full bg-green-500" />
             </button>
          </div>
          <p className="text-slate-700 text-[9px] font-black uppercase tracking-[0.4em]">© {new Date().getFullYear()} MUHORO EXECUTIVE SYSTEMS.</p>
        </div>
      </footer>

      <AIChatAssistant />
      <DFTReportModal isOpen={reportModalOpen} onClose={() => setReportModalOpen(false)} />
    </div>
  );
};

export default App;
