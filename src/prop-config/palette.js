export default function (uiEditor) {
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
                        displayName: uiEditor.getString('editor.property.checkmode'),
                        name: 'is:checkMode',
                        type: 'boolean'
                    },
                    {
                        displayName: uiEditor.getString('editor.property.dragenabled'),
                        name: 'is:dragEnabled',
                        type: 'boolean'
                    },
                    {
                        name: 'selectionMode',
                        displayName: uiEditor.getString('editor.property.selectionmode'),
                        type: 'simpleEnum',
                        editorParams: {
                            datas: [{
                                text: uiEditor.getString('editor.property.selection.single'),
                                value: 'single'
                            },
                            {
                                text: uiEditor.getString('editor.property.none'),
                                value: 'none'
                            }]
                        },
                    },
                    {
                        displayName: uiEditor.getString('editor.property.items'),
                        name: 'items',
                        type: 'paletteItems'
                    },
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
                            'background', "border",
                        ]
                    },
                    {
                        rule: 'ht.ui.Panel',
                        categoryId: 'panel',
                        filter: [
                            'headerHeight', 'is:headerVisible', 'headerBackground', 'hoverHeaderBackground', 'activeHeaderBackground', 'headerPaddingLeft', 'headerPaddingRight',
                            'titleFont', 'titleColor', 'hoverTitleColor', 'activeTitleColor', 'iconWidth', 'iconHeight', 'iconTitleGap', 'tools', 'toolWidth', 'toolHeight',
                            'contentPadding', 'expandIcon', 'hoverExpandIcon', 'activeExpandIcon', 'collapseIcon', 'hoverCollapseIcon', 'activeCollapseIcon'
                        ]
                    }
                ]
            },
            {
                displayName: uiEditor.getString('toolkit.palettecontent'),
                getValue: function (view, property) {
                    var templateContent = view.getTemplateContent();
                    return templateContent[ht.Default.prefixGetter(property.name)]();
                },
                setValue: function (view, value, property) {
                    var templateContent = view.getTemplateContent();
                    templateContent[ht.Default.prefixSetter(property.name)](value);
                },
                properties: [
                    {
                        displayName: uiEditor.getString('editor.property.itemwidth'),
                        name: 'itemWidth',
                        type: 'int'
                    },
                    {
                        displayName: uiEditor.getString('editor.property.itemheight'),
                        name: 'itemHeight',
                        type: 'int'
                    },
                    {
                        displayName: uiEditor.getString('editor.property.itemgap'),
                        name: 'itemGap',
                        type: 'int'
                    },
                    {
                        displayName: uiEditor.getString('editor.property.itemborderradius'),
                        name: 'itemBorderRadius',
                        type: 'string',
                        editorParams: {
                            placeholder: '10,1,1,1 or 10'
                        },
                        getValue: function (view) {
                            var templateContent = view.getTemplateContent();
                            var itemBorderRadius = templateContent.getItemBorderRadius();
                            if (itemBorderRadius != null) {
                                if (Array.isArray(itemBorderRadius)) {
                                    return itemBorderRadius.join(',');
                                }
                                else {
                                    return itemBorderRadius;
                                }
                            }
                        },
                        setValue: function (view, value) {
                            var templateContent = view.getTemplateContent();
                            if (value != null && value != '') {
                                if (typeof value === 'string' && value.indexOf(',') > 0) {
                                    var newValue = [];
                                    value = value.split(',');
                                    value.forEach(function (v) {
                                        newValue.push(parseInt(v))
                                    })
                                    templateContent.setItemBorderRadius(newValue)
                                }
                                else {
                                    templateContent.setItemBorderRadius(value);
                                }
                            }
                            else {
                                templateContent.setItemBorderRadius(null)
                            }
                        },
                    },
                    {
                        displayName: uiEditor.getString('editor.property.labelplacement'),
                        name: 'labelPlacement',
                        type: 'simpleEnum',
                        editorParams: {
                            datas: [{
                                text: uiEditor.getString('editor.vertical'),
                                value: 'vertical'
                            },
                            {
                                text: uiEditor.getString('editor.horizontal'),
                                value: 'horizontal'
                            }]
                        }
                    },
                    {
                        displayName: uiEditor.getString('editor.property.itemalign'),
                        name: 'itemAlign',
                        type: 'simpleEnum',
                        editorParams: {
                            datas: [{
                                text: uiEditor.getString('editor.left'),
                                value: 'left'
                            },
                            {
                                text: uiEditor.getString('editor.center'),
                                value: undefined
                            },
                            {
                                text: uiEditor.getString('editor.right'),
                                value: 'right'
                            }]
                        }
                    },
                    {
                        displayName: uiEditor.getString('editor.property.itemvalign'),
                        name: 'itemVAlign',
                        type: 'simpleEnum',
                        editorParams: {
                            datas: [{
                                text: uiEditor.getString('editor.top'),
                                value: 'top'
                            },
                            {
                                text: uiEditor.getString('editor.middle'),
                                value: undefined
                            },
                            {
                                text: uiEditor.getString('editor.bottom'),
                                value: 'bottom'
                            }]
                        }
                    },
                    {
                        displayName: uiEditor.getString('editor.property.itempadding'),
                        name: 'itemPadding',
                        type: 'int'
                    },
                    {
                        displayName: uiEditor.getString('editor.property.itembackground'),
                        name: 'itemBackground',
                        type: 'drawable'
                    },
                    {
                        displayName: uiEditor.getString('editor.property.hoveritembackground'),
                        name: 'hoverItemBackground',
                        type: 'drawable'
                    },
                    {
                        displayName: uiEditor.getString('editor.property.activeitembackground'),
                        name: 'activeItemBackground',
                        type: 'drawable'
                    },
                    {
                        displayName: uiEditor.getString('editor.property.disableditembackground'),
                        name: 'disabledItemBackground',
                        type: 'drawable'
                    },
                    {
                        displayName: uiEditor.getString('editor.property.selectitembackground'),
                        name: 'selectItemBackground',
                        type: 'drawable'
                    },
                    {
                        displayName: uiEditor.getString('editor.property.selecthoveritembackground'),
                        name: 'selectHoverItemBackground',
                        type: 'drawable'
                    },
                    {
                        displayName: uiEditor.getString('editor.property.selectactiveitembackground'),
                        name: 'selectActiveItemBackground',
                        type: 'drawable'
                    },
                    {
                        displayName: uiEditor.getString('editor.property.selectdisableditembackground'),
                        name: 'selectDisabledItemBackground',
                        type: 'drawable'
                    },
                    {
                        displayName: uiEditor.getString('editor.property.checkitembackground'),
                        name: 'checkItemBackground',
                        type: 'drawable'
                    },
                    {
                        displayName: uiEditor.getString('editor.property.checkhoveritembackground'),
                        name: 'checkHoverItemBackground',
                        type: 'drawable'
                    },
                    {
                        displayName: uiEditor.getString('editor.property.checkactiveitembackground'),
                        name: 'checkActiveItemBackground',
                        type: 'drawable'
                    },
                    {
                        displayName: uiEditor.getString('editor.property.checkdisableditembackground'),
                        name: 'checkDisabledItemBackground',
                        type: 'drawable'
                    },
                    {
                        name: 'checkMask',
                        type: 'drawable',
                        displayName: uiEditor.getString('editor.property.checkmask')
                    },
                    {
                        name: 'disabledCheckMask',
                        type: 'drawable',
                        displayName: uiEditor.getString('editor.property.disabledcheckmask')
                    },
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
                        displayName: uiEditor.getString('editor.property.iconstretch'),
                        name: 'iconStretch',
                        type: 'enum',
                        editorParams: {
                            datas: [uiEditor.getString('editor.property.stretch.fill'), uiEditor.getString('editor.property.stretch.uniform'),
                            uiEditor.getString('editor.property.stretch.centeruniform'), uiEditor.getString('editor.property.stretch.center'), null],
                        }
                    },
                    {
                        displayName: uiEditor.getString('editor.property.icontextgap'),
                        name: 'iconTextGap',
                        type: 'int'
                    },
                    {
                        displayName: uiEditor.getString('editor.property.icontint'),
                        name: 'iconTint',
                        type: 'color'
                    },
                    {
                        displayName: uiEditor.getString('editor.property.hovericontint'),
                        name: 'hoverIconTint',
                        type: 'color'
                    },
                    {
                        displayName: uiEditor.getString('editor.property.activeicontint'),
                        name: 'activeIconTint',
                        type: 'color'
                    },
                    {
                        displayName: uiEditor.getString('editor.property.disabledicontint'),
                        name: 'disabledIconTint',
                        type: 'color'
                    },
                    {
                        displayName: uiEditor.getString('editor.property.selecticontint'),
                        name: 'selectIconTint',
                        type: 'color'
                    },
                    {
                        displayName: uiEditor.getString('editor.property.selecthovericontint'),
                        name: 'selectHoverIconTint',
                        type: 'color'
                    },
                    {
                        displayName: uiEditor.getString('editor.property.selectactiveicontint'),
                        name: 'selectActiveIconTint',
                        type: 'color'
                    },
                    {
                        displayName: uiEditor.getString('editor.property.selectdisabledicontint'),
                        name: 'selectDisabledIconTint',
                        type: 'color'
                    },
                    {
                        displayName: uiEditor.getString('editor.property.checkicontint'),
                        name: 'checkIconTint',
                        type: 'color'
                    },
                    {
                        displayName: uiEditor.getString('editor.property.checkhovericontint'),
                        name: 'checkHoverIconTint',
                        type: 'color'
                    },
                    {
                        displayName: uiEditor.getString('editor.property.checkactiveicontint'),
                        name: 'checkActiveIconTint',
                        type: 'color'
                    },
                    {
                        displayName: uiEditor.getString('editor.property.checkdisabledicontint'),
                        name: 'checkDisabledIconTint',
                        type: 'color'
                    },
                    {
                        displayName: uiEditor.getString('editor.property.textfont'),
                        name: 'textFont',
                        type: 'font'
                    },
                    {
                        displayName: uiEditor.getString('editor.property.textcolor'),
                        name: 'textColor',
                        type: 'color'
                    },
                    {
                        displayName: uiEditor.getString('editor.property.selecttextcolor'),
                        name: 'selectTextColor',
                        type: 'color'
                    },
                    {
                        displayName: uiEditor.getString('editor.property.checktextcolor'),
                        name: 'checkTextColor',
                        type: 'color'
                    },
                    {
                        displayName: uiEditor.getString('editor.property.disabledtextcolor'),
                        name: 'disabledTextColor',
                        type: 'color'
                    },
                    {
                        displayName: uiEditor.getString('editor.property.selectdisabledtextcolor'),
                        name: 'selectDisabledTextColor',
                        type: 'color'
                    },
                    {
                        displayName: uiEditor.getString('editor.property.checkdisabledtextcolor'),
                        name: 'checkDisabledTextColor',
                        type: 'color'
                    },
                ]
            }
        ]
    }
}
