import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';
export function AnalyticsDashboard() {
  // Sample data for the charts
  const usageData = [{
    name: 'Jan',
    queries: 1200,
    users: 800
  }, {
    name: 'Feb',
    queries: 1800,
    users: 1200
  }, {
    name: 'Mar',
    queries: 2400,
    users: 1600
  }, {
    name: 'Apr',
    queries: 3200,
    users: 2100
  }, {
    name: 'May',
    queries: 4000,
    users: 2800
  }, {
    name: 'Jun',
    queries: 4800,
    users: 3200
  }];
  const languageData = [{
    name: 'Hindi',
    value: 40
  }, {
    name: 'English',
    value: 25
  }, {
    name: 'Tamil',
    value: 15
  }, {
    name: 'Bengali',
    value: 10
  }, {
    name: 'Others',
    value: 10
  }];
  const intentsData = [{
    name: 'Vaccination',
    value: 35
  }, {
    name: 'Symptoms',
    value: 30
  }, {
    name: 'Clinics',
    value: 20
  }, {
    name: 'Outbreaks',
    value: 10
  }, {
    name: 'Other',
    value: 5
  }];
  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884d8'];
  const metrics = [{
    label: 'Total Users',
    value: '12,580',
    change: '+24%',
    color: 'text-green-600'
  }, {
    label: 'Queries Processed',
    value: '45,290',
    change: '+32%',
    color: 'text-green-600'
  }, {
    label: 'Accuracy Rate',
    value: '92%',
    change: '+5%',
    color: 'text-green-600'
  }, {
    label: 'Awareness Improvement',
    value: '+28%',
    change: '',
    color: 'text-blue-600'
  }];
  return <section id="analytics" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">
            Analytics Dashboard
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            Tracking impact and usage metrics
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          {metrics.map((metric, index) => <div key={index} className="bg-white p-6 rounded-lg shadow border border-gray-200">
              <p className="text-sm font-medium text-gray-500">
                {metric.label}
              </p>
              <p className="mt-2 flex items-baseline">
                <span className="text-3xl font-semibold text-gray-900">
                  {metric.value}
                </span>
                {metric.change && <span className={`ml-2 text-sm font-medium ${metric.color}`}>
                    {metric.change}
                  </span>}
              </p>
            </div>)}
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-10">
          <div className="bg-white p-6 rounded-lg shadow border border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              Monthly Usage Trends
            </h3>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={usageData} margin={{
                top: 20,
                right: 30,
                left: 20,
                bottom: 5
              }}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="queries" name="Queries" fill="#3b82f6" />
                  <Bar dataKey="users" name="Active Users" fill="#10b981" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Language Distribution
              </h3>
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie data={languageData} cx="50%" cy="50%" labelLine={false} outerRadius={80} fill="#8884d8" dataKey="value" label={({
                    name,
                    percent
                  }) => `${name} ${(percent * 100).toFixed(0)}%`}>
                      {languageData.map((entry, index) => <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />)}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Query Categories
              </h3>
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie data={intentsData} cx="50%" cy="50%" labelLine={false} outerRadius={80} fill="#8884d8" dataKey="value" label={({
                    name,
                    percent
                  }) => `${name} ${(percent * 100).toFixed(0)}%`}>
                      {intentsData.map((entry, index) => <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />)}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
          <h3 className="text-lg font-semibold text-blue-900 mb-2">
            Impact Highlights
          </h3>
          <ul className="list-disc pl-5 space-y-2 text-blue-800">
            <li>
              Vaccination compliance increased by 32% in target communities
            </li>
            <li>Early disease reporting improved by 28% in the last quarter</li>
            <li>
              Healthcare facility visits optimized, reducing wait times by 45%
            </li>
            <li>
              Health awareness surveys show 24% improvement in knowledge scores
            </li>
          </ul>
        </div>
      </div>
    </section>;
}