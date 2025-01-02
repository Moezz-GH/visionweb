<script setup>

</script>
<template>
    <div class="font-costum">

    
<!-- Slider -->

  <div class="bg-hero h-screen bg-center bg-cover bg-no-repeat pt-24">
    <div class="animate__animated animate__backInDown py-18 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12">
       
        <h1 class="mt-24 text-5xl font-costum font-extrabold tracking-tight leading-none text-white dark:text-white md:text-8xl">رؤية</h1>
        <p class=" my-4 text-3xl font-costum text-white dark:text-gray-400 md:text-4xl">للتداول و الخدمات الالكترونية</p>
        <p class=" my-2 text-lg font-costum text-white dark:text-gray-400">شريكك المفضل لتداول العملات الاجنبية  و الاسهم و السلع لتحقيق أهدافك المالية برؤية مبتكرة</p>
        <div class="mt-20 flex flex-col mb-8 lg:mb-16 space-y-4 sm:flex-row items-center sm:justify-center sm:items-center sm:space-y-0 sm:space-x-4">
            <a href="#" class="bg-secondarycolor inline-flex justify-center items-center py-3 px-8 w-72 text-base font-medium text-center text-white rounded-lg border border-gray-300 hover:bg-gray-100 hover:text-black focus:ring-4 focus:ring-gray-100 transform hover:origin-center ">
                
                انضم الينا
            </a>  
        </div>
      
    </div>
  </div>













<!-- Hero -->
<div class="bg-sec2 bg-cover bg-no-repeat pb-10">
  <div class="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 py-20">
    <div class="relative mx-auto max-w-4xl grid space-y-5 sm:space-y-10">
      <!-- Title -->
      <div class="text-right">

        <h1 class="text-5xl text-white font-costum font-bold ">
          نبذة عن شركة رؤية
        </h1>
        <p class="text-base leading-6 mt-20 text-white font-costum font-medium ">
        شركة رؤية للتداول هي شركة رائدة في مجال التداول الالكتروني مقرها الرئيسي في ليبي تحت وكالة شركة الوساطة المالية LDN Global Market 
        </p>

        <p class="text-base mt-5 leading-6 text-white font-costum font-medium ">
          تأسست المجموعة علي يد من المتداولين و المتخصصين في التدريب و التحليل الفني لتداول السوق المالي بخبرة و رؤية فريدة من نوعها
        </p>


      </div>

      
      <!-- End Title -->
      
   



    </div>
  </div>

<div class="flex justify-center pb-10">
  <a href="#" class="inline-flex items-center px-3 py-2 text-sm font-costum font-medium text-center text-maincolor bg-white rounded-lg">
            اقرأ المزيد
             <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
            </svg>
        </a>
</div>
</div>
<!-- End Hero -->















<div class="relative overflow-hidden ">
  <div class="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 py-10">
    <div class="max-w-2xl text-center mx-auto">
      <h1 class="block text-3xl font-costum font-bold text-Headingcolor sm:text-4xl md:text-5xl dark:text-white">تعرف على ابرز خدماتنا</h1>
    </div>
<div class="grid gap-4 pt-16 text-center md:grid-cols-4">
    <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
   <router-link to="/MoneyTransfers">
        <img class="rounded-t-lg" src="https://images.unsplash.com/photo-1518186233392-c232efbf2373?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
   </router-link>
    <div class="p-5">
        <router-link to="/MoneyTransfers">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-black:text-white"> الحوالات المالية </h5>
        </router-link>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">نوفر لك دورات تعليمية لتطوير المهارات في مجال التداول مع مدربين متخصصين</p>
        
    </div>
</div>

      <!-- More products... -->
      <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <router-link to="/ForexMarketAnalysis">
        <img class="rounded-t-lg w-96 " src="https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?q=80&w=2006&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
    </router-link>
    <div class="p-5">
        <router-link to="/ForexMarketAnalysis">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-black:text-white">تحليل سوق الفورفكس </h5>
        </router-link>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">نوفر لك دورات تعليمية لتطوير المهارات في مجال التداول مع مدربين متخصصين</p>
        
    </div>
</div>



<div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
  <router-link to="/tadawelforfox">
      <img class="rounded-t-lg" src="https://images.unsplash.com/photo-1518458028785-8fbcd101ebb9?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
  </router-link>
    <div class="p-5">
        <router-link to="/tadawelforfox">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-black:text-white"> تحليل سوق الفوركس</h5>
        </router-link>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">نوفر لك دورات تعليمية لتطوير المهارات في مجال التداول مع مدربين متخصصين</p>
        
    </div>
</div>

<div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
   <router-link to="/EducationalCourses">
        <img class="rounded-t-lg" src="https://images.unsplash.com/photo-1518458028785-8fbcd101ebb9?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
   </router-link>
    <div class="pt-5">
        <router-link to="/EducationalCourses">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-black:text-white">دورات تعليمية</h5>
        </router-link>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">نوفر لك دورات تعليمية لتطوير المهارات في مجال التداول مع مدربين متخصصين</p>
        
    </div>
</div>

      
    </div>

</div>
    
  </div>
  




  <section class="bg-sec2 bg-cover bg-no-repeat ">
    <div class="gap-8 items-center py-8 px-4 mx-auto max-w-screen-xl xl:gap-16 md:grid md:grid-cols-2 sm:py-16 lg:px-6">
        <div class="mt-4 md:mt-0">
            <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-white dark:text-white">نحن وكلاء لشركة وساطة أمنة و موثوقة .</h2>
            <p class="mb-6 font-light text-white md:text-lg dark:text-white">تعتبر LND Global Marlets واحدة من أبرز شركات الوساطة العالمية حيث تتميز بتوفير بيئة تداول أمنة و موثوقة </p>
            <p class="mb-6 font-light text-white md:text-lg dark:text-white"> تقدم الشركة خدمة التداول الالكتروني على منصة التداول الشهيرة ميتا تريد 5 , حيث يوجد أكثر من مئة أداة مالية للتداول مثل العملات. المئشرات , المعادن الثمينة, العملات الرقمية , وغيرها من أصول التداول .  </p>
            <a href="#" class="inline-flex items-center px-3 py-2 text-sm font-costum font-medium text-center text-maincolor bg-white rounded-lg">
            اقرأ المزيد
             <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
            </svg>
        </a>
        </div>

       <div class="flex items-center justify-center">
        <img class="w-2/3 dark:hidden" src="../../assets/Screenshot_2024-12-13_222119-removebg-preview.png" alt="dashboard image">
       </div>
        


        
    </div>
</section>













<!-- Approach -->
<div class="bg-white">
  <!-- Approach -->
  <div class="max-w-5xl px-4 xl:px-0 py-10 lg:pt-20 lg:pb-20 mx-auto">
    <!-- Title -->
    <div class="mb-10 lg:mb-14">
      <h2 class="text-Headingcolor text-center font-semibold text-2xl md:text-4xl md:leading-tight"> إبدا التداول في 4 خطوات بسيطة </h2>
     
    </div>
    <!-- End Title -->

    <!-- Grid -->
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 lg:items-center">
      <div class="aspect-w-16 aspect-h-9 lg:aspect-none">
        <img class="w-1/2 object-cover rounded-xl" src="../../assets/Screenshot_2024-12-13_235043-removebg-preview.png" alt="Features Image">
      </div>
      <!-- End Col -->

      <!-- Timeline -->
      <div>
        <!-- Heading -->
        <div class="mb-4">
          <h3 class="text-maincolor text-xs font-medium uppercase">
            الخطوات
          </h3>
        </div>
        <!-- End Heading -->

        <!-- Item -->
        <div class="flex gap-x-5 ms-1">
          <!-- Icon -->
          <div class="relative last:after:hidden after:absolute after:top-8 after:bottom-0 after:start-4 after:w-px after:-translate-x-[0.5px] after:bg-neutral-800">
            <div class="relative z-10 size-8 flex justify-center items-center">
              <span class="flex shrink-0 justify-center items-center size-8 border border-maincolor text-maincolor font-semibold text-xs uppercase rounded-full">
                1
              </span>
            </div>
          </div>
          <!-- End Icon -->

          <!-- Right Content -->
          <div class="grow pt-0.5 pb-8 sm:pb-12">
            <p class="text-3xl text-neutral-400">
              
              افتح حساب مع وسيط LDN .
            </p>
          </div>
          <!-- End Right Content -->
        </div>
        <!-- End Item -->

        <!-- Item -->
        <div class="flex gap-x-5 ms-1">
          <!-- Icon -->
          <div class="relative last:after:hidden after:absolute after:top-8 after:bottom-0 after:start-4 after:w-px after:-translate-x-[0.5px] after:bg-neutral-800">
            <div class="relative z-10 size-8 flex justify-center items-center">
              <span class="flex shrink-0 justify-center items-center size-8 border border-maincolor text-maincolor font-semibold text-xs uppercase rounded-full">
                2
              </span>
            </div>
          </div>
          <!-- End Icon -->

          <!-- Right Content -->
          <div class="grow pt-0.5 pb-8 sm:pb-12">
            <p class="text-3xl text-neutral-400">
    
              انظم الينا و تعلم التداول . 
            </p>
          </div>
          <!-- End Right Content -->
        </div>
        <!-- End Item -->

        <!-- Item -->
        <div class="flex gap-x-5 ms-1">
          <!-- Icon -->
          <div class="relative last:after:hidden after:absolute after:top-8 after:bottom-0 after:start-4 after:w-px after:-translate-x-[0.5px] after:bg-neutral-800">
            <div class="relative z-10 size-8 flex justify-center items-center">
              <span class="flex shrink-0 justify-center items-center size-8 border border-maincolor text-maincolor font-semibold text-xs uppercase rounded-full">
                3
              </span>
            </div>
          </div>
          <!-- End Icon -->

          <!-- Right Content -->
          <div class="grow pt-0.5 pb-8 sm:pb-12">
            <p class="text-3xl text-neutral-400">
             
             إشحن حسابك الخاص بي التداول .
            </p>
          </div>
          <!-- End Right Content -->
        </div>
        <!-- End Item -->

        <!-- Item -->
        <div class="flex gap-x-5 ms-1">
          <!-- Icon -->
          <div class="relative last:after:hidden after:absolute after:top-8 after:bottom-0 after:start-4 after:w-px after:-translate-x-[0.5px] after:bg-neutral-800">
            <div class="relative z-10 size-8 flex justify-center items-center">
              <span class="flex shrink-0 justify-center items-center size-8 border border-maincolor text-maincolor font-semibold text-xs uppercase rounded-full">
                4
              </span>
            </div>
          </div>
          <!-- End Icon -->

          <!-- Right Content -->
          <div class="grow pt-0.5 pb-8 sm:pb-12">
            <p class="text-3xl text-neutral-400">
              
              إبدا بتطبيق ما تعلمت . 
            </p>
          </div>
          <!-- End Right Content -->

          
        </div>
        <!-- End Item -->

        <a href="#" class="inline-flex items-center px-3 py-2 text-sm font-costum font-medium text-center text-white bg-secondarycolor rounded-lg">
            اقرأ المزيد
             <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
            </svg>
        </a>
      </div>
      <!-- End Timeline -->
    </div>
    <!-- End Grid -->
  </div>
</div>
<!-- End Approach -->





















</div>














<!-- End Slider -->

</template>


