export default function(uiEditor) {
    return {
        rule: 'ht.ui.CascadeDropDownView',
        categories: [
            {
                displayName: uiEditor.getString('editor.property.baseproperty'),
                extends: [
                    {
                        rule: 'ht.ui.View',
                        categoryId: 'basic',
                        filter: [
                            'background', 'border', 'padding', 'borderRadius', 'preferredSize', 'minSize', 'style', 'shaodow'
                        ]
                    }
                ]
            },
            {
                displayName: uiEditor.getString('toolkit.tablayout'),
                properties: [
                    {
                        name: 'contentPadding',
                        displayName: uiEditor.getString('editor.property.contentpadding'),
                        type: 'int'
                    }
                ],
                getValue: function (view, property) {
                    if (property.name === 'contentPadding') {
                        return view.getContentPadding();
                    }
                },
                setValue: function (view, value, property) {
                    if (property.name === 'contentPadding') {
                        view.setContentPadding(value);
                    }
                }
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
                            'selectTextColor', 'selectHoverTextColor', 'selectActiveTextColor', 
                            'textColor', 'hoverTextColor', 'activeTextColor', 'textFont', 
                            'hTextPosition', 'vTextPosition', 
                            'hoverBackground', 'activeBackground',
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
            }
        ]
    }
}