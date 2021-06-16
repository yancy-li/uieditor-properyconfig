export default function(uiEditor) {
    return {
        rule: 'ht.ui.HtmlView',
        categories: [{
                id: 'basic',
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
                id: 'HtmlView',
                displayName: uiEditor.getString('toolkit.htmlview'),
                properties: [
                    {
                        name: 'content',
                        displayName: uiEditor.getString('editor.property.htmlcontent'),
                        type: 'code',
                        editorParams: {
                            language: 'html'
                        }
                    },
                    {
                        name: 'contentFont',
                        displayName: uiEditor.getString('editor.property.contentfont'),
                        type: 'font'
                    },
                    {
                        name: 'contentColor',
                        displayName: uiEditor.getString('editor.property.contentcolor'),
                        type: 'color'
                    },
                    {
                        name: 'overflow',
                        displayName: uiEditor.getString('editor.property.overflow'),
                        type: 'simpleEnum',
                        editorParams: {
                            datas: [{
                                    text: uiEditor.getString('editor.property.hidden'),
                                    value: 'hidden'
                                },
                                {
                                    text: uiEditor.getString('editor.property.visible'),
                                    value: 'visible'
                                }
                            ]
                        }
                    },
                    {
                        name: 'is:autoRefreshPreferredSize',
                        displayName: uiEditor.getString('editor.property.autorefreshpreferredsize'),
                        type: 'boolean'
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
    };
}