export default function Hero(){
    return(
        <div className="bg-slate-100">
<div class="max-w-[85rem] mx-auto pb-8 pt-4 px-4 sm:px-6 lg:px-8">
  <div class="grid md:grid-cols-2 gap-4 md:gap-8 xl:gap-20 md:items-center">
    <div>
      <h1 class="block text-3xl font-bold text-red-500 sm:text-4xl lg:text-6xl lg:leading-tight">TDR <span class="text-red-600"></span></h1>
      <p class="mt-3 text-lg text-gray-800">Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, </p>

      <div class="mt-7 grid gap-3 w-full sm:inline-flex">
        <a class="py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none" href="#">
          Join Us
          <svg class="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6"/></svg>
        </a>
        <a class="py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 focus:outline-none focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none" href="#">
          Our sponsors
        </a>
      </div>

      <div class="mt-6 lg:mt-10 grid grid-cols-2 gap-x-5">
      

      
      </div>
    </div>
  
    <div class="relative ms-4">
      <img class="w-full h-[28rem] object-cover rounded-md" src="/hero.jpg" alt="Hero Image"/>
      <div class="absolute inset-0 -z-[1] bg-gradient-to-tr from-gray-100 via-white/0 to-white/0 size-full rounded-md mt-4 -mb-4 me-4 -ms-4 lg:mt-6 lg:-mb-6 lg:me-6 lg:-ms-6"></div>

     
      <div class="absolute bottom-0 start-0">
        
      </div>
   
    </div>
  
  </div>
 
</div>

        </div>
    )
}