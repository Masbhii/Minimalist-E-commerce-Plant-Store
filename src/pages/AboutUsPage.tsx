import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '../components/Button';
import { LeafIcon, HeartIcon, TruckIcon, UsersIcon } from 'lucide-react';
export const AboutUsPage: React.FC = () => {
  return <motion.div initial={{
    opacity: 0
  }} animate={{
    opacity: 1
  }} exit={{
    opacity: 0
  }} className="w-full bg-white">
      {/* Hero Section */}
      <section className="relative h-[60vh] bg-cover bg-center flex items-center">
        <motion.div initial={{
        y: 20,
        opacity: 0
      }} animate={{
        y: 0,
        opacity: 1
      }} transition={{
        delay: 0.2
      }} className="absolute inset-0 bg-black bg-opacity-50" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h1 className="text-4xl md:text-5xl font-serif mb-4">Our Story</h1>
          <p className="text-xl max-w-2xl mx-auto">
            Bringing nature's beauty into your everyday life since 2020
          </p>
        </div>
      </section>
      {/* Mission Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div initial={{
            x: -50,
            opacity: 0
          }} whileInView={{
            x: 0,
            opacity: 1
          }} viewport={{
            once: true
          }} transition={{
            duration: 0.5
          }}>
              <h2 className="text-3xl font-serif text-gray-900 mb-6">
                Our Mission
              </h2>
              <p className="text-gray-600 mb-4">
                At Bloom & Grow, we believe that everyone deserves to experience
                the joy and benefits of living with plants. Our mission is to
                make plant parenthood accessible, enjoyable, and rewarding for
                everyone.
              </p>
              <p className="text-gray-600 mb-6">
                We carefully curate our collection of plants and flowers,
                ensuring that each one meets our high standards for health and
                beauty. Our team of experts is passionate about helping you find
                the perfect plants for your space and providing the knowledge
                you need to help them thrive.
              </p>
            </motion.div>
            <motion.div initial={{
            x: 50,
            opacity: 0
          }} whileInView={{
            x: 0,
            opacity: 1
          }} viewport={{
            once: true
          }} transition={{
            duration: 0.5
          }} className="rounded-lg overflow-hidden">
              <img src="https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80" alt="Our mission" className="w-full h-[400px] object-cover" />
            </motion.div>
          </div>
        </div>
      </section>
      {/* Values Section */}
      <section className="py-16 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-serif text-center text-gray-900 mb-12">
            Our Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[{
            icon: <LeafIcon className="h-8 w-8 text-green-700" />,
            title: 'Sustainability',
            description: "We're committed to environmental responsibility in everything we do."
          }, {
            icon: <HeartIcon className="h-8 w-8 text-green-700" />,
            title: 'Quality',
            description: 'Every plant and flower is carefully selected and cared for.'
          }, {
            icon: <TruckIcon className="h-8 w-8 text-green-700" />,
            title: 'Service',
            description: 'Fast, reliable shipping and exceptional customer support.'
          }, {
            icon: <UsersIcon className="h-8 w-8 text-green-700" />,
            title: 'Community',
            description: 'Building a community of plant lovers and sharing knowledge.'
          }].map((value, index) => <motion.div key={index} initial={{
            y: 50,
            opacity: 0
          }} whileInView={{
            y: 0,
            opacity: 1
          }} viewport={{
            once: true
          }} transition={{
            delay: index * 0.1
          }} className="text-center p-6">
                <div className="flex justify-center mb-4">{value.icon}</div>
                <h3 className="text-xl font-medium text-gray-900 mb-2">
                  {value.title}
                </h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>)}
          </div>
        </div>
      </section>
      {/* Team Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-serif text-center text-gray-900 mb-12">
            Meet Our Team
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[{
            name: 'Sarah Johnson',
            role: 'Founder & CEO',
            image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80'
          }, {
            name: 'Michael Chen',
            role: 'Head of Horticulture',
            image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80'
          }, {
            name: 'Emma Rodriguez',
            role: 'Customer Experience Manager',
            image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80'
          }].map((member, index) => <motion.div key={index} initial={{
            y: 50,
            opacity: 0
          }} whileInView={{
            y: 0,
            opacity: 1
          }} viewport={{
            once: true
          }} transition={{
            delay: index * 0.1
          }} className="text-center">
                <div className="relative w-48 h-48 mx-auto mb-4 rounded-full overflow-hidden">
                  <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
                </div>
                <h3 className="text-xl font-medium text-gray-900">
                  {member.name}
                </h3>
                <p className="text-gray-600">{member.role}</p>
              </motion.div>)}
          </div>
        </div>
      </section>
      {/* Contact Section */}
      <section className="py-16 bg-green-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-serif mb-4">Get in Touch</h2>
          <p className="mb-8 max-w-2xl mx-auto">
            Have questions about our products or services? We'd love to hear
            from you!
          </p>
          <Button variant="secondary" size="large">
            Contact Us
          </Button>
        </div>
      </section>
    </motion.div>;
};