import bgHero from '../../assets/bg.png';



function Header() {
  return (
    <>
      <header className="w-full h-[420px] bg-zinc-900 bg-Hero bg-cover bg-center"
      style={{ backgroundImage: `url(${bgHero})` }}
      >
        <div className="w-full h-full flex flex-col justify-center items-center">
          <h1 class="text-4xl mt-4 mb-2 font-bold text-white">Lanches Delicia</h1>

          <span class="text-white font-medium">Rua dev 10, Tatuapé-SP</span>

          <div class="bg-green-600 px-4 py-1 rounded-lg mt-5 mb-4">
            <span class="text-white font-medium mb-20">Seg á Dom - 09:00 as 22:00</span>
          </div>
          <button className='border bg-orange-500 text-white px-6 py-2 font-road rounded-[6px] transiton-transform duration-300 hover:scale-105'>Carrinho</button>
        </div>
      </header >
    </>



  )
}


export default Header