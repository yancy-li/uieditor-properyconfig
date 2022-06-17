export default function(uiEditor) {
    return {
        rule: 'ht.ui.RefViewGroup',
        categories: [
            {
                displayName: uiEditor.getString('editor.property.baseproperty'),
                extends: [
                    {
                        rule: 'ht.ui.View',
                        categoryId: 'basic',
                        filter: [
                            {
                                name: 'id',
                                displayName: uiEditor.getString('editor.id'),
                                type: 'string',
                                desc: uiEditor.getString('editor.id'),
                            },
                            'borderRadius',
                            'boxShadow',
                            'focusable',
                            'is:visible',
                        ]
                    }
                ],
                properties: [
                    {
                        name: 'is:autoCloseChildrenPopup',
                        displayName: uiEditor.getString('editor.property.autoclosechildrenpopup'),
                        type: 'boolean'
                    },
                    {
                        name: 'editor_previewurl',
                        displayName: uiEditor.getString('editor.property.editor_previewurl'),
                        type: 'string',
    
                        setValue: function(view, value, property) {
                            view.a('editor_previewurl', value);
                        },
                        getValue: function(view, property) {
                            return view.a('editor_previewurl');
                        },
                        isVisible: function (views) {
                            var visible = false;
                            if (views.length === 1) {
                                var view = views[0];
                                if (view.getParent() && view.getParent().getClassName() === 'ht.uieditor.Designer') {
                                    visible = true;
                                }
                            }
                            return visible;
                        }
                    }
                ]
            },
            {
                name: 'RefViewGroup',
                displayName: uiEditor.getString('toolkit.refviewgroup'),
                properties: [
                    {
                        name: 'url',
                        displayName: uiEditor.getString('editor.property.url'),
                        type: 'slotResource'
                    }
                ],
                extends: [
                    {
                        rule: 'ht.ui.ListView',
                        categoryId: 'ListView',
                        filter: [
                            'dropdownFunc'
                        ]
                    },
                    {
                        rule: 'ht.ui.Button',
                        categoryId: 'Button',
                        filter: [
                            'dropdownFunc', 'pageFunc'
                        ]
                    },
                    {
                        rule: 'ht.ui.ColorPane',
                        categoryId: 'ColorPane',
                        filter: [
                            'dropdownFunc'
                        ]
                    },
                    {
                        rule: 'ht.ui.DateTimePane',
                        categoryId: 'DateTimePane',
                        filter: [
                            'dropdownFunc'
                        ]
                    },
                    {
                        rule: 'ht.ui.NumberInput',
                        categoryId: 'NumberInput',
                        filter: [
                            'pageFunc'
                        ]
                    }
                ]
            }
        ]
    }
}