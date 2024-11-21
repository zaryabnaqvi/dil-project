import React from 'react'
import Profile from '../../Profile/Profile'
import { Routes, Route } from 'react-router-dom'
import BookList, { DepartmentList } from '../Showdepartments/Showdepartments'
import Book from '../Book/Book'
import Review from '../AddReview/Review';
import ReviewForm from '../AddReview/ReviewFrom'
import Department from '../Department/Department'
// import Services, { DepartmentServiceList } from '../DepartmentService/DepartmentServices'
// import Services from '../../ShowDepartmentServices/ShowDepartmentServices'
import AddServiceComponent from '../DepartmentService/DepartmentServices'
import Services from '../ShowDepartmentServices/ShowDepartmentServices'
const UserDashboard = () => {
    return (
        <Routes>
            <Route path="profile" element={<Profile />} />
            <Route path="book" element={<Book />} />
            <Route path="department" element={<Department />} />
            <Route path="Showdepartments" element={<DepartmentList />} />

            <Route path="DepartmentService/:id" element={<AddServiceComponent />} />

            <Route path="ShowDepartmentServices/:id" element={<Services />} />


            {/* <Route path="ShowDepartmentService" element={<Services />} /> */}
            {/* <Route path="deparmtent-service/:id" element={<Services />} /> */}


            
            <Route path="book/:id" element={<Book />} />
            
            <Route path="review" element={<Review />} />
            <Route path="review/:id" element={<ReviewForm />} />
        </Routes>
    )
}

export default UserDashboard
