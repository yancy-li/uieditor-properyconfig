export default {
    rule: 'ht.ui.DateRangePicker',
    categories: [
        {
            id: 'basic',
            name: '基本属性',
            extends: [{
                rule: 'ht.ui.TextField',
                categoryId: 'basic'
            }]
        },
        {

            id: 'DateRangePicker',
            name: 'DateRangePicker',
            extends: [
                {
                    rule: 'ht.ui.DateTimePicker',
                    categoryId: 'DateTimePicker',
                    replace: [
                        {
                            name: 'value',
                            type: 'daterange'
                        }
                    ]
                }
            ]
        }
    ]
}