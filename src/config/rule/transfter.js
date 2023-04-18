import uniqueId from '@form-create/utils/lib/unique';
import { h } from 'vue';
import { localeProps } from '../../utils';

const label = '穿梭框';
const name = 'n-transfer';

const generateData = () => {
  return Array.from({ length: 10 }).map((v, i) => ({
    label: 'Option ' + i,
    value: i,
    disabled: i % 4 === 0
  }))
};

export default {
  icon: 'icon-transfer',
  label,
  name,
  rule({ t }) {
    return {
      type: name,
      field: uniqueId(),
      title: t('components.n-transfer.name'),
      info: '',
      $required: false,
      props: {
        options: generateData()
      }
    };
  },
  props(_, { t }) {
    return localeProps(t, name + '.props', [
      {
        type: 'Struct',
        field: 'options',
        title: 'Transfer 的数据源',
        props: { defaultValue: [] }
      },
      {
        type: 'Struct',
        field: 'defaultValue',
        title: '默认值',
        props: { defaultValue: [] }
      },
      {
        type: 'input',
        field: 'sourceTitle',
        title: '源项标题'
      },
      {
        type: 'input',
        field: 'targetTitle',
        title: '目标项标题'
      },
      {
        type: 'switch',
        field: 'sourceFilterable',
        title: '源项是否可过滤',
        props: {
          size: 'small'
        },
        control: [
          {
            value: true,
            rule: [
              {
                type: 'input',
                field: 'sourceFilterPlaceholder',
                title: '源项搜索框中的占位符'
              }
            ]
          }
        ]
      },
      {
        type: 'switch',
        field: 'targetFilterable',
        title: '目标项是否可过滤',
        props: {
          size: 'small'
        },
        control: [
          {
            value: true,
            rule: [
              {
                type: 'input',
                field: 'targetFilterPlaceholder',
                info: t('bug.transfter'),
                title: '目标项搜索框中的占位符'
              }
            ]
          }
        ]
      },
      {
        type: 'switch',
        field: 'showSelected',
        title: '是否显示源列表中选中的项',
        value: true,
        props: {
          size: 'small',
        }
      },
    ])
  }

};
