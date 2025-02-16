"use client";

import { Placeholder } from "@/components/placeholder";

export default function Error({ error }) {
  return <Placeholder label={error.message ?? "Something went wrong!"} />;
}
