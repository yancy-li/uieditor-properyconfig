export default function(uiEditor) {
    return {
        rule: 'ht.ui.Label',
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
                displayName: uiEditor.getString('toolkit.label'),
                properties: [
                    {
                        displayName: uiEditor.getString('editor.property.ishintlabel'),
                        type: 'boolean',
                        getValue: function (view) {
                            return view.a('pageFunc') === 'hintLabel';
                        },
                        setValue: function (view, value) {
                            view.a('pageFunc', value ? 'hintLabel': null);
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
                                if (text instanceof ht.ui.LocaleString) {

                                } else {
                                    text = text.replace(/\\/g, '\\\\');
                                    text = text.replace(/\n/g, '\\n')
                                }
                            }
                            return text;
                        },
                        setValue: function(view, value) {
                            if (value) {
                                if (value instanceof ht.ui.LocaleString) {

                                } else {
                                    value = window.eval('({"a": "' + value + '"})').a;
                                }
                            }
                            view.setText(value);
                        },
                        isVisible: function (views) {
                            var visible = true;
                            for (var i = 0, length = views.length; i < length; i++) {
                                var view = views[i];
                                var parent = view.getParent();
                                if ((parent instanceof ht.ui.Pagination)) {
                                    visible = false;
                                    break;
                                }
                            }
                            return visible;
                        }
                    },
                ],
                extends: [{
                    rule: 'ht.ui.Button',
                    categoryId: 'Button',
                    filter: ['textColor', 'textFont', 'hTextPosition', 'vTextPosition', 'icon', 'iconWidth', 'iconHeight',
                        'iconTextGap', 'iconStretch', 'toolTip', 'toolTipEnabled', 'align', 'vAlign'
                    ]
                }]
            }

        ]
    
    }
}