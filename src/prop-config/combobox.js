export default function(uiEditor) {
    return {
        rule: 'ht.ui.ComboBox',
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
    
                id: 'ComboBox',
                displayName: uiEditor.getString('toolkit.combobox'),
                properties: [
                    {
                        displayName: uiEditor.getString('editor.property.dropdownviewrenderer'),
                        name: 'dropDownViewRenderer',
                        type: 'rendererResource',
                        setValue: function(view, value, property, uiEditor) {
                            view.setDropDownViewRenderer(value);
                            uiEditor.rebuildInspector();
                        }
                    },
                    {
                        displayName: uiEditor.getString('editor.property.expanded'),
                        name: 'is:expanded',
                        type: 'boolean',
                        getValue: function (view, property, checkValueChanged) {
                           return view.isOpened();
                        },
                        setValue: function (view, value, property) {
                            if (value) {
                                view.open()
                            }
                            else {
                                view.close();
                            }
                        },
                    },
                    {
                        name: 'dropDownWidth',
                        displayName: uiEditor.getString('editor.property.dropdownwidth'),
                        type: 'int',
                        getValue: function (view, property, checkValueChanged) {
                            var dropDownConfig = view.getDropDownConfig();
                            if (!dropDownConfig) {
                                return undefined;
                            }
                            else {
                                return dropDownConfig['width'];
                            }
                        },
                        setValue: function (view, value, property) {
                            var dropDownConfig = view.getDropDownConfig() || {};
                            var newDropDownConfig = {};
                            for (var key in dropDownConfig) {
                                newDropDownConfig[key] = dropDownConfig[key];
                            }
                            if (value == null || value == '') {
                                delete newDropDownConfig['width'];
                            }
                            else {
                                newDropDownConfig['width'] = value;
                            }
                            view.setDropDownConfig(newDropDownConfig);
                            if (view.isOpened()) {
                                view.close();
                                view.open();
                            }
                        }
                    },
                    {
                        name: 'dropDownHeight',
                        displayName: uiEditor.getString('editor.property.dropdownheight'),
                        type: 'int',
                        getValue: function (view, property, checkValueChanged) {
                            var dropDownConfig = view.getDropDownConfig();
                            if (!dropDownConfig) {
                                return undefined;
                            }
                            else {
                                return dropDownConfig['height'];
                            }
                        },
                        setValue: function (view, value, property) {
                            var dropDownConfig = view.getDropDownConfig() || {};
                            var newDropDownConfig = {};
                            for (var key in dropDownConfig) {
                                newDropDownConfig[key] = dropDownConfig[key];
                            }
                            if (value == null || value == '') {
                                delete newDropDownConfig['height'];
                            }
                            else {
                                newDropDownConfig['height'] = value;
                            }
                            
                            view.setDropDownConfig(newDropDownConfig);
                            if (view.isOpened()) {
                                view.close();
                                view.open();
                            }
                        }
                    },
                    {
                        displayName: uiEditor.getString('editor.property.datas'),
                        name: 'datas',
                        type: 'comboBoxDatas'
                    },
                    {
                        name: 'valueField',
                        displayName: uiEditor.getString('editor.property.valuefield'),
                        type: 'string',
                        getValue: function (view, property, checkValueChanged) {
                            return view.getValueField()
                         },
                         setValue: function (view, value, property) {
                             if (value === '') value = undefined;
                             view.setValueField(value)
                         },
                    },
                    {
                        name: 'displayField',
                        displayName: uiEditor.getString('editor.property.displayfield'),
                        type: 'string'
                    },
                    {
                        name: 'iconField',
                        displayName: uiEditor.getString('editor.property.iconfield'),
                        type: 'string'
                    },
                    {
                        name: 'valueIconWidth',
                        displayName: uiEditor.getString('editor.property.iconwidth'),
                        type: 'int'
                    },
                    {
                        name: 'valueIconHeight',
                        displayName: uiEditor.getString('editor.property.iconheight'),
                        type: 'int'
                    }
                ],
                extends: [
                    {
                        rule: 'ht.ui.TextField',
                        categoryId: 'TextField',
                        filter: ['value', 'color', 'font', 'placeholder', 'icon', 'hoverIcon', 'activeIcon', 'iconTextGap',
                            'is:readOnly', 
                            {
                                name: 'readOnlyBackground',
                                displayName: uiEditor.getString('editor.property.readonlybackground'),
                                type: 'drawable'
                            },
                            {
                                name: 'hoverReadOnlyBackground',
                                displayName: uiEditor.getString('editor.property.hoverreadonlybackground'),
                                type: 'drawable'
                            },
                            {
                                name: 'activeReadOnlyBackground',
                                displayName: uiEditor.getString('editor.property.activereadonlybackground'),
                                type: 'drawable'
                            }
                        ]
                    }
                ]
            },
            {
                displayName: uiEditor.getString('editor.property.listdropdown'),
                isVisible: function(selectViews) {
                    if (selectViews) {
                        for (var i = 0; i < selectViews.length; i++) {
                            var selectView = selectViews[i];
                            if (selectView.getDropDownViewRenderer()) {
                                return false;
                            }
                        }
                        return true;
                    }
                },
                getValue: function (view, property, checkValueChanged) {
                    var dropDownConfig = view.getDropDownConfig();
                    var propertyName = property.name;
                    propertyName = propertyName.replace('is:', '');
                    if (!dropDownConfig) {
                        return undefined;
                    }
                    else {
                        return dropDownConfig['dropDownView.' + propertyName];
                    }
                }, 
                setValue: function (view, value, property) {
                    var dropDownConfig = view.getDropDownConfig() || {};
                    var newDropDownConfig = {};
                    for (var key in dropDownConfig) {
                        newDropDownConfig[key] = dropDownConfig[key];
                    }
                    var propertyName = property.name;
                    propertyName = propertyName.replace('is:', '');

                    if (value == null || value == '') {
                        delete newDropDownConfig['dropDownView.' + propertyName];
                    }
                    else {
                        newDropDownConfig['dropDownView.' + propertyName] = value;
                    }
                    view.setDropDownConfig(newDropDownConfig);
                    if (view.isOpened()) {
                        view.close();
                        view.open();
                    }
                },
                extends: [
                    {
                        rule: 'ht.ui.View',
                        categoryId: 'basic',
                        filter: [
                            'background', 'border', 'padding', 'borderRadius', 'style', 'boxShadow'
                        ]
                    },
                    {
                        rule: 'ht.ui.ListView',
                        categoryId: 'ListView',
                        filter: [
                            'rowRenderer', 'labelColor', 'hoverLabelColor', 'selectLabelColor', 'unselectableLabelColor', 
                            'labelFont',  'rowHeight', 'rowLineVisible', 'rowLineColor', 'rowLineSize', 'is:clipLastRowLine',
                            'pannable', 'iconGap', 'rowBackground', 'hoverRowBackground', 'selectRowBackground', 
                            'iconWidth', 'iconHeight', 'iconStretch', 'rowIndent', 
                            {
                                name: 'childRelativeIndent',
                                displayName: uiEditor.getString('editor.property.childrelativeindent'),
                                type: 'int',
                            },
                            {
                                name: 'groupFont',
                                displayName: uiEditor.getString('editor.property.groupfont'),
                                type: 'font',
                            }
                        ]
                    }
                ]
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
