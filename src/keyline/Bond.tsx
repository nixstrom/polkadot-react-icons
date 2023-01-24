import * as React from 'react'
import { SVGProps } from 'react'
const Bond = (props: SVGProps<SVGSVGElement>) => (
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
		<path d="M20.5726 6.52721C20.5726 9.02776 17.5323 11.0549 13.781 11.0549C10.0971 11.0549 7.10583 9.09799 7 6.65902V10.0861C7 12.5866 10.0403 14.6138 13.7916 14.6138C17.5429 14.6138 20.5832 12.5866 20.5832 10.0861C20.5832 9.77725 20.6621 6.81873 20.5736 6.52625L20.5726 6.52721Z" />
		<path d="M13.8078 11.0555C17.5582 11.0555 20.5994 9.02828 20.5994 6.52773C20.5994 4.02719 17.5591 2 13.8078 2C10.0565 2 7.01621 4.02719 7.01621 6.52773C7.01621 9.02828 10.0565 11.0555 13.8078 11.0555Z" />
		<path
			d="M13.8081 26L13.8081 19.3212M10.1068 22.0224L13.808 18.3212L17.5093 22.0224"
			strokeMiterlimit={10}
			fill="none"
		/>
	</svg>
)
export default Bond
