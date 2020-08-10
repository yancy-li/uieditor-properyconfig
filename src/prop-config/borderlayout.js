export default function(uiEditor) {
    return {
        rule: 'ht.ui.BorderLayout',
        categories: [
            {
                displayName: uiEditor.getString('editor.property.baseproperty'),
                extends: [
                    {
                        rule: 'ht.ui.View',
                        categoryId: 'basic'
                    }
                ]
            },
            {
                displayName: uiEditor.getString('toolkit.borderlayout'),
                properties: [
                    {
                        name: 'is:splitterVisible',
                        displayName: uiEditor.getString('editor.property.splittervisible'),
                        type: 'boolean'
                    },
                    {
                        displayName: uiEditor.getString('editor.property.splitter'),
                        name: 'splitter',
                        type: 'drawable'
                    },
                    {
                        displayName: uiEditor.getString('editor.property.hoversplitter'),
                        name: 'hoverSplitter',
                        type: 'drawable'
                    },
                    {
                        displayName: uiEditor.getString('editor.property.activesplitter'),
                        name: 'activeSplitter',
                        type: 'drawable'
                    },
                    {
                        displayName: uiEditor.getString('editor.property.splittersize'),
                        name: 'splitterSize',
                        type: 'int'
                    },
                    {
                        displayName: uiEditor.getString('editor.property.splitterhitsize'),
                        name: 'splitterHitSize',
                        type: 'int'
                    },
                    {
                        displayName: uiEditor.getString('editor.property.resizable'),
                        name: 'is:resizable',
                        type: 'boolean'
                    },
                    {
                        displayName: uiEditor.getString('editor.property.resizehintbackground'),
                        name: 'resizeHintBackground',
                        type: 'drawable'
                    },
                    {
                        name: 'is:toggleVisible',
                        displayName: uiEditor.getString('editor.property.togglevisible'),
                        type: 'boolean'
                    },
                    {
                        displayName: uiEditor.getString('editor.property.toggle'),
                        name: 'toggle',
                        type: 'drawable'
                    },
                    {
                        displayName: uiEditor.getString('editor.property.hovertoggle'),
                        name: 'hoverToggle',
                        type: 'drawable'
                    },
                    {
                        displayName: uiEditor.getString('editor.property.activetoggle'),
                        name: 'activeToggle',
                        type: 'drawable'
                    },
                    {
                        displayName: uiEditor.getString('editor.property.togglesize'),
                        name: 'toggleSize',
                        type: 'int'
                    },
                    {
                        displayName: uiEditor.getString('editor.property.leftwidth'),
                        name: 'leftWidth',
                        type: 'int'
                    },
                    {
                        displayName: uiEditor.getString('editor.property.rightwidth'),
                        name: 'rightWidth',
                        type: 'int'
                    },
                    {
                        displayName: uiEditor.getString('editor.property.topheight'),
                        name: 'topHeight',
                        type: 'int'
                    },
                    {
                        displayName: uiEditor.getString('editor.property.bottomheight'),
                        name: 'bottomHeight',
                        type: 'int'
                    },
                    {
                        displayName: uiEditor.getString('editor.property.leftexpanded'),
                        name: 'is:leftExpanded',
                        type: 'boolean'
                    },
                    {
                        name: 'is:rightExpanded',
                        displayName: uiEditor.getString('editor.property.rightexpanded'),
                        type: 'boolean'
                    },
                    {
                        name: 'is:topExpanded',
                        displayName: uiEditor.getString('editor.property.topexpanded'),
                        type: 'boolean'
                    },
                    {
                        name: 'is:bottomExpanded',
                        displayName: uiEditor.getString('editor.property.bottomexpanded'),
                        type: 'boolean'
                    },
                    {
                        name: 'is:continuous',
                        displayName: uiEditor.getString('editor.property.continuous'),
                        type: 'boolean'
                    }
                ]
            },
            {
                displayName: uiEditor.getString('editor.property.contextmenu'),
                collapse: true,
                extends: [
                    {
                        rule: 'ContextMenuForViews',
                        categoryId: 'contextmenu'
                    }
                ]
            }
        ]
    };
}
