export default function (uiEditor) {
    return {
        rule: 'ht.ui.View',
        categories: [{
            id: 'basic',
            name: uiEditor.getString('editor.property.baseproperty'),
            properties: [
                
                {
                    name: 'id',
                    displayName: uiEditor.getString('editor.id'),
                    type: 'string',
                    desc: uiEditor.getString('editor.id')
                },
                {
                    name: 'background',
                    type: 'drawable',
                    displayName: uiEditor.getString('editor.property.background'),
                    desc: uiEditor.getString('editor.property.background')
                },
                {
                    name: 'border',
                    displayName: uiEditor.getString('editor.property.border'),
                    type: 'border',
                    desc: uiEditor.getString('editor.property.desc.border'),
                },
                {
                    name: 'padding',
                    displayName: uiEditor.getString('editor.property.padding'),
                    type: 'padding',
                    desc: uiEditor.getString('editor.property.desc.padding'),
                },
                {
                    name: 'borderRadius',
                    displayName: uiEditor.getString('editor.property.borderradius'),
                    type: 'int'
                },
                {
                    name: 'preferredSize',
                    displayName: uiEditor.getString('editor.property.preferredsize'),
                    type: 'string',
                    setValue: function(view, value, property) {
                        if (value == null || value.trim() == '') {
                            view.setPreferredSize(undefined);
                        }
                        else {
                            value = value.split(',');
                            var width = value[0];
                            var height = value[1];
                            if (width != undefined && width.trim() != '' && !isNaN(width)) {
                                width = parseInt(width);
                            }
                            else {
                                width = undefined;
                            }

                            if (height != undefined && height.trim() != '' && !isNaN(height)) {
                                height = parseInt(height);
                            }
                            else {
                                height = undefined;
                            }
                            
                            view.setPreferredSize(width, height);
                        }
                    },
                    getValue: function(view, property) {
                        var preferredSize = view._preferredSize;
                        if (preferredSize && view.isPreferredSizeSet()) {
                            var str = '';
                            var width = preferredSize.width,
                                height = preferredSize.height;
                            if (width != null) {
                                str += width;
                            }
                            str += ',';

                            if (height != null) {
                                str += height;
                            }
                            return str;
                        }
                    }
                },
                {
                    name: 'minSize',
                    displayName: uiEditor.getString('editor.property.minsize'),
                    type: 'string',
                    setValue: function(view, value, property) {
                        if (value == null || value.trim() == '') {
                            view.setMinSize(undefined);
                        }
                        else {
                            value = value.split(',');
                            var width = value[0];
                            var height = value[1];
                            if (width != undefined && width.trim() != '' && !isNaN(width)) {
                                width = parseInt(width);
                            }
                            else {
                                width = undefined;
                            }

                            if (height != undefined && height.trim() != '' && !isNaN(height)) {
                                height = parseInt(height);
                            }
                            else {
                                height = undefined;
                            }
                            
                            view.setMinSize(width, height);
                        }
                    },
                    getValue: function(view, property) {
                        var minSize = view._minSize;
                        if (minSize && view.isMinSizeSet()) {
                            var str = '';
                            var width = minSize.width,
                                height = minSize.height;
                            if (width != null) {
                                str += width;
                            }
                            str += ',';

                            if (height != null) {
                                str += height;
                            }
                            return str;
                        }
                    }
                },
                {
                    name: 'cursor',
                    displayName: uiEditor.getString('editor.property.cursor'),
                    type: 'enum',
                    editorParams: {
                        readOnly: true,
                        datas: [
                            {
                                label: 'auto',
                                value: 'auto'
                            },
                            {
                                label: 'default',
                                value: 'default'
                            },
                            {
                                label: 'help',
                                value: 'help'
                            },
                            {
                                label: 'pointer',
                                value: 'pointer'
                            },
                            {
                                label: 'progress',
                                value: 'progress'
                            },
                            {
                                label: 'wait',
                                value: 'wait'
                            },
                            {
                                label: 'cell',
                                value: 'cell'
                            },
                            {
                                label: 'crosshair',
                                value: 'crosshair'
                            },
                            {
                                label: 'text',
                                value: 'text'
                            },
                            {
                                label: 'vertical-text',
                                value: 'vertical-text'
                            },
                            {
                                label: 'alias',
                                value: 'alias'
                            },
                            {
                                label: 'copy',
                                value: 'copy'
                            },
                            {
                                label: 'move',
                                value: 'move'
                            },
                            {
                                label: 'not-allowed',
                                value: 'not-allowed'
                            },
                            {
                                label: 'grab',
                                value: 'grab'
                            },
                            {
                                label: 'grabbing',
                                value: 'grabbing'
                            },
                            {
                                label: 'all-scroll',
                                value: 'all-scroll'
                            },
                            {
                                label: 'col-resize',
                                value: 'col-resize'
                            },
                            {
                                label: 'row-resize',
                                value: 'row-resize'
                            },
                            {
                                label: 'n-resize',
                                value: 'n-resize'
                            },
                            {
                                label: 'e-resize',
                                value: 'e-resize'
                            },
                            {
                                label: 's-resize',
                                value: 's-resize'
                            },
                            {
                                label: 'w-resize',
                                value: 'w-resize'
                            },
                            {
                                label: 'ne-resize',
                                value: 'ne-resize'
                            },
                            {
                                label: 'nw-resize',
                                value: 'nw-resize'
                            },
                            {
                                label: 'se-resize',
                                value: 'se-resize'
                            },
                            {
                                label: 'sw-resize',
                                value: 'sw-resize'
                            },
                            {
                                label: 'ew-resize',
                                value: 'ew-resize'
                            },
                            {
                                label: 'ns-resize',
                                value: 'ns-resize'
                            },
                            {
                                label: 'nesw-resize',
                                value: 'nesw-resize'
                            },
                            {
                                label: 'nwse-resize',
                                value: 'nwse-resize'
                            },
                            {
                                label: 'zoom-in',
                                value: 'zoom-in'
                            },
                            {
                                label: 'zoom-out',
                                value: 'zoom-out'
                            },
                        ]
                    },
                },
                {
                    name: 'style',
                    displayName: uiEditor.getString('editor.property.style'),
                    type: 'string'
                },
                {
                    name: 'boxShadow',
                    displayName: uiEditor.getString('editor.property.shadow'),
                    type: 'string'
                },
                {
                    name: 'overflow',
                    displayName: uiEditor.getString('editor.property.overflow'),
                    type: 'simpleEnum',
                    editorParams: {
                        datas: [{
                                text: uiEditor.getString('editor.property.hidden'),
                                value: 'hidden'
                            },
                            {
                                text: uiEditor.getString('editor.property.visible'),
                                value: 'visible'
                            }
                        ]
                    },
                    isVisible: function (views) {
                        var visible = true;
                        for (var i = 0, length = views.length; i < length; i++) {
                            var view = views[i];
                            if (!(view instanceof ht.ui.ViewGroup)) {
                                visible = false;
                                break;
                            }
                        }
                        return visible;
                    }
                },
                {
                    name: 'routerName',
                    displayName: uiEditor.getString('editor.property.routername'),
                    type: 'string',

                    setValue: function(view, value, property) {
                        if (value) {
                            view.a('routerName', value);
                        }
                        else {
                            view.a('routerName', null);
                        }
                    },
                    getValue: function(view, property) {
                        return view.a('routerName');
                    },
                    isVisible: function (views) {
                        var visible = true;
                        for (var i = 0, length = views.length; i < length; i++) {
                            var view = views[i];
                            if (!(view.getClassName() === 'ht.ui.View' && view.a('routerView'))) {
                                visible = false;
                                break;
                            }
                        }
                        return visible;
                    }
                },
                {
                    name: 'viewGroupTemplate',
                    displayName: uiEditor.getString('editor.property.viewgrouptemplate'),
                    type: 'boolean',

                    setValue: function(view, value, property) {
                        if (value) {
                            view.addBinding('children', 'template_children');
                        }
                        else {
                            view.removeBinding('children', 'template_children');
                        }
                    },
                    getValue: function(view, property) {
                        return !!view.getBinding('children', 'template_children');
                    },
                    isVisible: function (views) {
                        var visible = false;
                        if (views.length === 1) {
                            var view = views[0];
                            if (view.getParent() && view.getParent().getClassName() === 'ht.uieditor.Designer' &&  view instanceof ht.ui.ViewGroup && !(view instanceof ht.ui.RefViewGroup)) {
                                visible = true;
                            }
                        }
                        return visible;
                    }
                },
                {
                    name: 'contextMenuUrl',
                    displayName: uiEditor.getString('editor.property.contextmenu'),
                    type: 'urlResource'
                },
                {
                    name: 'disabled',
                    displayName: uiEditor.getString('editor.property.disabled'),
                    type: 'boolean'
                },
                {
                    name: 'disabledBackground',
                    displayName: uiEditor.getString('editor.property.disabledbackground'),
                    type: 'color'
                }
            ]
        }]
    }
}