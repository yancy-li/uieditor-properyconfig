export default function (uiEditor) {
    return {
        rule: 'ContextMenuForViews',
        categories: [
            {
            id: 'contextmenu',
            displayName: uiEditor.getString('editor.property.contextmenu'),
            getValue: function (view, property, checkValueChanged) {
                var contextMenu = view.getContextMenu();
                if (checkValueChanged) {
                    var contextMenu = view.getContextMenu() || view._contextMenuCache;
                    if (contextMenu == null) {
                        contextMenu = view._contextMenuCache = new ht.ui.ContextMenu();
                    }
                    
                    return contextMenu[ht.Default.prefixGetter(property.name)]();
                }
                else {
                    if (contextMenu == null) {
                        return undefined;
                    }
                    else {
                        return contextMenu[ht.Default.prefixGetter(property.name)]();
                    }
                }
            },
            setValue: function (view, value, property) {
                var contextMenu = view.getContextMenu();
                if (property.name === 'items') {
                    if (value == null) {
                        if (contextMenu) {
                            contextMenu = null;
                            view.setContextMenu(null);
                        }
                    }
                    else {
                        if (!contextMenu) {
                            contextMenu = new ht.ui.ContextMenu();
                            view.setContextMenu(contextMenu);
                        }
                    }
                }
                
                if (contextMenu)
                    contextMenu[ht.Default.prefixSetter(property.name)](value);
            },
            properties: [{
                    name: 'items',
                    displayName: uiEditor.getString('editor.property.items'),
                    type: 'menuItems',
                    editorParams: {
                        columns: [
                            {
                                class: 'ht.uieditor.ResourceColumn',
                                displayName: uiEditor.getString('editor.property.icon'),
                                name: 'icon',
                                editable: true,
                                accessType: 'attr',
                            },
                            {
                                displayName: uiEditor.getString('editor.property.type'),
                                class: 'ht.ui.EnumColumn',
                                name: 'type',
                                valueField: 'value',
                                displayField: 'label',
                                accessType: 'attr',
                                editable: true,
                                strict: false,
                                datas: [
                                    {
                                        value: null,
                                        label: uiEditor.getString('editor.string'),
                                    },
                                    {
                                        value: '-',
                                        label: uiEditor.getString('editor.property.menuseparator')
                                    },
                                    {
                                        value: 'radio',
                                        label: uiEditor.getString('toolkit.radiobutton')
                                    },
                                    {
                                        value: 'check',
                                        label: uiEditor.getString('toolkit.checkbox')
                                    },
    
                                ]
                            },
                            {
                                class: 'ht.ui.Column',
                                displayName: uiEditor.getString('editor.property.groupid'),
                                name: 'groupId',
                                accessType: 'attr',
                                editable: true,
                                editorClass: 'ht.ui.editor.StringEditor',
                            },
                            {
                                class: 'ht.ui.Column',
                                displayName: uiEditor.getString('editor.property.disabled'),
                                name: 'disabled',
                                accessType: 'attr',
                                valueType: 'boolean',
                                editable: true
                            }
                        ],
                        hierarchic: true
                    }
                },
                {
                    name: 'rowHeight',
                    type: 'int',
                    displayName: uiEditor.getString('editor.property.rowheight')
                },
                {
                    name: 'gapLeft',
                    displayName: uiEditor.getString('editor.property.gapleft'),
                    type: 'int'
                },
                {
                    name: 'gapRight',
                    displayName: uiEditor.getString('editor.property.gapright'),
                    type: 'int'
                },
                {
                    name: 'hoverRowBackground',
                    displayName: uiEditor.getString('editor.property.hoverrowbackground'),
                    type: 'drawable'
                },
                {
                    name: 'separatorColor',
                    displayName: uiEditor.getString('editor.property.separatorcolor'),
                    type: 'color'
                },
                {
                    name: 'separatorSize',
                    displayName: uiEditor.getString('editor.property.separatorsize'),
                    type: 'int'
                },
                {
                    name: 'prefixWidth',
                    displayName: uiEditor.getString('editor.property.prefixwidth'),
                    type: 'int'
                },
                {
                    name: 'prefixGapRight',
                    displayName: uiEditor.getString('editor.property.prefixgapright'),
                    type: 'int'
                },
                {
                    name: 'iconWidth',
                    displayName: uiEditor.getString('editor.property.iconwidth'),
                    type: 'int'
                },
                {
                    name: 'iconGapRight',
                    displayName: uiEditor.getString('editor.property.icongapright'),
                    type: 'int'
                },
                {
                    name: 'labelFont',
                    displayName: uiEditor.getString('editor.property.labelfont'),
                    type: 'font'
                },
                {
                    name: 'labelColor',
                    displayName: uiEditor.getString('editor.property.labelcolor'),
                    type: 'color'
                },
                {
                    name: 'hoverLabelColor',
                    displayName: uiEditor.getString('editor.property.hoverlabelcolor'),
                    type: 'color'
                },
                {
                    name: 'disabledLabelColor',
                    displayName: uiEditor.getString('editor.property.disabledlabelcolor'),
                    type: 'color'
                },
                {
                    name: 'labelGapRight',
                    displayName: uiEditor.getString('editor.property.labelgapright'),
                    type: 'int'
                },
                {
                    name: 'suffixGapRight',
                    displayName: uiEditor.getString('editor.property.suffixgapright'),
                    type: 'int'
                },
                {
                    name: 'indicatorIcon',
                    displayName: uiEditor.getString('editor.property.indicatoricon'),
                    type: 'drawable'
                },
                {
                    name: 'indicatorWidth',
                    displayName: uiEditor.getString('editor.property.indicatorwidth'),
                    type: 'int'
                },
                {
                    name: 'indicatorColor',
                    displayName: uiEditor.getString('editor.property.indicatorcolor'),
                    type: 'color'
                },
                {
                    name: 'hoverIndicatorColor',
                    displayName: uiEditor.getString('editor.property.hoverindicatorcolor'),
                    type: 'color'
                },
                {
                    name: 'radioOnIcon',
                    displayName: uiEditor.getString('editor.property.radioonicon'),
                    type: 'drawable'
                },
                {
                    name: 'radioOffIcon',
                    displayName: uiEditor.getString('editor.property.radioofficon'),
                    type: 'drawable'
                },
                {
                    name: 'checkIcon',
                    displayName: uiEditor.getString('editor.property.checkicon'),
                    type: 'drawable'
                },
                {
                    name: 'uncheckIcon',
                    displayName: uiEditor.getString('editor.property.uncheckicon'),
                    type: 'drawable'
                },
                {
                    name: 'shortcutEnabled',
                    displayName: uiEditor.getString('editor.property.shortcutenabled'),
                    type: 'boolean'
                },
                {
                    name: 'scrollUpIndicator',
                    displayName: uiEditor.getString('editor.property.scrollupindicator'),
                    type: 'drawable',
                    editorParams: {
                        contextMenuScrollIndicatorDrawableVisible: true
                    }
                },
                {
                    name: 'scrollDownIndicator',
                    displayName: uiEditor.getString('editor.property.scrolldownindicator'),
                    type: 'drawable',
                    editorParams: {
                        contextMenuScrollIndicatorDrawableVisible: true
                    }
                },
                {
                    name: 'disabledScrollUpIndicator',
                    displayName: uiEditor.getString('editor.property.disabledscrollupindicator'),
                    type: 'drawable',
                    editorParams: {
                        contextMenuScrollIndicatorDrawableVisible: true
                    }
                },
                {
                    name: 'disabledScrollDownIndicator',
                    displayName: uiEditor.getString('editor.property.disabledscrolldownindicator'),
                    type: 'drawable',
                    editorParams: {
                        contextMenuScrollIndicatorDrawableVisible: true
                    }
                },
                {
                    name: 'scrollIndicatorHeight',
                    displayName: uiEditor.getString('editor.property.scrollindicatorheight'),
                    type: 'int'
                },
            ]
        }]
    }
}