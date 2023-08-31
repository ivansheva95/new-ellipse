import React from "react";
import {
    Outlet,
    Route,
    createBrowserRouter,
    createRoutesFromElements
} from "react-router-dom";
import { RootLayout } from "./RootLayout";
import { Logo } from "@/ui";

const HomePage = React.lazy(() => import('./HomePage').then(({ HomePage }) => ({ default: HomePage })))

export const router = createBrowserRouter(
    createRoutesFromElements(
        <Route element={<Outlet />}>
            <Route path="/" element={<RootLayout />}>
                <Route index element={
                    <React.Suspense fallback={<div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"><Logo /></div>}>
                        <HomePage />
                    </React.Suspense>
                } />
            </Route>

            <Route path="*" element={<h1>NOT FOUND</h1>} />
        </Route>
    )
)
