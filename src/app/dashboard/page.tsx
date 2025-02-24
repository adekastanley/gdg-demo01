import { Outlet } from "react-router-dom";

import { AppSidebar } from "@/components/app-sidebar";

// import {
// 	Breadcrumb,
// 	BreadcrumbItem,
// 	BreadcrumbLink,
// 	BreadcrumbList,
// 	BreadcrumbPage,
// 	BreadcrumbSeparator,
// } from "@/components/ui/breadcrumb";
import { Separator } from "@/components/ui/separator";

import { useIsMobile } from "@/hooks/use-mobile";
import {
	SidebarInset,
	SidebarProvider,
	SidebarTrigger,
} from "@/components/ui/sidebar";

export default function Page() {
	const isMobile = useIsMobile();
	return (
		<SidebarProvider>
			<AppSidebar />
			<SidebarInset>
				<header className="flex h-16 shrink-0 items-center gap-2 border-b px-4">
					<SidebarTrigger className="-ml-1" />
					<Separator orientation="vertical" className="mr-2 h-4" />
					{/* <Breadcrumb>
						<BreadcrumbList>
							<BreadcrumbItem className="hidden md:block">
								<BreadcrumbLink href="#">
									Building Your Application
								</BreadcrumbLink>
							</BreadcrumbItem>
							<BreadcrumbSeparator className="hidden md:block" />
							<BreadcrumbItem>
								<BreadcrumbPage>Data Fetching</BreadcrumbPage>
							</BreadcrumbItem>
						</BreadcrumbList>
					</Breadcrumb> */}
					{!isMobile && (
						<ul className="flex gap-[14rem]   w-full justify-center">
							<li>Home</li>
							<li>About us</li>
							<li>Programs</li>
						</ul>
					)}
					{isMobile && <h1 className="text-center mx-auto pr-8">GDG- OUI</h1>}
				</header>
				<div className="flex flex-1 flex-col gap-4 p-4">
					{/* <div className="grid auto-rows-min gap-4 md:grid-cols-3">
            <div className="aspect-video rounded-xl bg-muted/50" />
            <div className="aspect-video rounded-xl bg-muted/50" />
            <div className="aspect-video rounded-xl bg-muted/50" />
          </div>
          <div className="min-h-[100vh] flex-1 rounded-xl bg-muted/50 md:min-h-min" /> */}
					<Outlet />
				</div>
			</SidebarInset>
		</SidebarProvider>
	);
}
