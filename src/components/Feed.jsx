import React, {useState, useEffect} from 'react';
import { Box, Stack, Typography } from '@mui/material';
import { Sidebar, Videos } from './';
import FetchFromApi from '../utils/fetchFromApi';
import { RotateRight } from '@mui/icons-material'

export const Feed = () => {
    const [selectedCategory, SetSelectedCategory] = useState("New");
    const [loading, setLoading] = useState(true)
    const [videos, SetVideos] = useState([]);

    useEffect(() => {
        FetchFromApi(`search?q=${selectedCategory}&part=snippet&maxResults=53`)
            .then(data => {
                SetVideos(data.items)
                setLoading(false)
            });
    }, [selectedCategory]);

    return (
        <Stack component="main" sx={{flexDirection: {sx: "colum", md: "row"}}}>
            <Box component="aside" sx={{ height: { sx: "auto", md: "92vh" }, border: "1px solid 3d3d3d", px: { sx: 0, md: 2 } }}>
                <Sidebar selectedCategory={selectedCategory} SetSelectedCategory={SetSelectedCategory} />
            </Box>

            <Box component="section" sx={{overflowY: "auto", height: "90vh", flex: 2}}>
                <Typography variant="h4" fontWeight="bold" mb={2} mt="10px" sx={{color: "white"}}>
                    {selectedCategory} <span style={{color: "#FC1503"}}>Videos</span>
                </Typography>

                {loading ? <RotateRight className="loading-circle"/> : <Videos videos={videos}/>}
            </Box>
        </Stack>
    )
}

export default Feed