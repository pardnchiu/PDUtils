# PDF Converter (JavaScript Library)

![](https://img.shields.io/github/v/release/pardnchiu/pdf-converter?color=red) ![](https://img.shields.io/github/size/pardnchiu/pdf-converter/js%2FPDFConverter.min.js?color=green) ![](https://img.shields.io/github/license/pardnchiu/pdf-converter?color=blue) ![](https://img.shields.io/badge/creator-Pardn%20Chiu%20邱敬幃-A374BF)

## 特點 / Feature

- 讀取 PDF 文件內容並將其轉換為圖片。<br>
    Read PDF content and convert it to images.

- 將轉換後的圖片打包成 ZIP 檔案並下載。<br>
    Package the converted images into a ZIP file and download it.
  
- 使用純 JavaScript / CSS 開發。<br>
    Built using pure JavaScript and CSS.
  
- 使用 [PDExtension-js](https://github.com/pardnchiu/PDExtension-js) 進行渲染。<br>
    Rendered using [PDExtension-js](https://github.com/pardnchiu/PDExtension-js).
  
- 使用 [PDF.js](https://github.com/mozilla/pdf.js) 讀取 PDF 內容。<br>
    Uses [PDF.js](https://github.com/mozilla/pdf.js) to read PDF content.
  
- 使用 [JSZip.js](https://github.com/Stuk/jszip) 生成壓縮檔。<br>
    Uses [JSZip.js](https://github.com/Stuk/jszip) to generate compressed files.
  
- 可在 [此處](https://pardnchiu.github.io/pdf-converter) 預覽。<br>
    Preview available [Here](https://pardnchiu.github.io/pdf-converter).

## 開發者 / Creator

<a href="https://pardn.io">
<img src=https://pardn.io/image/head-s.jpg align=left width=100 height=100>
</a>

### Pardn Chiu 邱敬幃

[![](https://pardn.io/image/mail.svg)](mailto:mail@pardn.ltd) [![](https://skillicons.dev/icons?i=linkedin)](https://linkedin.com/in/pardnchiu) 

## 授權 / License

此源代碼項目採用 [GPL-3.0](https://github.com/pardnchiu/markdown-editor/blob/main/LICENSE) 許可證授權。<br>
This source code project is licensed under the [GPL-3.0](https://github.com/pardnchiu/markdown-editor/blob/main/LICENSE) license.

## 如何使用 / How to use

- 添加依賴 `PDExtension-js`
```Html
<script src="https://cdn.jsdelivr.net/gh/pardnchiu/PDExtension-js@latest/js/PDExtension.min.js" copyright="Pardn Ltd"></script>
```

- 導入 `PDFConverter`
```Javascript
import { MDEditor, MDViewer } from "https://cdn.jsdelivr.net/gh/pardnchiu/pdf-converter@latest/js/PDFConverter.min.js";

const converter = new PDFConverter({
    file: [file],   // 透過 input 取得 file.result;
    scale: 1.5,     // 大小縮放，預設 1.5
    type: "png"     // 輸出類型 [jpg/png]
});

// 讀取 PDF 並轉換至圖片
converter.loading().then(images => {
    // do something
});

// 下載 PDF
converter.download();
```

***

*翻譯皆靠 ChatGPT*

***

©️ 2024 [Pardn Chiu 邱敬幃](https://www.linkedin.com/in/pardnchiu)
