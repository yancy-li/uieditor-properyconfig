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
                        'dropDownViewRenderer', 'is:expanded', 'dropDownWidth', 'dropDownHeight',  'dropDownOffset',
                        {
                            name: 'dropDownView.boxShadow',
                            displayName: uiEditor.getString('editor.property.dropdownshaddow'),
                            type: 'shadow',
                            setValue: function(view, value, property) {
                                var dropDownConfig = view.getDropDownConfig() || {};
                                var newDropDownConfig = {};
                                for (var key in dropDownConfig) {
                                    newDropDownConfig[key] = dropDownConfig[key];
                                }
                                if (value == null || value == '') {
                                    delete newDropDownConfig['dropDownView.boxShadow'];
                                }
                                else {
                                    newDropDownConfig['dropDownView.boxShadow'] = value;
                                }
                                view.setDropDownConfig(newDropDownConfig);
                                if (view.isOpened()) {
                                    view.close();
                                    view.open();
                                }
                            },
                            getValue: function(view, property) {
                                var dropDownConfig = view.getDropDownConfig();
                                if (!dropDownConfig) {
                                    return undefined;
                                }
                                else {
                                    return dropDownConfig['dropDownView.boxShadow'];
                                }
                            },
                        },
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
                            }
                        },
                        {
                            name: 'previewBackground',
                            displayName: uiEditor.getString('editor.property.previewbackground'),
                            type: 'drawable'
                        },
                        'color', 'font',
                        'is:readOnly', 'suffixIcon', 'hoverSuffixIcon', 'activeSuffixIcon', 'iconWidth', 'iconHeight', 'iconTextGap'
                    ]
                }],
            }
        ]
    }
}