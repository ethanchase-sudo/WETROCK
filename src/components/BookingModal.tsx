import { useState, useEffect } from 'react';
import { X, Calendar, Check, ChevronRight, ChevronLeft, Loader2 } from 'lucide-react';
import { supabase } from '@/lib/supabase';
import { rooms } from '@/lib/content';

interface BookingModalProps {
  open: boolean;
  onClose: () => void;
  initialRoomId?: string;
}

type Step = 'dates' | 'room' | 'addons' | 'details' | 'review' | 'confirm';

const addOnOptions = [
  { id: 'stargazing', label: 'Guided Stargazing', price: '$65/person' },
  { id: 'goat-walk', label: 'Goat Walk & Picnic + Stargazing', price: '$120/person' },
  { id: 'stones', label: 'The Stones — Geology Lab', price: '$45/person' },
  { id: 'breakfast', label: 'Expanded American Breakfast', price: '$15/person' },
];

export function BookingModal({ open, onClose, initialRoomId }: BookingModalProps) {
  const [step, setStep] = useState<Step>('dates');
  const [checkIn, setCheckIn] = useState('');
  const [checkOut, setCheckOut] = useState('');
  const [guests, setGuests] = useState(2);
  const [selectedRoom, setSelectedRoom] = useState<string>('');
  const [addOns, setAddOns] = useState<string[]>([]);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [notes, setNotes] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    if (open && initialRoomId) {
      setSelectedRoom(initialRoomId);
      setStep('dates');
    } else if (open) {
      setStep('dates');
    }
  }, [open, initialRoomId]);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  if (!open) return null;

  const steps: Step[] = ['dates', 'room', 'addons', 'details', 'review', 'confirm'];
  const currentIdx = steps.indexOf(step);
  const selectedRoomData = rooms.find((r) => r.id === selectedRoom);

  const next = () => {
    const idx = steps.indexOf(step);
    if (idx < steps.length - 1) setStep(steps[idx + 1]);
  };
  const prev = () => {
    const idx = steps.indexOf(step);
    if (idx > 0) setStep(steps[idx - 1]);
  };

  const toggleAddOn = (id: string) => {
    setAddOns((prev) => (prev.includes(id) ? prev.filter((a) => a !== id) : [...prev, id]));
  };

  const handleSubmit = async () => {
    setSubmitting(true);
    setError('');

    try {
      const { error: insertError } = await supabase.from('booking_requests').insert({
        check_in: checkIn,
        check_out: checkOut,
        room_id: selectedRoom,
        room_name: selectedRoomData?.name || 'Not specified',
        guests,
        guest_name: name,
        guest_email: email,
        guest_phone: phone,
        add_ons: addOns,
        notes,
        status: 'pending',
      });

      if (insertError) throw insertError;
      setStep('confirm');
    } catch (err) {
      setError('Something went wrong submitting your request. Please try again or call us at (435) 355-9001.');
    } finally {
      setSubmitting(false);
    }
  };

  const canProceed = () => {
    if (step === 'dates') return checkIn && checkOut && guests > 0;
    if (step === 'room') return !!selectedRoom;
    if (step === 'details') return name.trim() && email.trim() && phone.trim();
    return true;
  };

  const formatDate = (d: string) => {
    if (!d) return '—';
    return new Date(d).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8">
      <div className="absolute inset-0 bg-obsidian-950/90 backdrop-blur-md" onClick={onClose} />

      <div className="relative w-full max-w-3xl max-h-[90vh] bg-obsidian-900 border border-bone-300/10 flex flex-col overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between px-6 md:px-8 py-5 border-b border-bone-300/10 flex-shrink-0">
          <div>
            <p className="label-mono text-spring-400 mb-1">◊ Reservation Request</p>
            <p className="font-display text-xl text-bone-100">Book Your Stay</p>
          </div>
          <button onClick={onClose} className="text-bone-400 hover:text-bone-100 transition-colors p-2">
            <X size={20} />
          </button>
        </div>

        {/* Progress bar */}
        {step !== 'confirm' && (
          <div className="flex items-center px-6 md:px-8 py-3 border-b border-bone-300/5 flex-shrink-0">
            {steps.slice(0, 5).map((s, i) => (
              <div key={s} className="flex items-center flex-1 last:flex-none">
                <div className={`w-6 h-6 rounded-full flex items-center justify-center font-mono text-[10px] transition-colors ${
                  i <= currentIdx ? 'bg-spring-500 text-obsidian-950' : 'bg-bone-300/10 text-bone-500'
                }`}>
                  {i < currentIdx ? <Check size={12} /> : i + 1}
                </div>
                {i < 4 && <div className={`h-px flex-1 mx-2 ${i < currentIdx ? 'bg-spring-500' : 'bg-bone-300/10'}`} />}
              </div>
            ))}
          </div>
        )}

        {/* Content */}
        <div className="flex-1 overflow-y-auto px-6 md:px-8 py-6">
          {step === 'dates' && (
            <div className="space-y-6">
              <div>
                <p className="label-mono text-bone-400 mb-2">Step 01</p>
                <h2 className="display-sm text-bone-100">Select Your Dates</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="label-mono text-bone-500 block mb-2">Check-in</label>
                  <input
                    type="date"
                    value={checkIn}
                    min={new Date().toISOString().split('T')[0]}
                    onChange={(e) => setCheckIn(e.target.value)}
                    className="w-full bg-obsidian-800 border border-bone-300/10 px-4 py-3 text-bone-100 font-mono text-sm focus:border-spring-400 focus:outline-none transition-colors"
                  />
                </div>
                <div>
                  <label className="label-mono text-bone-500 block mb-2">Check-out</label>
                  <input
                    type="date"
                    value={checkOut}
                    min={checkIn || new Date().toISOString().split('T')[0]}
                    onChange={(e) => setCheckOut(e.target.value)}
                    className="w-full bg-obsidian-800 border border-bone-300/10 px-4 py-3 text-bone-100 font-mono text-sm focus:border-spring-400 focus:outline-none transition-colors"
                  />
                </div>
              </div>
              <div>
                <label className="label-mono text-bone-500 block mb-2">Guests</label>
                <div className="flex items-center gap-4">
                  <button
                    onClick={() => setGuests(Math.max(1, guests - 1))}
                    className="w-10 h-10 border border-bone-300/10 text-bone-300 hover:border-spring-400 hover:text-spring-400 transition-colors flex items-center justify-center"
                  >
                    –
                  </button>
                  <span className="font-display text-2xl text-bone-100 w-12 text-center">{guests}</span>
                  <button
                    onClick={() => setGuests(Math.min(18, guests + 1))}
                    className="w-10 h-10 border border-bone-300/10 text-bone-300 hover:border-spring-400 hover:text-spring-400 transition-colors flex items-center justify-center"
                  >
                    +
                  </button>
                  <span className="font-mono text-xs text-bone-500 uppercase tracking-widest ml-2">
                    Max 18
                  </span>
                </div>
              </div>
            </div>
          )}

          {step === 'room' && (
            <div className="space-y-6">
              <div>
                <p className="label-mono text-bone-400 mb-2">Step 02</p>
                <h2 className="display-sm text-bone-100">Choose Your Space</h2>
              </div>
              <div className="grid grid-cols-1 gap-3">
                {rooms.map((room) => (
                  <button
                    key={room.id}
                    onClick={() => setSelectedRoom(room.id)}
                    className={`flex items-stretch gap-4 text-left border transition-all duration-300 ${
                      selectedRoom === room.id
                        ? 'border-spring-400 bg-spring-950/20'
                        : 'border-bone-300/10 hover:border-bone-300/30 bg-obsidian-800'
                    }`}
                  >
                    <div className="w-24 h-24 md:w-32 md:h-24 flex-shrink-0 overflow-hidden">
                      <img src={room.image} alt={room.name} className="w-full h-full object-cover" />
                    </div>
                    <div className="flex-1 py-3 pr-4">
                      <div className="flex items-start justify-between gap-2">
                        <div>
                          <p className="font-mono text-[10px] text-spring-400 uppercase tracking-widest">{room.code}</p>
                          <p className="font-display text-base md:text-lg text-bone-100">{room.name}</p>
                        </div>
                        <p className="font-mono text-xs text-bone-400 whitespace-nowrap">
                          from ${room.rateFrom}
                        </p>
                      </div>
                      <p className="font-sans text-xs text-bone-400 mt-1 line-clamp-1">{room.concept}</p>
                      <div className="flex items-center gap-3 mt-2 font-mono text-[10px] text-bone-500 uppercase tracking-widest">
                        <span>Sleeps {room.sleeps}</span>
                        <span>·</span>
                        <span>{room.bed}</span>
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          )}

          {step === 'addons' && (
            <div className="space-y-6">
              <div>
                <p className="label-mono text-bone-400 mb-2">Step 03</p>
                <h2 className="display-sm text-bone-100">Add Experiences</h2>
                <p className="body-md text-bone-400 mt-2">Enhance your stay with guided science and astronomy experiences.</p>
              </div>
              <div className="space-y-3">
                {addOnOptions.map((opt) => (
                  <button
                    key={opt.id}
                    onClick={() => toggleAddOn(opt.id)}
                    className={`w-full flex items-center justify-between p-4 border transition-all duration-300 ${
                      addOns.includes(opt.id)
                        ? 'border-spring-400 bg-spring-950/20'
                        : 'border-bone-300/10 hover:border-bone-300/30 bg-obsidian-800'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div className={`w-5 h-5 border flex items-center justify-center transition-colors ${
                        addOns.includes(opt.id) ? 'bg-spring-500 border-spring-500' : 'border-bone-300/30'
                      }`}>
                        {addOns.includes(opt.id) && <Check size={12} className="text-obsidian-950" />}
                      </div>
                      <span className="text-bone-100 text-sm">{opt.label}</span>
                    </div>
                    <span className="font-mono text-xs text-bone-400">{opt.price}</span>
                  </button>
                ))}
              </div>
              <p className="font-mono text-xs text-bone-600 uppercase tracking-widest">
                You can skip this step and add experiences later.
              </p>
            </div>
          )}

          {step === 'details' && (
            <div className="space-y-6">
              <div>
                <p className="label-mono text-bone-400 mb-2">Step 04</p>
                <h2 className="display-sm text-bone-100">Your Details</h2>
              </div>
              <div className="space-y-4">
                <div>
                  <label className="label-mono text-bone-500 block mb-2">Full Name</label>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full bg-obsidian-800 border border-bone-300/10 px-4 py-3 text-bone-100 font-sans text-sm focus:border-spring-400 focus:outline-none transition-colors"
                    placeholder="Your name"
                  />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="label-mono text-bone-500 block mb-2">Email</label>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full bg-obsidian-800 border border-bone-300/10 px-4 py-3 text-bone-100 font-sans text-sm focus:border-spring-400 focus:outline-none transition-colors"
                      placeholder="you@email.com"
                    />
                  </div>
                  <div>
                    <label className="label-mono text-bone-500 block mb-2">Phone</label>
                    <input
                      type="tel"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full bg-obsidian-800 border border-bone-300/10 px-4 py-3 text-bone-100 font-sans text-sm focus:border-spring-400 focus:outline-none transition-colors"
                      placeholder="(000) 000-0000"
                    />
                  </div>
                </div>
                <div>
                  <label className="label-mono text-bone-500 block mb-2">Notes <span className="text-bone-600 normal-case tracking-normal">(optional)</span></label>
                  <textarea
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    rows={3}
                    className="w-full bg-obsidian-800 border border-bone-300/10 px-4 py-3 text-bone-100 font-sans text-sm focus:border-spring-400 focus:outline-none transition-colors resize-none"
                    placeholder="Tell us about your group, special requests, or what you are most curious about."
                  />
                </div>
              </div>
            </div>
          )}

          {step === 'review' && (
            <div className="space-y-6">
              <div>
                <p className="label-mono text-bone-400 mb-2">Step 05</p>
                <h2 className="display-sm text-bone-100">Review Your Request</h2>
                <p className="body-md text-bone-400 mt-2">
                  No payment is charged now. We review every request personally and confirm within 24 hours.
                </p>
              </div>
              <div className="border border-bone-300/10 bg-obsidian-800 divide-y divide-bone-300/10">
                <div className="px-5 py-4 flex items-center justify-between">
                  <span className="label-mono text-bone-500">Dates</span>
                  <span className="font-mono text-sm text-bone-100">{formatDate(checkIn)} → {formatDate(checkOut)}</span>
                </div>
                <div className="px-5 py-4 flex items-center justify-between">
                  <span className="label-mono text-bone-500">Guests</span>
                  <span className="font-mono text-sm text-bone-100">{guests}</span>
                </div>
                <div className="px-5 py-4 flex items-center justify-between">
                  <span className="label-mono text-bone-500">Room</span>
                  <span className="font-mono text-sm text-bone-100">{selectedRoomData?.name || '—'}</span>
                </div>
                <div className="px-5 py-4">
                  <span className="label-mono text-bone-500 block mb-2">Add-ons</span>
                  {addOns.length > 0 ? (
                    <div className="space-y-1">
                      {addOns.map((id) => {
                        const opt = addOnOptions.find((a) => a.id === id);
                        return (
                          <p key={id} className="font-mono text-sm text-bone-100">
                            {opt?.label || id} <span className="text-bone-500">— {opt?.price}</span>
                          </p>
                        );
                      })}
                    </div>
                  ) : (
                    <p className="font-mono text-sm text-bone-600">None</p>
                  )}
                </div>
                <div className="px-5 py-4 flex items-center justify-between">
                  <span className="label-mono text-bone-500">Guest</span>
                  <span className="font-mono text-sm text-bone-100">{name}</span>
                </div>
                <div className="px-5 py-4 flex items-center justify-between">
                  <span className="label-mono text-bone-500">Contact</span>
                  <span className="font-mono text-sm text-bone-100">{email} · {phone}</span>
                </div>
              </div>
              {selectedRoomData && (
                <div className="flex items-center justify-between p-4 border border-spring-400/30 bg-spring-950/10">
                  <span className="label-mono text-bone-400">Estimated from</span>
                  <span className="font-display text-2xl text-spring-400">${selectedRoomData.rateFrom}<span className="font-mono text-sm text-bone-500">/night</span></span>
                </div>
              )}
              {error && (
                <p className="text-rock-400 text-sm font-sans">{error}</p>
              )}
            </div>
          )}

          {step === 'confirm' && (
            <div className="flex flex-col items-center justify-center text-center py-12">
              <div className="w-16 h-16 rounded-full bg-spring-500/20 border border-spring-400 flex items-center justify-center mb-6">
                <Check size={28} className="text-spring-400" />
              </div>
              <h2 className="display-md text-bone-100 mb-4">Request Received</h2>
              <p className="body-lg text-bone-300 max-w-md mb-2">
                Thank you, {name.split(' ')[0]}. We have your request for {selectedRoomData?.name}.
              </p>
              <p className="body-md text-bone-400 max-w-md mb-8">
                We review every reservation personally and will confirm within 24 hours. Watch for an email from us at {email}.
              </p>
              <button onClick={onClose} className="btn-secondary">
                Close
              </button>
            </div>
          )}
        </div>

        {/* Footer navigation */}
        {step !== 'confirm' && (
          <div className="flex items-center justify-between px-6 md:px-8 py-5 border-t border-bone-300/10 flex-shrink-0">
            <button
              onClick={prev}
              disabled={step === 'dates'}
              className="btn-ghost disabled:opacity-30 disabled:cursor-not-allowed"
            >
              <ChevronLeft size={16} />
              Back
            </button>
            {step === 'review' ? (
              <button
                onClick={handleSubmit}
                disabled={submitting}
                className="btn-primary"
              >
                {submitting ? (
                  <>
                    <Loader2 size={16} className="animate-spin" />
                    Submitting
                  </>
                ) : (
                  <>
                    Submit Request
                    <ChevronRight size={16} />
                  </>
                )}
              </button>
            ) : (
              <button
                onClick={next}
                disabled={!canProceed()}
                className="btn-primary disabled:opacity-30 disabled:cursor-not-allowed"
              >
                Continue
                <ChevronRight size={16} />
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
