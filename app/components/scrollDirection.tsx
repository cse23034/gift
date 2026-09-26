let lastScrollY = 0;
let direction: "up" | "down" = "down";

if (typeof window !== "undefined") {
  lastScrollY = window.scrollY;
  window.addEventListener(
    "scroll",
    () => {
      const currentY = window.scrollY;
      direction = currentY > lastScrollY ? "down" : "up";
      lastScrollY = currentY;
    },
    { passive: true }
  );
}

export function getScrollDirection() {
  return direction;
}