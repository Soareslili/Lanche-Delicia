


function Modal({ show, cart, closeModal, removeFromCart }) {
  if (!show) return null;
  return (
    <div className="bg-black/60 w-full h-full fixed top-0 left-0 z-[99] flex items-center justify-center">
      <div className="bg-white p-5 rounded-md shadow-lg w-[90%] md:w-[600px] animate-fade-in">
        <h2 className="text-center font-bold text-2xl mb-2">Meu Carrinho</h2>
        <div className="flex flex-col gap-4 mb-4">
          {cart.length === 0 ? (
            <p className="text-center">Seu carrinho está vazio.</p>
          ) : (
            cart.map(item => (
              <div key={item.id} className="flex justify-between items-center">
                <span>{item.quantity}x {item.name}</span>
                <span>R$ {(item.price * item.quantity).toFixed(2)}</span>
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="ml-2 bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600 transition"
                >
                  Remover
                </button>
              </div>
            ))
          )}
        </div>
        {cart.length > 0 && (
        <div className="text-right font-bold text-lg mb-4">
          Total: R$ {cart.reduce((acc, item) => acc + item.price * item.quantity, 0).toFixed(2)}
        </div>
      )}
        <button onClick={closeModal} className="bg-gray-300 px-4 py-1 rounded">Fechar</button>
      </div>
    </div>
  );
}

export default Modal;