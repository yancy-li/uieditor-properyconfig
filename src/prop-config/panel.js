export default function(uiEditor) {
    return {
        rule: 'ht.ui.Panel',
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
                displayName: uiEditor.getString('toolkit.panel'),
                properties: [
                    {
                        displayName: uiEditor.getString('editor.property.headerheight'),
                        name: 'headerHeight',
                        type: 'int'
                    },
                    {
                        displayName: uiEditor.getString('editor.property.headervisible'),
                        name: 'is:headerVisible',
                        type: 'boolean'
                    },
                    {
                        displayName: uiEditor.getString('editor.property.headerbackground'),
                        name: 'headerBackground',
                        type: 'drawable'
                    },
                    {
                        displayName: uiEditor.getString('editor.property.hoverheaderbackground'),
                        name: 'hoverHeaderBackground',
                        type: 'drawable'
                    },
                    {
                        displayName: uiEditor.getString('editor.property.activeheaderbackground'),
                        name: 'activeHeaderBackground',
                        type: 'drawable'
                    },
                    {
                        displayName: uiEditor.getString('editor.property.title'),
                        name: 'title',
                        type: 'string'
                    },
                    {
                        displayName: uiEditor.getString('editor.property.titlefont'),
                        name: 'titleFont',
                        type: 'font'
                    },
                    {
                        displayName: uiEditor.getString('editor.property.titlecolor'),
                        name: 'titleColor',
                        type: 'color'
                    },
                    {
                        displayName: uiEditor.getString('editor.property.hovertitlecolor'),
                        name: 'hoverTitleColor',
                        type: 'color'
                    },
                    {
                        displayName: uiEditor.getString('editor.property.activetitlecolor'),
                        name: 'activeTitleColor',
                        type: 'color'
                    },
                    {
                        displayName: uiEditor.getString('editor.property.icon'),
                        name: 'icon',
                        type: 'drawable'
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
                        displayName: uiEditor.getString('editor.property.tools'),
                        name: 'tools',
                        type: 'panelTools'
                    },
                    {
                        displayName: uiEditor.getString('editor.property.toolwidth'),
                        name: 'toolWidth',
                        type: 'int'
                    },
                    {
                        displayName: uiEditor.getString('editor.property.toolheight'),
                        name: 'toolHeight',
                        type: 'int'
                    },
                    {
                        displayName: uiEditor.getString('editor.property.contentpadding'),
                        name: 'contentPadding',
                        type: 'padding'
                    },
                    {
                        displayName: uiEditor.getString('editor.property.collapsable'),
                        name: 'is:collapsable',
                        type: 'boolean'
                    },
                    {
                        displayName: uiEditor.getString('editor.property.expandicon'),
                        name: 'expandIcon',
                        type: 'drawable'
                    },
                    {
                        displayName: uiEditor.getString('editor.property.hoverexpandicon'),
                        name: 'hoverExpandIcon',
                        type: 'drawable'
                    },
                    {
                        displayName: uiEditor.getString('editor.property.activeexpandicon'),
                        name: 'activeExpandIcon',
                        type: 'drawable'
                    },
                    {
                        displayName: uiEditor.getString('editor.property.collapseicon'),
                        name: 'collapseIcon',
                        type: 'drawable'
                    },
                    {
                        displayName: uiEditor.getString('editor.property.hovercollapseicon'),
                        name: 'hoverCollapseIcon',
                        type: 'drawable'
                    },
                    {
                        displayName: uiEditor.getString('editor.property.activecollapseicon'),
                        name: 'activeCollapseIcon',
                        type: 'drawable'
                    }
                ]
            }
        ]
    }
}