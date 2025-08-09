"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="bg-gray-900 text-white px-6 py-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center">
            <img
              src="https://ext.same-assets.com/1074700283/1365081696.png"
              alt="SerPuntual"
              className="h-10"
            />
          </div>
          <nav className="flex space-x-8">
            <a href="#" className="hover:text-red-500 transition-colors">Inicio</a>
            <a href="#" className="hover:text-red-500 transition-colors">Empleados</a>
            <a href="#" className="hover:text-red-500 transition-colors">Clientes</a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section
        className="relative h-screen bg-cover bg-center flex items-center"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url('https://ext.same-assets.com/1074700283/852139975.jpeg')`
        }}
      >
        <div className="max-w-7xl mx-auto px-6 text-white">
          <div className="max-w-2xl">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Mensajería Urgente y por Procesos
            </h1>
            <p className="text-lg md:text-xl mb-8 leading-relaxed">
              Con Serpuntual Su empresa puede reducir costos y optimizar los procesos de mensajería.
              También tenemos diferentes soluciones de tiempo como son los Trámites Virtuales Con los
              cuales apoyamos su proceso administrativo disminuyendo tiempo y reduciendo costos porque
              tenemos implementado un proceso de Seguridad Social y Asesorías Dirigido a empresas y personas
            </p>
            <Button className="bg-red-600 hover:bg-red-700 text-white px-8 py-6 text-lg font-semibold">
              SOLICITAR SERVICIOS
            </Button>
          </div>
        </div>
      </section>

      {/* Service Introduction */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Mensajería rápida y eficaz
          </h2>
          <p className="text-gray-600 text-lg uppercase tracking-wide">
            Eficacia y ahorro de dinero para todos nuestros clientes
          </p>
        </div>
      </section>

      {/* Service Lines */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">
            Líneas de Servicio
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Mensajería Empresarial */}
            <Card className="bg-blue-900 text-white overflow-hidden">
              <CardHeader className="text-center">
                <div className="w-24 h-24 mx-auto mb-4 bg-white rounded-full flex items-center justify-center">
                  <svg className="w-12 h-12 text-blue-900" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zM7.07 18.28c.43-.9 3.05-1.78 4.93-1.78s4.51.88 4.93 1.78C15.57 19.36 13.86 20 12 20s-3.57-.64-4.93-1.72z"/>
                    <circle cx="12" cy="8" r="3"/>
                  </svg>
                </div>
                <CardTitle className="text-xl font-bold">
                  Mensajería Empresarial y Personal
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <CardDescription className="text-gray-300">
                  Respuesta urgente, Mediante Procesos Montaje para empresas de Sistemas de mensajería
                </CardDescription>
              </CardContent>
            </Card>

            {/* Trámites Virtuales */}
            <Card className="bg-blue-900 text-white overflow-hidden">
              <CardHeader className="text-center">
                <div className="w-24 h-24 mx-auto mb-4 bg-white rounded-full flex items-center justify-center">
                  <svg className="w-12 h-12 text-blue-900" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19.14,12.94c0.04-0.3,0.06-0.61,0.06-0.94c0-0.32-0.02-0.64-0.07-0.94l2.03-1.58c0.18-0.14,0.23-0.41,0.12-0.61 l-1.92-3.32c-0.12-0.22-0.37-0.29-0.59-0.22l-2.39,0.96c-0.5-0.38-1.03-0.7-1.62-0.94L14.4,2.81c-0.04-0.24-0.24-0.41-0.48-0.41 h-3.84c-0.24,0-0.43,0.17-0.47,0.41L9.25,5.35C8.66,5.59,8.12,5.92,7.63,6.29L5.24,5.33c-0.22-0.08-0.47,0-0.59,0.22L2.74,8.87 C2.62,9.08,2.66,9.34,2.86,9.48l2.03,1.58C4.84,11.36,4.8,11.69,4.8,12s0.02,0.64,0.07,0.94l-2.03,1.58 c-0.18,0.14-0.23,0.41-0.12,0.61l1.92,3.32c0.12,0.22,0.37,0.29,0.59,0.22l2.39-0.96c0.5,0.38,1.03,0.7,1.62,0.94l0.36,2.54 c0.05,0.24,0.24,0.41,0.48,0.41h3.84c0.24,0,0.44-0.17,0.47-0.41l0.36-2.54c0.59-0.24,1.13-0.56,1.62-0.94l2.39,0.96 c0.22,0.08,0.47,0,0.59-0.22l1.92-3.32c0.12-0.22,0.07-0.47-0.12-0.61L19.14,12.94z M12,15.6c-1.98,0-3.6-1.62-3.6-3.6 s1.62-3.6,3.6-3.6s3.6,1.62,3.6,3.6S13.98,15.6,12,15.6z"/>
                  </svg>
                </div>
                <CardTitle className="text-xl font-bold">
                  Trámites Virtuales
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <CardDescription className="text-gray-300">
                  Desde internet gestionamos varios procesos generando ahorro de tiempo y dinero.
                </CardDescription>
              </CardContent>
            </Card>

            {/* Seguridad Social */}
            <Card className="bg-blue-900 text-white overflow-hidden">
              <CardHeader className="text-center">
                <div className="w-24 h-24 mx-auto mb-4 bg-white rounded-full flex items-center justify-center">
                  <svg className="w-12 h-12 text-blue-900" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12,1L3,5V11C3,16.55 6.84,21.74 12,23C17.16,21.74 21,16.55 21,11V5L12,1M12,7C13.4,7 14.8,8.6 14.8,10V11.5C15.4,11.5 16,12.4 16,13V16C16,17.4 15.4,18 14.8,18H9.2C8.6,18 8,17.4 8,16V13C8,12.4 8.6,11.5 9.2,11.5V10C9.2,8.6 10.6,7 12,7M12,8.2C11.2,8.2 10.5,8.7 10.5,10V11.5H13.5V10C13.5,8.7 12.8,8.2 12,8.2Z"/>
                  </svg>
                </div>
                <CardTitle className="text-xl font-bold">
                  Seguridad Social
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <CardDescription className="text-gray-300">
                  Asesoría en procesos de afiliación, empleadores y empleados. Procesos completos desde cero y 100% efectivos.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-8">
                ¿Quienes Somos?
              </h2>
              <img
                src="https://ext.same-assets.com/1074700283/3051858136.jpeg"
                alt="SerPuntual Logo"
                className="w-64 mb-8"
              />
            </div>
            <div>
              <p className="text-gray-700 mb-8 leading-relaxed">
                Nacimos como respuesta a la necesidad de las empresas de reducir costos en mensajería,
                mejorar los procesos y los tiempos de respuesta, aprovechando los cambios tecnológicos
                actuales que exigen diferentes formas de hacer los negocios. Hemos adquirido experiencia;
                diseñado productos y servicios, comprobados en su aplicación como exitosos, aplicándolos
                con clientes del sector financiero, servicios, productores y diferentes industrias, para
                los cuales se han diseñado e implementado procesos para agilizar y mejorar el proceso de mensajería.
              </p>

              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="mision">
                  <AccordionTrigger className="text-left font-semibold">
                    Misión
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-700">
                    Brindar servicio de mensajería, transporte de documentos y de mercancías, enfocado en la
                    necesidades de la empresa y las personas, de tal forma que el usuario se vea lucrado y
                    complacido con el servicio, generar internamente un ambiente de compromiso y beneficio con
                    nuestros colaboradores logrando, resultados sociales y auto sostenibles en el tiempo.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="vision">
                  <AccordionTrigger className="text-left font-semibold">
                    Visión
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-700">
                    Para el año 2022 estar posicionados en Medellín y el área metropolitana. Siendo reconocidos
                    como una empresa, cumplida, exacta y confiable, en la prestación del servicio de mensajería integral.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="que-hacemos">
                  <AccordionTrigger className="text-left font-semibold">
                    ¿Qué hacemos?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-700">
                    Estamos atentos para cubrir las necesidades de mensajería, transporte de mercancías, encomiendas,
                    pagos de facturas, compras, soluciones de tiempo, apoyo en la realización de diferentes tramites
                    en entidades oficiales en la ciudad de Medellín. Brindamos también apoyo en los procesos de
                    afiliación de empleados al sistema de seguridad social. Tenemos más de 10 años de experiencia,
                    en los cuales hemos evolucionado y perfeccionado el servicio que brindamos.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <p className="text-gray-600 uppercase tracking-wide mb-4">CONTÁCTANOS</p>
            <h2 className="text-4xl font-bold text-gray-900 mb-8">
              Si deseas solicitar un servicio
            </h2>
          </div>

          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-xl font-semibold text-gray-900 mb-6">
              Información de contacto:
            </h3>
            <div className="space-y-2 mb-8">
              <p className="text-gray-700">Número fijo: 4447279</p>
              <p className="text-gray-700">Número telefónico: 3157005619</p>
            </div>
            <Button className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 text-lg font-semibold">
              SOLICITAR SERVICIOS
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-gray-400">
            Copyright © 2025 SerPuntual | Todos los derechos reservados.
          </p>
        </div>
      </footer>

      {/* WhatsApp Float Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <Button
          className="bg-green-500 hover:bg-green-600 text-white w-14 h-14 rounded-full shadow-lg"
          onClick={() => window.open('https://wa.me/573157005619', '_blank')}
        >
          <svg
            viewBox="0 0 24 24"
            className="w-6 h-6 fill-current"
          >
            <path d="M12.017 2C6.486 2 2.005 6.479 2.005 12.007c0 1.762.455 3.416 1.253 4.849L2 22l5.233-1.237c1.386.751 2.957 1.147 4.784 1.147 5.531 0 10.012-4.479 10.012-10.007S17.548 2 12.017 2zm5.98 14.471c-.241.678-1.427 1.273-1.959 1.359-.531.085-1.216.119-1.959-.074-.445-.115-.999-.268-1.719-.523-3.024-1.067-4.999-4.102-5.149-4.289-.15-.187-1.229-1.633-1.229-3.115s.78-2.211 1.057-2.514c.277-.303.604-.379.805-.379s.404.007.58.014c.186.007.436-.071.681.519.248.596.842 2.053.916 2.202.074.149.123.324.025.523-.098.198-.148.323-.296.497-.148.174-.311.388-.445.523-.148.148-.302.309-.129.607.173.298.769 1.267 1.649 2.052.899.803 1.658 1.051 1.892 1.169.234.118.371.099.508-.06.137-.159.586-.683.742-.917.156-.234.312-.195.525-.117.213.078 1.354.638 1.586.754.232.116.387.173.445.271.058.098.058.569-.183 1.117z"/>
          </svg>
        </Button>
      </div>
    </div>
  )
}
