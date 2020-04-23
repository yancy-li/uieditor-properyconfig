export default {
    rule: 'ht.ui.View',
    categories: [
        {
            id: 'basic',
            name: '基础属性',
            properties: [
                {
                    name: 'id',
                    type: 'string',
                    desc: '唯一标识'
                },
                {
                    name: 'background',
                    type: 'drawable',
                    desc: '组件背景'
                },
                {
                    name: 'border',
                    type: 'border',
                    desc: '组件边框，请先选择边框类型再调节边框参数'
                },
                {
                    name: 'Padding',
                    type: 'padding',
                    desc: '组件内边距；可以使用一个数字统一指定四边内边距；<br>也可以使用,分割分别指定上、右、下、左内边距，如：2,2,0,0'
                },
                {
                    name: 'zIndex',
                    type: 'int',
                    desc: '层级，数字越大越靠近上层显示'
                },
                {
                    name: 'borderRadius',
                    type: 'int'
                },
                {
                    name: 'overflow',
                    type: 'simpleEnum',
                    editorParams: {
                        datas: [{
                            text: 'hidden',
                            value: 'hidden'
                        },
                        {
                            text: 'visible',
                            value: 'visible'
                        }]
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
                }
            ]
        }
    ]
}