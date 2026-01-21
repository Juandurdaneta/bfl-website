"use client";

import { motion } from "framer-motion";
import {
  GraduationCap, Target, Cog, RefreshCw, Heart,
  ArrowRight
} from "lucide-react";
import { Button } from "@/components/ui/Button";
import { SectionHeadline } from "@/components/ui/SectionHeadline";
import { StatCard } from "@/components/ui/StatCard";
import { TestimonialCard } from "@/components/ui/TestimonialCard";

// Hero Section
function AboutHero() {
  return (
    <section className="relative pt-32 pb-20 bg-hero-gradient overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.2, 0.1] }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute -top-1/4 -right-1/4 w-[600px] h-[600px] rounded-full bg-primary-green/20 blur-3xl"
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-logo font-bold text-white leading-tight mb-6">
            We&apos;re Not Here to Serve Millionaires.
            <span className="block text-primary-green mt-2">We&apos;re Here to Create Them.</span>
          </h1>
          <p className="text-xl text-white/80 mb-8 max-w-3xl mx-auto">
            Built For Life Financial Agency exists to restore the American Dream for middle-class families by teaching the wealth-building strategies Wall Street doesn&apos;t want you to know.
          </p>
          <Button href="#schedule" size="lg" pulse>
            Schedule My FREE Financial Needs Analysis
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
}

// Our Story Section
function OurStorySection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeadline
          title="Our Story"
          centered
        />

        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-6 text-lg text-warm-gray leading-relaxed text-center"
          >
            <p>
              <span className="text-dark-navy font-semibold">The financial services industry has a problem.</span>
            </p>
            <p>
              It&apos;s designed to serve people who already have money while keeping everyone else confused, dependent, and stuck.
            </p>
            <p>
              Traditional advisors only work with clients who have $500K+ in assets. Insurance agents push products that pay the highest commissions. Banks nickel-and-dime you with fees while paying 0.01% interest on your savings. And &ldquo;conventional wisdom&rdquo; keeps middle-class families locked in a system designed for Wall Street&apos;s profit, not your wealth.
            </p>
            
            <div className="bg-gradient-to-r from-primary-blue/10 to-primary-green/10 rounded-2xl p-8 my-8">
              <p className="text-2xl font-logo font-bold text-dark-navy text-center">
                We started Built For Life to change that.
              </p>
            </div>

            <p>
              We believe financial education and advanced wealth strategies shouldn&apos;t be reserved for people who already have millions. Middle-class families who work hard, play by the rules, and want to build something lasting deserve access to the same tax optimization, asset protection, and cash flow strategies the wealthy use.
            </p>
            <p className="text-dark-navy font-semibold">
              That&apos;s not just our business model. It&apos;s our mission.
            </p>
            <p>
              We&apos;re not here to manage portfolios for the already-wealthy. We&apos;re here to teach families how to keep more of what they earn, protect what they&apos;ve built, and build financial freedom for life.
            </p>
          </motion.div>

          <div className="text-center mt-12">
            <Button href="#schedule" size="lg">
              Schedule My FREE Financial Needs Analysis
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

// Mission Section
function MissionSection() {
  return (
    <section className="py-20 bg-dark-navy relative overflow-hidden">
      <div className="absolute inset-0 pattern-bg opacity-30" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-4xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-logo font-bold text-white mb-6">
            Restoring the American Dream,
            <span className="block text-primary-green">One Family at a Time</span>
          </h2>
          
          <p className="text-lg text-white/80 leading-relaxed mb-8">
            The American Dream used to be simple: work hard, provide for your family, own a home, send your kids to college, retire with dignity, and leave something behind.
          </p>
          <p className="text-lg text-white/80 leading-relaxed mb-8">
            For too many families today, that dream feels impossible. Not because they&apos;re not working hard enough, but because the system and rules have changed. And nobody is teaching regular families how to navigate the new reality.
          </p>
          <p className="text-xl text-white font-semibold mb-8">
            Our mission is to change that.
          </p>

          <motion.div
            animate={{
              boxShadow: [
                "0 0 30px rgba(76, 175, 80, 0.2)",
                "0 0 60px rgba(76, 175, 80, 0.4)",
                "0 0 30px rgba(76, 175, 80, 0.2)"
              ]
            }}
            transition={{ duration: 3, repeat: Infinity }}
            className="relative overflow-hidden rounded-2xl"
          >
            {/* Animated gradient border */}
            <div className="absolute inset-0 bg-gradient-to-r from-primary-green via-primary-blue to-primary-green bg-[length:200%_100%] animate-gradient rounded-2xl" />

            <div className="relative m-[2px] bg-dark-navy/90 backdrop-blur-sm rounded-2xl p-8">
              {/* Floating particles effect */}
              <div className="absolute inset-0 overflow-hidden rounded-2xl">
                <motion.div
                  animate={{ y: [-20, 20], x: [-10, 10] }}
                  transition={{ duration: 4, repeat: Infinity, repeatType: "reverse" }}
                  className="absolute top-4 left-8 w-2 h-2 bg-primary-green/30 rounded-full"
                />
                <motion.div
                  animate={{ y: [20, -20], x: [10, -10] }}
                  transition={{ duration: 5, repeat: Infinity, repeatType: "reverse" }}
                  className="absolute bottom-6 right-12 w-3 h-3 bg-primary-blue/30 rounded-full"
                />
                <motion.div
                  animate={{ y: [-15, 15] }}
                  transition={{ duration: 3.5, repeat: Infinity, repeatType: "reverse" }}
                  className="absolute top-1/2 right-8 w-2 h-2 bg-primary-green/20 rounded-full"
                />
              </div>

              <div className="relative">
                <p className="text-white text-lg leading-relaxed mb-6">
                  We are committed to guide you through the complex world of finance, arming you with the wisdom to shape your destiny and build your future.
                </p>
                <motion.p
                  animate={{
                    backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                  }}
                  transition={{ duration: 5, repeat: Infinity }}
                  className="text-xl md:text-2xl font-bold bg-gradient-to-r from-primary-green via-white to-primary-green bg-[length:200%_auto] bg-clip-text text-transparent"
                >
                  Together, we&apos;ll rewrite the narrative of the American Dream, restoring its promise and ensuring that prosperity is not just a dream, but a reality for all.
                </motion.p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

// Vision Section
function VisionSection() {
  return (
    <section className="py-20 bg-light-gray">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-sm font-medium text-primary-green uppercase tracking-wider">Our Vision</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-logo font-bold text-dark-navy mt-2 mb-6">
              To Be the Standard Others Compare Themselves To
            </h2>
            
            <p className="text-lg text-warm-gray leading-relaxed mb-3">
              Our vision is bold: To be the number one company in the world that everyone in financial services compares themselves to.
            </p>
            <p className="text-lg text-warm-gray leading-relaxed mb-3">
              We&apos;ve proven that education-first, mission-driven financial guidance can transform lives at scale.
            </p>
            <p className="text-lg text-warm-gray leading-relaxed">
              We envision a future where every individual, regardless of background or circumstances, can confidently navigate the financial landscape, create lasting prosperity for themselves and their families, and restore the dream of upward mobility for the middle class.
            </p>
            
            <p className="text-2xl font-logo font-bold text-primary-blue mt-8">
              We&apos;re building that future. One family at a time.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// Our Approach Section
function ApproachSection() {
  const pillars = [
    {
      icon: GraduationCap,
      number: 1,
      title: "EDUCATE",
      subtitle: "Build understanding before decisions",
      description: "We start by teaching you how money actually works. Clear, simple education about how taxes impact your wealth, the difference between products and strategies, what wealthy families do differently, and how to evaluate financial advice.",
      color: "from-blue-500 to-blue-600",
    },
    {
      icon: Target,
      number: 2,
      title: "STRATEGIZE",
      subtitle: "Design solutions aligned with long-term goals",
      description: "Once you understand the landscape, we build your custom strategy. A comprehensive financial system designed around YOUR life: your income structure, tax situation, family obligations, risk tolerance, timeline, and goals.",
      color: "from-green-500 to-green-600",
    },
    {
      icon: Cog,
      number: 3,
      title: "IMPLEMENT",
      subtitle: "Deploy with discipline and structure",
      description: "A plan is worthless if it sits in a drawer. We guide you through implementation: opening accounts, restructuring insurance, coordinating with your CPA and attorney, setting up automated systems, documenting everything.",
      color: "from-purple-500 to-purple-600",
    },
    {
      icon: RefreshCw,
      number: 4,
      title: "OPTIMIZE",
      subtitle: "Refine over time as life evolves",
      description: "Your life changes. Markets change. Tax laws change. We conduct ongoing reviews: quarterly check-ins, annual strategy sessions, continuous monitoring, and proactive adjustments. This isn't a one-time transaction—it's a long-term partnership.",
      color: "from-orange-500 to-orange-600",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeadline
          title="Our Approach"
          subtitle="Education, Strategy, Execution, Optimization"
          centered
        />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center mb-12"
        >
          <p className="text-lg text-warm-gray">
            Most financial firms follow a simple playbook: Sell you a product, collect a commission or fee, and move on to the next client. <span className="text-dark-navy font-semibold">We don&apos;t do that.</span>
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {pillars.map((pillar, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-light-gray rounded-2xl p-8 relative overflow-hidden"
            >
              <div className={`absolute top-0 left-0 w-2 h-full bg-gradient-to-b ${pillar.color}`} />
              
              <div className="flex items-start gap-4">
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${pillar.color} flex items-center justify-center flex-shrink-0`}>
                  <pillar.icon className="w-7 h-7 text-white" />
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-sm font-bold text-warm-gray">PILLAR {pillar.number}</span>
                  </div>
                  <h3 className="text-2xl font-logo font-bold text-dark-navy">{pillar.title}</h3>
                  <p className="text-primary-blue font-medium mb-3">{pillar.subtitle}</p>
                </div>
              </div>
              
              <p className="text-warm-gray leading-relaxed mt-4 ml-18">
                {pillar.description}
              </p>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button href="#schedule" size="lg">
            Schedule My FREE Financial Needs Analysis
          </Button>
        </div>
      </div>
    </section>
  );
}

// Values Section
function ValuesSection() {
  const values = [
    {
      title: "Education Over Sales",
      description: "We believe informed clients make better decisions. We'll never pressure you into something you don't understand.",
    },
    {
      title: "Integrity Over Commissions",
      description: "We recommend strategies because they serve you, not because they pay us the most.",
    },
    {
      title: "Transparency Over Jargon",
      description: "We speak plain English. We show you the numbers. No hidden fees. No fine print surprises.",
    },
    {
      title: "Partnership Over Patronization",
      description: "You're not a transaction. You're a partner. We respect your time, your questions, and your right to make informed decisions.",
    },
    {
      title: "Mission Over Profit",
      description: "We're building something bigger than a business. We're restoring the American Dream for families who've been left behind.",
    },
  ];

  return (
    <section className="py-20 bg-light-gray">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeadline
          title="What We Stand For"
          centered
        />

        <div className="flex flex-wrap justify-center gap-6 max-w-5xl mx-auto">
          {values.map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 card-hover w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)]"
            >
              <div className="w-10 h-10 rounded-full bg-primary-blue/10 flex items-center justify-center mb-4">
                <Heart className="w-5 h-5 text-primary-blue" />
              </div>
              <h3 className="text-xl font-semibold text-dark-navy mb-2">{value.title}</h3>
              <p className="text-warm-gray">{value.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Community Impact Section
function ImpactSection() {
  const impactStats = [
    { value: 2.6, prefix: "$", suffix: "M", label: "Tax Savings", decimals: 1 },
    { value: 8700, prefix: "$", suffix: "", label: "Avg First-Year Savings", decimals: 0 },
    { value: 98, prefix: "", suffix: "%", label: "Client Retention", decimals: 0 },
    { value: 450, prefix: "", suffix: "+", label: "Hours Free Education", decimals: 0 },
    { value: 127, prefix: "", suffix: "", label: "Five-Star Reviews", decimals: 0 },
  ];

  return (
    <section className="py-20 bg-dark-navy relative overflow-hidden">
      <div className="absolute inset-0 pattern-bg opacity-30" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeadline
          title="Building Wealth, Changing Lives"
          subtitle="Over 300 families in the DMV area trust us with their financial futures. Here's the impact we've made together:"
          centered
          light
        />

        <div className="grid grid-cols-2 md:grid-cols-5 gap-6 mb-12">
          {impactStats.map((stat, index) => (
            <StatCard
              key={index}
              value={stat.value}
              prefix={stat.prefix}
              suffix={stat.suffix}
              label={stat.label}
              decimals={stat.decimals}
              light
            />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center"
        >
          <p className="text-white/80 text-lg leading-relaxed mb-6">
            But the numbers don&apos;t tell the whole story.
          </p>
          <p className="text-white text-lg leading-relaxed">
            The real impact is in the families who now sleep peacefully knowing they&apos;re protected. The parents who can say &ldquo;yes&rdquo; to their kids&apos; opportunities without financial stress. The couples who stopped fighting about money and started building together. The clients who look at retirement with confidence instead of fear.
          </p>
          <p className="text-primary-green text-xl font-semibold mt-6">
            That&apos;s what drives us. That&apos;s why we do this work.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

// Testimonials Section
function TestimonialsSection() {
  const testimonials = [
    {
      quote: "It is great to work with an agency whose main priority is educating their clients and asking enough questions to specifically design a plan that fits their needs. Highly recommend this company.",
      name: "Dianne Loflin",
      title: "Verified Client",
    },
    {
      quote: "I absolutely love working with this team! They do what is right for the client! BFL is an amazing agency! They took the time to educate us about how money can work for us, and helped us set up a retirement plan. We have referred so many people to them!",
      name: "Ashley Harrison",
      title: "Verified Client",
    },
    {
      quote: "Built for Life Financial Agency is an agency with high integrity and quality agents! We have been extremely pleased with their professionalism and how they put the clients needs first!",
      name: "Nancy B.",
      title: "Verified Client",
    },
    {
      quote: "I recently had the pleasure of working with the Built For Life Agency and I must say that my experience with their financial services and life insurance offerings has been nothing short of outstanding.",
      name: "Curt Narvesen",
      title: "Verified Client",
    },
    {
      quote: "The service that you receive at BFL Agency is more like an experience. The services provided and the attention to detail given to each client is some of the best I've seen in the industry today. It's all about relationships.",
      name: "Michael Mastrangelo",
      title: "Verified Client",
    },
    {
      quote: "BFL Agency went above and beyond to educate me and help make sure all of my family needs were met. Would highly recommend!",
      name: "Jerry Harrison",
      title: "Verified Client",
    },
  ];

  return (
    <section className="py-20 bg-light-gray">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeadline
          title="Why Families Choose Built For Life"
          centered
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              quote={testimonial.quote}
              name={testimonial.name}
              title={testimonial.title}
            />
          ))}
        </div>

        <div className="text-center mt-12">
          <Button href="#schedule" size="lg">
            Schedule My FREE Financial Needs Analysis
          </Button>
        </div>
      </div>
    </section>
  );
}

// Final CTA Section
function FinalCTA() {
  return (
    <section className="py-20 bg-hero-gradient relative overflow-hidden" id="schedule">
      <div className="absolute inset-0">
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.2, 0.1] }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute top-1/4 right-1/4 w-[600px] h-[600px] rounded-full bg-primary-green/20 blur-3xl"
        />
      </div>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-logo font-bold text-white mb-6">
            Ready to Join 300+ Families Building Wealth the Right Way?
          </h2>
          
          <p className="text-lg text-white/80 mb-4">
            If you&apos;ve read this far, you already know something needs to change.
          </p>
          <p className="text-lg text-white/80 mb-8">
            You&apos;re tired of feeling stuck. Tired of conflicting advice, paying too much in taxes, and wondering if you&apos;re making the right financial decisions. You want clarity and a clear action plan. You want someone in your corner who actually cares about your success.
          </p>
          
          <p className="text-xl text-primary-green font-semibold mb-8">
            That&apos;s what we do. That&apos;s who we are.
          </p>

          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 mb-8 inline-block">
            <p className="text-white">
              Schedule your <span className="font-bold">FREE Financial Needs Analysis</span> today. We&apos;ll show you exactly where you&apos;re leaving money on the table and give you a clear roadmap to fix it.
            </p>
          </div>

          <div className="mb-4">
            <Button href="#schedule" size="lg" pulse>
              Schedule My FREE Financial Needs Analysis
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>

          <p className="text-white/60 text-sm">
            Limited to 12 new families per month. Schedule now before spots fill.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

// Main About Page
export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <OurStorySection />
      <MissionSection />
      <VisionSection />
      <ApproachSection />
      <ValuesSection />
      <ImpactSection />
      <TestimonialsSection />
      <FinalCTA />
    </>
  );
}
