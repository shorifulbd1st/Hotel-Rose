import axios from 'axios';
import React from 'react'

const Sort = () => {

    const [rooms, setRooms] = useState([]);
    const [sort, setSort] = useState('')
    useEffect(() => {
        const fetchAllJobs = async () => {
            const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/all-rooms?sort=${sort}`)
            setJobs(data);
        }
        fetchAllJobs()
    }, [filter, search, sort])

    console.log(rooms, rooms.length)
    // console.log(filter)
    // console.log(search)
    console.log(sort)
    const handleReset = () => {
        // setFilter('')
        // setSearch('')
        setSort('')
    }

    return (
        <div>
            <div>
                <select
                    name='category'
                    id='category'
                    className='border p-4 rounded-md'
                    onChange={e => setSort(e.target.value)}
                    value={sort}
                >
                    <option value=''>Sort By Deadline</option>
                    <option value='dsc'>Descending Order</option>
                    <option value='asc'>Ascending Order</option>
                </select>
            </div>
            <button onClick={handleReset} className='btn'>Reset</button>


        </div>
    )
}

export default Sort
