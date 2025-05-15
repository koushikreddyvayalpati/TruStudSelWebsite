/**
 * Image Optimization Script for TruStudSel Website
 * 
 * This script optimizes images in the public directory to improve website performance.
 * It creates responsive image versions and optimizes them for faster loading.
 * 
 * To use:
 * 1. Install dependencies: npm install sharp imagemin imagemin-mozjpeg imagemin-pngquant glob fs-extra
 * 2. Run: node scripts/optimizeImages.js
 */

const sharp = require('sharp');
const imagemin = require('imagemin');
const imageminMozjpeg = require('imagemin-mozjpeg');
const imageminPngquant = require('imagemin-pngquant');
const glob = require('glob');
const path = require('path');
const fs = require('fs-extra');

// Configure paths
const SOURCE_DIR = path.join(__dirname, '../public');
const OUTPUT_DIR = path.join(__dirname, '../public/images/optimized');
const RESPONSIVE_SIZES = [320, 640, 1024]; // Widths for responsive images

// Ensure output directory exists
fs.ensureDirSync(OUTPUT_DIR);

// Function to optimize images
async function optimizeImages() {
  try {
    // Find all images in public directory
    const imagePatterns = ['**/*.{jpg,jpeg,png,gif}', '!**/node_modules/**', '!**/optimized/**'];
    const imagePaths = glob.sync(imagePatterns, { cwd: SOURCE_DIR });
    
    console.log(`Found ${imagePaths.length} images to optimize...`);
    
    for (const imagePath of imagePaths) {
      const sourcePath = path.join(SOURCE_DIR, imagePath);
      const filename = path.basename(imagePath);
      const fileExtension = path.extname(filename).toLowerCase();
      const baseName = path.basename(filename, fileExtension);
      
      console.log(`Optimizing: ${filename}`);
      
      // Create optimized version of the original image
      await optimizeImage(sourcePath, path.join(OUTPUT_DIR, filename));
      
      // Create responsive versions
      for (const width of RESPONSIVE_SIZES) {
        const responsiveFilename = `${baseName}-${width}w${fileExtension}`;
        await createResponsiveImage(sourcePath, path.join(OUTPUT_DIR, responsiveFilename), width);
      }
      
      // Create WebP version (for modern browsers)
      await createWebPVersion(sourcePath, path.join(OUTPUT_DIR, `${baseName}.webp`));
    }
    
    console.log('Image optimization complete!');
    console.log(`Optimized images are available in: ${OUTPUT_DIR}`);
    console.log('Use these images in your components for better performance.');
  } catch (error) {
    console.error('Error optimizing images:', error);
  }
}

// Function to optimize a single image
async function optimizeImage(sourcePath, outputPath) {
  const ext = path.extname(sourcePath).toLowerCase();
  
  if (ext === '.jpg' || ext === '.jpeg') {
    await imagemin([sourcePath], {
      destination: path.dirname(outputPath),
      plugins: [imageminMozjpeg({ quality: 80 })]
    });
  } else if (ext === '.png') {
    await imagemin([sourcePath], {
      destination: path.dirname(outputPath),
      plugins: [imageminPngquant({ quality: [0.6, 0.8] })]
    });
  } else {
    // For other formats, just copy the file
    await fs.copy(sourcePath, outputPath);
  }
}

// Function to create responsive image
async function createResponsiveImage(sourcePath, outputPath, width) {
  await sharp(sourcePath)
    .resize(width)
    .toFile(outputPath);
  
  // Further optimize the resized image
  await optimizeImage(outputPath, outputPath);
}

// Function to create WebP version
async function createWebPVersion(sourcePath, outputPath) {
  await sharp(sourcePath)
    .webp({ quality: 80 })
    .toFile(outputPath);
}

// Run the optimization
optimizeImages();

// Add instructions on how to use these optimized images
console.log(`
=== USAGE INSTRUCTIONS ===

1. Replace image references in your components with optimized versions:

   // Instead of this:
   <img src="/logo.jpg" alt="Logo" />
   
   // Use this with srcSet for responsive images:
   <img 
     src="/images/optimized/logo.jpg" 
     srcSet="/images/optimized/logo-320w.jpg 320w, 
             /images/optimized/logo-640w.jpg 640w, 
             /images/optimized/logo-1024w.jpg 1024w" 
     sizes="(max-width: 320px) 280px, 
            (max-width: 640px) 600px,
            1024px"
     alt="Logo"
     loading="lazy"
   />
   
   // For modern browsers, use picture element with WebP:
   <picture>
     <source srcSet="/images/optimized/logo.webp" type="image/webp" />
     <source srcSet="/images/optimized/logo.jpg" type="image/jpeg" /> 
     <img src="/images/optimized/logo.jpg" alt="Logo" loading="lazy" />
   </picture>

2. Add these as part of your build process to automate optimization.
`); 