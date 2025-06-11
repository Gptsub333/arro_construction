import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import { getPlaiceholder } from 'plaiceholder';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export async function getBlurData(src: any) {
  const { base64 } = await getPlaiceholder(src);
  return base64;
}