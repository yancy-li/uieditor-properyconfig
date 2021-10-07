export default function(uiEditor) {
    return {
        rule: 'ht.ui.CascadeComboBox',
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
                id: 'CascadeComboBox',
                displayName: uiEditor.getString('toolkit.cascadecombobox'),
                extends: [
                    {
                    rule: 'ht.ui.ComboBox',
                    categoryId: 'ComboBox',
                    filter: [
                        {
                            name: 'displaySeparator',
                            displayName: uiEditor.getString('editor.property.displayseparator'),
                            type: 'string',
                        },
                        'dropDownViewRenderer', 'is:expanded', 'dropDownWidth', 'dropDownHeight',
                        {
                            name: 'datas',
                            displayName: uiEditor.getString('editor.property.datas'),
                            type: 'code',
                            editorParams: {
                                'language': 'json'
                            }
                        }, 
                        'valueField', 'displayField', 
                        'iconField',
                        {
                            name: 'value',
                            displayName: uiEditor.getString('editor.property.value'),
                            type: 'string',
                            setValue: function (view, value, property) {
                                if (value == null || value.trim() == '') {
                                    view.setValue(undefined);
                                } else {
                                    value = value.split(',');
                                    if (Array.isArray(value)) {
                                        for (var i = 0; i < value.length; i++) {
                                            value[i] = parseInt(value[i]);
                                        }
                                        view.setValue(value);
                                    }
                                }
                            },
                            getValue: function (view, property) {
                                var value = view.getValue();
                                if (value) {
                                    return value.join(',');
                                }
                            }
                        },
                        'color', 'font', 'placeholder',
                        'icon', 'hoverIcon', 'activeIcon', 'iconWidth', 'iconHeight',
                        'readOnlyBackground', 'hoverReadOnlyBackground', 'activeReadOnlyBackground'
                    ]
                }
                ]
            }
        ]
    }
}
