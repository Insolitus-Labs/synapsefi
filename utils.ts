import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Combines and merges class names, ensuring Tailwind utility classes are correctly handled.
 * 
 * @param inputs - A list of class values that may include conditional expressions
 * @returns A merged class string with conflicts resolved
 */
export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs));
}

/**
 * Conditionally applies class names based on a boolean value.
 * 
 * @param condition - A boolean determining which class to apply
 * @param trueClass - Class to apply if condition is true
 * @param falseClass - Class to apply if condition is false (optional)
 * @returns The selected class string
 */
export function conditionalClass(
  condition: boolean,
  trueClass: string,
  falseClass: string = ""
): string {
  return condition ? trueClass : falseClass;
}
