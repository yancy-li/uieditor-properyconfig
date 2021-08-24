export default function(uiEditor) {
    return {
        rule: 'ht.ui.Rate',
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
                id: 'Rate',
                displayName: uiEditor.getString('toolkit.rate'),
                properties: [
                    {
                        name: 'value',
                        displayName: uiEditor.getString('editor.property.value'),
                        type: 'number'
                    },
                    {
                        name: 'max',
                        displayName: uiEditor.getString('editor.property.max'),
                        type: 'int'
                    },
                    {
                        name: 'is:readOnly',
                        displayName: uiEditor.getString('editor.property.readonly'),
                        type: 'boolean',
                    },
                    {
                        name: 'is:allowHalf',
                        displayName: uiEditor.getString('editor.property.allowhalf'),
                        type: 'boolean'
                    },
                    {
                        name: 'colors',
                        displayName: uiEditor.getString('editor.property.colors'),
                        type: 'color'
                    },
                    {
                        name: 'uncheckedColors',
                        displayName: uiEditor.getString('editor.property.uncheckedcolors'),
                        type: 'color'
                    },
                    {
                        name: 'icons',
                        displayName: uiEditor.getString('editor.property.icons'),
                        type: 'drawable'
                    },
                    {
                        name: 'uncheckedIcons',
                        displayName: uiEditor.getString('editor.property.uncheckedicons'),
                        type: 'drawable'
                    },
                    {
                        name: 'iconWidth',
                        displayName: uiEditor.getString('editor.property.iconwidth'),
                        type: 'int'
                    },
                    {
                        name: 'iconHeight',
                        displayName: uiEditor.getString('editor.property.iconheight'),
                        type: 'int'
                    },
                    {
                        name: 'iconGap',
                        displayName: uiEditor.getString('editor.property.icongap'),
                        type: 'int'
                    }
                ]
            }
        ]
    }
}
