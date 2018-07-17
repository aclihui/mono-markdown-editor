const {app, BrowserWindow} = require('electron');
const {resolve} = require('path');

module.exports = [
    {
        label: '应用',
        submenu: [
            // {
            //     label: 'About Hosts High',
            //     click: function() {
            //         new BrowserWindow({
            //             parent: BrowserWindow.getFocusedWindow(),
            //             width: 285,
            //             height: 230,
            //             center: true,
            //             resizable: false,
            //             minimizable: false,
            //             maximizable: false,
            //             show: true,
            //             title: ''
            //         })
            //             .loadURL('file://' + resolve(__dirname, 'about.html'));
            //     }
            // },
            // {
            //     type: 'separator'
            // },
            {
                label: '退出',
                accelerator: 'CmdOrCtrl+Q',
                click: function() {
                    app.quit();
                }
            }
        ]
    },
    {
        label: '编辑',
        submenu: [
            {
                label: '撤销',
                accelerator: 'CmdOrCtrl+Z',
                selector: 'undo:',
                role: 'undo'
            },
            {
                label: '重做',
                accelerator: 'Shift+CmdOrCtrl+Z',
                selector: 'redo:',
                role: 'redo'
            },
            {
                type: 'separator'
            },
            {
                label: '剪切',
                accelerator: 'CmdOrCtrl+X',
                selector: 'cut:',
                role: 'cut'
            },
            {
                label: '复制',
                accelerator: 'CmdOrCtrl+C',
                selector: 'copy:',
                role: 'copy'
            },
            {
                label: '粘贴',
                accelerator: 'CmdOrCtrl+V',
                selector: 'paste:',
                role: 'paste'
            },
            {
                label: '全选',
                accelerator: 'CmdOrCtrl+A',
                selector: 'selectAll:',
                role: 'selectall'
            }
        ]
    },
    {
        label: '视图',
        submenu: [
            {
                label: '开发者工具',
                accelerator: (function() {
                    if (process.platform === 'darwin') {
                        return 'Alt+Command+I';
                    }
                    return 'Ctrl+Shift+I';
                }()),
                click: function(item, focusedWindow) {
                    if (focusedWindow) {
                        focusedWindow.toggleDevTools();
                    }
                }
            }
        ]
    }
];