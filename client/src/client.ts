// Handles client-server communication

import * as vscode from 'vscode';
import * as cp from 'child_process';
import * as path from 'path';
import { LanguageClient, LanguageClientOptions, ServerOptions } from 'vscode-languageclient/node';

let client: LanguageClient;

export function startClient(context: vscode.ExtensionContext) {
    let serverExecutable = path.join(context.extensionPath, 'server', 'build', 'server');
    let serverOptions: ServerOptions = {
        run: { command: serverExecutable },
        debug: { command: serverExecutable }
    };
    let clientOptions: LanguageClientOptions = { documentSelector: [{ scheme: 'file', language: 'cpp' }] };
    client = new LanguageClient('cppLSP', 'C++ LSP Server', serverOptions, clientOptions);
    client.start();
}

export function stopClient() {
    if (client) client.stop();
}