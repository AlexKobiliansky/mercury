import React from 'react';

import ava1 from "../../../img/message-ava-1.jpg";
import Box from "../../ui/atoms/Box/Box";
import BoxHeader from "../../ui/atoms/BoxHeader/BoxHeader";
import Label from "../../ui/atoms/Label/Label";
import s from "../Home.module.sass";
import Move from "../Move/Move";

function ActivityBox() {
    return (
        <Box>
            <BoxHeader customClass={s.paddingHeader}>
                <h3>Activity</h3>
                <div className={s.labelsWrap}>
                    <Label title='10'></Label>
                </div>
            </BoxHeader>

            <Move img={ava1}/>
            <Move img={ava1}/>
            <Move img={ava1}/>
            <Move img={ava1}/>
        </Box>
    );
}

export default ActivityBox;