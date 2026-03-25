import { ChaiEngine } from './chaisheet.js';

const chai = new ChaiEngine();
chai.run();

const editor = document.querySelector('#editor');
const preview = document.querySelector('#preview');

const updatePreview = () => {
    const content = editor.value;
    const iframeDoc = preview.contentDocument || preview.contentWindow.document;

    iframeDoc.open();
    iframeDoc.write(`
        <!DOCTYPE html>
        <html>
            <head>
                <style>
                    body { font-family: sans-serif; margin: 20px; color: #333; }
                </style>
            </head>
            <body>
                ${content}
            </body>
        </html>
    `);
    iframeDoc.close();

    // Process styles inside the iframe
    chai.run(iframeDoc);
};

editor.addEventListener('input', updatePreview);
window.addEventListener('load', updatePreview);