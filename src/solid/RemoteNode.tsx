import * as React from 'react'
import { SVGProps } from 'react'
const RemoteNode = (props: SVGProps<SVGSVGElement>) => (
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
			d="M19.3505 4.43343C19.0378 3.97819 18.4152 3.86263 17.96 4.17532C17.5048 4.48802 17.3892 5.11055 17.7019 5.56579L20.2626 9.29388C19.7669 9.93261 19.4717 10.7348 19.4717 11.606C19.4717 13.6904 21.1615 15.3801 23.2459 15.3801C25.3303 15.3801 27.02 13.6904 27.02 11.606C27.02 9.52157 25.3303 7.83184 23.2459 7.83184C22.7581 7.83184 22.292 7.92436 21.864 8.09282L19.3505 4.43343ZM6.14286 8.08769C5.71852 7.92248 5.25691 7.83184 4.77412 7.83184C2.68973 7.83184 1 9.52157 1 11.606C1 13.6904 2.68973 15.3801 4.77412 15.3801C6.85852 15.3801 8.54825 13.6904 8.54825 11.606C8.54825 10.7294 8.24944 9.92268 7.74812 9.28204L10.3354 5.58709C10.6521 5.13468 10.5422 4.51114 10.0898 4.19436C9.63737 3.87758 9.01383 3.98753 8.69705 4.43993L6.14286 8.08769ZM17.3543 14.6826C15.5073 12.8355 12.5126 12.8355 10.6655 14.6826C8.81844 16.5297 8.81844 19.5244 10.6655 21.3714C12.5126 23.2185 15.5073 23.2185 17.3543 21.3714C19.2014 19.5244 19.2014 16.5297 17.3543 14.6826Z"
			stroke="none"
		/>
	</svg>
)
export default RemoteNode
