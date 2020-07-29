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
            },
            {
                displayName: uiEditor.getString('editor.property.contextmenu'),
                extends: [
                    {
                        rule: 'ContextMenuForViews',
                        categoryId: 'contextmenu'
                    }
                ]
            }
        ]
    }
}