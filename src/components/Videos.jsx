import React from 'react'
import { Stack, Box, } from '@mui/material'
import { ChannelCard, VideoCard } from './'

const Videos = ({ videos, direction }) => {
    if (!videos?.length) return <h1 style={{color: "red", fontSize: "30px", textAlign: "center"}}>Loading</h1>
    return (
        <Stack direction={direction || "row"} flexWrap="wrap" gap={2} justifyContent="start" sx={{p: {xs: "10px"}}}>
            {videos.map((item, idx) => (
                <Box sx={{width: {md:"320px", xs: "100%"}, flexGrow: 1}} key={idx}>
                    {item.id.channelId && <ChannelCard channelDetail={item} />}
                    {item.id.videoId && <VideoCard video={item} />}
                </Box>
            ))}
        </Stack>
    )
}

export default Videos