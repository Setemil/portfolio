import React, { useState } from "react";
import {
  Mail,
  Phone, 
  MapPin,
  Send,
  Github, 
  Linkedin, 
  Twitter, 
} from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionMessage, setSubmissionMessage] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmissionMessage(null);

    const { name, phone, subject, message } = formData;

    const yourEmailAddress = "setemiloye@gmail.com";

    const mailSubject = encodeURIComponent(`${subject}`);
    const mailBody = encodeURIComponent(
      `Hi, my name is ${name}\n` +
        `${message}\n\n` +
        `This is my phone number: ${phone}\n\n` +
        `Sent from your portfolio contact form.`
    );

    const mailtoLink = `mailto:${yourEmailAddress}?subject=${mailSubject}&body=${mailBody}`;

    setSubmissionMessage("Preparing your email draft...");

    // Open the user's email client
    window.location.href = mailtoLink;

    setTimeout(() => {
      setIsSubmitting(false);
      setFormData({ name: "", email: "", subject: "", message: "" });
      setSubmissionMessage("Your email client should now be open.");
    }, 1500); // Adjust delay as needed

    setTimeout(() => {
      setSubmissionMessage(null);
    }, 5000);
  };

  const contactMethods = [
    {
      icon: Mail,
      label: "Email",
      value: "setemiloye@gmail.com",
      href: "mailto:setemiloye@gmail.com",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Lagos, Nigeria",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+234 707 586 5775",
      href: "tel:+2347075865775",
    },
  ];

  const socialLinks = [
    {
      icon: Github,
      label: "GitHub",
      href: "https://github.com/setemil",
      color: "hover:text-gray-400",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://linkedin.com/in/setemi-loye-234527353",
      color: "hover:text-blue-400",
    },
    {
      icon: Twitter,
      label: "X",
      href: "https://x.com/LoyeSetemi",
      color: "hover:text-sky-400",
    },
  ];

  return (
    <section
      className="relative min-h-screen bg-gray-900 overflow-hidden"
      id="contact"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-gray-900 to-gray-900/50"></div>
      <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>

      <div className="relative z-10 container mx-auto px-6 py-20">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Let's Work{" "}
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
              Together
            </span>
          </h2>

          <div className="w-20 h-1 bg-gradient-to-r from-purple-400 to-blue-400 rounded-full mx-auto mb-8"></div>

          <p className="text-xl text-gray-300 leading-relaxed">
            Have a project in mind or just want to chat? I'd love to hear from
            you. Let's create something amazing together.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start max-w-7xl mx-auto">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-white mb-6">
                Let's Connect
              </h3>

              {contactMethods.map((method, index) => {
                const IconComponent = method.icon;
                return (
                  <a
                    key={index}
                    href={method.href} // This ensures the mailto link on the email icon works as well
                    className="group flex items-center space-x-4 p-4 bg-gray-800/30 backdrop-blur-sm rounded-xl border border-gray-700/50 hover:border-purple-400/50 transition-all duration-300 hover:bg-gray-800/50"
                    target={
                      method.href?.startsWith("http") ? "_blank" : "_self"
                    } // Open external links in new tab
                    rel={
                      method.href?.startsWith("http")
                        ? "noopener noreferrer"
                        : ""
                    }
                  >
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <IconComponent className="w-6 h-6 text-purple-400" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-400 font-medium">
                        {method.label}
                      </p>
                      <p className="text-white font-semibold group-hover:text-purple-400 transition-colors duration-300">
                        {method.value}
                      </p>
                    </div>
                  </a>
                );
              })}
            </div>

            <div className="pt-8">
              <h4 className="text-lg font-semibold text-white mb-4">
                Follow Me
              </h4>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => {
                  const IconComponent = social.icon;
                  return (
                    <a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`group w-12 h-12 bg-gray-800/50 backdrop-blur-sm rounded-lg border border-gray-700/50 flex items-center justify-center hover:border-purple-400/50 transition-all duration-300 hover:scale-110 ${social.color}`}
                    >
                      <IconComponent className="w-5 h-5 text-gray-400 group-hover:scale-110 transition-all duration-300" />
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Call to Action */}
            <div className="p-6 bg-gradient-to-br from-purple-500/10 to-blue-500/10 rounded-2xl border border-purple-400/20 backdrop-blur-sm">
              <h4 className="text-xl font-bold text-white mb-3">
                Ready to Start?
              </h4>
              <p className="text-gray-300 mb-4">
                Let's discuss your project and bring your ideas to life. I'm
                always excited to work on new challenges.
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-gray-800/30 backdrop-blur-sm rounded-2xl border border-gray-700/50 p-8">
            <h3 className="text-2xl font-bold text-white mb-6">
              Send a Message
            </h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label
                    htmlFor="name"
                    className="text-sm font-medium text-gray-300"
                  >
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-gray-900/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-purple-400 focus:ring-1 focus:ring-purple-400/50 focus:outline-none transition-colors duration-300"
                    placeholder="Your full name"
                  />
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="phone"
                    className="text-sm font-medium text-gray-300"
                  >
                    Phone Number
                  </label>
                  <input
                    type="text"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-gray-900/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-purple-400 focus:ring-1 focus:ring-purple-400/50 focus:outline-none transition-colors duration-300"
                    placeholder="081 2345 6789"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="subject"
                  className="text-sm font-medium text-gray-300"
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-gray-900/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-purple-400 focus:ring-1 focus:ring-purple-400/50 focus:outline-none transition-colors duration-300"
                  placeholder="What's this about?"
                />
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="message"
                  className="text-sm font-medium text-gray-300"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 bg-gray-900/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-purple-400 focus:ring-1 focus:ring-purple-400/50 focus:outline-none transition-colors duration-300 resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="group relative w-full px-8 py-4 bg-gradient-to-r from-purple-500 to-blue-500 text-white font-semibold rounded-lg overflow-hidden transition-all duration-800 ease-in-out hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/25 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
              >
                <span className="relative z-10 flex items-center justify-center space-x-2">
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <span>Send Message</span>
                      <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                    </>
                  )}
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>

              {/* Submission Feedback Message */}
              {submissionMessage && (
                <p className="text-center text-gray-300 mt-4 text-sm animate-fadeIn">
                  {submissionMessage}
                </p>
              )}
            </form>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-20 pt-8 border-t border-gray-800 text-center">
          <p className="text-gray-400">
            © 2025 Loye Oluwasetemi. Built with passion and lots of coffee ☕
          </p>
        </div>
      </div>

      {/* Animated particles */}
      <div className="absolute top-20 left-10 w-2 h-2 bg-purple-400 rounded-full animate-ping"></div>
      <div className="absolute top-40 right-20 w-1 h-1 bg-blue-400 rounded-full animate-pulse"></div>
      <div className="absolute bottom-40 left-20 w-1.5 h-1.5 bg-pink-400 rounded-full animate-bounce"></div>
      <div className="absolute bottom-20 right-10 w-1 h-1 bg-purple-400 rounded-full animate-ping delay-1000"></div>
    </section>
  );
};

export default Contact;
