import * as React from 'react'
import { SVGProps } from 'react'
const ThumbsUp = (props: SVGProps<SVGSVGElement>) => (
	<svg
		width="28"
		height="28"
		viewBox="0 0 25 27"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		strokeLinecap="round"
		strokeLinejoin="round"
		{...props}
	>
		<path
			fillRule="evenodd"
			clipRule="evenodd"
			d="M22.5442 21.4902C24.0241 21.1414 24.9687 19.6376 24.9687 18.1057C24.9687 17.0968 24.559 16.1001 23.8564 15.4375C24.3757 14.8323 24.6894 14.0456 24.6894 13.1856C24.6894 11.2747 23.1403 9.72565 21.2294 9.72565L15.5748 9.72566L17.3855 4.89175C17.9798 3.30526 17.2972 1.5247 15.7947 0.742024C14.1218 -0.129411 12.0531 0.549617 11.237 2.26004C10.2304 4.36964 9.11586 6.74637 8.2534 8.59467C7.82207 9.51904 7.45357 10.3117 7.1929 10.8733C7.13915 10.9891 7.08999 11.0951 7.0458 11.1904L1.9614 11.2277C1.412 11.2318 0.968752 11.6783 0.968752 12.2277L0.968752 21.372C0.968752 21.9243 1.41647 22.372 1.96875 22.372L7.05661 22.372C7.079 22.4141 7.10269 22.4579 7.1277 22.5031C7.36792 22.9371 7.73601 23.5177 8.24959 24.102C9.27686 25.2708 10.9438 26.5116 13.3464 26.5117L19.3455 26.5117C20.2208 26.5117 21.0756 26.1053 21.7 25.5219C22.3323 24.9312 22.8266 24.066 22.8266 23.0517C22.8266 22.4895 22.7321 21.9607 22.5442 21.4902Z"
		/>
	</svg>
)
export default ThumbsUp
