export default function(uiEditor) {
    return {
        rule: 'ht.ui.TableView',
        events: ['checkData', 'uncheckData', 'invalidateModel', 'beginEdit', 'endEdit', 'rendererInit']
    }
}