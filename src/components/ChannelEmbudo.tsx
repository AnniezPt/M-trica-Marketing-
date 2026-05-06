import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { publicAsset } from '../lib/publicAsset';

type Props = {
  title: string;
  filename: string;
  alt: string;
};

export function ChannelEmbudo({ title, filename, alt }: Props) {
  const [open, setOpen] = useState(false);
  return (
    <div className="rounded-xl bg-[#F6F8F9]">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="w-full flex items-center justify-between gap-3 px-4 py-3 hover:bg-white/60 transition-colors rounded-xl"
        aria-expanded={open}
      >
        <span
          className="text-sm md:text-base font-medium"
          style={{ color: '#0D212C' }}
        >
          {title}
        </span>
        <ChevronDown
          className={`w-4 h-4 flex-shrink-0 transition-transform ${open ? 'rotate-180' : ''}`}
          style={{ color: '#0D212C' }}
        />
      </button>
      {open && (
        <div className="px-3 pb-3">
          <img
            src={publicAsset(filename)}
            alt={alt}
            className="w-full rounded-lg"
            style={{
              boxShadow:
                '0 0 0 0.5px rgba(0,0,0,0.06), 0 4px 16px rgba(0,0,0,0.05)',
            }}
          />
        </div>
      )}
    </div>
  );
}

export default ChannelEmbudo;
