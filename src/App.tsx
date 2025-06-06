import React from 'react';
import { 
  Cloud, 
  Shield, 
  Globe, 
  Server, 
  ArrowRight, 
  CheckCircle, 
  Zap,
  Lock,
  Quote
} from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-green-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-md border-b border-slate-200/50 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-green-500 rounded-xl flex items-center justify-center">
                <Cloud className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-slate-800">Ti Kloud Réunion</h1>
                <p className="text-sm text-slate-500">Nuages</p>
              </div>
            </div>
            <nav className="hidden md:flex items-center space-x-8">
              <a href="#features" className="text-slate-600 hover:text-blue-600 transition-colors font-medium">Features</a>
              <a href="#pricing" className="text-slate-600 hover:text-blue-600 transition-colors font-medium">Pricing</a>
              <a href="#support" className="text-slate-600 hover:text-blue-600 transition-colors font-medium">Support</a>
              <button className="bg-gradient-to-r from-blue-600 to-green-600 text-white px-6 py-2 rounded-lg font-medium hover:from-blue-700 hover:to-green-700 transition-all transform hover:scale-105 shadow-lg">
                Sign In
              </button>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-20 pb-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h1 className="text-5xl md:text-7xl font-bold text-slate-800 mb-8 leading-tight">
              Deploy your personal cloud —{' '}
              <span className="bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
                instantly
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-600 mb-12 max-w-4xl mx-auto leading-relaxed">
              Spin up your own Linux container in seconds, with secure HTTPS access and a custom subdomain like{' '}
              <span className="font-mono bg-blue-50 text-blue-700 px-3 py-1 rounded-lg">
                yourname.nuages.tikloud.re
              </span>
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button className="bg-gradient-to-r from-blue-600 to-green-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:from-blue-700 hover:to-green-700 transition-all transform hover:scale-105 shadow-xl flex items-center gap-3 group">
                Launch your Nuage
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="text-slate-600 hover:text-slate-800 font-medium flex items-center gap-2 transition-colors">
                <span>Watch demo</span>
                <div className="w-8 h-8 rounded-full border-2 border-slate-300 flex items-center justify-center hover:border-blue-500 transition-colors">
                  <div className="w-0 h-0 border-l-[6px] border-l-slate-600 border-t-[4px] border-t-transparent border-b-[4px] border-b-transparent ml-1"></div>
                </div>
              </button>
            </div>
          </div>

          {/* Visual Diagram */}
          <div className="max-w-5xl mx-auto">
            <div className="bg-white/70 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-2xl border border-slate-200/50">
              <h3 className="text-2xl font-bold text-slate-800 mb-8 text-center">How Nuages Works</h3>
              <div className="grid md:grid-cols-3 gap-8 items-center">
                {/* Your Request */}
                <div className="text-center">
                  <div className="w-20 h-20 bg-gradient-to-br from-blue-100 to-blue-200 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                    <Globe className="w-10 h-10 text-blue-600" />
                  </div>
                  <h4 className="font-semibold text-slate-800 mb-2">Your Request</h4>
                  <p className="text-slate-600 text-sm">Access via your custom subdomain</p>
                </div>

                {/* Arrow */}
                <div className="flex justify-center">
                  <ArrowRight className="w-8 h-8 text-slate-400 hidden md:block" />
                  <div className="w-px h-8 bg-slate-300 md:hidden"></div>
                </div>

                {/* HTTPS Proxy */}
                <div className="text-center">
                  <div className="w-20 h-20 bg-gradient-to-br from-green-100 to-green-200 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                    <Shield className="w-10 h-10 text-green-600" />
                  </div>
                  <h4 className="font-semibold text-slate-800 mb-2">HTTPS Proxy</h4>
                  <p className="text-slate-600 text-sm">Nginx secures your connection</p>
                </div>
              </div>

              <div className="flex justify-center my-8">
                <div className="w-px h-12 bg-slate-300"></div>
              </div>

              {/* LXC Container */}
              <div className="text-center">
                <div className="w-24 h-24 bg-gradient-to-br from-purple-100 to-indigo-200 rounded-3xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <Server className="w-12 h-12 text-indigo-600" />
                </div>
                <h4 className="font-semibold text-slate-800 mb-2">Your Linux Container (LXC)</h4>
                <p className="text-slate-600">Isolated, secure, and fully yours to customize</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4 sm:px-6 lg:px-8 bg-white/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
              Everything you need to{' '}
              <span className="bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
                get started
              </span>
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Powerful features designed specifically for students and developers in La Réunion
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-slate-200/50 hover:shadow-xl transition-shadow group">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Server className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-slate-800 mb-4">Isolated Linux Environment</h3>
              <p className="text-slate-600 mb-6 leading-relaxed">
                Get your own secure Linux container with full root access. Install packages, run services, and experiment freely without affecting others.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center gap-3 text-slate-600">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span>Full Ubuntu/Debian environment</span>
                </li>
                <li className="flex items-center gap-3 text-slate-600">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span>Root access included</span>
                </li>
                <li className="flex items-center gap-3 text-slate-600">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span>Persistent storage</span>
                </li>
              </ul>
            </div>

            {/* Feature 2 */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-slate-200/50 hover:shadow-xl transition-shadow group">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Lock className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-slate-800 mb-4">Secure HTTPS Access</h3>
              <p className="text-slate-600 mb-6 leading-relaxed">
                All connections are encrypted with SSL/TLS certificates. Access your container securely from anywhere with automatic certificate management.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center gap-3 text-slate-600">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span>Automatic SSL certificates</span>
                </li>
                <li className="flex items-center gap-3 text-slate-600">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span>Nginx reverse proxy</span>
                </li>
                <li className="flex items-center gap-3 text-slate-600">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span>End-to-end encryption</span>
                </li>
              </ul>
            </div>

            {/* Feature 3 */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-slate-200/50 hover:shadow-xl transition-shadow group">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Globe className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-slate-800 mb-4">Custom Subdomain</h3>
              <p className="text-slate-600 mb-6 leading-relaxed">
                Get your personalized subdomain on tikloud.re. Share your projects easily and access them from anywhere with a memorable URL.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center gap-3 text-slate-600">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span>yourname.nuages.tikloud.re</span>
                </li>
                <li className="flex items-center gap-3 text-slate-600">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span>Easy to remember and share</span>
                </li>
                <li className="flex items-center gap-3 text-slate-600">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span>Professional appearance</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-blue-50 to-green-50 rounded-3xl p-8 md:p-12 shadow-xl border border-slate-200/50">
            <div className="text-center">
              <Quote className="w-12 h-12 text-blue-500 mx-auto mb-6" />
              <blockquote className="text-xl md:text-2xl font-medium text-slate-800 mb-8 leading-relaxed">
                "Nuages a révolutionné ma façon d'apprendre le développement. En quelques secondes, j'ai mon propre serveur Linux pour tester mes projets. C'est parfait pour les étudiants comme moi à La Réunion !"
              </blockquote>
              <div className="flex items-center justify-center gap-4">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-green-400 rounded-full flex items-center justify-center text-white font-bold text-xl">
                  M
                </div>
                <div className="text-left">
                  <p className="font-semibold text-slate-800">Marie Dupont</p>
                  <p className="text-slate-600">Étudiante en Informatique, Université de La Réunion</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 to-green-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to launch your Nuage?
          </h2>
          <p className="text-xl text-blue-100 mb-12 max-w-2xl mx-auto">
            Join hundreds of students already using Nuages to power their projects and learning journey.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-blue-50 transition-all transform hover:scale-105 shadow-xl flex items-center gap-3 group">
              <Zap className="w-5 h-5" />
              Launch your Nuage now
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="text-white hover:text-blue-100 font-medium flex items-center gap-2 transition-colors">
              <span>Need help? Contact support</span>
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="col-span-2">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-green-500 rounded-xl flex items-center justify-center">
                  <Cloud className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold">Ti Kloud Réunion</h3>
                  <p className="text-slate-400">Nuages</p>
                </div>
              </div>
              <p className="text-slate-400 mb-6 max-w-md">
                Plateforme éducative cloud dédiée aux étudiants et développeurs de La Réunion.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-slate-700 transition-colors">
                  <Globe className="w-5 h-5" />
                </a>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Product</h4>
              <ul className="space-y-2 text-slate-400">
                <li><a href="#" className="hover:text-white transition-colors">Features</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Pricing</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Documentation</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-slate-400">
                <li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Status</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-slate-800 pt-8 mt-12 text-center text-slate-400">
            <p>&copy; 2024 Ti Kloud Réunion. Tous droits réservés.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;