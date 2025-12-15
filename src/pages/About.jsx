// import { yellow } from "@mui/material/colors";



// function About(){

//     return(
//         <div className="bg-yellow-300">
//             <h2>About Me</h2>
//             <p>
//                 I’m a passionate Frontend and MERN Stack Developer with a strong foundation in JavaScript, React.js, Node.js, Express.js, and MongoDB. I recently completed my B.Tech in Computer Science Engineering, where I gained hands-on experience building responsive, user-friendly, and scalable applications.
//             I have worked on impactful projects including a Travel Itinerary Designer using Ant Colony Optimization and a Real-Time Blood Donor Search System using Firebase and Flutter. These projects strengthened my skills in full-stack development, optimization techniques, API integration, and problem solving.
//             I enjoy creating clean interfaces, writing efficient code, and building applications that deliver real value to users. With strong analytical thinking and attention to detail, I’m focused on growing as a developer and contributing to innovative, high-quality web applications.
//             </p>
//         </div>
//     )

// }

// export default About;





function About() {
  return (
    <div  className="min-h-screen bg-gray-900 text-white px-6 py-16 flex flex-col items-center">
      
      <h2 className="text-3xl md:text-4xl font-bold text-blue-400 mb-6">
        About Me
      </h2>

      <p className="text-gray-300 max-w-3xl text-center leading-relaxed text-lg">
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
    </div>
  );
}

export default About;
