export default function(uiEditor) {
    return {
        rule: 'ht.ui.GridLayout',
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
                displayName: uiEditor.getString('toolkit.gridlayout'),
                properties: [
                    {
                        name: 'gridHeight',
                        displayName: uiEditor.getString('editor.property.gridheight'),
                        type: 'int',
                        invalidateDesigner: true
                    },
                    {
                        name: 'columnCount',
                        type: 'int',
                        displayName: uiEditor.getString('editor.property.columncount'),
                        invalidateDesigner: true
                    },
                    {
                        name: 'gridGap',
                        type: 'int',
                        displayName: uiEditor.getString('editor.property.gridgap'),
                        invalidateDesigner: true
                    },
                    {
                        name: 'is:autoFlow',
                        type: 'boolean',
                        displayName: uiEditor.getString('editor.property.autoflow'),
                        invalidateDesigner: true
                    }
                ]
            }
        ]
    }
}