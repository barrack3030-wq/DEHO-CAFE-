import React, { useState } from 'react';
import { RESTAURANT_INFO, ASSET_IMAGES } from '../data/restaurantData';
import { SectionFlourish } from './Flourish';
import { Users, Calendar, Clock, Phone, Send, CheckCircle } from 'lucide-react';

export const ReservationSection: React.FC = () => {
  const [partySize, setPartySize] = useState('2');
  const [date, setDate] = useState(() => {
    const today = new Date();
    return today.toISOString().split('T')[0];
  });
  const [time, setTime] = useState('19:00');
  const [phone, setPhone] = useState('');
  const [notes, setNotes] = useState('');
  const [agreed, setAgreed] = useState(true);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!phone) return;
    setSubmitted(true);
  };

  const handleWhatsApp = () => {
    const text = encodeURIComponent(
      `Halo Deho Cafe, saya ingin reservasi meja untuk ${partySize} orang pada tanggal ${date} jam ${time}. Nomor kontak: ${phone}. Catatan: ${notes || '-'}`
    );
    window.open(`https://wa.me/6246123024?text=${text}`, '_blank');
  };

  return (
    <section id="contact" className="relative bg-[#1c1410] text-white py-20 md:py-28 overflow-hidden">
      {/* Background Photographic Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={ASSET_IMAGES.diningAmbiance}
          alt="Deho Cafe Table Atmosphere"
          className="w-full h-full object-cover object-center opacity-30"
          referrerPolicy="no-referrer"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/85 to-black/70" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Top Flourish */}
        <SectionFlourish
          label="Dine With Us"
          textColor="text-[#b0d12a]"
          strokeColor="#b0d12a"
        />

        {/* Display Heading */}
        <h2 className="mt-3 font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-tight text-white">
          RESERVE A TABLE OR ORDER TAKEAWAY
        </h2>

        <p className="mt-3 text-stone-300 max-w-lg mx-auto text-sm sm:text-base font-medium">
          Dine-in and takeaway available daily until 11:00 PM. Book your table in advance or call for immediate orders.
        </p>

        {/* Interactive Reservation Box */}
        <div className="mt-10 bg-black/60 backdrop-blur-md border-2 border-stone-700 rounded-3xl p-6 sm:p-10 shadow-2xl">
          {submitted ? (
            <div className="py-10 text-center animate-fadeIn">
              <div className="w-16 h-16 rounded-full bg-[#b0d12a]/20 border-2 border-[#b0d12a] flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-9 h-9 text-[#b0d12a]" />
              </div>
              <h3 className="font-display text-2xl font-black uppercase text-white">
                RESERVATION INQUIRY SENT!
              </h3>
              <p className="mt-2 text-stone-300 text-sm max-w-md mx-auto">
                Thank you! We have logged your request for <strong>{partySize} guests</strong> on <strong>{date}</strong> at <strong>{time}</strong>. We will confirm shortly via phone at <strong>{phone}</strong>.
              </p>
              <div className="mt-6 flex flex-wrap justify-center gap-4">
                <a
                  href={`tel:${RESTAURANT_INFO.phoneRaw}`}
                  className="bg-[#b0d12a] text-[#1c1410] font-display text-xs font-black uppercase tracking-wider px-6 py-3 rounded-full"
                >
                  Call Now to Confirm Immediately
                </a>
                <button
                  onClick={() => setSubmitted(false)}
                  className="text-xs text-stone-400 hover:text-white underline cursor-pointer"
                >
                  Make another booking
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Form Bar Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-left">
                {/* Guests */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-stone-400 mb-2">
                    <span className="flex items-center gap-1.5">
                      <Users className="w-3.5 h-3.5 text-[#b0d12a]" />
                      Guests
                    </span>
                  </label>
                  <select
                    value={partySize}
                    onChange={(e) => setPartySize(e.target.value)}
                    className="w-full bg-stone-900 border border-stone-700 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-[#b0d12a]"
                  >
                    <option value="1">1 Person</option>
                    <option value="2">2 Persons</option>
                    <option value="3">3 Persons</option>
                    <option value="4">4 Persons</option>
                    <option value="5">5 Persons</option>
                    <option value="6">6 Persons</option>
                    <option value="8+">8+ Large Family / Group</option>
                  </select>
                </div>

                {/* Date */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-stone-400 mb-2">
                    <span className="flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5 text-[#b0d12a]" />
                      Date
                    </span>
                  </label>
                  <input
                    type="date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    className="w-full bg-stone-900 border border-stone-700 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-[#b0d12a]"
                  />
                </div>

                {/* Time */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-stone-400 mb-2">
                    <span className="flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5 text-[#b0d12a]" />
                      Time
                    </span>
                  </label>
                  <select
                    value={time}
                    onChange={(e) => setTime(e.target.value)}
                    className="w-full bg-stone-900 border border-stone-700 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-[#b0d12a]"
                  >
                    <option value="11:30">11:30 AM (Lunch)</option>
                    <option value="12:30">12:30 PM (Lunch)</option>
                    <option value="13:30">01:30 PM</option>
                    <option value="18:00">06:00 PM (Early Dinner)</option>
                    <option value="19:00">07:00 PM (Prime Dinner)</option>
                    <option value="20:00">08:00 PM</option>
                    <option value="21:00">09:00 PM (Late Night)</option>
                    <option value="22:00">10:00 PM (Last Orders)</option>
                  </select>
                </div>

                {/* Phone / Contact */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-stone-400 mb-2">
                    <span className="flex items-center gap-1.5">
                      <Phone className="w-3.5 h-3.5 text-[#b0d12a]" />
                      Your Phone Number
                    </span>
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="e.g. 0812-3456-7890"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full bg-stone-900 border border-stone-700 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-[#b0d12a] placeholder:text-stone-600"
                  />
                </div>
              </div>

              {/* Special Requests */}
              <div className="text-left">
                <label className="block text-xs font-bold uppercase tracking-wider text-stone-400 mb-1">
                  Notes (e.g. Seafood preferences, baby chair, takeaway pickup)
                </label>
                <input
                  type="text"
                  placeholder="Optional notes or preferred fish type..."
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  className="w-full bg-stone-900/80 border border-stone-700 rounded-xl px-4 py-2.5 text-white text-sm focus:outline-none focus:border-[#b0d12a] placeholder:text-stone-600"
                />
              </div>

              {/* Checkbox agreement matching Gustavo */}
              <div className="flex items-center justify-center gap-2 text-xs text-stone-400">
                <input
                  type="checkbox"
                  id="consent"
                  checked={agreed}
                  onChange={(e) => setAgreed(e.target.checked)}
                  className="rounded border-stone-700 text-[#b0d12a] focus:ring-0 cursor-pointer"
                />
                <label htmlFor="consent" className="cursor-pointer">
                  I agree that my submitted booking data will be processed for table reservation.
                </label>
              </div>

              {/* Submit CTA buttons */}
              <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
                <button
                  type="submit"
                  disabled={!agreed}
                  id="submit-reservation-btn"
                  className="bg-[#b0d12a] hover:bg-[#9ebb20] disabled:opacity-50 text-[#1c1410] font-display text-sm md:text-base font-black uppercase tracking-wider px-10 py-4 rounded-full shadow-lg transition-all cursor-pointer transform hover:-translate-y-0.5"
                >
                  FIND A TABLE
                </button>

                <button
                  type="button"
                  onClick={handleWhatsApp}
                  className="bg-[#25D366] hover:bg-[#20bd5a] text-white font-display text-sm md:text-base font-black uppercase tracking-wider px-8 py-4 rounded-full shadow-lg transition-all flex items-center gap-2 cursor-pointer transform hover:-translate-y-0.5"
                >
                  <Send className="w-4 h-4" />
                  RESERVE VIA WHATSAPP
                </button>
              </div>
            </form>
          )}

          {/* Quick Call Direct Banner */}
          <div className="mt-8 pt-6 border-t border-stone-800 flex flex-col sm:flex-row items-center justify-between text-xs text-stone-400 gap-3">
            <span>
              Prefer speaking with our team directly?
            </span>
            <a
              href={`tel:${RESTAURANT_INFO.phoneRaw}`}
              className="inline-flex items-center gap-2 font-display font-black text-sm text-[#b0d12a] hover:text-white uppercase transition-colors"
            >
              <Phone className="w-4 h-4" />
              Call Deho Cafe: {RESTAURANT_INFO.phone}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
