// 使用套件
const cdn_cloudflare = "https://cdnjs.cloudflare.com";
const pdf_min_js = "https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.4.120/pdf.min.js";
const pdf_worker_min_js = "https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.4.120/pdf.worker.min.js";
const jszip_min_js = "https://cdnjs.cloudflare.com/ajax/libs/jszip/3.7.1/jszip.min.js";

const $window = window;
const $document = document;
const $Promise = Promise;
const $Uint8Array = Uint8Array;
const $setTimeout = setTimeout;
const $URL = URL;
const $console = console;
const $Error = Error;

const _createElement = "createElement";
const _setAttribute = "setAttribute";
const _appendChild = "appendChild";
const _script = "script";
const _link = "link";
const _head = "head";
const _body = "body";
const _href = "href";
const _filename = "filename";
const _dataset = "dataset";
const _percent = "percent";
const _remove = "remove";
const _file = "file";
const _width = "width";
const _height = "height";
const _catch = "catch";
const _then = "then";
const _promise = "promise";
const _error = "error";
const _message = "message";
const _numPages = "numPages";
const _length = "length";
const _type = "type";
const _replace = "replace";
const _push = "push";
const _slice = "slice";

(_ => {
    for (let e of [cdn_cloudflare]) {
        let link = $document[_createElement](_link);
        link[_setAttribute]("rel", 'preconnect');
        link[_href] = e;

        $document[_head][_appendChild](link);
    };

    for (let e of [pdf_min_js, pdf_worker_min_js, jszip_min_js]) {
        let link = $document[_createElement](_link);
        link[_setAttribute]("rel", 'preload');
        link[_setAttribute]('as', _script);
        link[_href] = e;

        $document[_head][_appendChild](link);
    };

    for (let e of [pdf_min_js, jszip_min_js]) {
        let script = $document[_createElement](_script);
        script.src = e;

        $document[_head][_appendChild](script);
    };

    let link = $document[_createElement](_link);
    link[_setAttribute]("rel", 'stylesheet');
    link[_href] = "./dist/pdf2image.css";

    $document[_head][_appendChild](link);
})();

class pdf2imageLoading {

    constructor() {
        const dom = $document[_createElement]('div');
        dom.className = "pdf2image-loading";
        dom[_dataset][_percent] = 0;

        const p = $document[_createElement]('p');
        p.innerText = this.#loadingText();

        dom[_appendChild](p);

        this[_body] = dom;

        return this;
    };

    percent(index, total, prepare) {
        const num = Math.round((index / total) * 100);
        this[_body][_dataset][_percent] = num;
        this[_body].children[0].innerText = this.#loadingText(num, prepare);
    };

    remove() {
        this[_body][_remove]();
    };

    #loadingText(percent = 0, prepare) {
        return (prepare ? "準備壓縮檔 " : "解析中 ") + percent + "%";
    };
};

class pdf2image {

    #filename
    #file;
    #type;
    #scale;
    #result = [];

    constructor(body = {}) {
        this.#filename = (body[_filename] || "").trim()[_replace](/\.pdf/, "");
        this.#file = body[_file];
        this.#type = {
            png: 1,
            jpg: 1,
            webp: 1
        }[body[_type]] ? body[_type] : "jpg";
        this.#scale = body.scale || 1.5;
    };

    get images() {
        return this.#result;
    };

    convert() {
        return new $Promise((res, rej) => {
            pdfjsLib.GlobalWorkerOptions.workerSrc = pdf_worker_min_js;
            pdfjsLib.getDocument({
                data: new $Uint8Array(this.#file),
                cMapUrl: "//cdnjs.cloudflare.com/ajax/libs/pdf.js/3.4.120/cmaps/",
                cMapPacked: true,
                useWorkerFetch: true,
                verbosity: 0
            })[_promise][_then](async pdf => {
                const loading = new pdf2imageLoading();

                $document[_body][_appendChild](loading[_body]);


                try {
                    const tasks = [];
                    const total = pdf[_numPages]; // 總頁數
                    let completed = 0; // 跟蹤已完成頁面數量

                    for (let i = 1; i <= pdf[_numPages]; i++) {
                        tasks[_push]((async () => {
                            const page = await pdf.getPage(i);
                            const viewport = page.getViewport({
                                scale: this.#scale
                            });

                            const canvas = $document[_createElement]('canvas');
                            canvas[_width] = viewport[_width];
                            canvas[_height] = viewport[_height];

                            const context = canvas.getContext('2d');
                            await page.render({
                                canvasContext: context,
                                viewport
                            })[_promise];

                            const dataURL = canvas.toDataURL(`image/${this.#type}`);
                            this.#result[_push](dataURL);

                            completed += 1;
                            loading[_percent](completed, total);
                        })());
                    };
                    await $Promise.all(tasks);

                    $setTimeout(_ => {
                        res(this.#result);
                        loading[_remove]();
                    }, 500);
                }
                catch (err) {
                    loading[_remove]();
                    throw new $Error(`${_error} Page ${i} ${err[_message]}`);
                };
            })[_catch](err => {
                $console[_error](_error, err);
                rej(`${_error} ${err[_message]}`);
            });
        })
    }

    async download() {
        if (this.#file == null) {
            return;
        };

        if (this.#result[_length] < 1) {
            await this.convert();
        };

        const loading = new pdf2imageLoading();

        $document[_body][_appendChild](loading[_body]);

        return new $Promise((res, rej) => {
            const zip = new JSZip();
            const filename = `${this.#filename[_length] < 1 ? "image" : this.#filename[_replace](/\s/g, "_")}`;
            const zipname = `${this.#filename[_length] < 1 ? "pdf2image" : this.#filename[_replace](/\s/g, "_")}`;

            // * 將圖片添加到 ZIP 檔案中
            for (let i = 0; i < this.#result[_length]; i++) {
                const name = `${filename} ${i}.` + this.#type;
                const e = this.#result[i];
                const base64 = e.split(',')[1];

                zip[_file](name, base64, {
                    base64: true
                });
            };

            zip.generateAsync({
                [_type]: 'blob',
                streamFiles: true
            }, e => {
                loading[_percent](e.percent, 100, true);
            })[_then](e => {
                const date = new Date();
                const y = date.getFullYear();
                const M = ("0" + (date.getMonth() + 1))[_slice](-2);
                const d = ("0" + date.getDate())[_slice](-2);
                const h = ("0" + date.getHours())[_slice](-2);
                const m = ("0" + date.getMinutes())[_slice](-2);
                const dom = $document[_createElement]('a');
                dom[_href] = $URL.createObjectURL(e);
                dom.download = `${zipname}_${y}_${M}_${d}_${h}_${m}.zip`;
                $document[_body][_appendChild](dom);

                $setTimeout(_ => {
                    res();
                    dom.click();
                    dom[_remove]();
                    loading[_remove]();
                }, 500);
            })[_catch](err => {
                $console[_error](_error, err);
                rej([]);
            });
        });
    };
};

$window.pdf2image = pdf2image;