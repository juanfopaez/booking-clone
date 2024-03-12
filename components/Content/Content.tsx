import { cn } from "@/lib/utils";

interface ContentProps {
  children: React.ReactNode;
  className?: string;
}

export default function Content({ children, className }: ContentProps) {
  return <section className={cn("grow ", className)}>{children}</section>;
}
