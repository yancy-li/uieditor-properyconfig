export default function(uiEditor) {
    return {
        rule: 'ht.ui.MultiSelect',
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
                id: 'MultiSelect',
                displayName: uiEditor.getString('toolkit.multiselect'),
                extends: [{
                    rule: 'ht.ui.ComboBox',
                    categoryId: 'ComboBox',
                    filter: [
                        'datas', 'valueField', 'displayField', 'iconField', 
                        'dropDownViewRenderer', 
                        'dropDownWidth', 'dropDownHeight', 
                        {
                            displayName: uiEditor.getString('editor.property.instant'),
                            name: 'is:instant',
                            type: 'boolean'
                        }, 'is:expanded', 
                        'icon', 'hoverIcon', 'activeIcon', 
                        {
                            displayName: uiEditor.getString('editor.property.iconwidth'),
                            name: 'iconWidth',
                            type: 'int'
                        },
                        {
                            displayName: uiEditor.getString('editor.property.iconheight'),
                            name: 'iconHeight',
                            type: 'int'
                        },
                        {
                            displayName: uiEditor.getString('editor.property.itemmargin'),
                            name: 'itemMargin',
                            type: 'string',
                            setValue: function(view, value, property) {
                                if (value == null || value.trim() == '') {
                                    view.setItemMargin(undefined);
                                }
                                else {
                                    value = value.split(',');
                                    if (Array.isArray(value)) {
                                        for (var i = 0; i < value.length; i++) {
                                            value[i] = parseInt(value[i]);
                                        }
                                        view.setItemMargin(value);
                                    }
                                }
                            },
                            getValue: function(view, property) {
                                var itemMargin = view.getItemMargin();
                                if (itemMargin) {
                                    return itemMargin.join(',');
                                }
                            }
                        },
                        {
                            displayName: uiEditor.getString('editor.property.closeicon'),
                            name: 'closeIcon',
                            type: 'drawable'
                        },
                        {
                            displayName: uiEditor.getString('editor.property.hovercloseicon'),
                            name: 'hoverCloseIcon',
                            type: 'drawable'
                        },
                        {
                            displayName: uiEditor.getString('editor.property.activecloseicon'),
                            name: 'activeCloseIcon',
                            type: 'drawable'
                        },
                        {
                            displayName: uiEditor.getString('editor.property.closeiconwidth'),
                            name: 'closeIconWidth',
                            type: 'int'
                        },
                        {
                            displayName: uiEditor.getString('editor.property.closeiconheight'),
                            name: 'closeIconHeight',
                            type: 'int'
                        }
                    ]
                }],
            },
            {
                displayName: uiEditor.getString('editor.property.templateitem'),
                setValue: function(view, value, property) {
                    var templateButton = view.getTemplateItem();
                    
                    if (templateButton)
                        templateButton[ht.Default.prefixSetter(property.name)](value);
                },
                getValue: function(view, property) {
                    var templateButton = view.getTemplateItem();
                    if (templateButton == null) {
                        return undefined;
                    }
                    else {
                        return templateButton[ht.Default.prefixGetter(property.name)]();
                    }
                },
                extends: [
                    {
                        rule: 'ht.ui.View',
                        categoryId: 'basic',
                        filter: [  
                            'background', 'border', 'padding', 'borderRadius', 'cursor', 'style', 'boxShadow', 'disabled'
                        ]
                    },
                    {
                        rule: 'ht.ui.Button',
                        categoryId: 'Button',
                        filter: [
                            'textFont', 'textColor', 'hoverTextColor', 'activeTextColor', 'hTextPosition', 
                            'vTextPosition', 'hoverBackground', 'activeBackground', 'iconWidth', 'iconHeight',
                            'iconTextGap', 'iconStretch', 'toolTipEnabled', 'align', 'vAlign'
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
                            'background', 'border', 'padding', 'borderRadius',  'cursor', 'style', 'boxShadow'
                        ]
                    },
                    {
                        rule: 'ht.ui.ListView',
                        categoryId: 'ListView',
                        filter: [
                            'rowRenderer', 'labelColor', 'hoverLabelColor', 'selectLabelColor', 'unselectableLabelColor', 
                            'labelFont',  'rowHeight', 'rowLineVisible', 'rowLineColor', 'rowLineSize', 'is:clipLastRowLine',
                            'pannable', 'iconGap', 'rowBackground', 'hoverRowBackground', 'selectRowBackground', 
                            'iconWidth', 'iconHeight', 'iconStretch', 'rowIndent', 'is:checkMode', 'checkIcon', 'uncheckIcon',
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
            }
        ]
    }
}
