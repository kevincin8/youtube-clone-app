import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Box } from '@mui/material'
import { Videos, ChannelCard } from './'
import FetchFromApi from '../utils/fetchFromApi'

const ChannelDetail = () => {
    const { id } = useParams()
    const [channelDetail, setchannelDetail] = useState(null)
    const [videos, setvideos] = useState([])
    console.log(id)

    useEffect(() => {
        FetchFromApi(`channels?part=snippet&id=${id}`)
            .then(data => setchannelDetail(data.items[0]))
        
        FetchFromApi(`search?channelId=${id}&part=snippet&maxResults=53&oreder-date`) 
            .then(data => setvideos(data.items))
    }, [id])



    return (
        <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
            <div style={{height: "300px", width: "100%", background: "linear-gradient(160deg, rgba(248,1,255,1) 25%, rgba(17,149,136,1) 68%, rgba(1,210,251,1) 99%, rgba(0,212,255,1) 100%)" }} />
            <ChannelCard marginTop="-100px" channelDetail={channelDetail} />

            <Videos videos={videos} />
        </Box>
    )
}

export default ChannelDetail