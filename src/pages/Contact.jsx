// import ContactForm from "../components/ContactForm";


// function Contact(){

//     return(
//         <div>
//             <h2>Get In Touch</h2>
//             <p>I’m always open to discussing new opportunities, collaborations, or projects where I can contribute value. Whether you’re a recruiter looking for a skilled developer or a client with a project in mind, feel free to reach out.
//             Simply fill out the form and I’ll get back to you as soon as possible.</p>
//             <ContactForm/>
//         </div>
//     )

// }

// export default Contact;


import ContactForm from "../components/ContactForm";

function Contact() {
  return (
    <div  className="min-h-screen bg-gray-900 text-white px-6 py-12 flex flex-col items-center">
      
      <h2 className="text-3xl md:text-4xl font-bold mb-4 text-blue-400">
        Get In Touch
      </h2>

      <p className="text-gray-300 max-w-2xl text-center leading-relaxed mb-8">
        I’m always open to discussing new opportunities, collaborations, or
        projects where I can contribute value. Whether you’re a recruiter
        looking for a skilled developer or a client with a project in mind,
        feel free to reach out. Simply fill out the form and I’ll get back to
        you as soon as possible.
      </p>

      <div className="w-full max-w-xl bg-gray-800 p-6 rounded-xl shadow-lg">
        <ContactForm />
      </div>

    </div>
  );
}

export default Contact;









