import React from 'react';
import { Box, CardContent, CardMedia, Typography } from '@mui/material';
import { CheckCircle } from '@mui/icons-material';
import { Link, } from 'react-router-dom';
import { demoProfilePicture } from '../utils/constants';

const ChannelCard = ({ channelDetail, marginTop }) => {
    console.log(channelDetail, "ChannelDetail")
    return (
        <Box sx={{ boxShadow: "none", borderRadius: "20px", mt: marginTop }}>
            <Link to={`/channel/${channelDetail?.id?.channelId}`}>
                <CardContent sx={{ display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", color: "#FFF" }}>
                    <CardMedia image={channelDetail?.snippet?.thumbnails?.high?.url || demoProfilePicture} alt={channelDetail?.snippet?.title}
                        sx={{ borderRadius: "50%", height: "180px", width: "180px", mb: "10px" }} />

                    <Typography variant="h5">{channelDetail?.snippet?.title}</Typography>

                    {channelDetail?.statistics?.subscriberCount &&
                        <Typography>{parseInt(channelDetail?.statistics?.subscriberCount).toLocaleString()} Subscribers</Typography>}
                </CardContent>
            </Link>
        </Box >
    )
}


export default ChannelCard