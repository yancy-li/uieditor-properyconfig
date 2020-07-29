export default function(uiEditor) {
    return {
        rule: 'ht.ui.CheckBox',
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
                id: 'CheckBox',
                displayName: uiEditor.getString('toolkit.checkbox'),
                extends: [
                    {
                        rule: 'ht.ui.Button',
                        categoryId: 'Button',
                        filter: ['text', 'textColor', 'hoverTextColor', 'activeTextColor', 'textFont', 'icon', 'hoverIcon', 'activeIcon',  'disabledIcon',
                        'toolTip', 'toolTipEnabled'],
                    }
                ],
                properties: [
                    {
                        name: 'selectIcon',
                        displayName: uiEditor.getString('editor.property.selecticon'),
                        type: 'drawable'
                    },
                    {
                        name: 'selectHoverIcon',
                        displayName: uiEditor.getString('editor.property.selecthovericon'),
                        type: 'drawable'
                    },
                    {
                        name: 'selectActiveIcon',
                        displayName: uiEditor.getString('editor.property.selectactiveicon'),
                        type: 'drawable'
                    },
                    {
                        name: 'selectDisabledIcon',
                        displayName: uiEditor.getString('editor.property.selectdisabledicon'),
                        type: 'drawable'
                    },
                    {
                        name: 'selectTextColor',
                        displayName: uiEditor.getString('editor.property.selecttextcolor'),
                        type: 'color'
                    },
                    {
                        name: 'selectHoverTextColor',
                        displayName: uiEditor.getString('editor.property.selecthovertextcolor'),
                        type: 'color'
                    },
                    {
                        name: 'selectActiveTextColor',
                        displayName: uiEditor.getString('editor.property.selectactivetextcolor'),
                        type: 'color'
                    },
                    {
                        name: 'selectDisabledTextColor',
                        displayName: uiEditor.getString('editor.property.selectdisabledtextcolor'),
                        type: 'color'
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