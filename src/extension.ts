import * as vscode from 'vscode';

let statusBarItem: vscode.StatusBarItem;

export function activate(context: vscode.ExtensionContext) {
    console.log('Extension Host Restart 插件已激活');

    // 注册重启命令
    const restartCommand = vscode.commands.registerCommand(
        'extension-host-restart.restart',
        async () => {
            const answer = await vscode.window.showWarningMessage(
                '确定要重启 Extension Host 吗？这将重新加载所有扩展。',
                '确定',
                '取消'
            );

            if (answer === '确定') {
                // 使用 setTimeout 延迟执行，让当前异步函数先完成
                // 避免因进程重启导致的 "Canceled" 提示
                setTimeout(() => {
                    vscode.commands.executeCommand('workbench.action.restartExtensionHost');
                }, 100);
            }
        }
    );

    // 创建状态栏按钮（右下角）
    statusBarItem = vscode.window.createStatusBarItem(
        vscode.StatusBarAlignment.Right,
        100
    );

    // 设置按钮外观
    statusBarItem.text = '$(sync) 重启扩展';
    statusBarItem.tooltip = '点击重启 Extension Host（重新加载所有扩展）';
    statusBarItem.command = 'extension-host-restart.restart';
    statusBarItem.backgroundColor = undefined;

    // 显示状态栏按钮
    statusBarItem.show();

    // 将命令和状态栏项添加到订阅列表，确保插件停用时清理
    context.subscriptions.push(restartCommand);
    context.subscriptions.push(statusBarItem);
}

export function deactivate() {
    if (statusBarItem) {
        statusBarItem.dispose();
    }
}
