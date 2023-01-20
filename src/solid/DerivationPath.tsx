import * as React from 'react'
import { SVGProps } from 'react'
const DerivationPath = (props: SVGProps<SVGSVGElement>) => (
	<svg
		width="28"
		height="28"
		viewBox="0 0 26 27"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		strokeLinecap="round"
		strokeLinejoin="round"
		{...props}
	>
		<path
			fillRule="evenodd"
			clipRule="evenodd"
			d="M17.7458 4.72424C17.7458 2.11512 15.6307 0 13.0215 0C10.4124 0 8.29729 2.11512 8.29729 4.72424C8.29729 6.99024 9.89267 8.88362 12.0215 9.34243V12.3726H4.57671C4.02443 12.3726 3.57671 12.8203 3.57671 13.3726L3.57671 16.7937C1.52212 17.3063 1.90735e-06 19.1642 1.90735e-06 21.3776C1.90735e-06 23.9867 2.11512 26.1018 4.72424 26.1018C7.33337 26.1018 9.44848 23.9867 9.44848 21.3776C9.44848 19.0595 7.77894 17.1314 5.57672 16.73V14.3726L20.2757 14.3726V16.7594C18.1469 17.2182 16.5515 19.1116 16.5515 21.3776C16.5515 23.9867 18.6666 26.1018 21.2758 26.1018C23.8849 26.1018 26 23.9867 26 21.3776C26 19.1115 24.4046 17.2181 22.2757 16.7594V13.3726C22.2757 12.8203 21.828 12.3726 21.2757 12.3726H14.0215V9.34245C16.1503 8.88369 17.7458 6.99028 17.7458 4.72424Z"
		/>
	</svg>
)
export default DerivationPath
