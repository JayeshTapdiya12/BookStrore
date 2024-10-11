import Book from '../models/books.model';
import WishList from '../models/wishlist.model';


export const getwishlist = async (body) => {
    const data = await WishList.findOne({ _id: body.userId });

    return data;

}


export const addwishlist = async (bookID, body) => {
    const book = await Book.findOne({ _id: bookID });
    if (!book) {
        throw new Error("Book not found");
    }

    let wishlist = await WishList.findOne({ _id: body.userId });

    if (wishlist) {
        const existingBook = WishList.books.find(wishlistBook => wishlistBook.bookName === book.bookName);

        if (existingBook) {
            existingBook.quantity += 1;
        } else {
            WishList.books.push({
                description: book.description,
                discountPrice: book.discountPrice,
                bookName: book.bookName,
                author: book.author,
                price: book.price,
            });
        }
        await WishList.save();
    } else {
        const newWishlist = await WishList.create({
            wishlistBy: body.userId,
            books: [{
                description: book.description,
                discountPrice: book.discountPrice,
                bookName: book.bookName,
                author: book.author,
                price: book.price,
            }]
        });
        await newWishlist.save();
        WishList = newWishlist;
    }

    return wishlist;


}


export const removewishlist = async (bookID, body) => {
    const wishlist = await WishList.findOne({ wishlistBy: body.userId });

    if (!wishlist) {
        throw new Error("Wishlist not found");
    }


    const bookIndex = WishList.books.findIndex(book => book._id.toString() === bookID);

    if (bookIndex === -1) {
        throw new Error("Book not found in wishlist");
    }


    WishList.books.splice(bookIndex, 1);


    await WishList.save();

    return WishList;
}