export default function (uiEditor) {
    return {
        rule: 'ht.ui.TabLayout',
        categories: [{
                id: 'basic',
                displayName: uiEditor.getString('editor.property.baseproperty'),
                extends: [{
                    rule: 'ht.ui.View',
                    categoryId: 'basic'
                }],
                properties: [{
                        name: 'tabrouter',
                        displayName: uiEditor.getString('editor.property.tabrouter'),
                        type: 'boolean',
                        setValue: function(view, value, property) {
                            if (value) {
                                view.a('routerView', 'tab');
                            }
                            else {
                                view.a('routerView', null);
                            }
                        },
                        getValue: function(view, property) {
                            return !!view.a('routerView');
                        }
                    }
                ]
            },
            {
                id: 'TabLayout',
                name: 'TabLayout',
                displayName: uiEditor.getString('toolkit.tablayout'),
                properties: [
                    {
                        name: 'tabHeight',
                        displayName: uiEditor.getString('editor.property.tabheight'),
                        type: 'int'
                    },
                    
                    {
                        name: 'tabPosition',
                        displayName: uiEditor.getString('editor.property.tabposition'),
                        type: 'enum',
                        editorParams: {
                            datas: [
                                {
                                    label: uiEditor.getString('editor.property.topcenter'),
                                    value: 'top-center'
                                },
                                {
                                    label: uiEditor.getString('editor.top'),
                                    value: 'top'
                                },
                                {
                                    label: uiEditor.getString('editor.bottom'),
                                    value: 'bottom'
                                },
                                {
                                    label: uiEditor.getString('editor.left'),
                                    value: 'left'
                                },
                                {
                                    label: uiEditor.getString('editor.right'),
                                    value: 'right'
                                }
                            ],
                            valueField: 'value',
                            readOnly: true
                        }
                    },
                    {
                        name: 'tabWidth',
                        displayName: uiEditor.getString('editor.property.tabwidth'),
                        type: 'int'
                    },
                    {
                        name: 'is:movable',
                        displayName: uiEditor.getString('editor.property.movable'),
                        type: 'boolean'
                    },
                    {
                        name: 'tabPadding',
                        displayName: uiEditor.getString('editor.property.tabpadding'),
                        type: 'int'
                    },
                    {
                        name: 'tabGap',
                        displayName: uiEditor.getString('editor.property.tabgap'),
                        type: 'int'
                    },
                    {
                        name: 'tabGapTop',
                        displayName: uiEditor.getString('editor.property.tabgaptop'),
                        type: 'int'
                    },
                    {
                        name: 'tabGapBottom',
                        displayName: uiEditor.getString('editor.property.tabgapbottom'),
                        type: 'int'
                    },
                    {
                        name: 'titleFont',
                        displayName: uiEditor.getString('editor.property.titlefont'),
                        type: 'font'
                    },
                    {
                        name: 'titleColor',
                        displayName: uiEditor.getString('editor.property.titlecolor'),
                        type: 'color'
                    },
                    {
                        name: 'hoverTitleColor',
                        displayName: uiEditor.getString('editor.property.hovertitlecolor'),
                        type: 'color'
                    },
                    {
                        name: 'activeTitleColor',
                        displayName: uiEditor.getString('editor.property.activetitlecolor'),
                        type: 'color'
                    },
                    {
                        name: 'activeViewIndex',
                        displayName: uiEditor.getString('editor.property.activeviewindex'),
                        type: 'int'
                    },
                    {
                        name: 'moveTitleColor',
                        displayName: uiEditor.getString('editor.property.movetitlecolor'),
                        type: 'color'
                    },
                    {
                        name: 'iconWidth',
                        displayName: uiEditor.getString('editor.property.iconwidth'),
                        type: 'int'
                    },
                    {
                        name: 'iconHeight',
                        displayName: uiEditor.getString('editor.property.iconheight'),
                        type: 'int'
                    },
                    {
                        displayName: uiEditor.getString('editor.property.icontitlegap'),
                        name: 'iconTitleGap',
                        type: 'int'
                    },
                    {
                        name: 'closeIcon',
                        displayName: uiEditor.getString('editor.property.closeicon'),
                        type: 'drawable'
                    },
                    {
                        name: 'hoverCloseIcon',
                        displayName: uiEditor.getString('editor.property.hovercloseicon'),
                        type: 'drawable'
                    },
                    {
                        name: 'activeCloseIcon',
                        displayName: uiEditor.getString('editor.property.activecloseicon'),
                        type: 'drawable'
                    },
                    {
                        name: 'tabHeaderBackground',
                        displayName: uiEditor.getString('editor.property.tabheaderbackground'),
                        type: 'drawable'
                    },
                    {
                        name: 'tabHeaderLineColor',
                        displayName: uiEditor.getString('editor.property.tabheaderlinecolor'),
                        type: 'color'
                    },
                    {
                        name: 'tabHeaderLineSize',
                        displayName: uiEditor.getString('editor.property.tabheaderlinesize'),
                        type: 'int'
                    },
                    {
                        name: 'tabHeaderPaddingLeft',
                        displayName: uiEditor.getString('editor.property.tabheaderpaddingleft'),
                        type: 'int'
                    },
                    {
                        name: 'tabHeaderPaddingRight',
                        displayName: uiEditor.getString('editor.property.tabheaderpaddingright'),
                        type: 'int'
                    },
                    {
                        name: 'tabBackground',
                        displayName: uiEditor.getString('editor.property.tabbackground'),
                        type: 'drawable',
                        editorParams: {
                            tabBackgroundLineDrawableVisible: true
                        }
                    },
                    {
                        name: 'hoverTabBackground',
                        displayName: uiEditor.getString('editor.property.hovertabbackground'),
                        type: 'drawable',
                        editorParams: {
                            tabBackgroundLineDrawableVisible: true
                        }
                    },
                    {
                        name: 'activeTabBackground',
                        displayName: uiEditor.getString('editor.property.activetabbackground'),
                        type: 'drawable',
                        editorParams: {
                            tabBackgroundLineDrawableVisible: true
                        }
                    },
                    {
                        name: 'moveTabBackground',
                        displayName: uiEditor.getString('editor.property.movetabbackground'),
                        type: 'drawable',
                        editorParams: {
                            tabBackgroundLineDrawableVisible: true
                        }
                    },
                    {
                        name: 'insertLine',
                        displayName: uiEditor.getString('editor.property.insertline'),
                        type: 'drawable'
                    },
                    {
                        displayName: uiEditor.getString('editor.property.closeiconx'),
                        name: 'closeIconX',
                        type: 'number'
                    },
                    {
                        displayName: uiEditor.getString('editor.property.closeicony'),
                        name: 'closeIconY',
                        type: 'number'
                    },
                    {
                        displayName: uiEditor.getString('editor.property.autohidecloseicon'),
                        name: 'is:autoHideCloseIcon',
                        type: 'boolean'
                    },
                    {
                        name: 'toolWidth',
                        displayName: uiEditor.getString('editor.property.toolwidth'),
                        type: 'int'
                    },
                    {
                        name: 'toolHeight',
                        displayName: uiEditor.getString('editor.property.toolheight'),
                        type: 'int'
                    },
                    {
                        name: 'toolGap',
                        displayName: uiEditor.getString('editor.property.toolgap'),
                        type: 'int'
                    }
                ]
            }
        ]
    }
}