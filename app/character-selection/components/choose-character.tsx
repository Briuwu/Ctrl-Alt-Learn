"use client";
import { useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { handleCreateProfile } from "@/actions/create-profile";

export const ChooseCharacter = () => {
  const [selectedCharacter, setSelectedCharacter] = useState<number>();

  const handleChooseCharacter = () => {
    if (!selectedCharacter) return;
    handleCreateProfile(selectedCharacter);
  };
  return (
    <div className="flex flex-col gap-20">
      <div className="grid md:grid-cols-2 md:gap-10 gap-5">
        <button
          onClick={() => setSelectedCharacter(1)}
          className={cn(
            "border border-black p-5 grid place-content-center hover:bg-gray-200",
            selectedCharacter === 1 && "bg-gray-200"
          )}
        >
          <Image
            src={"/characters/male_beginner.png"}
            alt="Male Beginner Character"
            width={180}
            height={304}
            className="object-contain"
          />
        </button>
        <button
          onClick={() => setSelectedCharacter(2)}
          className={cn(
            "border border-black p-5 grid place-content-center hover:bg-gray-200",
            selectedCharacter === 2 && "bg-gray-200"
          )}
        >
          <Image
            src={"/characters/female_beginner.png"}
            alt="Female Beginner Character"
            width={154}
            height={287}
            className="object-contain"
          />
        </button>
      </div>
      {selectedCharacter && (
        <AlertDialog>
          <AlertDialogTrigger asChild>
            <Button className="drop-shadow-small text-black font-bold bg-light-green">
              Choose This Character
            </Button>
          </AlertDialogTrigger>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>
                Are you absolutely sure you want this character?
              </AlertDialogTitle>
              <AlertDialogDescription>
                This action cannot be undone. This will permanently be your
                character.
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel className="bg-red-500 text-white">
                Cancel
              </AlertDialogCancel>
              <AlertDialogAction onClick={() => handleChooseCharacter()}>
                Continue
              </AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      )}
    </div>
  );
};
