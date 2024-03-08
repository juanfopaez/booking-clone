import { cn } from "@/lib/utils";

interface MainProps {
  children: React.ReactNode;
  className?: string;
}

const Main = ({ children, className }: MainProps) => {
  return <main className={cn("bg-[#013B94]", className)}>{children}</main>;
};

export default Main;
