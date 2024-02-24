//REBAR 2.2.2
//COPYRIGHT TOAST STUDIO

var iconCharts = {
	barRight: `
		<svg width="48px" height="48px" viewBox="0 0 48 48" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
			<g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
				<path d="M36,34 C37.1045695,34 38,34.8954305 38,36 C38,37.1045695 37.1045695,38 36,38 L2,38 C0.8954305,38 1.3527075e-16,37.1045695 0,36 C-1.3527075e-16,34.8954305 0.8954305,34 2,34 L36,34 Z M46,22 C47.1045695,22 48,22.8954305 48,24 C48,25.1045695 47.1045695,26 46,26 L2,26 C0.8954305,26 1.02344917e-15,25.1045695 0,24 C-1.3527075e-16,22.8954305 0.8954305,22 2,22 L46,22 Z M28,10 C29.1045695,10 30,10.8954305 30,12 C30,13.1045695 29.1045695,14 28,14 L2,14 C0.8954305,14 -3.0881846e-16,13.1045695 0,12 C-1.3527075e-16,10.8954305 0.8954305,10 2,10 L28,10 Z" fill="#000000"></path>
			</g>
		</svg>
	`,
	barDown: `
		<svg width="48px" height="48px" viewBox="0 0 48 48" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
			<g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
				<path d="M36,34 C37.1045695,34 38,34.8954305 38,36 C38,37.1045695 37.1045695,38 36,38 L2,38 C0.8954305,38 -2.521074e-13,37.1045695 -2.52242671e-13,36 C-2.52377942e-13,34.8954305 0.8954305,34 2,34 L36,34 Z M46,22 C47.1045695,22 48,22.8954305 48,24 C48,25.1045695 47.1045695,26 46,26 L2,26 C0.8954305,26 -2.51219222e-13,25.1045695 -2.52242671e-13,24 C-2.52377942e-13,22.8954305 0.8954305,22 2,22 L46,22 Z M28,10 C29.1045695,10 30,10.8954305 30,12 C30,13.1045695 29.1045695,14 28,14 L2,14 C0.8954305,14 -2.5255149e-13,13.1045695 -2.52242671e-13,12 C-2.52377942e-13,10.8954305 0.8954305,10 2,10 L28,10 Z" fill="#000000" transform="translate(24.000000, 24.000000) rotate(-270.000000) translate(-24.000000, -24.000000) "></path>
			</g>
		</svg>
	`,
	barLeft: `
		<svg width="48px" height="48px" viewBox="0 0 48 48" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
			<g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
				<path d="M36,34 C37.1045695,34 38,34.8954305 38,36 C38,37.1045695 37.1045695,38 36,38 L2,38 C0.8954305,38 1.3527075e-16,37.1045695 0,36 C-1.3527075e-16,34.8954305 0.8954305,34 2,34 L36,34 Z M46,22 C47.1045695,22 48,22.8954305 48,24 C48,25.1045695 47.1045695,26 46,26 L2,26 C0.8954305,26 1.02344917e-15,25.1045695 0,24 C-1.3527075e-16,22.8954305 0.8954305,22 2,22 L46,22 Z M28,10 C29.1045695,10 30,10.8954305 30,12 C30,13.1045695 29.1045695,14 28,14 L2,14 C0.8954305,14 -3.0881846e-16,13.1045695 0,12 C-1.3527075e-16,10.8954305 0.8954305,10 2,10 L28,10 Z" fill="#000000" transform="translate(24.000000, 24.000000) scale(-1, 1) translate(-24.000000, -24.000000) "></path>
			</g>
		</svg>
	`,
	barUp: `
		<svg width="48px" height="48px" viewBox="0 0 48 48" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
			<g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
				<path d="M36,34 C37.1045695,34 38,34.8954305 38,36 C38,37.1045695 37.1045695,38 36,38 L2,38 C0.8954305,38 1.03163967e-13,37.1045695 1.03028697e-13,36 C1.02893426e-13,34.8954305 0.8954305,34 2,34 L36,34 Z M46,22 C47.1045695,22 48,22.8954305 48,24 C48,25.1045695 47.1045695,26 46,26 L2,26 C0.8954305,26 1.04052146e-13,25.1045695 1.03028697e-13,24 C1.02893426e-13,22.8954305 0.8954305,22 2,22 L46,22 Z M28,10 C29.1045695,10 30,10.8954305 30,12 C30,13.1045695 29.1045695,14 28,14 L2,14 C0.8954305,14 1.02719878e-13,13.1045695 1.03028697e-13,12 C1.02893426e-13,10.8954305 0.8954305,10 2,10 L28,10 Z" fill="#000000" transform="translate(24.000000, 24.000000) rotate(-90.000000) translate(-24.000000, -24.000000) "></path>
			</g>
		</svg>
	`,
	pie60Stroke: `
		<svg width="48px" height="48px" viewBox="0 0 48 48" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
			<g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
				<path d="M24,48 C37.254834,48 48,37.254834 48,24 C48,10.745166 37.254834,0 24,0 C10.745166,0 0,10.745166 0,24 C0,37.254834 10.745166,48 24,48 Z M24,4 L24,24 L8.63538186,36.8042356 C5.74130616,33.3352186 4,28.8709612 4,24 C4,18.4771525 6.23857625,13.4771525 9.85786438,9.85786438 C13.4771525,6.23857625 18.4771525,4 24,4 Z" fill="#000000"></path>
			</g>
		</svg>
	`,
	pie60Duo: `
		<svg width="48px" height="48px" viewBox="0 0 48 48" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
			<g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
				<path d="M24,48 C37.254834,48 48,37.254834 48,24 C48,10.745166 37.254834,0 24,0 C10.745166,0 0,10.745166 0,24 C0,37.254834 10.745166,48 24,48 Z" fill="#000000" opacity="0.200000003"></path>
				<path d="M24,0 C30.627417,0 36.627417,2.6862915 40.9705627,7.02943725 C45.3137085,11.372583 48,17.372583 48,24 C48,30.627417 45.3137085,36.627417 40.9705627,40.9705627 C36.627417,45.3137085 30.627417,48 24,48 C17.372583,48 11.372583,45.3137085 7.02943725,40.9705627 C6.5170968,40.4582223 6.02781281,39.9228254 5.5632752,39.3660619 L24,24 L24,0 L24,0 Z" fill="#000000"></path>
			</g>
		</svg>
	`,
	pie60Multi: `
		<svg width="48px" height="48px" viewBox="0 0 48 48" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
			<g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
				<path class="alwaysMain" d="M24,48 C37.254834,48 48,37.254834 48,24 C48,10.745166 37.254834,0 24,0 C10.745166,0 0,10.745166 0,24 C0,37.254834 10.745166,48 24,48 Z" fill="#000000" opacity="0.200000003"></path>
				<path class="alwaysAccent" d="M24,0 C30.627417,0 36.627417,2.6862915 40.9705627,7.02943725 C45.3137085,11.372583 48,17.372583 48,24 C48,30.627417 45.3137085,36.627417 40.9705627,40.9705627 C36.627417,45.3137085 30.627417,48 24,48 C17.372583,48 11.372583,45.3137085 7.02943725,40.9705627 C6.5170968,40.4582223 6.02781281,39.9228254 5.5632752,39.3660619 L24,24 L24,0 L24,0 Z" fill="#FF00DB"></path>
			</g>
		</svg>
	`,
	gantt: `
		<svg width="48px" height="48px" viewBox="0 0 48 48" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
			<g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
				<path d="M2,10 L26,10 C27.1045695,10 28,10.8954305 28,12 C28,13.1045695 27.1045695,14 26,14 L2,14 C0.8954305,14 -9.74952274e-16,13.1045695 0,12 C-1.3527075e-16,10.8954305 0.8954305,10 2,10 Z M12,22 L36,22 C37.1045695,22 38,22.8954305 38,24 C38,25.1045695 37.1045695,26 36,26 L12,26 C10.8954305,26 10,25.1045695 10,24 C10,22.8954305 10.8954305,22 12,22 Z M22,34 L46,34 C47.1045695,34 48,34.8954305 48,36 C48,37.1045695 47.1045695,38 46,38 L22,38 C20.8954305,38 20,37.1045695 20,36 C20,34.8954305 20.8954305,34 22,34 Z" fill="#000000"></path>
			</g>
		</svg>
	`,
}