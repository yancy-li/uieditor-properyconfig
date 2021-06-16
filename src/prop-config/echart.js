export default function(uiEditor) {
    return {
        rule: 'ht.ui.EChartView',
        categories: [{
                id: 'basic',
                displayName: uiEditor.getString('editor.property.baseproperty'),
                extends: [{
                    rule: 'ht.ui.View',
                    categoryId: 'basic'
                }]
            },
            {
                id: 'EChartView',
                displayName: uiEditor.getString('toolkit.echartview'),
                properties: [
                    {
                        name: 'option',
                        displayName: uiEditor.getString('editor.property.option'),
                        type: 'code',
                        editorParams: {
                            language: 'json'
                        }
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