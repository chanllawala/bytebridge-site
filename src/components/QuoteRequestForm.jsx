import { motion } from 'framer-motion';
import { useState } from 'react';

export default function QuoteRequestForm({ answers, onBack, onSubmit }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const response = await window.emailjs.send(
        window.EMAILJS_CONFIG.SERVICE_ID,
        window.EMAILJS_CONFIG.TEMPLATE_ID,
        {
          ...formData,
          projectType: answers.purpose,
          requiredPages: answers.pages?.join(', ') || 'Not specified',
          requiredFeatures: answers.features?.join(', ') || 'None',
          designPreference: answers.design || 'Not specified',
          timestamp: new Date().toLocaleString(),
        },
        window.EMAILJS_CONFIG.PUBLIC_KEY
      );
      
      setSubmitStatus('success');
      onSubmit();
    } catch (error) {
      console.error('Failed to send email:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitStatus === 'success') {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="text-center py-8"
      >
        <div className="text-6xl mb-4">🎉</div>
        <h3 className="text-2xl font-bold text-white mb-2">Thank You!</h3>
        <p className="text-gray-300 mb-6">
          We've received your information and will get back to you within 24 hours with a detailed quote.
        </p>
        <button
          onClick={onBack}
          className="px-6 py-2 bg-gradient-to-r from-bytebridge-cyan to-bytebridge-green text-bytebridge-black font-semibold rounded-lg hover:opacity-90"
        >
          Close
        </button>
      </motion.div>
    );
  }

  return (
    <motion.form
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      onSubmit={handleSubmit}
      className="space-y-4 text-left"
    >
      <h3 className="text-xl font-semibold text-white mb-4">Get Your Custom Quote</h3>
      
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-bytebridge-cyan mb-1">
          Full Name *
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 bg-bytebridge-black/50 border border-bytebridge-cyan/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-bytebridge-cyan/50"
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-bytebridge-cyan mb-1">
          Email Address *
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 bg-bytebridge-black/50 border border-bytebridge-cyan/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-bytebridge-cyan/50"
        />
      </div>

      <div>
        <label htmlFor="phone" className="block text-sm font-medium text-bytebridge-cyan mb-1">
          Phone Number
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          className="w-full px-4 py-2 bg-bytebridge-black/50 border border-bytebridge-cyan/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-bytebridge-cyan/50"
        />
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-bytebridge-cyan mb-1">
          Additional Details
        </label>
        <textarea
          id="message"
          name="message"
          rows="3"
          value={formData.message}
          onChange={handleChange}
          className="w-full px-4 py-2 bg-bytebridge-black/50 border border-bytebridge-cyan/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-bytebridge-cyan/50"
          placeholder="Tell us more about your project..."
        ></textarea>
      </div>

      <div className="pt-2">
        <p className="text-xs text-gray-400 mb-4">
          By submitting this form, you agree to our privacy policy and terms of service.
        </p>
      </div>

      <div className="flex justify-between pt-2">
        <button
          type="button"
          onClick={onBack}
          className="px-6 py-2 text-bytebridge-cyan hover:bg-bytebridge-cyan/10 rounded-lg transition-colors"
          disabled={isSubmitting}
        >
          Back
        </button>
        <button
          type="submit"
          disabled={isSubmitting || !formData.name || !formData.email}
          className="px-6 py-2 bg-gradient-to-r from-bytebridge-cyan to-bytebridge-green text-bytebridge-black font-semibold rounded-lg hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed flex items-center"
        >
          {isSubmitting ? (
            <>
              <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-bytebridge-black" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Sending...
            </>
          ) : (
            'Get My Quote'
          )}
        </button>
      </div>

      {submitStatus === 'error' && (
        <div className="text-red-400 text-sm mt-2">
          Oops! Something went wrong. Please try again later or contact us directly.
        </div>
      )}
    </motion.form>
  );
}
