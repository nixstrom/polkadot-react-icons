import * as React from 'react'
import { SVGProps } from 'react'
const ReadTime = (props: SVGProps<SVGSVGElement>) => (
	<svg
		width={24}
		height={28}
		viewBox="0 0 24 28"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		{...props}
	>
		<path d="M10.7499 18.1897H5.13043" strokeMiterlimit={10} />
		<path d="M14 14.9621H5.13043" strokeMiterlimit={10} />
		<path d="M18.1537 14.8824V7.65379L12.5 2H2.00005V22.9998H10.5" />
		<path d="M17.3281 7.6538H12.4999V3" />
		<path d="M16.3088 26C19.3788 26 21.8675 23.5112 21.8675 20.4412C21.8675 17.3712 19.3788 14.8824 16.3088 14.8824C13.2387 14.8824 10.75 17.3712 10.75 20.4412C10.75 23.5112 13.2387 26 16.3088 26Z" />
		<path d="M16.4153 18.1429V20.5143L15.4852 21.6429" />
	</svg>
)
export default ReadTime
