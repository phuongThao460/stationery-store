import React from 'react'

import ColorPaintBrush from "../../components/Category/ColorPaintBrush";
import DrawingPenPencils from "../../components/Category/DrawingPensPencils";
import Sketchbook from "../../components/Category/Sketchbook";
import Paper from "../../components/Category/Paper";
import WashiTape from "../../components/Category/WashiTape";

const Design = () => {
    return (
        <div>
            <ColorPaintBrush />
            <DrawingPenPencils />
            <Paper />
            <Sketchbook />
            <WashiTape />
        </div>
    )
}

export default Design
