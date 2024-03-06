import { Image as Images } from 'primereact/image';
import { useEffect, useState } from 'react';
import { getData } from '../../lib/request';

const Image = ({ src, ...rest }) => {
    const [data, setData] = useState(null)
    console.log(src)
    const handCheck = async () => {
        if (src && src.includes(process.env.REACT_APP_API_URL)) {
            const res = await getData(src)
            if (res?.data?.status) setData(res?.data?.data)
        } else setData(src)
    }

    useEffect(() => {
        handCheck()
    }, [src])

    return <Images src={data} {...rest} />
}

export default Image
