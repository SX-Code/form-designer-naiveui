import uniqueId from '@form-create/utils/lib/unique';
import { localeProps, makeOptionsRule, makeRequiredRule } from '../../utils/index';

const label = '树形控件';
const name = 'tree';

export default {
  icon: 'icon-tree',
  label,
  name,
  rule({ t }) {
    const opt = t('props.option');
    return {
      type: name,
      field: uniqueId(),
      title: t('components.tree.name'),
      info: '',
      effect: {
        fetch: ''
      },
      $required: false,
      props: {
        props: {
          label: 'label',
        },
        nodeKey: 'key',
        data: [1, 2].map(value => {
          return {
            label: opt + value,
            key: value,
            children: [
              {
                label: opt + value + value,
                key: value + "" + value,
              }
            ],
          }
        }),
      },
    };
  },
  props(_, { t }) {
    return localeProps(t, name + '.props', [
      makeRequiredRule(),
      makeOptionsRule(t, 'props.data', false),
      {
        type: 'switch',
        field: 'accordion',
        title: '是否使用手风琴展开模式',
        props: {
          size: 'small'
        }
      },
      {
        type: 'switch',
        field: 'animated',
        title: '是否有展开动画',
        value: true,
        props: {
          size: 'small'
        }
      },
      {
        type: 'switch',
        field: 'cancelable',
        title: '选中之后是否允许取消',
        value: true,
        props: {
          size: 'small'
        }
      },
      {
        type: 'switch',
        field: 'cascade',
        title: '是否关联选项',
        props: {
          size: 'small'
        }
      },
      {
        type: 'switch',
        field: 'checkable',
        title: '是否显示选择框',
        value: true,
        props: {
          size: 'small'
        },
        control: [
          {
            value: true,
            rule: [
              {
                type: 'select',
                field: 'checkboxPlacement',
                title: '复选框的位置',
                value: 'left',
                options: [
                  { label: '左边', value: 'left' },
                  { label: '右边', value: 'right' },
                ]
              }
            ]
          }
        ]
      },
      {
        type: 'select',
        field: 'checkStrategy',
        title: '勾选策略',
        value: 'all',
        info: t('components.tree.props.checkStrategyInfo'),
        options: [
          { label: t('components.tree.props.all'), value: 'all' },
          { label: t('components.tree.props.parent'), value: 'parent' },
          { label: t('components.tree.props.child'), value: 'child' }
        ]
      },
      {
        type: 'input',
        field: 'childrenField',
        title: '自定义 children 字段名',
        info: t('components.tree.props.customInfo'),
        props: {
          placeholder: 'children'
        }
      },
      {
        type: 'input',
        field: 'keyField',
        title: '自定义 key 字段名',
        props: {
          placeholder: 'key'
        }
      },
      {
        type: 'input',
        field: 'labelField',
        title: '自定义 label 字段名',
        props: {
          placeholder: 'label'
        }
      },
      {
        type: 'input',
        field: 'disabledField',
        title: '自定义 disabled 字段名',
        props: {
          placeholder: 'disabled'
        }
      },
    ]);
  }
};
