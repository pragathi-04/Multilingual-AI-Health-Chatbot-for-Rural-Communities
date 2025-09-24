import React from 'react';
import { MessageSquareTextIcon, GlobeIcon, BellIcon, DatabaseIcon } from 'lucide-react';
export function Hero() {
  return <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-6">
              Multilingual Healthcare AI Chatbot
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100">
              Educating rural and semi-urban communities on preventive
              healthcare through WhatsApp and SMS
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="bg-white text-blue-700 hover:bg-blue-50 px-6 py-3 rounded-md font-medium shadow-lg">
                Learn More
              </button>
              <button className="bg-transparent border-2 border-white hover:bg-white hover:text-blue-700 px-6 py-3 rounded-md font-medium">
                Watch Demo
              </button>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="bg-white p-6 rounded-lg shadow-xl transform rotate-3 relative">
              <div className="flex items-center mb-4">
                <div className="w-3 h-3 bg-red-500 rounded-full mr-2"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full mr-2"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              </div>
              <div className="bg-gray-100 p-4 rounded-md mb-4">
                <div className="flex items-start">
                  <div className="bg-blue-600 text-white p-2 rounded-lg rounded-bl-none mb-4 max-w-xs">
                    <p className="text-sm">
                      Hello! I'd like to know about vaccination schedules for my
                      2-year-old child.
                    </p>
                  </div>
                </div>
                <div className="flex items-start justify-end">
                  <div className="bg-gray-300 p-2 rounded-lg rounded-br-none mb-4 max-w-xs">
                    <p className="text-sm">
                      Based on your child's age (2 years), the recommended
                      vaccines are: MMR, DTaP, and Varicella. Would you like me
                      to find the nearest clinic for vaccination?
                    </p>
                  </div>
                </div>
                <div className="flex items-center justify-center">
                  <div className="text-xs text-gray-500">
                    Available in 12 languages
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-indigo-800 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="flex flex-col items-center">
              <MessageSquareTextIcon className="h-8 w-8 mb-2" />
              <p className="text-blue-100">WhatsApp & SMS Integration</p>
            </div>
            <div className="flex flex-col items-center">
              <GlobeIcon className="h-8 w-8 mb-2" />
              <p className="text-blue-100">Multiple Languages</p>
            </div>
            <div className="flex flex-col items-center">
              <BellIcon className="h-8 w-8 mb-2" />
              <p className="text-blue-100">Personalized Alerts</p>
            </div>
            <div className="flex flex-col items-center">
              <DatabaseIcon className="h-8 w-8 mb-2" />
              <p className="text-blue-100">Gov. Database Integration</p>
            </div>
          </div>
        </div>
      </div>
    </div>;
}