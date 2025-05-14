import { FiShield, FiClock, FiTrendingUp, FiHeadphones } from 'react-icons/fi';

const WhyChooseUs = () => {
  const features = [
    {
      icon: <FiShield size={24} className="text-blue-500" />,
      title: "Secure Transactions",
      description: "Bank-level security for all transactions and data handling."
    },
    {
      icon: <FiClock size={24} className="text-blue-500" />,
      title: "Fast Payouts",
      description: "Get paid within 48 hours of accepting our offer."
    },
    {
      icon: <FiTrendingUp size={24} className="text-blue-500" />,
      title: "Best Prices",
      description: "We offer competitive rates based on real-time market data."
    },
    {
      icon: <FiHeadphones size={24} className="text-blue-500" />,
      title: "Dedicated Support",
      description: "Our experts are available to guide you through the process."
    }
  ];

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Why Choose SoftSell?</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            We're revolutionizing the software resale market with transparency, speed, and security.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex items-center mb-4">
                <div className="bg-blue-100 dark:bg-blue-900 p-2 rounded-full mr-4">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  {feature.title}
                </h3>
              </div>
              <p className="text-gray-600 dark:text-gray-300">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;