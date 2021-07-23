export default function(uiEditor) {
    return {
        rule: 'ht.ui.Button',
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
                id: 'Button',
                displayName: uiEditor.getString('toolkit.button'),
                properties: [
                    {
                        name: 'dropdownFunc',
                        displayName: uiEditor.getString('editor.property.dropdownfunc'),
                        type: 'enum',
                        editorParams: {
                            readOnly: true,
                            datas: [
                                {
                                    label: uiEditor.getString('editor.ok'),
                                    value: 'ok'
                                },
                                {
                                    label: uiEditor.getString('editor.cancel'),
                                    value: 'cancel'
                                },
                                {
                                    label: uiEditor.getString('editor.property.nothing'),
                                    value: null
                                }
                            ]
                        },
                        getValue: function (view) {
                            return view.a('dropdownFunc');
                        },
                        setValue: function (view, value) {
                            view.a('dropdownFunc', value);
                        },
                        isVisible: function (views) {
                            var visible = true;
                            var inColorOrDateTimeDropDown = function(v) {
                                while (v) {
                                    if (v instanceof ht.ui.ColorDropDownView || v instanceof ht.ui.DateTimeDropDownView) {
                                        return true;
                                    }
                                    v = v.getParent();
                                }
                            }
                            
                            for (var i = 0, length = views.length; i < length; i++) {
                                var view = views[i];
                                if (!inColorOrDateTimeDropDown(view)) {
                                    visible = false;
                                    break;
                                }
                            }
                            return visible;
                        }
                    },
                    {
                        name: 'pageFunc',
                        displayName: uiEditor.getString('editor.property.pagefunc'),
                        type: 'enum',
                        editorParams: {
                            readOnly: true,
                            datas: [
                                {
                                    label: uiEditor.getString('editor.property.pagefuncfirst'),
                                    value: 'first'
                                },
                                {
                                    label: uiEditor.getString('editor.property.pagefuncprevious'),
                                    value: 'previous'
                                },
                                {
                                    label: uiEditor.getString('editor.property.pagefuncnext'),
                                    value: 'next'
                                },
                                {
                                    label: uiEditor.getString('editor.property.pagefunclast'),
                                    value: 'last'
                                },
                                {
                                    label: uiEditor.getString('editor.property.pagefuncgotopage'),
                                    value: 'gotoPage'
                                }
                            ]
                        },
                        getValue: function (view) {
                            return view.a('pageFunc');
                        },
                        setValue: function (view, value) {
                            view.a('pageFunc', value);
                        },
                        isVisible: function (views) {
                            var visible = true;
                            for (var i = 0, length = views.length; i < length; i++) {
                                var view = views[i];
                                var parent = view.getParent();
                                if (!(parent instanceof ht.ui.Pagination)) {
                                    visible = false;
                                    break;
                                }
                            }
                            return visible;
                        }
                    },
                    {
                        name: 'text',
                        displayName: uiEditor.getString('editor.property.text'),
                        type: 'string',
                        getValue: function(view) {
                            var text = view.getText();
                            if (text) {
                                text = text.replace(/\\/g, '\\\\');
                                text = text.replace(/\n/g, '\\n')
                            }
                            return text;
                        },
                        setValue: function(view, value) {
                            if (value) {
                                value = window.eval('({"a": "' + value + '"})').a;
                            }
                            view.setText(value);
                        }
                    },
                    {
                        name: 'textFont',
                        displayName: uiEditor.getString('editor.property.textfont'),
                        type: 'font'
                    },
                    {
                        name: 'textColor',
                        displayName: uiEditor.getString('editor.property.textcolor'),
                        type: 'color',
                    },
                    {
                        name: 'hoverTextColor',
                        displayName: uiEditor.getString('editor.property.hovertextcolor'),
                        type: 'color'
                    },
                    {
                        name: 'activeTextColor',
                        displayName: uiEditor.getString('editor.property.activetextcolor'),
                        type: 'color'
                    },
                    {
                        name: 'disabledTextColor',
                        displayName: uiEditor.getString('editor.property.disabledtextcolor'),
                        type: 'color'
                    },
                    {
                        name: 'hTextPosition',
                        displayName: uiEditor.getString('editor.property.htextposition'),
                        type: 'simpleEnum',
                        editorParams: {
                            datas: [{
                                text: uiEditor.getString('editor.left'),
                                value: 'left'
                            },
                            {
                                text: uiEditor.getString('editor.center'),
                                value: 'center'
                            },
                            {
                                text: uiEditor.getString('editor.right'),
                                value: 'right'
                            }]
                        }
                    },
                    {
                        name: 'vTextPosition',
                        displayName: uiEditor.getString('editor.property.vtextposition'),
                        type: 'simpleEnum',
                        editorParams: {
                            datas: [{
                                text: uiEditor.getString('editor.top'),
                                value: 'top'
                            },
                            {
                                text: uiEditor.getString('editor.middle'),
                                value: 'middle'
                            },
                            {
                                text: uiEditor.getString('editor.bottom'),
                                value: 'bottom'
                            }]
                        }
                    },
                    {
                        name: 'hoverBackground',
                        displayName: uiEditor.getString('editor.property.hoverbackground'),
                        type: 'drawable'
                    },
                    {
                        name: 'activeBackground',
                        displayName: uiEditor.getString('editor.property.activebackground'),
                        type: 'drawable'
                    },
                    {
                        name: 'disabledBackground',
                        displayName: uiEditor.getString('editor.property.disabledbackground'),
                        type: 'drawable'
                    },
                    {
                        name: 'disabledBorder',
                        displayName: uiEditor.getString('editor.property.disabledborder'),
                        type: 'border'
                    },
                    {
                        name: 'icon',
                        displayName: uiEditor.getString('editor.property.icon'),
                        type: 'drawable'
                    },
                    {
                        name: 'hoverIcon',
                        displayName: uiEditor.getString('editor.property.hovericon'),
                        type: 'drawable'
                    },
                    {
                        name: 'activeIcon',
                        displayName: uiEditor.getString('editor.property.activeicon'),
                        type: 'drawable'
                    },
                    {
                        name: 'disabledIcon',
                        displayName: uiEditor.getString('editor.property.disabledicon'),
                        type: 'drawable'
                    },
                    {
                        name: 'iconWidth',
                        displayName: uiEditor.getString('editor.property.iconwidth'),
                        type: 'int'
                    },
                    {
                        name: 'iconHeight',
                        displayName: uiEditor.getString('editor.property.iconheight'),
                        type: 'int'
                    },
                    {
                        name: 'iconTextGap',
                        displayName: uiEditor.getString('editor.property.icontextgap'),
                        type: 'int'
                    },
                    {
                        name: 'iconStretch',
                        displayName: uiEditor.getString('editor.property.iconstretch'),
                        type: 'enum',
                        editorParams: {
                            datas: [uiEditor.getString('editor.property.stretch.fill'), uiEditor.getString('editor.property.stretch.uniform'),
                            uiEditor.getString('editor.property.stretch.centeruniform'), uiEditor.getString('editor.property.stretch.center'), null],
                            readOnly: true
                        }
                    },
                    {
                        name: 'toolTip',
                        displayName: uiEditor.getString('editor.property.tooltip'),
                        type: 'string'
                    },
                    {
                        name: 'toolTipEnabled',
                        displayName: uiEditor.getString('editor.property.tooltipenabled'),
                        type: 'boolean'
                    },
                    {
                        displayName: uiEditor.getString('editor.property.pixelperfect'),
                        name: 'is:pixelPerfect',
                        type: 'boolean'
                    },
                    {
                        name: 'align',
                        displayName: uiEditor.getString('editor.property.align'),
                        type: 'simpleEnum',
                        editorParams: {
                            datas: [{
                                text: uiEditor.getString('editor.left'),
                                value: 'left'
                            },
                            {
                                text: uiEditor.getString('editor.center'),
                                value: 'center'
                            },
                            {
                                text: uiEditor.getString('editor.right'),
                                value: 'right'
                            }],
                        }
                    },
                    {
                        name: 'vAlign',
                        displayName: uiEditor.getString('editor.property.valign'),
                        type: 'simpleEnum',
                        editorParams: {
                            datas: [{
                                text: uiEditor.getString('editor.top'),
                                value: 'top'
                            },
                            {
                                text: uiEditor.getString('editor.middle'),
                                value: 'middle'
                            },
                            {
                                text: uiEditor.getString('editor.bottom'),
                                value: 'bottom'
                            }],
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
    }
}
