import { spawnSync } from "node:child_process";
import { fileURLToPath } from "node:url";

// Disable build-tool telemetry for both development and production builds.
const result = spawnSync(
  process.execPath,
  [
    fileURLToPath(
      new URL("../node_modules/next/dist/bin/next", import.meta.url),
    ),
    ...process.argv.slice(2),
  ],
  {
    stdio: "inherit",
    env: { ...process.env, NEXT_TELEMETRY_DISABLED: "1" },
  },
);

if (result.error) throw result.error;
process.exit(result.status ?? 1);
