import { useState } from 'react';
import { submitContactForm } from '../firebase/contactService';
import type { ContactFormData } from '../firebase/contactService';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  // Add custom styles for the notification animation
  const notificationStyles = `
    @keyframes shrink {
      from { width: 100%; }
      to { width: 0%; }
    }
  `;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const [showNotification, setShowNotification] = useState(false);
  const [notificationType, setNotificationType] = useState<'success' | 'error' | null>(null);
  const [notificationMessage, setNotificationMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await submitContactForm(formData as ContactFormData);

      setNotificationType('success');
      setNotificationMessage('Thank you! Your message has been sent successfully. We\'ll get back to you within 24 hours.');
      setShowNotification(true);
      setFormData({ name: '', email: '', message: '' });

      setTimeout(() => {
        setShowNotification(false);
        setNotificationType(null);
        setNotificationMessage('');
      }, 6000);

    } catch (error) {
      setNotificationType('error');
      setNotificationMessage(error instanceof Error ? error.message : 'Failed to send message. Please try again.');
      setShowNotification(true);

      setTimeout(() => {
        setShowNotification(false);
        setNotificationType(null);
        setNotificationMessage('');
      }, 6000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: notificationStyles }} />
      <section id="contact" className="py-24 bg-white dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-light text-gray-900 dark:text-white mb-4">
            Get in touch
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            We'd love to hear from you
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form - Left Side */}
          <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-8 lg:p-12 relative">
            {/* Modern Notification Toast */}
            {showNotification && (
              <div className={`fixed top-4 right-4 z-50 max-w-sm w-full animate-in slide-in-from-top-2 duration-300 ${
                notificationType === 'success'
                  ? 'bg-green-50 dark:bg-green-900/90 border-green-200 dark:border-green-800 text-green-800 dark:text-green-200'
                  : 'bg-red-50 dark:bg-red-900/90 border-red-200 dark:border-red-800 text-red-800 dark:text-red-200'
              } border px-6 py-4 rounded-xl shadow-lg backdrop-blur-sm`}>
                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0">
                    {notificationType === 'success' ? (
                      <svg className="h-6 w-6 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    ) : (
                      <svg className="h-6 w-6 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    )}
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-medium">
                      {notificationType === 'success' ? 'Message Sent!' : 'Error Occurred'}
                    </p>
                    <p className="text-xs mt-1 opacity-90">{notificationMessage}</p>
                  </div>
                  <button
                    onClick={() => {
                      setShowNotification(false);
                      setNotificationType(null);
                      setNotificationMessage('');
                    }}
                    className="flex-shrink-0 ml-2 hover:opacity-70 transition-opacity"
                  >
                    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>

                {/* Progress bar */}
                <div className="mt-3 bg-gray-200 dark:bg-gray-700 rounded-full h-1">
                  <div className={`h-1 rounded-full transition-all duration-6000 ease-linear ${
                    notificationType === 'success' ? 'bg-green-400' : 'bg-red-400'
                  }`} style={{ width: '100%', animation: 'shrink 6s linear forwards' }}></div>
                </div>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <input
                  type="text"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white dark:bg-gray-700 border-0 border-b border-gray-300 dark:border-gray-600 rounded-t-lg focus:ring-0 focus:border-gray-900 dark:focus:border-white text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 transition-colors"
                  placeholder="Your name"
                />
              </div>

              <div>
                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white dark:bg-gray-700 border-0 border-b border-gray-300 dark:border-gray-600 focus:ring-0 focus:border-gray-900 dark:focus:border-white text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 transition-colors"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <textarea
                  name="message"
                  required
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white dark:bg-gray-700 border-0 border-b border-gray-300 dark:border-gray-600 rounded-b-lg focus:ring-0 focus:border-gray-900 dark:focus:border-white text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 resize-none transition-colors"
                  placeholder="Tell us about your project..."
                />
              </div>

              <div className="pt-4">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gray-900 dark:bg-white text-white dark:text-gray-900 py-3 px-6 rounded-lg hover:bg-gray-800 dark:hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed transition-colors font-medium"
                >
                  {isSubmitting ? 'Sending...' : 'Send message'}
                </button>
              </div>
            </form>
          </div>

          {/* Contact Information - Right Side */}
          <div className="space-y-8">
            <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-8 lg:p-12">
              <h3 className="text-xl font-medium text-gray-900 dark:text-white mb-8">
                Contact Information
              </h3>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <svg className="h-6 w-6 text-gray-400 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-900 dark:text-white">Email</p>
                    <p className="text-gray-600 dark:text-gray-400">info@aistech.io</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <svg className="h-6 w-6 text-gray-400 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-900 dark:text-white">Phone</p>
                    <p className="text-gray-600 dark:text-gray-400">+251777495222</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <svg className="h-6 w-6 text-gray-400 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-900 dark:text-white">Address</p>
                    <p className="text-gray-600 dark:text-gray-400">
                      Addis Ababa, Ethiopia
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <svg className="h-6 w-6 text-gray-400 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-900 dark:text-white">Business Hours</p>
                    <p className="text-gray-600 dark:text-gray-400">
                      Monday - Friday: 9:00 AM - 6:00 PM<br />
                      Saturday: 10:00 AM - 4:00 PM<br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  );
};

export default Contact;
