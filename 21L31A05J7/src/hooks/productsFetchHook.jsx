import { useState, useEffect } from 'react';
import axios from 'axios';
const productsFetchHook = (selectedCompany, selectedCategory, top, minPrice, maxPrice) => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiZXhwIjoxNzIxOTc1MjY4LCJpYXQiOjE3MjE5NzQ5NjgsImlzcyI6IkFmZm9yZG1lZCIsImp0aSI6Ijc1N2E4ZDE2LTRiMmMtNGJkOC05ZWRlLWNhYjAxNzE1NWEzYSIsInN1YiI6ImFkaXR5YS5yb21wZWxsYUBnbWFpbC5jb20ifSwiY29tcGFueU5hbWUiOiJ2aWduYW4iLCJjbGllbnRJRCI6Ijc1N2E4ZDE2LTRiMmMtNGJkOC05ZWRlLWNhYjAxNzE1NWEzYSIsImNsaWVudFNlY3JldCI6Im9kUUtVdnB1ckd0ZkZ2aEUiLCJvd25lck5hbWUiOiJhZGl0eWEiLCJvd25lckVtYWlsIjoiYWRpdHlhLnJvbXBlbGxhQGdtYWlsLmNvbSIsInJvbGxObyI6IjIxTDMxQTA1SjcifQ.cj3q4lxwTj4Xbymum6s5RSnzh_-hpyhv1DvLYgRgb2A"
    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            setError(null);
            // console.log(import.meta.env.VITE_TOKEN)
            try {
                const { data, status } = await axios.get(`http://20.244.56.144/test/companies/${selectedCompany}/categories/${selectedCategory}/products?top=${top}&minPrice=${minPrice}&maxPrice=${maxPrice}`, {
                    headers: { Authorization: `Bearer ${TOKEN}` }
                });
                if (status != 200) {
                    throw new Error('Network response was not ok');
                }
                setData(data);
            } catch (err) {
                setError(`${err.message}`);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [selectedCompany, selectedCategory, top, minPrice, maxPrice]);

    return { data, loading, error };
};

export default productsFetchHook;
