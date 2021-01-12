import React from 'react';
import BoxHeader from "../../ui/atoms/BoxHeader/BoxHeader";
import s from "../Home.module.sass";
import Label from "../../ui/atoms/Label/Label";
import Move from "../Move/Move";
import ava1 from "../../../img/message-ava-1.jpg";
import Box from "../../ui/atoms/Box/Box";

function ActivityBox(props) {
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