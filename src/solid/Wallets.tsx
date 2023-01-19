import * as React from 'react'
import { SVGProps } from 'react'
const Wallets = (props: SVGProps<SVGSVGElement>) => (
	<svg
		width="28"
		height="28"
		viewBox="0 0 28 25"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		strokeLinecap="round"
		strokeLinejoin="round"
		{...props}
	>
		<path
			fillRule="evenodd"
			clipRule="evenodd"
			d="M6.11719 0.613281C5.42683 0.613281 4.86719 1.17293 4.86719 1.86328V5.25H2.11719C1.42683 5.25 0.867188 5.80964 0.867188 6.5V23.646C0.867188 24.3363 1.42683 24.896 2.11719 24.896H22.4695C23.1598 24.896 23.7195 24.3363 23.7195 23.646V20.3257H15.2991C12.398 20.3257 10.0461 17.9739 10.0461 15.0728C10.0461 12.1716 12.398 9.81982 15.2991 9.81982H23.7195V6.5C23.7195 5.80964 23.1598 5.25 22.4695 5.25H7.36719V3.11328H25.2195V17.8223H23.7195V12.3198H15.2991C13.7787 12.3198 12.5461 13.5524 12.5461 15.0728C12.5461 16.5932 13.7787 17.8257 15.2991 17.8257H23.7188V20.3223H26.4695C27.1598 20.3223 27.7195 19.7626 27.7195 19.0723V1.86328C27.7195 1.17293 27.1598 0.613281 26.4695 0.613281H6.11719ZM14.1161 14.1161C14.6043 13.628 15.3957 13.628 15.8839 14.1161L15.902 14.1343C16.3902 14.6224 16.3902 15.4139 15.902 15.902C15.4139 16.3902 14.6224 16.3902 14.1343 15.902L14.1161 15.8839C13.628 15.3957 13.628 14.6043 14.1161 14.1161Z"
		/>
	</svg>
)
export default Wallets
