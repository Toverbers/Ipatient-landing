import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function Testimonials() {
  return (
    <section className="py-24">
      <div className="grid gap-16 md:grid-cols-2">
        {/* Left column */}
        <div>
          <h2 className="mb-6 text-4xl font-bold text-gray-900">
            What our patients say about us.
          </h2>
          <p className="mb-8 text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sodales 
            diam ac ex semper blandit. Vestibulum eget odio consectetur, pellentesque elit 
            id, maximus quam. Nullam felis
          </p>
          <button className="bg-[#0D4A42] text-white px-6 py-2 rounded-lg">
            CTA
          </button>
        </div>

        {/* Right column */}
        <div className="space-y-8">
          <blockquote className="text-2xl font-medium text-gray-900">
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            <span className="text-[#0D4A42]">
              Pellentesq elit id, maximus quam. Nullam felis turpis, tempor id quam et.
            </span>"
          </blockquote>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <img 
                src="/Avatar/avatar 1.png" 
                alt="Abayomi Olowu" 
                className="w-12 h-12 rounded-full"
              />
              <div>
                <div className="font-semibold">Abayomi Olowu</div>
                <div className="text-yellow-400">★★★★★</div>
              </div>
            </div>

            <div className="flex gap-2">
              <button className="p-2 rounded-full border border-gray-200">
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button className="p-2 rounded-full bg-[#0D4A42] text-white">
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}