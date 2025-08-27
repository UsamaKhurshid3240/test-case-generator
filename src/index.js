const prReader = require("./prReader");
const testGenerator = require("./testGenerator");
const fs = require("fs-extra");
const path = require("path");

async function main() {
  console.log("🔍 Reading PR changes...");

  // Simulating files read from PR
  const changedFiles = await prReader.getChangedFiles();

  console.log("📄 Changed Files:", changedFiles);

  // Generate tests for each changed file
  const testContent = changedFiles.map(file => testGenerator.generate(file)).join("\n\n");

  // Save generated tests
  const testPath = path.join(__dirname, "../tests/generated.test.js");
  await fs.outputFile(testPath, testContent);

  console.log("✅ Test cases generated in:", testPath);
}

main();
