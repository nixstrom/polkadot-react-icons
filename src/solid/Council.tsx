import * as React from 'react'
import { SVGProps } from 'react'
const Council = (props: SVGProps<SVGSVGElement>) => (
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
			d="M18.6501 13.6921H22.9518C22.8887 11.3445 21.3113 9.30008 19.0372 8.6682L18.1896 8.43278C17.5879 8.26516 17.3591 7.53252 17.7583 7.05226L18.3836 6.29985C19.4515 5.01632 19.3658 3.13011 18.1859 1.94923C16.9231 0.683591 14.873 0.683591 13.6102 1.94923C12.4302 3.13105 12.3455 5.01632 13.4124 6.29985L14.0377 7.05226C14.437 7.53252 14.2082 8.26516 13.6064 8.43278L12.7608 8.6682C11.4735 9.02605 10.4207 9.84626 9.72664 10.9075C9.74265 11.2607 9.97242 11.595 10.3547 11.7014L11.2004 11.9368C13.21 12.4962 14.6781 14.1583 15.035 16.1575H18.6482L18.6501 13.6921Z"
			stroke="black"
			strokeWidth={2}
		/>
		<path
			d="M9.92536 10.3208L10.5506 9.5684C11.6185 8.28487 11.5328 6.39866 10.3529 5.21778C9.09008 3.95215 7.04002 3.95215 5.77721 5.21778C4.59727 6.39961 4.51251 8.28487 5.57945 9.5684L6.20474 10.3208C6.60401 10.8011 6.37518 11.5337 5.77344 11.7013L4.92592 11.9368C2.60559 12.5818 1 14.695 1 17.1038V19.427H15.1235V17.1001C15.1235 14.694 13.5198 12.5828 11.2014 11.9368L10.3557 11.7013C9.75398 11.5337 9.52514 10.8011 9.92442 10.3208H9.92536Z"
			stroke="black"
			strokeWidth={2}
		/>
		<path
			d="M25 24.1951V13.6924H18.6511V24.2007L21.8246 22.9087L25 24.1951Z"
			fill="black"
			stroke="black"
			strokeWidth={2}
		/>
	</svg>
)
export default Council
