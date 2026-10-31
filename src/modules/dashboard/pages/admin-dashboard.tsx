
import UserListingPage from '../../user-management/pages/userListingPage'

const AdminDashboard = () => {
    return (
        <section className="w-full min-h-screen bg-white text-black">
            <div className="w-full h-screen md:h-screen lg:h-screen overflow-x-auto">
                <UserListingPage />
            </div>
        </section>
    )
}

export default AdminDashboard
