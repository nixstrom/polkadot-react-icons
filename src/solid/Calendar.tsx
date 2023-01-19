import * as React from 'react'
import { SVGProps } from 'react'
const Calendar = (props: SVGProps<SVGSVGElement>) => (
	<svg
		width="28"
		height="28"
		viewBox="0 0 28 28"
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
			d="M10.6735 2C10.6735 1.30964 10.1138 0.75 9.42346 0.75C8.73311 0.75 8.17346 1.30964 8.17346 2V2.63452H2C1.30964 2.63452 0.75 3.19417 0.75 3.88452V10.0002H27.25V12.5002H0.75V26C0.75 26.6904 1.30964 27.25 2 27.25H26C26.6904 27.25 27.25 26.6904 27.25 26V3.88452C27.25 3.19417 26.6904 2.63452 26 2.63452H19.8264V6.34195C19.8264 7.03231 19.2668 7.59195 18.5764 7.59195C17.8861 7.59195 17.3264 7.03231 17.3264 6.34195V2.63452H10.6735V2ZM19.8264 2.00024V2.63281H17.3264V2.00024C17.3264 1.30989 17.8861 0.750244 18.5764 0.750244C19.2668 0.750244 19.8264 1.30989 19.8264 2.00024ZM10.6735 6.34169V2.63672H8.17346V6.34169C8.17346 7.03205 8.73311 7.59169 9.42346 7.59169C10.1138 7.59169 10.6735 7.03205 10.6735 6.34169Z"
		/>
	</svg>
)
export default Calendar
