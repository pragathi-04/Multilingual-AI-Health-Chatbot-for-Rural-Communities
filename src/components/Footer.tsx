import React from 'react';
import { MessageSquareTextIcon, GithubIcon, TwitterIcon, LinkedinIcon } from 'lucide-react';
export function Footer() {
  return <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center mb-4">
              <MessageSquareTextIcon className="h-8 w-8 text-blue-400" />
              <span className="ml-2 text-xl font-bold">HealthChat AI</span>
            </div>
            <p className="text-gray-400 mb-4">
              A multilingual AI chatbot accessible via WhatsApp and SMS that
              educates rural and semi-urban communities on preventive
              healthcare.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white">
                <GithubIcon className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <TwitterIcon className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <LinkedinIcon className="h-6 w-6" />
              </a>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#features" className="text-gray-400 hover:text-white">
                  Features
                </a>
              </li>
              <li>
                <a href="#demo" className="text-gray-400 hover:text-white">
                  Demo
                </a>
              </li>
              <li>
                <a href="#analytics" className="text-gray-400 hover:text-white">
                  Analytics
                </a>
              </li>
              <li>
                <a href="#technical" className="text-gray-400 hover:text-white">
                  Technical
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-2 text-gray-400">
              <li>Email: info@healthchat.ai</li>
              <li>Phone: +91 123 456 7890</li>
              <li>Address: Health Innovation Hub, Bangalore, India</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400">
            © 2023 HealthChat AI. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0">
            <a href="#" className="text-gray-400 hover:text-white mr-4">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>;
}