export default function(uiEditor) {
    return {
        rule: 'ht.ui.Palette',
        categories: [
            {
                displayName: uiEditor.getString('editor.property.baseproperty'),
                extends: [
                    {
                        rule: 'ht.ui.View',
                        categoryId: 'basic'
                    }
                ],
                properties: [
                    {
                        name: 'translateX',
                        displayName: uiEditor.getString('editor.property.translatex'),
                        type: 'int'
                    },
                    {
                        name: 'translateY',
                        displayName: uiEditor.getString('editor.property.translatey'),
                        type: 'int'
                    },
                    {
                        name: 'scrollBarMode',
                        displayName: uiEditor.getString('editor.property.scrollbarmode'),
                        type: 'enum',
                        editorParams: {
                            readOnly: true,
                            datas: [
                                {
                                    label: uiEditor.getString('editor.property.auto'),
                                    value: 'auto'
                                },
                                {
                                    label: uiEditor.getString('editor.property.on'),
                                value: 'on'
                            },
                            {
                                label: uiEditor.getString('editor.property.off'),
                                value: 'off'
                            },
                            {
                                label: uiEditor.getString('editor.property.scrollbarhidden'),
                                value: 'hidden'
                            }],
                        }
                    },
                    {
                        name: 'scrollBarColor',
                        displayName: uiEditor.getString('editor.property.scrollbarcolor'),
                        type: 'color'
                    },
                    {
                        name: 'scrollBarSize',
                        displayName: uiEditor.getString('editor.property.scrollbarsize'),
                        type: 'int'
                    }
                ]
            },
            {
                id: 'Palette',
                displayName: uiEditor.getString('toolkit.palette'),
                properties: [
                    {
                        displayName: uiEditor.getString('editor.property.dragenabled'),
                        name: 'dragEnabled',
                        type: 'boolean'
                    },
                    {
                        displayName: uiEditor.getString('editor.property.items'),
                        name: 'items',
                        type: 'paletteItems'
                    }
                ]
            },
            {
                displayName: uiEditor.getString('toolkit.palettepanel'),
                getValue: function (view, property) {
                    var templatePanel = view.getTemplatePanel();
                    return templatePanel[ht.Default.prefixGetter(property.name)]();
                },
                setValue: function (view, value, property) {
                    var templatePanel = view.getTemplatePanel();
                    templatePanel[ht.Default.prefixSetter(property.name)](value);
                },
                extends: [
                    {
                        rule: 'ht.ui.Panel',
                        categoryId: 'basic',
                        filter: [
                            'background'
                        ]
                    },
                    {
                        rule: 'ht.ui.Panel',
                        categoryId: 'panel',
                        filter: [
                            'headerHeight', 'is:headerVisible', 'headerBackground', 'hoverHeaderBackground', 'activeHeaderBackground',
                            'titleFont', 'titleColor', 'hoverTitleColor', 'activeTitleColor', 'iconWidth', 'iconHeight', 'tools', 'toolWidth', 'toolHeight',
                            'contentPadding', 'expandIcon', 'hoverExpandIcon', 'activeExpandIcon', 'collapseIcon', 'hoverCollapseIcon', 'activeCollapseIcon'
                        ]
                    }
                ]
            },
            {
                displayName: uiEditor.getString('toolkit.palettebutton'),
                getValue: function (view, property) {
                    var templateButton = view.getTemplateButton();
                    return templateButton[ht.Default.prefixGetter(property.name)]();
                },
                setValue: function (view, value, property) {
                    var templateButton = view.getTemplateButton();
                    templateButton[ht.Default.prefixSetter(property.name)](value);
                },
                extends: [
                    {
                        rule: 'ht.ui.View',
                        categoryId: 'basic',
                        filter: [
                            'background', 'border', 'padding', 'borderRadius', 
                            {
                                name: 'preferredSize',
                                displayName: uiEditor.getString('editor.property.preferredsize'),
                                type: 'string',
                                setValue: function(view, value, property) {
                                    view = view.getTemplateButton();
                                    if (value == null || value.trim() == '') {
                                        view.setPreferredSize(undefined);
                                    }
                                    else {
                                        value = value.split(',');
                                        var width = value[0];
                                        var height = value[1];
                                        if (width != undefined && width.trim() != '' && !isNaN(width)) {
                                            width = parseInt(width);
                                        }
                                        else {
                                            width = undefined;
                                        }
            
                                        if (height != undefined && height.trim() != '' && !isNaN(height)) {
                                            height = parseInt(height);
                                        }
                                        else {
                                            height = undefined;
                                        }
            
                                        view.setPreferredSize(width, height);
                                    }
                                },
                                getValue: function(view, property) {
                                    view = view.getTemplateButton();
                                    var preferredSize = view._preferredSize;
                                    if (preferredSize && view.isPreferredSizeSet()) {
                                        var str = '';
                                        var width = preferredSize.width,
                                            height = preferredSize.height;
                                        if (width != null) {
                                            str += width;
                                        }
                                        str += ',';
            
                                        if (height != null) {
                                            str += height;
                                        }
                                        return str;
                                    }
                                }
                            },
                             'boxShadow', 'disabled'
                        ]
                    },
                    {
                        rule: 'ht.ui.ToggleButton',
                        categoryId: 'togglebutton',
                        filter: [
                            'textFont', 'textColor', 'hoverTextColor', 'activeTextColor', 
                            'selectTextColor', 'selectHoverTextColor', 'selectActiveTextColor', 
                            'hTextPosition', 'vTextPosition', 
                            'hoverBackground', 'activeBackground','selectBackground','selectHoverBackground',
                            'selectActiveBackground','iconWidth', 'iconHeight', 'iconTextGap', 'iconStretch', 
                            'toolTipEnabled', 'is:pixelPerfect',
                            'align', 'vAlign'
                        ]
                    }
                ]
            }
        ]
    }
}
