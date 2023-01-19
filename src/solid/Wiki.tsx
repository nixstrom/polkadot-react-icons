import * as React from 'react'
import { SVGProps } from 'react'
const Wiki = (props: SVGProps<SVGSVGElement>) => (
	<svg
		width="28"
		height="28"
		viewBox="0 0 26 26"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		strokeLinecap="round"
		strokeLinejoin="round"
		{...props}
	>
		<path
			fillRule="evenodd"
			clipRule="evenodd"
			d="M26 13C26 5.8203 20.1797 0 13 0C5.8203 0 0 5.8203 0 13C0 20.1797 5.8203 26 13 26C20.1797 26 26 20.1797 26 13ZM6.63552 8.78058C7.12179 8.51874 7.72825 8.70068 7.99009 9.18695L10.8806 14.5551L11.8997 12.6626L10.5388 10.1351C10.2769 9.64888 10.4589 9.04242 10.9451 8.78058C11.4314 8.51874 12.0379 8.70068 12.2997 9.18695L13.0354 10.5533L13.7712 9.18695C14.033 8.70068 14.6395 8.51874 15.1257 8.78058C15.612 9.04242 15.7939 9.64888 15.5321 10.1351L14.1712 12.6626L15.1902 14.5551L18.0808 9.18695C18.3426 8.70068 18.9491 8.51874 19.4353 8.78058C19.9216 9.04242 20.1035 9.64888 19.8417 10.1351L16.0707 17.1384C15.8963 17.4624 15.5581 17.6643 15.1902 17.6643C14.8223 17.6643 14.4842 17.4624 14.3098 17.1384L13.0354 14.7718L11.7611 17.1384C11.5867 17.4624 11.2485 17.6643 10.8806 17.6643C10.5127 17.6643 10.1746 17.4624 10.0002 17.1384L6.22915 10.1351C5.96731 9.64888 6.14925 9.04242 6.63552 8.78058Z"
		/>
	</svg>
)
export default Wiki
