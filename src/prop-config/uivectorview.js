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
                id: 'uivectorview',
                displayName: uiEditor.getString('toolkit.uivectorview'),
                properties: [
                    {
                        name: 'url',
                        displayName: uiEditor.getString('editor.property.url'),
                        type: 'urlResource',
                        editorParams: {
                            readOnly: true
                        }
                    },
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
            }
        ]
    }
}