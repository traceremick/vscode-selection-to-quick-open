import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
    let disposable = vscode.commands.registerCommand('extension.copyToQuickOpen', () => {
        const editor = vscode.window.activeTextEditor;
        if (editor) {
            const selection = editor.selection;
            const text = editor.document.getText(selection);
            const modifiedText = '%' + text;

            vscode.commands.executeCommand('workbench.action.quickOpen', modifiedText);
        }
    });

    context.subscriptions.push(disposable);
}

export function deactivate() {}