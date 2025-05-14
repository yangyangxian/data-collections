import * as React from 'react';
import Box from '@mui/material/Box';

import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';

const itemData = [
    {
        img: '/images/pig.jpeg',
        title: 'Pig',
        author: '2025-04-04',
    },
];

export default function PhotoWall() {
    return (
        <div>
            <ImageList sx={{ width: 1280 }}>
                {itemData.map((item) => (
                    <ImageListItem key={item.img}>
                        <img
                            srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                            src={item.img}
                            alt={item.title}
                            loading="lazy"
                           
                        />
                        <ImageListItemBar
                            title={item.title}
                            subtitle={<span>{item.author}</span>}
                            position="below"
                        />
                    </ImageListItem>
                ))}
            </ImageList>
        </div>
    );
}