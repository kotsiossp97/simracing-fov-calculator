import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function getImgUrl(name: string) {
  return new URL(`../assets/games/${name}`, import.meta.url).href;
}
