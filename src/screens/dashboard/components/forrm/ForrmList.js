import { Button } from "primereact/button"
import { classNames } from "primereact/utils"
import { useEffect } from "react"
import { useLocation } from 'react-router-dom'
import { databaseDate } from "../../../libs"
import { refreshObject, removeUndefinedProps } from "../../../utils"
import Dropdown from "./DropDown"
import InputText from "./InputText"

export const GridForm = (props) => {
    const { className, setParams = () => { }, filter, setFilter, handleFilter } = props
    const location = useLocation()

    const handleClear = () => {
        setParams((pre) => {
            return {
                page: pre.page || 1,
                limit: pre.limit || 20,
                first: pre.first || 0,
                render: pre.render,
            }
        })
        setFilter({ ...refreshObject(filter) })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        let filters = { ...filter }
        if (filters.dates && filters.dates[0]) {
            filters.from = databaseDate(filter.dates[0])
            filters.to = filter.dates[1] ? databaseDate(filter.dates[1], true) : databaseDate(filter.dates[0], true)
            filters.dates = undefined
        }
        if (filters.datez && filters.datez[0]) {
            filters.from_create = databaseDate(filter.datez[0])
            filters.to_create = filter.datez[1] ? databaseDate(filter.datez[1], true) : databaseDate(filter.datez[0], true)
            filters.datez = undefined
        }
        if (handleFilter) filters = handleFilter(filter)
        setParams((pre) => {
            return {
                page: pre.page || 1,
                limit: pre.limit || 20,
                first: pre.first || 0,
                render: pre.render,
                ...removeUndefinedProps(filters),
            }
        })
    }

    useEffect(() => {
        const query = {}
        const queryParams = new URLSearchParams(location.search)
        const dates = []
        const datez = []
        for (let [key, value] of queryParams.entries()) {
            if (key === 'from' || key === 'to') {
                if (key === 'from') {
                    dates[0] = new Date(value)
                }
                if (key === 'to') {
                    dates[1] = new Date(value)
                }
            } else if (key === 'from_create' || key === 'to_create') {
                if (key === 'from_create') {
                    datez[0] = new Date(value)
                }
                if (key === 'to_create') {
                    datez[1] = new Date(value)
                }
            } else query[key] = value === '0' || Number(value) ? Number(value) : value
        }
        if (dates && dates[0]) query['dates'] = dates
        if (datez && datez[0]) query['datez'] = datez
        setFilter({ ...filter, ...query })
        // eslint-disable-next-line
    }, [])

    return (
        <form onSubmit={handleSubmit} className="grid formgrid">
            {props.children}
            <div className={classNames('mb-4 col-12 md:col-12 lg:col-3 flex justify-content-end gap-3', className)}>
                <Button
                    type="button"
                    raised
                    size="small"
                    severity="secondary"
                    label="Refresh"
                    onClick={() => handleClear()}
                />
                <Button type="submit" raised size="small" label="Filter" severity="info" icon="pi pi-filter" />
            </div>
        </form>
    )
}
export const Inputz = (props) => {
    const { id, placeholder, className, ...inputprop } = props
    return (
        <div className={classNames('mb-3 col-12 md:col-6 lg:col-3', className)}>
            <InputText
                id={id}
                placeholder={placeholder ? placeholder : 'Tìm kiếm theo tên ...'}
                className="w-full"
                style={{ minHeight: '50px' }}
                {...inputprop}
            />
        </div>
    )
}

export const Dropdownz = (props) => {
    const { optionLabel, optionValue, className, ...inputprop } = props
    return (
        <div className={classNames('col-12 mb-3 md:col-6 lg:col-3', className)}>
            <Dropdown
                filter
                className="w-full"
                optionLabel={optionLabel ? optionLabel : 'name'}
                optionValue={optionValue ? optionValue : 'id'}
                style={{ lineHeight: '34px' }}
                {...inputprop}
            />
        </div>
    )
}