import { FiUpload, FiDollarSign, FiCheckCircle } from 'react-icons/fi';

const HowItWorks = () => {
  const steps = [
    {
      icon: <FiUpload size={40} className="text-blue-500" />,
      title: "Upload License Details",
      description: "Provide information about your software licenses through our secure portal."
    },
    {
      icon: <FiDollarSign size={40} className="text-blue-500" />,
      title: "Get Instant Valuation",
      description: "Our system analyzes current market prices and provides a fair offer."
    },
    {
      icon: <FiCheckCircle size={40} className="text-blue-500" />,
      title: "Get Paid Quickly",
      description: "Once accepted, receive payment via your preferred method within 48 hours."
    }
  ];

  return (
    <section id="how-it-works" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">How It Works</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Selling your unused software licenses has never been easier. Our simple 3-step process gets you paid quickly.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div 
              key={index}
              className="bg-gray-50 dark:bg-gray-800 p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex justify-center mb-6">
                <div className="bg-blue-100 dark:bg-blue-900 p-4 rounded-full">
                  {step.icon}
                </div>
              </div>
              <h3 className="text-xl font-semibold text-center text-gray-900 dark:text-white mb-3">
                {step.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-center">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;