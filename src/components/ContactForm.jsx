import { useState } from "react";

function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      alert("Please fill all fields.");
      return;
    }

    console.log("Form Submitted:", formData);
    setSubmitted(true);

    // Reset form after submission
    setFormData({
      name: "",
      email: "",
      message: "",
    });

    // Hide success message after 3 seconds
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <div className="w-full max-w-lg mx-auto">
      <h3 className="text-2xl font-semibold text-blue-400 mb-6 text-center">
        Contact Me
      </h3>

      
      {submitted && (
        <div className="bg-green-500 text-white p-3 rounded mb-4 text-center ">
          Thank you! Your message has been submitted.
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
       
        <div>
          <label className="block text-gray-300 font-medium mb-2">Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter Your Name"
            className="w-full p-3 rounded-lg bg-gray-700 text-white placeholder-gray-400 outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        
        <div>
          <label className="block text-gray-300 font-medium mb-2">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter Your Email"
            className="w-full p-3 rounded-lg bg-gray-700 text-white placeholder-gray-400 outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

       
        <div>
          <label className="block text-gray-300 font-medium mb-2">Message</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Write Your Message.."
            className="w-full p-3 h-32 rounded-lg bg-gray-700 text-white placeholder-gray-400 outline-none focus:ring-2 focus:ring-blue-500 resize-none"
          />
        </div>

        
        <button
          type="submit"
          className="w-full bg-blue-500 hover:bg-blue-700 py-3 rounded-lg text-white font-semibold cursor-pointer transition-colors duration-200"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default ContactForm;

