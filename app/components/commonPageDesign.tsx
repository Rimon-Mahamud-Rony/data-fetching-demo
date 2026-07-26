import { ReactNode } from "react";

type CommonPageDesignProps = {
  children: ReactNode;
};  

export default function CommonPageDesign({ children }: { children: ReactNode }) { 
  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-gradient-to-br from-cyan-500 via-black to-sky-500 px-6">
      {children}
    </main>
  );
}
