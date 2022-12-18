import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { HomePage } from './pages/Home';
import { RouterLayout } from './layout/RouterLayout';
import { ProductPage } from './pages/Products';
import { ProductDetailPage } from './pages/ProductDetail';

export const AppRouter: React.FC<{}> = () => {

    return (
        <Routes>
            <Route path="/" element={<RouterLayout />}>
                <Route path="/" element={<HomePage />} />
                <Route path="/products/" element={<ProductPage />} />
                <Route path="/products/:id" element={<ProductDetailPage />} />
            </Route>
        </Routes>
    )
}
