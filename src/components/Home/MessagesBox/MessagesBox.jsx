import React from 'react';

//styles
//images
import ava1 from "img/message-ava-1.jpg";
import ava2 from "img/message-ava-2.jpg";
import ava3 from "img/message-ava-3.jpg";
import ava4 from "img/message-ava-4.jpg";

import Box from "../../ui/atoms/Box/Box";
import BoxHeader from "../../ui/atoms/BoxHeader/BoxHeader";
import Label from "../../ui/atoms/Label/Label";
import hs from "../Home.module.sass";
import Message from "../Message/Message";

function MessagesBox() {

    var d = new Date();

    let messages = [
        {
            id: 1,
            img: ava1,
            name: 'Nina Jones',
            time: d.setMinutes(d.getMinutes() - 15),
            message: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias aliquid at, beatae cumque dicta dolorem est fugit ipsa laudantium pariatur, praesentium ratione rem, similique? Culpa.',
            read: 0
        },
        {
            id: 2,
            img: ava1,
            name: 'Nina Jones',
            time: d.setMinutes(d.getMinutes() - 22),
            message: 'Some message from Nina',
            read: 0
        },
        {
            id: 3,
            img: ava2,
            name: 'James Smith',
            time: d.setDate(d.getDate() - 2),
            message: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias',
            read: 1
        },
        {
            id: 4,
            img: ava3,
            name: 'Alex Clooney',
            time: d.setDate(d.getDate() - 19),
            message: 'I am not George...',
            read: 0
        },
        {
            id: 5,
            img: ava3,
            name: 'Alex Clooney',
            time: d.setDate(d.getDate() - 1),
            message: 'Alias aliquid at, beatae cumque dicta dolorem est fugit ipsa laudantium pariatur, praesentium ratione rem, similique? Culpa.',
            read: 1
        },
        {
            id: 6,
            img: ava4,
            name: 'Alexandra Spears',
            time: d.setDate(d.getDate() - 14),
            message: 'I am pregnant! But I dont know from who!?',
            read: 1
        },
    ];

    let items = messages.slice(0, 4);

    let unreadMessages = messages.reduce((number, current) => {
        return !current.read ? ++number : number
    }, 0);

    return (
        <Box>
            <BoxHeader customClass={hs.paddingHeader}>
                <h3>Messages</h3>
                <div className={hs.labelsWrap}>
                    {unreadMessages && unreadMessages>0 ? <Label title={unreadMessages} /> : ''}
                </div>
            </BoxHeader>

            {
                items && items.map(message => {
                    return <Message
                        key={message.id}
                        img={message.img}
                        name={message.name}
                        time={message.time}
                        message={message.message}
                        read={message.read}
                    />
                })
            }
        </Box>
    );
}

export default MessagesBox;