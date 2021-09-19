export default function(uiEditor) {
    return {
        rule: 'ht.ui.ColorPicker',
        categories: [
            {
                id: 'basic',
                displayName: uiEditor.getString('editor.property.baseproperty'),
                extends: [{
                    rule: 'ht.ui.TextField',
                    categoryId: 'basic'
                }]
            },
            {
    
                id: 'ColorPicker',
                displayName: uiEditor.getString('toolkit.colorpicker'),
                extends: [{
                    rule: 'ht.ui.ComboBox',
                    categoryId: 'ComboBox',
                    filter: [
                        'dropDownViewRenderer', 'is:expanded', 'dropDownWidth', 'dropDownHeight', 
                        {
                            name: 'value',
                            displayName: uiEditor.getString('editor.property.value'),
                            type: 'color'
                        },
                        {
                            name: 'valueMode',
                            displayName: uiEditor.getString('editor.property.valuemode'),
                            type: 'enum',
                            editorParams: {
                                datas: [{
                                    label: uiEditor.getString('editor.property.text'),
                                    value: 'text'
                                }, {
                                    label: uiEditor.getString('editor.color'),
                                    value: 'color'
                                }],
                                readOnly: true
                            }
                        },
                        {
                            name: 'previewBackground',
                            displayName: uiEditor.getString('editor.property.previewbackground'),
                            type: 'drawable'
                        },
                        'color', 'font',
                        'is:readOnly', 'icon', 'hoverIcon', 'activeIcon', 'iconWidth', 'iconHeight'
                    ]
                }],
            }
        ]
    }
}