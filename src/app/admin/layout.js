import AdminHeader from "@/component/adminHeader";

export default function AdminLayout({ children }) {
    return (

        <section>
            <AdminHeader />
            {children}
        </section>
    )
}