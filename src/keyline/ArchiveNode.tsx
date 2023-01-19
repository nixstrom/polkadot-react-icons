import * as React from 'react'
import { SVGProps } from 'react'
const ArchiveNode = (props: SVGProps<SVGSVGElement>) => (
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
		<path d="M21.5358 21.0126L18.5124 16.611" stroke="black" />
		<path d="M9.50999 16.6247L6.44708 20.999" stroke="black" />
		<path
			d="M20.4564 23.2116C20.4564 24.7425 21.6974 25.9834 23.2282 25.9834C24.759 25.9834 26 24.7425 26 23.2116C26 21.6808 24.759 20.4398 23.2282 20.4398C21.6974 20.4398 20.4564 21.6808 20.4564 23.2116Z"
			stroke="black"
		/>
		<path
			d="M2.00001 23.2116C2.00001 24.7425 3.24099 25.9834 4.77183 25.9834C6.30266 25.9834 7.54364 24.7425 7.54364 23.2116C7.54364 21.6808 6.30266 20.4398 4.77183 20.4398C3.24099 20.4398 2.00001 21.6808 2.00001 23.2116Z"
			stroke="black"
		/>
		<path
			d="M5.99593 10.0054C5.99593 14.4267 9.58006 18.0108 14.0013 18.0108C18.4226 18.0108 22.0067 14.4267 22.0067 10.0054C22.0067 5.58414 18.4226 2 14.0013 2C9.58006 2 5.99593 5.58414 5.99593 10.0054Z"
			stroke="black"
			strokeMiterlimit={10}
		/>
		<path d="M12.1736 12.0799L16.1694 8.08414" stroke="black" />
		<path d="M16.1693 12.0799L12.1736 8.08414" stroke="black" />
	</svg>
)
export default ArchiveNode
