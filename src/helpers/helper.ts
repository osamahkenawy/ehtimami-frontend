// src/helpers/helper.ts
export function getNameInitials(name: string): string {
    let value = name
      .split(" ")
      .map((x) => x.charAt(0))
      .join("")
      .substr(0, 2)
      .toUpperCase();
  
    return value.charAt(0) + "." + value.charAt(1);
  }
  