# pdf2image

![tag](https://img.shields.io/badge/tag-JavaScript%20Library-bb4444) 
![size](https://img.shields.io/github/size/pardnchiu/pdf2image/dist%2Fpdf2image.js)<br>
[![npm](https://img.shields.io/npm/v/@pardnchiu/pdf2image)](https://www.npmjs.com/package/@pardnchiu/pdf2image)
[![download](https://img.shields.io/npm/dm/@pardnchiu/pdf2image)](https://www.npmjs.com/package/@pardnchiu/pdf2image)
[![jsdeliver](https://img.shields.io/jsdelivr/npm/hm/@pardnchiu/pdf2image)](https://www.jsdelivr.com/package/npm/@pardnchiu/pdf2image)

## 核心特色

### PDF 轉換為圖片
- 完美整合 [pdf.js](https://github.com/mozilla/pdf.js)，實現快速解析與轉換 PDF 為圖片。
- 支援多種圖片格式：jpg、png、webp。

### 壓縮下載
- 結合 [jszip.js](https://github.com/Stuk/jszip)，將所有生成的圖片打包成 ZIP 檔案，一鍵下載，操作便捷。
- 自動命名檔案與壓縮檔，方便管理。

### 異步處理與錯誤處理
- 使用異步設計保證流暢的用戶體驗。
- 提供詳細的錯誤資訊，便於排查問題。

### 異步處理與錯誤處理
- 使用異步設計保證流暢的用戶體驗。
- 提供詳細的錯誤資訊，便於排查問題。

## 安裝方式

### 從 npm 安裝
```bash
npm i @pardnchiu/nanomd
```

### 從 CDN 引入

#### 引入 `pdf2image` 套件
```html
<script src="https://cdn.jsdelivr.net/npm/@pardnchiu/pdf2image@[VERSION]/dist/pdf2image.js"></script>
```

#### Module 版本
```javascript
import { pdf2image } from "https://cdn.jsdelivr.net/npm/@pardnchiu/pdf2image@[VERSION]/dist/pdf2image.esm.js";
```

## 使用方法

### 初始化 `pdf2image`
```Javascript

const converter = new pdf2image({
    // filename: "" // String
    file: [file],   // 透過 input 取得 file.result;
    scale: 1.5,     // 大小縮放，預設 1.5
    type: "png"     // 輸出類型 [jpg|png|webp]
});

// 讀取 PDF 並轉換至圖片
converter.convert().then(images => {
    // do something
});

// 下載 PDF
converter.download();
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

©️ 2024 [Pardn Chiu 邱敬幃](https://www.linkedin.com/in/pardnchiu)
