import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
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

export function deactivate() {}