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
                    type: 'string'
                },
                {
                    name: 'background',
                    type: 'drawable',
                    displayName: uiEditor.getString('editor.property.background')
                },
                {
                    name: 'border',
                    displayName: uiEditor.getString('editor.property.border'),
                    type: 'border'
                },
                {
                    name: 'padding',
                    displayName: uiEditor.getString('editor.property.padding'),
                    type: 'padding'
                },
                {
                    name: 'borderRadius',
                    displayName: uiEditor.getString('editor.property.borderradius'),
                    type: 'string',
                    editorParams: {
                        placeholder: '10,1,1,1 or 10'
                    },
                    getValue: function (view) {
                        var borderRadius = view.getBorderRadius();
                        if (borderRadius != null) {
                            if (Array.isArray(borderRadius)) {
                                return borderRadius.join(',');
                            }
                            else {
                                return borderRadius;
                            }
                        }
                    },
                    setValue: function (view, value) {
                        if (value != null && value != '') {
                            if (typeof value === 'string' && value.indexOf(',') > 0) {
                                var newValue = [];
                                value = value.split(',');
                                value.forEach(function(v) {
                                    newValue.push(parseInt(v))
                                })
                                view.setBorderRadius(newValue)
                            }
                            else {
                                view.setBorderRadius(value);
                            }
                        }
                        else {
                            view.setBorderRadius(null)
                        }
                    },
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
                    name: 'maxSize',
                    displayName: uiEditor.getString('editor.property.maxsize'),
                    type: 'string',
                    setValue: function(view, value, property) {
                        if (value == null || value.trim() == '') {
                            view.setMaxSize(undefined);
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
                            
                            view.setMaxSize(width, height);
                        }
                    },
                    getValue: function(view, property) {
                        var maxSize = view._maxSize;
                        if (maxSize && view.isMaxSizeSet()) {
                            var str = '';
                            var width = maxSize.width,
                                height = maxSize.height;
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
                                value: 'auto',
                                icon: 'UIEditor.cursor.auto-nothing'
                            },
                            {
                                label: 'default',
                                value: 'default',
                                icon: 'UIEditor.cursor.default'
                            },
                            {
                                label: 'help',
                                value: 'help',
                                icon: 'UIEditor.cursor.help'
                            },
                            {
                                label: 'pointer',
                                value: 'pointer',
                                icon: 'UIEditor.cursor.pointer'
                            },
                            {
                                label: 'progress',
                                value: 'progress',
                                icon: 'UIEditor.cursor.progress'
                            },
                            {
                                label: 'wait',
                                value: 'wait',
                                icon: 'UIEditor.cursor.wait'
                            },
                            {
                                label: 'cell',
                                value: 'cell',
                                icon: 'UIEditor.cursor.cell'
                            },
                            {
                                label: 'crosshair',
                                value: 'crosshair',
                                icon: 'UIEditor.cursor.crosshair'
                            },
                            {
                                label: 'text',
                                value: 'text',
                                icon: 'UIEditor.cursor.text'
                            },
                            {
                                label: 'vertical-text',
                                value: 'vertical-text',
                                icon: 'UIEditor.cursor.vertical-text'
                            },
                            {
                                label: 'alias',
                                value: 'alias',
                                icon: 'UIEditor.cursor.alias'
                            },
                            {
                                label: 'copy',
                                value: 'copy',
                                icon: 'UIEditor.cursor.copy'
                            },
                            {
                                label: 'move',
                                value: 'move',
                                icon: 'UIEditor.cursor.move'
                            },
                            {
                                label: 'not-allowed',
                                value: 'not-allowed',
                                icon: 'UIEditor.cursor.not-allowed'
                            },
                            {
                                label: 'grab',
                                value: 'grab',
                                icon: 'UIEditor.cursor.grab'
                            },
                            {
                                label: 'grabbing',
                                value: 'grabbing',
                                icon: 'UIEditor.cursor.grabbing'
                            },
                            {
                                label: 'all-scroll',
                                value: 'all-scroll',
                                icon: 'UIEditor.cursor.all-scroll'
                            },
                            {
                                label: 'col-resize',
                                value: 'col-resize',
                                icon: 'UIEditor.cursor.col-resize'
                            },
                            {
                                label: 'row-resize',
                                value: 'row-resize',
                                icon: 'UIEditor.cursor.row-resize'
                            },
                            {
                                label: 'n-resize',
                                value: 'n-resize',
                                icon: 'UIEditor.cursor.n-resize'
                            },
                            {
                                label: 'e-resize',
                                value: 'e-resize',
                                icon: 'UIEditor.cursor.e-resize'
                            },
                            {
                                label: 's-resize',
                                value: 's-resize',
                                icon: 'UIEditor.cursor.s-resize'
                            },
                            {
                                label: 'w-resize',
                                value: 'w-resize',
                                icon: 'UIEditor.cursor.w-resize'
                            },
                            {
                                label: 'ne-resize',
                                value: 'ne-resize',
                                icon: 'UIEditor.cursor.ne-resize'
                            },
                            {
                                label: 'nw-resize',
                                value: 'nw-resize',
                                icon: 'UIEditor.cursor.nw-resize'
                            },
                            {
                                label: 'se-resize',
                                value: 'se-resize',
                                icon: 'UIEditor.cursor.se-resize'
                            },
                            {
                                label: 'sw-resize',
                                value: 'sw-resize',
                                icon: 'UIEditor.cursor.sw-resize'
                            },
                            {
                                label: 'ew-resize',
                                value: 'ew-resize',
                                icon: 'UIEditor.cursor.ew-resize'
                            },
                            {
                                label: 'ns-resize',
                                value: 'ns-resize',
                                icon: 'UIEditor.cursor.ns-resize'
                            },
                            {
                                label: 'nesw-resize',
                                value: 'nesw-resize',
                                icon: 'UIEditor.cursor.nesw-resize'
                            },
                            {
                                label: 'nwse-resize',
                                value: 'nwse-resize',
                                icon: 'UIEditor.cursor.nwse-resize'
                            },
                            {
                                label: 'zoom-in',
                                value: 'zoom-in',
                                icon: 'UIEditor.cursor.zoom-in'
                            },
                            {
                                label: 'zoom-out',
                                value: 'zoom-out',
                                icon: 'UIEditor.cursor.zoom-out'
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
                    type: 'shadow'
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
                },
                {
                    name: 'focusable',
                    displayName: uiEditor.getString('editor.property.focusable'),
                    type: 'boolean'
                },
                {
                    name: 'is:visible',
                    displayName: uiEditor.getString('editor.property.visible'),
                    type: 'boolean'
                },
                {
                    name: 'drawableState',
                    displayName: uiEditor.getString('editor.property.drawablestate'),
                    type: 'string'
                }
            ]
        }]
    }
}