const fs = require("fs");

////////////////////////////// utils /////////////////////////////

const findFilePathByNamePattern = (filePattern, fileExtension) => {
  const dirPath = `${__dirname}/node_modules/@medusajs/dashboard/dist`;

  if (!fs.existsSync(dirPath)) {
    return null;
  }

  // Read the list of files in the directory
  const files = fs.readdirSync(dirPath);

  // Find the first file that matches the pattern
  const fileName = files.find(
    (file) => file.startsWith(filePattern) && file.endsWith(fileExtension)
  );

  if (!fileName) {
    return null;
  }

  return `${dirPath}/${fileName}`;
};

function findChunkFileByContainingText(text) {
  try {
    const dirPath = `${__dirname}/node_modules/@medusajs/dashboard/dist`;

    if (!fs.existsSync(dirPath)) {
      return null;
    }

    // Read the list of files in the directory
    const files = fs.readdirSync(dirPath);

    // Filter out files that match the pattern chunk-*.mjs
    const targetFiles = files.filter(
      (file) => file.startsWith("chunk-") && file.endsWith(".mjs")
    );

    // Loop over the matching files and check their content
    for (const fileName of targetFiles) {
      const filePath = `${dirPath}/${fileName}`;
      const content = fs.readFileSync(filePath, "utf8");

      // If the file contains the target string, return the file path
      if (content.includes(text)) {
        console.log(`Found '${text}' in file: ${filePath}`);
        return filePath;
      }
    }
  } catch (error) {
    console.error("An error occurred:", error);
  }
  return null;
}

const readFileAsLines = (filePath) => {
  // Read the file content
  let fileContent = fs.readFileSync(filePath, "utf8");

  // Split the file into lines
  const lines = fileContent.split("\n");

  return lines;
};

const removeOccurrence = (lines, value, skipFirst = true) => {
  const updatedLines = lines.reduce(
    (acc, line) => {
      if (line.includes(value)) {
        if (acc.foundFirst) {
          acc.result.push(""); // Change only after the first occurrence
        } else {
          acc.foundFirst = true; // Skip the first occurrence
          acc.result.push(line); // Keep the first occurrence as it is
        }
      } else {
        acc.result.push(line); // Keep other lines unchanged
      }
      return acc;
    },
    { result: [], foundFirst: !skipFirst }
  ).result;

  return updatedLines;
};

const writeFile = (lines, filePath) => {
  // Write the modified content back to the file
  fs.writeFileSync(filePath, lines.join("\n"), "utf8");
  console.log(`Updated ${filePath} successfully.`);
};

////////////////////////////// main logic /////////////////////////////

try {
  const APP_MJS_PATH = `${__dirname}/node_modules/@medusajs/dashboard/dist/app.mjs`;
  const VITE_CACHE_PATH = `${__dirname}/node_modules/@medusajs/admin-bundler/node_modules/.vite`;

  console.log("=== ADMIN PATCHING DEBUG ===");
  console.log("Working directory:", __dirname);
  console.log("APP_MJS_PATH:", APP_MJS_PATH);
  console.log("VITE_CACHE_PATH:", VITE_CACHE_PATH);

  // Check if dashboard dist folder exists
  const dashboardDistPath = `${__dirname}/node_modules/@medusajs/dashboard/dist`;
  console.log("Dashboard dist path:", dashboardDistPath);
  console.log("Dashboard dist exists:", fs.existsSync(dashboardDistPath));
  
  if (!fs.existsSync(dashboardDistPath)) {
    console.log("Dashboard dist folder not found, skipping admin patching.");
    process.exit(0);
  }

  // List all files in the dist directory
  const distFiles = fs.readdirSync(dashboardDistPath);
  console.log("Files in dashboard dist:", distFiles);

  console.log("Dashboard dist folder found!");

  // 1) Welcome to Medusa -> Welcome to myBoxNCase
  const CHUNK_1 = findChunkFileByContainingText("Welcome to Medusa");
  if (CHUNK_1) {
    let lines = readFileAsLines(CHUNK_1);
    for (let i = 0; i < lines.length; i++) {
      lines[i] = lines[i].replace(/Welcome to Medusa/g, "Welcome to BoxNCase Partners");
    }
    writeFile(lines, CHUNK_1);
  } else {
    console.log("Could not find chunk file containing 'Welcome to Medusa'");
  }

  // 2) hide avatar logo on login page
  try {
    const LOGIN_PATH = findFilePathByNamePattern("login-", ".mjs");
    if (LOGIN_PATH) {
      let lines = readFileAsLines(LOGIN_PATH);
      lines = removeOccurrence(lines, "AvatarBox");
      writeFile(lines, LOGIN_PATH);
    } else {
      console.log("Login file not found, skipping avatar logo removal on login page");
    }
  } catch (error) {
    console.log("Login file not found, skipping avatar logo removal on login page");
  }

  // 3) hide avatar logo on reset password page
  try {
    const RESET_PASSWORD_PATH = findFilePathByNamePattern("reset-password-", ".mjs");
    if (RESET_PASSWORD_PATH) {
      let lines = readFileAsLines(RESET_PASSWORD_PATH);
      lines = removeOccurrence(lines, "LogoBox");
      writeFile(lines, RESET_PASSWORD_PATH);
    } else {
      console.log("Reset password file not found, skipping logo removal on reset password page");
    }
  } catch (error) {
    console.log("Reset password file not found, skipping logo removal on reset password page");
  }

  // 4) hide documentation and changelog links from menu
  if (fs.existsSync(APP_MJS_PATH)) {
    let lines = readFileAsLines(APP_MJS_PATH);
    lines.forEach((line, index) => {
      if (line.includes("app.menus.user.documentation")) {
        lines[index - 3] = "";
        lines[index - 2] = "";
        lines[index - 1] = "";
        lines[index] = "";
        lines[index + 1] = "";
      }

      if (line.includes("app.menus.user.changelog")) {
        lines[index - 2] = "";
        lines[index - 1] = "";
        lines[index] = "";
        lines[index + 1] = "";
      }
    });
    writeFile(lines, APP_MJS_PATH);
  } else {
    console.log("App.mjs not found, skipping menu modifications.");
  }

  // Reset Vite cache
  if (fs.existsSync(VITE_CACHE_PATH)) {
    fs.rmSync(VITE_CACHE_PATH, { recursive: true, force: true });
    console.log("Vite cache cleared successfully.");
  } else {
    console.log("Vite cache directory not found.");
  }

  console.log("Admin patching completed successfully!");

} catch (error) {
  console.error("Error during admin patching:", error.message);
  // Don't fail the installation if patching fails
  process.exit(0);
}