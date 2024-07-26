import React, { useState } from 'react';
import productsFetchHook from '../hooks/productsFetchHook';
import ProductTableComponent from '../components/ProductTableComponent';

function HomeScreen() {
    const companies = ["AMZ", "FLP", "SNP", "MYN", "AZO"];
    const categories = ["Phone", "Compani", "TV", "Earphone", "Tablet", "Charger", "Mouse",
        "Keyboard", "Bluetooth", "Pendrive", "Remote", "Speaker", "Headset", "Laptop", "PC"
    ];

    const [selectedCompany, setSelectedCompany] = useState("AMZ");
    const [selectedCategory, setSelectedCategory] = useState("Phone");
    const [top, setTop] = useState(10);
    const [minPrice, setMinPrice] = useState(1);
    const [maxPrice, setMaxPrice] = useState(10000);

    const { data, loading, error } = productsFetchHook(selectedCompany, selectedCategory, top, minPrice, maxPrice);

    return (
        <div className="p-6 bg-slate-100 min-h-screen">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                <div className="space-y-4">
                    <div>
                        <label htmlFor="company" className="block text-lg font-medium text-slate-700">Company:</label>
                        <select
                            id="company"
                            value={selectedCompany}
                            onChange={(e) => setSelectedCompany(e.target.value)}
                            className="mt-1 block w-full p-2 border border-slate-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-slate-500"
                        >
                            {companies.map((company) => (
                                <option key={company} value={company}>
                                    {company}
                                </option>
                            ))}
                        </select>
                    </div>

                    <div>
                        <label htmlFor="category" className="block text-lg font-medium text-slate-700">Category:</label>
                        <select
                            id="category"
                            value={selectedCategory}
                            onChange={(e) => setSelectedCategory(e.target.value)}
                            className="mt-1 block w-full p-2 border border-slate-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-slate-500"
                        >
                            {categories.map((category) => (
                                <option key={category} value={category}>
                                    {category}
                                </option>
                            ))}
                        </select>
                    </div>

                    <div>
                        <label htmlFor="top" className="block text-lg font-medium text-slate-700">Number of Products:</label>
                        <input
                            id="top"
                            type="number"
                            value={top}
                            min="1"
                            onChange={(e) => setTop(e.target.value)}
                            className="mt-1 block w-full p-2 border border-slate-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-slate-500"
                        />
                    </div>

                    <div>
                        <label htmlFor="minPrice" className="block text-lg font-medium text-slate-700">Min Price:</label>
                        <input
                            id="minPrice"
                            type="number"
                            value={minPrice}
                            min="1"
                            onChange={(e) => setMinPrice(e.target.value)}
                            className="mt-1 block w-full p-2 border border-slate-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-slate-500"
                        />
                    </div>

                    <div>
                        <label htmlFor="maxPrice" className="block text-lg font-medium text-slate-700">Max Price:</label>
                        <input
                            id="maxPrice"
                            type="number"
                            value={maxPrice}
                            min="1"
                            max="10000"
                            onChange={(e) => setMaxPrice(e.target.value)}
                            className="mt-1 block w-full p-2 border border-slate-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-slate-500"
                        />
                    </div>
                </div>

                <div className='col-span-1  lg:grid-cols-2 xl:grid-cols-3 '>

                    <ProductTableComponent data={data} error={error} loading={loading} />
                </div>
            </div>
        </div>
    );
}

export default HomeScreen;
