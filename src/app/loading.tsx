import React from "react";
import { Skeleton } from "@mui/material";

export default function Loading() {
  return (
    <section>
      <div>
        <Skeleton className="Loading-skeleton" />
        <Skeleton className="Loading-skeleton" />
      </div>
    </section>
  );
}
