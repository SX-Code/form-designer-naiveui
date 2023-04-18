import uniqueId from '@form-create/utils/lib/unique';
import { localeProps, makeRequiredRule } from '../../utils';

const label = '时间选择器';
const name = 'timePicker';

export default {
  icon: 'icon-time',
  label,
  name,
  rule({ t }) {
    return {
      type: name,
      field: uniqueId(),
      title: t('components.timePicker.name'),
      info: '',
      $required: false,
      props: {},
    };
  },
  props(_, { t }) {
    return localeProps(t, name + '.props', [
      makeRequiredRule(),
      {
        type: 'Struct',
        field: 'pickerOptions',
        title: '当前时间日期选择器特有的选项',
        props: { defaultValue: {} }
      },
      {
        type: 'switch',
        field: 'inputReadonly',
        title: '设置输入框为只读',
        info: t('components.timePicker.props.inputReadonlyInfo'),
        props: {
          size: 'small'
        }
      },
      {
        type: 'switch',
        field: 'disabled',
        title: '禁用',
        props: {
          size: 'small'
        }
      },
      {
        type: 'switch',
        field: 'clearable',
        title: '是否可清空',
        value: false,
        props: {
          size: 'small'
        }
      },
      {
        type: 'input',
        field: 'placeholder',
        title: '选择框的占位符',
      },
      {
        type: 'input',
        field: 'timeZone',
        title: '时区',
        props: {
          disabled: true
        }
      },
      {
        type: 'switch',
        field: 'use-12-hours',
        title: '是否使用 12 小时制的面板',
        value: false,
        props: {
          size: 'small'
        }
      },
      {
        type: 'select',
        field: 'placement',
        title: '菜单的弹出位置',
        value: 'bottom',
        options: [
          { label: 'top-start', value: 'top-start' }, 
          { label: 'top', value: 'top' },
          { label: 'top-end', value: 'top-end' }, 
          { label: 'right-start', value: 'right-start' },
          { label: 'right', value: 'right' }, 
          { label: 'right-end', value: 'right-end' }, 
          { label: 'bottom-start', value: 'bottom-start' },
          { label: 'bottom', value: 'bottom' }, 
          { label: 'bottom-end', value: 'bottom-end' }, 
          { label: 'left-start', value: 'left-start' },
          { label: 'left', value: 'left' }, 
          { label: 'left-end', value: 'left-end' }, 
        ]
      }
    ]);
  }
};
