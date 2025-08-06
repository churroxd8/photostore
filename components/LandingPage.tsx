"use client";

import React, { useState, useEffect } from 'react';
import { Button, Card, CardBody, Chip, Avatar } from '@heroui/react';
import Link from 'next/link';

/* const LandingPage = () => {
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    setIsHydrated(true);
  }, []); */

const LandingPage = () => {
  const features = [
    {
      icon: "☁️",
      title: "Quick Uploads",
      description: "Drag, drop, done.",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      icon: "📁",
      title: "Smart Organization", 
      description: "Simple and easy to find",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      icon: "🔒",
      title: "Locked Down",
      description: "Your photos only for you",
      gradient: "from-green-500 to-emerald-500"
    }
  ];

  const testimonials = [
    {
      name: "Sarah Chen",
      role: "Photographer", 
      content: "PhotoStore has completely changed how I organize my work. So intuitive!",
      avatar: "SC",
      rating: 5
    },
    {
      name: "Mike Rodriguez",
      role: "Content Creator",
      content: "Finally, a secure place for all my photos. Love the drag-and-drop feature.",
      avatar: "MR", 
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50/30">
      {/* Header */}
      <header className="relative z-50 px-6 py-4 bg-white/80 backdrop-blur-md border-b border-gray-200/50">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center text-white font-bold">
              📷
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
              PhotoStore
            </span>
          </div>
          <div className="flex items-center space-x-4">
            <Link href="/sign-in">
              <Button variant="light" className="text-gray-600 hover:text-gray-900">
                Sign In
              </Button>
            </Link>
            <Link href="/sign-up">
              <Button 
                color="primary" 
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Sign Up
              </Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative px-6 py-20 overflow-hidden">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <Chip 
                variant="flat" 
                color="primary" 
                className="bg-blue-100 text-blue-700 font-medium"
              >
                ✨ Now with AI Organization
              </Chip>
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                <span className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent">
                  Store your images
                </span>
                <br />
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  with ease
                </span>
              </h1>
              <p className="text-xl text-gray-600 max-w-lg">
                Simple. Secure. Fast. The modern way to organize and protect your precious memories.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/sign-up">
                <Button 
                  size="lg"
                  color="primary"
                  className="bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold px-8 py-6 text-lg shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 w-full sm:w-auto"
                  endContent={<span>→</span>}
                >
                  Get Started Free
                </Button>
              </Link>
              <Button 
                size="lg"
                variant="bordered"
                className="border-2 border-gray-300 text-gray-700 font-semibold px-8 py-6 text-lg hover:border-gray-400 transition-colors w-full sm:w-auto"
              >
                Watch Demo
              </Button>
            </div>

            <div className="flex items-center space-x-6 text-sm text-gray-500">
              <div className="flex items-center space-x-1">
                <span className="text-green-500">✓</span>
                <span>No credit card required</span>
              </div>
              <div className="flex items-center space-x-1">
                <span className="text-green-500">✓</span>
                <span>5GB free storage</span>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-3xl blur-3xl"></div>
            <div className="relative bg-white rounded-3xl p-8 shadow-2xl border border-gray-200/50">
              <div className="grid grid-cols-3 gap-4 mb-6">
                {[1,2,3,4,5,6].map((i) => (
                  <div 
                    key={i}
                    className={`aspect-square rounded-xl bg-gradient-to-br ${
                      i % 3 === 0 ? 'from-blue-400 to-blue-600' :
                      i % 3 === 1 ? 'from-purple-400 to-purple-600' :
                      'from-pink-400 to-pink-600'
                    } flex items-center justify-center text-white text-2xl animate-pulse`}
                    style={{ animationDelay: `${i * 0.2}s` }}
                  >
                    🖼️
                  </div>
                ))}
              </div>
              <div className="flex items-center justify-between text-sm text-gray-500">
                <span>6 photos uploaded</span>
                <span className="flex items-center space-x-1">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  <span>Syncing...</span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="px-6 py-20 bg-white/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">What You Get</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Everything you need to store, organize, and access your photos securely from anywhere.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card 
                key={index}
                className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-0 shadow-lg bg-white/80 backdrop-blur-sm"
                isPressable
              >
                <CardBody className="p-8 text-center">
                  <div className={`w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-r ${feature.gradient} flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-300 text-2xl`}>
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </CardBody>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="px-6 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Loved by creators worldwide</h2>
          <div className="flex justify-center items-center space-x-1 mb-8">
            <span className="text-2xl">⭐⭐⭐⭐⭐</span>
            <span className="ml-2 text-gray-600 font-medium">4.9/5 from 2,000+ users</span>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-white shadow-lg border-0" isPressable>
                <CardBody className="p-6">
                  <div className="flex items-center space-x-1 mb-4">
                    <span className="text-yellow-400">⭐⭐⭐⭐⭐</span>
                  </div>
                  <p className="text-gray-700 mb-4 italic">"{testimonial.content}"</p>
                  <div className="flex items-center space-x-3">
                    <Avatar 
                      name={testimonial.avatar}
                      className="bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold"
                    />
                    <div>
                      <div className="font-semibold text-gray-900">{testimonial.name}</div>
                      <div className="text-sm text-gray-500">{testimonial.role}</div>
                    </div>
                  </div>
                </CardBody>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-6 py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-4xl font-bold mb-4">Are you ready?</h2>
          <p className="text-xl mb-8 text-blue-100">
            Join thousands of users who trust PhotoStore with their memories.
          </p>
          <Link href="/sign-up">
            <Button 
              size="lg"
              className="bg-white text-blue-600 font-semibold px-8 py-6 text-lg shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
              endContent={<span>→</span>}
            >
              Let's Go
            </Button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-6 py-8 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-6 h-6 bg-gradient-to-r from-blue-600 to-purple-600 rounded flex items-center justify-center text-sm">
              📷
            </div>
            <span className="font-bold">PhotoStore</span>
          </div>
          <div className="text-gray-400 text-sm">
            © 2025 PhotoStore. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
