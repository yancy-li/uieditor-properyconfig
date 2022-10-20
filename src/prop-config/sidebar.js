export default function(uiEditor) {
    return {
        rule: 'ht.ui.Sidebar',
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
                displayName: uiEditor.getString('toolkit.sidebar'),
                properties: [
                    {
                        displayName: uiEditor.getString('editor.property.expandall'),
                        type: 'boolean',
                        getValue: function(view, property) {
                            return view._expandAllFlag;
                        },
                        setValue: function(view, value, property) {
                            if (!view._expandAllFlag) {
                                view.getAccordionTree().expandAll()
                                view._expandAllFlag = true;
                            }
                            else {
                                view.getAccordionTree().collapseAll()
                                view._expandAllFlag = false;
                            }
                        }
                    },
                    {
                        displayName: uiEditor.getString('editor.property.listdatas'),
                        name: 'listDatas',
                        type: 'datas',
                        editorParams: {
                            'columns': [
                                {
                                    className: 'ht.uieditor.ResourceColumn',
                                    displayName: uiEditor.getString('editor.property.icon'),
                                    name: 'icon',
                                    accessType: 'style',
                                    editable: true,
                                    sortable: false
                                },
                                {
                                    className: 'ht.uieditor.ResourceColumn',
                                    displayName: uiEditor.getString('editor.property.selecticon'),
                                    name: 'selectIcon',
                                    accessType: 'style',
                                    editable: true,
                                    sortable: false
                                },
                                {
                                    className: 'ht.ui.Column',
                                    displayName: uiEditor.getString('editor.property.customattr1'),
                                    name: 'name',
                                    editable: true,
                                    editorClass: 'ht.ui.editor.StringEditor',
                                    accessType: 'attr',
                                    sortable: false
                                }
                            ],
                            hierarchic: true
                        }
                    },
                    {
                        name: 'headerBackground',
                        displayName: uiEditor.getString('editor.property.headerbackground'),
                        type: 'drawable'
                    },
                    {
                        name: 'hoverHeaderBackground',
                        displayName: uiEditor.getString('editor.property.hoverheaderbackground'),
                        type: 'drawable'
                    },
                    {
                        name: 'expandedHeaderBackground',
                        displayName: uiEditor.getString('editor.property.expandedheaderbackground'),
                        type: 'drawable'
                    },
                    {
                        name: 'selectHeaderBackground',
                        displayName: uiEditor.getString('editor.property.selectheaderbackground'),
                        type: 'drawable'
                    },
                    {
                        name: 'headerLabelFont',
                        displayName: uiEditor.getString('editor.property.headerlabelfont'),
                        type: 'font'
                    },
                    {
                        name: 'headerLabelColor',
                        displayName: uiEditor.getString('editor.property.headerlabelcolor'),
                        type: 'color'
                    },
                    {
                        name: 'hoverHeaderLabelColor',
                        displayName: uiEditor.getString('editor.property.hoverheaderlabelcolor'),
                        type: 'color'
                    },
                    {
                        name: 'expandedHeaderLabelColor',
                        displayName: uiEditor.getString('editor.property.expandedheaderlabelcolor'),
                        type: 'color'
                    },
                    {
                        name: 'selectHeaderLabelColor',
                        displayName: uiEditor.getString('editor.property.selectheaderlabelcolor'),
                        type: 'color'
                    },
                    {
                        name: 'headerHeight',
                        displayName: uiEditor.getString('editor.property.headerheight'),
                        type: 'int'
                    },
                    {
                        name: 'headerIconWidth',
                        displayName: uiEditor.getString('editor.property.headericonwidth'),
                        type: 'int'
                    },
                    {
                        name: 'headerIconHeight',
                        displayName: uiEditor.getString('editor.property.headericonheight'),
                        type: 'int'
                    },
                    {
                        name: 'headerCollapseIcon',
                        displayName: uiEditor.getString('editor.property.headercollapseicon'),
                        type: 'drawable'
                    },

                    {
                        name: 'hoverHeaderCollapseIcon',
                        displayName: uiEditor.getString('editor.property.hoverheadercollapseicon'),
                        type: 'drawable'
                    },
                    {
                        name: 'selectHeaderCollapseIcon',
                        displayName: uiEditor.getString('editor.property.selectheadercollapseicon'),
                        type: 'drawable'
                    },
                    {
                        name: 'headerExpandIcon',
                        displayName: uiEditor.getString('editor.property.headerexpandicon'),
                        type: 'drawable'
                    },
                    {
                        name: 'selectHeaderExpandIcon',
                        displayName: uiEditor.getString('editor.property.selectheaderexpandicon'),
                        type: 'drawable'
                    },
                    {
                        name: 'rowHeight',
                        displayName: uiEditor.getString('editor.property.rowheight'),
                        type: 'int'
                    },
                    {
                        name: 'rowIconWidth',
                        displayName: uiEditor.getString('editor.property.rowiconwidth'),
                        type: 'int'
                    },
                    {
                        name: 'rowIconHeight',
                        displayName: uiEditor.getString('editor.property.rowiconheight'),
                        type: 'int'
                    },

                    {
                        name: 'rowBackground',
                        displayName: uiEditor.getString('editor.property.rowbackground'),
                        type: 'drawable'
                    },
                    {
                        name: 'popupRowBackground',
                        displayName: uiEditor.getString('editor.property.popuprowbackground'),
                        type: 'drawable'
                    },
                    {
                        name: 'hoverRowBackground',
                        displayName: uiEditor.getString('editor.property.hoverrowbackground'),
                        type: 'drawable'
                    },
                    {
                        name: 'expandedRowBackground',
                        displayName: uiEditor.getString('editor.property.expandedrowbackground'),
                        type: 'drawable'
                    },

                    {
                        name: 'selectRowBackground',
                        displayName: uiEditor.getString('editor.property.selectrowbackground'),
                        type: 'drawable'
                    },
                    {
                        name: 'rowLabelFont',
                        displayName: uiEditor.getString('editor.property.rowlabelfont'),
                        type: 'font'
                    },
                    {
                        name: 'rowLabelColor',
                        displayName: uiEditor.getString('editor.property.rowlabelcolor'),
                        type: 'color'
                    },
                    {
                        name: 'hoverRowLabelColor',
                        displayName: uiEditor.getString('editor.property.hoverrowlabelcolor'),
                        type: 'color'
                    },
                    {
                        name: 'expandedRowLabelColor',
                        displayName: uiEditor.getString('editor.property.expandedrowlabelcolor'),
                        type: 'color'
                    },
                    {
                        name: 'selectRowLabelColor',
                        displayName: uiEditor.getString('editor.property.selectrowlabelcolor'),
                        type: 'color'
                    },

                    {
                        name: 'rowCollapseIcon',
                        displayName: uiEditor.getString('editor.property.rowcollapseicon'),
                        type: 'drawable'
                    },
                    {
                        name: 'hoverRowCollapseIcon',
                        displayName: uiEditor.getString('editor.property.hoverrowcollapseicon'),
                        type: 'drawable'
                    },
                    {
                        name: 'selectRowCollapseIcon',
                        displayName: uiEditor.getString('editor.property.selectrowcollapseicon'),
                        type: 'drawable'
                    },
                    {
                        name: 'rowExpandIcon',
                        displayName: uiEditor.getString('editor.property.rowexpandicon'),
                        type: 'drawable'
                    },
                    {
                        name: 'selectRowExpandIcon',
                        displayName: uiEditor.getString('editor.property.selectrowexpandicon'),
                        type: 'drawable'
                    },
                    {
                        name: 'iconGap',
                        displayName: uiEditor.getString('editor.property.icontextgap'),
                        type: 'int'
                    },
                    {
                        name: 'indent',
                        displayName: uiEditor.getString('editor.property.indent'),
                        type: 'int'
                    },
                    {
                        name: 'messageGap',
                        displayName: uiEditor.getString('editor.property.messagegap'),
                        type: 'int'
                    },
                    {
                        name: 'headerSeparatorColor',
                        displayName: uiEditor.getString('editor.property.headerseparatorcolor'),
                        type: 'color'
                    },
                    {
                        name: 'headerSeparatorVisible',
                        displayName: uiEditor.getString('editor.property.headerseparatorvisible'),
                        type: 'boolean'
                    },
                    {
                        name: 'headerSeparatorSize',
                        displayName: uiEditor.getString('editor.property.headerseparatorsize'),
                        type: 'int'
                    },
                    {
                        name: 'popupDirection',
                        displayName: uiEditor.getString('editor.property.popupdirection'),
                        type: 'simpleEnum',
                        editorParams: {
                            datas: [{
                                text: uiEditor.getString('editor.left'),
                                value: 'left'
                            },
                            {
                                text: uiEditor.getString('editor.right'),
                                value: 'right'
                            }]
                        }
                    },
                    {
                        name: 'popupSeparatorColor',
                        displayName: uiEditor.getString('editor.property.popupseparatorcolor'),
                        type: 'color'
                    },
                    {
                        name: 'is:useChildSelectStateForParent',
                        displayName: uiEditor.getString('editor.property.usechildselectstateforparent'),
                        type: 'boolean'
                    },
                ]
            }
        ]
    }
}