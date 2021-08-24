export default function(uiEditor) {
    return {
        rule: 'ht.ui.Pagination',
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
                displayName: uiEditor.getString('toolkit.pagination'),
                properties: [
                    {
                        name: 'rowsPerPage',
                        displayName: uiEditor.getString('editor.property.rowsperpage'),
                        type: 'int'
                    },
                    {
                        name: 'currentPage',
                        displayName: uiEditor.getString('editor.property.currentpage'),
                        type: 'int'
                    },
                    {
                        name: 'rowCount',
                        displayName: uiEditor.getString('editor.property.rowcount'),
                        type: 'int'
                    },
                    {
                        name: 'hintText',
                        displayName: uiEditor.getString('editor.property.hinttext'),
                        type: 'string'
                    },
                ]
            }
        ]
    }
}