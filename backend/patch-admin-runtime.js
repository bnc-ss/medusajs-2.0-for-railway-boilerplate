const fs = require("fs");

console.log("🔧 RUNTIME ADMIN PATCH STARTING");
console.log("Working directory:", process.cwd());

// Look for dashboard in current directory first, then in .medusa/server
const possiblePaths = [
  `${process.cwd()}/node_modules/@medusajs/dashboard/dist`,
  `${process.cwd()}/.medusa/server/node_modules/@medusajs/dashboard/dist`
];

let dashboardDistPath = null;
for (const path of possiblePaths) {
  console.log("Checking path:", path);
  if (fs.existsSync(path)) {
    dashboardDistPath = path;
    console.log("✓ Found dashboard at:", path);
    break;
  }
}

if (!dashboardDistPath) {
  console.log("❌ Dashboard dist folder not found in any location");
  process.exit(0);
}

const APP_MJS_PATH = `${dashboardDistPath}/app.mjs`;
console.log("APP_MJS_PATH:", APP_MJS_PATH);
console.log("APP_MJS exists:", fs.existsSync(APP_MJS_PATH));

// List files in dashboard dist
const distFiles = fs.readdirSync(dashboardDistPath);
console.log("Files in dashboard dist:", distFiles.slice(0, 10)); // Show first 10 files

const readFileAsLines = (filePath) => {
  let fileContent = fs.readFileSync(filePath, "utf8");
  return fileContent.split("\n");
};

const writeFile = (lines, filePath) => {
  fs.writeFileSync(filePath, lines.join("\n"), "utf8");
  console.log(`✓ Updated ${filePath} successfully.`);
};

const findChunkFileByContainingText = (text) => {
  try {
    const files = fs.readdirSync(dashboardDistPath);
    const targetFiles = files.filter(
      (file) => file.startsWith("chunk-") && file.endsWith(".mjs")
    );

    for (const fileName of targetFiles) {
      const filePath = `${dashboardDistPath}/${fileName}`;
      const content = fs.readFileSync(filePath, "utf8");

      if (content.includes(text)) {
        console.log(`✓ Found '${text}' in file: ${filePath}`);
        return filePath;
      }
    }
  } catch (error) {
    console.error("Error searching chunk files:", error);
  }
  return null;
};

try {
  // 1) Welcome to Medusa -> Welcome to BoxNCase Partners (search ALL files)
  console.log("🔍 Looking for 'Welcome to Medusa' text in ALL files...");
  const allFiles = fs.readdirSync(dashboardDistPath);
  const jsFiles = allFiles.filter(file => file.endsWith('.mjs') || file.endsWith('.js'));
  
  let foundWelcomeFiles = [];
  
  jsFiles.forEach(fileName => {
    const filePath = `${dashboardDistPath}/${fileName}`;
    try {
      const content = fs.readFileSync(filePath, "utf8");
      if (content.includes("Welcome to Medusa")) {
        console.log(`✓ Found 'Welcome to Medusa' in: ${fileName}`);
        foundWelcomeFiles.push(filePath);
        
        // Replace the text
        const updatedContent = content.replace(/Welcome to Medusa/g, "Welcome to BoxNCase Partners");
        fs.writeFileSync(filePath, updatedContent, "utf8");
        console.log(`✓ Updated 'Welcome to Medusa' in: ${fileName}`);
      }
    } catch (error) {
      console.log(`⚠️ Could not process ${fileName}:`, error.message);
    }
  });
  
  console.log(`📊 Searched ${jsFiles.length} JavaScript files, found Welcome text in ${foundWelcomeFiles.length} files`);
  
  if (foundWelcomeFiles.length === 0) {
    console.log("❌ No files found containing 'Welcome to Medusa' - checking CSS files too...");
    
    // Also check CSS files
    const cssFiles = allFiles.filter(file => file.endsWith('.css'));
    cssFiles.forEach(fileName => {
      const filePath = `${dashboardDistPath}/${fileName}`;
      try {
        const content = fs.readFileSync(filePath, "utf8");
        if (content.includes("Welcome to Medusa")) {
          console.log(`✓ Found 'Welcome to Medusa' in CSS: ${fileName}`);
          const updatedContent = content.replace(/Welcome to Medusa/g, "Welcome to BoxNCase Partners");
          fs.writeFileSync(filePath, updatedContent, "utf8");
          console.log(`✓ Updated 'Welcome to Medusa' in CSS: ${fileName}`);
        }
      } catch (error) {
        console.log(`⚠️ Could not process CSS ${fileName}:`, error.message);
      }
    });
  }

  // 2) Hide documentation and changelog links from menu (search ALL files)
  console.log("🔍 Looking for documentation/changelog menu items in ALL files...");
  
  let foundMenuFiles = [];
  
  jsFiles.forEach(fileName => {
    const filePath = `${dashboardDistPath}/${fileName}`;
    try {
      let content = fs.readFileSync(filePath, "utf8");
      let originalContent = content;
      let modified = false;
      
      // Remove various documentation/changelog patterns
      if (content.includes("Documentation") || content.includes("Changelog") || 
          content.includes("docs.medusajs.com") || content.includes("github.com/medusajs/medusa/releases")) {
        
        console.log(`✓ Found documentation/changelog content in: ${fileName}`);
        foundMenuFiles.push(fileName);
        
        // Replace common patterns
        content = content.replace(/Documentation/g, "");
        content = content.replace(/Changelog/g, "");
        content = content.replace(/docs\.medusajs\.com[^"']*/g, "");
        content = content.replace(/github\.com\/medusajs\/medusa\/releases[^"']*/g, "");
        content = content.replace(/app\.menus\.user\.documentation/g, "");
        content = content.replace(/app\.menus\.user\.changelog/g, "");
        
        if (content !== originalContent) {
          fs.writeFileSync(filePath, content, "utf8");
          console.log(`✓ Updated documentation/changelog in: ${fileName}`);
          modified = true;
        }
      }
    } catch (error) {
      console.log(`⚠️ Could not process ${fileName} for menu removal:`, error.message);
    }
  });
  
  console.log(`📊 Found documentation/changelog references in ${foundMenuFiles.length} files`);
  
  // Also specifically handle app.mjs with line-based approach
  if (fs.existsSync(APP_MJS_PATH)) {
    console.log("🔍 Also applying line-based removal to app.mjs...");
    let lines = readFileAsLines(APP_MJS_PATH);
    let modified = false;
    
    lines.forEach((line, index) => {
      if (line.includes("app.menus.user.documentation")) {
        console.log("✓ Found documentation menu item in app.mjs, removing...");
        for (let i = Math.max(0, index - 3); i <= Math.min(lines.length - 1, index + 1); i++) {
          lines[i] = "";
        }
        modified = true;
      }

      if (line.includes("app.menus.user.changelog")) {
        console.log("✓ Found changelog menu item in app.mjs, removing...");
        for (let i = Math.max(0, index - 2); i <= Math.min(lines.length - 1, index + 1); i++) {
          lines[i] = "";
        }
        modified = true;
      }
    });
    
    if (modified) {
      writeFile(lines, APP_MJS_PATH);
    }
  }

  console.log("✅ RUNTIME ADMIN PATCH COMPLETED");

} catch (error) {
  console.error("❌ Runtime admin patch failed:", error.message);
  process.exit(0); // Don't fail the startup
}