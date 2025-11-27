'use client'

import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Check } from 'lucide-react'

const courses = [
  {
    title: 'Salesforce Administrator',
    duration: '10 weeks',
    audience: 'Career changers, IT professionals',
    description: 'Master user management, org setup, and day-to-day admin tasks. Get job-ready for Admin 201 certification.',
    highlights: [
      'Core admin concepts & security model',
      'Custom objects, fields & workflows',
      'Reports, dashboards & data management',
      'Real-world admin projects',
      'Certification exam prep',
    ],
    price: '₹29,999',
  },
  {
    title: 'Salesforce Developer',
    duration: '12 weeks',
    audience: 'Software engineers, technical professionals',
    description: 'Build custom apps and automations using Apex and Lightning. Deploy production-ready code with confidence.',
    highlights: [
      'Apex, triggers & Lightning Web Components',
      'SOQL optimization & REST/SOAP APIs',
      'CI/CD pipelines & automated testing',
      'Security best practices & performance tuning',
      'Real integration projects',
    ],
    price: '₹39,999',
    featured: true,
  },
  {
    title: 'Full-Stack Professional',
    duration: '18 weeks',
    audience: 'Professionals seeking senior/architect roles',
    description: 'Admin + Developer skills in one accelerated track. Become a versatile Salesforce expert.',
    highlights: [
      'Complete Admin + Developer curriculums',
      'Dual certification pathway',
      'End-to-end solution architecture',
      'Enterprise integrations',
      'Premium placement support',
    ],
    price: '₹54,999',
  },
]

export function CourseCards() {
  return (
    <section className="py-20 px-4 bg-background">
      <div className="max-w-6xl mx-auto space-y-12">
        <div className="text-center space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold">Choose Your Path</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Three specialized tracks designed to match your career goals and experience level.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {courses.map((course, idx) => (
            <Card
              key={idx}
              className={`flex flex-col p-6 transition-all hover:shadow-lg ${
                course.featured ? 'md:ring-2 md:ring-primary md:scale-105' : ''
              }`}
            >
              {course.featured && (
                <div className="mb-4 inline-flex px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium w-fit">
                  Most Popular
                </div>
              )}

              <h3 className="text-xl font-bold mb-2">{course.title}</h3>
              <div className="text-sm text-muted-foreground mb-4 space-y-1">
                <div>{course.duration}</div>
                <div>{course.audience}</div>
              </div>

              <p className="text-foreground mb-6 text-pretty">{course.description}</p>

              <div className="space-y-3 mb-8 flex-1">
                {course.highlights.map((highlight, i) => (
                  <div key={i} className="flex gap-2 text-sm">
                    <Check className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                    <span>{highlight}</span>
                  </div>
                ))}
              </div>

              <div className="space-y-4 mt-auto">
                <div className="text-2xl font-bold text-primary">{course.price}</div>
                <Button
                  className="w-full"
                  variant={course.featured ? 'default' : 'outline'}
                >
                  Enroll Now
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
