import * as React from 'react'
import { SVGProps } from 'react'
const Bob = (props: SVGProps<SVGSVGElement>) => (
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
		<path d="M12.0297 11.5875L11.1215 10.5361C9.67139 8.85746 9.78596 6.33823 11.3824 4.79815C13.001 3.23677 15.5651 3.23677 17.1837 4.79815C18.7801 6.33823 18.8947 8.85746 17.4446 10.5361L16.5366 11.5872C16.0621 12.1365 16.2218 12.9845 16.8636 13.3235L18.4551 14.1643C21.6036 15.8277 23.5735 19.0963 23.5735 22.6572L23.5736 26H5.00006L5.00004 22.6523C5.00002 19.094 6.96791 15.8274 10.1136 14.1642L11.703 13.3238C12.3446 12.9845 12.5042 12.1367 12.0297 11.5875Z" />
	</svg>
)
export default Bob
