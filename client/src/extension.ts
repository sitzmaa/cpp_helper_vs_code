// Main entry point for VS Code extension

import * as vscode from 'vscode';
import { startClient } from './client';

export function activate(context: vscode.ExtensionContext) {
    console.log('C++ LSP extension activated');
    startClient(context);
}

export function deactivate() {}