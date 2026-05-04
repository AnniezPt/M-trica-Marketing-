import { FormEvent, useEffect, useMemo, useState } from 'react';
import { Calendar, Check, Clock, Mail, User, X } from 'lucide-react';
import { Button } from './Button';

type Props = {
  open: boolean;
  onClose: () => void;
};

const TIME_SLOTS = [
  '10:00',
  '11:00',
  '12:00',
  '13:00',
  '16:00',
  '17:00',
  '18:00',
  '19:00',
];

function todayISO() {
  const d = new Date();
  d.setHours(0, 0, 0, 0);
  return d.toISOString().slice(0, 10);
}

export function BookingModal({ open, onClose }: Props) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const minDate = useMemo(() => todayISO(), []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [open, onClose]);

  useEffect(() => {
    if (!open) {
      const t = setTimeout(() => {
        setName('');
        setEmail('');
        setDate('');
        setTime('');
        setSubmitted(false);
      }, 300);
      return () => clearTimeout(t);
    }
  }, [open]);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!name || !email || !date || !time) return;
    setSubmitted(true);
  };

  const valid = name.length > 1 && /\S+@\S+\.\S+/.test(email) && date && time;

  return (
    <>
      <div
        aria-hidden="true"
        onClick={onClose}
        className={`fixed inset-0 z-40 bg-black/40 backdrop-blur-sm transition-opacity duration-300 ${
          open ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      />

      <div
        role="dialog"
        aria-modal="true"
        aria-label="Reserva una sesión"
        className={`fixed inset-x-0 bottom-0 md:inset-0 md:flex md:items-center md:justify-center z-50 transition-all duration-300 ${
          open
            ? 'translate-y-0 opacity-100 pointer-events-auto'
            : 'translate-y-8 opacity-0 pointer-events-none'
        }`}
      >
        <div
          className="bg-white w-full md:w-[min(94vw,560px)] md:max-h-[88vh] max-h-[92vh] flex flex-col rounded-t-[32px] md:rounded-[40px] overflow-hidden"
          style={{
            boxShadow:
              '0 0 0 0.5px rgba(0,0,0,0.06), 0 30px 80px rgba(0,0,0,0.18)',
          }}
        >
          <header className="flex items-start justify-between gap-4 px-6 md:px-8 pt-6 md:pt-7 pb-4">
            <div>
              <p
                className="font-mono text-xs mb-1"
                style={{ color: '#273C46' }}
              >
                Reserva
              </p>
              <h2
                className="font-serif font-semibold text-2xl md:text-3xl tracking-tight"
                style={{ color: '#051A24' }}
              >
                Empieza con nosotros
              </h2>
            </div>
            <button
              type="button"
              onClick={onClose}
              aria-label="Cerrar"
              className="w-10 h-10 rounded-full flex items-center justify-center hover:bg-black/5 transition-colors flex-shrink-0"
            >
              <X className="w-5 h-5" style={{ color: '#0D212C' }} />
            </button>
          </header>

          <div className="flex-1 overflow-y-auto px-6 md:px-8 pb-8">
            {!submitted ? (
              <>
                <p
                  className="text-sm md:text-base mb-6"
                  style={{ color: 'rgba(5,26,36,0.7)' }}
                >
                  Regístrate y elige día y hora para una primera sesión.
                  Confirmaremos por email en menos de 24 horas.
                </p>

                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                  <Field
                    icon={<User className="w-4 h-4" />}
                    label="Nombre"
                  >
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Tu nombre"
                      className="w-full bg-transparent outline-none text-sm md:text-base"
                      style={{ color: '#0D212C' }}
                    />
                  </Field>

                  <Field
                    icon={<Mail className="w-4 h-4" />}
                    label="Email"
                  >
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="tu@email.com"
                      className="w-full bg-transparent outline-none text-sm md:text-base"
                      style={{ color: '#0D212C' }}
                    />
                  </Field>

                  <Field
                    icon={<Calendar className="w-4 h-4" />}
                    label="Día"
                  >
                    <input
                      type="date"
                      required
                      min={minDate}
                      value={date}
                      onChange={(e) => setDate(e.target.value)}
                      className="w-full bg-transparent outline-none text-sm md:text-base"
                      style={{ color: '#0D212C' }}
                    />
                  </Field>

                  <div>
                    <p
                      className="font-mono text-[11px] uppercase tracking-wider mb-2 flex items-center gap-2"
                      style={{ color: '#273C46' }}
                    >
                      <Clock className="w-3.5 h-3.5" /> Hora
                    </p>
                    <div className="grid grid-cols-4 gap-2">
                      {TIME_SLOTS.map((slot) => {
                        const active = time === slot;
                        return (
                          <button
                            key={slot}
                            type="button"
                            onClick={() => setTime(slot)}
                            className="rounded-full text-sm py-2 transition-colors"
                            style={{
                              backgroundColor: active ? '#0D212C' : '#F6F8F9',
                              color: active ? '#F6FCFF' : '#0D212C',
                              boxShadow: active
                                ? '0 4px 12px rgba(13,33,44,0.2)'
                                : 'none',
                            }}
                          >
                            {slot}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  <div className="mt-2 flex justify-end">
                    <Button
                      variant="primary"
                      type="submit"
                      disabled={!valid}
                      className={!valid ? 'opacity-50 cursor-not-allowed' : ''}
                    >
                      Confirmar reserva
                    </Button>
                  </div>
                </form>
              </>
            ) : (
              <div className="flex flex-col items-center text-center py-6">
                <div
                  className="w-14 h-14 rounded-full flex items-center justify-center mb-5"
                  style={{
                    backgroundColor: '#0D212C',
                    color: '#F6FCFF',
                  }}
                >
                  <Check className="w-7 h-7" />
                </div>
                <h3
                  className="font-serif text-2xl md:text-3xl font-semibold mb-2"
                  style={{ color: '#051A24' }}
                >
                  ¡Reserva recibida!
                </h3>
                <p
                  className="text-sm md:text-base max-w-sm"
                  style={{ color: 'rgba(5,26,36,0.7)' }}
                >
                  Hemos registrado tu solicitud para el{' '}
                  <strong>{date}</strong> a las <strong>{time}</strong>. Te
                  enviaremos un email a <strong>{email}</strong> con la
                  confirmación.
                </p>
                <button
                  type="button"
                  onClick={onClose}
                  className="mt-6 text-sm hover:opacity-70 transition-opacity"
                  style={{ color: '#273C46' }}
                >
                  Cerrar
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

function Field({
  icon,
  label,
  children,
}: {
  icon: React.ReactNode;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <span
        className="font-mono text-[11px] uppercase tracking-wider mb-2 flex items-center gap-2"
        style={{ color: '#273C46' }}
      >
        {icon} {label}
      </span>
      <div
        className="rounded-xl px-4 py-3 flex items-center bg-[#F6F8F9]"
        style={{ boxShadow: 'inset 0 0 0 1px rgba(0,0,0,0.04)' }}
      >
        {children}
      </div>
    </label>
  );
}

export default BookingModal;
