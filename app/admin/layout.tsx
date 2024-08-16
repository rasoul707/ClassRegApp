

import React from "react";
import AdminLayout from "@/components/AdminLayout";
import {Metadata} from "next";


export const metadata: Metadata = {
    title: "پنل مدیریت",
};


export default function Layout({children}: { children: React.ReactNode; }) {
    return (
        <AdminLayout>
            {children}
        </AdminLayout>
    )
}