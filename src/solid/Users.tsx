import * as React from 'react'
import { SVGProps } from 'react'
const Users = (props: SVGProps<SVGSVGElement>) => (
	<svg
		width="28"
		height="28"
		viewBox="0 0 26 28"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		strokeLinecap="round"
		strokeLinejoin="round"
		{...props}
	>
		<path
			fillRule="evenodd"
			clipRule="evenodd"
			d="M17.4468 2.41515C14.9897 -0.0465857 11.001 -0.0465854 8.54379 2.41515C6.24884 4.71435 6.08245 8.38301 8.15985 10.8805L9.18353 12.1112C9.37334 12.3394 9.26462 12.6874 8.97867 12.767L7.59494 13.1521C3.36911 14.3281 0.445312 18.1767 0.445312 22.5631V26.3709C0.445312 26.9232 0.893028 27.3709 1.44531 27.3709H24.5547C25.107 27.3709 25.5547 26.9232 25.5547 26.3709V22.5697C25.5547 18.1799 22.6282 14.3284 18.3988 13.1523L17.0122 12.7667C16.7263 12.6871 16.6175 12.3391 16.8073 12.111L17.8308 10.8805C19.9082 8.38301 19.7418 4.71435 17.4468 2.41515Z"
		/>
	</svg>
)
export default Users
