import { useState } from 'react';
import emailjs from '@emailjs/browser';

export const HeroContactForm = () => {
  const [formData, setFormData] = useState({
    need: 'I need more revenue for my business',
    email: '',
    budget: '',
  });

  const handleChange = (field) => (e) =>
    setFormData({ ...formData, [field]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const serviceID = 'service_ei97658';
    const templateID = 'template_vmm2hwi';
    const userID = 'A7u3t1t9TNX-4LxrF';

    try {
      await emailjs.send(serviceID, templateID, {
        from_email: formData.email,
        message: `${formData.need} and my budget is ${formData.budget}`,
      }, userID);

      alert('Message sent successfully!');
      setFormData({ need: 'I need more revenue for my business', email: '', budget: '' });
    } catch (error) {
      console.error('Failed to send message.', error);
    }
  };

  const needs = [
    'I need more revenue for my business',
    'I need more traffic to my website',
    'I need more customers',
    'I need more leads',
    'I need more sales',
    'I need help with brand awareness',
    'All of the above',
  ];

  return (
    <div className="relative container mx-auto mt-8 p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg z-55">
      <form onSubmit={handleSubmit} className="flex flex-col md:flex-row gap-4">
        <select
          value={formData.need}
          onChange={handleChange('need')}
          className="w-full md:flex-1 rounded-[48px] border bg-white px-5 py-2.5 text-sm text-paragraph-light outline-none focus:border-primary transition-all dark:bg-dark-200 dark:border-borderColor-dark dark:focus:border-primary"
        >
          {needs.map((need) => (
            <option key={need} value={need}>{need}</option>
          ))}
        </select>

        <input
          type="email"
          placeholder="Enter your email"
          value={formData.email}
          onChange={handleChange('email')}
          required
          className="w-full md:flex-1 rounded-[48px] border bg-white px-5 py-2.5 text-sm text-paragraph-light outline-none focus:border-primary transition-all dark:bg-dark-200 dark:border-borderColor-dark dark:focus:border-primary"
        />

        <input
          type="number"
          placeholder="Monthly budget (USD)"
          value={formData.budget}
          onChange={handleChange('budget')}
          required
          min="0"
          step="100"
          className="w-full md:flex-1 rounded-[48px] border bg-white px-5 py-2.5 text-sm text-paragraph-light outline-none focus:border-primary transition-all dark:bg-dark-200 dark:border-borderColor-dark dark:focus:border-primary"
        />

        <button type="submit" className="btn text-white w-full md:w-auto">
          GET A FREE QUOTE
        </button>
      </form>
    </div>
  );
};
