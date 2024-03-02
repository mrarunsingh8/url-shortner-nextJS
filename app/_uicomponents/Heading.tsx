import React from 'react';

export default function Heading(props: any){
    const {level=6, children} = props;
    const validatedLevel = Math.max(1, Math.min(6, level));
    const HeadingTag = `h${validatedLevel}`;
    return <HeadingTag {...props}>{children}</HeadingTag>;
}