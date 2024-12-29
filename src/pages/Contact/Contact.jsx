import React, { useState } from "react";
import emailjs from 'emailjs-com';

const Contact = () => {
  const [successMessage, setSuccessMessage] = useState("");  // State for success message
  const [isSuccess, setIsSuccess] = useState(false);
  const navigation = [
    {
      name: 'Facebook',
      href: 'https://www.facebook.com/profile.php?id=100004663937920',
      icon: (props) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path
            fillRule="evenodd"
            d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
    {
      name: 'Instagram',
      href: 'https://www.instagram.com/br.karthi1999/',
      icon: (props) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path
            fillRule="evenodd"
            d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
    {
      name: 'LinkedIn',
      href: 'https://www.linkedin.com/in/karthi-babu/', // Replace '#' with your actual LinkedIn profile URL
      icon: (props) => (
        <svg fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
          <path d="M22.23 0H1.77C.79 0 0 .77 0 1.72v20.55C0 23.23.79 24 1.77 24h20.46c.98 0 1.77-.77 1.77-1.72V1.72C24 .77 23.21 0 22.23 0zM7.12 20.45H3.56V9h3.56v11.45zM5.34 7.64c-1.13 0-2.05-.92-2.05-2.05S4.21 3.54 5.34 3.54c1.13 0 2.05.92 2.05 2.05s-.92 2.05-2.05 2.05zM20.45 20.45h-3.55v-5.48c0-1.31-.03-3-1.82-3-1.82 0-2.1 1.42-2.1 2.89v5.59h-3.55V9h3.41v1.56h.05c.48-.91 1.67-1.87 3.44-1.87 3.68 0 4.36 2.42 4.36 5.57v6.19z" />
        </svg>
      ),
    },
    {
      name: 'GitHub',
      href: 'https://github.com/karthi1999',
      icon: (props) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path
            fillRule="evenodd"
            d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
  ];

  function sendEmail(e) {
    e.preventDefault();    //This is important, i'm not sure why, but the email won't send without it

    // Send the email using the emailjs service
    emailjs.sendForm('service_a211pzq', 'template_6o896ks', e.target, 'mfI_TeyhJ8Fkh7svf')
      .then((result) => {
        setSuccessMessage("Email sent successfully!");  // Show success message
        setIsSuccess(true);  // Set state to true for displaying success notification
        setTimeout(() => {
          window.location.reload();  // Optionally reload after the success message disappears
        }, 3000);  // Wait for 3 seconds before reloading
      }, (error) => {
        console.log(error.text);  // Log any errors if the email wasn't sent
      });
  }

  return (
    <div className="min-h-screen bg-gray-900 flex flex-col justify-center items-center px-4 md:px-16" id='contact'>
      <h2 className="text-3xl md:text-4xl font-bold mb-8 text-white">Contact Me</h2>
      <div className="flex flex-col md:flex-row w-full max-w-6xl gap-8">
        {/* Left Section */}
        <div className="flex flex-col md:w-1/2 space-y-6 p-6">
          {/* Contact Details */}
          <div className="space-y-2">
            <p className="flex items-center gap-2 text-lg text-white">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width={16}><path d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48L48 64zM0 176L0 384c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-208L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z" className="fill-gray-600" /></svg> karthibabu.rajasekar@gmail.com
            </p>
            <p className="flex items-center gap-2 text-lg text-white">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width={16}><path d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z" className="fill-gray-600" /></svg> +91 90256 25958
            </p>
          </div>

          {/* Social Media */}
          <div className="flex gap-x-6">
            {navigation.map((item) => (
              <a key={item.name} href={item.href} target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-white">
                <span className="sr-only">{item.name}</span>
                <item.icon aria-hidden="true" className="size-6" />
              </a>
            ))}
          </div>

          {/* Download CV Button */}
          <a
            href="/Karthi_Babu.pdf"
            download
            className="w-max py-2 px-4 bg-red-600 text-white font-semibold rounded hover:bg-red-700"
          >
            Download CV
          </a>
        </div>

        {/* Right Section */}
        <div className="flex flex-col md:w-1/2 p-6 rounded-lg bg-white/10 shadow-lg shadow-black/20 backdrop-blur-md border-b border-white/30">
          <form className="space-y-4" onSubmit={sendEmail}>
            {/* Name */}
            <input
              type="text"
              name="from_name"  // Make sure 'name' matches the template placeholder
              placeholder="Your Name"
              className="w-full p-3 text-black rounded border border-gray-200 focus:ring-2 focus:ring-red-500 focus:outline-none"
              required
            />
            {/* Email */}
            <input
              type="email"
              name="user_email"  // Match this name with the placeholder for 'from_email'
              placeholder="Your Email"
              className="w-full p-3 text-black rounded border border-gray-200 focus:ring-2 focus:ring-red-500 focus:outline-none"
              required
            />
            {/* Message */}
            <textarea
              name="message"  // Make sure 'message' matches the placeholder in your template
              placeholder="Your Message"
              rows="5"
              className="w-full p-3 text-black rounded border border-gray-200 focus:ring-2 focus:ring-red-500 focus:outline-none"
              required
            />
            {/* Submit Button */}
            <button
              type="submit"
              className="w-full py-2 bg-red-600 text-white font-semibold rounded hover:bg-red-700"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
      {/* Success Notification */}
      {isSuccess && (
        <div className="fixed top-4 left-1/2 transform -translate-x-1/2 w-96 border bg-white border-green-600 text-green-500 p-4 rounded-lg shadow-lg z-50">
          <div className="flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 mr-2 text-green-500" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.84-10.16a.75.75 0 10-1.06-1.06l-3.4 3.4-1.7-1.7a.75.75 0 10-1.06 1.06l2.45 2.45a.75.75 0 001.06 0l4.5-4.5z" clipRule="evenodd" />
            </svg>
            <span>{successMessage}</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default Contact;