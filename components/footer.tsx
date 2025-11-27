'use client'

import { Separator } from '@/components/ui/separator'

export function Footer() {
  return (
    <footer className="bg-foreground text-background py-16 px-4">
      <div className="max-w-6xl mx-auto space-y-8">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-3">
            <h3 className="font-bold text-lg">Cloud101 Academy</h3>
            <p className="text-sm text-background/70">
              Transforming professionals into Salesforce experts.
            </p>
          </div>

          {/* Product */}
          <div className="space-y-3">
            <h4 className="font-semibold">Courses</h4>
            <ul className="text-sm space-y-2 text-background/70">
              <li><a href="#" className="hover:text-background transition">Admin Track</a></li>
              <li><a href="#" className="hover:text-background transition">Developer Track</a></li>
              <li><a href="#" className="hover:text-background transition">Full-Stack Track</a></li>
              <li><a href="#" className="hover:text-background transition">Batch Schedules</a></li>
            </ul>
          </div>

          {/* Resources */}
          <div className="space-y-3">
            <h4 className="font-semibold">Resources</h4>
            <ul className="text-sm space-y-2 text-background/70">
              <li><a href="#" className="hover:text-background transition">Blog</a></li>
              <li><a href="#" className="hover:text-background transition">Success Stories</a></li>
              <li><a href="#" className="hover:text-background transition">Career Roadmap</a></li>
              <li><a href="#" className="hover:text-background transition">FAQ</a></li>
            </ul>
          </div>

          {/* Company */}
          <div className="space-y-3">
            <h4 className="font-semibold">Company</h4>
            <ul className="text-sm space-y-2 text-background/70">
              <li><a href="#" className="hover:text-background transition">About Us</a></li>
              <li><a href="#" className="hover:text-background transition">Contact</a></li>
              <li><a href="#" className="hover:text-background transition">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-background transition">Terms of Service</a></li>
            </ul>
          </div>
        </div>

        <Separator className="bg-background/20" />

        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-background/70">
          <p>&copy; 2025 Cloud101 Academy. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-background transition">LinkedIn</a>
            <a href="#" className="hover:text-background transition">Twitter</a>
            <a href="#" className="hover:text-background transition">Instagram</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
