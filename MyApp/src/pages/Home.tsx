import { useState } from 'react'
import Navbar from '../components/Navbar'
import board1 from '../assets/board1.png'
import board2 from '../assets/board2.png'
import board3 from '../assets/board3.png'
import board4 from '../assets/board4.png'
import './Home.css'
 
interface CartItem {
  id: number
  name: string
  price: number
}
 
interface Product {
  id: number
  image: string
  name: string
  price: number
  alt: string
}
 
const products: Product[] = [
  { id: 1, image: board1, name: 'Girl Skateboard', price: 3500, alt: 'Board 1' },
  { id: 2, image: board2, name: 'Agenda Board', price: 2500, alt: 'Board 2' },
  { id: 3, image: board3, name: 'Agenda True Local Board', price: 2500, alt: 'Board 3' },
  { id: 4, image: board4, name: 'Zero Blood Board', price: 4000, alt: 'Board 4' },
]
 
export default function Home() {
  const [cart, setCart] = useState<CartItem[]>([])
  const [cartOpen, setCartOpen] = useState(false)
  const [checkoutOpen, setCheckoutOpen] = useState(false)
  const [form, setForm] = useState({ name: '', address: '', phone: '', postal: '' })
 
  const total = cart.reduce((sum, item) => sum + item.price, 0)
 
  function addToCart(name: string, price: number) {
    setCart((prev) => [...prev, { id: Date.now(), name, price }])
    setCartOpen(true)
  }
 
  function buyNow(name: string, price: number) {
    addToCart(name, price)
    setCheckoutOpen(true)
  }
 
  function removeItem(id: number) {
    setCart((prev) => prev.filter((item) => item.id !== id))
  }
 
  function openCheckout() {
    if (cart.length === 0) {
      alert('Your cart is empty!')
      return
    }
    setCheckoutOpen(true)
  }
 
  function submitOrder(e: React.FormEvent) {
    e.preventDefault()
    alert('Order Placed Successfully! Thank you for supporting Davao Skateshop.')
    setCart([])
    setForm({ name: '', address: '', phone: '', postal: '' })
    setCheckoutOpen(false)
    setCartOpen(false)
  }
 
  return (
    <>
      <div
        className="floating-cart"
        onClick={() => setCartOpen((prev) => !prev)}
      >
        CART (<span>{cart.length}</span>)
      </div>
 
      <Navbar />
 
      <div className="shop">
        <h1>Davao Skateshop</h1>
        <p className="tagline">Born From The Streets</p>
      </div>
 
      {products.map((product) => (
        <div className="board" key={product.id}>
          <img src={product.image} alt={product.alt} />
          <div className="board-info">
            <h2 className="product-name">{product.name}</h2>
            <p className="price">₱{product.price.toLocaleString()}</p>
            <div className="button-group">
              <button className="shop-btn" onClick={() => addToCart(product.name, product.price)}>
                ADD TO CART
              </button>
              <button className="shop-btn" onClick={() => buyNow(product.name, product.price)}>
                BUY NOW
              </button>
            </div>
          </div>
        </div>
      ))}
 
      {/* CART SIDEBAR */}
      <div className={`cart-sidebar ${cartOpen ? 'active' : ''}`}>
        <div className="cart-header">
          <h2>YOUR CART</h2>
          <span className="close-btn" onClick={() => setCartOpen(false)}>&times;</span>
        </div>
        <div className="cart-items">
          {cart.length === 0 ? (
            <p className="empty-msg">Your cart is empty.</p>
          ) : (
            cart.map((item) => (
              <div className="cart-item-entry animate-in" key={item.id}>
                <div className="item-details">
                  <span className="remove-x" onClick={() => removeItem(item.id)}>&times;</span>
                  <span>{item.name}</span>
                </div>
                <span>₱{item.price.toLocaleString()}</span>
              </div>
            ))
          )}
        </div>
        <div className="cart-footer">
          <div className="total-section">
            <p>TOTAL:</p>
            <p style={{ color: 'red' }}>₱{total.toLocaleString()}</p>
          </div>
          <button className="checkout-btn" onClick={openCheckout}>CHECKOUT</button>
        </div>
      </div>
 
      {/* CHECKOUT MODAL */}
      {checkoutOpen && (
        <div className="modal" onClick={(e) => e.target === e.currentTarget && setCheckoutOpen(false)}>
          <div className="modal-content">
            <span className="close-modal" onClick={() => setCheckoutOpen(false)}>&times;</span>
            <h2 style={{ color: 'red', marginBottom: '20px' }}>CHECKOUT DETAILS</h2>
            <form onSubmit={submitOrder}>
              <input
                type="text"
                placeholder="Full Name"
                required
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
              />
              <input
                type="text"
                placeholder="Full Address"
                required
                value={form.address}
                onChange={(e) => setForm({ ...form, address: e.target.value })}
              />
              <input
                type="tel"
                placeholder="CP Number"
                required
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
              />
              <input
                type="text"
                placeholder="Postal Code"
                required
                value={form.postal}
                onChange={(e) => setForm({ ...form, postal: e.target.value })}
              />
              <button type="submit" className="checkout-btn" style={{ marginTop: '20px' }}>
                CONFIRM ORDER
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  )
}