"use client";

import { Skeleton } from "@/components/ui/skeleton";
import { useOthers, useSelf } from "@/liveblocks.config";
import UserAvatar from "./user-avatar";
import { connectionIdToColor } from "@/lib/utils";

const MAX_SHOW_USER = 1;

const Participants = () => {
  const users = useOthers();
  const currentUser = useSelf();
  const hasMoreUsers = users.length > MAX_SHOW_USER;

  return (
    <div className="absolute top-2 right-2 bg-white rounded-md p-3 h-12 flex items-center shadow-md">
      <div className="flex gap-x-2">
        {users.slice(0, MAX_SHOW_USER).map(({ connectionId, info }) => {
          return (
            <UserAvatar
              borderColor={connectionIdToColor(connectionId)}
              src={info?.picture}
              key={connectionId}
              name={info?.name}
              fallback={info?.name?.[0] || "T"}
            />
          );
        })}

        {currentUser && (
          <UserAvatar
            borderColor={connectionIdToColor(currentUser.connectionId)}
            src={currentUser.info?.picture}
            name={`${currentUser.info?.name} (You)`}
            fallback={currentUser.info?.name?.[0]}
          />
        )}

        {hasMoreUsers && (
          <UserAvatar
            name={`${users.length - MAX_SHOW_USER} more`}
            fallback={`+${users.length - MAX_SHOW_USER}`}
          />
        )}
      </div>
    </div>
  );
};

Participants.Skeleton = function ParticipantsSkeleton() {
  return (
    <div className="absolute top-2 right-2 bg-white rounded-md p-3 h-12 flex items-center shadow-md w-[100px]">
      <Skeleton className="h-full w-full bg-muted-400" />
    </div>
  );
};

export default Participants;
