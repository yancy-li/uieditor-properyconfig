export default function(uiEditor) {
    return {
        rule: 'ht.ui.CheckBox',
        categories: [
            {
                displayName: uiEditor.getString('editor.property.baseproperty'),
                extends: [
                    { 
                        rule: 'ht.ui.Button',
                        categoryId: 'buttonBasic'
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
                        filter: ['text', 'textColor', 'hoverTextColor', 'activeTextColor', 'disabledTextColor', 'textFont', 'hTextPosition', 'vTextPosition',
                            {
                                name: 'value',
                                displayName: uiEditor.getString('editor.property.value'),
                                type: 'string'
                            },
                            'iconWidth','iconHeight', 'icon', 'hoverIcon', 'activeIcon',  'disabledIcon',
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
                            'iconTextGap',
                            {
                                name: 'is:selected',
                                displayName: uiEditor.getString('editor.property.selected'),
                                type: 'boolean'
                            },
                            'align', 'vAlign',
                        'toolTip', 'toolTipEnabled'],
                    }
                ]
            }
        ]
    }
}