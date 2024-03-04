import { Dropdown as Dropdowns } from 'primereact/dropdown'

const Dropdown = ({ ...rest }) => {
    return (
        <Dropdowns
            showClear
            emptyFilterMessage="No data found"
            emptyMessage="No data found"
            {...rest}
        />
    )
}

export default Dropdown
