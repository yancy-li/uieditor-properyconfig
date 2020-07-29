export default function(uiEditor) {
    return {
        rule: 'ht.ui.ToggleButton',
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
                displayName: uiEditor.getString('toolkit.togglebutton'),
                properties: [
                    {
                        name: 'background',
                        displayName: uiEditor.getString('editor.property.background'),
                        type: 'drawable'
                    },
                    {
                        name: 'hoverBackground',
                        displayName: uiEditor.getString('editor.property.hoverbackground'),
                        type: 'drawable'
                    },
                    {
                        name: 'activeBackground',
                        displayName: uiEditor.getString('editor.property.activebackground'),
                        type: 'drawable'
                    },
                    {
                        name: 'disabledBackground',
                        displayName: uiEditor.getString('editor.property.disabledbackground'),
                        type: 'drawable'
                    },
                    {
                        name: 'selectBackground',
                        displayName: uiEditor.getString('editor.property.selectbackground'),
                        type: 'drawable'
                    },
                    {
                        name: 'selectHoverBackground',
                        displayName: uiEditor.getString('editor.property.selecthoverbackground'),
                        type: 'drawable'
                    },
                    {
                        name: 'selectActiveBackground',
                        displayName: uiEditor.getString('editor.property.selectactivebackground'),
                        type: 'drawable'
                    },
                    {
                        name: 'selectDisabledBackground',
                        displayName: uiEditor.getString('editor.property.selectdisabledbackground'),
                        type: 'drawable'
                    },
                    {
                        name: 'is:selected',
                        displayName: uiEditor.getString('editor.property.selected'),
                        type: 'boolean'
                    }
                ]
            },
            {
                displayName: uiEditor.getString('editor.property.contextmenu'),
                extends: [
                    {
                        rule: 'ContextMenuForViews',
                        categoryId: 'contextmenu'
                    }
                ]
            }
        ]
    }
}