import * as React from 'react'
import { SVGProps } from 'react'
const VideoPause = (props: SVGProps<SVGSVGElement>) => (
	<svg
		width="28"
		height="28"
		viewBox="0 0 26 26"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		strokeLinecap="round"
		strokeLinejoin="round"
		{...props}
	>
		<path
			fillRule="evenodd"
			clipRule="evenodd"
			d="M13 26C20.1797 26 26 20.1797 26 13C26 5.8203 20.1797 0 13 0C5.8203 0 0 5.8203 0 13C0 20.1797 5.8203 26 13 26ZM15.956 18.3648C16.5083 18.3648 16.956 17.9171 16.956 17.3648L16.9561 9.18012C16.9561 8.62783 16.5083 8.18011 15.9561 8.18011C15.4038 8.18011 14.9561 8.62782 14.9561 9.18011L14.956 17.3648C14.956 17.9171 15.4037 18.3648 15.956 18.3648ZM11 17.3648C11 17.9171 10.5523 18.3648 10 18.3648C9.44771 18.3648 9 17.9171 9 17.3648V9.13666C9 8.58438 9.44771 8.13666 10 8.13666C10.5523 8.13666 11 8.58438 11 9.13666V17.3648Z"
		/>
	</svg>
)
export default VideoPause
