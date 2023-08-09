import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { Videos } from './'
import ReactPlayer from 'react-player'
import { Typography, Box, Stack } from '@mui/material'
import { CheckCircle, RotateRight } from '@mui/icons-material'
import FetchFromApi from '../utils/fetchFromApi'

const VideoDetail = () => {
    const { id } = useParams()
    const [videoDetail, setVideoDetail] = useState(null)
    const [videos, setVideos] = useState(null)
    useEffect(() => {
        FetchFromApi(`videos?part=snippet,statistics&id=${id}`)
            .then(data => setVideoDetail(data.items[0]))
        
        FetchFromApi(`search?part=snippet&relatedToVideoId=${id}&type=video`)
            .then(data => setVideos(data.items)) 
    }, [id])

    if (!videoDetail?.snippet) return <RotateRight className="loading-circle"/>

    const {snippet: {title, channelTitle,channelId}, statistics: {viewCount, likeCount}} = videoDetail

    return (
        <Box height="95vh">
            <Stack direction={{xs: "column", md: "row"}}>
                <Box flex={1}>
                    <Box sx={{width: "100%", position: "sticky", top: "86px" }}>
                        <ReactPlayer className="react-player" controls url={`http://www.youtube.com/watch?v=${id}`} />
                        <Typography variant="h5" color="#FFF" fontWeight="bold" p={2}>{title}</Typography>
                        
                        <Stack direction="row" justifyContent="space-between" sx={{color: "#FFF", py: 1, px: 2}}>
                            <Link to={`/channel/${channelId}`}>
                                <Typography variant={{xs: "subtitle1", md: "h5",}} color="#FFF">
                                    {channelTitle}
                                    <CheckCircle sx={{fontSize: "12px", color: "gray", ml: "5px"}} />
                                </Typography>
                            </Link>

                            <Stack direction="row" gap="20px" alignItems="center">
                                <Typography varint="body1" sx={{ opacity: 0.7, }}>
                                    {parseInt(viewCount).toLocaleString()} views
                                </Typography>
                                
                                <Typography varint="body1" sx={{ opacity: 0.7, }}>
                                    {parseInt(likeCount).toLocaleString()} likes
                                </Typography>
                            </Stack>
                        </Stack>
                    </Box>
                </Box>

                <Box px={{md: 2, xs: 0}} py={{md: 1, xs: 5}} justifyContent="center" alignItems="center">
                    <Videos videos={videos} direction="column"/>
                </Box>
            </Stack>
        </Box>
    )
}

export default VideoDetail