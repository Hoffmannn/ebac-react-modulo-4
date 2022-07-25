import React from "react";

export default function CurrentTime() {
  const now = new Date();
  return (
    <span>
      {now.getHours()}:{String(now.getMinutes()).padStart(2, "0")}:
      {now.getSeconds().toLocaleString("en-US", {
        minimumIntegerDigits: 2,
        useGrouping: false,
      })}{" "}
      {now.getDate()}/{String(now.getMonth() + 1).padStart(2, "0")}/
      {now.getFullYear()}
    </span>
  );
}
