import uniqueId from '@form-create/utils/lib/unique';
import { localeProps, makeOptionsRule, makeRequiredRule } from '../../utils/index';

const label = '级联选择器';
const name = 'cascader';

export default {
  icon: 'icon-cascader',
  label,
  name,
  rule({ t }) {
    const opt = t('props.option');
    return {
      type: name,
      field: uniqueId(),
      title: t('components.cascader.name'),
      info: '',
      effect: {
        fetch: ''
      },
      $required: false,
      props: {
        options: [1, 2].map(value => {
          return {
            label: opt + value,
            value,
            children: [],
          }
        }),
      }
    };
  },
  props(_, { t }) {
    return localeProps(t, name + '.props', [
      makeRequiredRule(),
      makeOptionsRule(t, 'props.options', false),
      {
        type: 'input',
        field: 'placeholder',
        title: '提示信息'
      },
      {
        type: 'switch',
        field: 'disabled',
        title: '是否禁用',
        props: {
          size: 'small'
        }
      },
      {
        type: 'switch',
        field: 'clearable',
        title: '值是否可清除',
        props: {
          size: 'small'
        }
      },
      {
        type: 'switch',
        field: 'filterable',
        title: '是否可搜索',
        info: t('components.cascader.props.filterableInfo'),
        props: {
          size: 'small'
        }
      },
      {
        type: 'switch',
        field: 'multiple',
        title: '是否支持多选',
        props: {
          size: 'small'
        }
      },
      {
        type: 'switch',
        field: 'cascade',
        title: '在多选时是否关联选项',
        props: {
          size: 'small'
        }
      },
      {
        type: 'inputNumber',
        field: 'maxTagCount',
        title: '多选标签的最大显示数量',
        props: { 
          min: 0,
          placeholder: '全部显示'
        }
      },
      {
        type: 'select',
        field: 'checkStrategy',
        title: '勾选策略',
        value: 'all',
        info: t('components.cascader.props.checkStrategyInfo'),
        options: [
          { label: t('components.cascader.props.all'), value: 'all' },
          { label: t('components.cascader.props.parent'), value: 'parent' },
          { label: t('components.cascader.props.child'), value: 'child' } 
        ]
      },
      {
        type: 'switch',
        field: 'clearFilterAfterSelect',
        title: '是否在可过滤和多选的情况下选中一个选项后保留当前的搜索关键词',
        value: true,
        props: {
          checkedValue: false,
          uncheckedValue: true,
          size: 'small'
        }
      },
      {
        type: 'switch',
        field: 'showPath',
        title: '是否在选择器中显示选项路径',
        value: true,
        props: {
          size: 'small'
        }
      },
      {
        type: 'input',
        field: 'separator',
        title: '数据分隔符',
        props: {
          placeholder: '/'
        }
      },
      {
        type: 'input',
        field: 'labelField',
        title: '自定义 label 字段名',
        info: t('components.cascader.props.customInfo'),
        props: {
          placeholder: 'label'
        }
      },
      {
        type: 'input',
        field: 'valueField',
        title: '自定义 value 字段名',
        props: {
          placeholder: 'value'
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
