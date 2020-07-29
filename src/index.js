import viewProperties from './prop-config/view.js';
import contextmenuProperties from './prop-config/contextmenu';
import buttonProperties from './prop-config/button.js';
import labelProperties from './prop-config/label.js';
import toggleButtonProperties from './prop-config/togglebutton.js';
import checkBoxProperties from './prop-config/checkbox.js';
import radioButtonProperties from './prop-config/radiobutton';
import numberInputProperties from './prop-config/numberinput';
import comboBoxProperties from './prop-config/combobox';
import colorPickerProperties from './prop-config/colorpicker';
import dateTimePickerProperties from './prop-config/datetimepicker';
import dateRangePickerProperties from './prop-config/daterangepicker';
import sliderProperties from './prop-config/slider';
import textFieldProperties from './prop-config/textfield';
import textAreaProperties from './prop-config/textarea';
import linkButtonProperties from './prop-config/linkbutton';
import menuButtonProperties from './prop-config/menubutton';
import hBoxLayoutProperties from './prop-config/hboxlayout';
import vBoxLayoutProperties from './prop-config/vboxlayout';
import tabLayoutProperties from './prop-config/tablayout';
import flowLayoutProperties from './prop-config/flowlayout';
import tablePaneProperties from './prop-config/tablepane';
import listProperties from './prop-config/listview';
import treeProperties from './prop-config/treeview';
import treeTablePaneProperties from './prop-config/treetablepane';
import propertyPaneProperties from './prop-config/propertypane';
import breadcrumbProperties from './prop-config/breadcrumb';
import progressBarProperties from './prop-config/progressbar';
import menuProperties from './prop-config/menu';
import panelProperties from './prop-config/panel';
import borderLayoutProperties from './prop-config/borderlayout';
import splitLayoutProperties from './prop-config/splitlayout';
import relativeLayoutProperties from './prop-config/relativelayout';
import gridLayoutProperties from './prop-config/gridlayout';
import echartPropeties from './prop-config/echart';
import rateProperties from './prop-config/rate';
import paletteProperties from './prop-config/palette';

// 布局属性
import layoutParams from './prop-config/layoutParams';

// 事件列表 
import buttonEvents from './event-config/button'


window.uiEditorPropertyConfig = function(uiEditor) {
    var properties = [];
    properties.push(viewProperties(uiEditor));
    properties.push(contextmenuProperties(uiEditor));
    properties.push(buttonProperties(uiEditor));
    properties.push(linkButtonProperties(uiEditor));
    properties.push(menuButtonProperties(uiEditor));
    properties.push(labelProperties(uiEditor));
    properties.push(toggleButtonProperties(uiEditor));
    properties.push(checkBoxProperties(uiEditor));
    properties.push(radioButtonProperties(uiEditor));
    properties.push(listProperties(uiEditor));
    properties.push(treeProperties(uiEditor));
    properties.push(sliderProperties(uiEditor));
    properties.push(textFieldProperties(uiEditor));
    properties.push(textAreaProperties(uiEditor));
    properties.push(numberInputProperties(uiEditor));
    properties.push(comboBoxProperties(uiEditor));
    properties.push(colorPickerProperties(uiEditor));
    properties.push(dateTimePickerProperties(uiEditor));
    properties.push(dateRangePickerProperties(uiEditor));
    properties.push(hBoxLayoutProperties(uiEditor));
    properties.push(vBoxLayoutProperties(uiEditor));
    properties.push(tabLayoutProperties(uiEditor));
    properties.push(flowLayoutProperties(uiEditor));
    properties.push(tablePaneProperties(uiEditor));
    properties.push(treeTablePaneProperties(uiEditor));
    properties.push(propertyPaneProperties(uiEditor));
    properties.push(breadcrumbProperties(uiEditor));
    properties.push(progressBarProperties(uiEditor));
    properties.push(menuProperties(uiEditor));
    properties.push(panelProperties(uiEditor));
    properties.push(borderLayoutProperties(uiEditor));
    properties.push(splitLayoutProperties(uiEditor));
    properties.push(relativeLayoutProperties(uiEditor));
    properties.push(gridLayoutProperties(uiEditor));
    properties.push(echartPropeties(uiEditor));
    properties.push(rateProperties(uiEditor));
    properties.push(paletteProperties(uiEditor));

    return {
        properties: properties,
        layoutParams: layoutParams(uiEditor),
        events: [buttonEvents(uiEditor)]
    }
} 