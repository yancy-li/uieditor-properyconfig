export default function(uiEditor) {
    return {
        rule: 'ht.ui.DateTimePane',
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
                id: 'DateTimePane',
                displayName: uiEditor.getString('toolkit.datetimepane'),
                properties: [
                    {
                        name: 'dropdownFunc',
                        displayName: uiEditor.getString('editor.property.isdatetimepane'),
                        type: 'boolean',
                        getValue: function (view) {
                            return view.a('dropdownFunc') === 'datetimepane';
                        },
                        setValue: function (view, value) {
                            view.a('dropdownFunc', value ? 'datetimepane': null);
                        },
                        
                        isVisible: function (views) {
                            var visible = true;
                            var inDateTimeDropDown = function(v) {
                                if (v instanceof ht.ui.RefViewGroup) {
                                    var child = v.getChildren().get(0);
                                    
                                    if (!(child instanceof ht.ui.DateTimePane)) return;
                                }
                                
                                while (v) {
                                    if (v instanceof ht.ui.DateTimeDropDownView) {
                                        return true;
                                    }
                                    v = v.getParent();
                                }
                            }
                            
                            for (var i = 0, length = views.length; i < length; i++) {
                                var view = views[i];
                                if (!inDateTimeDropDown(view)) {
                                    visible = false;
                                    break;
                                }
                            }
                            return visible;
                        }
                    },
                    {
                        name: 'dropdownFunc',
                        displayName: uiEditor.getString('editor.property.dropdownfunc'),
                        type: 'enum',
                        getValue: function (view) {
                            return view.a('dropdownFunc');
                        },
                        setValue: function (view, value) {
                            view.a('dropdownFunc', value);
                        },
                        editorParams: {
                            readOnly: true,
                            datas: [
                                {
                                    label: uiEditor.getString('editor.property.daterangepane_start'),
                                    value: 'daterangepane_start'
                                },
                                {
                                    label: uiEditor.getString('editor.property.daterangepane_end'),
                                    value: 'daterangepane_end'
                                },
                                {
                                    label: uiEditor.getString('editor.property.nothing'),
                                    value: null
                                }
                            ]
                        },
                        isVisible: function (views) {
                            var visible = true;
                            var inDateRangeDropDown = function(v) {
                                if (!(v instanceof ht.ui.DateTimePane)) {
                                    if (v instanceof ht.ui.RefViewGroup) {
                                        var child = v.getChildren().get(0);
                                        
                                        if (!(child instanceof ht.ui.DateTimePane)) return;
                                    }
                                }
                                
                                while (v) {
                                    if (v instanceof ht.ui.DateRangeDropDownView) {
                                        return true;
                                    }
                                    v = v.getParent();
                                }
                            }
                            
                            for (var i = 0, length = views.length; i < length; i++) {
                                var view = views[i];
                                if (!inDateRangeDropDown(view)) {
                                    visible = false;
                                    break;
                                }
                            }
                            return visible;
                        }
                    },
                    {
                        name: 'value',
                        displayName: uiEditor.getString('editor.property.value'),
                        type: 'datetime',
                        setValue: function(view, value) {
                            view.setValue(new Date(value));
                        },
                        getValue: function(view) {
                            var value = view.getValue();
                            if (value)
                                return ht.Default.formatDate(value, 'YYYY-MM-DD HH:mm:ss')
                        }
                    },
                    {
                        name: 'type',
                        displayName: uiEditor.getString('editor.property.type'),
                        type: 'enum',
                        editorParams: {
                            readOnly: true,
                            datas: ['date', 'datetime', 'month', 'year', 'time']
                        }
                    },
                    {
                        name: 'weekLabels',
                        displayName: uiEditor.getString('editor.property.weeklabels'),
                        type: 'string',
                        setValue: function(view, value) {
                            if (value) {
                                view.setWeekLabels(value.split(','));
                            }
                            else {
                                view.setWeekLabels(null);
                            }
                        }
                    },
                    {
                        name: 'timeLabels',
                        displayName: uiEditor.getString('editor.property.timelabels'),
                        type: 'string',
                        setValue: function(view, value) {
                            if (value) {
                                view.setTimeLabels(value.split(','));
                            }
                            else {
                                view.setTimeLabels(null);
                            }
                        }
                    },
                    {
                        name: 'yearLabel',
                        displayName: uiEditor.getString('editor.property.yearlabel'),
                        desc: uiEditor.getString('editor.property.desc.dateformat'),
                        type: 'string'
                    },
                    {
                        name: 'monthLabel',
                        displayName: uiEditor.getString('editor.property.monthlabel'),
                        desc: uiEditor.getString('editor.property.desc.dateformat'),
                        type: 'string'
                    },
                    {
                        name: 'headerTitleFont',
                        displayName: uiEditor.getString('editor.property.headertitlefont'),
                        type: 'font'
                    },
                    {
                        name: 'headerTitleColor',
                        displayName: uiEditor.getString('editor.property.headertitlecolor'),
                        type: 'color'
                    },
                    {
                        name: 'hoverHeaderTitleColor',
                        displayName: uiEditor.getString('editor.property.hoverheadertitlecolor'),
                        type: 'color'
                    },
                    {
                        name: 'yearMonthOrder',
                        displayName: uiEditor.getString('editor.property.yearmonthorder'),
                        type: 'simpleEnum',
                        editorParams: {
                            datas: [{
                                text: 'yearMonth',
                                value: 'yearMonth'
                            },
                            {
                                text: 'monthYear',
                                value: 'monthYear'
                            }
                            ]
                        }
                    },
                    {
                        name: 'labelFont',
                        displayName: uiEditor.getString('editor.property.labelfont'),
                        type: 'font'
                    },
                    {
                        name: 'prevYear',
                        displayName: uiEditor.getString('editor.property.prevyear'),
                        type: 'drawable'
                    },
                    {
                        name: 'hoverPrevYear',
                        displayName: uiEditor.getString('editor.property.hoverprevyear'),
                        type: 'drawable'
                    },
                    {
                        name: 'activePrevYear',
                        displayName: uiEditor.getString('editor.property.activeprevyear'),
                        type: 'drawable'
                    },
                    {
                        name: 'nextYear',
                        displayName: uiEditor.getString('editor.property.nextyear'),
                        type: 'drawable'
                    },
                    {
                        name: 'hoverNextYear',
                        displayName: uiEditor.getString('editor.property.hovernextyear'),
                        type: 'drawable'
                    },
                    {
                        name: 'activeNextYear',
                        displayName: uiEditor.getString('editor.property.activenextyear'),
                        type: 'drawable'
                    },
                    {
                        name: 'prevMonth',
                        displayName: uiEditor.getString('editor.property.prevmonth'),
                        type: 'drawable'
                    },
                    {
                        name: 'hoverPrevMonth',
                        displayName: uiEditor.getString('editor.property.hoverprevmonth'),
                        type: 'drawable'
                    },
                    {
                        name: 'activePrevMonth',
                        displayName: uiEditor.getString('editor.property.activeprevmonth'),
                        type: 'drawable'
                    },
                    {
                        name: 'nextMonth',
                        displayName: uiEditor.getString('editor.property.nextmonth'),
                        type: 'drawable'
                    },
                    {
                        name: 'hoverNextMonth',
                        displayName: uiEditor.getString('editor.property.hovernextmonth'),
                        type: 'drawable'
                    },
                    {
                        name: 'activeNextMonth',
                        displayName: uiEditor.getString('editor.property.activenextmonth'),
                        type: 'drawable'
                    },
                    {
                        name: 'weekTitleColor',
                        displayName: uiEditor.getString('editor.property.weektitlecolor'),
                        type: 'color'
                    },
                    {
                        name: 'gridColor',
                        displayName: uiEditor.getString('editor.property.gridcolor'),
                        type: 'color'
                    },
                    {
                        name: 'hoverGridColor',
                        displayName: uiEditor.getString('editor.property.hovergridcolor'),
                        type: 'color'
                    },
                    {
                        name: 'selectGridColor',
                        displayName: uiEditor.getString('editor.property.selectgridcolor'),
                        type: 'color'
                    },
                    {
                        name: 'disabledGridColor',
                        displayName: uiEditor.getString('editor.property.disabledgridcolor'),
                        type: 'color'
                    },
                    {
                        name: 'otherMonthGridColor',
                        displayName: uiEditor.getString('editor.property.othermonthgridcolor'),
                        type: 'color'
                    },
                    {
                        name: 'timeColor',
                        displayName: uiEditor.getString('editor.property.timecolor'),
                        type: 'color'
                    },
                    {
                        name: 'hoverTimeColor',
                        displayName: uiEditor.getString('editor.property.hovertimecolor'),
                        type: 'color'
                    },
                    {
                        name: 'disabledTimeColor',
                        displayName: uiEditor.getString('editor.property.disabledtimecolor'),
                        type: 'color'
                    },
                    {
                        name: 'timeAlign',
                        displayName: uiEditor.getString('editor.property.timealign'),
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
                        name: 'hoverGridBackground',
                        displayName: uiEditor.getString('editor.property.hovergridbackground'),
                        type: 'drawable',
                        editorParams: {
                            dateTimePaneSelectGridDrawableVisible: true
                        }
                    },
                    {
                        name: 'selectGridBackground',
                        displayName: uiEditor.getString('editor.property.selectgridbackground'),
                        type: 'drawable',
                        editorParams: {
                            dateTimePaneSelectGridDrawableVisible: true
                        }
                    },
                    {
                        name: 'rangeGridBackground',
                        displayName: uiEditor.getString('editor.property.rangegridbackground'),
                        type: 'drawable',
                        editorParams: {
                            dateTimePaneSelectGridDrawableVisible: true
                        }
                    },
                    {
                        name: 'hoverMonthGridBackground',
                        displayName: uiEditor.getString('editor.property.hovermonthgridbackground'),
                        type: 'drawable',
                        editorParams: {
                            dateTimePaneSelectGridDrawableVisible: true
                        }
                    },
                    {
                        name: 'selectMonthGridBackground',
                        displayName: uiEditor.getString('editor.property.selectmonthgridbackground'),
                        type: 'drawable',
                        editorParams: {
                            dateTimePaneSelectGridDrawableVisible: true
                        }
                    },
                    {
                        name: 'rangeMonthGridBackground',
                        displayName: uiEditor.getString('editor.property.rangemonthgridbackground'),
                        type: 'drawable',
                        editorParams: {
                            dateTimePaneSelectGridDrawableVisible: true
                        }
                    },
                    {
                        name: 'hoverYearGridBackground',
                        displayName: uiEditor.getString('editor.property.hoveryeargridbackground'),
                        type: 'drawable',
                        editorParams: {
                            dateTimePaneSelectGridDrawableVisible: true
                        }
                    },
                    {
                        name: 'selectYearGridBackground',
                        displayName: uiEditor.getString('editor.property.selectyeargridbackground'),
                        type: 'drawable',
                        editorParams: {
                            dateTimePaneSelectGridDrawableVisible: true
                        }
                    },
                    {
                        name: 'rangeYearGridBackground',
                        displayName: uiEditor.getString('editor.property.rangeyeargridbackground'),
                        type: 'drawable',
                        editorParams: {
                            dateTimePaneSelectGridDrawableVisible: true
                        }
                    },
                ]
            },
            {
                displayName: uiEditor.getString('editor.property.timelist'),
                collapse: true,
                getValue: function(view, property) {
                    var hoursList = view.getHoursList();
                    return hoursList[ht.Default.prefixGetter(property.name)]();
                },
                setValue: function(view, value, property) {
                    var name = property.name;
                    var hoursList = view.getHoursList();
                    var minutesList = view.getMinutesList();
                    var secondsList = view.getSecondsList();
                    hoursList[ht.Default.prefixSetter(name)](value);
                    minutesList[ht.Default.prefixSetter(name)](value);
                    secondsList[ht.Default.prefixSetter(name)](value);
                },
                extends: [
                    {
                        rule: 'ht.ui.ListView',
                        categoryId: 'basic',
                        filter: [
                            'background', 'border', 'padding', 'borderRadius', 'boxShadow', 'scrollBarSize', 'scrollBarColor',
                        ]
                    },
                    {
                        rule: 'ht.ui.ListView',
                        categoryId: 'ListView',
                        filter: [
                            'labelColor', 'hoverLabelColor', 'selectLabelColor', 'labelFont', 'rowHeight', 'rowLineVisible', 
                            'rowLineColor', 'rowLineSize', 'rowBackground', 'hoverRowBackground', 'selectRowBackground', 'rowIndent'
                        ]
                    }
                ]
            }
        ]
    }
}
