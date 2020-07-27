export default function (uiEditor) {
    return {
        rule: 'ht.ui.TabLayout',
        categories: [{
                displayName: uiEditor.getString('editor.property.baseproperty'),
                extends: [{
                    rule: 'ht.ui.View',
                    categoryId: 'basic'
                }],
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
                    }
                ]
            },
            {
                name: 'TabLayout',
                displayName: uiEditor.getString('toolkit.tablayout'),
                properties: [{
                        name: 'tabPosition',
                        displayName: uiEditor.getString('editor.property.tabposition'),
                        type: 'enum',
                        editorParams: {
                            datas: [uiEditor.getString('editor.top'), uiEditor.getString('editor.bottom'), uiEditor.getString('editor.left'), uiEditor.getString('editor.right')],
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
                        name: 'tabGap',
                        displayName: uiEditor.getString('editor.property.tabgap'),
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
                        name: 'tabBackground',
                        displayName: uiEditor.getString('editor.property.tabbackground'),
                        type: 'drawable'
                    },
                    {
                        name: 'hoverTabBackground',
                        displayName: uiEditor.getString('editor.property.hovertabbackground'),
                        type: 'drawable'
                    },
                    {
                        name: 'activeTabBackground',
                        displayName: uiEditor.getString('editor.property.activetabbackground'),
                        type: 'drawable'
                    },
                    {
                        name: 'moveTabBackground',
                        displayName: uiEditor.getString('editor.property.movetabbackground'),
                        type: 'drawable'
                    },
                    {
                        name: 'insertLine',
                        displayName: uiEditor.getString('editor.property.insertline'),
                        type: 'drawable'
                    },
                    {
                        displayName: 'autoHideCloseIcon',
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