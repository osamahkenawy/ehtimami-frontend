<template>
  <div class="h-fit">
    <div
      class="bg-black/60 z-[5] w-full h-full absolute rounded-md hidden"
      :class="isShowMenu && '!block xl:!hidden'"
      @click="isShowMenu = !isShowMenu"
    ></div>
    <div class="flex justify-between items-center mb-4">
      <BreadCrumb :items="breadcrumbItems" />
      <button
        class="xl:hidden hover:text-primary"
        @click="isShowMenu = !isShowMenu">
        <icon-menu />
      </button>
    </div>
    <div
      class="flex gap-5 relative h-fit sm:min-h-0 "
      :class="{ 'min-h-[999px]': isShowMenu }"
    >
      <div
        class="panel p-4 flex-none max-w-xs w-full absolute xl:relative z-10 space-y-4  hidden xl:block overflow-hidden h-fit"
        :class="isShowMenu && '!block !overflow-y-auto'">
        <div class="flex items-center" v-if="selectedUser">
          <UserProfileCard
                  :image="selectedUser?.profile?.avatar"
                  :name="selectedUser?.firstName + ' ' + selectedUser?.lastName"
                  :gender="selectedUser?.profile?.gender"
                  :first-name="selectedUser?.firstName"
                  :last-name="selectedUser?.lastName"
                  :email="selectedUser?.email"
                  :phone="selectedUser?.phone"
                  :dob="selectedUser?.profile?.birth_date"
                  :address="selectedUser?.profile?.address"
              />
          </div>
        <div class="h-px w-full dark:border-[#1b2e4b]"></div>
        <div class="!mt-0">
          <perfect-scrollbar
            :options="{
              swipeEasing: true,
              wheelPropagation: false,
            }"
            class="chat-users relative space-y-0.5 ltr:pr-3.5 rtl:pl-3.5 ltr:-mr-3.5 rtl:-ml-3.5 h-fit"
          >
            <div class="space-y-1">
              <button
                v-for="section in profileSections"
                :key="section.id"
                type="button"
                class="w-full flex justify-between items-center p-2 hover:bg-white-dark/10 rounded-md dark:hover:text-primary hover:text-primary dark:hover:bg-[#181F32] font-medium h-10"
                :class="{
                  'bg-gray-100 dark:text-primary text-primary dark:bg-[#181F32]':
                    activeSection === section.id,
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
      </div>
      <div
        class="bg-black/60 z-[5] w-full h-fit absolute rounded-md hidden"
        :class="isShowMenu && '!block xl:!hidden'"
        @click="isShowMenu = !isShowMenu"
      ></div>
      <div class="panel p-0 flex-1 h-fit">
        <template v-if="activeSection === 'user-info'">
          <div class="p-6">
            <ProfileDetails :user="selectedUser" @cancel="loadUserProfile"  @updated="loadUserProfile" />
          </div>
        </template>
        <template v-else-if="activeSection === 'other-info'">
          <div class="p-6">Other Information goes here</div>
        </template>
        <template v-else-if="activeSection === 'school-info'"> 
          <div class="p-6">School Information goes here</div>
        </template>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { ref, computed, onMounted, onBeforeMount } from "vue";
import { useRoute } from "vue-router";

import { useI18n } from "vue-i18n";
import { useUserStore } from "@/stores/users";
import { useMeta } from "@/composables/use-meta";
import ProfileDetails from "@/views/ehtimami/users/components/Profile/ProfileDetails.vue";
import IconUser from "@/components/icon/icon-user.vue";
import IconSchool from "@/components/icon/icon-school.vue";
import IconOtherInfo from "@/components/icon/icon-other-info.vue";
import IconHome from "@/components/icon/icon-home.vue";
import IconMenu from "@/components/icon/icon-menu.vue";

const { t } = useI18n();
const route = useRoute();

useMeta({ title: "UserProfile" });
const userStore = useUserStore();
const selectedUser: any = ref(null);

const loadUserProfile = async () => {
  const userId = Number(route.params.id);
  if (!userId) return;

  try {
    selectedUser.value = await userStore.fetchUserById(userId);
  } catch (err) {
    console.error("Failed to fetch user profile:", err);
  }
};

onBeforeMount(() => {
  if (window.innerWidth < 1280) {
    isShowMenu.value = true;
  }

  loadUserProfile();
});


const isShowMenu = ref(false);


const breadcrumbItems = computed(() => [
  { label: t("breadcrumb.home"), link: "/", icon: IconHome },
  { label: t("user.page_title"), link: "/ehtimami/user", icon: IconUser },
  { label: t("user-profile") },
]);

const activeSection = ref("user-info");

const profileSections = computed(() => [
  { id: "user-info", label: "Profile Details", icon: IconUser },
  { id: "other-info", label: "Additional Details", icon: IconOtherInfo },
  { id: "school-info", label: "Assigned School", icon: IconSchool },
]);

const selectSection = (sectionId: string) => {
  activeSection.value = sectionId;
};


</script>
