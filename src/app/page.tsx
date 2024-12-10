"use client";
import { useTheme } from "next-themes";
import { MagicCard } from "@/components/ui/magic-card";
import { cn } from "@/lib/utils";
import { AnimatedList } from "@/components/ui/animated-list";

interface Item {
  name: string;
  description: string;
  picture: string;
  color: string;
}

let notifications = [
  {
    name: "Butterfly Cake",
    description: "Made for: ",
    picture: "/cakeabove.jpg",
    color: "#00C9A7",
  },
  {
    name: "Cake-sicle",
    description: "Made for: ",
    picture: "cakeabove.jpg",
    color: "#FFB800",
  },
  {
    name: "Vanilla Cake",
    description: "Made for: ",
    picture: "cakeabove.jpg",
    color: "#FFB800",
  },
  
];

notifications = Array.from({ length: 10 }, () => notifications).flat();

const Notification = ({ name, description, picture, color}: Item) => {
  return (
    <figure
      className={cn(
        "relative mx-auto min-h-fit w-full max-w-[400px] cursor-pointer overflow-hidden rounded-2xl p-4",
        // animation styles
        "transition-all duration-200 ease-in-out hover:scale-[103%]",
        // light styles
        "bg-white [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)]",
        // dark styles
        "transform-gpu dark:bg-transparent dark:backdrop-blur-md dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]",
      )}
    >
      <div className="flex flex-row items-center gap-3">
        {/* Picture Container */}
        <div
          className="flex items-center justify-center rounded-2xl overflow-hidden"
          style={{
            width: "250px", // Adjusted width for larger image
            height: "250px", // Adjusted height for larger image
            backgroundColor: color, // Keep a colored background for consistency
          }}
        >
          <img
            src={picture} // The picture URL
            alt={name} // Accessible alt text
            className="w-full h-full object-cover" // Fills the container proportionally
          />
        </div>
        {/* Text Content */}
        <div className="flex flex-col overflow-hidden">
          {/* Title and Time */}
          <figcaption className="flex flex-row items-center whitespace-pre text-lg font-medium dark:text-white">
            <span className="text-sm sm:text-lg">{name}</span>
            <span className="mx-1">·</span>
          </figcaption>
          {/* Description */}
          <p className="text-sm font-normal dark:text-white/60">
            {description}
          </p>
        </div>
      </div>
    </figure>
  );
};

export default function Home({
  className,
}: {
  className?: string;
}) {
  return (
    <div className="flex w-full h-screen space-x-4">
      

      <div
        className="w-2/4 h-full bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/cakeabove.jpg')", // Path to your image
        }}
      >


      </div>


      <div
        className={cn(
          "w-1/4 bg-gray-300 h-full overflow-hidden rounded-lg border bg-background md:shadow-xl",
          className
        )}
      >
        <AnimatedList>
          {notifications.map((item, idx) => (
            <Notification {...item} key={idx} />
          ))}
        </AnimatedList>
      </div>

      <div
        className={cn(
          "w-1/4 bg-gray-300 h-full overflow-hidden rounded-lg border bg-background md:shadow-xl",
          className
        )}
      >
          <MagicCardDemo />
      </div>
      
    </div>
  );
}

export function MagicCardDemo() {
  const { theme } = useTheme();
  return (
    <div
      className={
        "flex h-[500px] w-full flex-col gap-4 lg:h-[250px] lg:flex-row"
      }
    >
      <MagicCard
        className="cursor-pointer flex-col items-center justify-center shadow-2xl whitespace-nowrap text-4xl"
        gradientColor={theme === "dark" ? "#262626" : "#D9D9D955"}
      >
        Magic
      </MagicCard>
      <MagicCard
        className="cursor-pointer flex-col items-center justify-center shadow-2xl whitespace-nowrap text-4xl"
        gradientColor={theme === "dark" ? "#262626" : "#D9D9D955"}
      >
        Card
      </MagicCard>
    </div>
  );
}