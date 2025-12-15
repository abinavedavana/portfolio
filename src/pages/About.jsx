function About() {
  const skills = [
    "HTML5", "CSS3", "JavaScript", "React.js",
    "Tailwind CSS", "Bootstrap", "Material UI", "Responsive Design",
    "Node.js", "Express.js", "MongoDB",
     "Firebase", "Python", "Django",
    "MySQL", "Git & GitHub",  "Vercel Deployment","VS code","pycharm"
  ];

  return (
    <div id="about" className="min-h-screen bg-gray-900 text-white px-6 py-16 flex flex-col items-center">

      
      <h2 className="text-3xl md:text-4xl font-bold text-blue-400 mb-6">
        About Me
      </h2>

      
      <p className="text-gray-300 max-w-3xl text-center leading-relaxed text-lg mb-12">
        {/* I’m a passionate Full Stack Developer with a strong foundation in MERN stack and Python. 
        I enjoy building responsive, user-friendly, and scalable applications. I have experience 
        working on real-world projects and always strive to write clean, efficient, and maintainable code. */}

        I’m a passionate Frontend and MERN Stack Developer with a strong foundation 
        in JavaScript, React.js, Node.js, Express.js, and MongoDB. I recently 
        completed my B.Tech in Computer Science Engineering, where I gained 
        hands-on experience building responsive, user-friendly, and scalable 
        applications.
        <br /><br />
        I have worked on impactful projects including a Travel Itinerary Designer 
        using Ant Colony Optimization and a Real-Time Blood Donor Search System 
        using Firebase and Flutter. These projects strengthened my skills in 
        full-stack development, optimization techniques, API integration, and 
        problem solving.
        <br /><br />
        I enjoy creating clean interfaces, writing efficient code, and building 
        applications that deliver real value to users. With strong analytical 
        thinking and attention to detail, I’m focused on growing as a developer 
        and contributing to innovative, high-quality web applications.
      </p>

      
      <div className="bg-gray-800 p-6 rounded-xl shadow-lg w-full max-w-5xl">
        <h3 className="text-2xl md:text-3xl font-semibold text-blue-400 mb-4 text-center">
          My Skills
        </h3>

        <div className="flex flex-wrap justify-center gap-4">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="bg-gray-700 px-4 py-2 rounded-lg text-white font-medium hover:bg-blue-500 transition-colors duration-200"
            >
              {skill}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default About;






