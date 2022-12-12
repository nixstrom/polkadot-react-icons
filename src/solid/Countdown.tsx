import * as React from "react";
import { SVGProps } from "react";
const Countdown = (props: SVGProps<SVGSVGElement>) => <svg width={19} height={27} viewBox="0 0 19 27" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path fillRule="evenodd" clipRule="evenodd" d="M0 1.86328C0 1.311 0.447715 0.863281 1 0.863281L3 0.863281L16 0.863281L18 0.863281C18.5523 0.863281 19 1.311 19 1.86328C19 2.41557 18.5523 2.86328 18 2.86328H17V7.69659C17 7.98085 16.879 8.25167 16.6673 8.44137L10.6161 13.8633L16.6673 19.2852C16.879 19.4749 17 19.7457 17 20.03V25H18C18.5523 25 19 25.4477 19 26C19 26.5523 18.5523 27 18 27L1 27C0.447715 27 0 26.5523 0 26C0 25.4477 0.447715 25 1 25H2L2 20.03C2 19.7457 2.12097 19.4749 2.33268 19.2852L8.38393 13.8633L2.33268 8.44137C2.12098 8.25168 2 7.98085 2 7.69659L2 2.86328H1C0.447715 2.86328 0 2.41557 0 1.86328Z" fill="black" /></svg>;
export default Countdown;