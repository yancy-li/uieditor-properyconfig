export default function(uiEditor) {
    return {
        name: 'layoutParams',
        properties: [
            {
                name: 'layoutParams.marginLeft',
                displayName: 'marginLeft',
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
                displayName: 'marginRight',
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
                displayName: 'marginTop',
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
                displayName: 'marginBottom',
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
                displayName: 'width',
                type: 'enum',
                editorParams: {
                    datas: ['wrap_content', 'match_parent', 100]
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
                displayName: 'height',
                type: 'enum',
                editorParams: {
                    datas: ['wrap_content', 'match_parent', 100]
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
            // ---------- relativeLayout 专用
            {
                name: 'layoutParams.align',
                displayName: 'Align',
                type: 'simpleEnum',
                editorParams: {
                    datas: [{
                        text: 'left',
                        value: 'left'
                    },
                    {
                        text: 'center',
                        value: 'center'
                    },
                    {
                        text: 'right',
                        value: 'right'
                    }]
                },
                getValue: function (view) {
                    return view.getLayoutParams('align');
                },
                setValue: function (view, value) {
                    view.setLayoutParams('align', value);
                },
                isVisible: function (views) {
                    var visible = true;
                    for (var i = 0, length = views.length; i < length; i++) {
                        var view = views[i];
                        var parent = view.getParent();
                        if (!(parent instanceof ht.ui.RelativeLayout)) {
                            visible = false;
                            break;
                        }
                    }
                    return visible;
                }
            },
            {
                name: 'layoutParams.vAlign',
                displayName: 'vAlign',
                type: 'simpleEnum',
                    editorParams: {
                        datas: [{
                            text: 'top',
                            value: 'top'
                        },
                        {
                            text: 'middle',
                            value: 'middle'
                        },
                        {
                            text: 'bottom',
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
                        if (!(parent instanceof ht.ui.RelativeLayout)) {
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
                displayName: 'title',
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
                displayName: 'icon',
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
                displayName: 'closable',
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
                displayName: 'gridX',
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
                displayName: 'gridY',
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
                displayName: 'colspan',
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
                displayName: 'rowspan',
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
            }
        ]
    }
}