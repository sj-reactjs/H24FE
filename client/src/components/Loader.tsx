import React from 'react'
import Box from './Box'

export default function Loader() {
    return (
        <Box padding="md" textAlign="center">
            <img height="200px" src="/loader.gif" alt="Please wait..." />
        </Box>
    )
}
