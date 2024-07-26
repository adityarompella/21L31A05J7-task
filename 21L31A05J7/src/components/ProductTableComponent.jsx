import React from 'react';

function ProductTableComponent({ data, error, loading }) {
    return (
        <div className="col-span-1  lg:grid-cols-2 xl:grid-cols-3 overflow-x-auto bg-white border border-slate-200 rounded-md shadow-md">

            {loading && <p className="p-4 text-center text-slate-600">Loading...</p>}
            {error && <p className="text-center">Error : token expired or Network Issue</p>}
            {data.length > 0 && (
                <table className="min-w-full bg-white border-collapse">
                    <thead className="bg-slate-700 text-white">
                        <tr>
                            <th className="py-3 px-4 text-left">Product Name</th>
                            <th className="py-3 px-4 text-left">Price</th>
                            <th className="py-3 px-4 text-left">Rating</th>
                            <th className="py-3 px-4 text-left">Discount</th>
                            <th className="py-3 px-4 text-left">Availability</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((product, index) => (
                            <tr key={index} className="border-t border-slate-200">
                                <td className="py-3 px-4">{product.productName}</td>
                                <td className="py-3 px-4">{product.price}</td>
                                <td className="py-3 px-4">{product.rating}</td>
                                <td className="py-3 px-4">{product.discount}%</td>
                                <td className="py-3 px-4">{product.availability}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </div>
    );
}

export default ProductTableComponent;
