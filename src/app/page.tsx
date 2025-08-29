'use client'

import React, { useState, useEffect } from 'react'
import { Menu, X, Phone, Mail, MapPin, Clock, User, Award, Heart, Activity, ChevronDown, Star, CheckCircle } from 'lucide-react'

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const services = [
    {
      icon: <Activity className="w-8 h-8" />,
      title: "Rehabilitación Física",
      description: "Tratamiento especializado para lesiones musculoesqueléticas y recuperación post-quirúrgica con técnicas avanzadas.",
      features: ["Evaluación completa", "Plan personalizado", "Seguimiento continuo"]
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Terapia Manual",
      description: "Técnicas de masoterapia y movilización para aliviar dolores crónicos y mejorar la movilidad articular.",
      features: ["Técnicas especializadas", "Alivio del dolor", "Mejora funcional"]
    },
    {
      icon: <User className="w-8 h-8" />,
      title: "Kinesiología Deportiva",
      description: "Prevención y tratamiento de lesiones deportivas para atletas de todos los niveles y disciplinas.",
      features: ["Prevención de lesiones", "Optimización del rendimiento", "Retorno al deporte"]
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Evaluación Postural",
      description: "Análisis biomecánico completo de la postura y corrección de desequilibrios musculares.",
      features: ["Análisis detallado", "Corrección postural", "Ejercicios específicos"]
    }
  ]

  const testimonials = [
    {
      name: "María González",
      text: "Excelente profesional. Gracias a Pamela pude recuperarme completamente de mi lesión de rodilla.",
      rating: 5
    },
    {
      name: "Carlos Mendoza",
      text: "Su enfoque integral y dedicación son excepcionales. Muy recomendada.",
      rating: 5
    },
    {
      name: "Ana Silva",
      text: "Profesional, empática y muy efectiva en sus tratamientos. La mejor kinesióloga de la región.",
      rating: 5
    }
  ]

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    element?.scrollIntoView({ behavior: 'smooth' })
    setIsMenuOpen(false)
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Enhanced Header */}
      <header className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        scrollY > 50 ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-white/90 backdrop-blur-sm'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center group cursor-pointer" onClick={() => scrollToSection('inicio')}>
              <div className="w-12 h-12 bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <Activity className="w-7 h-7 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                  Pamela Prieto
                </h1>
                <p className="text-sm text-gray-600 font-medium">Kinesióloga Profesional</p>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8">
              {['inicio', 'servicios', 'sobre-mi', 'testimonios', 'contacto'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className="text-gray-700 hover:text-emerald-600 transition-all duration-300 font-medium capitalize relative group py-2"
                >
                  {item.replace('-', ' ')}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-emerald-500 to-teal-500 group-hover:w-full transition-all duration-300"></span>
                </button>
              ))}
            </nav>

            {/* CTA Button */}
            <div className="hidden md:flex">
              <button 
                onClick={() => scrollToSection('contacto')}
                className="bg-gradient-to-r from-emerald-500 to-teal-500 text-white px-6 py-2.5 rounded-lg font-semibold hover:from-emerald-600 hover:to-teal-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
              >
                Agendar Cita
              </button>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden text-gray-700 hover:text-emerald-600 transition-colors p-2"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-md border-t border-gray-100 shadow-lg">
              <div className="px-4 py-3 space-y-3">
                {['inicio', 'servicios', 'sobre-mi', 'testimonios', 'contacto'].map((item) => (
                  <button
                    key={item}
                    onClick={() => scrollToSection(item)}
                    className="block w-full text-left px-4 py-3 text-gray-700 hover:text-emerald-600 hover:bg-emerald-50 rounded-lg transition-all duration-200 font-medium capitalize"
                  >
                    {item.replace('-', ' ')}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </header>

      {/* Enhanced Hero Section */}
      <section id="inicio" className="relative min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50"></div>
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-emerald-200/30 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-teal-200/30 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
          <div className="text-center max-w-4xl mx-auto">
            
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 bg-clip-text text-transparent">
                Pamela Prieto
              </span>
            </h1>
            
            <h2 className="text-2xl md:text-4xl text-gray-700 mb-8 font-light">
              Kinesióloga <span className="font-semibold text-emerald-600">Profesional</span>
            </h2>
            
            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto mb-12 leading-relaxed">
              Especialista en <span className="font-semibold text-emerald-600">rehabilitación física</span> y 
              <span className="font-semibold text-teal-600"> terapia manual</span>. 
              Te ayudo a recuperar tu bienestar con tratamientos personalizados y basados en evidencia científica.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
              <button 
                onClick={() => scrollToSection('contacto')}
                className="group bg-gradient-to-r from-emerald-500 to-teal-500 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:from-emerald-600 hover:to-teal-600 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-1"
              >
                <span className="flex items-center justify-center">
                  Agendar Evaluación
                  <ChevronDown className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </span>
              </button>
              <button 
                onClick={() => scrollToSection('servicios')}
                className="border-2 border-emerald-500 text-emerald-600 px-8 py-4 rounded-xl text-lg font-semibold hover:bg-emerald-50 transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1"
              >
                Conocer Servicios
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                <div className="text-3xl font-bold text-emerald-600 mb-2">500+</div>
                <div className="text-gray-600 font-medium">Pacientes Atendidos</div>
              </div>
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                <div className="text-3xl font-bold text-teal-600 mb-2">95%</div>
                <div className="text-gray-600 font-medium">Tasa de Satisfacción</div>
              </div>
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                <div className="text-3xl font-bold text-cyan-600 mb-2">5+</div>
                <div className="text-gray-600 font-medium">Años de Experiencia</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Services Section */}
      <section id="servicios" className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              Servicios <span className="text-emerald-600">Especializados</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Ofrezco tratamientos integrales y personalizados utilizando las técnicas más avanzadas 
              en kinesiología para garantizar tu recuperación completa.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div key={index} className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100">
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-teal-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative p-8">
                  <div className="text-emerald-600 mb-6 transform group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-4 group-hover:text-emerald-600 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    {service.description}
                  </p>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-500">
                        <CheckCircle className="w-4 h-4 text-emerald-500 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced About Section */}
      <section id="sobre-mi" className="py-24 bg-gradient-to-br from-gray-50 to-emerald-50/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-8">
                Sobre <span className="text-emerald-600">Mí</span>
              </h2>
              
              <div className="space-y-6 text-gray-600 text-lg leading-relaxed">
                <p>
                  Soy <span className="font-semibold text-emerald-600">Pamela Prieto</span>, kinesióloga titulada con 
                  una sólida formación académica y más de 5 años de experiencia clínica. Mi pasión por la 
                  rehabilitación y el bienestar humano me impulsa a brindar la mejor atención a cada paciente.
                </p>
                <p>
                  Mi enfoque se basa en la <span className="font-semibold">medicina basada en evidencia</span>, 
                  combinando técnicas tradicionales con las metodologías más actuales para garantizar 
                  resultados óptimos y duraderos.
                </p>
                <p>
                  Creo firmemente que cada paciente es único, por eso desarrollo 
                  <span className="font-semibold text-teal-600"> planes de tratamiento personalizados</span> que 
                  se adaptan a las necesidades específicas y objetivos de cada persona.
                </p>
              </div>

              <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="bg-white rounded-xl p-6 shadow-lg">
                  <h4 className="font-bold text-emerald-600 mb-3">Formación Académica</h4>
                  <ul className="text-sm text-gray-600 space-y-2">
                    <li>• Licenciatura en Kinesiología</li>
                    <li>• Especialización en Terapia Manual</li>
                    <li>• Certificación en Kinesiología Deportiva</li>
                  </ul>
                </div>
                <div className="bg-white rounded-xl p-6 shadow-lg">
                  <h4 className="font-bold text-teal-600 mb-3">Especialidades</h4>
                  <ul className="text-sm text-gray-600 space-y-2">
                    <li>• Rehabilitación Post-quirúrgica</li>
                    <li>• Lesiones Deportivas</li>
                    <li>• Dolor Crónico</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="order-1 lg:order-2 text-center">
              <div className="relative inline-block">
                <div className="w-80 h-80 mx-auto bg-gradient-to-br from-emerald-200 via-teal-200 to-cyan-200 rounded-3xl p-8 shadow-2xl">
                  <div className="w-full h-full bg-gradient-to-br from-emerald-500 to-teal-500 rounded-2xl flex items-center justify-center text-8xl shadow-inner">
                    👩‍⚕️
                  </div>
                </div>
                <div className="absolute -top-4 -right-4 bg-white rounded-full p-4 shadow-lg">
                  <Star className="w-8 h-8 text-yellow-500 fill-current" />
                </div>
              </div>
              
              <div className="mt-8 bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg max-w-md mx-auto">
                <blockquote className="text-gray-700 italic text-lg">
                  "Mi compromiso es acompañarte en cada paso hacia tu recuperación completa y bienestar óptimo."
                </blockquote>
                <div className="mt-4 font-semibold text-emerald-600">- Pamela Prieto</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* New Testimonials Section */}
      <section id="testimonios" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              Lo que dicen mis <span className="text-emerald-600">Pacientes</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              La satisfacción de mis pacientes es mi mayor logro profesional
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-500 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 italic mb-6 leading-relaxed">"{testimonial.text}"</p>
                <div className="font-semibold text-emerald-600">- {testimonial.name}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Contact Section */}
      <section id="contacto" className="py-24 bg-gradient-to-br from-emerald-900 via-teal-900 to-cyan-900 text-white relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Comienza tu <span className="text-emerald-300">Recuperación</span>
            </h2>
            <p className="text-xl text-emerald-100 max-w-2xl mx-auto">
              Agenda tu evaluación inicial y da el primer paso hacia una mejor calidad de vida
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="space-y-8">
              {[
                { icon: <Phone className="w-6 h-6" />, title: "Teléfono", info: "+56 9 XXXX XXXX", subtitle: "Disponible Lun-Vie 9:00-18:00" },
                { icon: <Mail className="w-6 h-6" />, title: "Email", info: "pamela.prieto@email.com", subtitle: "Respuesta en 24 horas" },
                { icon: <MapPin className="w-6 h-6" />, title: "Ubicación", info: "Puerto Montt, Los Lagos", subtitle: "Consulta la dirección exacta" },
                { icon: <Clock className="w-6 h-6" />, title: "Horarios", info: "Lun-Vie: 9:00-18:00 | Sáb: 9:00-13:00", subtitle: "Domingos cerrado" }
              ].map((item, index) => (
                <div key={index} className="flex items-start space-x-4 group">
                  <div className="w-14 h-14 bg-emerald-500/20 backdrop-blur-sm rounded-xl flex items-center justify-center text-emerald-300 group-hover:bg-emerald-500/30 transition-colors">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">{item.title}</h3>
                    <p className="text-emerald-100 font-medium">{item.info}</p>
                    <p className="text-emerald-200/70 text-sm">{item.subtitle}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Contact Form */}
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
              <h3 className="text-2xl font-bold mb-6 text-white">Solicitar Evaluación</h3>
              <div className="space-y-6">
                {[
                  { label: "Nombre Completo", type: "text", placeholder: "Tu nombre completo" },
                  { label: "Teléfono", type: "tel", placeholder: "+56 9 XXXX XXXX" },
                  { label: "Email", type: "email", placeholder: "tu@email.com" }
                ].map((field, index) => (
                  <div key={index}>
                    <label className="block text-sm font-medium text-emerald-100 mb-2">
                      {field.label}
                    </label>
                    <input
                      type={field.type}
                      placeholder={field.placeholder}
                      className="w-full px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/30 rounded-lg text-white placeholder-emerald-200/50 focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:border-transparent transition-all"
                    />
                  </div>
                ))}
                
                <div>
                  <label className="block text-sm font-medium text-emerald-100 mb-2">
                    Mensaje
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Cuéntame sobre tu consulta o condición..."
                    className="w-full px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/30 rounded-lg text-white placeholder-emerald-200/50 focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:border-transparent transition-all resize-vertical"
                  ></textarea>
                </div>

                <button
                  type="button"
                  onClick={() => alert('¡Gracias por tu interés! Te contactaré pronto para coordinar tu evaluación.')}
                  className="w-full bg-gradient-to-r from-emerald-400 to-teal-400 text-emerald-900 py-3 rounded-lg font-semibold hover:from-emerald-300 hover:to-teal-300 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                >
                  Enviar Solicitud
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-xl flex items-center justify-center mr-4">
                <Activity className="w-7 h-7 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
                  Pamela Prieto
                </h3>
                <p className="text-sm text-gray-400">Kinesióloga Profesional</p>
              </div>
            </div>
            
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
              Comprometida con tu bienestar y recuperación. Juntos trabajaremos para que recuperes tu mejor versión.
            </p>
            
            <div className="border-t border-gray-800 pt-8">
              <p className="text-gray-400">
                © 2025 Pamela Prieto - Kinesiología Profesional. Todos los derechos reservados.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}