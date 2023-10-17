export default function(uiEditor) {
    return {
        displayName: uiEditor.getString('editor.property.layoutparams'),
        properties: [
            {
                name: 'layoutParams.marginLeft',
                displayName: uiEditor.getString('editor.property.marginleft'),
                type: 'int',
                getValue: function (view) {
                    return view.getLayoutParams('marginLeft');
                },
                setValue: function (view, value) {
                    if (value != null && value !== '')
                        view.setLayoutParams('marginLeft', parseInt(value));
                    else {
                        view.setLayoutParams('marginLeft', null);
                    }
                },
                isVisible: function (views) {
                    var visible = true;
                    for (var i = 0, length = views.length; i < length; i++) {
                        var view = views[i];
                        var parent = view.getParent();
                        if (!(parent instanceof ht.ui.RelativeLayout) &&
                            !(parent instanceof ht.ui.HBoxLayout) &&
                            !(parent instanceof ht.ui.VBoxLayout) &&
                            !(parent instanceof ht.ui.FlowLayout)) {
                            visible = false;
                            break;
                        }
                    }
                    return visible;
                }
            },
            {
                name: 'layoutParams.marginRight',
                displayName: uiEditor.getString('editor.property.marginright'),
                type: 'int',
                getValue: function (view) {
                    return view.getLayoutParams('marginRight');
                },
                setValue: function (view, value) {
                    if (value != null && value !== '')
                        view.setLayoutParams('marginRight', parseInt(value));
                    else
                        view.setLayoutParams('marginRight', null);
                },
                isVisible: function (views) {
                    var visible = true;
                    for (var i = 0, length = views.length; i < length; i++) {
                        var view = views[i];
                        var parent = view.getParent();
                        if (!(parent instanceof ht.ui.RelativeLayout) &&
                            !(parent instanceof ht.ui.HBoxLayout) &&
                            !(parent instanceof ht.ui.VBoxLayout) &&
                            !(parent instanceof ht.ui.FlowLayout)) {
                            visible = false;
                            break;
                        }
                    }
                    return visible;
                }
            },
            {
                name: 'layoutParams.marginTop',
                displayName: uiEditor.getString('editor.property.margintop'),
                type: 'int',
                getValue: function (view) {
                    return view.getLayoutParams('marginTop');
                },
                setValue: function (view, value) {
                    if (value != null && value !== '')
                        view.setLayoutParams('marginTop', parseInt(value));
                    else
                        view.setLayoutParams('marginTop', null);
                },
                isVisible: function (views) {
                    var visible = true;
                    for (var i = 0, length = views.length; i < length; i++) {
                        var view = views[i];
                        var parent = view.getParent();
                        if (!(parent instanceof ht.ui.RelativeLayout) &&
                            !(parent instanceof ht.ui.HBoxLayout) &&
                            !(parent instanceof ht.ui.VBoxLayout) &&
                            !(parent instanceof ht.ui.FlowLayout)) {
                            visible = false;
                            break;
                        }
                    }
                    return visible;
                }
            },
            {
                name: 'layoutParams.marginBottom',
                displayName: uiEditor.getString('editor.property.marginbottom'),
                type: 'int',
                getValue: function (view) {
                    return view.getLayoutParams('marginBottom');
                },
                setValue: function (view, value) {
                    if (value != null && value !== '')
                        view.setLayoutParams('marginBottom', parseInt(value));
                    else
                        view.setLayoutParams('marginBottom', null);
                },
                isVisible: function (views) {
                    var visible = true;
                    for (var i = 0, length = views.length; i < length; i++) {
                        var view = views[i];
                        var parent = view.getParent();
                        if (!(parent instanceof ht.ui.RelativeLayout) &&
                            !(parent instanceof ht.ui.HBoxLayout) &&
                            !(parent instanceof ht.ui.VBoxLayout) &&
                            !(parent instanceof ht.ui.FlowLayout)) {
                            visible = false;
                            break;
                        }
                    }
                    return visible;
                }
            },
            {
                name: 'layoutParams.width',
                displayName: uiEditor.getString('editor.property.width'),
                type: 'enum',
                editorParams: {
                    datas: ['wrap_content', 'match_parent', 100],
                    acceptInput: true
                },
                getValue: function (view) {
                    return view.getLayoutParams('width');
                },
                setValue: function (view, value) {
                    if (value != null) {
                        if (value == 'wrap_content' || value == 'match_parent')
                            view.setLayoutParams('width', value);
                        else if (value != '') {
                            if (!isNaN(value)) {
                                view.setLayoutParams('width', parseInt(value));    
                            }
                            else {
                                view.setLayoutParams('width', value);    
                            }
                        }
                    }
                },
                isVisible: function (views) {
                    var visible = true;
                    for (var i = 0, length = views.length; i < length; i++) {
                        var view = views[i];
                        var parent = view.getParent();
                        if (!(parent instanceof ht.ui.RelativeLayout) &&
                            !(parent instanceof ht.ui.HBoxLayout) &&
                            !(parent instanceof ht.ui.VBoxLayout) &&
                            !(parent instanceof ht.ui.FlowLayout)) {
                            visible = false;
                            break;
                        }
                    }
                    return visible;
                }
            },
            {
                name: 'layoutParams.height',
                displayName: uiEditor.getString('editor.property.height'),
                type: 'enum',
                editorParams: {
                    datas: ['wrap_content', 'match_parent', 100],
                    acceptInput: true
                },
                getValue: function (view) {
                    return view.getLayoutParams('height');
                },
                setValue: function (view, value) {
                    if (value != null) {
                        if (value == 'wrap_content' || value == 'match_parent')
                            view.setLayoutParams('height', value);
                        else if (value != '') {
                            if (!isNaN(value)) {
                                view.setLayoutParams('height', parseInt(value));    
                            }
                            else {
                                view.setLayoutParams('height', value);    
                            }
                        }
                    }
                },
                isVisible: function (views) {
                    var visible = true;
                    for (var i = 0, length = views.length; i < length; i++) {
                        var view = views[i];
                        var parent = view.getParent();
                        if (!(parent instanceof ht.ui.RelativeLayout) &&
                            !(parent instanceof ht.ui.HBoxLayout) &&
                            !(parent instanceof ht.ui.VBoxLayout) &&
                            !(parent instanceof ht.ui.FlowLayout)) {
                            visible = false;
                            break;
                        }
                    }
                    return visible;
                }
            },
            {
                name: 'zIndex',
                displayName: uiEditor.getString('editor.property.zindex'),
                type: 'int',
                desc: uiEditor.getString('editor.property.desc.zindex'),
            },
            // ---------- relativeLayout 专用
            {
                name: 'layoutParams.align',
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
                    }]
                },
                getValue: function (view) {
                    return view.getLayoutParams('align');
                },
                setValue: function (view, value) {
                    if (value != null)
                        view.setLayoutParams('align', value);
                },
                isVisible: function (views) {
                    var visible = true;
                    for (var i = 0, length = views.length; i < length; i++) {
                        var view = views[i];
                        var parent = view.getParent();
                        if (!(parent instanceof ht.ui.RelativeLayout) && !(parent instanceof ht.ui.VBoxLayout)) {
                            visible = false;
                            break;
                        }
                    }
                    return visible;
                }
            },
            {
                name: 'layoutParams.vAlign',
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
                        }]
                    },
                getValue: function (view) {
                    return view.getLayoutParams('vAlign');
                },
                setValue: function (view, value) {
                    view.setLayoutParams('vAlign', value);
                },
                isVisible: function (views) {
                    var visible = true;
                    for (var i = 0, length = views.length; i < length; i++) {
                        var view = views[i];
                        var parent = view.getParent();
                        if (!(parent instanceof ht.ui.RelativeLayout) && !(parent instanceof ht.ui.HBoxLayout)) {
                            visible = false;
                            break;
                        }
                    }
                    return visible;
                }
            },
            // ---------- tabLayout 专用
            {
                name: 'layoutParams.title',
                displayName: uiEditor.getString('editor.property.title'),
                type: 'string',
                getValue: function (view) {
                    return view.getLayoutParams('title');
                },
                setValue: function (view, value) {
                    view.setLayoutParams('title', value);
                },
                isVisible: function (views) {
                    var visible = true;
                    for (var i = 0, length = views.length; i < length; i++) {
                        var view = views[i];
                        var parent = view.getParent();
                        if (!(parent instanceof ht.ui.TabLayout)) {
                            visible = false;
                            break;
                        }
                    }
                    return visible;
                }
            },
            {
                name: 'layoutParams.icon',
                displayName: uiEditor.getString('editor.property.icon'),
                type: 'string',
                getValue: function (view) {
                    return view.getLayoutParams('icon');
                },
                setValue: function (view, value) {
                    delete view.getLayoutParams().iconDrawable;
                    delete view.getLayoutParams().hoverIconDrawable;
                    delete view.getLayoutParams().activeIconDrawable;
                    view.setLayoutParams('icon', value);
                },
                isVisible: function (views) {
                    var visible = true;
                    for (var i = 0, length = views.length; i < length; i++) {
                        var view = views[i];
                        var parent = view.getParent();
                        if (!(parent instanceof ht.ui.TabLayout)) {
                            visible = false;
                            break;
                        }
                    }
                    return visible;
                }
            },
            {
                name: 'layoutParams.closable',
                displayName: uiEditor.getString('editor.property.closable'),
                type: 'boolean',
                getValue: function (view) {
                    return view.getLayoutParams('closable');
                },
                setValue: function (view, value) {
                    view.setLayoutParams('closable', value);
                },
                isVisible: function (views) {
                    var visible = true;
                    for (var i = 0, length = views.length; i < length; i++) {
                        var view = views[i];
                        var parent = view.getParent();
                        if (!(parent instanceof ht.ui.TabLayout)) {
                            visible = false;
                            break;
                        }
                    }
                    return visible;
                }
            },

            {
                name: 'layoutParams.gridX',
                displayName: uiEditor.getString('editor.property.gridx'),
                type: 'int',
                getValue: function (view) {
                    return view.getLayoutParams('gridX');
                },
                setValue: function (view, value) {
                    view.setLayoutParams('gridX', value);
                },
                isVisible: function (views) {
                    var visible = true;
                    for (var i = 0, length = views.length; i < length; i++) {
                        var view = views[i];
                        var parent = view.getParent();
                        if (!(parent instanceof ht.ui.GridLayout)) {
                            visible = false;
                            break;
                        }
                    }
                    return visible;
                }
            },
            {
                name: 'layoutParams.gridY',
                displayName: uiEditor.getString('editor.property.gridy'),
                type: 'int',
                getValue: function (view) {
                    return view.getLayoutParams('gridY');
                },
                setValue: function (view, value) {
                    view.setLayoutParams('gridY', value);
                },
                isVisible: function (views) {
                    var visible = true;
                    for (var i = 0, length = views.length; i < length; i++) {
                        var view = views[i];
                        var parent = view.getParent();
                        if (!(parent instanceof ht.ui.GridLayout)) {
                            visible = false;
                            break;
                        }
                    }
                    return visible;
                }
            },
            {
                name: 'layoutParams.colspan',
                displayName: uiEditor.getString('editor.property.colspan'),
                type: 'int',
                getValue: function (view) {
                    return view.getLayoutParams('colspan');
                },
                setValue: function (view, value) {
                    view.setLayoutParams('colspan', value);
                },
                isVisible: function (views) {
                    var visible = true;
                    for (var i = 0, length = views.length; i < length; i++) {
                        var view = views[i];
                        var parent = view.getParent();
                        if (!(parent instanceof ht.ui.GridLayout)) {
                            visible = false;
                            break;
                        }
                    }
                    return visible;
                }
            },
            {
                name: 'layoutParams.rowspan',
                displayName: uiEditor.getString('editor.property.rowspan'),
                type: 'int',
                getValue: function (view) {
                    return view.getLayoutParams('rowspan');
                },
                setValue: function (view, value) {
                    view.setLayoutParams('rowspan', value);
                },
                isVisible: function (views) {
                    var visible = true;
                    for (var i = 0, length = views.length; i < length; i++) {
                        var view = views[i];
                        var parent = view.getParent();
                        if (!(parent instanceof ht.ui.GridLayout)) {
                            visible = false;
                            break;
                        }
                    }
                    return visible;
                }
            },
            {
                name: 'layoutParams.childwidth',
                displayName: uiEditor.getString('editor.property.pagebuttonwidth'),
                type: 'enum',
                editorParams: {
                    datas: ['wrap_content', 'match_parent', 100],
                    acceptInput: true
                },
                getValue: function (view) {
                    return view.getTemplateButton().getLayoutParams('width');
                },
                setValue: function (view, value) {
                    if (value != null) {
                        if (value == 'wrap_content' || value == 'match_parent')
                            view.getTemplateButton().setLayoutParams('width', value);
                        else if (value != '') {
                            if (!isNaN(value)) {
                                view.getTemplateButton().setLayoutParams('width', parseInt(value));    
                            }
                            else {
                                view.getTemplateButton().setLayoutParams('width', value);    
                            }
                        }
                    }
                },
                isVisible: function (views) {
                    var visible = true;
                    for (var i = 0, length = views.length; i < length; i++) {
                        var view = views[i];
                        if (!(view instanceof ht.ui.PageButtonGroup)) {
                            visible = false;
                            break;
                        }
                    }
                    return visible;
                }
            },
            {
                name: 'layoutParams.childheight',
                displayName: uiEditor.getString('editor.property.pagebuttonheight'),
                type: 'enum',
                editorParams: {
                    datas: ['wrap_content', 'match_parent', 100],
                    acceptInput: true
                },
                getValue: function (view) {
                    return view.getTemplateButton().getLayoutParams('height');
                },
                setValue: function (view, value) {
                    if (value != null) {
                        if (value == 'wrap_content' || value == 'match_parent')
                            view.getTemplateButton().setLayoutParams('height', value);
                        else if (value != '') {
                            if (!isNaN(value)) {
                                view.getTemplateButton().setLayoutParams('height', parseInt(value));    
                            }
                            else {
                                view.getTemplateButton().setLayoutParams('height', value);    
                            }
                        }
                    }
                },
                isVisible: function (views) {
                    var visible = true;
                    for (var i = 0, length = views.length; i < length; i++) {
                        var view = views[i];
                        if (!(view instanceof ht.ui.PageButtonGroup)) {
                            visible = false;
                            break;
                        }
                    }
                    return visible;
                }
            },
        ]
    }
}