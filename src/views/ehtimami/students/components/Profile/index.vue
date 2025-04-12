<template>
  <div class="h-fit">
    <div class="bg-black/60 z-[5] w-full h-full absolute rounded-md hidden"
         :class="isShowMenu && '!block xl:!hidden'"
         @click="isShowMenu = !isShowMenu"></div>

    <div class="flex justify-between items-center mb-4">
      <BreadCrumb :items="breadcrumbItems" />
      <button class="xl:hidden hover:text-primary" @click="isShowMenu = !isShowMenu">
        <icon-menu />
      </button>
    </div>

    <div class="flex gap-5 relative h-fit sm:min-h-0"
         :class="{ 'min-h-[999px]': isShowMenu }">
      <!-- Sidebar -->
      <div class="panel p-4 flex-none max-w-xs w-full absolute xl:relative z-10 space-y-4 hidden xl:block overflow-hidden h-fit"
           :class="isShowMenu && '!block !overflow-y-auto'">
        <Chip
          :content="selectedStudent?.is_verified ? t('user.verified') : t('user.unverified')"
          :textColor="selectedStudent?.is_verified ? '#00ab55' : '#e7515a'"
          :borderColor="selectedStudent?.is_verified ? '#00ab55' : '#e7515a'"
          :headerBackgroundColor="selectedStudent?.is_verified ? '#e6f9f0' : '#ffecec'"
          class="ltr:ml-auto rtl:mr-auto"
        />
        <UserProfileCard
          v-if="selectedStudent"
          :image="selectedStudent?.profile?.avatar"
          :name="selectedStudent?.firstName + ' ' + selectedStudent?.lastName"
          :gender="selectedStudent?.profile?.gender"
          :first-name="selectedStudent?.firstName"
          :last-name="selectedStudent?.lastName"
          :email="selectedStudent?.email"
          :phone="selectedStudent?.phone"
          :dob="selectedStudent?.profile?.birth_date"
          :address="selectedStudent?.profile?.address"
        />

        <perfect-scrollbar class="chat-users h-fit ltr:pr-3.5 rtl:pl-3.5 ltr:-mr-3.5 rtl:-ml-3.5">
          <div class="space-y-1">
            <button
              v-for="section in profileSections"
              :key="section.id"
              class="w-full flex justify-between items-center p-2 hover:bg-white-dark/10 rounded-md dark:hover:text-primary hover:text-primary dark:hover:bg-[#181F32] font-medium h-10"
              :class="{
                'bg-gray-100 dark:text-primary text-primary dark:bg-[#181F32]': activeSection === section.id,
              }"
              @click="selectSection(section.id)"
            >
              <div class="flex items-center">
                <component :is="section.icon" class="w-5 h-5 shrink-0" />
                <div class="ltr:ml-3 rtl:mr-3">{{ section.label }}</div>
              </div>
            </button>
          </div>
        </perfect-scrollbar>
      </div>

      <!-- Main content -->
      <div class="panel p-0 flex-1 h-fit">
        <div class="p-6">
          <ProfileDetails v-if="activeSection === 'overview'" :user="selectedStudent" />
          <!-- <AcademicInfo v-else-if="activeSection === 'academic'" :student="selectedStudent" />
          <Documents v-else-if="activeSection === 'documents'" :student="selectedStudent" />
          <Parents v-else-if="activeSection === 'parents'" :student="selectedStudent" />
          <ActivityLogs v-else-if="activeSection === 'activity'" :student="selectedStudent" /> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, computed, onBeforeMount } from "vue";
import { useRoute } from "vue-router";
import { useI18n } from "vue-i18n";
import { useStudentStore } from "@/stores/students";
import { useMeta } from "@/composables/use-meta";

import IconUser from "@/components/icon/icon-user.vue";
import IconSchool from "@/components/icon/icon-school.vue";
import IconFile from '@/components/icon/icon-file.vue';
import IconUsersGroup from '@/components/icon/icon-users-group.vue';
import IconListCheck from '@/components/icon/icon-list-check.vue';
import IconMenu from "@/components/icon/icon-menu.vue";
import IconHome from "@/components/icon/icon-home.vue";
import ProfileDetails from "@/views/ehtimami/students/components/Profile/ProfileDetails.vue";
// import AcademicInfo from "@/views/ehtimami/students/components/Profile/AcademicInfo.vue";
// import Documents from "@/views/ehtimami/students/components/Profile/Documents.vue";
// import Parents from "@/views/ehtimami/students/components/Profile/Parents.vue";
// import ActivityLogs from "@/views/ehtimami/students/components/Profile/ActivityLogs.vue";

const { t } = useI18n();
const route = useRoute();
const userStore = useStudentStore();
const selectedStudent = ref<any>(null);
const isShowMenu = ref(false);
const activeSection = ref("overview");

useMeta({ title: "Student Profile" });

const loadUserProfile = async () => {
  const studentId = Number(route.params.id);
  if (studentId) {
    selectedStudent.value = await userStore.fetchStudentById(studentId);
  }
};

onBeforeMount(() => {
  if (window.innerWidth < 1280) isShowMenu.value = true;
  loadUserProfile();
});

const profileSections = computed(() => [
  { id: "overview", label: t("student.overview"), icon: IconUser },
  { id: "academic", label: t("student.academic"), icon: IconSchool },
  { id: "documents", label: t("student.documents"), icon: IconFile },
  { id: "parents", label: t("student.parents"), icon: IconUsersGroup },
  { id: "activity", label: t("student.activity_logs"), icon: IconListCheck },
]);

const breadcrumbItems = computed(() => [
  { label: t("breadcrumb.home"), link: "/", icon: IconHome },
  { label: t("student.page_title"), link: "/ehtimami/students", icon: IconUser },
  { label: t("student.student_profile") },
]);

const selectSection = (id: string) => {
  activeSection.value = id;
};
</script>
