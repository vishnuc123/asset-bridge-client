
import UserListingPage from '../../user-management/pages/userListingPage'
import AdminSideBar from '../components/sidebar/AdminSideBar'

const AdminDashboard = () => {
    return (
        <section className="w-full">
            <div className="w-full">
                <UserListingPage />
            </div>
        </section>
    )
}

export default AdminDashboard
