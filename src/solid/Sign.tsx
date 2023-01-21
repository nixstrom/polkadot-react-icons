import * as React from 'react'
import { SVGProps } from 'react'
const Sign = (props: SVGProps<SVGSVGElement>) => (
	<svg
		width="28"
		height="28"
		viewBox="0 0 28 28"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		strokeWidth="2"
		strokeLinecap="round"
		strokeLinejoin="round"
		{...props}
	>
		<path
			fillRule="evenodd"
			clipRule="evenodd"
			d="M23.4481 5.29289C23.0576 4.90237 22.4244 4.90237 22.0339 5.29289L13.5972 13.7296C13.4739 13.8529 13.385 14.0064 13.3393 14.1747L12.126 18.6427C12.0321 18.9884 12.1304 19.358 12.3835 19.6115C12.6367 19.8649 13.0062 19.9636 13.352 19.8701L17.8242 18.661C17.993 18.6154 18.1468 18.5264 18.2704 18.4028L26.7071 9.96605C27.0976 9.57552 27.0976 8.94236 26.7071 8.55184L23.4481 5.29289ZM1 18.9046C1 18.3523 1.44772 17.9046 2 17.9046H9.74995C10.3022 17.9046 10.75 18.3523 10.75 18.9046C10.75 19.4569 10.3022 19.9046 9.74995 19.9046H2C1.44772 19.9046 1 19.4569 1 18.9046Z"
			stroke="none"
		/>
	</svg>
)
export default Sign
