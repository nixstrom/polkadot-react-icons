import * as React from 'react'
import { SVGProps } from 'react'
const Wiki = (props: SVGProps<SVGSVGElement>) => (
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
			d="M1 13.5C1 20.6797 6.8203 26.5 14 26.5C21.1797 26.5 27 20.6797 27 13.5C27 6.3203 21.1797 0.5 14 0.5C6.8203 0.5 1 6.3203 1 13.5ZM7.1824 9.53574C7.66868 9.2739 8.27514 9.45584 8.53698 9.94211L11.7176 15.849L12.9023 13.6487L11.417 10.8903C11.1552 10.404 11.3371 9.79758 11.8234 9.53574C12.3097 9.2739 12.9161 9.45584 13.178 9.94211L14.0381 11.5395L14.8982 9.94211C15.16 9.45584 15.7665 9.2739 16.2528 9.53574C16.739 9.79758 16.921 10.404 16.6591 10.8903L15.1738 13.6487L16.3586 15.849L19.5392 9.94211C19.801 9.45584 20.4075 9.2739 20.8938 9.53574C21.38 9.79758 21.562 10.404 21.3001 10.8903L17.239 18.4323C17.0646 18.7562 16.7265 18.9582 16.3586 18.9582C15.9907 18.9582 15.6525 18.7562 15.4781 18.4323L14.0381 15.758L12.5981 18.4323C12.4236 18.7562 12.0855 18.9582 11.7176 18.9582C11.3497 18.9582 11.0115 18.7562 10.8371 18.4323L6.77603 10.8903C6.5142 10.404 6.69613 9.79758 7.1824 9.53574Z"
			stroke="none"
		/>
	</svg>
)
export default Wiki
