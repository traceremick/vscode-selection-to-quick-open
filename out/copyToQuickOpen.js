"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deactivate = exports.activate = void 0;
const vscode = require("vscode");
function activate(context) {
    const editor = vscode.window.activeTextEditor;
    let disposable = vscode.commands.registerCommand('extension.copyToQuickOpen', () => {
        if (editor) {
            const selection = editor.selection;
            const text = editor.document.getText(selection);
            const modifiedText = '%' + text;
            vscode.commands.executeCommand('workbench.action.quickOpen', modifiedText);
        }
    });
    let disposableGotoFile = vscode.commands.registerCommand('extension.copyToGotoFile', () => {
        if (editor) {
            const selection = editor.selection;
            const text = editor.document.getText(selection);
            vscode.commands.executeCommand('workbench.action.quickOpen', text);
        }
    });
    context.subscriptions.push(disposable, disposableGotoFile);
}
exports.activate = activate;
function deactivate() { }
exports.deactivate = deactivate;
//# sourceMappingURL=copyToQuickOpen.js.map