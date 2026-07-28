import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Recreate __dirname for ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const publicImagesDir = path.join(__dirname, 'public', 'images');
const srcDir = path.join(__dirname, 'src');
const backupDir = path.join(__dirname, 'unused-images-backup');

// Helper to recursively get all files in a directory
function getFiles(dirPath) {
    let results = [];
    if (!fs.existsSync(dirPath)) return results;

    const list = fs.readdirSync(dirPath);
    list.forEach((file) => {
        const filePath = path.join(dirPath, file);
        const stat = fs.statSync(filePath);
        if (stat && stat.isDirectory()) {
            results = results.concat(getFiles(filePath));
        } else {
            // Skip hidden files like .DS_Store or .gitkeep
            if (!file.startsWith('.')) results.push(filePath);
        }
    });
    return results;
}

// 1. Combine all src code into one searchable block of text
const srcFiles = getFiles(srcDir);
let combinedCode = '';
srcFiles.forEach((file) => {
    combinedCode += fs.readFileSync(file, 'utf8') + '\n';
});

// 2. Scan public/images
const imageFiles = getFiles(publicImagesDir);
const unusedImages = [];
const usedImages = [];

imageFiles.forEach((imagePath) => {
    const imageName = path.basename(imagePath);

    if (combinedCode.includes(imageName)) {
        usedImages.push(imageName);
    } else {
        unusedImages.push({
            fileName: imageName,
            currentPath: imagePath,
            relativePath: path.relative(publicImagesDir, imagePath)
        });
    }
});

// 3. Move unused images to the backup folder
if (unusedImages.length > 0) {
    if (!fs.existsSync(backupDir)) {
        fs.mkdirSync(backupDir, { recursive: true });
    }

    unusedImages.forEach((img) => {
        const destinationPath = path.join(backupDir, img.relativePath);
        const destinationDir = path.dirname(destinationPath);

        if (!fs.existsSync(destinationDir)) {
            fs.mkdirSync(destinationDir, { recursive: true });
        }

        fs.renameSync(img.currentPath, destinationPath);
    });
}

// 4. Print Summary Report
console.log('\n--- CLEANUP COMPLETE ---');
console.log(`Total Images Scanned: ${imageFiles.length}`);
console.log(`Active Images Kept:   ${usedImages.length}`);
console.log(`Unused Images Moved:  ${unusedImages.length}`);

if (unusedImages.length > 0) {
    console.log(`\n📁 Moved to: ${backupDir}`);
    unusedImages.forEach((img) => console.log(`  📦 ${img.relativePath}`));
} else {
    console.log('\n✨ No unused images found!');
}