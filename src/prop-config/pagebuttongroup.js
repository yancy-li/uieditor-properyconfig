export default function(uiEditor) {
    return {
        rule: 'ht.ui.PageButtonGroup',
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
                displayName: uiEditor.getString('toolkit.pagebuttongroup'),
                extends: [
                    {
                        rule: 'ht.ui.HBoxLayout',
                        categoryId: 'hboxlayout'
                    }
                ],
                properties: [
                    {
                        name: 'buttonCount',
                        displayName: uiEditor.getString('editor.property.buttoncount'),
                        type: 'int'
                    },
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
                        name: 'border',
                        displayName: uiEditor.getString('editor.property.border'),
                        type: 'border'
                    },
                    {
                        name: 'padding',
                        displayName: uiEditor.getString('editor.property.padding'),
                        type: 'padding'
                    },
                    {
                        name: 'borderRadius',
                        displayName: uiEditor.getString('editor.property.borderradius'),
                        type: 'int'
                    }
                ],
                extends: [
                    {
                        rule: 'ht.ui.ToggleButton',
                        categoryId: 'togglebutton',
                        filter: [
                            'selectBackground', 'selectHoverBackground', 'selectActiveBackground',
                            'selectIcon', 'selectHoverIcon', 'selectActiveIcon', 
                            'selectTextColor', 
                            'selectHoverTextColor', 'selectActiveTextColor', 
                            {
                                name: 'text',
                                displayName: uiEditor.getString('editor.property.text'),
                                type: 'string'
                            },
                            
                            'textColor', 'hoverTextColor', 'activeTextColor', 'textFont', 
                            'hTextPosition', 'vTextPosition', 
                            'hoverBackground', 'activeBackground',
                            'icon', 'hoverIcon', 'activeIcon',
                            'iconWidth', 'iconHeight', 'iconTextGap', 'iconStretch', 
                            'toolTipEnabled', 
                            'is:pixelPerfect',
                            'align', 'vAlign'
                        ]
                    }
                ],
                getValue: function (view, property) {
                    var templateButton = view.getTemplateButton();
                    if (templateButton == null) {
                        return undefined;
                    }
                    else {
                        return templateButton[ht.Default.prefixGetter(property.name)]();
                    }
                },
                setValue: function (view, value, property) {
                    var templateButton = view.getTemplateButton();
                    
                    if (templateButton)
                        templateButton[ht.Default.prefixSetter(property.name)](value);
                }
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