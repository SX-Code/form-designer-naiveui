import './style/index.css';
import formCreate from './utils/form';
import {designerForm} from './utils/form';
import Fetch from './components/Fetch.vue';
import Struct from './components/Struct.vue';
import {makeOptionsRule} from './utils/index';
import DragBox from './components/DragBox.vue';
import DragTool from './components/DragTool.vue';
import Required from './components/Required.vue';
import Validate from './components/Validate.vue';
import unique from '@form-create/utils/lib/unique';
import FcDesigner from './components/FcDesigner.vue';
import draggable from 'vuedraggable/src/vuedraggable';
import ColorPicker from './components/ColorPicker.vue'
import CustomAlert from './components/CustomAlert.vue';
import FcEditor from '@form-create/component-wangeditor';
import TableOptions from './components/TableOptions.vue';

designerForm.component('draggable', draggable);
designerForm.component('DragTool', DragTool);
designerForm.component('DragBox', DragBox);
designerForm.component('Required', Required);
designerForm.component('Validate', Validate);
designerForm.component('Struct', Struct);
designerForm.component('TableOptions', TableOptions);
designerForm.component('ColorPicker', ColorPicker);
designerForm.component('CustomAlert', CustomAlert);
designerForm.component('FcEditor', FcEditor);
designerForm.component('Fetch', Fetch);
formCreate.component('FcEditor', FcEditor);


designerForm.register('_fc', {
  init(fc, rule) {
      rule._id = unique();
      if (fc.repeat)
          rule.field = unique();
      if (fc.value) {
          rule.effect._fc = false;
      }
  }
});

designerForm.register('_fc_tool', {
  init(_, rule) {
      rule.props.unique = unique();
  }
});

const install = function (Vue) {
  Vue.component('FcDesigner', FcDesigner);
};

FcDesigner.install = install;
FcDesigner.makeOptionsRule = makeOptionsRule;
FcDesigner.formCreate = formCreate;
FcDesigner.designerForm = designerForm

export default FcDesigner;

export {formCreate, designerForm, install};