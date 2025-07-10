import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Users, Target, Zap } from 'lucide-react';

const About = () => {
  return (
    <div className="min-h-screen p-6">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <Link
            to="/"
            className="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors duration-200 mb-6"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Home
          </Link>
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mb-6">
              <Users className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-4xl font-bold text-gray-800 mb-4">About Game Hub</h1>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto"></div>
          </div>

          <div className="prose prose-lg max-w-none">
            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              Welcome to Game Hub, your ultimate destination for interactive and engaging games! 
              We are passionate about creating unique gaming experiences that challenge your mind 
              and provide endless entertainment. Our platform features carefully crafted games 
              that combine strategy, logic, and fun in innovative ways.
            </p>

            <div className="grid md:grid-cols-3 gap-8 my-12">
              <div className="text-center p-6 bg-gradient-to-b from-blue-50 to-blue-100 rounded-xl">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">Our Mission</h3>
                <p className="text-gray-600">
                  To create innovative games that entertain, challenge, and inspire players of all ages.
                </p>
              </div>

              <div className="text-center p-6 bg-gradient-to-b from-purple-50 to-purple-100 rounded-xl">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">Innovation</h3>
                <p className="text-gray-600">
                  We push the boundaries of traditional gaming with unique mechanics and fresh concepts.
                </p>
              </div>

              <div className="text-center p-6 bg-gradient-to-b from-green-50 to-green-100 rounded-xl">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">Community</h3>
                <p className="text-gray-600">
                  Building a vibrant community of gamers who share our passion for quality entertainment.
                </p>
              </div>
            </div>

            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              Our flagship game, Head & Tail, represents our commitment to creating games that are 
              both simple to understand and complex in their strategic depth. The game features 
              a unique column-based system where players' choices create dynamic patterns and 
              visual arrangements.
            </p>

            <p className="text-gray-600 text-lg leading-relaxed">
              We believe that great games should be accessible to everyone, which is why we focus 
              on clean, intuitive interfaces and engaging gameplay mechanics. Whether you're a 
              casual player looking for a quick challenge or a strategic thinker seeking depth, 
              our games offer something special for everyone.
            </p>
          </div>

          <div className="mt-12 text-center">
            <Link
              to="/head-tail"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-full hover:from-blue-600 hover:to-purple-700 transition-all duration-200 transform hover:scale-105 shadow-lg"
            >
              Try Head & Tail Game
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;