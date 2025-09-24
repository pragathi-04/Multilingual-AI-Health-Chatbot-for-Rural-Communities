import React from 'react';
import { GlobeIcon, BellIcon, DatabaseIcon, MessageSquareTextIcon, BrainIcon, BarChartIcon, ShieldIcon, HeadphonesIcon } from 'lucide-react';
export function Features() {
  const features = [{
    icon: <GlobeIcon className="h-8 w-8 text-blue-600" />,
    title: 'Multilingual Support',
    description: 'Supports multiple languages and local dialects to reach diverse rural and semi-urban populations.'
  }, {
    icon: <MessageSquareTextIcon className="h-8 w-8 text-blue-600" />,
    title: 'WhatsApp & SMS Access',
    description: 'Accessible via popular messaging platforms, requiring minimal technical knowledge from users.'
  }, {
    icon: <DatabaseIcon className="h-8 w-8 text-blue-600" />,
    title: 'Government Database Integration',
    description: 'Real-time integration with official health databases for accurate vaccination and outbreak data.'
  }, {
    icon: <BellIcon className="h-8 w-8 text-blue-600" />,
    title: 'Personalized Alerts',
    description: "Sends targeted reminders based on user's age, location, and specific health needs."
  }, {
    icon: <BrainIcon className="h-8 w-8 text-blue-600" />,
    title: 'Intelligent Intent Recognition',
    description: 'Advanced NLP models classify user queries into appropriate categories for accurate responses.'
  }, {
    icon: <BarChartIcon className="h-8 w-8 text-blue-600" />,
    title: 'Analytics Dashboard',
    description: 'Tracks usage patterns, accuracy metrics, and community health awareness improvements.'
  }, {
    icon: <ShieldIcon className="h-8 w-8 text-blue-600" />,
    title: 'Privacy & Security',
    description: 'Robust data protection with encryption at rest and role-based access controls.'
  }, {
    icon: <HeadphonesIcon className="h-8 w-8 text-blue-600" />,
    title: 'Human Fallback',
    description: "Seamless handoff to human operators when queries fall outside the bot's knowledge base."
  }];
  return <section id="features" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">Key Features</h2>
          <p className="mt-4 text-xl text-gray-600">
            Empowering communities with accessible healthcare information
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>)}
        </div>
        <div className="mt-16 bg-white p-8 rounded-lg shadow-lg">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">
            How It Works
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center text-center">
              <div className="bg-blue-100 rounded-full p-4 mb-4">
                <MessageSquareTextIcon className="h-8 w-8 text-blue-600" />
              </div>
              <h4 className="text-lg font-semibold mb-2">
                User Sends a Message
              </h4>
              <p className="text-gray-600">
                Users send queries in their preferred language via WhatsApp or
                SMS
              </p>
              <div className="mt-4 w-full h-1 bg-blue-600 md:hidden"></div>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="bg-blue-100 rounded-full p-4 mb-4">
                <BrainIcon className="h-8 w-8 text-blue-600" />
              </div>
              <h4 className="text-lg font-semibold mb-2">AI Processing</h4>
              <p className="text-gray-600">
                The system detects language, classifies intent, and retrieves
                relevant information
              </p>
              <div className="mt-4 w-full h-1 bg-blue-600 md:hidden"></div>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="bg-blue-100 rounded-full p-4 mb-4">
                <DatabaseIcon className="h-8 w-8 text-blue-600" />
              </div>
              <h4 className="text-lg font-semibold mb-2">
                Personalized Response
              </h4>
              <p className="text-gray-600">
                User receives accurate information from the knowledge base or
                government databases
              </p>
            </div>
          </div>
          <div className="hidden md:flex justify-center mt-8">
            <div className="w-2/3 h-1 bg-blue-600"></div>
          </div>
        </div>
      </div>
    </section>;
}