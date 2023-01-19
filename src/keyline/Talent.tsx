import * as React from 'react'
import { SVGProps } from 'react'
const Talent = (props: SVGProps<SVGSVGElement>) => (
	<svg
		width="28"
		height="28"
		viewBox="0 0 28 25"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		stroke="currentColor"
		strokeLinecap="round"
		strokeLinejoin="round"
		{...props}
	>
		<path
			d="M17.1443 22.8612H2V19.6582C2 16.3465 4.20777 13.4407 7.39797 12.553L8.56208 12.2292C9.39049 11.9981 9.70546 10.99 9.15549 10.3295L8.29451 9.29471C6.82529 7.5283 6.94279 4.93349 8.56603 3.3063C10.3038 1.56457 13.1257 1.56457 14.8635 3.3063C16.4867 4.9325 16.6042 7.52732 15.135 9.29471L14.274 10.3295C13.7241 10.991 14.039 11.9991 14.8674 12.2292L17.0308 12.8305C18.0438 13.1119 18.8278 13.7784 19.2879 14.6157"
			stroke="black"
		/>
		<path
			d="M22.403 15.691L26 16.4869L23.5681 19.2258L23.9137 22.8544L20.527 21.4148L17.1433 22.8623L17.4829 19.2327L15.0451 16.4987L18.6411 15.695L20.5171 12.5591L22.402 15.691H22.403Z"
			stroke="black"
		/>
	</svg>
)
export default Talent
