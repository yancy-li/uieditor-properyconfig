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
import viewProperties from './prop-config/view.js';
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

// 布局属性
import layoutParams from './prop-config/layoutParams';

// 事件列表 
import buttonEvents from './event-config/button'

var properties = [];
properties.push(viewProperties);
properties.push(buttonProperties);
properties.push(linkButtonProperties);
properties.push(menuButtonProperties);
properties.push(labelProperties);
properties.push(toggleButtonProperties);
properties.push(checkBoxProperties);
properties.push(radioButtonProperties);
properties.push(listProperties);
properties.push(treeProperties);
properties.push(sliderProperties);
properties.push(textFieldProperties);
properties.push(textAreaProperties);
properties.push(numberInputProperties);
properties.push(comboBoxProperties);
properties.push(colorPickerProperties);
properties.push(dateTimePickerProperties);
properties.push(dateRangePickerProperties);
properties.push(hBoxLayoutProperties);
properties.push(vBoxLayoutProperties);
properties.push(tabLayoutProperties);
properties.push(flowLayoutProperties);
properties.push(tablePaneProperties);
properties.push(treeTablePaneProperties);
properties.push(propertyPaneProperties);
properties.push(breadcrumbProperties);
properties.push(progressBarProperties);
properties.push(menuProperties);
properties.push(panelProperties);
properties.push(borderLayoutProperties);
properties.push(splitLayoutProperties);
properties.push(relativeLayoutProperties);
properties.push(gridLayoutProperties);
properties.push(echartPropeties);


window.uieditorPropertyConfig = {
    properties: properties,
    layoutParams: layoutParams,
    events: [buttonEvents]
}