import { ReactNode } from 'react';
import { useNavigateSection } from '../lib/navigation';

export type LinkTarget = {
  sectionId: string;
  groupId?: string;
  leafId?: string;
};

type Props = {
  to: LinkTarget;
  children: ReactNode;
};

export function InlineLink({ to, children }: Props) {
  const navigate = useNavigateSection();
  return (
    <button
      type="button"
      onClick={() => navigate(to.sectionId, to.groupId, to.leafId)}
      className="inline font-medium underline decoration-dotted decoration-1 underline-offset-[3px] hover:decoration-solid hover:opacity-80 transition-all"
      style={{ color: '#0D212C', textDecorationColor: 'rgba(13,33,44,0.45)' }}
    >
      {children}
    </button>
  );
}

export function SeeAlso({
  links,
}: {
  links: Array<{ label: string; to: LinkTarget }>;
}) {
  return (
    <div className="mt-5 pt-3 border-t border-black/5">
      <p
        className="font-mono text-[10px] uppercase tracking-wider mb-2"
        style={{ color: '#273C46' }}
      >
        Ver también
      </p>
      <div className="flex flex-wrap gap-x-3 gap-y-1">
        {links.map((l, i) => (
          <InlineLink key={i} to={l.to}>
            → {l.label}
          </InlineLink>
        ))}
      </div>
    </div>
  );
}

export default InlineLink;
