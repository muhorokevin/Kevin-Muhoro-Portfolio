
// Fix: Use global augmentation to avoid "Cannot redeclare block-scoped variable 'process'".
// This ensures we are extending the global environment types rather than attempting to redefine a local variable.
interface ImportMetaEnv {
  readonly VITE_APP_TITLE: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

declare global {
  var process: {
    env: {
      API_KEY: string;
      [key: string]: string | undefined;
    };
  };
}

export {};
