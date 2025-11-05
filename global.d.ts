// Dichiarazioni TypeScript per moduli non-TypeScript

// Permetti import di file CSS
declare module "*.css" {
  const content: Record<string, string>;
  export default content;
}

// Permetti import di immagini
declare module "*.png" {
  const content: string;
  export default content;
}

declare module "*.jpg" {
  const content: string;
  export default content;
}

declare module "*.jpeg" {
  const content: string;
  export default content;
}

declare module "*.gif" {
  const content: string;
  export default content;
}

declare module "*.svg" {
  const content: string;
  export default content;
}

declare module "*.webp" {
  const content: string;
  export default content;
}