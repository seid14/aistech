const Hero = () => {
  return (
    <section id="home" className="relative bg-gradient-to-br from-aistech-light-blue via-blue-50 to-white dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 py-20 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23059669' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-aistech-blue/10 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-sky-300/20 rounded-full blur-2xl animate-pulse delay-1000"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          {/* <div className="inline-block mb-4">
            <span className="bg-gradient-to-r from-aistech-blue to-sky-500 bg-clip-text text-transparent text-lg font-medium">
              🚀 Innovating Tomorrow's Technology
            </span>
          </div> */}

          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
            Welcome to{" "}
            <span className="bg-gradient-to-r from-aistech-blue via-sky-500 to-blue-600 bg-clip-text text-transparent animate-gradient">
              Aistech
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-10 max-w-4xl mx-auto leading-relaxed">
            Your trusted partner in <span className="font-semibold text-aistech-blue">custom software development</span> and cutting-edge technology solutions.
            We transform visionary ideas into powerful, scalable applications.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
            <a href="#contact" className="group bg-gradient-to-r from-aistech-blue to-sky-500 text-white px-10 py-4 rounded-2xl font-semibold hover:shadow-2xl hover:shadow-aistech-blue/25 transition-all duration-300 transform hover:scale-105 inline-block">
              <span className="flex items-center gap-2">
                Get Started
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </span>
            </a>
            <a href="#services" className="group border-2 border-aistech-blue text-aistech-blue dark:text-aistech-blue px-10 py-4 rounded-2xl font-semibold hover:bg-aistech-blue hover:text-white transition-all duration-300 backdrop-blur-sm bg-white/50 dark:bg-gray-800/50 inline-block">
              Learn More
            </a>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="backdrop-blur-sm bg-white/30 dark:bg-gray-800/30 rounded-2xl p-6 border border-white/20">
              <div className="text-3xl font-bold text-aistech-blue mb-2">50+</div>
              <div className="text-gray-600 dark:text-gray-400">Projects Completed</div>
            </div>
            <div className="backdrop-blur-sm bg-white/30 dark:bg-gray-800/30 rounded-2xl p-6 border border-white/20">
              <div className="text-3xl font-bold text-aistech-blue mb-2">10+</div>
              <div className="text-gray-600 dark:text-gray-400">Years Experience</div>
            </div>
            <div className="backdrop-blur-sm bg-white/30 dark:bg-gray-800/30 rounded-2xl p-6 border border-white/20">
              <div className="text-3xl font-bold text-aistech-blue mb-2">100%</div>
              <div className="text-gray-600 dark:text-gray-400">Client Satisfaction</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
