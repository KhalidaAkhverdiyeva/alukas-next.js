const Product = require('../models/product');

const getProduct = async (req, res) => {
    try {
        const { page = 1, limit = 12, search, collectionName, color, size, material, availability, isNewProduct, minPrice, maxPrice } = req.query;

        const filter = {};
        if (search) {
            filter.title = { $regex: search, $options: 'i' };
        }
        if (collectionName) {
            filter.collectionName = collectionName;
        }
        if (color) {
            filter.color = color;
        }
        if (size) {
            filter.size = size;
        }
        if (material) {
            filter.material = material;
        }
        if (availability) {
            filter.availability = availability;
        }
        if (isNewProduct) {
            filter.isNewProduct = isNewProduct === 'true';
        }
        if (minPrice || maxPrice) {
            filter.newPrice = {};
            if (minPrice) {
                filter.newPrice.$gte = Number(minPrice);
            }
            if (maxPrice) {
                filter.newPrice.$lte = Number(maxPrice);
            }
        }

        if (Object.keys(filter).length === 0) {
            return res.status(400).json({ msg: 'At least one filter must be provided' });
        }

        const products = await Product.find(filter)
            .skip((page - 1) * limit)
            .limit(Number(limit));

        const totalCount = await Product.countDocuments(filter);

        res.status(200).json({ totalCount, page: Number(page), limit: Number(limit), products });
    } catch (err) {
        console.error('Error in getProduct route:', err);
        res.status(500).json({ msg: 'Server error', err });
    }
};


const addProduct = async (req, res) => {
    const {
        title,
        name,
        collectionName,
        newPrice,
        oldPrice,
        smallCardImage,
        smallCardHoverImage,
        color,
        isNewProduct,
        material,
        size,
        availability,
        tags,
        detailImages,
        reviews,
        sold,
        soldOut,
    } = req.body;

    if (!title || !name || !collectionName || !newPrice || !smallCardImage || !smallCardHoverImage || !color || !size || !isNewProduct) {
        return res.status(400).json({ msg: 'Please fill in all required fields' });
    }

    try {
        const product = new Product({
            title,
            name,
            collectionName,
            newPrice,
            oldPrice: oldPrice || null,
            smallCardImage,
            smallCardHoverImage,
            color,
            material: material || null,
            size,
            availability: availability || 'in stock',
            tags: tags || [],
            detailImages: detailImages || [],
            reviews: reviews || 0,
            sold: sold || 0,
            soldOut: soldOut || false,
            isNewProduct: isNewProduct || false,
        });

        await product.save();
        res.status(201).json({ msg: 'Product added successfully', product });
    } catch (err) {
        console.error('Error in addProduct route:', err);
        res.status(500).json({ msg: 'Server error', err });
    }
};



const deleteProduct = async (req, res) => {
    const { id } = req.params;

    try {
        const product = await Product.findById(id);

        if (!product) {
            return res.status(404).json({ msg: 'Product not found' });
        }

        await Product.findByIdAndDelete(id);
        res.status(200).json({ msg: 'Product deleted successfully' });
    } catch (err) {
        console.error('Error in deleteProduct route:', err);
        res.status(500).json({ msg: 'Server error', err });
    }
};


module.exports = { getProduct, addProduct, deleteProduct };