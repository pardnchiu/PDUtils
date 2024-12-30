# pdf2image

![tag](https://img.shields.io/badge/tag-JavaScript%20Library-bb4444) 
![size](https://img.shields.io/github/size/pardnchiu/pdf2image/dist%2Fpdf2image.js)<br>
[![npm](https://img.shields.io/npm/v/@pardnchiu/pdf2image)](https://www.npmjs.com/package/@pardnchiu/pdf2image)
[![download](https://img.shields.io/npm/dm/@pardnchiu/pdf2image)](https://www.npmjs.com/package/@pardnchiu/pdf2image)
[![jsdeliver](https://img.shields.io/jsdelivr/npm/hm/@pardnchiu/pdf2image)](https://www.jsdelivr.com/package/npm/@pardnchiu/pdf2image)<br>
[![](https://img.shields.io/badge/查閱-中文版本-ffffff)](https://github.com/pardnchiu/pdf2image/blob/main/README.zh.md)

## Features

### PDF to Images
- Seamlessly integrates with [pdf.js](https://github.com/mozilla/pdf.js) to efficiently parse PDFs and convert them into images.
- Supports multiple image formats: `jpg`, `png`, `webp` for versatile usage.

### Compressed Downloads
- Leverages [jszip.js](https://github.com/Stuk/jszip) to bundle generated images into a ZIP file for one-click download.
- Automatically names files and ZIP archives for better organization of multipage content.

### High Efficiency and Stability
- Designed with asynchronous processing to ensure a smooth user experience.
- Comprehensive error handling with detailed error messages for easier debugging.

## Installation

### Install via npm
```bash
npm i @pardnchiu/pdf2image
```

### Include via CDN

#### UMD Version
```html
<script src="https://cdn.jsdelivr.net/npm/@pardnchiu/pdf2image@[VERSION]/dist/pdf2image.js"></script>
```

#### ES Module Version
```javascript
import { pdf2image } from "https://cdn.jsdelivr.net/npm/@pardnchiu/pdf2image@[VERSION]/dist/pdf2image.esm.js";
```

## How to use

### Initialize `pdf2image`
```Javascript
const converter = new pdf2image({
    filename: "image-yyyy-MM-DD_hh:mm", // Specify output filename, supports date format templates [yyyy|MM|DD|hh|mm]
    file: [file],                       // Input PDF file from file input or other sources
    scale: 1.5,                         // Scale factor, default is 1.5
    type: "png"                         // Output image format [jpg|png|webp]
});

// Convert PDF to images
converter.convert().then(images => {
    console.log("Successfully converted images:", images);
});

// Download compressed ZIP file
converter.download().then(() => {
    console.log("Images have been packed and downloaded!");
});
```

## License

This source code project is licensed under the [MIT](https://github.com/pardnchiu/pdf2image/blob/main/LICENSE) License.

## Creator

<img src="https://avatars.githubusercontent.com/u/25631760" align="left" width="96" height="96" style="margin-right: 0.5rem;">

<h4 style="padding-top: 0">邱敬幃 Pardn Chiu</h4>

<a href="mailto:dev@pardn.io" target="_blank">
    <img src="https://pardn.io/image/email.svg" width="48" height="48">
</a> <a href="https://linkedin.com/in/pardnchiu" target="_blank">
    <img src="https://pardn.io/image/linkedin.svg" width="48" height="48">
</a>

***

©️ 2024 [邱敬幃 Pardn Chiu](https://pardn.io)
