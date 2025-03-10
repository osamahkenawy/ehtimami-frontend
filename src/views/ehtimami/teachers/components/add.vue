<template>
  <div>
    <div class="flex justify-between items-center mb-4">
      <BreadCrumb :items="breadcrumbItems" />
      <div class="flex">
        <button type="button" @click="cancelForm" class="btn btn-outline-primary">
          {{ $t("cancel") }}
        </button>
        <button
          type="submit"
          form="teacherForm"
          class="btn btn-primary ltr:ml-2 rtl:mr-2"
          :disabled="isSubmitting"
        >
          {{ isSubmitting ? $t("loading") : $t("submit") }}
        </button>
      </div>
    </div>

    <div class="flex flex-col lg:flex-row gap-6">
      <div class="xl:w-[30rem] w-full">
        <form id="teacherForm" @submit.prevent="submitForm" class="w-full xl:mt-0 mt-6">
          <ActionCard :title="$t('teacher_form.teacherInfo')">
            <div class="p-1">
              <div class="text-center m-2">
                <GenderSelection v-model="teacherStore.teacherData.profile.gender " />
              </div>

              <div class="text-center">
                <div v-tippy="$t('teacher_form.click_to_upload')" class="inline-table text-center">
                  <FileUploader v-model="teacherStore.teacherData.profile.avatar" :label="$t('teacher_form.profile_image')" platform="user-profile" @change="handleImageUpload" />
                </div>
              </div>

              <div class="mt-4">
                <label for="schoolId">{{ $t("teacher_form.school_name") }}</label>
                <select id="schoolId" v-model="teacherStore.teacherData.schoolId" class="form-select">
                  <option v-for="option in teacherStore.schools" :key="option.id" :value="option.id">
                    {{ option.school_name }}
                  </option>
                </select>
                <p v-if="errors.schoolId" class="text-red-500">{{ errors.schoolId }}</p>
              </div>

              <div class="mt-4">
                <label for="firstName">{{ $t("teacher_form.first_name") }}</label>
                <input id="firstName" v-model="teacherStore.teacherData.firstName" type="text" class="form-input" />
                <p v-if="errors.firstName" class="text-red-500">{{ errors.firstName }}</p>
              </div>

              <div class="mt-4">
                <label for="lastName">{{ $t("teacher_form.last_name") }}</label>
                <input id="lastName" v-model="teacherStore.teacherData.lastName" type="text" class="form-input" />
                <p v-if="errors.lastName" class="text-red-500">{{ errors.lastName }}</p>
              </div>

              <div class="mt-4">
                <label for="email">{{ $t("teacher_form.email") }}</label>
                <input id="email" v-model="teacherStore.teacherData.email" type="email" class="form-input" />
                <p v-if="errors.email" class="text-red-500">{{ errors.email }}</p>
              </div>

              <div class="mt-4">
                <label for="password">{{ $t("teacher_form.password") }}</label>
                <input id="password" v-model="teacherStore.teacherData.password" type="password" class="form-input" />
                <p v-if="errors.password" class="text-red-500">{{ errors.password }}</p>
              </div>
            </div>
          </ActionCard>
          
          <div class="panel px-0 mt-4 flex-grow py-6 w-full lg:w-auto">
            <div class="text-lg font-medium bg-white-light/30 dark:bg-dark dark:bg-opacity-[0.08] p-5">
              {{ $t("teacher_form.additional_info") }}
            </div>
            <div class="p-5">
              <div class="mt-4">
                <label for="marital_status">{{ $t("teacher_form.marital_status") }}</label>
                <select id="marital_status" v-model="teacherStore.teacherData.profile.marital_status" class="form-select">
                  <option value="SINGLE">{{ $t("teacher_form.single") }}</option>
                  <option value="MARRIED">{{ $t("teacher_form.married") }}</option>
                  <option value="DIVORCED">{{ $t("teacher_form.divorced") }}</option>
                </select>
              </div>

              <div class="mt-4">
                <label for="nationality">{{ $t("teacher_form.nationality") }}</label>
                <input id="nationality" v-model="teacherStore.teacherData.profile.nationality" type="text" class="form-input" />
              </div>

              <div class="mt-4">
                <label for="birth_date">{{ $t("teacher_form.birth_date") }}</label>
                <input id="birth_date" v-model="teacherStore.teacherData.profile.birth_date" type="date" class="form-input" />
              </div>

              <div class="mt-4">
                <label for="address">{{ $t("teacher_form.address") }}</label>
                <input id="address" v-model="teacherStore.teacherData.profile.address" type="text" class="form-input" />
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useMeta } from "@/composables/use-meta";
import Swal from "sweetalert2";
import { ref, computed, onBeforeMount } from "vue";
import { useI18n } from "vue-i18n";
import IconHome from "@/components/icon/icon-home.vue";
import { useTeacherStore } from "@/stores/teacher";
import { useRouter } from "vue-router";
import GenderSelection from "@/components/ui/GenderSelection.vue";

useMeta({ title: "Add Teacher" });

const { t } = useI18n();
const teacherStore = useTeacherStore();
const isSubmitting = ref(false);
const router = useRouter();

const breadcrumbItems = computed(() => [
  { label: t("breadcrumb.home"), link: "/", icon: IconHome },
  { label: t("teachers"), link: "/ehtimami/teachers" },
  { label: t("add-teacher") },
]);

const errors = ref({
  schoolId: "",
  firstName: "",
  lastName: "",
  email: "",
  password: "",
});

onBeforeMount(() => {
  teacherStore.fetchSchools();
});

const handleImageUpload = (data: { s3: string; base64: string }) => {
  teacherStore.teacherData.profile.avatar = data.s3;
};

const validateForm = () => {
  errors.value.schoolId = teacherStore.teacherData.schoolId ? "" : t("errors.required");
  errors.value.firstName = teacherStore.teacherData.firstName ? "" : t("errors.required");
  errors.value.lastName = teacherStore.teacherData.lastName ? "" : t("errors.required");
  errors.value.email = teacherStore.teacherData.email ? "" : t("errors.required");
  errors.value.password = teacherStore.teacherData.password ? "" : t("errors.required");

  return !errors.value.schoolId && !errors.value.firstName && !errors.value.lastName && !errors.value.email && !errors.value.password;
};

const submitForm = async () => {
  if (!validateForm()) return;

  isSubmitting.value = true;
  const toast: any = Swal.mixin({
    toast: true,
    position: "top",
    showConfirmButton: false,
    timer: 3000,
    customClass: { container: "toast" },
  });

  try {
    await teacherStore.createNewTeacher();
    toast.fire({ icon: "success", title: t("teacher_form.successMessage") });
    router.push("/ehtimami/teachers");
  } catch (error: any) {
    toast.fire({ icon: "error", title: error?.response?.data?.message || t("teacher_form.errorMessage") });
  } finally {
    isSubmitting.value = false;
  }
};

const cancelForm = () => {
  router.push("/ehtimami/teachers");
};
</script>
