const En = {
    name: 'en',
    form: {
        field: 'Field',
        title: 'Title',
        info: 'Info',
        control: 'Control',
        clear: 'Clear',
        refresh: 'Refresh',
        labelPlacement: 'Label position',
        size: 'Form size',
        labelWidth: 'Label width',
        showRequireMark: 'The required asterisk is not displayed',
        showRequireMarkInfo: 'It is irreversible!!!',
        hideRequireMarkLabel: 'hide',
        placementRequireMark: 'Require mark placement',
        showFeedback: 'Display verification Feedback',
        submitBtn: 'Whether to display the form submit button',
        resetBtn: 'Whether to display the form reset button',
        submit: 'Submit',
        reset: 'Reset',
    },
    validate: {
        type: 'Value type',
        typePlaceholder: 'Please select',
        trigger: 'Trigger mode',
        mode: 'Verification method',
        modes: {
            required: 'required',
            pattern: 'regular expression',
            min: 'minimum value',
            max: 'maximum value',
            len: 'length',
        },
        message: 'Error message',
        auto: 'Get automatically',
        autoRequired: 'Please enter {title}',
        autoMode: 'Please enter the correct {title}',
        requiredPlaceholder: 'Please enter a prompt',
    },
    tableOptions: {
        handle: 'Delete',
        add: 'Add',
    },
    struct: {
        title: 'Edit Data',
        submit: 'OK',
        cancel: 'Cancel',
        error: 'The format of the input content is incorrect',
    },
    fetch: {
        action: 'Action',
        actionRequired: 'Please data action',
        method: 'Method',
        dataType: 'Date type',
        data: 'Attached data',
        headers: 'Headers',
        parse: 'Analysis function',
        parseInfo: 'Parse the interface data and return the data structure required by the component',
        parseValidate: 'Please enter the correct parsing function',
    },
    designer: {
        preview: 'Preview',
        clear: 'Clear',
        clearConfirm: 'Clear',
        clearCancel: 'Cancel',
        clearConfirmTitle: 'It will not be restored after cleared, are you sure you want to clear it? ',
        config: {
            component: 'Component',
            form: 'Form',
            rule: 'Basic',
            props: 'Property',
            validate: 'Verify',
        },
    },
    menu: {
        main: 'Form',
        aide: 'Auxiliary',
        layout: 'Layout',
    },
    props: {
        required: 'Is it required',
        options: 'Option data',
        option: 'Option',
        optionsType: {
            json: 'JSON',
            fetch: 'Fetch',
            struct: 'Struct',
        }
    },
    components: {
        radio: {
            name: 'Radio',
            props: {
                disabled: 'Whether to disable',
                type: 'Button form',
                textColor: 'The text color of the radio when the button is activated',
                fill: 'The fill color and border color when the radio in the button form is activated'
            }
        },
        checkbox: {
            name: 'Checkbox',
            props: {
                type: 'Button type',
                disabled: 'Whether to disable',
                min: 'The minimum number of checkboxes that can be checked',
                max: 'The maximum number of checkboxes that can be checked',
                textColor: 'The text color of the checkbox in the button form when it is activated',
                fill: 'The fill color and border color of the checkbox in the button form when it is activated'
            }
        },
        input: {
            name: 'Input',
            props: {
                type: 'Type',
                maxlength: 'Maximum input length',
                minlength: 'Minimum input length',
                showWordLimit: 'Whether to display input word count statistics',
                placeholder: 'Input box placeholder text',
                clearable: 'Whether it can be cleared',
                showPassword: 'Whether to display the switch password icon',
                disabled: 'Disabled',
                rowsInfo: 'Only works when type is \'textarea\'',
                rows: 'Number of input box rows',
                readonly: 'Whether read-only',
                autofocus: 'Automatically acquire focus'
            }
        },
        inputNumber: {
            name: 'Number',
            props: {
                min: 'Set the minimum value allowed by the counter',
                max: 'Set the maximum value allowed by the counter',
                step: 'Counter step size',
                precision: 'Precision of input value',
                stepStrictly: 'Whether only multiples of step can be entered',
                disabled: 'Whether to disable the counter',
                showButton: 'Whether to show increase/decrease buttons',
                buttonPlacement: 'Placement of add & minus button',
                placeholder: 'Placeholder'
            }
        },
        select: {
            name: 'Select',
            props: {
                multiple: 'Whether to choose multiple',
                disabled: 'Whether to disable',
                clearable: 'Is it possible to clear the options',
                maxTagCount: 'Whether to display the selected value in the form of text when multiple selection',
                placeholder: 'Placeholder',
                filterable: 'Whether options can be filtered',
                tag: 'Whether to allow users to create new entries',
                remote: 'Allows options to be fetched asynchronously',
                remoteInfo: "Note that if remote is set, filter & create new options won't work on options",
                onSearch: 'Callback triggered when a search is conducted',
                clearFilterAfterSelect: 'When multiple and filter is true, whether to clear filter keyword after select an option',
                placement: "Option menu's placement",
            }
        },
        switch: {
            name: 'Switch',
            props: {
                disabled: 'Whether to disable',
                checkedValue: 'Value of checked state',
                uncheckedValue: 'Value of unchecked state',
                size: 'Size',
                sizeInfo: 'The size of the Switch does not change with the form (Bug?)'
            }
        },
        slider: {
            name: 'Slider',
            props: {
                defaultValue: 'Default value',
                min: 'Max value of the slider',
                max: 'Min value of the slider',
                disabled: 'Whether the slider is disabled',
                step: 'Step size',
                tooltip: 'Whether to show tooltip',
                range: 'Whether it is a range selection',
                vertical: 'Whether to enable vertical mode',
                reverse: 'Whether to reverse the track',
                placement: "Tooltip's placement",
                showTooltip: 'Whether to always show tooltip',
                showTooltipInfo: 'Only work with non-range slider',
            }
        },
        timePicker: {
            name: 'TimePicker',
            props: {
                pickerOptions: 'Options specific to the current time and date picker',
                inputReadonly: 'Readonly state',
                inputReadonlyInfo: 'Avoids virtual keyboard on touch devices',
                disabled: 'Disabled',
                editable: 'The text box can be entered',
                clearable: 'Whether the value is clearable',
                placeholder: 'Placeholder',
                'use-12-hours': 'Whether to use a 12-hour clock panel',
                timeZone: 'Time zone to be used to format the value',
                placement: "Option menu's placement"
            }
        },
        datePicker: {
            name: 'DatePicker',
            props: {
                pickerOptions: 'Options specific to the current time and date picker',
                inputReadonly: 'Set the readonly attribute of the input',
                inputReadonlyInfo: 'Avoids virtual keyboard on touch devices',
                disabled: 'Disabled',
                type: 'Date picker type',
                clearable: 'Whether the date picker is clearable',
                placeholder: 'Placeholder',
                format: 'The format displayed in the input box',
                placement: "Panel's placement",
            }
        },
        rate: {
            name: 'Rate',
            props: {
                size: 'Icon size',
                sizeInfo: 'The size of the rate does not change with the form (Bug?)',
                count: 'Number of icons (max rating)',
                defaultValue: 'Default value of activated icons',
                readonly: 'Readonly state',
                allowHalf: 'Allow activating half of the icon',
                clearable: 'Whether the rate is clearable',
                clearableInfo: "Value will be set to null if you click on current value's corresponding icon",
                color: 'The color of the unselected icon',
            }
        },
        colorPicker: {
            name: 'ColorPicker',
            props: {
                confirm: 'Confrim',
                clear: 'Clear',
                disabled: 'Whether to disable the color picker',
                actions: 'The types of buttons to be shown in the panel',
                showAlpha: 'Whether the alpha channel can be adjusted',
                defaultValue: 'Default value of the picker',
                modes: 'The value format of the picker',
                modesInfo: 'Notice that value will follow the mode once you select a new value from the picker'
            }
        },
        row: {
            name: 'Grid Layout',
            props: {
                gutter: 'Grid Interval',
            }
        },
        col: {
            name: 'Grid',
            props: {
                span: 'The number of columns occupied by the grid',
                offset: 'Number of grids on the left side of the grid',
                push: 'The grid moves to the right by the number of grids',
                pull: 'The grid moves to the left by the number of grids'
            }
        },
        tab: {
            name: 'Tab',
            props: {    
                type: 'Tabs type',
                size: 'Size of tabs',
                trigger: 'Trigger of activating a tab',
                barWidth: 'The width of the tab bar',
                closable: 'Whether to allow the tag to be closed',
                animated: 'Whether to activate tab switching animation',
                tabsPadding: 'Left & right padding of the group of tabs',
                defaultValue: 'Default value in uncontrolled mode',
                closableInfo: "Only works when the tag's type is card",
                defaultValueInfo: 'After modifying the corresponding tab logo, the value needs to be updated at the same time',
                justifyContent: 'Justify-content value of flex layout',
                justifyContentInfo: "Only works with 'line' or 'bar' typed tabs",

            }
        },
        'tab-pane': {
            name: 'TabPane',
            props: {
                name: 'Required, the name of the tab',
                tab: 'Tab label',
                disabled: 'Whether to disable the tabs',
                closable: 'Whether to allow the tag to be closed',
                nameInfo: 'Modifying the identity needs to update the identity of the parent component synchronously',
                closableInfo: "Only works when the tag's type is card",
                displayDirective: 'The directive to use in conditionally rendering',
                if: "tab-panel's content will be reset after tab changes",
                show: "tab-panel's content won't be reset after tab changes",
                showLazy: "tab-panel's content will be lazily loaded && won't be reset after tab changes"
            }
        },
        'n-divider': {
            name: 'Divider',
            props: {
                vertical: 'Whether to show vertical direction',
                formCreateChild: 'Set the dividing line text',
                titlePlacement: 'Title placement'
            }
        },
        cascader: {
            name: 'Cascader',
            props: {
                props: 'Configuration options',
                size: 'Size',
                cascade: 'Whether to cascade the checkbox selection onto children',
                placeholder: 'Input box placeholder text',
                disabled: 'Whether to disable',
                clearable: 'Whether the cascader is clearable',
                filterable: 'Whether the cascader is searchable',
                filterableInfo: 'Whether the cascader is searchable',
                showPath: 'Whether to show the selected options as a path',
                multiple: 'Whether to allow multiple options being selected',
                clearFilterAfterSelect: 'When multiple and filter is true, whether to clear filter keyword after select an option',
                placement:'Cascader placement',
                maxTagCount: 'Max tag count in multiple select mode',
                separator: 'Selected option path value separator ',
                customInfo: 'All kinds of data will come from the back-end',
                labelField: 'The label field in CascaderOption',
                valueField: 'The value field in CascaderOption',
                checkStrategy: 'Check Strategy',
                checkStrategyInfo: 'The way to show checked options',
                all: 'showing all checked node',
                parent: 'showing all checked parent node',
                parentInfo: 'when all child node are checked (not working in single select mode)',
                child: 'showing all child node',
            }
        },
        upload: {
            name: 'Upload',
            props: {
                action: 'The URL to submit data to (required)',
                headers: 'The additional HTTP Headers of request',
                multiple: 'Allow multiple files to be selected',
                data: "The additional fileds data of HTTP request's form data",
                name: "The field name for the file(s) in the HTTP request's form data",
                withCredentials: 'Any credentials to be sent with the request (e.g. cookie)',
                accept: 'Accept the uploaded file type (this parameter is invalid in thumbnail-mode mode)',
                acceptInfo: 'Reference https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/input/file#accept',
                defaultUpload: 'If file uploaded immediatelly after file is selected',
                disabled: 'Whether to disable the upload',
                max: 'Uploaded files limit',
                showCancelButton: 'Show a cancel button ',
                showDownloadButton: 'Show a download button',
                showRemoveButton: 'Show a remove button',
                showRetryButton: 'Show a retry button',
                showFileList: 'Show a file list',
                showPreviewButton: 'Show a preview button',
                showPreviewButtonInfo: 'when list-type is image-card). Use the on-preview callback for this event',
            }
        },
        'n-transfer': {
            name: 'Transfer',
            props: {
                data: 'Transfer\'s data source',
                defaultValue: 'Default value',
                showSelected: 'Whether to show selected options in the source list',
                sourceFilterable: 'The source filterable state',
                sourceFilterPlaceholder: 'Placeholder for the source items search box',
                targetFilterable: 'The target filterable state',
                targetFilterPlaceholder: 'Placeholder for the target items search box',
                targetTitle: 'Target items title',
                sourceTitle: 'Source items title',
            }
        },
        tree: {
            name: 'Tree',
            props: {
                accordion: 'Whether to use accrodion expand mode',
                animated: 'Whether to show expand animation',
                cancelable: "Whether node's select status can be cancelled",
                cascade: 'Whether to cascade checkboxes',
                checkable: 'Whether to display the selection box',
                checkboxPlacement: "Checkbox's placement",
                checkStrategy: 'The strategy of setting checked',
                checkStrategyInfo: "The strategy of setting checked callback's keys argument",
                all: 'setting all checked node',
                parent: 'setting all checked parent node',
                child: 'setting all child node',
                childrenField: 'The children field in TreeOption',
                keyField: 'The key field in TreeOption',
                labelField: 'The label field in TreeOption',
                disabledField: 'The disabled field in TreeOption',
            }
        },
        'n-alert': {
            name: 'Alert',
            description: 'Description',
            props: {
                title: 'Title',
                type: 'Alert type',
                description: 'Description',
                closable: 'Whether it can be closed',
                showIcon: 'Whether to display the icon',
                center: 'Center',
                width: 'Width'
            }
        },
        span: {
            name: 'Text',
            props: {
                formCreateTitle: 'Title',
                formCreateChild: 'Content'
            }
        },
        div: {
            name: 'Space',
            props: {
                height: 'height',
            }
        },
        'n-button': {
            name: 'Button',
            props: {
                formCreateChild: 'Button content',
                size: 'Button size',
                type: 'Button type',
                color: 'Button color',
                textColor: 'Button text color',
                round: 'Whether the button shows rounded corners',
                circle: 'Whether the button is round',
                loading: 'Whether the button shows the loading status',
                disabled: 'Whether the button is disabled',
                secondary: 'Whether the button is secondary button',
                tertiary: 'Whether the button is tertiary button',
                quaternary: 'Whether the button is quaternary button',
                text: 'Whether to display as a text button',
                dashed: "Whether the button's border is a dashed line",
                ghost: 'Whether the button is ghost',
                strong: 'Whether to use strong text in the button',
                tag: 'What tag need the button be rendered as',
            }
        },
        'fc-editor': {
            name: 'Editor',
            props: {
                disabled: 'Whether to disable'
            }
        }
    },
    aboutTime: {
        date: 'date',
        datetime: 'datetime',
        daterange: 'daterange',
        datetimerange: 'datetimerange',
        month: 'month',
        monthrange: 'monthrange',
        year: 'year',
        yearrange: 'yearrange',
        quarter: 'quarter',
        quarterrange: 'quarterrange',
    },
    bug: {
        transfter: "Kidding? (NaiveUI's BUG)"
    },
};

export default En;

