function App() {
  return (
    <>
      <div className=" min-h-screen w-full bg-white/80 backdrop-blur-sm p-8">
        <div className="space-y-1">
          <h1 className="text-4xl font-bold text-indigo-600">RARA AI</h1>
          <p className="text-sm text-indigo-600">powered by VISUALEZ</p>
        </div>

        {/* Main Content */}
        <div className="mt-16 md:mt-28 space-y-10 flex flex-col m-auto justify-center items-center">
          <div className="space-y-6">
            <h2 className=" text-4xl md:text-5xl font-bold leading-tight text-center">
              Bringing Gen AI solutions to the{" "}
              <span className="text-indigo-600">flooring industry</span>
            </h2>
          </div>

          {/* Form Section */}
          <div className=" flex flex-col justify-center items-center w-full space-y-8 max-w-xl">
            <input
              type="email"
              placeholder="Enter your email..."
              aria-label="Email Address"
              className=" h-12 px-4 w-full border-2 border-gray-600 focus:border-indigo-500 rounded-lg"
            />

            <button
              type="button"
              className=" w-40 h-11 bg-custom-gradient text-white rounded-xl font-medium transition-all duration-200 transform hover:scale-[1.02]"
            >
              Start the demo
            </button>
          </div>

          <div className=" fixed bottom-0 w-full bg-gray-50 px-3 md:px-6 py-4 flex flex-wrap items-center justify-between md:justify-end gap-6 text-sm">
            <div className="flex items-center space-x-2 text-indigo-600 hover:text-indigo-700 transition-colors">
              <span className="text-lg">•</span>
              <a
                href="https://youtube.com/shorts/Q1TNBhYlTXo?feature=shared"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium hover:underline"
              >
                Best Innovation Award
              </a>
              <span className="text-gray-600">at TISE 2024</span>
            </div>

            <div className="flex items-center space-x-2">
              <span className="text-lg text-indigo-600">•</span>
              <button className="font-medium text-indigo-600 hover:text-indigo-700 hover:underline transition-colors">
                Contact us
              </button>
            </div>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute -z-10 top-0 right-0 w-72 h-72 bg-indigo-100 rounded-full blur-3xl opacity-30"></div>
        <div className="absolute -z-10 bottom-0 left-0 w-72 h-72 bg-purple-100 rounded-full blur-3xl opacity-30"></div>
      </div>
    </>
  );
}

export default App;
