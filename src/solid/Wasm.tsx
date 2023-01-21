import * as React from 'react'
import { SVGProps } from 'react'
const Wasm = (props: SVGProps<SVGSVGElement>) => (
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
			d="M3 4C3 3.44772 3.44772 3 4 3H10.237C10.5084 3 10.7682 3.11032 10.9566 3.30563C11.1451 3.50094 11.246 3.76446 11.2364 4.03569C11.1827 5.53906 12.4736 6.856 14 6.856C15.5402 6.856 16.763 5.57319 16.763 4C16.763 3.44772 17.2107 3 17.763 3H24C24.5523 3 25 3.44772 25 4V24C25 24.5523 24.5523 25 24 25H4C3.44772 25 3 24.5523 3 24V4ZM10.9787 12.7948C10.8654 12.2543 10.3354 11.908 9.79483 12.0213C9.2543 12.1346 8.90796 12.6646 9.02127 13.2052L10.3546 19.5657C10.4517 20.0289 10.8601 20.3606 11.3333 20.3606H11.4172C11.8242 20.3606 12.1906 20.1139 12.3438 19.7368L14.0358 15.5698L15.7411 19.7391C15.8948 20.115 16.2606 20.3606 16.6667 20.3606H16.7194C17.1956 20.3606 17.6057 20.0248 17.6997 19.5579L18.9803 13.1974C19.0893 12.656 18.7388 12.1287 18.1974 12.0197C17.656 11.9107 17.1287 12.2612 17.0197 12.8026L16.3748 16.0055L14.9907 12.6214C14.837 12.2456 14.4712 12 14.0651 12H14C13.593 12 13.2266 12.2467 13.0735 12.6238L11.6683 16.0843L10.9787 12.7948Z"
			fill="#010101"
			stroke="none"
		/>
	</svg>
)
export default Wasm
