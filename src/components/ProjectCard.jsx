

// function ProjectCard({ title, description, tech, link }){

//     return(
//         <div>
//             <h3>{title}</h3>
//             <p>{description}</p>

//             <div>
//                 {
//                     tech?.map((item,index) =>(
//                         <span key={index}>{item}</span>
//                     ))
//                 }
//             </div>

//             <a href={link} target="_blank">View Projects</a>
//         </div>
//     )
// }

// export default ProjectCard;






function ProjectCard({ title, description, tech, link }) {
  return (
    <div className="bg-gray-800 text-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all w-full max-w-md">

      {/* Title */}
      <h3 className="text-2xl font-semibold mb-3 text-blue-400">
        {title}
      </h3>

      {/* Description */}
      <p className="text-gray-300 mb-4 leading-relaxed">
        {description}
      </p>

      {/* Tech Stack */}
      <div className="flex flex-wrap gap-2 mb-6">
        {tech?.map((item, index) => (
          <span
            key={index}
            className="bg-gray-700 px-3 py-1 rounded-full text-sm text-gray-200 border border-gray-600"
          >
            {item}
          </span>
        ))}
      </div>

      {/* Button */}
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block px-6 py-2 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-all"
      >
        View Project
      </a>
    </div>
  );
}

export default ProjectCard;
