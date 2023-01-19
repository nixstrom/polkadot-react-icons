import * as React from 'react'
import { SVGProps } from 'react'
const Help = (props: SVGProps<SVGSVGElement>) => (
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
			d="M13 0C5.8203 0 0 5.8203 0 13C0 20.1797 5.8203 26 13 26C20.1797 26 26 20.1797 26 13C26 5.8203 20.1797 0 13 0ZM8.84159 2.81317L10.8741 7.69131C9.42742 8.27244 8.27319 9.42778 7.69353 10.8752L2.81311 8.84174C3.92894 6.111 6.11087 3.92904 8.84159 2.81317ZM2.81309 17.1582C3.92891 19.8889 6.11082 22.0709 8.84153 23.1868L10.8739 18.3091C9.42713 17.7279 8.27289 16.5724 7.69333 15.1248L2.81309 17.1582ZM15.1268 7.68793L17.1581 2.81303C19.8889 3.92884 22.0709 6.11082 23.1868 8.84162L18.3145 10.8718C17.7332 9.42312 16.5763 8.26749 15.1268 7.68793ZM23.1868 17.1584L18.3146 15.1284C17.7335 16.5771 16.5765 17.7329 15.127 18.3125L17.158 23.187C19.8888 22.0712 22.0709 19.8892 23.1868 17.1584ZM9.28571 13.0003C9.28571 10.9463 10.9508 9.28127 13.0047 9.28127C15.0586 9.28127 16.7237 10.9463 16.7237 13.0003C16.7237 15.0542 15.0586 16.7192 13.0047 16.7192C10.9508 16.7192 9.28571 15.0542 9.28571 13.0003Z"
		/>
	</svg>
)
export default Help
