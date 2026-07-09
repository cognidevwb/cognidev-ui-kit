import type { ReactNode } from "react";

type Props = { children: ReactNode; onClick?: () => void; variant?: "primary" | "ghost" };

export function Button({ children, onClick, variant = "primary" }: Props) {
  return (
    <button className={`ck-btn ck-btn--${variant}`} onClick={onClick}>
      {children}
    </button>
  );
}
