"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deactivate = exports.activate = void 0;
const vscode = require("vscode");
function activate(context) {
    // cmd+shift+o
    let disposableQuickOpen = vscode.commands.registerCommand('extension.copyToQuickOpen', () => {
        const editor = vscode.window.activeTextEditor;
        let searchText = '';
        if (editor && !editor.selection.isEmpty) {
            const selection = editor.selection;
            searchText = '%' + editor.document.getText(selection);
        }
        vscode.commands.executeCommand('workbench.action.quickOpen', searchText);
    });
    // cmd+shift+f
    let disposableGotoFile = vscode.commands.registerCommand('extension.copyToGotoFile', () => {
        const editor = vscode.window.activeTextEditor;
        let searchText = '';
        if (editor && !editor.selection.isEmpty) {
            const selection = editor.selection;
            searchText = editor.document.getText(selection);
        }
        vscode.commands.executeCommand('workbench.action.quickOpen', searchText);
    });
    context.subscriptions.push(disposableQuickOpen, disposableGotoFile);
}
exports.activate = activate;
function deactivate() { }
exports.deactivate = deactivate;
//# sourceMappingURL=copyToQuickOpen.js.map