import React from 'react';

export interface Props{
    name: string;
    isMyfriend?: boolean;
}

function Welcome({name,isMyfriend=true}:Props){
    if( !isMyfriend){
        throw new Error('fuck off');
    }
    return(
        <div>
            Hello my firend {name}
        </div>
    );
}

export default Welcome;