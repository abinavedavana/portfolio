import ContactForm from "../components/ContactForm";

function Contact() {
  return (
    <div
      id="contact"
      className="min-h-screen bg-gray-900 text-white px-6 py-16 flex flex-col items-center"
    >
      
      <h2 className="text-3xl md:text-4xl font-bold mb-4 text-blue-400">
        Get In Touch
      </h2>

      
      <p className="text-gray-300 max-w-2xl text-center leading-relaxed mb-10">
        I’m always open to discussing new opportunities, collaborations, or
        projects where I can contribute value. Whether you’re a recruiter
        looking for a skilled developer or a client with a project in mind,
        feel free to reach out. Simply fill out the form and I’ll get back to
        you as soon as possible.
      </p>

      
      <div className="w-full max-w-xl bg-gray-800 p-6 rounded-xl shadow-lg mb-10">
        <ContactForm />
      </div>

     
      <div className="flex flex-wrap gap-8 justify-center">
           <a href="mailto:abinavedavana@gmail.com" target="_blank"  rel="noopener noreferrer">
             <img  src="/gmail.png" alt="Gmail" className="w-10 cursor-pointer hover:scale-110  duration-200" />
           </a>


           <a href="https://www.linkedin.com/in/abinav-e-65099231b/" target="_blank"  rel="noopener noreferrer">
             <img src="/linkedin.png" alt="linkedin" className="w-10  cursor-pointer hover:scale-110  duration-200"/>
           </a>


           <a href="https://github.com/abinavedavana" target="_blank"  rel="noopener noreferrer">
             <img src="/github.png" alt="github" className="w-10 cursor-pointer hover:scale-110  duration-200"/>
           </a>
      </div>

      <footer className="bg-gray-900 py-4 px-6">
        <p className="text-sm text-center md:text-left">
          © 2025 Abinav E . Designed & developed by Abinav E
        </p>
      </footer>



    </div>

    
  );
}

export default Contact;