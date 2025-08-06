"use client";

import React from 'react';
import { Card, CardBody, Button, Chip } from '@heroui/react';
import SignUpForm from "@/components/SignUpForm";
import Link from "next/link";
import Navbar from "@/components/Navbar";

export default function SignUpPage() {
  const benefits = [
    "🚀 5GB free storage",
    "🔒 Military-grade encryption",
    "📱 Access from any device",
    "⚡ Lightning-fast uploads"
  ];

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-gray-50 via-white to-blue-50/30">
      {/* Navbar */}
      <Navbar />
      
      {/* Main Content */}
      <main className="flex-1 flex items-center justify-center p-6 relative overflow-hidden">
        {/* Background decorations */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-400/10 to-purple-400/10 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-purple-400/10 to-pink-400/10 rounded-full blur-3xl"></div>
        </div>

        <div className="w-full max-w-6xl grid lg:grid-cols-2 gap-12 items-center relative z-10">
          
          {/* Left side - Benefits and messaging */}
          <div className="space-y-8 text-center lg:text-left">
            <div className="space-y-4">
              <Chip 
                variant="flat" 
                color="primary" 
                className="bg-blue-100 text-blue-700 font-medium"
              >
                ✨ Join 10,000+ users
              </Chip>
              
              <h1 className="text-4xl lg:text-5xl font-bold leading-tight">
                <span className="bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
                  Start storing your
                </span>
                <br />
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  memories today
                </span>
              </h1>
              
              <p className="text-xl text-gray-600 max-w-lg mx-auto lg:mx-0">
                Create your free account and get instant access to secure photo storage with advanced organization features.
              </p>
            </div>

            {/* Benefits list */}
            <div className="space-y-3">
              {benefits.map((benefit, index) => (
                <div 
                  key={index}
                  className="flex items-center justify-center lg:justify-start space-x-3 text-gray-700"
                >
                  <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
                  <span className="font-medium">{benefit}</span>
                </div>
              ))}
            </div>

            {/* Trust indicators */}
            <div className="flex items-center justify-center lg:justify-start space-x-8 text-sm text-gray-500">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                  <span className="text-green-600 font-bold text-xs">✓</span>
                </div>
                <span>GDPR Compliant</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                  <span className="text-blue-600 font-bold text-xs">🔒</span>
                </div>
                <span>SSL Secured</span>
              </div>
            </div>

            {/* Social proof */}
            <div className="pt-4 border-t border-gray-200">
              <p className="text-sm text-gray-500 mb-3">Trusted by creators worldwide</p>
              <div className="flex justify-center lg:justify-start items-center space-x-4">
                <div className="flex -space-x-2">
                  {[...Array(4)].map((_, i) => (
                    <div 
                      key={i}
                      className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 border-2 border-white flex items-center justify-center text-white text-xs font-bold"
                    >
                      {String.fromCharCode(65 + i)}
                    </div>
                  ))}
                </div>
                <div className="text-sm text-gray-600">
                  <span className="font-semibold">10,000+</span> happy users
                </div>
              </div>
            </div>
          </div>

          {/* Right side - Sign up form */}
          <div className="flex justify-center">
            <Card className="w-full max-w-md shadow-2xl border-0 bg-white/80 backdrop-blur-sm">
              <CardBody className="p-8">
                <div className="text-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <span className="text-white text-xl">📷</span>
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-2">Create Account</h2>
                  <p className="text-gray-600">Get started with your free PhotoStore account</p>
                </div>
                
                <SignUpForm />
                
                <div className="mt-6 text-center">
                  <p className="text-sm text-gray-600">
                    Already have an account?{' '}
                    <Link 
                      href="/sign-in" 
                      className="font-semibold text-blue-600 hover:text-blue-700 transition-colors"
                    >
                      Sign in
                    </Link>
                  </p>
                </div>

                {/* Terms */}
                <div className="mt-6 pt-6 border-t border-gray-100">
                  <p className="text-xs text-gray-500 text-center leading-relaxed">
                    By creating an account, you agree to our{' '}
                    <Link href="/terms" className="text-blue-600 hover:underline">
                      Terms of Service
                    </Link>{' '}
                    and{' '}
                    <Link href="/privacy" className="text-blue-600 hover:underline">
                      Privacy Policy
                    </Link>
                  </p>
                </div>
              </CardBody>
            </Card>
          </div>
        </div>
      </main>

      {/* Enhanced Footer */}
      <footer className="bg-gradient-to-r from-gray-900 to-gray-800 text-white py-8">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <div className="w-6 h-6 bg-gradient-to-r from-blue-600 to-purple-600 rounded flex items-center justify-center">
                <span className="text-white text-sm">📷</span>
              </div>
              <span className="font-bold">PhotoStore</span>
            </div>
            
            <div className="flex items-center space-x-6 text-sm text-gray-400">
              <Link href="/help" className="hover:text-white transition-colors">Help</Link>
              <Link href="/contact" className="hover:text-white transition-colors">Contact</Link>
              <Link href="/status" className="hover:text-white transition-colors">Status</Link>
            </div>
          </div>
          
          <div className="mt-6 pt-6 border-t border-gray-700 text-center">
            <p className="text-sm text-gray-400">
              © {new Date().getFullYear()} PhotoStore. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}