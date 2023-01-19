import * as React from 'react'
import { SVGProps } from 'react'
const PublicKey = (props: SVGProps<SVGSVGElement>) => (
	<svg
		width="28"
		height="28"
		viewBox="0 0 22 28"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		stroke="currentColor"
		strokeLinecap="round"
		strokeLinejoin="round"
		{...props}
	>
		<path d="M2.00001 2H20.4615V26H2.00001V2Z" stroke="black" />
		<path
			d="M9.736 12.4191L9.28522 11.8857C8.46292 10.9126 8.52841 9.47051 9.43552 8.576C10.3848 7.63988 11.91 7.63988 12.8593 8.576C13.7664 9.47051 13.8319 10.9126 13.0096 11.8857L12.5589 12.419C12.2578 12.7753 12.4281 13.3237 12.878 13.4468L13.5409 13.6283C15.2966 14.1088 16.514 15.7042 16.514 17.5245V19.2259H11.1474H5.78522V17.5214C5.78522 15.7028 7.00139 14.1087 8.75545 13.6282L9.41702 13.447C9.8669 13.3237 10.0371 12.7754 9.736 12.4191Z"
			stroke="black"
		/>
	</svg>
)
export default PublicKey
