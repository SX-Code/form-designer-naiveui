import uniqueId from '@form-create/utils/lib/unique';
import { localeProps, makeRequiredRule } from '../../utils';

const label = '日期选择器';
const name = 'datePicker';

export default {
  icon: 'icon-date',
  label,
  name,
  rule({ t }) {
    return {
      type: name,
      field: uniqueId(),
      title: t('components.datePicker.name'),
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
        info: t('components.datePicker.props.inputReadonlyInfo'),
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
        title: '是否支持清除',
        value: false,
        props: {
          size: 'small'
        }
      },
      {
        type: 'select',
        field: 'type',
        title: '日期选择器的类型',
        value: 'date',
        options: [
          { label: t('aboutTime.date'), value: 'date' },
          { label: t('aboutTime.datetime'), value: 'datetime' },
          { label: t('aboutTime.daterange'), value: 'daterange' },
          { label: t('aboutTime.datetimerange'), value: 'datetimerange' },
          { label: t('aboutTime.month'), value: 'month' }, 
          { label: t('aboutTime.monthrange'), value: 'monthrange'},
          { label: t('aboutTime.year'), value: 'year' },
          { label: t('aboutTime.yearrange'), value: 'yearrange'},
          { label: t('aboutTime.quarter'), value: 'quarter' },
          { label: t('aboutTime.quarterrange'), value: 'quarterrange' },
        ]
      },
      {
        type: 'input',
        field: 'placeholder',
        title: '非范围选择时的占位内容'
      },
      {
        type: 'input',
        field: 'format',
        title: '显示在输入框中的格式',
      },
      {
        type: 'select',
        field: 'placement',
        title: '面板的弹出位置',
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
