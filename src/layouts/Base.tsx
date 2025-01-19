import { Outlet } from "react-router-dom";

import NavBar from "@/components/navigation/NavBar";
import Footer from "@/components/navigation/Footer";

export default function Base() {
	return (
		<>
			<NavBar />
			<Outlet />
			<Footer />
		</>
	);
}

// export function ErrorBoundary({ error }: Route.ErrorBoundaryProps) {
// 	let message = "Oops!";
// 	let details = "An unexpected error occurred.";
// 	let stack: string | undefined;

// 	if (isRouteErrorResponse(error)) {
// 		message = error.status === 404 ? "404" : "Error";
// 		details =
// 			error.status === 404
// 				? "The requested page could not be found."
// 				: error.statusText || details;
// 	} else if (import.meta.env.DEV && error && error instanceof Error) {
// 		details = error.message;
// 		stack = error.stack;
// 	}

// 	return (
// 		<main className="pt-16 p-4 container mx-auto">
// 			<h1>{message}</h1>
// 			<p>{details}</p>
// 			{stack && (
// 				<pre className="w-full p-4 overflow-x-auto">
// 					<code>{stack}</code>
// 				</pre>
// 			)}
// 		</main>
// 	);
// }
