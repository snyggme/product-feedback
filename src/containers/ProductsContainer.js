import Products from "../components/Products";
import Feedbacks from "../components/Feedbacks";
import Comments from "../components/Comments";
import AddFeedback from "../components/AddFeedback";
import { Route, Routes } from 'react-router-dom';

function ProductsContainer() {       
    return (
        <Routes>
            <Route path='/' element={<Products />} />
            <Route path=':productId' element={<Feedbacks />} />
            <Route path=':productId/comments/:feedbackId' element={<Comments />} />
            <Route path='add' element={<AddFeedback />} />
            <Route
                path="*"
                element={
                    <main style={{ padding: "1rem" }}>
                        <p>There's nothing here!</p>
                    </main>
                }
			/>
        </Routes>
    )
}

export default ProductsContainer
