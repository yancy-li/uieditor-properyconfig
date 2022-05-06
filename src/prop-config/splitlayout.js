export default function(uiEditor) {
    return {
        rule: 'ht.ui.SplitLayout',
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
                displayName: uiEditor.getString('toolkit.splitlayout'),
                properties: [
                    {
                        displayName: uiEditor.getString('editor.property.orientation'),
                        name: 'orientation',
                        type: 'simpleEnum',
                        editorParams: {
                            datas: [{
                                text: uiEditor.getString('editor.horizontal'),
                                value: 'h'
                            },
                            {
                                text: uiEditor.getString('editor.vertical'),
                                value: 'v'
                            }]
                        }
                    },
                    {
                        displayName: uiEditor.getString('editor.property.position'),
                        name: 'position',
                        type: 'number'
                    },
                    {
                        displayName: uiEditor.getString('editor.property.positiontype'),
                        name: 'positionType',
                        type: 'simpleEnum',
                        editorParams: {
                            datas: [{
                                text: uiEditor.getString('editor.property.percentage'),
                                value: 'percentage'
                            },
                            {
                                text: uiEditor.getString('editor.property.absolutefirst'),
                                value: 'absoluteFirst'
                            },
                            {
                                text: uiEditor.getString('editor.property.absolutesecond'),
                                value: 'absoluteSecond'
                            }
                            ]
                        }
                    },
                    {
                        name: 'is:splitterVisible',
                        displayName: uiEditor.getString('editor.property.splittervisible'),
                        type: 'boolean'
                    },
                    {
                        displayName: uiEditor.getString('editor.property.splitter'),
                        name: 'splitter',
                        type: 'drawable'
                    },
                    {
                        displayName: uiEditor.getString('editor.property.hoversplitter'),
                        name: 'hoverSplitter',
                        type: 'drawable'
                    },
                    {
                        displayName: uiEditor.getString('editor.property.activesplitter'),
                        name: 'activeSplitter',
                        type: 'drawable'
                    },
                    {
                        displayName: uiEditor.getString('editor.property.splittersize'),
                        name: 'splitterSize',
                        type: 'int'
                    },
                    {
                        displayName: uiEditor.getString('editor.property.splitterhitsize'),
                        name: 'splitterHitSize',
                        type: 'int'
                    },
                    {
                        displayName: uiEditor.getString('editor.property.resizable'),
                        name: 'is:resizable',
                        type: 'resizable',
                        type: 'boolean'
                    },
                    {
                        displayName: uiEditor.getString('editor.property.resizehintbackground'),
                        name: 'resizeHintBackground',
                        type: 'drawable'
                    },
                    {
                        displayName: uiEditor.getString('editor.property.togglevisible'),
                        name: 'is:toggleVisible',
                        type: 'boolean'
                    },
                    {
                        displayName: uiEditor.getString('editor.property.toggle'),
                        name: 'toggle',
                        type: 'drawable'
                    },
                    {
                        displayName: uiEditor.getString('editor.property.hovertoggle'),
                        name: 'hoverToggle',
                        type: 'drawable'
                    },
                    {
                        displayName: uiEditor.getString('editor.property.activetoggle'),
                        name: 'activeToggle',
                        type: 'drawable'
                    },
                    {
                        displayName: uiEditor.getString('editor.property.togglesize'),
                        name: 'toggleSize',
                        type: 'int'
                    },
                    {
                        displayName: uiEditor.getString('editor.property.collapseregion'),
                        name: 'collapseRegion',
                        type: 'simpleEnum',
                        editorParams: {
                            datas: [
                                {
                                    text: uiEditor.getString('editor.property.nothing'),
                                    value: ''
                                },
                                {
                                text: uiEditor.getString('editor.property.first'),
                                value: 'first'
                            },
                            {
                                text: uiEditor.getString('editor.property.second'),
                                value: 'second'
                            }]
                        }
                    },
                    {
                        name: 'is:continuous',
                        displayName: uiEditor.getString('editor.property.continuous'),
                        type: 'boolean'
                    }
                ]
            }
        ]
    }
}