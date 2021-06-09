export default function(uiEditor) {
    return {
        rule: 'ht.ui.UIVectorView',
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
                displayName: uiEditor.getString('toolkit.uigraphview'),
                properties: [
                    {
                        name: 'is:gvAutoFitContent',
                        displayName: uiEditor.getString('editor.property.gvautofitcontent'),
                        type: 'boolean'
                    },
                    {
                        name: 'gvPannable',
                        displayName: uiEditor.getString('editor.property.gvpannable'),
                        type: 'boolean'
                    },
                    {
                        name: 'nodeSelectable',
                        displayName: uiEditor.getString('editor.property.nodeselectable'),
                        type: 'boolean'
                    },
                    {
                        name: 'gvZoomable',
                        displayName: uiEditor.getString('editor.property.gvzoomable'),
                        type: 'boolean'
                    },
                    {
                        name: 'gvScrollBarVisible',
                        displayName: uiEditor.getString('editor.property.gvscrollbarvisible'),
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
    }
}