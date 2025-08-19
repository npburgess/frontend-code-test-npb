/// <reference types="vite/client" />

// Declare module for raw text imports
declare module '*.md?raw' {
  const content: string;
  export default content;
}
