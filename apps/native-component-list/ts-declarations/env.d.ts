declare global {
  namespace NodeJS {
    type ProcessEnv = {
      // Paired with `.env` to test custom environment variable types
      EXPO_PUBLIC_TEST: string;
    };
  }
}

export {};
