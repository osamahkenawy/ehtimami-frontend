<template>
    <div>
      <!-- Background Image -->
      <div class="absolute inset-0">
        <img src="/assets/images/auth/heroo-bg.jpg" alt="image" class="h-full w-full object-cover" />
      </div>
  
      <!-- Signup Card -->
      <div class="relative flex min-h-screen items-center justify-center bg-cover bg-center bg-no-repeat px-6 py-10 dark:bg-[#060818] sm:px-16">
        <div class="relative w-full max-w-[870px] rounded-md bg-[linear-gradient(45deg,#fff9f9_0%,rgba(255,255,255,0)_25%,rgba(255,255,255,0)_75%,_#fff9f9_100%)] p-2 dark:bg-[linear-gradient(52.22deg,#0E1726_0%,rgba(14,23,38,0)_18.66%,rgba(14,23,38,0)_51.04%,rgba(14,23,38,0)_80.07%,#0E1726_100%)]">
          <div class="relative flex flex-col justify-center rounded-md bg-white/60 backdrop-blur-lg dark:bg-black/50 px-6 lg:px-10 py-10">
  
            <!-- 🌐 Language Switch -->
            <div class="absolute top-6 end-6">
              <div class="dropdown">
                <Popper :placement="store.rtlClass === 'rtl' ? 'bottom-start' : 'bottom-end'" offsetDistance="8">
                  <button type="button" class="flex items-center gap-2.5 rounded-lg border border-white-dark/30 bg-white px-2 py-1.5 text-white-dark hover:border-primary hover:text-primary dark:bg-black">
                    <img :src="currentFlag" alt="flag" class="h-5 w-5 rounded-full object-cover" />
                    <div class="text-base font-bold uppercase">{{ store.locale }}</div>
                    <span class="shrink-0"><icon-caret-down /></span>
                  </button>
                  <template #content="{ close }">
                    <ul class="!px-2 text-dark dark:text-white-dark grid grid-cols-2 gap-2 font-semibold dark:text-white-light/90 w-[280px]">
                      <li v-for="item in store.languageList" :key="item.code">
                        <button
                          type="button"
                          class="w-full hover:text-primary"
                          :class="{ 'bg-primary/10 text-primary': i18n.locale === item.code }"
                          @click="changeLanguage(item), close()"
                        >
                          <img class="w-5 h-5 object-cover rounded-full" :src="`/assets/images/flags/${item.code.toUpperCase()}.svg`" />
                          <span class="ltr:ml-3 rtl:mr-3">{{ item.name }}</span>
                        </button>
                      </li>
                    </ul>
                  </template>
                </Popper>
              </div>
            </div>
  
            <!-- Content Box -->
            <div class="mx-auto w-full max-w-[440px]">
              <div class="mb-4">
                <img src="/assets/images/ehtimamiLogo.svg" alt="logo" class="h-full w-full object-cover" />
                <h1 class="text-2xl font-extrabold uppercase text-primary mt-2 md:text-4xl">Sign Up</h1>
                <p class="text-base font-bold text-white-dark mt-0">Enter your information to register</p>
              </div>
  
              <!-- Signup Form -->
              <form class="space-y-5 dark:text-white" @submit.prevent="handleSignup">
                <!-- First & Last Name -->
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label for="firstName">First Name *</label>
                    <div class="relative text-white-dark">
                      <input v-model="form.firstName" id="firstName" type="text" required placeholder="First Name" class="form-input ps-10" />
                      <span class="absolute start-4 top-1/2 -translate-y-1/2"><icon-user :fill="true" /></span>
                    </div>
                  </div>
                  <div>
                    <label for="lastName">Last Name *</label>
                    <div class="relative text-white-dark">
                      <input v-model="form.lastName" id="lastName" type="text" required placeholder="Last Name" class="form-input ps-10" />
                      <span class="absolute start-4 top-1/2 -translate-y-1/2"><icon-user :fill="true" /></span>
                    </div>
                  </div>
                </div>
  
                <!-- Email -->
                <div>
                  <label for="email">Email *</label>
                  <div class="relative text-white-dark">
                    <input v-model="form.email" id="email" type="email" required placeholder="Enter Email" class="form-input ps-10" />
                    <span class="absolute start-4 top-1/2 -translate-y-1/2"><icon-mail :fill="true" /></span>
                  </div>
                </div>
  
                <!-- Password -->
                <div>
                  <label for="password">Password *</label>
                  <div class="relative text-white-dark">
                    <input v-model="form.password" id="password" type="password" required placeholder="Enter Password" class="form-input ps-10" />
                    <span class="absolute start-4 top-1/2 -translate-y-1/2"><icon-lock-dots :fill="true" /></span>
                  </div>
                </div>
  
                <!-- Confirm Password -->
                <div>
                  <label for="confirmPassword">Confirm Password *</label>
                  <div class="relative text-white-dark">
                    <input v-model="form.confirmPassword" id="confirmPassword" type="password" required placeholder="Confirm Password" class="form-input ps-10" />
                    <span class="absolute start-4 top-1/2 -translate-y-1/2"><icon-lock-dots :fill="true" /></span>
                  </div>
                </div>
  
                <!-- Roles Multiselect -->
                <div>
                  <label>Role(s) *</label>
                  <Multiselect
                    v-model="form.roleIds"
                    :options="authStore.roles.map(r => ({ label: r.name, value: r.id }))"
                    placeholder="Select roles"
                    mode="tags"
                    class="form-input"
                  />
                </div>
  
                <button type="submit" class="btn btn-gradient !mt-6 w-full border-0 uppercase shadow-[0_10px_20px_-10px_rgba(67,97,238,0.44)]">
                  Sign Up
                </button>
              </form>
  
              <!-- Footer -->
              <div class="relative my-7 text-center md:mb-9">
                <span class="absolute inset-x-0 top-1/2 h-px w-full -translate-y-1/2 bg-white-light dark:bg-white-dark"></span>
                <span class="relative bg-white px-2 font-bold uppercase text-white-dark dark:bg-dark dark:text-white-light">or</span>
              </div>
              <div class="text-center dark:text-white">
                Already have an account?
                <router-link to="/auth/ehtimami-signin" class="uppercase text-primary underline hover:text-black dark:hover:text-white">
                  SIGN IN
                </router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script lang="ts" setup>
  import { computed, reactive, onMounted } from "vue";
  import { useI18n } from "vue-i18n";
  import appSetting from '@/app-setting';
  import { useRouter } from "vue-router";
  import { useAppStore } from "@/stores/index";
  import { useAuthStore } from "@/stores/auth";
  import Swal from "sweetalert2";
  import Multiselect from "@vueform/multiselect";
  import "@vueform/multiselect/themes/default.css";
  
  import IconCaretDown from "@/components/icon/icon-caret-down.vue";
  import IconUser from "@/components/icon/icon-user.vue";
  import IconMail from "@/components/icon/icon-mail.vue";
  import IconLockDots from "@/components/icon/icon-lock-dots.vue";
  
  const router = useRouter();
  const store = useAppStore();
  const authStore = useAuthStore();
  const i18n = reactive(useI18n());
  
  const form = reactive({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    roleIds: [],
  });
  
  const handleSignup = () => {
    if (form.password !== form.confirmPassword) {
      Swal.fire({
        icon: "error",
        title: "Passwords do not match",
        text: "Please make sure both password fields match.",
      });
      return;
    }
  
    const payload = {
      firstName: form.firstName,
      lastName: form.lastName,
      email: form.email,
      password: form.password,
      roleIds: form.roleIds,
    };
  
    console.log("Submitting Signup Payload:", payload);
    router.push("/");
  };
  
  const changeLanguage = (item: any) => {
        i18n.locale = item.code;
        appSetting.toggleLanguage(item);
    };
  
  onMounted(() => {
    authStore.fetchRoles();
  });
  
  const currentFlag = computed(() => {
        return `/assets/images/flags/${i18n.locale.toUpperCase()}.svg`;
    }); 
</script>
  