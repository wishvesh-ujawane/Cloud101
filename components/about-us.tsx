import { Button } from '@/components/ui/button'
import { Mail, Linkedin } from 'lucide-react'

export function AboutUs() {
  return (
    <section id="about" className="py-20 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        {/* Mission Statement */}
        <div className="text-center mb-16 space-y-4 max-w-2xl mx-auto">
          <p className="text-lg md:text-xl text-foreground leading-relaxed">
            Cloud101 Academy delivers practical, job-focused Salesforce training for working professionals — live classes, hands-on projects, and placement support.
          </p>
        </div>

        {/* Section Heading */}
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground">Meet the Founders</h2>
        </div>

        {/* Founder Cards */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {/* Wishvesh Card */}
          <div className="bg-white rounded-lg shadow-sm border border-border p-8 space-y-6">
            {/* Avatar */}
            <div className="flex justify-center">
              <img
                src="/wishvesh-founder-avatar-professional.jpg"
                alt="Wishvesh — Founder"
                className="w-40 h-40 rounded-full bg-secondary border-2 border-primary"
              />
            </div>

            {/* Name and Role */}
            <div className="text-center space-y-2">
              <h3 className="text-2xl font-bold text-foreground">Wishvesh</h3>
              <p className="text-lg font-medium text-primary">Founder & Salesforce Lead</p>
            </div>

            {/* Bio */}
            <p className="text-center text-muted-foreground leading-relaxed">
              Wishvesh is a Salesforce Technical Lead with 6+ years of experience working on Financial Cloud, Experience Cloud and platform development. He builds hands-on labs and real-world capstone projects to make learners job-ready.
            </p>

            {/* Key Strengths */}
            <div className="space-y-3 border-t border-border pt-6">
              <p className="text-sm font-semibold text-foreground">Key Strengths:</p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2 text-sm text-muted-foreground">
                  <span className="text-primary font-bold">•</span>
                  <span>Platform Developer 2 & Admin certified</span>
                </li>
                <li className="flex items-start gap-2 text-sm text-muted-foreground">
                  <span className="text-primary font-bold">•</span>
                  <span>Hands-on with LWC, Apex, Data Cloud</span>
                </li>
                <li className="flex items-start gap-2 text-sm text-muted-foreground">
                  <span className="text-primary font-bold">•</span>
                  <span>Interview coaching & placement support</span>
                </li>
              </ul>
            </div>

            {/* Contact Links & CTA */}
            <div className="flex gap-2 justify-center border-t border-border pt-6">
              <a href="https://linkedin.com" rel="noopener noreferrer" target="_blank" aria-label="Wishvesh LinkedIn">
                <Button variant="ghost" size="icon" className="rounded-full">
                  <Linkedin className="w-5 h-5" />
                </Button>
              </a>
              <a href="mailto:wishvesh@cloud101academy.com" aria-label="Email Wishvesh">
                <Button variant="ghost" size="icon" className="rounded-full">
                  <Mail className="w-5 h-5" />
                </Button>
              </a>
              <a href="#contact">
                <Button variant="outline" className="ml-2">
                  Contact
                </Button>
              </a>
            </div>
          </div>

          {/* Mahima Card */}
          <div className="bg-white rounded-lg shadow-sm border border-border p-8 space-y-6">
            {/* Avatar */}
            <div className="flex justify-center">
              <img
                src="/mahima-co-founder-avatar-professional.jpg"
                alt="Mahima — Co-founder"
                className="w-40 h-40 rounded-full bg-secondary border-2 border-primary"
              />
            </div>

            {/* Name and Role */}
            <div className="text-center space-y-2">
              <h3 className="text-2xl font-bold text-foreground">Mahima</h3>
              <p className="text-lg font-medium text-primary">Co-founder & Student Success Lead</p>
            </div>

            {/* Bio */}
            <p className="text-center text-muted-foreground leading-relaxed">
              Mahima oversees student success and placement preparation, coordinating mentorship, mock interviews and cohort support to ensure learners convert skills into jobs.
            </p>

            {/* Key Strengths */}
            <div className="space-y-3 border-t border-border pt-6">
              <p className="text-sm font-semibold text-foreground">Key Strengths:</p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2 text-sm text-muted-foreground">
                  <span className="text-primary font-bold">•</span>
                  <span>Learner advocacy & scheduling lead</span>
                </li>
                <li className="flex items-start gap-2 text-sm text-muted-foreground">
                  <span className="text-primary font-bold">•</span>
                  <span>Mock interview coordinator</span>
                </li>
                <li className="flex items-start gap-2 text-sm text-muted-foreground">
                  <span className="text-primary font-bold">•</span>
                  <span>Student success & community manager</span>
                </li>
              </ul>
            </div>

            {/* Contact Links & CTA */}
            <div className="flex gap-2 justify-center border-t border-border pt-6">
              <a href="https://linkedin.com" rel="noopener noreferrer" target="_blank" aria-label="Mahima LinkedIn">
                <Button variant="ghost" size="icon" className="rounded-full">
                  <Linkedin className="w-5 h-5" />
                </Button>
              </a>
              <a href="mailto:mahima@cloud101academy.com" aria-label="Email Mahima">
                <Button variant="ghost" size="icon" className="rounded-full">
                  <Mail className="w-5 h-5" />
                </Button>
              </a>
              <a href="#contact">
                <Button variant="outline" className="ml-2">
                  Contact
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
