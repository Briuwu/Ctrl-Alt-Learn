"use client";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

export const StagesChoices = () => {
  const pathname = usePathname();

  const paths = [
    {
      label: "Learn",
      icon: "/stages/learn-icon.png",
      href: "/stages",
      width: 40,
      height: 30,
    },
    {
      label: "Leaderboard",
      icon: "/stages/leaderboard-icon.png",
      href: "/stages/leaderboard",
      width: 40,
      height: 30,
    },
    {
      label: "Achievements",
      icon: "/stages/achievements-icon.png",
      href: "/stages/achievements",
      width: 40,
      height: 30,
    },
    {
      label: "Daily Quest",
      icon: "/stages/daily-quest-icon.png",
      href: "/stages/daily-quest",
      width: 30,
      height: 30,
    },
  ];
  return (
    <div className="border-r-2 border-black p-5 h-full hidden lg:block">
      <ul className="space-y-3 sticky top-5">
        {paths.map((path) => (
          <li
            key={path.label}
            className={cn(pathname === path.href && "bg-light-green rounded")}
          >
            <Button
              asChild
              variant={"ghost"}
              className="text-lg py-0 w-full justify-start"
            >
              <Link href={path.href} className="flex items-center gap-2">
                <Image
                  src={path.icon}
                  alt="Learn Icon"
                  width={path.width}
                  height={path.height}
                  className="object-contain w-8"
                />
                {path.label}
              </Link>
            </Button>
          </li>
        ))}
      </ul>
    </div>
  );
};
