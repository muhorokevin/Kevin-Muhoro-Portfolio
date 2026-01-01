// Fix: Removed failing triple-slash reference to vite/client and provided manual declarations for environment types.
interface ImportMetaEnv {
  readonly VITE_APP_TITLE: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

// Fix: Support for process.env.API_KEY which is injected via vite.config.ts define block.
declare var process: {
  env: {
    API_KEY: string;
  };
};
