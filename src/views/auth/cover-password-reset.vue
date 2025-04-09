<template>
  <div>
    <!-- Background & Layout -->
    <div class="absolute inset-0">
      <img
        src="/assets/images/auth/heroo-bg.jpg"
        alt="image"
        class="h-full w-full object-cover"
      />
    </div>
    <div
      class="relative flex min-h-screen items-center justify-center bg-[url(/assets/images/auth/map.png)] bg-cover bg-center bg-no-repeat px-6 py-10 dark:bg-[#060818] sm:px-16"
    >
      <div
        class="relative flex w-full max-w-[1502px] flex-col justify-between overflow-hidden rounded-md bg-white/60 backdrop-blur-lg dark:bg-black/50 lg:min-h-[758px] lg:flex-row lg:gap-10 xl:gap-0"
      >
        <!-- Left Image -->
        <div
          class="relative hidden w-full items-center justify-center bg-[linear-gradient(225deg,#244066,rgba(68,100,240,1)_100%)] p-5 lg:inline-flex lg:max-w-[835px] xl:-ms-28 ltr:xl:skew-x-[14deg] rtl:xl:skew-x-[-14deg]"
        >
          <div
            class="absolute inset-y-0 w-8 from-primary/10 via-transparent to-transparent ltr:-right-10 ltr:bg-gradient-to-r rtl:-left-10 rtl:bg-gradient-to-l xl:w-16 ltr:xl:-right-20 rtl:xl:-left-20"
          ></div>
          <div class="ltr:xl:-skew-x-[14deg] rtl:xl:skew-x-[14deg]">
            <router-link to="/" class="w-48 block lg:w-72 ms-10">
              <img
                src="/assets/images/auth/logo_white.svg"
                alt="Logo"
                class="w-full"
              />
            </router-link>
            <div class="mt-24 hidden w-full max-w-[430px] lg:block">
              <img
                src="/assets/images/auth/reset-password.svg"
                alt="Cover Image"
                class="w-full"
              />
            </div>
          </div>
        </div>

        <!-- Right Form -->
        <div
          class="relative flex w-full flex-col items-center justify-center gap-6 px-4 pb-16 pt-6 sm:px-6 lg:max-w-[667px]"
        >
          <!-- Language Selector -->
          <div
            class="flex w-full max-w-[440px] items-center gap-2 lg:absolute lg:end-6 lg:top-6 lg:max-w-full"
          >
            <router-link to="/" class="w-20 block lg:hidden">
              <img
                src="/assets/images/auth/logo.svg"
                alt="Logo"
                class="mx-auto w-20"
              />
            </router-link>
            <div class="dropdown ms-auto w-max">
              <Popper
                :placement="
                  store.rtlClass === 'rtl' ? 'bottom-start' : 'bottom-end'
                "
                offsetDistance="8"
              >
                <button
                  type="button"
                  class="flex items-center gap-2.5 rounded-lg border border-white-dark/30 bg-white px-2 py-1.5 text-white-dark hover:border-primary hover:text-primary dark:bg-black"
                >
                  <img
                    :src="currentFlag"
                    alt="flag"
                    class="h-5 w-5 rounded-full object-cover"
                  />
                  <div class="text-base font-bold uppercase">
                    {{ store.locale }}
                  </div>
                  <span class="shrink-0"><icon-caret-down /></span>
                </button>
                <template #content="{ close }">
                  <ul
                    class="!px-2 text-dark dark:text-white-dark grid grid-cols-2 gap-2 font-semibold w-[280px]"
                  >
                    <template
                      v-for="item in store.languageList"
                      :key="item.code"
                    >
                      <li>
                        <button
                          type="button"
                          class="w-full hover:text-primary"
                          :class="{
                            'bg-primary/10 text-primary':
                              i18n.locale === item.code,
                          }"
                          @click="
                            changeLanguage(item);
                            close();
                          "
                        >
                          <img
                            class="w-5 h-5 object-cover rounded-full"
                            :src="`/assets/images/flags/${item.code.toUpperCase()}.svg`"
                          />
                          <span class="ltr:ml-3 rtl:mr-3">{{ item.name }}</span>
                        </button>
                      </li>
                    </template>
                  </ul>
                </template>
              </Popper>
            </div>
          </div>

          <!-- Form Section -->
          <div class="w-full max-w-[440px] lg:mt-16">
            <div class="mb-7">
              <h1 class="mb-3 text-2xl font-bold !leading-snug dark:text-white">
                {{ $t("password_reset") }}
              </h1>
              <p>{{ $t("enter_email_to_recover") }}</p>
            </div>

            <div v-if="emailSent" class="text-center space-y-4">
              <p class="text-green-600 font-semibold text-lg">
                ✅ {{ $t("check_your_inbox") }}
              </p>
              <BaseButton
                :title="$t('back_to_login')"
                :loading="false"
                classes="!mt-4"
                @click="router.push('/auth/login')"
              />
            </div>

            <form
              v-else
              class="space-y-5"
              @submit.prevent="submitForgotPassword"
            >
              <div>
                <label for="Email">{{ $t("email") }}</label>
                <div class="relative text-white-dark">
                  <input
                    v-model="email"
                    id="Email"
                    type="email"
                    :placeholder="$t('enter_email_placeholder')"
                    class="form-input pl-10 placeholder:text-white-dark"
                  />
                  <span class="absolute left-4 top-1/2 -translate-y-1/2">
                    <icon-mail :fill="true" />
                  </span>
                </div>
              </div>
              <BaseButton
                :title="$t('recover')"
                :loading="isLoading"
                classes="!mt-6"
                @click="submitForgotPassword"
              />
            </form>
          </div>
        </div>
      </div>
      <p class="absolute bottom-6 w-full text-center text-white">
        © {{ new Date().getFullYear() }}.{{ $t("footer_text") }}
      </p>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, computed, reactive } from "vue";
import { useRouter } from "vue-router";
import { useI18n } from "vue-i18n";
import Swal from "sweetalert2";

import appSetting from "@/app-setting";
import { useAppStore } from "@/stores/index";
import { useMeta } from "@/composables/use-meta";
import { sendForgotPasswordEmail } from "@/services/auth";

import IconCaretDown from "@/components/icon/icon-caret-down.vue";
import IconMail from "@/components/icon/icon-mail.vue";

useMeta({ title: "Forgot Password" });

const email = ref("");
const emailSent = ref(false);

const router = useRouter();
const store = useAppStore();
const i18n = reactive(useI18n());
const isLoading = ref(false);

const currentFlag = computed(
  () => `/assets/images/flags/${i18n.locale.toUpperCase()}.svg`
);

const changeLanguage = (item: any) => {
  i18n.locale = item.code;
  appSetting.toggleLanguage(item);
};

const submitForgotPassword = async () => {
  try {
    if (!email.value) {
      Swal.fire({ icon: "warning", text: i18n.t("please_enter_email") });
      return;
    }

    isLoading.value = true;

    await sendForgotPasswordEmail(email.value);
    emailSent.value = true;

    Swal.fire({
      icon: "success",
      title: i18n.t("email_sent"),
      text: i18n.t("check_your_inbox"),
    });

    email.value = "";
  } catch (error: any) {
    Swal.fire({
      icon: "error",
      title: i18n.t("error_occurred"),
      text: error.response?.data?.message || i18n.t("something_went_wrong"),
    });
  } finally {
    isLoading.value = false;
  }
};
</script>
