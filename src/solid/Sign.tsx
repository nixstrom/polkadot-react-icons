import * as React from 'react'
import { SVGProps } from 'react'
const Sign = (props: SVGProps<SVGSVGElement>) => (
	<svg
		width="28"
		height="28"
		viewBox="0 0 28 17"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		stroke="currentColor"
		strokeLinecap="round"
		strokeLinejoin="round"
		{...props}
	>
		<path
			fillRule="evenodd"
			clipRule="evenodd"
			d="M23.6249 1.11612C23.1368 0.627961 22.3453 0.627961 21.8571 1.11612L13.4204 9.55284C13.2663 9.70699 13.1551 9.89877 13.098 10.1092L11.8847 14.5772C11.7674 15.0094 11.8902 15.4713 12.2067 15.7881C12.5232 16.105 12.985 16.2283 13.4173 16.1114L17.8895 14.9023C18.1004 14.8453 18.2927 14.734 18.4471 14.5795L26.8839 6.14283C27.372 5.65467 27.372 4.86321 26.8839 4.37506L23.6249 1.11612ZM0.75 14.9048C0.75 14.2145 1.30964 13.6548 2 13.6548H9.74995C10.4403 13.6548 11 14.2145 11 14.9048C11 15.5952 10.4403 16.1548 9.74995 16.1548H2C1.30964 16.1548 0.75 15.5952 0.75 14.9048Z"
		/>
	</svg>
)
export default Sign
