import { VFC, ChangeEvent, useState } from "react";
//import styled from "styled-components";
import styled, { css } from "styled-components";
import { fontSize, space, color } from "./constants";

type Props = {
    width?: number,
    maxLength?: number
}

// export const Textarea: VFC<Props> = () => {
export const Textarea: VFC<Props> = ({maxLength, width=300}) => {

    const [count, setCount] = useState<number>(9);
    const handleChange =(event:ChangeEvent<HTMLTextAreaElement>)=>{
        setCount(event.currentTarget.value.length)
    }
    const isError = (): boolean => {
        if(maxLength !== undefined && maxLength - count<0) return true
        return false
    }

    return (

        <>

                <Wrapper onChange={handleChange} width={width} className={isError() ? "error" : ""}/>
                {maxLength !== undefined &&(
                    <Count className={isError() ? "error" : ""}>
                        残り{Math.max(maxLength - count ,0)}文字です
                    </Count>
                )}

        </>
    )
}
const Count = styled.p`
margin:0;
font-size: ${fontSize.m}
`

const Wrapper = styled.textarea<{width:number}>`
height:120px;
padding:${space.m};
border:solid 1px ${color.gray};
font-size: ${fontSize.m};
&error {
color: ${color.red}
}

${props =>

    css`
    width: ${props.width}px;
    `
}
`;
