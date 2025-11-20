import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import QuoteRequestForm from './QuoteRequestForm';

const WebsiteBuilderWizard = ({ onClose }) => {
  const [step, setStep] = useState(1);
  const [answers, setAnswers] = useState({});
  const [showForm, setShowForm] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  // Check if EmailJS is loaded
  const [isEmailJsReady, setIsEmailJsReady] = useState(false);
  
  useEffect(() => {
    // Check if EmailJS is available
    if (window.emailjs) {
      setIsEmailJsReady(true);
    }
  }, []);
  
  const handleFormSubmit = () => {
    setIsSubmitted(true);
    // Close the modal after 3 seconds
    setTimeout(() => {
      onClose();
    }, 3000);
  };

  const questions = [
    {
      id: 'purpose',
      question: "What's the main purpose of your website?",
      type: 'select',
      options: [
        { value: 'business', label: 'Business/Company Site' },
        { value: 'portfolio', label: 'Portfolio/Showcase' },
        { value: 'ecommerce', label: 'E-commerce Store' },
        { value: 'blog', label: 'Blog/Content' },
        { value: 'webapp', label: 'Web Application' },
      ],
    },
    {
      id: 'pages',
      question: 'Which pages do you need?',
      type: 'multi-select',
      options: [
        { value: 'home', label: 'Home' },
        { value: 'about', label: 'About Us' },
        { value: 'services', label: 'Services' },
        { value: 'portfolio', label: 'Portfolio' },
        { value: 'blog', label: 'Blog' },
        { value: 'contact', label: 'Contact' },
        { value: 'faq', label: 'FAQ' },
      ],
    },
    {
      id: 'features',
      question: 'What features do you need?',
      type: 'multi-select',
      options: [
        { value: 'contact-form', label: 'Contact Form' },
        { value: 'newsletter', label: 'Email Newsletter' },
        { value: 'blog', label: 'Blog System' },
        { value: 'seo', label: 'SEO Optimization' },
        { value: 'analytics', label: 'Analytics' },
        { value: 'social', label: 'Social Media Integration' },
      ],
    },
    {
      id: 'design',
      question: 'What design style do you prefer?',
      type: 'select',
      options: [
        { value: 'minimal', label: 'Minimal & Clean' },
        { value: 'modern', label: 'Modern & Bold' },
        { value: 'corporate', label: 'Corporate' },
        { value: 'creative', label: 'Creative & Artistic' },
        { value: 'custom', label: 'Custom Design' },
      ],
    },
  ];

  const handleNext = () => {
    if (step < questions.length) {
      setStep(step + 1);
    } else {
      // Show the quote request form
      setShowForm(true);
    }
  };

  const handlePrev = () => {
    if (step > 1) setStep(step - 1);
  };

  const handleSelect = (questionId, value) => {
    setAnswers(prev => ({
      ...prev,
      [questionId]: value
    }));
  };

  const toggleMultiSelect = (questionId, value) => {
    setAnswers(prev => {
      const current = prev[questionId] || [];
      const newValue = current.includes(value)
        ? current.filter(item => item !== value)
        : [...current, value];
      return {
        ...prev,
        [questionId]: newValue
      };
    });
  };

  const currentQuestion = questions[step - 1];

  // If form is submitted, show success message
  if (isSubmitted) {
    return (
      <div className="bg-bytebridge-dark/50 backdrop-blur-sm rounded-2xl p-6 border border-bytebridge-cyan/20 max-w-2xl mx-auto">
        <div className="text-center py-8">
          <div className="text-6xl mb-4">🎉</div>
          <h3 className="text-2xl font-bold text-white mb-2">Thank You!</h3>
          <p className="text-gray-300 mb-6">
            We've received your information and will get back to you within 24 hours with a detailed quote.
          </p>
          <button
            onClick={onClose}
            className="px-6 py-2 bg-gradient-to-r from-bytebridge-cyan to-bytebridge-green text-bytebridge-black font-semibold rounded-lg hover:opacity-90"
          >
            Close
          </button>
        </div>
      </div>
    );
  }
  
  // Show the quote request form
  if (showForm) {
    return (
      <div className="bg-bytebridge-dark/50 backdrop-blur-sm rounded-2xl p-6 border border-bytebridge-cyan/20 max-w-2xl mx-auto">
        <QuoteRequestForm 
          answers={answers} 
          onBack={() => setShowForm(false)}
          onSubmit={handleFormSubmit}
        />
      </div>
    );
  }
  
  // Show the wizard steps
  return (
    <div className="bg-bytebridge-dark/50 backdrop-blur-sm rounded-2xl p-6 border border-bytebridge-cyan/20 max-w-2xl mx-auto">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-2xl font-bold text-white">Build Your Website</h3>
        <button 
          onClick={onClose}
          className="text-gray-400 hover:text-white"
          aria-label="Close"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
      
      {/* Progress Bar */}
      <div className="w-full bg-bytebridge-black/50 rounded-full h-2.5 mb-8">
        <motion.div 
          className="bg-gradient-to-r from-bytebridge-cyan to-bytebridge-green h-2.5 rounded-full"
          initial={{ width: 0 }}
          animate={{ width: `${(step / questions.length) * 100}%` }}
          transition={{ duration: 0.5 }}
        />
      </div>

      <AnimatePresence mode="wait">
          <motion.div
            key={step}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="space-y-6"
          >
            <h4 className="text-xl font-semibold text-white">
              {step}. {currentQuestion.question}
            </h4>

            <div className="space-y-3">
              {currentQuestion.options.map((option) => (
                <motion.div
                  key={option.value}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`p-4 rounded-lg cursor-pointer transition-colors ${
                    (currentQuestion.type === 'select' && answers[currentQuestion.id] === option.value) ||
                    (currentQuestion.type === 'multi-select' && answers[currentQuestion.id]?.includes(option.value))
                      ? 'bg-gradient-to-r from-bytebridge-cyan/20 to-bytebridge-green/20 border border-bytebridge-cyan/50'
                      : 'bg-bytebridge-black/50 border border-bytebridge-cyan/10 hover:border-bytebridge-cyan/30'
                  }`}
                  onClick={() => {
                    if (currentQuestion.type === 'select') {
                      handleSelect(currentQuestion.id, option.value);
                    } else {
                      toggleMultiSelect(currentQuestion.id, option.value);
                    }
                  }}
                >
                  <div className="flex items-center">
                    {currentQuestion.type === 'multi-select' && (
                      <div className={`w-5 h-5 rounded mr-3 flex items-center justify-center ${
                        answers[currentQuestion.id]?.includes(option.value)
                          ? 'bg-bytebridge-cyan'
                          : 'border border-gray-500'
                      }`}>
                        {answers[currentQuestion.id]?.includes(option.value) && (
                          <svg className="w-3 h-3 text-bytebridge-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                          </svg>
                        )}
                      </div>
                    )}
                    <span className="text-white">{option.label}</span>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="flex justify-between pt-4">
              <button
                onClick={handlePrev}
                disabled={step === 1}
                className={`px-6 py-2 rounded-lg ${
                  step === 1
                    ? 'text-gray-500 cursor-not-allowed'
                    : 'text-bytebridge-cyan hover:bg-bytebridge-cyan/10'
                }`}
              >
                Back
              </button>
              <button
                onClick={handleNext}
                disabled={
                  (currentQuestion.type === 'select' && !answers[currentQuestion.id]) ||
                  (currentQuestion.type === 'multi-select' && (!answers[currentQuestion.id] || answers[currentQuestion.id].length === 0))
                }
                className="px-6 py-2 bg-gradient-to-r from-bytebridge-cyan to-bytebridge-green text-bytebridge-black font-semibold rounded-lg hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {step === questions.length ? 'Get My Plan' : 'Next'}
              </button>
            </div>
          </motion.div>
        )
      </AnimatePresence>
    </div>
  );
};

export default WebsiteBuilderWizard;
