import * as React from 'react'
import { SVGProps } from 'react'
const Wiki = (props: SVGProps<SVGSVGElement>) => (
	<svg
		width="28"
		height="28"
		viewBox="0 0 28 27"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		strokeWidth="2"
		strokeLinecap="round"
		strokeLinejoin="round"
		{...props}
	>
		<path d="M14 1.49976C20.6274 1.49976 26 6.87234 26 13.4998C26 20.1272 20.6274 25.4998 14 25.4998C7.37258 25.4998 2 20.1272 2 13.4998C2 6.87234 7.37258 1.49976 14 1.49976Z" />
		<path
			d="M12.2975 10.4158L16.3586 17.9578L20.4196 10.4158"
			fill="none"
			data-nofill="true"
		/>
		<path
			d="M7.65649 10.4158L11.7176 17.9578L15.7787 10.4158"
			fill="none"
			data-nofill="true"
		/>
	</svg>
)
export default Wiki
