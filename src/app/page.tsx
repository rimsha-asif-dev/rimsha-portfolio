"use client"
// pages/index.js
import Head from 'next/head';
import { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { 
  FaHtml5, 
  FaCss3Alt, 
  FaJs, 
  FaReact, 
  FaAws, 
  FaGithub, 
  FaFigma 
} from 'react-icons/fa';
import { RiNextjsFill, RiServerLine } from 'react-icons/ri';
import { 
  SiTailwindcss, 
  SiMui, 
  SiBootstrap, 
  SiTypescript, 
  SiReactquery, 
  SiApollographql, 
  SiFirebase, 
  SiLeaflet,
  SiMapbox,
  SiRedux,
  SiShadcnui,
  SiStripe
} from 'react-icons/si';
import Image from 'next/image';

export default function Home() {
  const [activeSection, setActiveSection] = useState('home');
  const [formData, setFormData] = useState({
    from_name: '',
    from_email: '',
    message: ''
  });
  const [isSending, setIsSending] = useState(false);
  const [sendStatus, setSendStatus] = useState('');
  const technologies = [
    { name: 'HTML5', icon: <FaHtml5 className="text-[#f16529]" /> },
    { name: 'CSS', icon: <FaCss3Alt className="text-[#2965f1]" /> },
    { name: 'JavaScript', icon: <FaJs className="text-[#f7df1e]" /> },
    { name: 'React JS', icon: <FaReact className="text-[#61dafb]" /> },
    { name: 'Next JS', icon: <RiNextjsFill className="text-black" /> },
    { name: 'Tailwind CSS', icon: <SiTailwindcss className="text-[#38bdf8]" /> },
    { name: 'Material UI', icon: <SiMui className="text-[#007fff]" /> },
    { name: 'Bootstrap', icon: <SiBootstrap className="text-[#7952b3]" /> },
    { name: 'Shadcn/Ui', icon: <SiShadcnui className="text-[#2E2E2E]" /> },
  
    { name: 'TypeScript', icon: <SiTypescript className="text-[#3178c6]" /> },
    { name: 'AWS (S3)', icon: <FaAws className="text-[#ff9900]" /> },
    { name: 'React Query', icon: <SiReactquery className="text-[#ff4154]" /> },
    { name: 'Redux', icon: <SiRedux className="text-[#764ABC]" /> },
    { name: 'Rest API', icon: <RiServerLine className="text-[#5a31f4]" /> },
    { name: 'Graphql', icon: <SiApollographql className="text-[#5a31f4]" /> },
    { name: 'Stripe', icon: <SiStripe className="text-[#5a31f4]" /> },
    { name: 'Mapbox', icon: <SiMapbox className="text-[#2E2E2E]" /> },
    { name: 'Git', icon: <FaGithub className="text-gray-900" /> },
    { name: 'Firebase', icon: <SiFirebase className="text-[#ffca28]" /> },
    { name: 'Figma', icon: <FaFigma className="text-[#f24e1e]" /> }
  ];

  const emailConfig = {
    serviceId: process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
    templateId: process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
    publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
  };

  const form = useRef<HTMLFormElement>(null);

  const handleInputChange = (e: any) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: any) => {
   
  
    try{
      setIsSending(true)
      console.log(formData);
      setFormData({ from_name: '', from_email: '', message: '' });
      setIsSending(false)
    }catch(error){
      console.error('Error sending email:', error);
    }
    // const { serviceId, templateId, publicKey } = emailConfig;
    // if (!serviceId || !templateId || !publicKey) {
    //   setSendStatus('config-error');
    //   setTimeout(() => setSendStatus(''), 5000);
    //   return;
    // }

    // setIsSending(true);
    // const currentForm = form.current;
    // if (!currentForm) {
    //   setIsSending(false);
    //   return;
    // }

    // // EmailJS configuration
    // emailjs.sendForm(
    //   serviceId,
    //   templateId,
    //   currentForm,
    //   publicKey
    // )
    // .then((result) => {
    //   console.log('Email sent successfully:', result.text);
    //   setSendStatus('success');
    //   setFormData({ from_name: '', from_email: '', message: '' });
    // })
    // .catch((error) => {
    //   console.error('Error sending email:', error.text);
    //  // setSendStatus('error');
    // })
    // .finally(() => {
    //   setIsSending(false);
    //   setTimeout(() => setSendStatus(''), 5000);
    // });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <Head>
        <title>Rimsha Asif - Frontend Developer</title>
        <meta name="description" content="Frontend Developer with 2+ years of experience building responsive web applications" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-sm z-50 shadow-sm">
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="text-2xl font-bold text-blue-600">Rimsha Asif</div>
            <div className="hidden md:flex space-x-8">
              {['Home', 'About', 'Skills', 'Experience', 'Projects', 'Contact'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  onClick={() => setActiveSection(item.toLowerCase())}
                  className={`font-medium transition-colors ${
                    activeSection === item.toLowerCase() 
                      ? 'text-blue-600' 
                      : 'text-gray-600 hover:text-blue-500'
                  }`}
                >
                  {item}
                </a>
              ))}
            </div>
            <button className="md:hidden text-gray-600">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className=" pt-14 pb-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100 text-blue-600 text-sm font-medium">
                <span className="w-2 h-2 bg-blue-600 rounded-full mr-2"></span>
                Available for new projects
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight">
                Frontend
                <span className="text-blue-600 block">Developer</span>
              </h1>
             
              
              <p className="text-xl text-gray-600 max-w-lg">
             
                I build responsive, scalable, and user-centric web applications using modern technologies like Next.js, React, and TypeScript.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <a href="#projects" className="bg-blue-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors shadow-lg text-center">
                  View My Work
                </a>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl p-8 text-white shadow-2xl">
                <div className="grid grid-cols-2 gap-6">
                  <div className="bg-white/20 rounded-xl p-4 backdrop-blur-sm">
                    <div className="text-3xl font-bold">2+</div>
                    <div className="text-sm opacity-90">Years Experience</div>
                  </div>
                  <div className="bg-white/20 rounded-xl p-4 backdrop-blur-sm">
                    <div className="text-3xl font-bold">5+</div>
                    <div className="text-sm opacity-90">Projects Completed</div>
                  </div>
                </div>
                <div className="bg-white/20 rounded-xl p-4 backdrop-blur-sm mt-4">
                  <div className="text-3xl font-bold">3+</div>
                  <div className="text-sm opacity-90">Dashboards Completed</div>
                </div>
                <div className="mt-8 p-4 bg-white/10 rounded-xl backdrop-blur-sm">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    <div>
                      <div className="font-semibold">Fast Performance</div>
                      <div className="text-sm opacity-90">Optimized for speed</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="container mx-auto max-w-6xl px-6">
          <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="space-y-6">
              <span className="inline-flex items-center rounded-full bg-blue-100 px-4 py-1 text-sm font-medium text-blue-600">
                About Me
              </span>
              <h2 className="text-4xl font-bold leading-tight text-gray-900">
                Building polished, human-friendly products with a frontend lens
              </h2>
              <p className="text-lg leading-relaxed text-gray-600">
                I’m Rimsha Asif, a frontend engineer focused on translating ambitious product ideas
                into resilient UI systems. I specialize in admin portals, SaaS platforms, and immersive
                marketing experiences that balance performance with personality. My workflow blends
                rapid prototyping, accessibility best practices, and thoughtful micro-interactions.
              </p>
              <div className="grid gap-4 sm:grid-cols-2">
                {[
                  {
                    title: 'Product mindset',
                    description:
                      'Take Figma explorations to production with scalable components, design tokens, and polished handoffs.'
                  },
                  {
                    title: 'Collaboration first',
                    description:
                      'Partner with designers, PMs, and backend engineers to keep roadmaps unblocked and quality high.'
                  }
                ].map((item, index) => (
                  <div
                    key={index}
                    className="rounded-2xl border border-gray-200 bg-white/80 p-5 shadow-sm"
                  >
                    <h3 className="text-base font-semibold text-gray-900">{item.title}</h3>
                    <p className="mt-2 text-sm text-gray-600">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="grid gap-4">
                {[
                  { label: 'Specialties', value: 'Web platforms · Admin portals', accent: 'from-sky-500 to-cyan-500' },
                  { label: 'Principles', value: 'Performance, accessibility, empathy', accent: 'from-amber-500 to-orange-500' },
                  { label: 'Interests', value: 'UI polish, real-time UX, scalable design systems', accent: 'from-blue-500 to-indigo-500' },
                  { label: 'Languages', value: 'English, Urdu, Punjabi', accent: 'from-purple-500 to-pink-500' },
              ].map((card, index) => (
                <div
                  key={index}
                  className={`rounded-2xl p-[1px] bg-gradient-to-r ${card.accent} shadow-[0_18px_40px_rgba(15,23,42,0.08)]`}
                >
                  <div className="h-full rounded-2xl bg-white px-6 py-6">
                    <p className="text-xs uppercase tracking-wide text-gray-500">{card.label}</p>
                    <p className="mt-2 text-lg font-semibold text-gray-900">{card.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-gray-50">
        <div className="container mx-auto px-6 max-w-6xl">
          <h2 className="mb-16 text-center text-4xl font-bold text-gray-900">
            Technologies I Work With
          </h2>
          <div className="grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-5">
            {technologies.map((tech, index) => (
              <div
                key={index}
                className="group relative rounded-2xl bg-gradient-to-br from-blue-400/70 via-blue-300/40 to-purple-300/40 p-[1px] shadow-[0_12px_30px_rgba(37,99,235,0.12)]"
              >
                <div className="flex h-full flex-col items-center justify-center gap-4 rounded-2xl bg-white px-6 py-8 text-center transition-all duration-300 group-hover:-translate-y-1 group-hover:shadow-xl">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50 text-4xl text-blue-600 group-hover:bg-blue-100 group-hover:text-blue-700">
                    {tech.icon}
                  </div>
                  <p className="text-sm font-semibold text-gray-800">{tech.name}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

     

      {/* Experience Section */}
      <section id="experience" className="py-20">
        <div className="container mx-auto px-6 max-w-4xl">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">Work Experience</h2>
          <div className="space-y-12">
            {[
              {
                company: 'Bytevia Solutions',
                position: 'Frontend Developer',
                period: 'March 2024 - Present',
                description: 'Developed responsive web interfaces from Figma designs. Implemented dynamic data integrations with REST and GraphQL APIs, and built real-time chat modules using Sendbird.'
              },
              {
                company: 'Chirp Technologies',
                position: 'Frontend Developer',
                period:    'March 2024 - November 2024' ,
                description: 'Collaborated on responsive web interfaces with map integrations. Implemented Firebase services including authentication, real-time database, and cloud storage.'
              },
              {
                company: 'Apps Genii Technologies',
                position: 'Junior Mern Stack Developer',
                period: 'April 2023 - November 2023',
                description: 'Developed responsive web interfaces using React.js and Material UI. Worked on admin panel features and gained backend experience with Node.js and Express.js.'
              }
            ].map((job, index) => (
              <div key={index} className="relative pl-8 border-l-2 border-blue-500">
                <div className="absolute -left-2 top-0 w-4 h-4 bg-blue-500 rounded-full"></div>
                <div className="bg-white p-6 rounded-xl drop-shadow-sm drop-shadow-blue-200  transition-all duration-300">
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">{job.position}</h3>
                      <p className="text-blue-600 font-medium">{job.company}</p>
                    </div>
                    <span className="text-gray-500 text-sm mt-2 sm:mt-0">{job.period}</span>
                  </div>
                  <p className="text-gray-600">{job.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-white">
  <div className="container mx-auto px-6 max-w-6xl">
    <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">Featured Projects</h2>
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {[
        {
          title: '99k Africa',
          description: 'Multivendor e-commerce platform with full marketplace modules and REST API integration.',
          tech: ['Next.js', 'TypeScript', 'Tailwind CSS', 'REST API', 'PostgreSQL'],
          icon: '🛒',
          link: 'https://99kafrica.com/'
        },
        {
          title: 'Simply Ortho Academy',
          description: 'Dental LMS and SaaS platform with courses, subscriptions, and real-time chat.',
          tech: ['Next.js', 'TypeScript', 'GraphQL', 'Sendbird', 'PostgreSQL', 'React Query'],
          icon: '🎓',
          link: 'https://simplyortho-academy.com/'
        },
        {
          title: 'Vet Your Pep',
          description: 'Community social platform with free/paid channels and real-time engagement features.',
          tech: ['Next.js', 'TypeScript', 'GraphQL', 'Sendbird', 'PostgreSQL', 'React Query'],
          icon: '👥',
          link: 'https://www.vetyourpep.com/'
        },
        {
          title: 'Skyviews Caribbean Maps',
          description: 'Interactive travel platform for discovering and planning Caribbean island experiences.',
          tech: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Mapbox', 'PostgreSQL', 'GraphQL', 'React Query'],
          icon: '🗺️',
          link: 'https://sky-views-dev.vercel.app/'
        },
        {
          title: 'B&B Event Smart',
          description: 'Event management platform for salons and beauty professionals to create and manage events.',
          tech: ['Next.js', 'TypeScript', 'Tailwind CSS', 'PostgreSQL', 'GraphQL', 'React Query'],
          icon: '💄',
          link: 'https://www.bbeventsmart.com/'
        }
      ].map((project, index) => (
        <div key={index} className="bg-gradient-to-r rounded-2xl p-6 hover:shadow-md border border-blue-400 shadow-blue-200 transition-shadow duration-300 group">
          <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center text-2xl mb-6 group-hover:bg-blue-200 transition-colors">
            {project.icon}
          </div>
          <h3 className="text-xl font-bold text-gray-900 mb-3">{project.title}</h3>
          <p className="text-gray-600 mb-4 line-clamp-3">{project.description}</p>
          <div className="flex flex-wrap gap-2 mb-6">
            {project.tech.map((tech, techIndex) => (
              <span key={techIndex} className="px-3 py-1 bg-gradient-to-br from-blue-400 to-purple-600  bg-white rounded-full text-sm text-white border">
                {tech}
              </span>
            ))}
          </div>
          <a 
            href={project.link} 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center text-blue-600 font-medium hover:text-blue-700 transition-colors"
          >
            View Project →
          </a>
        </div>
      ))}
    </div>
    
    {/* Additional projects in a second row if needed */}
    {/* <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
      {[
        {
          title: 'iGotPlans',
          description: 'Event management web application for discovering, browsing, and purchasing event tickets.',
          tech: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Firebase'],
          icon: '🎫',
          link: 'https://igotplans-nine.vercel.app'
        }
      ].map((project, index) => (
        <div key={index} className="bg-gray-50 rounded-2xl p-6 hover:shadow-xl transition-shadow duration-300 group">
          <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center text-2xl mb-6 group-hover:bg-blue-200 transition-colors">
            {project.icon}
          </div>
          <h3 className="text-xl font-bold text-gray-900 mb-3">{project.title}</h3>
          <p className="text-gray-600 mb-4 line-clamp-3">{project.description}</p>
          <div className="flex flex-wrap gap-2 mb-6">
            {project.tech.map((tech, techIndex) => (
              <span key={techIndex} className="px-3 py-1 bg-white rounded-full text-sm text-gray-700 border">
                {tech}
              </span>
            ))}
          </div>
          <a 
            href={project.link} 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center text-blue-600 font-medium hover:text-blue-700 transition-colors"
          >
            View Project →
          </a>
        </div>
      ))}
    </div> */}
  </div>
</section>
 {/* Admin Portals Section */}
 <section id="admin-portals" className="py-20 bg-gray-50">
        <div className="container mx-auto px-6 max-w-6xl">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">Admin Portals</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              
              {
                title: 'Simply Ortho Academy',
                description: 'Learning management system admin panel for course management, student progress tracking, and content management.',
                features: ['Course Management', 'Student Analytics', 'Content Upload', 'Progress Tracking'],
                status: 'Completed'
              },
              {
                title: 'Vet Your Pep ',
                description: 'Admin dashboard for community platform with user moderation, content management, and engagement analytics.',
                features: ['User Moderation', 'Content Management', 'Analytics', 'Channel Management'],
                status: 'Completed'
              },
             
              {
                title: 'Mythfit',
                description: 'A centralized admin dashboard for managing customers, products, categories, locations, rewards, and internal admins. Designed with a clean UI for efficient content and user management.',
                features: [
                
                  'Customers',
                  'Product & Category',
                  'Location Management',
                  'Rewards Control',
                
                ],
                status: 'Completed'
              },
              {
                title: "Food-for-Thought ",
                description:
                  "Admin dashboard for managing products, categories, customers, orders, reviews, and marketing features for a food-delivery platform.",
                features: [
                 
                  "Customers Management",
                  "Categories & Products Management",
                  "Orders",
                  "Reviews ",
                  "Newsletter ",
                  "Notifications ",
                  "Support ",
                  "Promotional Banner"
                ],
                status: 'Completed'
              },
              {
                title: "Klub Admin Panel",
                description:
                  "Complete admin dashboard for managing jobs, users, orders, reports, and refunds for a multivendor marketplace.",
                features: [
                  "Jobs Management", "Users  ", "Orders","Reports","Refunds Handling"
                ],
                status: "Completed"
                
              },
              
              {
                title: 'Mami Plan',
                description:
    "Admin dashboard for managing nutritionists, customers, orders, and product categories for a health & wellness platform focused on mothers.",
  features: [
    "Admins Management",
    "Customer Management",
    "Nutritionist Profiles Management",
   
  ],
                status: 'In Progress'
              }
            ].map((portal, index) => (
              <div key={index} className="relative group">
                {/* Gradient Border Effect */}
                <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl blur opacity-25 group-hover:opacity-75 transition duration-300"></div>
                <div className="relative bg-white rounded-2xl p-6 h-full border border-gray-200">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-bold text-gray-900">{portal.title}</h3>
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                      portal.status === 'Completed' ? 'bg-green-100 text-green-800' :
                      portal.status === 'In Progress' ? 'bg-yellow-100 text-yellow-800' :
                      'bg-blue-100 text-blue-800'
                    }`}>
                      {portal.status}
                    </span>
                  </div>
                  <p className="text-gray-600 mb-6">{portal.description}</p>
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-gray-700 mb-3">Key Features:</h4>
                    <div className="flex flex-wrap gap-2">
                      {portal.features.map((feature, featureIndex) => (
                        <span key={featureIndex} className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                 
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Contact Section - Redesigned */}
      <section id="contact" className="py-16 bg-gray-50">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Get In Touch</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Have a project in mind or want to discuss opportunities? Feel free to reach out!
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="grid md:grid-cols-3">
              {/* Contact Info - Compact Sidebar */}
              <div className="bg-gradient-to-br from-blue-600 to-purple-700 text-white p-8 md:p-10">
                <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
                
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold">Email</h4>
                      <p className="text-blue-100">rimshaasif873@gmail.com</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold">Location</h4>
                      <p className="text-blue-100">Lahore, Punjab</p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-white/20">
                  <h4 className="font-semibold mb-4">Connect With Me</h4>
                  <div className="flex space-x-4">
                    {['LinkedIn'].map((social, index) => (
                      <a 
                        key={index} 
                        href="https://www.linkedin.com/in/rimsha-asif-093786264/" 
                        className="w-60 h-10 bg-white/20 rounded-lg flex items-center justify-center hover:bg-white/30 transition-colors"
                        title={social}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <span className="text-sm font-medium">{social}</span>
                      </a>
                    ))}
                  </div>
                </div>
              </div>

              {/* Contact Form - Compact Layout */}
              <div className="md:col-span-2 p-8 md:p-10">
                <form ref={form} onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                      <input 
                        type="text" 
                        name="from_name"
                        value={formData.from_name}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                        placeholder="Your Name"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                      <input 
                        type="email" 
                        name="from_email"
                        value={formData.from_email}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                        placeholder="your.email@example.com"
                        required
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                    <textarea 
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={4}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-1 focus:outline-none focus:ring-blue-500 focus:border-blue-500 transition-colors"
                      placeholder="Your message..."
                      required
                    ></textarea>
                  </div>
                  
                  <button 
                    type="submit"
                    disabled={isSending}
                    className="w-full bg-blue-600 cursor-pointer text-white py-3 rounded-lg font-medium hover:bg-blue-700 disabled:bg-blue-400 transition-colors shadow-lg flex items-center justify-center space-x-2"
                  >
                    {isSending ? (
                      <>
                        <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        <span>Sending...</span>
                      </>
                    ) : (
                      <>
                        <span>Send Message</span>
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                        </svg>
                      </>
                    )}
                  </button>
                </form>

                {/* Status Messages */}
                {sendStatus === 'success' && (
                  <div className="mt-4 p-3 bg-green-100 border border-green-400 text-green-700 rounded-lg text-center">
                    ✅ Message sent successfully! I'll get back to you soon.
                  </div>
                )}
                
                {sendStatus === 'error' && (
                  <div className="mt-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded-lg text-center">
                    ❌ Failed to send message. Please try again or email me directly.
                  </div>
                )}

                {sendStatus === 'config-error' && (
                  <div className="mt-4 p-3 bg-yellow-100 border border-yellow-400 text-yellow-700 rounded-lg text-center">
                    ⚠️ Email service is not configured. Please add your EmailJS keys to the environment variables.
                  </div>
                )}

                <div className="mt-6 text-center text-sm text-gray-500">
                  <p>I typically respond within 24 hours</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-white py-12">
        <div className="container mx-auto px-6 text-center">
          <div className="text-2xl text-black font-bold mb-4">Rimsha Asif</div>
          <p className="text-gray-400 mb-8">Frontend Developer crafting digital experiences</p>
          
          <div className="text-gray-500 text-sm">
            &copy; 2024 Rimsha Asif. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}