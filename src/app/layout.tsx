import { Metadata } from "next";
import { ReactNode } from "react";

import "./layout.scss";

export const metadata: Metadata = {
    title: "The Next Big Thing",
    description: "It's really huge!"
};

function Layout({
    children,
}: {
    children: ReactNode
}) {
    return (
        <html lang={"en"}>
            <body>
                {children}
            </body>
        </html>
    );
}

export default Layout;
