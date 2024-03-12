import { cn } from "@/lib/utils";
import { Header } from "../Header";

interface MainProps {
  children: React.ReactNode;
  className?: string;
}

const Main = ({ children, className }: MainProps) => {
  return (
    <main className={cn("min-h-svh flex flex-col", className)}>
      <Header />
      {children}
    </main>
  );
};

export default Main;
