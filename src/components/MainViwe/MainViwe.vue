<template>
      <div class="bg-secondarycolor h-[32rem] bg-center bg-cover bg-no-repeat pt-24">
    <div class="animate__animated animate__backInDown py-18 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12">
               <p class="my-4 text-5xl font-costum text-white dark:text-gray-400">{{ titel1 }} </p>
               <p class=" my-4 text-5xl font-costum text-white dark:text-gray-400">{{ suptitel }} </p>
               <p class=" my-4 text-5xl font-costum text-LDN dark:text-gray-400">{{ content }}</p>
        <div class="mt-20 flex flex-col mb-8 lg:mb-16 space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">  
        </div>
      
    </div>
  </div>
</template>

<script>
export default{
    props: ["titel1" , "content" ,"suptitel"] 

}

</script>

<style>

</style>