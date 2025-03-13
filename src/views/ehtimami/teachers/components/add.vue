<template>
  <div>
    <div class="flex justify-between items-center mb-4">
      <BreadCrumb :items="breadcrumbItems" />
      <div class="flex">
        <button
          type="button"
          @click="cancelForm"
          class="btn btn-outline-primary"
        >
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

    <!-- Layout: Two-Column Form -->
    <form
      id="teacherForm"
      @submit.prevent="submitForm"
      class="flex flex-col lg:flex-row gap-6"
    >
      <!-- Column 1: Teacher Info -->
      <div class="xl:w-[30rem] w-full">
        <ActionCard :title="$t('teacher_form.basicInfo')">
          <div class="p-1">
            <div class="text-center m-2">
              <GenderSelection
                v-model="teacherStore.teacherData.profile.gender"
              />
            </div>

            <div class="text-center">
              <div
                v-tippy="$t('teacher_form.click_to_upload')"
                class="inline-table text-center"
              >
                <FileUploader
                  v-model="teacherStore.teacherData.profile.avatar"
                  :label="$t('teacher_form.profile_image')"
                  platform="user-profile"
                  @change="handleImageUpload"
                />
              </div>
            </div>

            <div class="mt-4 flex gap-4">
              <div class="w-1/2">
                <label for="firstName">{{
                  $t("teacher_form.first_name")
                }}</label>
                <input
                  id="firstName"
                  v-model="teacherStore.teacherData.firstName"
                  type="text"
                  class="form-input w-full"
                />
                <p v-if="errors.firstName" class="text-red-500">
                  {{ errors.firstName }}
                </p>
              </div>

              <div class="w-1/2">
                <label for="lastName">{{ $t("teacher_form.last_name") }}</label>
                <input
                  id="lastName"
                  v-model="teacherStore.teacherData.lastName"
                  type="text"
                  class="form-input w-full"
                />
                <p v-if="errors.lastName" class="text-red-500">
                  {{ errors.lastName }}
                </p>
              </div>
            </div>
            <div class="mt-4">
              <label for="password">{{ $t("teacher_form.password") }}</label>
              <input
                id="password"
                v-model="teacherStore.teacherData.password"
                type="password"
                class="form-input w-full"
              />
              <p v-if="errors.password" class="text-red-500">
                {{ errors.password }}
              </p>
            </div>
          </div>
        </ActionCard>
        <ActionCard :title="$t('teacher_form.contact_info')">
          <div class="mt-4">
            <label for="email">{{ $t("teacher_form.email") }}</label>
            <input
              id="email"
              v-model="teacherStore.teacherData.email"
              type="email"
              class="form-input w-full"
            />
            <p v-if="errors.email" class="text-red-500">{{ errors.email }}</p>
          </div>

          <div class="mt-4">
            <label for="reciever-number" class="ltr:mr-2 rtl:ml-2 w-1/3 mb-0"
              >Phone Number</label
            >
            <input
              id="reciever-number"
              type="text"
              name="reciever-number"
              class="form-input flex-1"
              v-model="teacherStore.teacherData.profile.phone_number"
              placeholder="Enter Phone number"
            />
          </div>
        </ActionCard>
        <div class="panel px-0 mt-4 flex-grow py-6 w-full lg:w-auto">
          <div
            class="text-lg font-medium bg-white-light/30 dark:bg-dark dark:bg-opacity-[0.08] p-5"
          >
            {{ $t("teacher_form.additional_info") }}
          </div>
          <div class="p-5">
            <div class="mt-4 flex gap-4">
              <div class="w-1/2">
                <label for="marital_status">{{
                  $t("teacher_form.marital_status")
                }}</label>
                <select
                  id="marital_status"
                  v-model="teacherStore.teacherData.profile.marital_status"
                  class="form-select w-full"
                >
                  <option value="SINGLE">
                    {{ $t("teacher_form.single") }}
                  </option>
                  <option value="MARRIED">
                    {{ $t("teacher_form.married") }}
                  </option>
                  <option value="DIVORCED">
                    {{ $t("teacher_form.divorced") }}
                  </option>
                </select>
              </div>

              <div class="w-1/2">
                <label for="nationality">{{
                  $t("teacher_form.nationality")
                }}</label>
                <input
                  id="nationality"
                  v-model="teacherStore.teacherData.profile.nationality"
                  type="text"
                  class="form-input w-full"
                />
              </div>
            </div>

            <div class="mt-4">
              <label for="birth_date">{{
                $t("teacher_form.birth_date")
              }}</label>
              <input
                id="birth_date"
                v-model="formattedBirthDate"
                type="date"
                class="form-input w-full"
                :max="maxBirthDate"
                :min="minBirthDate"
                @input="updateBirthDate"
              />
            </div>
          </div>
        </div>
      </div>

      <!-- Column 2: School Info -->

      <ActionCard :title="$t('teacher_form.career_details')">
        <div class="p-5">
          <!-- Occupation Dropdown -->
          <div class="mt-4">
            <label for="career_field">{{
              $t("teacher_form.career_field")
            }}</label>
            <input
              id="career_field"
              v-model="teacherStore.teacherData.profile.occupation"
              type="text"
              class="form-input w-full"
            />
          </div>

          <!-- Address & Map -->
          <div class="mt-4">
            <label for="address">{{ $t("teacher_form.address") }}</label>
            <input
              id="address"
              v-model="teacherStore.teacherData.profile.address"
              type="text"
              class="form-input w-full"
            />
            <div class="mt-2">
              <LocationMap v-model="teacherStore.teacherData.profile.address" />
            </div>
          </div>
        </div>
      </ActionCard>
    </form>
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
import moment from "moment";
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

// Get today's date in "YYYY-MM-DD" format
const maxBirthDate = computed(() => moment().format("YYYY-MM-DD"));

// Get minimum allowed date (18 years ago)
const minBirthDate = computed(() =>
  moment().subtract(18, "years").format("YYYY-MM-DD")
);
// Reactive variable for formatted birth date
const formattedBirthDate = ref(
  teacherStore.teacherData.profile.birth_date || ""
);

const displayBirthDate = computed(() => {
  return formattedBirthDate.value
    ? moment(formattedBirthDate.value).format("DD MMMM YYYY")
    : "";
});
// Function to update the date and format it
const updateBirthDate = (event: Event) => {
  const inputDate = (event.target as HTMLInputElement).value;
  teacherStore.teacherData.profile.birth_date = inputDate;

  if (inputDate) {
    formattedBirthDate.value = moment(inputDate).format("YYYY-MM-DD");
  }
};

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
  errors.value.schoolId = teacherStore.teacherData.schoolId
    ? ""
    : t("errors.required");
  errors.value.firstName = teacherStore.teacherData.firstName
    ? ""
    : t("errors.required");
  errors.value.lastName = teacherStore.teacherData.lastName
    ? ""
    : t("errors.required");
  errors.value.email = teacherStore.teacherData.email
    ? ""
    : t("errors.required");
  errors.value.password = teacherStore.teacherData.password
    ? ""
    : t("errors.required");

  return (
    !errors.value.schoolId &&
    !errors.value.firstName &&
    !errors.value.lastName &&
    !errors.value.email &&
    !errors.value.password
  );
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
    toast.fire({
      icon: "error",
      title: error?.response?.data?.message || t("teacher_form.errorMessage"),
    });
  } finally {
    isSubmitting.value = false;
  }
};

const cancelForm = () => {
  router.push("/ehtimami/teachers");
};
</script>
