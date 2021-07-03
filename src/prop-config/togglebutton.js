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
                id: 'togglebutton',
                extends: [
                    {
                        rule: 'ht.ui.Button',
                        categoryId: 'Button',
                        filter: [
                                {
                                    name: 'is:selected',
                                    displayName: uiEditor.getString('editor.property.selected'),
                                    type: 'boolean'
                                },
                            'text', 'textFont', 'textColor', 'hoverTextColor', 'activeTextColor', 'disabledTextColor', 
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
                            'hTextPosition', 'vTextPosition', 
                            'hoverBackground', 'activeBackground', 'disabledBackground',
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
                            'disabledBorder', 'icon', 'hoverIcon', 'activeIcon', 'disabledIcon', 
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
                            'iconWidth', 'iconHeight', 'iconTextGap', 'iconStretch', 'toolTip', 'toolTipEnabled', 'is:pixelPerfect',
                            'align', 'vAlign'
                        ]
                    }
                ],
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
    }
}