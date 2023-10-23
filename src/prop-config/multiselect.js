export default function (uiEditor) {
    return {
        rule: 'ht.ui.MultiSelect',
        categories: [
            {
                displayName: uiEditor.getString('editor.property.baseproperty'),
                extends: [
                    {
                        rule: 'ht.ui.View',
                        categoryId: 'basic',
                        replace: [
                            {
                                name: 'border',
                                displayName: uiEditor.getString('editor.property.border'),
                                type: 'border',
                                editorParams: {
                                    'focusLineBorderVisible': true
                                }
                            }
                        ]
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
                        'dropDownWidth', 'dropDownHeight', 'dropDownOffset',
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
                            setValue: function (view, value, property) {
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
                            getValue: function (view, property) {
                                var itemMargin = view.getItemMargin();
                                if (itemMargin) {
                                    return itemMargin.join(',');
                                }
                            }
                        }
                    ]
                }],
            },
            {
                displayName: uiEditor.getString('editor.property.templateitem'),
                setValue: function (view, value, property) {
                    var templateItem = view.getTemplateItem();
                    templateItem[ht.Default.prefixSetter(property.name)](value);
                },
                getValue: function (view, property) {
                    var templateItem = view.getTemplateItem();
                    try {
                        return templateItem[ht.Default.prefixGetter(property.name)]();
                    } catch (e) {
                        console.log(property.name)
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
                        filter: ['textColor', 'textFont', 'hTextPosition', 'vTextPosition', 'icon', 'iconWidth', 'iconHeight',
                            'iconTextGap', 'iconStretch', 'toolTip', 'toolTipEnabled', 'align', 'vAlign'
                        ]
                    },
                ],
                properties: [
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
                    },
                    {
                        displayName: uiEditor.getString('editor.property.closeiconhitextend'),
                        name: 'closeIconHitExtend',
                        type: 'int'
                    },
                    {
                        displayName: uiEditor.getString('editor.property.closeicontextgap'),
                        name: 'closeIconTextGap',
                        type: 'int'
                    },
                    {
                        displayName: uiEditor.getString('editor.property.closeiconstretch'),
                        name: 'closeIconStretch',
                        type: 'enum',
                        editorParams: {
                            datas: [uiEditor.getString('editor.property.stretch.fill'), uiEditor.getString('editor.property.stretch.uniform'),
                            uiEditor.getString('editor.property.stretch.centeruniform'), uiEditor.getString('editor.property.stretch.center'), null],
                        }
                    },
                    {
                        displayName: uiEditor.getString('editor.property.defaultcursor'),
                        name: 'defaultCursor',
                        type: 'enum',
                        editorParams: {
                            datas: [
                                {
                                    label: 'auto',
                                    value: 'auto',
                                    icon: 'UIEditor.cursor.auto-nothing'
                                },
                                {
                                    label: 'default',
                                    value: 'default',
                                    icon: 'UIEditor.cursor.default'
                                },
                                {
                                    label: 'help',
                                    value: 'help',
                                    icon: 'UIEditor.cursor.help'
                                },
                                {
                                    label: 'pointer',
                                    value: 'pointer',
                                    icon: 'UIEditor.cursor.pointer'
                                },
                                {
                                    label: 'progress',
                                    value: 'progress',
                                    icon: 'UIEditor.cursor.progress'
                                },
                                {
                                    label: 'wait',
                                    value: 'wait',
                                    icon: 'UIEditor.cursor.wait'
                                },
                                {
                                    label: 'cell',
                                    value: 'cell',
                                    icon: 'UIEditor.cursor.cell'
                                },
                                {
                                    label: 'crosshair',
                                    value: 'crosshair',
                                    icon: 'UIEditor.cursor.crosshair'
                                },
                                {
                                    label: 'text',
                                    value: 'text',
                                    icon: 'UIEditor.cursor.text'
                                },
                                {
                                    label: 'vertical-text',
                                    value: 'vertical-text',
                                    icon: 'UIEditor.cursor.vertical-text'
                                },
                                {
                                    label: 'alias',
                                    value: 'alias',
                                    icon: 'UIEditor.cursor.alias'
                                },
                                {
                                    label: 'copy',
                                    value: 'copy',
                                    icon: 'UIEditor.cursor.copy'
                                },
                                {
                                    label: 'move',
                                    value: 'move',
                                    icon: 'UIEditor.cursor.move'
                                },
                                {
                                    label: 'not-allowed',
                                    value: 'not-allowed',
                                    icon: 'UIEditor.cursor.not-allowed'
                                },
                                {
                                    label: 'grab',
                                    value: 'grab',
                                    icon: 'UIEditor.cursor.grab'
                                },
                                {
                                    label: 'grabbing',
                                    value: 'grabbing',
                                    icon: 'UIEditor.cursor.grabbing'
                                },
                                {
                                    label: 'all-scroll',
                                    value: 'all-scroll',
                                    icon: 'UIEditor.cursor.all-scroll'
                                },
                                {
                                    label: 'col-resize',
                                    value: 'col-resize',
                                    icon: 'UIEditor.cursor.col-resize'
                                },
                                {
                                    label: 'row-resize',
                                    value: 'row-resize',
                                    icon: 'UIEditor.cursor.row-resize'
                                },
                                {
                                    label: 'n-resize',
                                    value: 'n-resize',
                                    icon: 'UIEditor.cursor.n-resize'
                                },
                                {
                                    label: 'e-resize',
                                    value: 'e-resize',
                                    icon: 'UIEditor.cursor.e-resize'
                                },
                                {
                                    label: 's-resize',
                                    value: 's-resize',
                                    icon: 'UIEditor.cursor.s-resize'
                                },
                                {
                                    label: 'w-resize',
                                    value: 'w-resize',
                                    icon: 'UIEditor.cursor.w-resize'
                                },
                                {
                                    label: 'ne-resize',
                                    value: 'ne-resize',
                                    icon: 'UIEditor.cursor.ne-resize'
                                },
                                {
                                    label: 'nw-resize',
                                    value: 'nw-resize',
                                    icon: 'UIEditor.cursor.nw-resize'
                                },
                                {
                                    label: 'se-resize',
                                    value: 'se-resize',
                                    icon: 'UIEditor.cursor.se-resize'
                                },
                                {
                                    label: 'sw-resize',
                                    value: 'sw-resize',
                                    icon: 'UIEditor.cursor.sw-resize'
                                },
                                {
                                    label: 'ew-resize',
                                    value: 'ew-resize',
                                    icon: 'UIEditor.cursor.ew-resize'
                                },
                                {
                                    label: 'ns-resize',
                                    value: 'ns-resize',
                                    icon: 'UIEditor.cursor.ns-resize'
                                },
                                {
                                    label: 'nesw-resize',
                                    value: 'nesw-resize',
                                    icon: 'UIEditor.cursor.nesw-resize'
                                },
                                {
                                    label: 'nwse-resize',
                                    value: 'nwse-resize',
                                    icon: 'UIEditor.cursor.nwse-resize'
                                },
                                {
                                    label: 'zoom-in',
                                    value: 'zoom-in',
                                    icon: 'UIEditor.cursor.zoom-in'
                                },
                                {
                                    label: 'zoom-out',
                                    value: 'zoom-out',
                                    icon: 'UIEditor.cursor.zoom-out'
                                },
                            ]
                        },
                    }
                ]
            },
            {
                displayName: uiEditor.getString('editor.property.listdropdown'),
                isVisible: function (selectViews) {
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
                            'background', 'border', 'padding', 'borderRadius', 'cursor', 'style', 'boxShadow'
                        ]
                    },
                    {
                        rule: 'ht.ui.ListView',
                        categoryId: 'ListView',
                        filter: [
                            'rowRenderer', 'labelColor', 'hoverLabelColor', 'selectLabelColor', 'unselectableLabelColor',
                            'labelFont', 'rowHeight', 'rowLineVisible', 'rowLineColor', 'rowLineSize', 'is:clipLastRowLine',
                            'pannable', 'iconGap', 'rowBackground', 'hoverRowBackground', 'selectRowBackground', 'focusRowBackground',
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
