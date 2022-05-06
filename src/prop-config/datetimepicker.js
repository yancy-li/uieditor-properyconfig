export default function(uiEditor) {
    return {
        rule: 'ht.ui.DateTimePicker',
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
    
                id: 'DateTimePicker',
                displayName: uiEditor.getString('toolkit.datetimepicker'),
                extends: [{
                    rule: 'ht.ui.ComboBox',
                    categoryId: 'ComboBox',
                    filter: [
                        'dropDownViewRenderer', 'is:expanded', 'dropDownWidth', 'dropDownHeight', 'dropDownOffset',
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
                            type: 'datetime'
                        },
                        {
                            name: 'defaultTime',
                            displayName: uiEditor.getString('editor.property.defaulttime'),
                            type: 'datetime',
                            editorParams: {
                                'format': 'HH:mm:ss',
                                'dropDownConfig': {
                                    'dateTimePane.type': 'time'
                                }
                            },
                            getValue: function (view, property, checkValueChanged) {
                                var dropDownConfig = view.getDropDownConfig();
                                if (!dropDownConfig) {
                                    return undefined;
                                }
                                else {
                                    return dropDownConfig['dateTimePane.defaultTime'];
                                }
                            },
                            setValue: function (view, value, property) {
                                var dropDownConfig = view.getDropDownConfig() || {};
                                var newDropDownConfig = {};
                                for (var key in dropDownConfig) {
                                    newDropDownConfig[key] = dropDownConfig[key];
                                }
                        
                                if (value == null || value == '') {
                                    delete newDropDownConfig['dateTimePane.defaultTime'];
                                }
                                else {
                                    newDropDownConfig['dateTimePane.defaultTime'] = new Date('2000-01-01 ' + value);
                                }
                                view.setDropDownConfig(newDropDownConfig);
                                if (view.isOpened()) {
                                    view.close();
                                    view.open();
                                }
                            }
                        },
                        {
                            name: 'format',
                            displayName: uiEditor.getString('editor.property.format'),
                            desc: uiEditor.getString('editor.property.desc.dateformat'),
                            type: 'string'
                        },
                        'color', 'font', 'placeholder',
                        'icon', 'hoverIcon', 'activeIcon', 'iconWidth', 'iconHeight',
                        'is:readOnly', 'readOnlyBackground', 'hoverReadOnlyBackground', 'activeReadOnlyBackground'
                    ]
                }]
            }
        ]
    }
}