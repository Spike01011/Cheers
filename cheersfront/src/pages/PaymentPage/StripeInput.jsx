import React, {forwardRef, useImperativeHandle, useRef} from 'react'
import {InputBaseComponentProps} from "@mui/material";

interface Props extends InputBaseComponentProps {
}

const StripeInput =
	forwardRef(
		function StripeInput(
			{component: Component, ...props}: Props, ref) {

			const elementRef = useRef();
			console.log(elementRef)
			useImperativeHandle(ref, () => ({
				focus: () => elementRef.current.focus()
			}));

			return (
				<Component
					onReady={element => (elementRef.current = element)}
					ref={elementRef} {...props}
				/>
			)
		})
export default StripeInput