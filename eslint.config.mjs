import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";
import js from "@eslint/js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  js.configs.recommended,
  ...compat.extends("next/core-web-vitals"),
  {
    // Your custom rules configuration
    rules: {
      // Disable specific rules causing errors
      "react/no-unescaped-entities": "off",
      "@typescript-eslint/no-unused-vars": "warn",
      
      // You can add more rule customizations here
      // For example:
      "no-console": "warn",
      "react/prop-types": "off" // If you're using TypeScript
    }
  },
  {
    files: ["**/*.ts", "**/*.tsx"],
    languageOptions: {
      parserOptions: {
        project: "./tsconfig.json"
      }
    }
  }
];

export default eslintConfig;