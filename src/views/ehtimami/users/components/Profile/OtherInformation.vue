<template>
    <div class="mt-1 h-fit">
      <div class="flex items-center justify-between mb-5 ltr:flex-row rtl:flex-row h-fit">
        <h5 class="font-semibold text-lg dark:text-white-light">{{ t("user.otherInformation") }}</h5>
        <EditToggleButtons
          v-model="editMode"
          @save="handleSave"
          @close="handleCancel"
          class="ltr:ml-4 rtl:mr-4"
        />
      </div>
  
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4 h-fit">
        <!-- Avatar + Gender Row -->
        <div class="col-span-2">
          <div class="flex flex-col sm:flex-row gap-4 items-center justify-start">
            <!-- Avatar Upload -->
            <div class="w-full sm:w-[200px] text-center">
              <FileUploader
                v-model="form.avatar"
                :label="t('user.avatar')"
                platform="user-profile"
                :disabled="!editMode"
              />
            </div>
  
            <!-- Gender Selector - Keep original style -->
            <div class="w-full sm:w-[200px] text-center sm:text-left">
              <label class="block text-sm font-semibold text-gray-700 dark:text-white ltr:text-left rtl:text-right mb-1">
                {{ t("user.chooseGender") }}
              </label>
              <GenderSelection
                v-model="form.gender"
                :disabled="!editMode"
                class="justify-center sm:justify-start"
              />
            </div>
          </div>
        </div>
  
        <!-- Nationality -->
        <div class="flex">
          <div class="bg-[#eee] whitespace-nowrap flex justify-center items-center ltr:rounded-l-md rtl:rounded-r-md px-3 font-semibold border ltr:border-r-0 rtl:border-l-0 border-[#e0e6ed] dark:border-[#17263c] dark:bg-[#1b2e4b]">
            {{ t("user.nationality") }}
          </div>
          <select
            v-model="form.nationality"
            :disabled="!editMode"
            :class="[
              'form-select ltr:rounded-l-none rtl:rounded-r-none py-2.5 text-base w-full',
              !editMode && 'cursor-not-allowed'
            ]"
          >
            <option value="" disabled>{{ t('user.selectNationality') }}</option>
            <option v-for="nation in nationalities" :key="nation.value" :value="nation.value">
              {{ nation.flag }} {{ nation.text }}
            </option>
          </select>
        </div>
  
        <!-- Marital Status -->
        <div class="flex">
          <div class="bg-[#eee] whitespace-nowrap flex justify-center items-center ltr:rounded-l-md rtl:rounded-r-md px-3 font-semibold border ltr:border-r-0 rtl:border-l-0 border-[#e0e6ed] dark:border-[#17263c] dark:bg-[#1b2e4b]">
            {{ t("user.marital_status") }}
          </div>
          <select
            v-model="form.marital_status"
            :disabled="!editMode"
            :class="[
              'form-select ltr:rounded-l-none rtl:rounded-r-none py-2.5 text-base w-full',
              !editMode && 'cursor-not-allowed'
            ]"
          >
            <option value="SINGLE">{{ t("user.single") }}</option>
            <option value="MARRIED">{{ t("user.married") }}</option>
            <option value="DIVORCED">{{ t("user.divorced") }}</option>
          </select>
        </div>
  
        <!-- Occupation -->
        <div class="flex">
          <div class="bg-[#eee] whitespace-nowrap flex justify-center items-center ltr:rounded-l-md rtl:rounded-r-md px-3 font-semibold border ltr:border-r-0 rtl:border-l-0 border-[#e0e6ed] dark:border-[#17263c] dark:bg-[#1b2e4b]">
            {{ t("user.occupation") }}
          </div>
          <input
            v-model="form.occupation"
            type="text"
            :disabled="!editMode"
            :placeholder="t('user.occupation')"
            :class="[
              'form-input ltr:rounded-l-none rtl:rounded-r-none py-2.5 text-base w-full',
              !editMode && 'cursor-not-allowed'
            ]"
          />
        </div>
  
        <!-- Join Date -->
        <div class="flex">
          <div class="bg-[#eee] whitespace-nowrap flex justify-center items-center ltr:rounded-l-md rtl:rounded-r-md px-3 font-semibold border ltr:border-r-0 rtl:border-l-0 border-[#e0e6ed] dark:border-[#17263c] dark:bg-[#1b2e4b]">
            {{ t("user.join_date") }}
          </div>
          <input
            v-model="form.join_date"
            type="date"
            :disabled="!editMode"
            :class="[
              'form-input ltr:rounded-l-none rtl:rounded-r-none py-2.5 text-base w-full',
              !editMode && 'cursor-not-allowed'
            ]"
          />
        </div>
  
        <!-- Bio -->
        <div class="col-span-2 flex">
          <div class="bg-[#eee] min-w-[150px] whitespace-nowrap flex justify-center items-center px-3 font-semibold border ltr:rounded-l-md rtl:rounded-r-md ltr:border-r-0 rtl:border-l-0 border-[#e0e6ed] dark:border-[#17263c] dark:bg-[#1b2e4b]">
            {{ t("user.bio") }}
          </div>
          <textarea
            v-model="form.bio"
            :placeholder="t('user.bio')"
            :disabled="!editMode"
            :class="[
              'form-textarea ltr:rounded-l-none rtl:rounded-r-none py-2.5 text-base w-full',
              !editMode && 'cursor-not-allowed'
            ]"
          />
        </div>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref, watch } from "vue";
  import { useI18n } from "vue-i18n";
  import Swal from "sweetalert2";
  import { useUserStore } from "@/stores/users";
  import type { User } from "@/types";
  import FileUploader from "@/components/ui/FileUploader.vue";
  import GenderSelection from "@/components/ui/GenderSelection.vue";
  import { nationalities } from "@/fakeData/nationalityList";
  
  const { t } = useI18n();
  const userStore = useUserStore();
  const props = defineProps<{ user: User | null }>();
  const emit = defineEmits<{ (e: "cancel"): void; (e: "updated"): void }>();
  const editMode = ref(false);
  
  const form = ref({
    gender: 1,
    avatar: "",
    bio: "",
    occupation: "",
    company: "",
    nationality: "",
    marital_status: "SINGLE",
    join_date: "",
  });
  
  watch(
    () => props.user,
    (user) => {
      if (user?.profile) {
        form.value.gender = user.profile.gender || 1;
        form.value.avatar = user.profile.avatar || "";
        form.value.bio = user.profile.bio || "";
        form.value.occupation = user.profile.occupation || "";
        form.value.company = user.profile.company || "";
        form.value.nationality = user.profile.nationality || "";
        form.value.join_date = user.profile.join_date?.split("T")[0] || "";
        form.value.marital_status = user.profile.marital_status || "SINGLE";
      }
    },
    { immediate: true }
  );
  
  const handleSave = async () => {
    if (!props.user?.userId) return;
  
    const toast = Swal.mixin({
      toast: true,
      position: "top",
      showConfirmButton: false,
      timer: 3000,
      customClass: { container: "toast" },
    });
  
    try {
      await userStore.updateProfile(props.user.userId, {
        ...form.value,
      });
  
      toast.fire({ icon: "success", title: t("user.profileUpdated") });
      editMode.value = false;
      emit("updated");
    } catch (err: any) {
      toast.fire({
        icon: "error",
        title: err?.response?.data?.message || t("user.profileUpdateFailed"),
      });
    }
  };
  
  const handleCancel = () => {
    editMode.value = false;
    emit("cancel");
  };
  </script>
  