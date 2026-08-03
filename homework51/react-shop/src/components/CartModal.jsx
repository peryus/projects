import { useState } from 'react'
import Modal from 'react-modal'
import DatePicker from 'react-datepicker'
import { toast } from 'react-toastify'

function CartModal({
                     isOpen,
                     onClose,
                     cartItems,
                     onRemoveItem,
                     onClearCart,
                   }) {
  const [deliveryDate, setDeliveryDate] = useState(null)

  const totalPrice = cartItems.reduce(
      (total, product) => total + product.price,
      0,
  )

  const handleCheckout = () => {
    if (cartItems.length === 0) {
      toast.error('Your cart is empty')
      return
    }

    if (!deliveryDate) {
      toast.error('Select a delivery date')
      return
    }

    toast.success('Order placed successfully')

    setDeliveryDate(null)
    onClearCart()
    onClose()
  }

  return (
      <Modal
          isOpen={isOpen}
          onRequestClose={onClose}
          contentLabel="Shopping cart"
          overlayClassName="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4"
          className="max-h-[90vh] w-full max-w-lg overflow-y-auto rounded-lg bg-white p-6 outline-none"
      >
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-semibold">
            Shopping Cart
          </h2>

          <button
              type="button"
              aria-label="Close cart"
              onClick={onClose}
              className="text-xl"
          >
            ✕
          </button>
        </div>

        {cartItems.length === 0 ? (
            <p className="py-10 text-center text-neutral-500">
              Your cart is empty.
            </p>
        ) : (
            <div className="mt-6 flex flex-col gap-4">
              {cartItems.map((product, index) => (
                  <article
                      key={`${product.id}-${index}`}
                      className="flex items-center gap-4 border-b border-neutral-200 pb-4"
                  >
                    <img
                        src={product.image}
                        alt={product.name}
                        className="h-20 w-20 bg-neutral-100 object-contain"
                    />

                    <div className="flex-1">
                      <h3 className="font-semibold">
                        {product.name}
                      </h3>

                      <p className="mt-1 text-sm">
                        ${product.price.toFixed(2)}
                      </p>
                    </div>

                    <button
                        type="button"
                        onClick={() => onRemoveItem(index)}
                        className="text-sm text-red-600"
                    >
                      Remove
                    </button>
                  </article>
              ))}
            </div>
        )}

        <div className="mt-6">
          <label className="mb-2 block font-medium">
            Delivery date
          </label>

          <DatePicker
              selected={deliveryDate}
              onChange={(date) => setDeliveryDate(date)}
              minDate={new Date()}
              dateFormat="dd/MM/yyyy"
              placeholderText="Select delivery date"
              className="w-full border border-neutral-300 px-4 py-3 outline-none focus:border-neutral-900"
          />
        </div>

        <div className="mt-6 flex items-center justify-between">
          <strong>
            Total: ${totalPrice.toFixed(2)}
          </strong>

          <button
              type="button"
              onClick={handleCheckout}
              className="rounded-md bg-neutral-900 px-5 py-3 text-white"
          >
            Checkout
          </button>
        </div>
      </Modal>
  )
}

export default CartModal