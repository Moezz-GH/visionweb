<script setup>
import { ref } from 'vue';

const isMenuOpen = ref(false);

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};

const closeMenu = () => {
  isMenuOpen.value = false;
};
</script>

<template>
  <div class="font-costum">
    <nav class="bg-white dark:bg-gray-900 fixed w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600">
      <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto">
        <a href="#" class="flex items-center space-x-3">
          <img src="../src/assets/logo.png" class="h-24" alt="Tadawal-Logo">
          <span class="self-center text-2xl font-bold font-costum text-secondarycolor whitespace-nowrap dark:text-white"> رؤية للتداول</span>
        </a>
        <div class="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
          <a href="https://linktr.ee/visionfortrading.ly"
          
            type="button"
            class="text-white bg-secondarycolor hover:bg-maincolor focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            تواصل معنا
        </a>
          <button
            @click="toggleMenu"
            type="button"
            class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-sticky"
            aria-expanded="false">
            <span class="sr-only">Open main menu</span>
            <svg class="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14" aria-hidden="true">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
            </svg>
          </button>
        </div>
        <div
          :class="{'hidden': !isMenuOpen, 'block': isMenuOpen}"
          class="items-center justify-between w-full md:flex md:w-auto md:order-1"
          id="navbar-sticky">
          <ul class="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
              <router-link
                to="/"
                @click="closeMenu"
                class="block py-2 px-3 text-gray-900 rounded md:bg-transparent md:p-0"
                exact-active-class="text-secondarycolor"
                active-class="text-secondarycolor">الصفحة الرئيسية</router-link>
            </li>
            <!-- <li>
              <router-link
                to="/learntotrade"
                @click="closeMenu"
                class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-maincolor md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                exact-active-class="text-secondarycolor"
                active-class="text-secondarycolor">تعلم التداول</router-link>
            </li> -->
            <li>
              <router-link
                to="/Blogs"
                @click="closeMenu"
                class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-maincolor md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                exact-active-class="text-secondarycolor"
                active-class="text-secondarycolor">مقالات</router-link>
            </li>
            <li>
              <router-link
                to="/#services"
                @click="closeMenu"
                class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-maincolor md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                exact-active-class="text-secondarycolor"
                active-class="text-secondarycolor">خدماتنا</router-link>
            </li>
            <li>
              <router-link
                to="/ourservices"
                @click="closeMenu"
                class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-maincolor md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                exact-active-class="text-secondarycolor"
                active-class="text-secondarycolor">من نحن</router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>

    <RouterView />
 




<footer class="bg-white mt-10">
  <div
      class="mx-4 flex flex-col items-center gap-4 rounded-lg bg-secondarycolor p-6 shadow-lg sm:flex-row sm:justify-between"
    >
      <strong class="text-xl text-white sm:text-xl">انضم إلينا في رحلة يصبح فيها أصحاب الرؤى المالية أساتذة في التداول</strong>

      <a
        class="inline-flex items-center gap-2 rounded-full border border-white bg-white px-8 py-3 text-secondarycolor hover:bg-transparent hover:text-white focus:outline-none focus:ring active:bg-white/90"
        href="https://my.ldnglobalmarkets.com/register?referral=01926173-65da-7076-a21c-356a275c07ae"
      >
        <span class="text-sm font-medium"> هيا بنا نبدأ </span>

        <svg
          class="size-5 rtl:rotate-180"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M17 8l4 4m0 0l-4 4m4-4H3"
          />
        </svg>
      </a>
    </div>
  <div class="mx-auto max-w-screen-xl px-4 pt-16 pb-8 sm:px-6 lg:px-8">

    <div class="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
      <div class="text-center sm:text-right">
        <p class="text-lg  font-medium text-secondarycolor"> عن الشركة </p>

        <ul class="mt-8 space-y-4 text-sm">
          <li>
            <i class="fa-solid fa-location-dot ml-2"></i>
            <a class="text-gray-700 transition hover:text-gray-700/75" href="#">
              العنوان : طرابلس حي الاندلس
            </a>
          </li>

          <li>
            <i class="fa-solid fa-phone-flip ml-2"></i>
            <a class="text-gray-700 transition hover:text-gray-700/75" href="tel:+218919999172">  رقم الهاتف: <span>218919999172+ </span> </a>
          </li>

          <li>
            <i class="fa-solid fa-envelope ml-2"></i>
            <a class="text-gray-700 transition hover:text-gray-700/75" href="mailto:info@visionfortrading.com">
              البريد الالكلتروني : info@visionfortrading.com
            </a>
          </li>
        </ul>
      </div>

      <div class="text-center sm:text-left">
        <p class="text-lg font-medium text-secondarycolor">خدماتنا </p>

        <ul class="mt-8 space-y-4 text-sm">
          <li>
            <a class="text-gray-700 transition hover:text-gray-700/75" href="/EducationalCourses">
              دورات تعليمية
            </a>
          </li>

          <li>
            <a class="text-gray-700 transition hover:text-gray-700/75" href="/ForexMarketAnalysis">تداول معنا </a>
          </li>

          <li>
            <a class="text-gray-700 transition hover:text-gray-700/75" href="/tadawelforfox"> التداول الالي </a>
          </li>

          <li>
            <a class="text-gray-700 transition hover:text-gray-700/75" href="/MoneyTransfers">الحولات المالية </a>
          </li>
        </ul>
      </div>

      <div class="text-center sm:text-left">
        <p class="text-lg font-medium text-secondarycolor">روابط سريعة</p>

        <ul class="mt-8 space-y-4 text-sm">
          <li>
            <a class="text-gray-700 transition hover:text-gray-700/75" href="https://download.mql5.com/cdn/web/arab.platform.capital/mt5/arabplatformcapital5setup.exe"> تحميل ميتاتريدر 5 - للويندوز </a>
          </li>

          <li>
            <a class="text-gray-700 transition hover:text-gray-700/75" href="https://play.google.com/store/apps/details?id=net.metaquotes.metatrader5">
              تحميل ميتاتريدر 5 - للاندرويد
            </a>
          </li>

          <li>
            <a class="text-gray-700 transition hover:text-gray-700/75" href="https://download.mql5.com/cdn/mobile/mt5/ios?server=-MT5"> تحميل ميتاتريدر 5 - للابل </a>
          </li>
        </ul>
      </div>

      <div class="text-center sm:text-left">
        <p class="text-lg font-medium text-secondarycolor"> روابط هامة</p>

        <ul class="mt-8 space-y-4 text-sm">
          <li>
            <a class="text-gray-700 transition hover:text-gray-700/75" href="/ourservices"> من نحن </a>
          </li>

          <li>
            <a class="text-gray-700 transition hover:text-gray-700/75" href="/learntotrade"> تعلم التداول </a>
          </li>

          <li>
            <a class="text-gray-700 transition hover:text-gray-700/75" href="/Blogs"> المقالات </a>
          </li>
          <li>
            <a class="text-gray-700 transition hover:text-gray-700/75" href="/tadawelforfox"> التداول الالي </a>
          </li>

        </ul>
      </div>
    </div>

    <div class="mt-6">
      <ul class="flex justify-center gap-6 sm:justify-center mb-4">
        <li>
          <a
            href="https://t.me/visionfortrading"
            rel="noreferrer"
            target="_blank"
            class="text-secondarycolor transition hover:text-secondarycolor/2"
          >
          <i class="fa-brands fa-telegram fa-xl"></i>
          </a>
        </li>

        <li>
          <a
            href="https://www.youtube.com/@Visionfortrading"
            rel="noreferrer"
            target="_blank"
            class="text-secondarycolor transition hover:text-secondarycolor/2"
          >
          <i class="fa-brands fa-youtube fa-xl"></i>
          </a>
        </li>

        
        
      </ul>
      <hr>
      <div class="mt-4 sm:flex sm:items-center sm:justify-center">
        
        <p class="mt-2 text-center text-sm text-gray-500 sm:mt-0 sm:text-right">
          Copyright &copy; 2025. All rights reserved.
        </p>
      </div>
    </div>
  </div>
</footer>

  </div>
</template>

