import { Menu } from 'lucide-react';
import { Button } from './Button';

type Props = {
  onOpenMenu: () => void;
};

export function BottomNav({ onOpenMenu }: Props) {
  return (
    <div className="fixed left-1/2 -translate-x-1/2 bottom-6 z-30">
      <div
        className="flex items-center gap-3 bg-white rounded-full px-4 py-2"
        style={{
          boxShadow:
            '0 1px 2px 0 rgba(5,26,36,0.1), 0 4px 4px 0 rgba(5,26,36,0.05), 0 9px 6px 0 rgba(5,26,36,0.03), 0 0 0 0.5px rgba(0,0,0,0.05), inset 0 2px 8px 0 rgba(255,255,255,0.6)',
        }}
      >
        <a
          href="#top"
          className="font-serif text-2xl font-semibold leading-none px-2"
          style={{ color: '#051A24' }}
          aria-label="Métrica Marketing — Inicio"
        >
          M
        </a>

        <button
          type="button"
          onClick={onOpenMenu}
          aria-label="Abrir menú"
          className="w-10 h-10 rounded-full flex items-center justify-center hover:bg-black/5 transition-colors"
          style={{ boxShadow: '0 0 0 0.5px rgba(0,0,0,0.05)' }}
        >
          <Menu className="w-5 h-5" style={{ color: '#051A24' }} />
        </button>

        <Button variant="primary" href="#apartados" className="!py-2">
          Ver apartados
        </Button>
      </div>
    </div>
  );
}

export default BottomNav;
