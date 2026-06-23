# Agents

## 專案概況

本專案為「日日嘎比」單頁式咖啡網站，使用 Bootstrap 5 本地端檔案製作。

## 主要檔案

- `index.html`：網站 HTML 結構與內容。
- `css/style.css`：自訂樣式、色彩、版面、卡片、頁尾與 RWD 設定。
- `css/bootstrap.min.css`：Bootstrap 5 本地端 CSS。
- `js/bootstrap.bundle.min.js`：Bootstrap 5 本地端 JavaScript，包含輪播等互動功能。
- `images/`：網站使用的本地圖片。
- `ICON/`：網站使用的本地圖示。

## 維護注意事項

- 不使用 CDN；新增 Bootstrap、圖片或圖示時，請優先放入本地資料夾後再引用。
- `css/style.css` 內引用圖片時，路徑需從 `css/` 資料夾出發，例如 `../images/example.png`。
- `index.html` 內引用圖片或圖示時，路徑從專案根目錄出發，例如 `images/example.png`、`ICON/example.svg`。
- 主視覺輪播由 Bootstrap 控制，相關 HTML 位於 `#home` 區塊。
- 色彩主題集中在 `css/style.css` 的 `:root` 變數，可從此處調整品牌色。
- 卡片樣式主要由 `.entry-card`、`.entry-media`、`.entry-body` 控制。

## 建議修改流程

1. 修改 HTML 內容時，優先編輯 `index.html`。
2. 修改視覺樣式時，優先編輯 `css/style.css`。
3. 新增圖片放入 `images/`，新增圖示放入 `ICON/`。
4. 修改後用瀏覽器直接開啟 `index.html` 檢查桌機與手機版顯示。
