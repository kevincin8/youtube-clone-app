import React, { useState, useEffect } from 'react';
import { Box, Typography } from '@mui/material';
import { Videos } from './';
import FetchFromApi from '../utils/fetchFromApi';
import { useParams } from 'react-router-dom';

export const SearchFeed = () => {
    const [videos, SetVideos] = useState([]);
    const { searchTerm } = useParams()

    useEffect(() => {
        FetchFromApi(`search?q=${searchTerm}&part=snippet&maxResults=53`)
            .then(data => SetVideos(data.items));
    }, [searchTerm]);

    return (
        <Box component="section" sx={{ overflowY: "auto", height: "90vh", flex: 2 }}>
            <Typography variant="h4" fontWeight="bold" mb={2} mt="10px" sx={{ color: "white" }}>
                Results for <span style={{ color: "#FC1503" }}>{searchTerm}</span>
            </Typography>

            <Videos videos={videos} />
        </Box>
    )
}

export default SearchFeed