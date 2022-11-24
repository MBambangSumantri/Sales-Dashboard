import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Dashboard from './pages/Dashboard'
import Balance from './pages/Balance'
import Transaction from './pages/Transaction'
import Product from './pages/Product'
import Channel from './pages/Channel'

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Dashboard />} />
                    <Route path="balance" element={<Balance />} />
                    <Route path="transaction" element={<Transaction />} />
                    <Route path="product" element={<Product />} />
                    <Route path="channel" element={<Channel />} />
                </Route>
                {/* <Route path="login" element={<div> iki halaman login</div>} /> */}
            </Routes>
        </BrowserRouter>
    )
}

export default App
