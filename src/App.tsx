import { useState } from 'react';
import svgPaths from "./imports/svg-b1bdxvco7w";
import newSvgPaths from "./imports/svg-cmbi1ho2rb";
import faqSvgPaths from "./imports/svg-euuqy5iujf";
import footerSvgPaths from "./imports/svg-9i1qcnhox9";
import mobileSvgPaths from "./imports/svg-c94r8dud7u";
import menuSvgPaths from "./imports/svg-otxj78qbot";
import heroSvgPaths from "./imports/svg-8xw8k6r3a6";
import imgLogo from "figma:asset/623484c955539fdb3d5670ecdfb54bc8aaf53029.png";
import imgImage from "figma:asset/58565a45bba2183a7b6373dfbc0daf7544e884a5.png";
import imgAbstractCurveGeometriesBackground3DRenderingDigitalDrawing1 from "figma:asset/ee22f72ed24be348966b55c4f05ed2c779f56511.png";

import { Button } from './components/Button';
import { IconCard } from './components/IconCard';
import { ProductCard } from './components/ProductCard';
import { Badge } from './components/Badge';
import { FormInput } from './components/FormInput';
import { Toaster } from './components/ui/sonner';
import { toast } from "sonner@2.0.3";

export default function App() {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [openFAQ, setOpenFAQ] = useState<number>(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isPromoVisible, setIsPromoVisible] = useState(true);

  // Функция валидации email
  const isValidEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  // Функция для переключения FAQ
  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? -1 : index);
  };

  // Функция для переключения мобильного меню
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Функция для скрытия промо-бара
  const hidePromoBar = () => {
    setIsPromoVisible(false);
  };

  // Данные FAQ
  const faqData = [
    {
      question: "Is DecoderMD a diagnostic tool?",
      answer: "No, DecoderMD is an educational platform designed to help you understand your medical bills and lab results. It does not provide medical diagnoses or treatment recommendations. Always consult with your healthcare provider for medical decisions and interpretations."
    },
    {
      question: "How secure is my health information?",
      answer: "We take security seriously. DecoderMD is 100% HIPAA compliant and uses bank-level encryption to protect your data. Your information is never shared with third parties and is stored on secure, encrypted servers."
    },
    {
      question: "What types of medical bills can DecoderMD analyze?",
      answer: "DecoderMD can analyze most types of medical bills including hospital bills, physician charges, laboratory fees, imaging costs, and insurance explanation of benefits (EOB) statements. Our AI recognizes thousands of medical codes and procedures."
    },
    {
      question: "How accurate is the lab result interpretation?",
      answer: "Our lab result interpretations are developed by board-certified physicians and are highly accurate for educational purposes. However, DecoderMD should complement, not replace, discussions with your healthcare provider about your results."
    },
    {
      question: "When will DecoderMD be available?",
      answer: "We're currently in beta testing with select users. Join our waiting list to be among the first to access the platform when we launch publicly. Early members receive a 20% discount on their first year."
    },
    {
      question: "What's the difference between consumer and business plans?",
      answer: "Consumer plans are designed for individuals and families to understand their personal medical bills and lab results. Business plans offer bulk processing capabilities for healthcare organizations, insurance companies, and employers."
    }
  ];

  // SVG иконки
  const DollarIcon = () => (
    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11 16">
      <path d={newSvgPaths.p130e500} fill="white" />
    </svg>
  );

  const ClockIcon = () => (
    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19 19">
      <path d={newSvgPaths.p35a0c180} fill="white" />
    </svg>
  );

  const BrainIcon = () => (
    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19 19">
      <path d={newSvgPaths.p3a133100} fill="white" />
    </svg>
  );

  const HeartIcon = () => (
    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19 19">
      <path d={newSvgPaths.pa4fe400} fill="white" />
    </svg>
  );

  const CheckIcon = () => (
    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
      <path d={footerSvgPaths.p2b418600} fill="white" />
    </svg>
  );

  const EmailIcon = () => (
    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
      <path d={footerSvgPaths.p20381480} fill="white" />
    </svg>
  );

  const CloseIcon = () => (
    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
      <path d={svgPaths.p2ca28800} fill="#F2FAFF" />
    </svg>
  );

  const MenuIcon = () => (
    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
      <path d={mobileSvgPaths.p218f7000} fill="#343330" />
    </svg>
  );

  const MobileCloseIcon = () => (
    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
      <path d={menuSvgPaths.p2ca28800} fill="#292D33" />
    </svg>
  );

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (fullName.trim() && email.trim() && isValidEmail(email.trim())) {
      // Показываем успешное уведомление
      toast.success("Successfully joined the waiting list!", {
        description: "We'll notify you when DecoderMD launches. Welcome aboard!",
        duration: 4000,
        className: "black-text-toast"
      });
      
      // Очищаем форму
      setFullName('');
      setEmail('');
      
      console.log('Form submitted:', { fullName: fullName.trim(), email: email.trim() });
    }
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = isPromoVisible ? 115 : 77; // Учитываем высоту промо-бара
      const targetPosition = element.offsetTop - offset;
      
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
    }
    
    if (isMobileMenuOpen) {
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <div className="bg-white relative w-full">
      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 bg-white z-[60] lg:hidden animate-in fade-in duration-300">
          <div className="box-border content-stretch flex flex-col gap-6 items-start justify-start p-[24px] relative size-full">
            <button 
              className="font-['Fustat:Regular',_sans-serif] font-normal leading-[0] relative shrink-0 text-[#292d33] text-[14px] cursor-pointer hover:text-[#4692e4] transition-colors duration-200"
              onClick={() => scrollToSection('features')}
            >
              <p className="leading-[1.3]">Features</p>
            </button>
            <button 
              className="font-['Fustat:Regular',_sans-serif] font-normal leading-[0] relative shrink-0 text-[#292d33] text-[14px] cursor-pointer hover:text-[#4692e4] transition-colors duration-200"
              onClick={() => scrollToSection('about')}
            >
              <p className="leading-[1.3]">About</p>
            </button>
            <button 
              className="font-['Fustat:Regular',_sans-serif] font-normal leading-[0] relative shrink-0 text-[#292d33] text-[14px] cursor-pointer hover:text-[#4692e4] transition-colors duration-200"
              onClick={() => scrollToSection('faq')}
            >
              <p className="leading-[1.3]">FAQ</p>
            </button>
            <button 
              className="font-['Fustat:Regular',_sans-serif] font-normal leading-[0] relative shrink-0 text-[#292d33] text-[14px] cursor-pointer hover:text-[#4692e4] transition-colors duration-200"
              onClick={() => scrollToSection('contact')}
            >
              <p className="leading-[1.3]">Contact</p>
            </button>
            <button 
              className="absolute right-4 size-4 top-4 cursor-pointer hover:scale-110 transition-transform duration-200" 
              onClick={toggleMobileMenu}
            >
              <MobileCloseIcon />
            </button>
          </div>
        </div>
      )}

      {/* Promo Bar */}
      <div 
        className={`fixed bg-[#1a4a8a] h-[38px] left-0 top-0 w-full z-50 transition-all duration-500 ${
          isPromoVisible 
            ? 'translate-y-0 opacity-100' 
            : '-translate-y-full opacity-0 pointer-events-none'
        }`}
      >
        <div className="relative h-full flex items-center justify-center">
          <div className="font-['Fustat:Regular',_sans-serif] font-normal leading-[0] text-[#f2faff] text-[12px] text-nowrap">
            <p className="leading-[1.3] whitespace-pre">Join our waiting list and save 20% on your first year!</p>
          </div>
          <button 
            className="absolute right-4 size-4 cursor-pointer hover:scale-110 transition-transform duration-200"
            onClick={hidePromoBar}
          >
            <CloseIcon />
          </button>
        </div>
      </div>

      {/* Header */}
      <header className={`sticky ${isPromoVisible ? 'top-[38px]' : 'top-0'} bg-white/95 backdrop-blur-sm border-b border-gray-100 z-40 transition-all duration-500 ${!isPromoVisible ? 'shadow-sm' : ''}`}>
        <div className="content-stretch flex items-center justify-between mx-4 lg:mx-auto lg:max-w-[1160px] h-[77px]">
          <div 
            className="bg-center bg-cover bg-no-repeat shrink-0 size-[60px] cursor-pointer hover:scale-105 transition-transform duration-200" 
            style={{ backgroundImage: `url('${imgLogo}')` }}
            onClick={() => scrollToSection('hero')}
          />
          
          {/* Desktop Navigation */}
          <nav className="hidden lg:flex content-stretch font-['Fustat:Regular',_sans-serif] font-normal gap-6 items-start justify-start leading-[0] overflow-clip relative shrink-0 text-[#292d33] text-[0px] text-nowrap">
            <button className="relative shrink-0 cursor-pointer group">
              <p 
                className="leading-[1.3] text-[#292d33] text-[14px] text-nowrap whitespace-pre group-hover:text-[#4692e4] transition-colors duration-200"
                onClick={() => scrollToSection('features')}
              >Features</p>
            </button>
            <button className="relative shrink-0 cursor-pointer group">
              <p 
                className="leading-[1.3] text-[#292d33] text-[14px] text-nowrap whitespace-pre group-hover:text-[#4692e4] transition-colors duration-200"
                onClick={() => scrollToSection('about')}
              >About</p>
            </button>
            <button className="relative shrink-0 cursor-pointer group">
              <p 
                className="leading-[1.3] text-[#292d33] text-[14px] text-nowrap whitespace-pre group-hover:text-[#4692e4] transition-colors duration-200"
                onClick={() => scrollToSection('faq')}
              >FAQ</p>
            </button>
            <button className="relative shrink-0 cursor-pointer group">
              <p 
                className="leading-[1.3] text-[#292d33] text-[14px] text-nowrap whitespace-pre group-hover:text-[#4692e4] transition-colors duration-200"
                onClick={() => scrollToSection('contact')}
              >Contact</p>
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button className="lg:hidden relative shrink-0 size-8 cursor-pointer hover:scale-110 transition-transform duration-200" onClick={toggleMobileMenu}>
            <MenuIcon />
          </button>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section id="hero" className="relative min-h-[550px] flex items-center justify-center overflow-hidden">
          {/* Mobile Background */}
          <div className="lg:hidden absolute inset-0">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 361 550">
              <g clipPath="url(#clip0_13_1408)">
                <rect fill="#4692E4" height="550" rx="24" width="361" />
                <path clipRule="evenodd" d={heroSvgPaths.p38ca3400} fill="url(#paint0_linear_13_1408)" fillOpacity="0.2" fillRule="evenodd" />
              </g>
              <defs>
                <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_13_1408" x1="452" x2="452" y1="0" y2="480.702">
                  <stop stopColor="white" />
                  <stop offset="1" stopColor="white" stopOpacity="0" />
                </linearGradient>
                <clipPath id="clip0_13_1408">
                  <rect fill="white" height="550" rx="24" width="361" />
                </clipPath>
              </defs>
            </svg>
          </div>

          {/* Mobile Background Ellipses */}
          <div className="lg:hidden absolute h-[341px] left-[-24px] top-[208px] w-[411px]">
            <div className="absolute inset-[-70.38%_-24.33%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 512 588">
                <g filter="url(#filter0_f_13_1408)">
                  <ellipse cx="256" cy="294" fill="url(#paint0_radial_13_1408)" rx="156" ry="94" />
                </g>
                <defs>
                  <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="588" width="512" x="0" y="0">
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
                    <feGaussianBlur result="effect1_foregroundBlur_13_1408" stdDeviation="100" />
                  </filter>
                  <radialGradient cx="0" cy="0" gradientTransform="translate(256 285.58) rotate(90) scale(103.58 171.794)" gradientUnits="userSpaceOnUse" id="paint0_radial_13_1408" r="1">
                    <stop stopColor="white" />
                    <stop offset="1" stopColor="white" stopOpacity="0.1" />
                  </radialGradient>
                </defs>
              </svg>
            </div>
          </div>

          <div className="lg:hidden absolute h-[201px] left-[36px] top-[31px] w-[289px]">
            <div className="absolute inset-[-119.4%_-34.6%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 490 642">
                <g filter="url(#filter0_f_13_1409)">
                  <ellipse cx="245" cy="321" fill="url(#paint0_radial_13_1409)" rx="45" ry="121" />
                </g>
                <defs>
                  <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="642" width="490" x="0" y="0">
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
                    <feGaussianBlur result="effect1_foregroundBlur_13_1409" stdDeviation="100" />
                  </filter>
                  <radialGradient cx="0" cy="0" gradientTransform="translate(245 321) rotate(90) scale(121 45)" gradientUnits="userSpaceOnUse" id="paint0_radial_13_1409" r="1">
                    <stop stopColor="white" />
                    <stop offset="1" stopColor="white" stopOpacity="0.1" />
                  </radialGradient>
                </defs>
              </svg>
            </div>
          </div>

          {/* Desktop Background */}
          <div className="hidden lg:block absolute inset-0 max-w-[1400px] mx-auto">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1400 550">
              <g>
                <g clipPath="url(#clip0_1_711)">
                  <rect fill="#4692E4" height="550" rx="24" width="1400" />
                  <path clipRule="evenodd" d={svgPaths.p309b7f00} fill="url(#paint0_linear_1_711)" fillOpacity="0.2" fillRule="evenodd" />
                </g>
              </g>
              <defs>
                <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1_711" x1="720" x2="720" y1="-77" y2="680.762">
                  <stop stopColor="white" />
                  <stop offset="1" stopColor="white" stopOpacity="0" />
                </linearGradient>
                <clipPath id="clip0_1_711">
                  <rect fill="white" height="550" rx="24" width="1400" />
                </clipPath>
              </defs>
            </svg>
          </div>

          {/* Hero Content */}
          <div className="relative z-10 text-center px-4 py-12 animate-in fade-in slide-in-from-bottom duration-1000">
            <div className="max-w-[341px] lg:max-w-[718px] mx-auto space-y-6">
              <h1 className="font-['Fustat:Bold',_sans-serif] font-bold leading-[1.2] text-[32px] lg:text-[48px] text-white">
                Understand your medical bills & lab results—instantly
              </h1>
              
              <p className="font-['Fustat:Regular',_sans-serif] font-normal leading-[1.3] text-[16px] lg:text-[20px] text-white">
                DecoderMD is an AI-powered transparency platform with two tools: BillDecoder clarifies charges, codes, and out-of-pocket costs, while LabDecoder explains your bloodwork in plain English—so you can make confident decisions.
              </p>
              
              {/* Badges */}
              <div className="backdrop-blur-[50px] backdrop-filter bg-[rgba(30,91,167,0.5)] box-border content-stretch flex flex-col lg:flex-row gap-2 lg:gap-6 items-center justify-center px-3 py-2 rounded-[500px] shrink-0 animate-in fade-in slide-in-from-bottom duration-1000 delay-300">
                {/* Desktop - horizontal layout */}
                <div className="hidden lg:flex gap-6 items-center">
                  <Badge icon={<CheckIcon />}>100% HIPAA Compliant</Badge>
                  <Badge icon={<CheckIcon />}>Physician Developed</Badge>
                  <Badge icon={<CheckIcon />}>AI-Powered Analysis</Badge>
                </div>
                
                {/* Mobile - vertical layout with two lines */}
                <div className="lg:hidden flex flex-col gap-2 items-center">
                  <div className="flex gap-2 items-center">
                    <Badge icon={<CheckIcon />}>100% HIPAA</Badge>
                    <Badge icon={<CheckIcon />}>Physician</Badge>
                  </div>
                  <div className="flex gap-2 items-center">
                    <Badge icon={<CheckIcon />}>Compliant</Badge>
                    <Badge icon={<CheckIcon />}>Developed</Badge>
                    <Badge icon={<CheckIcon />}>AI-Powered</Badge>
                  </div>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col lg:flex-row gap-[15px] items-center justify-center animate-in fade-in slide-in-from-bottom duration-1000 delay-500">
                <Button 
                  variant="primary" 
                  className="w-full lg:w-auto"
                  onClick={() => scrollToSection('waiting-list')}
                >
                  Join Waiting List
                </Button>
                <Button 
                  variant="secondary" 
                  className="w-[164px]"
                  onClick={() => scrollToSection('about')}
                >
                  Learn more
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Why DecoderMD matters Section */}
        <section id="about" className="py-12 lg:py-16">
          <div className="mx-4 lg:mx-auto lg:max-w-[1160px]">
            <div className="text-center mb-8 lg:mb-12 animate-in fade-in slide-in-from-bottom duration-800 delay-200">
              <h2 className="font-['Fustat:Bold',_sans-serif] font-bold leading-[1.2] text-[#292d33] text-[28px] lg:text-[40px] mb-4 lg:mb-6">
                Why DecoderMD matters
              </h2>
              <p className="font-['Fustat:Regular',_sans-serif] font-normal leading-[1.3] text-[#8692a7] text-[14px] lg:text-[20px] max-w-[1026px] mx-auto">
                Navigating healthcare today is overwhelming. Bills arrive packed with jargon and hidden errors, while lab reports leave most patients anxious and uncertain. DecoderMD exists because the stakes are too high to ignore.
              </p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 lg:gap-10">
              {/* Card 1 */}
              <div className="bg-[#f7f9fc] border border-[#f0f2f5] rounded-[24px] p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 animate-in fade-in slide-in-from-bottom duration-800 delay-300">
                <div className="mb-6">
                  <div className="bg-[#4692e4] rounded-[12px] size-10 flex items-center justify-center mb-6">
                    <div className="size-[18.286px]">
                      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19 19">
                        <path d={mobileSvgPaths.p69a5e00} fill="white" />
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="space-y-2">
                  <h3 className="font-['Fustat:SemiBold',_sans-serif] font-semibold leading-[1.2] text-[#292d33] text-[20px] lg:text-[24px]">
                    Save money & Eliminate Errors
                  </h3>
                  <p className="font-['Fustat:Regular',_sans-serif] font-normal leading-[1.3] text-[#292d33] text-[16px]">
                    With up to 80% of medical bills containing errors, overcharges are common. Our AI detects mistakes and duplicate charges, <span className="font-['Fustat:SemiBold',_sans-serif] font-semibold">potentially saving you hundreds or even thousands of dollars each year on unnecessary costs</span>.
                  </p>
                </div>
              </div>

              {/* Card 2 */}
              <div className="bg-[#f7f9fc] border border-[#f0f2f5] rounded-[24px] p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 animate-in fade-in slide-in-from-bottom duration-800 delay-400">
                <div className="mb-6">
                  <div className="bg-[#4692e4] rounded-[12px] size-10 flex items-center justify-center mb-6">
                    <div className="size-[18.286px]">
                      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19 19">
                        <path d={mobileSvgPaths.p35a0c180} fill="white" />
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="space-y-2">
                  <h3 className="font-['Fustat:SemiBold',_sans-serif] font-semibold leading-[1.2] text-[#292d33] text-[20px] lg:text-[24px]">
                    Gain Instant Clarity & Save Time
                  </h3>
                  <p className="font-['Fustat:Regular',_sans-serif] font-normal leading-[1.3] text-[#292d33] text-[16px]">
                    Stop spending hours deciphering codes and confusing statements. <span className="font-['Fustat:SemiBold',_sans-serif] font-semibold">Get plain-English explanations of charges and lab results in seconds, not hours.</span> Reclaim your time and eliminate the stress of the unknown.
                  </p>
                </div>
              </div>

              {/* Card 3 */}
              <div className="bg-[#f7f9fc] border border-[#f0f2f5] rounded-[24px] p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 animate-in fade-in slide-in-from-bottom duration-800 delay-500">
                <div className="mb-6">
                  <div className="bg-[#4692e4] rounded-[12px] size-10 flex items-center justify-center mb-6">
                    <div className="size-[18.286px]">
                      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19 19">
                        <path d={mobileSvgPaths.p3a133100} fill="white" />
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="space-y-2">
                  <h3 className="font-['Fustat:SemiBold',_sans-serif] font-semibold leading-[1.2] text-[#292d33] text-[20px] lg:text-[24px]">
                    Make Confident, Informed Decisions
                  </h3>
                  <p className="font-['Fustat:Regular',_sans-serif] font-normal leading-[1.3] text-[#292d33] text-[16px]">
                    Knowledge is power. Understand exactly what your healthcare costs and what your lab results mean for your health. <span className="font-['Fustat:SemiBold',_sans-serif] font-semibold">Ask better questions, avoid unnecessary procedures, and become an empowered advocate for your care.</span>
                  </p>
                </div>
              </div>

              {/* Card 4 */}
              <div className="bg-[#f7f9fc] border border-[#f0f2f5] rounded-[24px] p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 animate-in fade-in slide-in-from-bottom duration-800 delay-600">
                <div className="mb-6">
                  <div className="bg-[#4692e4] rounded-[12px] size-10 flex items-center justify-center mb-6">
                    <div className="size-[18.286px]">
                      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19 19">
                        <path d={mobileSvgPaths.pa4fe400} fill="white" />
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="space-y-2">
                  <h3 className="font-['Fustat:SemiBold',_sans-serif] font-semibold leading-[1.2] text-[#292d33] text-[20px] lg:text-[24px]">
                    Reduce Anxiety & Improve Health Outcomes
                  </h3>
                  <p className="font-['Fustat:Regular',_sans-serif] font-normal leading-[1.3] text-[#292d33] text-[16px]">
                    Replace lab result anxiety with understanding. Track your health trends and get insights to prepare for doctor's visits. <span className="font-['Fustat:SemiBold',_sans-serif] font-semibold">Take proactive steps for your health without the fear of the unknown.</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Three Platforms Section */}
        <section id="features" className="py-12 lg:py-16">
          <div className="mx-4 lg:mx-auto lg:max-w-[1160px]">
            <div className="text-center mb-8 lg:mb-12 animate-in fade-in slide-in-from-bottom duration-800 delay-200">
              <h2 className="font-['Fustat:Bold',_sans-serif] font-bold leading-[1.2] text-[#292d33] text-[28px] lg:text-[40px] mb-4 lg:mb-6">
                Three powerful platforms under one umbrella
              </h2>
              <p className="font-['Fustat:Regular',_sans-serif] font-normal leading-[1.3] text-[#8692a7] text-[16px] lg:text-[20px] max-w-[1026px] mx-auto">
                BillDecoder, LabDecoder, MedDecoder are part of a suite of platforms that give you complete healthcare transparency with more platforms in development!
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-3 lg:gap-10">
              {/* BillDecoder Card */}
              <div className="bg-[#4692e4] rounded-[24px] p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 animate-in fade-in slide-in-from-bottom duration-800 delay-300">
                <div className="space-y-4">
                  <div className="space-y-2 text-white">
                    <h3 className="font-['Fustat:SemiBold',_sans-serif] font-semibold leading-[1.2] text-[24px]">
                      BillDecoder
                    </h3>
                    <p className="font-['Fustat:Regular',_sans-serif] font-normal leading-[1.3] text-[16px]">
                      Transform confusing medical bills into clear, actionable insights
                    </p>
                  </div>
                  <div className="space-y-2">
                    <div className="flex gap-2 items-start">
                      <div className="relative shrink-0 size-[18px] mt-0.5">
                        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
                          <path d={mobileSvgPaths.p2b418600} fill="white" />
                        </svg>
                      </div>
                      <p className="font-['Fustat:Regular',_sans-serif] font-normal leading-[1.3] text-white text-[14px]">
                        <span className="font-['Fustat:SemiBold',_sans-serif] font-semibold">Error Detection.</span>
                        <span> Identifies duplicate charges, coding errors, and unusual fees</span>
                      </p>
                    </div>
                    <div className="flex gap-2 items-start">
                      <div className="relative shrink-0 size-[18px] mt-0.5">
                        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
                          <path d={mobileSvgPaths.p2b418600} fill="white" />
                        </svg>
                      </div>
                      <p className="font-['Fustat:Regular',_sans-serif] font-normal leading-[1.3] text-white text-[14px]">
                        <span className="font-['Fustat:SemiBold',_sans-serif] font-semibold">Cost Savings. </span>Highlights overcharges and suggests cost-saving opportunities
                      </p>
                    </div>
                    <div className="flex gap-2 items-start">
                      <div className="relative shrink-0 size-[18px] mt-0.5">
                        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
                          <path d={mobileSvgPaths.p2b418600} fill="white" />
                        </svg>
                      </div>
                      <p className="font-['Fustat:Regular',_sans-serif] font-normal leading-[1.3] text-white text-[14px]">
                        <span className="font-['Fustat:SemiBold',_sans-serif] font-semibold">Plain English Explanations.</span>
                        <span> Translates medical codes and procedures into understandable language</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* LabDecoder Card */}
              <div className="bg-[#1e5ba7] rounded-[24px] p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 animate-in fade-in slide-in-from-bottom duration-800 delay-400">
                <div className="space-y-4">
                  <div className="space-y-2 text-white">
                    <h3 className="font-['Fustat:SemiBold',_sans-serif] font-semibold leading-[1.2] text-[24px]">
                      LabDecoder
                    </h3>
                    <p className="font-['Fustat:Regular',_sans-serif] font-normal leading-[1.3] text-[16px]">
                      Understand your lab results with physician-level insights
                    </p>
                  </div>
                  <div className="space-y-2">
                    <div className="flex gap-2 items-start">
                      <div className="relative shrink-0 size-[18px] mt-0.5">
                        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
                          <path d={mobileSvgPaths.p2b418600} fill="white" />
                        </svg>
                      </div>
                      <p className="font-['Fustat:SemiBold',_sans-serif] font-semibold leading-[1.3] text-white text-[14px]">
                        <span className="font-['Fustat:SemiBold',_sans-serif] font-semibold">Reference Range Analysis.</span>
                        <span className="font-['Fustat:Regular',_sans-serif] font-normal"> Explains what normal, high, and low values mean for your health</span>
                      </p>
                    </div>
                    <div className="flex gap-2 items-start">
                      <div className="relative shrink-0 size-[18px] mt-0.5">
                        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
                          <path d={mobileSvgPaths.p2b418600} fill="white" />
                        </svg>
                      </div>
                      <p className="font-['Fustat:SemiBold',_sans-serif] font-semibold leading-[1.3] text-white text-[14px]">
                        <span className="font-['Fustat:SemiBold',_sans-serif] font-semibold">Health Trend Tracking.</span>
                        <span className="font-['Fustat:Regular',_sans-serif] font-normal"> Monitors changes in your lab values over time</span>
                      </p>
                    </div>
                    <div className="flex gap-2 items-start">
                      <div className="relative shrink-0 size-[18px] mt-0.5">
                        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
                          <path d={mobileSvgPaths.p2b418600} fill="white" />
                        </svg>
                      </div>
                      <p className="font-['Fustat:SemiBold',_sans-serif] font-semibold leading-[1.3] text-white text-[14px]">
                        <span className="font-['Fustat:SemiBold',_sans-serif] font-semibold">Doctor Discussion Prep.</span>
                        <span className="font-['Fustat:Regular',_sans-serif] font-normal"> Generates informed questions to discuss with your healthcare provider</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* MedDecoder Card */}
              <div className="bg-[#1a4a8a] rounded-[24px] p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 animate-in fade-in slide-in-from-bottom duration-800 delay-500">
                <div className="space-y-4">
                  <div className="space-y-2 text-white">
                    <h3 className="font-['Fustat:SemiBold',_sans-serif] font-semibold leading-[1.2] text-[24px]">
                      MedDecoder
                    </h3>
                    <p className="font-['Fustat:Regular',_sans-serif] font-normal leading-[1.3] text-[16px]">
                      Comprehensive medication analysis and interaction checking
                    </p>
                  </div>
                  <div className="space-y-2">
                    {[
                      "Drug Interaction Checking. Identifies potential conflicts between medications",
                      "Side Effect Analysis. Explains common and rare medication side effects",
                      "Dosage Optimization. Helps understand proper medication timing and dosing"
                    ].map((text, i) => (
                      <div key={i} className="flex gap-2 items-start">
                        <div className="relative shrink-0 size-[18px] mt-0.5">
                          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
                            <path d={mobileSvgPaths.p2b418600} fill="white" />
                          </svg>
                        </div>
                        <p className="font-['Fustat:Regular',_sans-serif] font-normal leading-[1.3] text-[14px] text-white">
                          <span className="font-['Fustat:SemiBold',_sans-serif] font-semibold">{text.split('.')[0]}.</span>
                          <span> {text.split('.')[1]}</span>
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Built by Healthcare Professionals */}
        <section className="py-12 lg:py-16 bg-gray-50">
          <div className="mx-4 lg:mx-auto lg:max-w-[1160px]">
            <div className="text-center mb-8 lg:mb-12 animate-in fade-in slide-in-from-bottom duration-800 delay-200">
              <h2 className="font-['Fustat:Bold',_sans-serif] font-bold leading-[1.2] text-[#292d33] text-[28px] lg:text-[40px]">
                Built by Healthcare Professionals
              </h2>
            </div>

            <div className="flex flex-col lg:flex-row gap-6 lg:gap-10 items-start animate-in fade-in slide-in-from-bottom duration-800 delay-300">
              <div 
                className="bg-no-repeat bg-center lg:bg-top-left bg-cover h-[289px] lg:h-[369px] rounded-[24px] shrink-0 w-full lg:w-[299px] hover:scale-105 transition-transform duration-300" 
                style={{ backgroundImage: `url('${imgImage}')` }} 
              />
              <div className="bg-[#f2faff] rounded-[24px] p-6 lg:p-8 flex-1 hover:shadow-lg transition-shadow duration-300">
                <div className="space-y-6 lg:space-y-11">
                  <p className="font-['Fustat:Regular',_sans-serif] font-normal leading-[1.3] text-[#292d33] text-[16px] lg:text-[20px]">
                    DecoderMD was developed by Dr. Peter Valenzuela, a family physician and healthcare administrator who understands the frustration of confusing medical bills and complex lab results. Our platform combines clinical expertise with cutting-edge AI to provide you with the healthcare transparency you deserve.
                  </p>
                  
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-[100px]">
                    <div className="space-y-3">
                      {[
                        { icon: mobileSvgPaths.p33f15e00, text: "Board-certified physician oversight" },
                        { icon: mobileSvgPaths.p3cfebf80, text: "Healthcare administration expertise" }
                      ].map((item, i) => (
                        <div key={i} className="flex gap-3 items-center">
                          <div className="bg-[#2e78c9] rounded-[4px] lg:rounded-[8px] size-6 lg:size-8 flex items-center justify-center shrink-0">
                            <div className="size-[10.971px] lg:size-[14.629px]">
                              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11 11">
                                <path d={item.icon} fill="white" />
                              </svg>
                            </div>
                          </div>
                          <p className="font-['Fustat:Regular',_sans-serif] font-normal leading-[1.3] text-[#292d33] text-[14px] lg:text-[16px]">
                            {item.text}
                          </p>
                        </div>
                      ))}
                    </div>
                    
                    <div className="space-y-3">
                      {[
                        { icon: mobileSvgPaths.pfdb7200, text: "Real-world clinical experience" },
                        { icon: mobileSvgPaths.p2b298900, text: "Patient-centered approach" }
                      ].map((item, i) => (
                        <div key={i} className="flex gap-3 items-center">
                          <div className="bg-[#2e78c9] rounded-[4px] lg:rounded-[8px] size-6 lg:size-8 flex items-center justify-center shrink-0">
                            <div className="size-[10.971px] lg:size-[14.629px]">
                              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11 11">
                                <path d={item.icon} fill="white" />
                              </svg>
                            </div>
                          </div>
                          <p className="font-['Fustat:Regular',_sans-serif] font-normal leading-[1.3] text-[#292d33] text-[14px] lg:text-[16px]">
                            {item.text}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <p className="font-['Fustat:Regular',_sans-serif] font-normal leading-[1.3] text-[12px] lg:text-[14px]">
                    <span className="text-[#2e78c9]">*Educational Platform Disclaimer. </span>
                    <span className="text-[#8692a7]">DecoderMD is designed for educational purposes only and does not provide medical diagnoses or treatment recommendations. Always consult with your healthcare provider for medical decisions.</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Join Waiting List Section */}
        <section id="waiting-list" className="py-12 lg:py-16">
          <div className="mx-4 lg:mx-auto lg:max-w-[1179px]">
            <div className="relative rounded-[24px] overflow-hidden min-h-[593px] lg:min-h-[381px] animate-in fade-in slide-in-from-bottom duration-800 delay-200">
              <div className="absolute bg-[#4692e4] inset-0" />
              
              {/* Mobile Background Elements */}
              <div className="lg:hidden absolute h-[247px] left-[-133px] top-[602px] w-[629px]">
                <div className="absolute inset-[-80.97%_-31.8%]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1029 647">
                    <g filter="url(#filter0_f_9_1289)">
                      <ellipse cx="514.5" cy="323.5" fill="url(#paint0_radial_9_1289)" rx="314.5" ry="123.5" />
                    </g>
                    <defs>
                      <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="647" width="1029" x="0" y="0">
                        <feFlood floodOpacity="0" result="BackgroundImageFix" />
                        <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
                        <feGaussianBlur result="effect1_foregroundBlur_9_1289" stdDeviation="100" />
                      </filter>
                      <radialGradient cx="0" cy="0" gradientTransform="translate(514.5 310.92) rotate(90) scale(136.08 346.536)" gradientUnits="userSpaceOnUse" r="1">
                        <stop stopColor="white" />
                        <stop offset="1" stopColor="white" stopOpacity="0.1" />
                      </radialGradient>
                    </defs>
                  </svg>
                </div>
              </div>

              <div className="lg:hidden absolute h-[765px] left-[-40px] top-0 w-[1268px]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1268 765">
                  <path clipRule="evenodd" d={mobileSvgPaths.p198b4500} fill="url(#paint0_linear_9_1259)" fillOpacity="0.2" fillRule="evenodd" />
                  <defs>
                    <linearGradient gradientUnits="userSpaceOnUse" x1="634" x2="634" y1="0" y2="668.613">
                      <stop stopColor="white" />
                      <stop offset="1" stopColor="white" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>

              <div className="lg:hidden absolute flex h-[344px] items-center justify-center left-[-13px] top-[363px] w-[373px]">
                <div className="flex-none rotate-[180deg] scale-y-[-100%]">
                  <div className="bg-no-repeat bg-right bg-size-[147.72%_100.11%] h-[344px] w-[373px]" style={{ backgroundImage: `url('${imgAbstractCurveGeometriesBackground3DRenderingDigitalDrawing1}')` }} />
                </div>
              </div>

              {/* Desktop Background Elements */}
              <div className="hidden lg:block absolute h-[693px] left-1.5 top-0 w-[1150px]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1150 693">
                  <path clipRule="evenodd" d={svgPaths.pa935080} fill="url(#paint0_linear_1_679)" fillOpacity="0.2" fillRule="evenodd" />
                  <defs>
                    <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1_679" x1="575" x2="575" y1="0" y2="605.685">
                      <stop stopColor="white" />
                      <stop offset="1" stopColor="white" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
              
              <div className="hidden lg:block absolute flex h-[387px] items-center justify-center left-[703px] top-[-6px] w-[619px]">
                <div className="flex-none rotate-[180deg] scale-y-[-100%]">
                  <div 
                    className="bg-center bg-cover bg-no-repeat h-[387px] w-[619px]" 
                    style={{ backgroundImage: `url('${imgAbstractCurveGeometriesBackground3DRenderingDigitalDrawing1}')` }} 
                  />
                </div>
              </div>
              
              <div className="relative z-10 p-6 lg:p-8 h-full flex flex-col justify-center">
                <div className="max-w-[671px] space-y-8">
                  <div className="space-y-4 max-w-[536px]">
                    <h2 className="font-['Fustat:Bold',_sans-serif] font-bold leading-[1.2] text-[28px] lg:text-[40px] text-white">
                      Join the Waiting List
                    </h2>
                    <p className="font-['Fustat:Regular',_sans-serif] font-normal leading-[1.3] text-[16px] lg:text-[20px] text-[#f0f2f5]">
                      Be among the first to experience healthcare transparency. Early members save 20%!
                    </p>
                    <div className="flex flex-col lg:flex-row gap-2 lg:gap-4 items-start">
                      <Badge icon={<CheckIcon />}>Unlimited medical bill reviews</Badge>
                      <Badge icon={<CheckIcon />}>Comprehensive lab result analysis</Badge>
                      <Badge icon={<CheckIcon />}>HIPAA compliant security</Badge>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <form onSubmit={handleSubmit} className="flex flex-col lg:flex-row gap-3 items-start">
                      <FormInput
                        label="Full Name"
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                      />
                      <FormInput
                        label="Email"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        error={email.trim() && !isValidEmail(email.trim()) ? "Please enter a valid email address" : undefined}
                      />
                      <Button 
                        type="submit" 
                        size="md" 
                        disabled={!fullName.trim() || !email.trim() || !isValidEmail(email.trim())} 
                        className="w-full lg:w-auto lg:mt-[30px]"
                      >
                        Join Waiting List
                      </Button>
                    </form>
                    <p className="font-['Fustat:Regular',_sans-serif] font-normal leading-[1.3] text-[12px] text-white">
                      By joining our waiting list, you agree to receive updates about DecoderMD. We respect your privacy and will never share your information.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section id="faq" className="py-12 lg:py-16 bg-gray-50">
          <div className="mx-4 lg:mx-auto lg:max-w-[1026px]">
            <div className="text-center mb-8 lg:mb-12 animate-in fade-in slide-in-from-bottom duration-800 delay-200">
              <h2 className="font-['Fustat:Bold',_sans-serif] font-bold leading-[1.2] text-[#292d33] text-[28px] lg:text-[40px]">
                Frequently Asked Questions
              </h2>
            </div>

            <div className="space-y-2 lg:space-y-3 max-w-[952px] mx-auto">
              {faqData.map((faq, index) => {
                const isOpen = openFAQ === index;
                return (
                  <div 
                    key={index}
                    className={`${isOpen ? 'bg-[#f2faff] border-[#e4e7ec]' : 'bg-[#f7f9fc] border-[#f0f2f5]'} border rounded-[12px] cursor-pointer transition-all duration-200 hover:shadow-md animate-in fade-in slide-in-from-bottom duration-800`}
                    style={{ animationDelay: `${300 + index * 100}ms` }}
                    onClick={() => toggleFAQ(index)}
                  >
                    <div className="p-4 lg:p-6">
                      <div className="flex gap-6 items-center justify-between">
                        <h3 className="font-['Fustat:SemiBold',_sans-serif] font-semibold leading-[1.3] text-[#292d33] text-[16px] lg:text-[20px] flex-1">
                          {faq.question}
                        </h3>
                        <div className="relative shrink-0 size-8">
                          <div className="absolute inset-0">
                            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
                              <circle 
                                cx="16" 
                                cy="16" 
                                {...(isOpen 
                                  ? { fill: "#4692E4", r: "16" }
                                  : { r: "15.5", stroke: "#4692E4", fill: "none" }
                                )}
                                className="transition-all duration-200"
                              />
                            </svg>
                          </div>
                          <div className="absolute inset-0 flex items-center justify-center">
                            <div className={`transform transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}>
                              <svg className="w-3 h-2" fill="none" preserveAspectRatio="none" viewBox="0 0 13 7">
                                <path 
                                  d={faqSvgPaths.p29109380} 
                                  fill={isOpen ? "#F2FAFF" : "#4692E4"} 
                                />
                              </svg>
                            </div>
                          </div>
                        </div>
                      </div>
                      {isOpen && (
                        <div className="mt-3 animate-in slide-in-from-top duration-200">
                          <div className="pr-8">
                            <p className="font-['Fustat:Regular',_sans-serif] font-normal leading-[1.3] text-[#292d33] text-[14px] lg:text-[16px]">
                              {faq.answer}
                            </p>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer id="contact" className="bg-[#1a3760] text-white">
        <div className="px-4 py-8 lg:px-[139px] lg:py-[60px] w-full max-w-[1440px] mx-auto">
          <div className="flex flex-col gap-3 lg:gap-[56px] max-w-[361px] lg:max-w-[1161px] mx-auto">
            {/* Main Content */}
            <div className="flex flex-col gap-6 lg:gap-0 lg:flex-row lg:justify-between lg:items-start lg:gap-[316px]">
              {/* DecoderMD Info Section */}
              <div className="flex flex-col gap-3 w-full lg:w-[344px]">
                <div className="flex flex-col gap-2">
                  <h3 className="font-['Fustat:SemiBold',_sans-serif] font-semibold leading-[1.3] text-white text-[16px]">
                    DecoderMD
                  </h3>
                  <p className="font-['Fustat:Regular',_sans-serif] font-normal leading-[1.3] text-[#ececec] text-[14px]">
                    AI-powered healthcare transparency platform developed by physicians. Decode your medical bills and lab results with confidence.
                  </p>
                </div>
                <div className="bg-[rgba(30,91,167,0.5)] backdrop-blur-[50px] flex flex-row items-center gap-6 px-3 py-2 rounded-[500px] w-fit">
                  <div className="flex flex-row items-center gap-2">
                    <div className="relative shrink-0 size-[18px]">
                      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
                        <path d={footerSvgPaths.p2b418600} fill="white" />
                      </svg>
                    </div>
                    <p className="font-['Fustat:Regular',_sans-serif] font-normal leading-[1.3] text-white text-[14px] text-center text-nowrap">
                      100% HIPAA Compliant
                    </p>
                  </div>
                </div>
              </div>

              {/* Product & Contact Section */}
              <div className="flex flex-row gap-2 lg:gap-[42px] w-full lg:w-[486px]">
                {/* Product Column */}
                <div className="flex flex-col gap-6 w-full max-w-[176.5px] lg:w-[200px] flex-1">
                  <h4 className="font-['Fustat:Bold',_sans-serif] font-bold leading-[1.3] text-[#e5e5e5] text-[14px] tracking-[0.04em] uppercase">
                    Product
                  </h4>
                  <div className="flex flex-col gap-3">
                    <button className="font-['Fustat:SemiBold',_sans-serif] font-semibold lg:font-normal leading-[1.3] text-white text-[14px] lg:text-[16px] text-left hover:text-[#4692e4] transition-colors duration-200">
                      BillDecoder
                    </button>
                    <button className="font-['Fustat:SemiBold',_sans-serif] font-semibold lg:font-normal leading-[1.3] text-white text-[14px] lg:text-[16px] text-left hover:text-[#4692e4] transition-colors duration-200">
                      LabDecoder
                    </button>
                    <button className="font-['Fustat:SemiBold',_sans-serif] font-semibold lg:font-normal leading-[1.3] text-white text-[14px] lg:text-[16px] text-left hover:text-[#4692e4] transition-colors duration-200">
                      MedDecoder
                    </button>
                  </div>
                </div>

                {/* Contact Column */}
                <div className="flex flex-col gap-6 w-full max-w-[176.5px] lg:w-[244px] flex-1">
                  <h4 className="font-['Fustat:Bold',_sans-serif] font-bold leading-[1.3] text-[#e5e5e5] text-[14px] tracking-[0.04em] uppercase">
                    Contact us
                  </h4>
                  <div className="flex flex-col gap-3">
                    <div className="flex flex-row items-center gap-2">
                      <div className="relative shrink-0 size-[18px]">
                        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
                          <path d={footerSvgPaths.p20381480} fill="white" />
                        </svg>
                      </div>
                      <a 
                        href="mailto:info@decodermd.com"
                        className="font-['Fustat:SemiBold',_sans-serif] font-semibold lg:font-normal leading-[1.3] text-white text-[14px] lg:text-[16px] hover:text-[#4692e4] transition-colors duration-200"
                      >
                        info@decodermd.com
                      </a>
                    </div>
                    <p className="font-['Fustat:Regular',_sans-serif] font-normal leading-[1.3] text-white text-[12px]">
                      Questions? We'd love to hear from you.
                    </p>
                    <button className="font-['Fustat:SemiBold',_sans-serif] font-semibold lg:font-normal leading-[1.3] text-white text-[14px] lg:text-[16px] text-left hover:text-[#4692e4] transition-colors duration-200">
                      MedDecoder
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Section - Copyright & Links */}
            <div className="flex flex-col gap-3 lg:flex-row lg:justify-between lg:items-center lg:gap-[639px]">
              <p className="font-['Fustat:Regular',_sans-serif] font-normal leading-[1.3] text-[#d0d5dd] text-[12px]">
                © 2025 DecoderMD. All rights reserved.
              </p>
              <div className="flex flex-row items-start gap-6">
                <button className="font-['Fustat:Regular',_sans-serif] font-normal leading-[1.3] text-[#d0d5dd] text-[12px] hover:text-white transition-colors duration-200">
                  Privacy Policy
                </button>
                <button className="font-['Fustat:Regular',_sans-serif] font-normal leading-[1.3] text-[#d0d5dd] text-[12px] hover:text-white transition-colors duration-200">
                  Terms of Service
                </button>
                <button className="font-['Fustat:Regular',_sans-serif] font-normal leading-[1.3] text-[#d0d5dd] text-[12px] hover:text-white transition-colors duration-200">
                  HIPAA Compliance
                </button>
              </div>
            </div>
          </div>
        </div>
      </footer>
      
      <Toaster />
    </div>
  );
}