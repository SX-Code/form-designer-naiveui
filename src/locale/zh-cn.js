const ZhCn = {
    name: 'zh-cn',
    form: {
        field: '字段 ID',
        title: '字段名称',
        info: '提示信息',
        control: '联动数据',
        clear: '清空值',
        refresh: '刷新',
        labelPlacement: '标签位置',
        size: '表单尺寸',
        labelWidth: '标签宽度',
        showRequireMark: '不显示必填的星号',
        showRequireMarkInfo: '不可逆操作！！！',
        hideRequireMarkLabel: '不显示',
        placementRequireMark: '必填星号的位置',
        showFeedback: '是否展示校验反馈',
        submitBtn: '是否显示表单提交按钮',
        resetBtn: '是否显示表单重置按钮',
        submit: '提交',
        reset: '重置',
    },
    validate: {
        type: '字段类型',
        typePlaceholder: '请选择',
        trigger: '触发方式',
        mode: '验证方式',
        modes: {
            required: '必填',
            pattern: '正则表达式',
            min: '最小值',
            max: '最大值',
            len: '长度',
        },
        message: '错误信息',
        auto: '自动获取',
        autoRequired: '请输入{title}',
        autoMode: '请输入正确的{title}',
        requiredPlaceholder: '请输入提示语',
    },
    tableOptions: {
        handle: '操作',
        add: '添加',
    },
    struct: {
        title: '编辑数据',
        submit: '确 定',
        cancel: '取 消',
        error: '输入内容格式有误',
    },
    fetch: {
        action: '接口',
        actionRequired: '请数据接口',
        method: '请求方式',
        dataType: '提交方式',
        data: '附带数据',
        headers: 'header信息',
        parse: '解析函数',
        parseInfo: '解析接口数据，返回组件所需的数据结构',
        parseValidate: '请输入正确的解析函数',
    },
    designer: {
        preview: '预 览',
        clear: '清 空',
        clearConfirm: '清空',
        clearCancel: '取消',
        clearConfirmTitle: '清空后将不能恢复，确定要清空吗？',
        config: {
            component: '组件配置',
            form: '表单配置',
            rule: '基础配置',
            props: '属性配置',
            validate: '验证配置',
        },
    },
    menu: {
        main: '表单组件',
        aide: '辅助组件',
        layout: '布局组件',
    },
    props: {
        required: '是否必填',
        options: '选项数据',
        option: '选项',
        optionsType: {
            json: 'JSON数据',
            fetch: '接口数据',
            struct: '静态数据',
        }
    },
    components: {
        radio: {
            name: '单选框',
            props: {
                disabled: '是否禁用',
                type: '按钮形式',
                textColor: '按钮形式的 Radio 激活时的文本颜色',
                fill: '按钮形式的 Radio 激活时的填充色和边框色'
            }
        },
        checkbox: {
            name: '多选框',
            props: {
                type: '按钮类型',
                disabled: '是否禁用',
                min: '可被勾选的 checkbox 的最小数量',
                max: '可被勾选的 checkbox 的最大数量',
                textColor: '按钮形式的 Checkbox 激活时的文本颜色',
                fill: '按钮形式的 Checkbox 激活时的填充色和边框色'
            }
        },
        input: {
            name: '输入框',
            props: {
                type: '类型',
                maxlength: '最大输入长度',
                minlength: '最小输入长度',
                showWordLimit: '是否显示输入字数统计',
                placeholder: '输入框占位文本',
                clearable: '是否可清空',
                showPassword: '是否显示切换密码图标',
                disabled: '禁用',
                rowsInfo: '只对 type="textarea" 有效',
                rows: '输入框行数',
                readonly: '是否只读',
                resize: '控制是否能被用户缩放',
                autofocus: '自动获取焦点'
            }
        },
        inputNumber: {
            name: '计数器',
            props: {
                min: '设置计数器允许的最小值',
                max: '设置计数器允许的最大值',
                step: '计数器步长',
                precision: '数值保留的精度值',
                stepStrictly: '是否只能输入 step 的倍数',
                disabled: '是否禁用计数器',
                showButton: '是否有按钮',
                buttonPlacement: '加减按钮的位置',
                placeholder: '提示信息',
            }
        },
        select: {
            name: '选择器',
            props: {
                multiple: '是否多选',
                disabled: '是否禁用',
                clearable: '是否可以清空选项',
                maxTagCount: '多选标签的最大显示数量',
                placeholder: '占位符',
                filterable: '是否可以过滤',
                tag: '是否允许用户创建新条目',
                remote: '是否要异步获取选项',
                remoteInfo: '注意开启该选项过滤和创建新条目将不再生效',
                onSearch: '搜索时执行的回调',
                clearFilterAfterSelect: '是否在可过滤和多选的情况下选中一个选项后保留当前的搜索关键词',
                placement: '菜单的弹出位置',
            }
        },
        switch: {
            name: '开关',
            props: {
                disabled: '是否禁用',
                checkedValue: '选中时对应的值',
                uncheckedValue: '未选中时对应的值',
                size: '尺寸',
                sizeInfo: '开关的尺寸不随着表单变化（Bug?）',
            }
        },
        slider: {
            name: '滑块',
            props: {
                defaultValue: '默认值',
                min: '最小值',
                max: '最大值',
                disabled: '是否禁用',
                step: '步长',
                tooltip: '是否展示 tooltip',
                range: '是否为范围选择',
                vertical: '是否启用垂直模式',
                reverse: '是否倒转轨道',
                placement: "Tooltip 的弹出位置",
                showTooltip: '是否一直显示 tooltip',
                showTooltipInfo: '仅对非 range 生效',
            }
        },
        timePicker: {
            name: '时间选择器',
            props: {
                pickerOptions: '当前时间日期选择器特有的选项',
                inputReadonly: '设置输入框为只读',
                inputReadonlyInfo: '避免在移动设备上打开虚拟键盘',
                disabled: '禁用',
                editable: '文本框可输入',
                clearable: '是否可清空',
                placeholder: '选择框的占位符',
                'use-12-hours': '是否使用 12 小时制的面板',
                timeZone: '格式化值时使用的市区',
                placement: '菜单弹出的位置'
            }
        },
        datePicker: {
            name: '日期选择器',
            props: {
                pickerOptions: '当前时间日期选择器特有的选项',
                inputReadonly: '设置输入框为只读',
                inputReadonlyInfo: '避免在移动设备上打开虚拟键盘',
                disabled: '禁用',
                type: '日期选择器的类型',
                clearable: '是否支持清除',
                placeholder: '提示信息',
                format: '显示在输入框中的格式',
                placement: '面板的弹出位置',
            }
        },
        rate: {
            name: '评分',
            props: {
                size: '图标尺寸',
                sizeInfo: '评分的尺寸不随着表单变化（Bug?）',
                count: '图标个数',
                defaultValue: '默认已激活图标个数',
                readonly: '只读，交互失效',
                allowHalf: '允许只激活一半图标',
                clearable: '是否可清空',
                clearableInfo: '在点击当前值对应的图标后值会被设为 null',
                color: '已激活图标颜色',
            }
        },
        colorPicker: {
            name: '颜色选择器',
            props: {
                confirm: '确定',
                clear: '清除',
                disabled: '是否禁用',
                actions: '显示按钮',
                showAlpha: '是否可调节 alpha 通道',
                defaultValue: '默认的颜色值',
                modes: '颜色选择器支持颜色的格式',
                modesInfo: '注意一旦你在某个模式下选择了值，颜色选择器值的格式将跟随这个格式'
            }
        },
        row: {
            name: '栅格布局',
            props: {
                gutter: '栅格间隔',
            }
        },
        col: {
            name: '格子',
            props: {
                span: '栅格占据的列数',
                offset: '栅格左侧的间隔格数',
                push: '栅格向右移动格数',
                pull: '栅格向左移动格数'
            }
        },
        tab: {
            name: '标签页',
            props: {    
                type: '标签类型',
                size: '标签页的尺寸',
                trigger: '触发 tab 的方式',
                barWidth: '标签条的宽度',
                closable: '标签是否可关闭',
                animated: '标签页切换是否使用动画',
                tabsPadding: '全部标签最左和最右的 padding',
                defaultValue: '默认展示标签页的标识',
                closableInfo: '只在标签的 type 为 card 时生效',
                defaultValueInfo: '修改对应标签页标识后需要同时更新该值',
                justifyContent: 'flex 布局下主轴的排列方式',
                justifyContentInfo: "只对 'line' 和 'bar' 类型生效",

            }
        },
        'tab-pane': {
            name: '标签页',
            props: {
                name: '标签页标识',
                tab: '选项卡标题',
                disabled: '是否禁用',
                closable: '是否允许关闭标签',
                nameInfo: '修改标识需要同步更新父组件的标识',
                closableInfo: '只在标签的 type 为 card 时生效',
                displayDirective: '选择性渲染使用的指令',
                if: '内容会随切换重置',
                show: '内容不随切换重置',
                showLazy: '内容不随切换重置且延迟加载'
            }
        },
        'n-divider': {
            name: '分割线',
            props: {
                vertical: '是否垂直分隔',
                formCreateChild: '设置分割线文案',
                titlePlacement: '标题的位置'
            }
        },
        cascader: {
            name: '级联选择器',
            props: {
                props: '配置选项',
                size: '尺寸',
                cascade: '在多选时是否关联选项',
                placeholder: '提示信息',
                disabled: '是否禁用',
                clearable: '是否支持清空选项',
                filterable: '是否可搜索',
                filterableInfo: 'remote 被设定时不生效',
                showPath: '是否在选择器中显示选项路径',
                multiple: '是否支持多选',
                clearFilterAfterSelect: '是否在可过滤和多选的情况下选中一个选项后保留当前的搜索关键词',
                placement:'菜单的弹出位置',
                maxTagCount: '多选标签的最大显示数量',
                separator: '数据分隔符',
                checkStrategy: '勾选策略',
                checkStrategyInfo: '指定显示的勾选节点',
                all: '显示全部选中节点',
                parent: '只显示父节点',
                parentInfo: '当父节点下所有子节点都选中时，对于单选无效',
                child: '只显示子节点',
            }
        },
        upload: {
            name: '上传',
            props: {
                action: '请求提交的地址(必填)',
                headers: 'HTTP 请求需要附加的 Headers',
                multiple: '是否支持多个文件',
                data: '提交表单需要附加的数据',
                name: '文件在提交表单中的字段名',
                withCredentials: '是否携带 Cookie',
                accept: '接受的文件类型（thumbnail-mode 模式下此参数无效）',
                acceptInfo: '参考 https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/input/file#accept',
                defaultUpload: '选择文件时候是否默认上传',
                disabled: '是否禁用',
                max: '限制上传文件数量',
                showCancelButton: '是否显示取消按钮',
                showDownloadButton: '是否显示下载按钮',
                showRemoveButton: '是否显示删除按钮',
                showRetryButton: '是否显示重新上传按钮',
                showFileList: '是否显示文件列表',
                showPreviewButton: '是否允许显示预览按钮',
                showPreviewButtonInfo: '在 list-type 为 image-card 时生效',
            }
        },
        'n-transfer': {
            name: '穿梭框',
            props: {
                data: 'Transfer 的数据源',
                defaultValue: '默认值',
                showSelected: '是否显示源列表中选中的项',
                sourceFilterable: '源项是否可过滤',
                sourceFilterPlaceholder: '源项搜索框中的占位符',
                targetFilterable: '目标项是否可过滤',
                targetFilterPlaceholder: '目标项搜索框中的占位符',
                targetTitle: '目标项标题',
                sourceTitle: '源项标题',
            }
        },
        tree: {
            name: '树形控件',
            props: {
                accordion: '是否使用手风琴展开模式',
                animated: '是否有展开动画',
                cancelable: '选中之后是否允许取消',
                cascade: '是否关联选项',
                checkable: '是否显示选择框',
                checkboxPlacement: '复选框的位置',
                checkStrategy: '勾选策略',
                checkStrategyInfo: '指定勾选回调返回的值',
                all: '回调函数值为全部选中节点',
                parent: '回调函数值为父节点',
                child: '回调函数值为子节点',
                childrenField: '自定义 children 字段名',
                keyField: '自定义 key 字段名',
                labelField: '自定义 label 字段名',
                disabledField: '自定义 disabled 字段名',
            }
        },
        'n-alert': {
            name: '提示',
            description: 'description',
            props: {
                title: '标题',
                type: '类型',
                description: '描述',
                closable: '是否可关闭',
                showIcon: '是否显示图标',
                center: '组件居中',
                width: '设置宽度'
            }
        },
        span: {
            name: '文字',
            props: {
                formCreateTitle: '标题',
                formCreateChild: '内容'
            }
        },
        div: {
            name: '间距',
            props: {
                height: '高度',
            }
        },
        'n-button': {
            name: '按钮',
            props: {
                formCreateChild: '按钮的内容',
                size: '按钮的尺寸',
                type: '按钮的类型',
                color: '按钮颜色',
                textColor: '按钮文字颜色',
                round: '按钮是否显示圆角',
                circle: '按钮是否为圆形',
                loading: '按钮是否显示加载状态',
                disabled: '按钮是否禁用',
                secondary: '是否是次要按钮',
                tertiary: '是否是三级按钮',
                quaternary: '是否是四级按钮',
                text: '是否显示为文本按钮',
                dashed: '按钮边框是否为虚线',
                ghost: '按钮是否透明',
                tag: '按钮需要被渲染成什么标签',
                strong: '按钮文字是否加粗'
            }
        },
        'fc-editor': {
            name: '富文本框',
            props: {
                disabled: '是否禁用'
            }
        }
    },
    aboutTime: {
        date: '日期',
        datetime: '日期时间',
        daterange: '日期范围',
        datetimerange: '日期时间范围',
        month: '月份',
        monthrange: '月份范围',
        year: '年份',
        yearrange: '年份范围',
        quarter: '季度',
        quarterrange: '季度范围',
    },
    bug: {
        transfter: "跟我隔这玩呢？(NaiveUI's BUG)"
    },
};

export default ZhCn;

