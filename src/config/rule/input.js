import uniqueId from '@form-create/utils/lib/unique';
import { localeProps, makeRequiredRule } from '../../utils';
const label = '输入框';
const name = 'input';

export default {
  icon: 'icon-input',
  label,
  name,
  rule({ t }) {
    return {
      type: name,
      field: uniqueId(),
      title: t('components.input.name'),
      info: '',
      $required: false,
      props: {}
    };
  },
  props(_, { t }) {
    return localeProps(t, name + '.props',
      [
        makeRequiredRule(),
        { type: 'switch', field: 'round', title: '输入框是否圆角', props: { size: "small" } },
        {
          type: 'select',
          field: 'type',
          title: '类型',
          options: [
            { label: 'text', value: 'text' }, { label: 'textarea', value: 'textarea' },
            { label: 'number', value: 'number' }, { label: 'password', value: 'password' }
          ]
        },
        { type: 'inputNumber', field: 'maxlength', title: '最大输入长度', props: { min: 0, size: "small" } },
        { type: 'inputNumber', field: 'minlength', title: '最小输入长度', props: { min: 0, size: "small" } },
        { type: 'switch', field: 'showCount', title: '是否显示输入字数统计', props: { size: "small" } },
        { type: 'input', field: 'placeholder', title: '输入框占位文本' },
        { type: 'switch', field: 'clearable', title: '是否可清空', props: { size: "small" } },
        {
          type: 'radio', field: 'showPasswordOn', title: '显示密码的时机', options: [
            { value: 'click', label: 'click' },
            { value: 'mousedown', label: 'mousedown' },]
        },
        { type: 'switch', field: 'disabled', title: '禁用', props: { size: "small" } },
        {
          type: 'inputNumber',
          field: 'rows',
          info: t('components.input.props.rowsInfo'),
          title: '输入框行数',
          props: { min: 0 }
        },
        { type: 'switch', field: 'readonly', title: '是否只读', props: { size: "small" } },
        { type: 'switch', field: 'autofocus', title: '自动获取焦点', props: { size: "small" } }
      ]
    );
  }
};