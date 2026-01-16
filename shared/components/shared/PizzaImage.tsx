import { cn } from "shared/lib/utils";
import Image from "next/image";
type Props = {
  src: string;
  alt: string;
  size: 20 | 30 | 40;
  className?: string;
};

const mapSizeToDimensions = {
  20: 300,
  30: 400,
  40: 500,
};

export const PizzaImage = ({ src, alt, size, className }: Props) => {
  return (
    <div className={cn("flex items-center justify-center flex-1 relative w-full", className)}>
      <div className="relative z-10 drop-shadow-2xl">
        <Image
          src={src}
          alt={alt}
          width={mapSizeToDimensions[size]}
          height={mapSizeToDimensions[size]}
          className={cn("relative left-2 top-2 transition-all")}
        />
      </div>
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 border-dashed border-2 rounded-full border-primary/20 w-[480px] h-[480px] animate-pulse" />
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 border-dotted border-2 rounded-full border-primary/10 w-[400px] h-[400px]" />
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent rounded-full blur-3xl" />
    </div>
  );
};
