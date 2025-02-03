import { useState } from "react";
import emailjs from "@emailjs/browser";

export const HeroContactForm = () => {
  const [formData, setFormData] = useState({
    need: "I need more revenue for my business",
    email: "",
    budget: "",
  });

  const needs = [
    "I need more revenue for my business",
    "I need more traffic to my website",
    "I need more customers",
    "I need more leads",
    "I need more sales",
    "I need help with brand awareness",
    "All of the above",
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();

    const serviceID = "service_ei97658";
    const templateID = "template_vmm2hwi";
    const userID = "A7u3t1t9TNX-4LxrF";

    try {
      const emailParams = {
        from_email: formData.email,
        message: `${formData.need} and my budget is ${formData.budget}`,
      };

      const res = await emailjs.send(
        serviceID,
        templateID,
        emailParams,
        userID
      );

      if (res.status === 200) {
        alert("Message sent successfully!");
        setFormData({
          email: "",
          message: "",
        });
      }
    } catch (error) {
      console.error("Failed to send message. Please try again later.");
    }
  };

  return (
    <div className="relative w-full container mx-auto mt-8 p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg z-55">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col md:flex-row gap-4hero-contact-form "
        id="hero-contact-form"
      >
        <div className="flex-1">
          <select
            value={formData.need}
            onChange={(e) => setFormData({ ...formData, need: e.target.value })}
            className="block w-full rounded-[48px] border border-borderColor bg-white px-5 py-2.5 text-sm text-paragraph-light outline-none transition-all duration-300 placeholder:text-paragraph-light focus:border-primary dark:border-borderColor-dark dark:bg-dark-200 dark:placeholder:text-paragraph-light dark:focus:border-primary"
          >
            {needs.map((need) => (
              <option key={need} value={need}>
                {need}
              </option>
            ))}
          </select>
        </div>

        <div className="flex-1">
          <input
            type="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
            className="block w-full rounded-[48px] border border-borderColor bg-white px-5 py-2.5 text-sm text-paragraph-light outline-none transition-all duration-300 placeholder:text-paragraph-light focus:border-primary dark:border-borderColor-dark dark:bg-dark-200 dark:placeholder:text-paragraph-light dark:focus:border-primary"
            required
          />
        </div>

        <div className="flex-1">
          <input
            type="number"
            placeholder="Monthly budget (USD)"
            value={formData.budget}
            onChange={(e) =>
              setFormData({ ...formData, budget: e.target.value })
            }
            className="block w-full rounded-[48px] border border-borderColor bg-white px-5 py-2.5 text-sm text-paragraph-light outline-none transition-all duration-300 placeholder:text-paragraph-light focus:border-primary dark:border-borderColor-dark dark:bg-dark-200 dark:placeholder:text-paragraph-light dark:focus:border-primary"
            min="0"
            step="100"
            required
          />
        </div>

        <button type="submit" className="btn text-white">
          GET A FREE QUOTE
        </button>
      </form>
    </div>
  );
};
