



function Resume() {
  return (
    <div id="resume" className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center px-6 py-12">

      <h2 className="text-3xl md:text-4xl font-bold text-blue-400 mb-4">
        My Resume
      </h2>

      <p className="text-gray-300 text-center max-w-xl mb-8">
        You can view or download my resume below.
      </p>

      <div className="flex flex-col items-center space-y-6">

        
        <a
          href="/my_resume.pdf"
          download="my_resume.pdf"
          className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg text-white font-semibold shadow-lg transition-all"
        >
          Download Resume
        </a>

        
        <a
          href="/my_resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-3 bg-gray-700 hover:bg-gray-800 rounded-lg text-white font-semibold shadow-lg transition-all"
        >
          View Resume
        </a>

      </div>
    </div>
  );
}

export default Resume;
