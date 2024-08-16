// pages/index.js
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link';

export default function Home() {
  const services = [
    { name: "Custom Website Design", description: "Tailored designs created from scratch based on your specifications.", link: "/custom-website-design" },
    { name: "Responsive Web Design", description: "Optimized for all devices and screen sizes for the best user experience.", link: "/responsive-web-desgin" },
    { name: "E-commerce Website Design", description: "User-friendly online stores with secure payment gateways.", link: "/e-commerce-website-design" },
    { name: "CMS Integration", description: "Easy content management with WordPress, Joomla, or Drupal integration.", link: "/cms-integration" },
    { name: "SEO-friendly Design", description: "Improved visibility and rankings on search engine results pages.", link: "/seo-friendly-design" },
    { name: "Website Redesign", description: "Modernizing existing websites for better functionality and aesthetics.", link: "/website-redesign" },
    { name: "Maintenance and Support", description: "Ongoing services to keep your website secure and performing optimally.", link: "/maintenance-and-support" },
    { name: "Performance Optimization", description: "Enhancing page load speed, mobile responsiveness, and user experience.", link: "/perfomance-optimization" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      <Head>
        <title>Expert Web Development Services</title>
        <meta name="description" content="Transform your ideas into digital reality with our expert web development services" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Header */}
      <header className="bg-white shadow-md">
        <nav className="container mx-auto px-6 py-3 flex justify-between items-center">
          <div className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">WebDevExperts</div>
          <div className="hidden md:flex space-x-4">
            <a href="#services" className="text-gray-600 hover:text-blue-600">Services</a>
            <a href="#tech-stack" className="text-gray-600 hover:text-blue-600">Tech Stack</a>
            <a href="#portfolio" className="text-gray-600 hover:text-blue-600">Portfolio</a>
            <a href="#contact" className="text-gray-600 hover:text-blue-600">Contact</a>
          </div>
        </nav>
      </header>

      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20">
          <div className="container mx-auto px-6 text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">Transforming Ideas into Digital Reality</h1>
            <p className="text-xl mb-8">Expert Web Development Services for Modern Businesses</p>
            <a href="#contact" className="bg-white text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 py-2 px-6 rounded-full text-lg font-semibold hover:bg-gray-100 transition duration-300">Get a Free Consultation</a>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-20">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {services.map((service, index) => (
                <Link href={service.link} key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
                  <h3 className="text-xl font-semibold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">{service.name}</h3>
                  <p className="text-gray-600">{service.description}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Tech Stack Section */}
        <section id="tech-stack" className="bg-gradient-to-b from-gray-100 to-white py-20">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold text-center mb-12">Our Tech Stack</h2>
            <div className="flex flex-wrap justify-center gap-8">
              {['React.js', 'Next.js', 'Node.js', 'MongoDB', 'Express.js', 'TypeScript',
                'Redux', 'Tailwind CSS', 'AWS'].map((tech, index) => (
                  <div key={index} className="bg-white p-4 rounded-lg shadow-md text-center hover:shadow-lg transition duration-300">
                    <Image src={`/tech-logos/${tech.toLowerCase().replace('.', '')}.svg`} alt={tech} width={60} height={60} />
                    <p className="mt-2 font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">{tech}</p>
                  </div>
                ))}
            </div>
          </div>
        </section>

        {/* Portfolio Section */}
        <section id="portfolio" className="py-20">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold text-center mb-12">Our Portfolio</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[1, 2, 3, 4, 5, 6].map((item) => (
                <div key={item} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition duration-300">
                  <Image src={`/portfolio-${item}.jpg`} alt={`Project ${item}`} width={400} height={300} layout="responsive" />
                  <div className="p-4">
                    <h3 className="text-xl font-semibold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Project {item}</h3>
                    <p className="text-gray-600">A brief description of the project and technologies used.</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Form */}
        <section id="contact" className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold text-center mb-12">Get In Touch</h2>
            <form className="max-w-lg mx-auto">
              <div className="mb-4">
                <input type="text" placeholder="Your Name" className="w-full p-2 rounded text-gray-800" required />
              </div>
              <div className="mb-4">
                <input type="email" placeholder="Your Email" className="w-full p-2 rounded text-gray-800" required />
              </div>
              <div className="mb-4">
                <textarea placeholder="Project Details" className="w-full p-2 rounded text-gray-800" rows={4} required></textarea>
              </div>
              <button type="submit" className="bg-white text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 py-2 px-6 rounded-full text-lg font-semibold hover:bg-gray-100 transition duration-300">Send Message</button>
            </form>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-gray-900 to-blue-900 text-white py-16">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* Company Info */}
            <div>
              <h3 className="text-2xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">WebDevExperts</h3>
              <p className="mb-4">Transforming ideas into digital reality since 2010. We're passionate about creating innovative web solutions that drive business growth.</p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-300 hover:text-white transition duration-300">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" /></svg>
                </a>
                <a href="#" className="text-gray-300 hover:text-white transition duration-300">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" /></svg>
                </a>
                <a href="#" className="text-gray-300 hover:text-white transition duration-300">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" /></svg>
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-blue-400 transition duration-300">Home</a></li>
                <li><a href="#services" className="hover:text-blue-400 transition duration-300">Services</a></li>
                <li><a href="#portfolio" className="hover:text-blue-400 transition duration-300">Portfolio</a></li>
                <li><a href="#" className="hover:text-blue-400 transition duration-300">About Us</a></li>
                <li><a href="#contact" className="hover:text-blue-400 transition duration-300">Contact</a></li>
              </ul>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Our Services</h4>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-blue-400 transition duration-300">Custom Website Design</a></li>
                <li><a href="#" className="hover:text-blue-400 transition duration-300">E-commerce Solutions</a></li>
                <li><a href="#" className="hover:text-blue-400 transition duration-300">CMS Integration</a></li>
                <li><a href="#" className="hover:text-blue-400 transition duration-300">SEO Optimization</a></li>
                <li><a href="#" className="hover:text-blue-400 transition duration-300">Website Maintenance</a></li>
              </ul>
            </div>

            {/* Newsletter */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Stay Updated</h4>
              <p className="mb-4">Subscribe to our newsletter for the latest web development trends and tips.</p>
              <form className="flex">
                <input type="email" placeholder="Enter your email" className="px-4 py-2 w-full rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-400 text-gray-900" />
                <button type="submit" className="bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded-r-md transition duration-300">Subscribe</button>
              </form>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="mt-12 pt-8 border-t border-gray-700 text-center">
            <p>&copy; 2024 WebDevExperts. All rights reserved.</p>
            <p className="mt-2 text-sm text-gray-400">Designed and developed with ❤️ by the WebDevExperts team</p>
          </div>
        </div>
      </footer>
    </div>
  )
}