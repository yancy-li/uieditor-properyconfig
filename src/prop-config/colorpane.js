export default function(uiEditor) {
    return {
        rule: 'ht.ui.ColorPane',
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
                id: 'ColorPane',
                displayName: uiEditor.getString('toolkit.colorpane'),
                properties: [
                    {
                        name: 'dropdownFunc',
                        displayName: uiEditor.getString('editor.property.iscolorpane'),
                        type: 'boolean',
                        getValue: function (view) {
                            return view.a('dropdownFunc') === 'colorpane';
                        },
                        setValue: function (view, value) {
                            view.a('dropdownFunc', value ? 'colorpane': null);
                        },
                        isVisible: function (views) {
                            var visible = true;
                            var inColorDropDown = function(v) {
                                while (v) {
                                    if (v instanceof ht.ui.ColorDropDownView) {
                                        return true;
                                    }
                                    v = v.getParent();
                                }
                            }
                            
                            for (var i = 0, length = views.length; i < length; i++) {
                                var view = views[i];
                                if (!inColorDropDown(view)) {
                                    visible = false;
                                    break;
                                }
                            }
                            return visible;
                        }
                    },
                    {
                        name: 'value',
                        displayName: uiEditor.getString('editor.property.value'),
                        type: 'color'
                    },
                    {
                        name: 'labelColor',
                        displayName: uiEditor.getString('editor.property.labelcolor'),
                        type: 'color'
                    },
                    {
                        name: 'labelFont',
                        displayName: uiEditor.getString('editor.property.labelfont'),
                        type: 'font'
                    },
                    {
                        name: 'sliderColor',
                        displayName: uiEditor.getString('editor.property.slidercolor'),
                        type: 'color',
                    },
                    {
                        name: 'paletteComboBoxVisible',
                        displayName: uiEditor.getString('editor.property.palettecomboboxvisible'),
                        type: 'boolean'
                    },
                    {
                        displayName: uiEditor.getString('editor.property.palettecolors'),
                        name: 'paletteColors',
                        type: 'colorPanePaletteColors'
                    },
                    {
                        name: 'inputColor',
                        displayName: uiEditor.getString('editor.property.inputcolor'),
                        type: 'color'
                    },
                    {
                        name: 'inputBackground',
                        displayName: uiEditor.getString('editor.property.inputbackground'),
                        type: 'color'
                    },
                    {
                        name: 'inputBorderColor',
                        displayName: uiEditor.getString('editor.property.inputbordercolor'),
                        type: 'color'
                    },
                    {
                        name: 'inputFont',
                        displayName: uiEditor.getString('editor.property.inputfont'),
                        type: 'font'
                    },
                    {
                        name: 'previewBorderColor',
                        displayName: uiEditor.getString('editor.property.previewbordercolor'),
                        type: 'color'
                    },
                    {
                        name: 'alphaEditable',
                        displayName: uiEditor.getString('editor.property.alphaeditable'),
                        type: 'boolean'
                    }
                ]
            },
            {
                displayName: uiEditor.getString('editor.property.palettecombobox'),
                collapse: true,
                getValue: function (view, property, checkValueChanged) {
                    var combobox = view.getPaletteComboBox();
 
                    return combobox[ht.Default.prefixGetter(property.name)]();
                },
                setValue: function (view, value, property) {
                    var comboBox = view.getPaletteComboBox();
                    comboBox[ht.Default.prefixSetter(property.name)](value);
                },
                extends: [
                    {
                        rule: 'ht.ui.TextField',
                        categoryId: 'basic'
                    },
                    {
                        rule: 'ht.ui.ComboBox',
                        categoryId: 'ComboBox',
                        filter: ['value', 'color', 'font', 'placeholder', 'icon', 'hoverIcon', 'activeIcon', 'iconTextGap',
                            'is:readOnly', 'readOnlyBackground', 'hoverReadOnlyBackground', 'activeReadOnlyBackground']
                    }
                ]
            },
            {
                displayName: uiEditor.getString('editor.property.palettecomboboxdropdown'),
                collapse: true,
                getValue: function (view, property, checkValueChanged) {
                    view = view.getPaletteComboBox();
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
                    view = view.getPaletteComboBox();
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
                            'background', 'border', 'padding', 'borderRadius', 'cursor', 'style', 'boxShadow'
                        ]
                    },
                    {
                        rule: 'ht.ui.ListView',
                        categoryId: 'ListView',
                        filter: [
                            'labelColor', 'hoverLabelColor', 'selectLabelColor',
                            'labelFont',  'rowHeight', 'rowLineVisible', 'rowLineColor', 'rowLineSize', 'is:clipLastRowLine',
                            'rowBackground', 'hoverRowBackground', 'selectRowBackground', 
                            'rowIndent'
                        ]
                    }
                ]
            }
        ]
    }
}
