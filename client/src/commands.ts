// Registers commands like function doc generation

import * as vscode from 'vscode';

export function registerCommands(context: vscode.ExtensionContext) {
    let disposable = vscode.commands.registerCommand('extension.generateFunctionComment', () => {
        vscode.window.showInformationMessage('Generating function comments...');
    });
    context.subscriptions.push(disposable);
}
