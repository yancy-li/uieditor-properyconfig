export default function(uiEditor) {
    return {
        rule: 'ht.ui.Dialog',
        categories: [
            {
                displayName: uiEditor.getString('editor.property.baseproperty'),
                extends: [
                    {
                        rule: 'ht.ui.Panel',
                        categoryId: 'basic',
                        filter: ['id', 'background', 'border', 'borderRadius', 'is:collapsable', 'preferredSize', 'minSize', 'maxSize', 'boxShadow', 'viewGroupTemplate']
                    }
                ],
                properties: [
                    {
                        name: 'resizable',
                        displayName: uiEditor.getString('editor.property.resizable'),
                        type: 'boolean',
                        desc: uiEditor.getString('editor.property.desc.resizable')
                    },
                    {
                        name: 'is:modal',
                        displayName: uiEditor.getString('editor.property.modal'),
                        type: 'boolean',
                        desc: uiEditor.getString('editor.property.desc.modal')
                    },
                    {
                        name: 'maskBackground',
                        displayName: uiEditor.getString('editor.property.maskbackground'),
                        type: 'color',
                        desc: uiEditor.getString('editor.property.desc.maskbackground')
                    },
                    {
                        name: 'is:closable',
                        displayName: uiEditor.getString('editor.property.closable'),
                        type: 'boolean',
                        desc: uiEditor.getString('editor.property.desc.closable')   
                    },
                    {
                        name: 'is:maximizable',
                        displayName: uiEditor.getString('editor.property.maximizable'),
                        type: 'boolean',
                        desc: uiEditor.getString('editor.property.desc.maximizable')   
                    },
                    {
                        name: 'is:fixToCenter',
                        displayName: uiEditor.getString('editor.property.fixtocenter'),
                        type: 'boolean',
                        desc: uiEditor.getString('editor.property.desc.fixtocenter')   
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
                displayName: uiEditor.getString('toolkit.dialog'),
                extends: [
                    {
                        rule: 'ht.ui.Panel',
                        categoryId: 'panel',
                        // filter: ['headerHeight', 'is:headerVisible', 'headerBackground', 'hoverHeaderBackground', 'activeHeaderBackground', 
                        // 'title', 'titleFont', 'titleColor', 'hoverTitleColor', 'activeTitleColor', 'icon', 'iconWidth', 'iconHeight', 'tools', 
                        // 'toolWidth', 'toolHeight', 'contentPadding', 'expandIcon']
                    }
                ],
                properties: [
                    // {
                    //     displayName: uiEditor.getString('editor.property.closetoolindex'),
                    //     name: 'closeToolIndex',
                    //     type: 'int'
                    // },
                    {
                        displayName: uiEditor.getString('editor.property.closeicon'),
                        name: 'closeIcon',
                        type: 'drawable'
                    },
                    {
                        displayName: uiEditor.getString('editor.property.hovercloseicon'),
                        name: 'hoverCloseIcon',
                        type: 'drawable'
                    },
                    {
                        displayName: uiEditor.getString('editor.property.activecloseicon'),
                        name: 'activeCloseIcon',
                        type: 'drawable'
                    },
                    // {
                    //     displayName: uiEditor.getString('editor.property.maximizetoolindex'),
                    //     name: 'maximizeToolIndex',
                    //     type: 'int'
                    // },
                    {
                        displayName: uiEditor.getString('editor.property.maximizeicon'),
                        name: 'maximizeIcon',
                        type: 'drawable'
                    },
                    {
                        displayName: uiEditor.getString('editor.property.hovermaximizeicon'),
                        name: 'hoverMaximizeIcon',
                        type: 'drawable'
                    },
                    {
                        displayName: uiEditor.getString('editor.property.activemaximizeicon'),
                        name: 'activeMaximizeIcon',
                        type: 'drawable'
                    },
                    {
                        displayName: uiEditor.getString('editor.property.restoreicon'),
                        name: 'restoreIcon',
                        type: 'drawable'
                    },
                    {
                        displayName: uiEditor.getString('editor.property.hoverrestoreicon'),
                        name: 'hoverRestoreIcon',
                        type: 'drawable'
                    },
                    {
                        displayName: uiEditor.getString('editor.property.activerestoreicon'),
                        name: 'activeRestoreIcon',
                        type: 'drawable'
                    }
                ]
            }
        ]
    }
}