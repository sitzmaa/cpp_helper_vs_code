// Handles plugin settings & configurations

import * as vscode from 'vscode';

export function getConfig() {
    return vscode.workspace.getConfiguration('cppLSP');
}