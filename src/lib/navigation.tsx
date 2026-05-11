import { createContext, ReactNode, useContext } from 'react';

export type NavigateFn = (
  sectionId: string,
  groupId?: string,
  leafId?: string,
) => void;

const NavigationContext = createContext<NavigateFn | null>(null);

export function NavigationProvider({
  value,
  children,
}: {
  value: NavigateFn;
  children: ReactNode;
}) {
  return (
    <NavigationContext.Provider value={value}>
      {children}
    </NavigationContext.Provider>
  );
}

export function useNavigateSection(): NavigateFn {
  const fn = useContext(NavigationContext);
  if (!fn) {
    return () => {
      /* no-op fallback when outside provider */
    };
  }
  return fn;
}
