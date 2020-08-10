export default function(uiEditor) {
    return {
        rule: 'ht.ui.Menu',
        categories: [{
                displayName: uiEditor.getString('editor.property.baseproperty'),
                extends: [{
                    rule: 'ht.ui.View',
                    categoryId: 'basic'
                }]
            },
            {
                displayName: uiEditor.getString('toolkit.menu'),
                properties: [{
                    displayName: uiEditor.getString('editor.property.menuitems'),
                    name: 'items',
                    type: 'menuItems',
                    editorParams: {
                        columns: [
                            {
                                class: 'ht.uieditor.ResourceColumn',
                                displayName: uiEditor.getString('editor.property.icon'),
                                name: 'icon',
                                editable: true,
                                accessType: 'attr',
                            },
                            {
                                displayName: uiEditor.getString('editor.property.type'),
                                class: 'ht.ui.EnumColumn',
                                name: 'type',
                                valueField: 'value',
                                displayField: 'label',
                                accessType: 'attr',
                                editable: true,
                                strict: false,
                                datas: [
                                    {
                                        value: null,
                                        label: uiEditor.getString('editor.string'),
                                    },
                                    {
                                        value: '-',
                                        label: uiEditor.getString('editor.property.menuseparator')
                                    },
                                    {
                                        value: 'radio',
                                        label: uiEditor.getString('toolkit.radiobutton')
                                    },
                                    {
                                        value: 'check',
                                        label: uiEditor.getString('toolkit.checkbox')
                                    },
    
                                ]
                            },
                            {
                                class: 'ht.ui.Column',
                                displayName: uiEditor.getString('editor.property.groupid'),
                                name: 'groupId',
                                accessType: 'attr',
                                editable: true,
                                editorClass: 'ht.ui.editor.StringEditor',
                            },
                            {
                                class: 'ht.ui.Column',
                                displayName: uiEditor.getString('editor.property.disabled'),
                                name: 'disabled',
                                accessType: 'attr',
                                valueType: 'boolean',
                                editable: true
                            }
                        ],
                        hierarchic: true
                    }
                },
                {
                    displayName: uiEditor.getString('editor.property.gap'),
                    name: 'gap',
                    type: 'int'
                },
                {
                    displayName: uiEditor.getString('editor.property.labelfont'),
                    name: 'labelFont', 
                    type: 'font'
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
                    displayName: uiEditor.getString('editor.property.labelcolor'),
                    name: 'labelColor',
                    type: 'color'
                },
                {
                    displayName: uiEditor.getString('editor.property.hoverlabelcolor'),
                    name: 'hoverLabelColor',
                    type: 'color'
                },
                {
                    displayName: uiEditor.getString('editor.property.activelabelcolor'),
                    name: 'activeLabelColor',
                    type: 'color'
                },
                {
                    displayName: uiEditor.getString('editor.property.hoveritembackground'),
                    name: 'hoverItemBackground',
                    type: 'drawable'
                },
                {
                    displayName: uiEditor.getString('editor.property.activeitembackground'),
                    name: 'activeItemBackground',
                    type: 'drawable'
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