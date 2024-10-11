import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
    // cmd+shift+o
    let disposableQuickOpen = vscode.commands.registerCommand('extension.copyToQuickOpen', () => {
        const editor = vscode.window.activeTextEditor;
        let searchText = '';

        if (editor && ! editor.selection.isEmpty) {
            const selection = editor.selection;
            searchText = '%' + editor.document.getText(selection);
        }

        vscode.commands.executeCommand('workbench.action.quickOpen', searchText);
    });
    
    // cmd+shift+f
    let disposableGotoFile = vscode.commands.registerCommand('extension.copyToGotoFile', () => {
        const editor = vscode.window.activeTextEditor;
        let searchText = '';

        if (editor && ! editor.selection.isEmpty) {
            const selection = editor.selection;
            searchText = editor.document.getText(selection);
        }

        vscode.commands.executeCommand('workbench.action.quickOpen', searchText);
    });

    context.subscriptions.push(disposableQuickOpen, disposableGotoFile);
}

export function deactivate() {}