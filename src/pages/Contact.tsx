import { useState } from 'react';
import { Phone, MapPin, Mail, Loader2, Check, ArrowRight } from 'lucide-react';
import { PageHeader } from '@/components/PageHeader';
import { supabase } from '@/lib/supabase';

interface ContactProps {
  onNavigate: (path: string) => void;
}

export function Contact({ onNavigate }: ContactProps) {
  const [inquiryType, setInquiryType] = useState('Stay');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const inquiryTypes = ['Stay', 'Group / Event', 'Press', 'The Experiment / Community'];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setError('');

    try {
      const { error: insertError } = await supabase.from('booking_requests').insert({
        check_in: '1970-01-01',
        check_out: '1970-01-01',
        room_id: 'contact',
        room_name: `Contact: ${inquiryType}`,
        guests: 0,
        guest_name: name,
        guest_email: email,
        guest_phone: phone,
        add_ons: [],
        notes: message,
        status: 'pending',
      });

      if (insertError) throw insertError;
      setSubmitted(true);
    } catch {
      setError('Something went wrong. Please try again or call us at (435) 355-9001.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div>
      <PageHeader
        code="CONTACT"
        label="Plan / Contact"
        title="Reach the people behind the experiment"
        subtitle="Stay inquiries, group and event bookings, press, or the community. We read every message and reply personally."
        image="https://images.pexels.com/photos/5841816/pexels-photo-5841816.jpeg?auto=compress&cs=tinysrgb&h=1080&w=1920"
      />

      <section className="bg-obsidian-950 py-20 md:py-32">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact info */}
            <div>
              <p className="label-mono text-spring-400 mb-4">◊ Direct Contact</p>
              <h2 className="display-md text-bone-100 mb-8">Reach us</h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <MapPin size={20} className="text-spring-400 mt-1 flex-shrink-0" strokeWidth={1.5} />
                  <div>
                    <p className="font-mono text-xs text-bone-500 uppercase tracking-widest mb-1">Address</p>
                    <p className="text-bone-200">1275 Boulder Ave<br />Moab, UT 84532</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Phone size={20} className="text-spring-400 mt-1 flex-shrink-0" strokeWidth={1.5} />
                  <div>
                    <p className="font-mono text-xs text-bone-500 uppercase tracking-widest mb-1">Phone</p>
                    <p className="text-bone-200">(435) 355-9001</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Mail size={20} className="text-spring-400 mt-1 flex-shrink-0" strokeWidth={1.5} />
                  <div>
                    <p className="font-mono text-xs text-bone-500 uppercase tracking-widest mb-1">Email</p>
                    <p className="text-bone-200">stay@wetrock.moab</p>
                  </div>
                </div>
              </div>

              <div className="mt-12 p-6 border border-bone-300/10 bg-obsidian-900">
                <p className="font-mono text-xs text-bone-500 uppercase tracking-widest mb-2">◊ Response time</p>
                <p className="text-bone-300 text-sm font-light">We reply to all inquiries within 24 hours. For urgent matters, call us directly.</p>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-2">
              {submitted ? (
                <div className="flex flex-col items-center justify-center text-center py-20 border border-bone-300/10 bg-obsidian-900">
                  <div className="w-16 h-16 rounded-full bg-spring-500/20 border border-spring-400 flex items-center justify-center mb-6">
                    <Check size={28} className="text-spring-400" />
                  </div>
                  <h2 className="display-md text-bone-100 mb-4">Message Sent</h2>
                  <p className="body-md text-bone-400 max-w-md mb-8">
                    Thank you, {name.split(' ')[0]}. We have your message and will reply within 24 hours.
                  </p>
                  <button onClick={() => onNavigate('/')} className="btn-secondary">
                    Back to Home
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="label-mono text-bone-500 block mb-3">Inquiry type</label>
                    <div className="flex flex-wrap gap-2">
                      {inquiryTypes.map((type) => (
                        <button
                          key={type}
                          type="button"
                          onClick={() => setInquiryType(type)}
                          className={`font-mono text-xs uppercase tracking-widest px-4 py-2 border transition-colors ${
                            inquiryType === type
                              ? 'border-spring-400 text-spring-400 bg-spring-950/20'
                              : 'border-bone-300/10 text-bone-400 hover:border-bone-300/30'
                          }`}
                        >
                          {type}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="label-mono text-bone-500 block mb-2">Name</label>
                      <input
                        type="text"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full bg-obsidian-900 border border-bone-300/10 px-4 py-3 text-bone-100 font-sans text-sm focus:border-spring-400 focus:outline-none transition-colors"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label className="label-mono text-bone-500 block mb-2">Phone</label>
                      <input
                        type="tel"
                        required
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className="w-full bg-obsidian-900 border border-bone-300/10 px-4 py-3 text-bone-100 font-sans text-sm focus:border-spring-400 focus:outline-none transition-colors"
                        placeholder="(000) 000-0000"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="label-mono text-bone-500 block mb-2">Email</label>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full bg-obsidian-900 border border-bone-300/10 px-4 py-3 text-bone-100 font-sans text-sm focus:border-spring-400 focus:outline-none transition-colors"
                      placeholder="you@email.com"
                    />
                  </div>

                  <div>
                    <label className="label-mono text-bone-500 block mb-2">Message</label>
                    <textarea
                      required
                      rows={6}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      className="w-full bg-obsidian-900 border border-bone-300/10 px-4 py-3 text-bone-100 font-sans text-sm focus:border-spring-400 focus:outline-none transition-colors resize-none"
                      placeholder="Tell us about your stay, your group, your event, or what you are curious about."
                    />
                  </div>

                  {error && (
                    <p className="text-rock-400 text-sm">{error}</p>
                  )}

                  <button
                    type="submit"
                    disabled={submitting}
                    className="btn-primary disabled:opacity-50"
                  >
                    {submitting ? (
                      <>
                        <Loader2 size={16} className="animate-spin" />
                        Sending
                      </>
                    ) : (
                      <>
                        Send Message
                        <ArrowRight size={16} />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
