// Fix: Removed problematic triple-slash reference to vite/client to resolve "Cannot find type definition" error.
interface ImportMetaEnv {
  readonly VITE_APP_TITLE: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

// Augment the global NodeJS namespace to include the API_KEY in process.env.
// This is the standard way to provide types for process.env in TypeScript without redeclaring global variables.
declare global {
  namespace NodeJS {
    interface ProcessEnv {
      API_KEY: string;
      [key: string]: string | undefined;
    }
  }
}

// We rely on the NodeJS namespace augmentation for typing process.env.
// We do not declare 'var process' directly here to avoid conflicts with block-scoped 
// declarations that might exist in the project's environment types.

export {};
