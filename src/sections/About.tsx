const About = () => {
  return (
    <section id="about" className="py-20 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-aistech-blue/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-sky-300/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div>
              <div className="inline-block mb-4">
                <span className="bg-gradient-to-r from-aistech-blue to-sky-500 bg-clip-text text-transparent text-sm font-semibold uppercase tracking-wider">
                  About Us
                </span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
                Innovating the Future of{" "}
                <span className="bg-gradient-to-r from-aistech-blue to-sky-500 bg-clip-text text-transparent">
                  Technology
                </span>
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                Aistech is a leading technology solutions provider dedicated to helping businesses
                harness the power of modern software development. With years of experience in the
                industry, we specialize in creating innovative solutions that drive real business value.
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                Our team of expert developers, designers, and consultants work closely with clients
                to understand their unique challenges and deliver tailored solutions that exceed expectations.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-8">
              <div className="backdrop-blur-sm bg-white/60 dark:bg-gray-800/60 rounded-2xl p-6 border border-white/20 dark:border-gray-700/50">
                <div className="text-4xl font-bold text-aistech-blue mb-2">50+</div>
                <div className="text-gray-600 dark:text-gray-400 font-medium">Projects Completed</div>
              </div>
              <div className="backdrop-blur-sm bg-white/60 dark:bg-gray-800/60 rounded-2xl p-6 border border-white/20 dark:border-gray-700/50">
                <div className="text-4xl font-bold text-aistech-blue mb-2">10+</div>
                <div className="text-gray-600 dark:text-gray-400 font-medium">Years Experience</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-r from-aistech-blue/20 to-sky-500/20 rounded-3xl blur-2xl"></div>
            <div className="relative bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl p-8 rounded-3xl border border-white/20 dark:border-gray-700/50 shadow-2xl">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                Why Choose Aistech?
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start group">
                  <div className="flex-shrink-0 w-6 h-6 bg-gradient-to-r from-aistech-blue to-sky-500 rounded-full flex items-center justify-center mr-4 mt-0.5 group-hover:scale-110 transition-transform">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <span className="text-gray-600 dark:text-gray-300 leading-relaxed">Custom solutions tailored to your specific needs</span>
                </li>
                <li className="flex items-start group">
                  <div className="flex-shrink-0 w-6 h-6 bg-gradient-to-r from-aistech-blue to-sky-500 rounded-full flex items-center justify-center mr-4 mt-0.5 group-hover:scale-110 transition-transform">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <span className="text-gray-600 dark:text-gray-300 leading-relaxed">Modern technologies and industry best practices</span>
                </li>
                <li className="flex items-start group">
                  <div className="flex-shrink-0 w-6 h-6 bg-gradient-to-r from-aistech-blue to-sky-500 rounded-full flex items-center justify-center mr-4 mt-0.5 group-hover:scale-110 transition-transform">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <span className="text-gray-600 dark:text-gray-300 leading-relaxed">Agile development methodology for faster delivery</span>
                </li>
                <li className="flex items-start group">
                  <div className="flex-shrink-0 w-6 h-6 bg-gradient-to-r from-aistech-blue to-sky-500 rounded-full flex items-center justify-center mr-4 mt-0.5 group-hover:scale-110 transition-transform">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <span className="text-gray-600 dark:text-gray-300 leading-relaxed">Ongoing support and maintenance services</span>
                </li>
                <li className="flex items-start group">
                  <div className="flex-shrink-0 w-6 h-6 bg-gradient-to-r from-aistech-blue to-sky-500 rounded-full flex items-center justify-center mr-4 mt-0.5 group-hover:scale-110 transition-transform">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <span className="text-gray-600 dark:text-gray-300 leading-relaxed">Competitive pricing with transparent processes</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
