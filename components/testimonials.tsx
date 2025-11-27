'use client'

import { Card } from '@/components/ui/card'
import { Star } from 'lucide-react'

const testimonials = [
  {
    name: 'Raj K.',
    role: 'IT Professional → Salesforce Admin',
    text: 'I switched from IT support to Salesforce admin in 3 months. The hands-on projects and live mentorship made all the difference. Now earning 40% more.',
    rating: 5,
  },
  {
    name: 'Priya S.',
    role: 'Career Changer → Salesforce Developer',
    text: 'Zero Salesforce experience before Cloud101. After 12 weeks of intensive training and real projects, I landed a dev role at a Fortune 500. Highly recommend.',
    rating: 5,
  },
  {
    name: 'Amit P.',
    role: 'Finance Analyst → Salesforce Admin',
    text: 'The batch format kept me accountable. Peers pushed me. Instructors explained complex concepts clearly. Job board led me to my current role.',
    rating: 5,
  },
  {
    name: 'Neha M.',
    role: 'Business Analyst → Salesforce Developer',
    text: 'Code reviews were invaluable. I built a real project that\'s now in my portfolio. Employers ask about it in every interview.',
    rating: 5,
  },
  {
    name: 'Vikram T.',
    role: 'Entrepreneur → Full-Stack Developer',
    text: 'Learned both Admin and Developer skills in 18 weeks. Now I can architect end-to-end Salesforce solutions for my clients. ROI is incredible.',
    rating: 5,
  },
  {
    name: 'Sarah L.',
    role: 'Remote Worker → Salesforce Professional',
    text: 'Flexible schedule was perfect for my timezone. Live sessions + recorded access meant I never fell behind. Career change complete in 3 months.',
    rating: 5,
  },
]

export function Testimonials() {
  return (
    <section className="py-20 px-4 bg-background">
      <div className="max-w-6xl mx-auto space-y-12">
        <div className="text-center space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold">Trusted by 500+ Professionals</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Real stories from people who transformed their careers with Cloud101 Academy.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, idx) => (
            <Card key={idx} className="p-6 space-y-4">
              <div className="flex gap-1">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                ))}
              </div>

              <p className="text-foreground text-pretty">{testimonial.text}</p>

              <div className="pt-2 border-t border-border">
                <div className="font-semibold text-sm">{testimonial.name}</div>
                <div className="text-xs text-muted-foreground">{testimonial.role}</div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
