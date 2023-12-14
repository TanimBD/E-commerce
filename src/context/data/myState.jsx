import React, { useEffect, useState } from 'react'
import MyContext from './myContext';
import { Timestamp, addDoc, collection, deleteDoc, doc, onSnapshot, orderBy, query } from 'firebase/firestore';
import { toast } from 'react-toastify';
import { fireDB } from '../../firebase/FirebaseConfig';

function MyState(props) {
    const [mode, setMode] = useState('light');
    const toggleMode = () => {
        if (mode === 'light') {
            setMode('dark');
            document.body.style.backgroundColor = 'rgb(17, 24, 39)';
        }
        else {
            setMode('light');
            document.body.style.backgroundColor = 'white';

        }
    }
    const [loading, setLoading] = useState(false)

    const [products, setProducts] = useState({
        title: null,
        price: null,
        imageUrl: null,
        category: null,
        description: null,
        time: Timestamp.now(),
        date: new Date().toLocaleString(
            "en-US",
            {
                month: "short",
                day: "2-digit",
                year: "numeric",
            }
        )

    })

    const addProduct = async () => {
        if (products.title == null || products.price == null || products.imageUrl == null || products.category == null || products.description == null) {
            return toast.error('Please fill all fields')
        }
        const productRef = collection(fireDB, "products")
        setLoading(true)
        try {
            await addDoc(productRef, products)
            toast.success("Product Add successfully")
            setTimeout(() => {
                window.location.href = "/dashboard"

            }, 800)
            getProductData()
            closeModal()
            setLoading(false)
        } catch (error) {
            console.log(error)
            setLoading(false)
        }
        setProducts("")
    }

    const [product, setProduct] = useState([]);

    const getProductData = async () => {
        setLoading(true)
        try {
            const q = query(
                collection(fireDB, "products"),
                orderBy("time"),

            );
            const data = onSnapshot(q, (QuerySnapshot) => {
                let productsArray = [];
                QuerySnapshot.forEach((doc) => {
                    productsArray.push({ ...doc.data(), id: doc.id });
                });
                setProduct(productsArray)
                setLoading(false);
            });
            return () => data;
        } catch (error) {
            console.log(error)
            setLoading(false)
        }
    }
    useEffect(() => {
        getProductData();
    }, []);

    // delete Product============
    const deleteProduct = async (item) => {

        try {
            setLoading(true)
            await deleteDoc(doc(fireDB, "products", item.id));
            toast.success('Product Deleted successfully')
            setLoading(false)
            getProductData()
        } catch (error) {
            // toast.success('Product Deleted Falied')
            setLoading(false)
        }
    }

    const [order, setOrder] = useState([]);

    const getOrderData = async () => {
        setLoading(true)
        try {
            const result = await getDocs(collection(fireDB, "orders"))
            const ordersArray = [];
            result.forEach((doc) => {
                ordersArray.push(doc.data());
                setLoading(false)
            });
            setOrder(ordersArray);
            console.log(ordersArray)
            setLoading(false);
        } catch (error) {
            console.log(error)
            setLoading(false)
        }
    }


    useEffect(() => {
        getProductData();
        getOrderData()

    }, []);

    return (
        <MyContext.Provider value={{ mode, toggleMode, loading, setLoading, products, setProducts, addProduct, product, deleteProduct, order }}>
            {props.children}
        </MyContext.Provider>
    )
}

export default MyState