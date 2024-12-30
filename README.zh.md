# pdf2image

![tag](https://img.shields.io/badge/tag-JavaScript%20Library-bb4444) 
![size](https://img.shields.io/github/size/pardnchiu/pdf2image/dist%2Fpdf2image.js)<br>
[![npm](https://img.shields.io/npm/v/@pardnchiu/pdf2image)](https://www.npmjs.com/package/@pardnchiu/pdf2image)
[![download](https://img.shields.io/npm/dm/@pardnchiu/pdf2image)](https://www.npmjs.com/package/@pardnchiu/pdf2image)
[![jsdeliver](https://img.shields.io/jsdelivr/npm/hm/@pardnchiu/pdf2image)](https://www.jsdelivr.com/package/npm/@pardnchiu/pdf2image)<br>
[![](https://img.shields.io/badge/read-English%20Version-ffffff)](https://github.com/pardnchiu/pdf2image/blob/main/README.en.md)

## 核心特色

### PDF 轉圖片
- 完美整合 [pdf.js](https://github.com/mozilla/pdf.js)，快速解析 PDF 並轉換為圖片。
- 支援多種圖片格式：`jpg`、`png`、`webp`，靈活應用。

### 壓縮下載
- 搭配 [jszip.js](https://github.com/Stuk/jszip)，將生成的圖片打包為 ZIP 檔案，一鍵下載。
- 自動命名檔案和壓縮包，方便管理多頁內容。

### 高效與穩定
- 異步處理設計，確保流暢的用戶體驗。
- 全面錯誤處理，提供詳細錯誤訊息，便於排查。

## 安裝方式

### 從 npm 安裝
```bash
npm i @pardnchiu/pdf2image
```

### 從 CDN 引入

#### UMD 版本
```html
<script src="https://cdn.jsdelivr.net/npm/@pardnchiu/pdf2image@[VERSION]/dist/pdf2image.js"></script>
```

#### ES Module 版本
```javascript
import { pdf2image } from "https://cdn.jsdelivr.net/npm/@pardnchiu/pdf2image@[VERSION]/dist/pdf2image.esm.js";
```

## 使用方法

### 初始化 `pdf2image`
```Javascript
const converter = new pdf2image({
    filename: "image-yyyy-MM-DD_hh:mm", // 指定輸出檔名，支持日期格式模板 [yyyy|MM|DD|hh|mm]
    file: [file],                       // 輸入 PDF 檔案，來自 file input 或其他來源
    scale: 1.5,                         // 縮放比例，預設值為 1.5
    type: "png"                         // 輸出圖片格式 [jpg|png|webp]
});

// 開始轉換 PDF 為圖片
converter.convert().then(images => {
    console.log("轉換成功的圖片：", images);
});

// 下載壓縮檔
converter.download().then(() => {
    console.log("圖片已打包並下載完成！");
});
```

## 授權條款

此源代碼項目採用 [MIT](https://github.com/pardnchiu/pdf2image/blob/main/LICENSE) 許可證授權。

## 開發者

<img src="https://avatars.githubusercontent.com/u/25631760" align="left" width="96" height="96" style="margin-right: 0.5rem;">

<h4 style="padding-top: 0">邱敬幃 Pardn Chiu</h4>

<a href="mailto:dev@pardn.io" target="_blank">
    <img src="https://pardn.io/image/email.svg" width="48" height="48">
</a> <a href="https://linkedin.com/in/pardnchiu" target="_blank">
    <img src="https://pardn.io/image/linkedin.svg" width="48" height="48">
</a>

***

©️ 2024 [邱敬幃 Pardn Chiu](https://pardn.io)
