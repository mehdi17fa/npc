const EmailIcon = () => (
  <svg className="w-8 h-8 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
  </svg>
);

const PhoneIcon = () => (
  <svg className="w-8 h-8 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
  </svg>
);

const LinkedInIcon = () => (
  <svg className="w-8 h-8 text-yellow-400" fill="currentColor" viewBox="0 0 24 24">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
);

export default function ContactSection() {
  const contactMethods = [
    {
      icon: EmailIcon,
      label: 'Email',
      action: () => window.open('mailto:your-email@example.com', '_blank')
    },
    {
      icon: PhoneIcon,
      label: 'Call',
      action: () => window.open('tel:+1234567890', '_self')
    },
    {
      icon: LinkedInIcon,
      label: 'LinkedIn',
      action: () => window.open('https://linkedin.com/in/your-profile', '_blank')
    }
  ];

  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-12">
          Contactez-nous!
        </h2>
        
        <div className="flex justify-center items-center gap-8 flex-wrap">
          {contactMethods.map((method, index) => {
            const IconComponent = method.icon;
            return (
              <button
                key={index}
                onClick={method.action}
                className="group relative w-20 h-20 bg-black rounded-full flex items-center justify-center hover:bg-gray-800 transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-4 focus:ring-yellow-400 focus:ring-opacity-50"
                aria-label={method.label}
              >
                <IconComponent />
                
                {/* Tooltip */}
                <span className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white px-3 py-1 rounded text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap">
                  {method.label}
                </span>
              </button>
            );
          })}
        </div>
        
        <p className="mt-8 text-gray-600 max-w-2xl mx-auto">
          Nous sommes là pour vous aider. Choisissez votre méthode de contact préférée et nous vous répondrons dans les plus brefs délais.
        </p>
      </div>
    </section>
  );
}
