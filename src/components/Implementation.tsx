import React from 'react';
import { ServerIcon, CodeIcon, DatabaseIcon, ShieldIcon, MessageSquareTextIcon } from 'lucide-react';
export function Implementation() {
  return <section id="technical" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">
            Technical Approach
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            Robust architecture for scalable and secure healthcare information
            delivery
          </p>
        </div>
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-3">
            <div className="p-8 bg-blue-700 text-white">
              <h3 className="text-xl font-bold mb-6">Technology Stack</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <ServerIcon className="h-6 w-6 mr-2 flex-shrink-0" />
                  <span>
                    <strong className="block">Backend:</strong>
                    Python with FastAPI microservices
                  </span>
                </li>
                <li className="flex items-start">
                  <CodeIcon className="h-6 w-6 mr-2 flex-shrink-0" />
                  <span>
                    <strong className="block">NLP/Dialogue:</strong>
                    Rasa or Dialogflow for multilingual intent recognition
                  </span>
                </li>
                <li className="flex items-start">
                  <DatabaseIcon className="h-6 w-6 mr-2 flex-shrink-0" />
                  <span>
                    <strong className="block">Databases:</strong>
                    PostgreSQL, Redis, Elasticsearch/Vector DB
                  </span>
                </li>
                <li className="flex items-start">
                  <MessageSquareTextIcon className="h-6 w-6 mr-2 flex-shrink-0" />
                  <span>
                    <strong className="block">Messaging:</strong>
                    WhatsApp Business API via aggregators, SMS Gateway
                  </span>
                </li>
                <li className="flex items-start">
                  <ShieldIcon className="h-6 w-6 mr-2 flex-shrink-0" />
                  <span>
                    <strong className="block">Security:</strong>
                    HTTPS, encryption at rest, role-based access
                  </span>
                </li>
              </ul>
            </div>
            <div className="col-span-2 p-8">
              <h3 className="text-xl font-bold mb-6">System Architecture</h3>
              <div className="bg-gray-100 p-6 rounded-lg mb-6">
                <div className="flex flex-wrap justify-center gap-4 mb-8">
                  <div className="bg-white p-4 rounded shadow-md text-center w-40">
                    <p className="font-medium">WhatsApp Users</p>
                  </div>
                  <div className="bg-white p-4 rounded shadow-md text-center w-40">
                    <p className="font-medium">SMS Users</p>
                  </div>
                </div>
                <div className="flex justify-center mb-8">
                  <div className="bg-blue-600 p-4 rounded shadow-md text-center text-white w-64">
                    <p className="font-medium">Message Gateway</p>
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                  <div className="bg-green-600 p-4 rounded shadow-md text-center text-white">
                    <p className="font-medium">Language Detection</p>
                  </div>
                  <div className="bg-green-600 p-4 rounded shadow-md text-center text-white">
                    <p className="font-medium">Intent Classification</p>
                  </div>
                  <div className="bg-green-600 p-4 rounded shadow-md text-center text-white">
                    <p className="font-medium">Entity Extraction</p>
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                  <div className="bg-indigo-600 p-4 rounded shadow-md text-center text-white">
                    <p className="font-medium">Knowledge Base</p>
                  </div>
                  <div className="bg-indigo-600 p-4 rounded shadow-md text-center text-white">
                    <p className="font-medium">Gov. Database API</p>
                  </div>
                </div>
                <div className="flex justify-center">
                  <div className="bg-blue-600 p-4 rounded shadow-md text-center text-white w-64">
                    <p className="font-medium">Response Generation</p>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-lg mb-2">Deployment</h4>
                  <p className="text-gray-600 mb-4">
                    Docker/Kubernetes on cloud infrastructure (AWS/Azure/GCP)
                    for scalability and high availability.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-2">
                    Monitoring & Analytics
                  </h4>
                  <p className="text-gray-600 mb-4">
                    Prometheus and Grafana for real-time monitoring, with Sentry
                    for error tracking and alerting.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
}