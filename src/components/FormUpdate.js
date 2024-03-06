import { classNames } from 'primereact/utils'
import { useState } from 'react'
import { getMessageFormat, REGEX } from '../constants'
import { Calendar, Dropdown, InputSwitch, InputText, InputTextarea, MultiSelect } from '../uiCore'
import { formatNumber } from '../utils'

export const CalendarForm = (props) => {
    const { id, label, className, ...inputprop } = props
    return (
        <div className="mb-3 px-2 change-disabled">
            {label && (
                <label htmlFor={id} className="font-medium">
                    {label}
                </label>
            )}
            <Calendar
                inputId={id}
                dateFormat="dd/mm/yy"
                showIcon
                className={classNames('w-full mt-2', className)}
                hourFormat="24"
                placeholder={label && `Chọn ${label.toLowerCase()}`}
                style={{ minHeight: '50px' }}
                {...inputprop}
            />
        </div>
    )
}

export const InputTextareaForm = (props) => {
    const { id, label, className, ...inputprop } = props
    return (
        <div className="mb-3 px-2 change-disabled">
            {label && (
                <label htmlFor={id} className="font-medium">
                    {label}
                </label>
            )}
            <InputTextarea
                autoResize
                id={id}
                rows={6}
                cols={30}
                className={classNames('w-full mt-2', className)}
                placeholder={`Nhập ${label && label.toLowerCase()}`}
                {...inputprop}
            />
        </div>
    )
}

export const InputNumberForm = (props) => {
    const { value, handleOnChange, ...prop } = props
    const onChange = (e) => {
        let v = e.target.value
        if (!v) {
            handleOnChange('')
            return
        }
        let result = ''
        if (v == 0 && !result) {
            handleOnChange(0)
        } else if (v) {
            for (let i = 0; i < v.length; i++) {
                if (!isNaN(v[i])) {
                    result += v[i]
                }
            }
            if (Number(result)) handleOnChange(Number(result))
        }
    }
    return (
        <InputForm
            value={value === 0 ? 0 : formatNumber(value) || ''}
            onChange={onChange}
            {...prop}
            style={{ minHeight: '50px' }}
        />
    )
}

export const InputVehicleNumberForm = (props) => {
    const { value, handleOnChange, ...prop } = props
    const onChange = (e) => {
        let v = e.target.value
        if (!v) {
            handleOnChange('')
            return
        }
        let result = ''
        for (let i = 0; i < v.length; i++) {
            if (REGEX.VEHICLE.test(v[i])) {
                result += v[i]
            }
        }
        if (REGEX.VEHICLE.test(result)) handleOnChange(result ? result.toUpperCase() : '')
    }
    return (
        <InputForm
            value={value}
            onChange={onChange}
            {...prop}
            style={{ minHeight: '50px' }}
        />
    )
}

export const InputNumberFormV2 = (props) => {
    const { value, handleOnChange = () => { }, ...prop } = props
    const onChange = (e) => {
        let v = e.target.value
        if (!v) {
            handleOnChange('')
            return
        }
        let result = ''
        if (v == 0 && !result) {
            handleOnChange(0)
        } else if (v) {
            for (let i = 0; i < v.length; i++) {
                if (REGEX.decimalRegex.test(v[i])) {
                    result += v[i]
                }
            }
            handleOnChange(result)
        }
    }
    return (
        <InputForm value={value === 0 ? 0 : value || ''} onChange={onChange} {...prop} style={{ minHeight: '50px' }} />
    )
}

export const InputSwitchForm = (props) => {
    const { id, label, className, ...inputprop } = props
    return (
        <div className="mb-3 px-2">
            <label htmlFor={id} className="font-medium">
                {label ? label : 'Trạng thái'}
            </label>
            <div className="w-full mt-2 align-items-center flex" style={{ minHeight: '50px', lineHeight: '50px' }}>
                <InputSwitch inputId={id} className={className} {...inputprop} />
            </div>
        </div>
    )
}

export const InputForm = (props) => {
    const { label, id, placeholder, type, className, required, onChange, value = '', ...inputprop } = props
    const [error, setError] = useState(false)

    const handleValidate = (e) => {
        const value = e.target.value
        if (required) {
            if (!value) {
                setError(getMessageFormat())
                return
            } else if (REGEX[type] ? !REGEX[type].test(value) : false) {
                setError(getMessageFormat(type))
                return
            }
        }
    }

    const handleOnChange = (e) => {
        if (!e) {
            onChange({ target: { value: '' } })
            return
        }
        let v = e.target.value
        if (!v) {
            handleOnChange('')
            return
        }
        let result = ''
        if (v) {
            for (let i = 0; i < v.length; i++) {
                if (Number(v[i]) || Number(v[i]) === 0) {
                    result += v[i]
                }
            }
            result = { target: { value: result } }
            onChange(result)
        }
    }

    const setFocus = () => {
        setError(false)
    }

    return (
        <div className="mb-3 px-2 change-disabled">
            {label && (
                <div className="w-full flex justify-content-between">
                    <label htmlFor={id} className="font-medium w-full">
                        {label}
                    </label>
                </div>
            )}
            <InputText
                id={id}
                className={classNames('w-full mt-2', { 'p-invalid': required && error }, className)}
                placeholder={placeholder || (label && `Input ${label.toLowerCase()}`)}
                onBlur={handleValidate}
                onInput={required && setFocus}
                required={required}
                pattern={
                    required
                        ? type === 'password'
                            ? undefined
                            : type === 'phone'
                                ? '0[1-9]{1}[0-9]{8}'
                                : REGEX[type]
                        : undefined
                }
                value={value}
                type={type}
                onChange={type === 'phone' ? (e) => handleOnChange(e) : (e) => onChange(e)}
                style={{ minHeight: '50px' }}
                {...inputprop}
            />
            {required && error && (
                <div className="mt-1">
                    <span className="p-error w-full text-right text-sm ml-3">{error}</span>
                </div>
            )}
        </div>
    )
}

export const MultiSelectForm = (props) => {
    const { id, label, optionLabel, optionValue, placeholder, className, options, ...inputprop } = props
    return (
        <div className="mb-3 px-2 change-disabled">
            {label && (
                <label htmlFor={id} className="mt-3 font-medium w-5">
                    {label}
                </label>
            )}
            <MultiSelect
                inputId={id}
                filter
                display="chip"
                className={classNames('w-full mt-2', className)}
                optionLabel={optionLabel ? optionLabel : 'name'}
                optionValue={optionValue ? optionValue : 'id'}
                options={options && options[0] ? options : []}
                placeholder={placeholder || (label && `Chọn ${label.toLowerCase()}`)}
                style={{ lineHeight: '34px' }}
                {...inputprop}
            />
        </div>
    )
}

export const DropdownForm = (props) => {
    const { id, label, optionLabel, optionValue, placeholder, className, ...inputprop } = props
    return (
        <div className="mb-3 px-2 change-disabled">
            {label && (
                <label htmlFor={id} className="font-medium">
                    {label}
                </label>
            )}
            <Dropdown
                filter
                inputId={id}
                className={classNames('w-full mt-2', className)}
                optionLabel={optionLabel ? optionLabel : 'name'}
                optionValue={optionValue ? optionValue : 'id'}
                placeholder={placeholder || (label && `Select ${label.toLowerCase()}`)}
                style={{ lineHeight: '34px' }}
                {...inputprop}
            />
        </div>
    )
}

