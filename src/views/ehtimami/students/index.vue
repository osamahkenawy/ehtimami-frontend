<template>
  <div>
    <!-- Breadcrumb for the Users Page -->
    <BreadCrumb :items="breadcrumbItems" />

    <!-- Users Data Table -->
    <Datatable
      :headers="headers"
      :data="users"
      :searchPlaceHolder="t('user.search_placeholder')"
      :searchFilter="true"
      :noDataContent="t('user.no_data')"
    >
      <!-- Action Slot for Each Row -->
      <template #action="{ data }"> 
        <PopperActions
          :actions="getActions(data)"
          :onActionSelected="handleActionSelected(data)"
        />
      </template>
    </Datatable>
  </div>
</template>

<script lang="ts" setup>
import { useMeta } from "@/composables/use-meta";
import { onMounted, computed, watchEffect } from "vue";
import IconHome from "@/components/icon/icon-home.vue";
import { useI18n } from "vue-i18n";
import Swal from "sweetalert2";
import { useUserStore } from "@/stores/users";
import { useRouter } from "vue-router";

const router = useRouter();
const { t } = useI18n();
const userStore = useUserStore();

onMounted(() => {
  userStore.fetchUsers();
});

watchEffect(() => {
  useMeta({ title: t("user.page_title") });
});

const users = computed(() => userStore.users);

const breadcrumbItems = computed(() => [
  { label: t("breadcrumb.home"), link: "/", icon: IconHome },
  { label: t("user.page_title") },
]);

const headers = computed(() => [
  { field: "userId", title: t("user.id"), isUnique: true },
  { field: "name", title: t("user.name") },
  { field: "nationality", title: t("user.nationality") },
  { field: "roles", title: t("user.roles") },
  { field: "is_verified", title: t("user.is_verified"), sort: false },
  { field: "action", title: t("user.action"), sort: false },
]);

const getActions = (user) => {
  const baseActions = [
  { label: t("user.view_details"), value: "view-details" },
  { label: t("user.delete"), value: "delete" },
  ];

  const verifyAction = user.is_verified
    ? { label: t("user.unverify"), value: "unverify" }
    : { label: t("user.verify"), value: "verify" };

  return [baseActions[0], verifyAction, baseActions[1]];
};

const handleActionSelected = (user) => async (action: string) => {
  const isVerifyAction = action === "verify" || action === "unverify";

  if (isVerifyAction) {
    const willVerify = action === "verify";
    const confirmKey = willVerify
      ? "user.verify_confirm_text"
      : "user.unverify_confirm_text";
    const successKey = willVerify
      ? "user.verify_success_text"
      : "user.unverify_success_text";

    const result = await Swal.fire({
      icon: "warning",
      title: t("user.verify_confirm_title"),
      text: t(confirmKey),
      showCancelButton: true,
      confirmButtonText: t("user.confirm_button"),
      cancelButtonText: t("user.cancel_button"),
      padding: "2em",
      customClass: {
        popup: "sweet-alerts",
        confirmButton: "btn btn-primary",
        cancelButton: "btn btn-outline-secondary",
      },
    });

    if (result.isConfirmed) {
      try {
        await userStore.verifyUser(user.userId, willVerify);
        await userStore.fetchUsers();

        await Swal.fire({
          title: t("user.verify_success_title"),
          text: t(successKey),
          icon: "success",
          customClass: {
            popup: "sweet-alerts",
            confirmButton: "btn btn-success",
          },
        });
      } catch (error) {
        console.error("Verification failed:", error);
        await Swal.fire({
          title: t("user.verify_error_title"),
          text: t("user.verify_error_text"),
          icon: "error",
          customClass: {
            popup: "sweet-alerts",
            confirmButton: "btn btn-danger",
          },
        });
      }
    }
    return;
  }

  switch (action) {
    case "view-details":
      router.push({ path: `/ehtimami/user/profile/${user.userId}` });
      break;
    case "delete":
      console.log("TODO: delete user logic here for", user);
      break;
  }
};
</script>
