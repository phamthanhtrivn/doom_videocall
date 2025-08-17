"use client";

import { useCall, useCallStateHooks } from "@stream-io/video-react-sdk";
import React from "react";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

const EndCallButton = () => {
  const call = useCall();
  const router = useRouter();

  const { useLocalParticipant } = useCallStateHooks();
  const localParticipant = useLocalParticipant();

  const isMeetingOwner =
    localParticipant &&
    call?.state.createdBy &&
    localParticipant.userId === call.state.createdBy.id;

  if (!isMeetingOwner) return null;

  const endCallForEveryone = async () => {
    try {
      await call?.endCall();
      router.push("/");
    } catch (err) {
      console.error("Error ending call:", err);
    }
  };

  return (
    <AlertDialog>
      <AlertDialogTrigger>
        <Button className="bg-red-500 cursor-pointer hover:bg-red-600">
          End call for everyone
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent className="text-white border-dark-1 bg-dark-1">
        <AlertDialogHeader>
          <AlertDialogTitle>
            Are you sure you want to end the call for everyone?
          </AlertDialogTitle>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel className="cursor-pointer text-dark-1">
            No
          </AlertDialogCancel>
          <AlertDialogAction
            className="cursor-pointer"
            onClick={endCallForEveryone}
          >
            Yes
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default EndCallButton;
