import * as React from 'react'
import { SVGProps } from 'react'
const Message = (props: SVGProps<SVGSVGElement>) => (
	<svg
		width="28"
		height="28"
		viewBox="0 0 28 26"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		strokeLinecap="round"
		strokeLinejoin="round"
		{...props}
	>
		<path
			fillRule="evenodd"
			clipRule="evenodd"
			d="M1.25195 0.249023C0.699668 0.249023 0.251953 0.696739 0.251953 1.24902V18.8928C0.251953 19.4451 0.699668 19.8928 1.25195 19.8928H6.0197V24.4819C6.0197 24.862 6.2352 25.2092 6.57582 25.378C6.91644 25.5467 7.32326 25.5077 7.62564 25.2774L14.6947 19.8928H26.7523C27.3046 19.8928 27.7523 19.4451 27.7523 18.8928V1.24902C27.7523 0.696739 27.3046 0.249023 26.7523 0.249023H1.25195Z"
		/>
		<path
			fillRule="evenodd"
			clipRule="evenodd"
			d="M7.5 10C7.22386 10 7 10.2239 7 10.5C7 10.7761 7.22386 11 7.5 11C7.77614 11 8 10.7761 8 10.5C8 10.2239 7.77614 10 7.5 10ZM5 10.5C5 9.11929 6.11929 8 7.5 8C8.88071 8 10 9.11929 10 10.5C10 11.8807 8.88071 13 7.5 13C6.11929 13 5 11.8807 5 10.5ZM13.5 10C13.2239 10 13 10.2239 13 10.5C13 10.7761 13.2239 11 13.5 11C13.7761 11 14 10.7761 14 10.5C14 10.2239 13.7761 10 13.5 10ZM11 10.5C11 9.11929 12.1193 8 13.5 8C14.8807 8 16 9.11929 16 10.5C16 11.8807 14.8807 13 13.5 13C12.1193 13 11 11.8807 11 10.5ZM19 10.5C19 10.2239 19.2239 10 19.5 10C19.7761 10 20 10.2239 20 10.5C20 10.7761 19.7761 11 19.5 11C19.2239 11 19 10.7761 19 10.5ZM19.5 8C18.1193 8 17 9.11929 17 10.5C17 11.8807 18.1193 13 19.5 13C20.8807 13 22 11.8807 22 10.5C22 9.11929 20.8807 8 19.5 8Z"
			fill="white"
		/>
	</svg>
)
export default Message
