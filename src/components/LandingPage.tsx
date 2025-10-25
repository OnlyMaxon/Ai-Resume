import React from 'react';
import { Sparkles, FileText, Zap, Download, CheckCircle, Star } from 'lucide-react';

interface LandingPageProps {
  onGetStarted: () => void;
}

const LandingPage: React.FC<LandingPageProps> = ({ onGetStarted }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Navigation */}
      <nav className="px-6 py-4 bg-white/80 backdrop-blur-sm border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <Sparkles className="w-8 h-8 text-blue-600" />
            <span className="text-2xl font-display font-bold gradient-text">AI Resume Builder</span>
          </div>
          <button
            onClick={onGetStarted}
            className="px-6 py-2.5 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-semibold hover:shadow-glow transition-all duration-300 transform hover:scale-105"
          >
            Get Started Free
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="px-6 py-20 max-w-7xl mx-auto">
        <div className="text-center space-y-6 mb-16">
          <h1 className="text-5xl md:text-7xl font-display font-bold leading-tight">
            Create Your Perfect Resume
            <br />
            <span className="gradient-text">with AI-Powered Tools</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Build a professional, ATS-friendly resume in minutes with our intuitive builder.
            Stand out from the crowd with stunning designs inspired by industry leaders.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <button
              onClick={onGetStarted}
              className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-semibold text-lg hover:shadow-glow transition-all duration-300 transform hover:scale-105 flex items-center gap-2"
            >
              <Sparkles className="w-5 h-5" />
              Start Building Now
            </button>
            <button className="px-8 py-4 bg-white text-gray-700 rounded-xl font-semibold text-lg border-2 border-gray-300 hover:border-blue-600 transition-all duration-300 transform hover:scale-105">
              View Examples
            </button>
          </div>
          <div className="flex items-center justify-center gap-6 pt-4 text-sm text-gray-600">
            <div className="flex items-center gap-1">
              <CheckCircle className="w-4 h-4 text-green-500" />
              <span>No credit card required</span>
            </div>
            <div className="flex items-center gap-1">
              <CheckCircle className="w-4 h-4 text-green-500" />
              <span>Free templates</span>
            </div>
            <div className="flex items-center gap-1">
              <CheckCircle className="w-4 h-4 text-green-500" />
              <span>Export as PDF</span>
            </div>
          </div>
        </div>

        {/* Preview Cards */}
        <div className="relative max-w-5xl mx-auto">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 blur-3xl opacity-20 rounded-full"></div>
          <div className="relative grid md:grid-cols-3 gap-6 mt-12">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="bg-white rounded-xl shadow-xl p-8 space-y-3 transform hover:scale-105 transition-all duration-300"
              >
                <div className="w-full h-40 bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg flex items-center justify-center">
                  <FileText className="w-16 h-16 text-gray-400" />
                </div>
                <div className="space-y-2">
                  <div className="h-4 bg-gray-200 rounded w-3/4"></div>
                  <div className="h-3 bg-gray-100 rounded w-full"></div>
                  <div className="h-3 bg-gray-100 rounded w-5/6"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="px-6 py-20 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
              Everything You Need to <span className="gradient-text">Stand Out</span>
            </h2>
            <p className="text-xl text-gray-600">
              Professional tools trusted by thousands of job seekers
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 rounded-2xl bg-gradient-to-br from-blue-50 to-blue-100 hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              <div className="w-14 h-14 bg-blue-600 rounded-xl flex items-center justify-center mb-4">
                <Sparkles className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-3">AI-Powered Suggestions</h3>
              <p className="text-gray-600">
                Get intelligent content suggestions that help you describe your experience effectively.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-gradient-to-br from-purple-50 to-purple-100 hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              <div className="w-14 h-14 bg-purple-600 rounded-xl flex items-center justify-center mb-4">
                <Zap className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-3">Real-Time Preview</h3>
              <p className="text-gray-600">
                See your resume update instantly as you type. What you see is what you get.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-gradient-to-br from-green-50 to-green-100 hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              <div className="w-14 h-14 bg-green-600 rounded-xl flex items-center justify-center mb-4">
                <Download className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-3">Export to PDF</h3>
              <p className="text-gray-600">
                Download your professional resume as a high-quality PDF ready to send to employers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="px-6 py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-5xl font-bold mb-2">10K+</div>
              <div className="text-blue-100">Resumes Created</div>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">4.9</div>
              <div className="text-blue-100 flex items-center justify-center gap-1">
                <Star className="w-5 h-5 fill-current" />
                User Rating
              </div>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">95%</div>
              <div className="text-blue-100">Success Rate</div>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">24/7</div>
              <div className="text-blue-100">Available</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-6 py-20 bg-white">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h2 className="text-4xl md:text-5xl font-display font-bold">
            Ready to Land Your <span className="gradient-text">Dream Job?</span>
          </h2>
          <p className="text-xl text-gray-600">
            Join thousands of successful job seekers who built their perfect resume with us.
          </p>
          <button
            onClick={onGetStarted}
            className="px-12 py-5 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-semibold text-xl hover:shadow-glow transition-all duration-300 transform hover:scale-105 inline-flex items-center gap-3"
          >
            <Sparkles className="w-6 h-6" />
            Create Your Resume Now
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-6 py-8 bg-gray-900 text-gray-400 text-center">
        <p>© 2024 AI Resume Builder. Built with ❤️ for job seekers worldwide.</p>
      </footer>
    </div>
  );
};

export default LandingPage;
