import React from 'react';

export default function Text(props: any){
    const {children} = props;
    return <p {...props}>{children}</p>
}