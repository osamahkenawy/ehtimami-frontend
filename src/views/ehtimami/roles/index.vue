<template>
  <div>
    <!-- Breadcrumb for the Users Page -->
    <div class="flex justify-between items-center mb-4">
      <BreadCrumb :items="breadcrumbItems" />
      <AddButton @click="handleAddNewRole" :label="t('add_role')" />
    </div>
    <!-- Users Data Table -->
    <Datatable
      :headers="headers" 
      :data="roles" 
      :searchPlaceHolder="t('roles.search_placeholder')"
      :searchFilter="true"
      :noDataContent="t('roles.no_data')"
    >
      <!-- Action Slot for Each Row -->
      <template #action="{ data }"> 
        <PopperActions
          :actions="getActions(data)"
          :onActionSelected="handleActionSelected(data)"
        />
      </template>
    </Datatable>
    <TransitionRoot appear :show="isAddRole" as="template">
  <Dialog as="div" @close="isAddRole = false" class="relative z-[51]">
    <TransitionChild
      as="template"
      enter="duration-300 ease-out"
      enter-from="opacity-0"
      enter-to="opacity-100"
      leave="duration-200 ease-in"
      leave-from="opacity-100"
      leave-to="opacity-0"
    >
      <DialogOverlay class="fixed inset-0 bg-[black]/60" />
    </TransitionChild>

    <div class="fixed inset-0 overflow-y-auto">
      <div class="flex min-h-full items-start justify-center px-4 py-8">
        <TransitionChild
          as="template"
          enter="duration-300 ease-out"
          enter-from="opacity-0 scale-95"
          enter-to="opacity-100 scale-100"
          leave="duration-200 ease-in"
          leave-from="opacity-100 scale-100"
          leave-to="opacity-0 scale-95"
        >
          <DialogPanel class="panel border-0 p-0 rounded-lg overflow-hidden w-full max-w-lg text-black dark:text-white-dark">
            <button
              type="button"
              class="absolute top-4 ltr:right-4 rtl:left-4 text-gray-400 hover:text-gray-800 dark:hover:text-gray-600 outline-none"
              @click="isAddRole = false"
            >
              <icon-x />
            </button>
            <div class="text-lg font-medium bg-[#fbfbfb] dark:bg-[#121c2c] ltr:pl-5 rtl:pr-5 py-3 ltr:pr-[50px] rtl:pl-[50px]">
              {{ params.id ? t('roles.edit') : t('add_role') }}
            </div>
            <div class="p-5">
              <form @submit.prevent="saveRole">
                <div class="mb-5">
                  <label for="title">{{ t('roles.name') }}</label>
                  <input
                    id="title"
                    type="text"
                    :placeholder="t('roles.name')"
                    class="form-input"
                    v-model="params.title"
                  />
                </div>

                <div class="flex justify-end items-center mt-8">
                  <button
                    type="button"
                    class="btn btn-outline-danger gap-2"
                    @click="isAddRole = false"
                  >
                    {{ t('roles.cancel_button') }}
                  </button>
                  <button type="submit" class="btn btn-primary ltr:ml-4 rtl:mr-4">
                    {{ params.id ? t('roles.edit') : t('add_role') }}
                  </button>
                </div>
              </form>
            </div>
          </DialogPanel>
        </TransitionChild>
      </div>
    </div>
  </Dialog>
</TransitionRoot>

  </div>
</template>

<script lang="ts" setup>
import { useMeta } from "@/composables/use-meta";
import { onMounted, computed, watchEffect } from "vue";
import IconHome from "@/components/icon/icon-home.vue";
import { useI18n } from "vue-i18n";
import Swal from "sweetalert2";
import { useRoleStore } from "@/stores/roles";
import { useRouter } from "vue-router";
import { TransitionRoot, TransitionChild, Dialog, DialogPanel, DialogOverlay } from '@headlessui/vue';
import { ref } from "vue";

const router = useRouter();
const { t } = useI18n();
const rolesStore = useRoleStore();
const isAddRole = ref(false);
const params = ref({ id: null, title: "" });

onMounted(() => {
  rolesStore.fetchRoles();
});

watchEffect(() => {
  useMeta({ title: t("roles.page_title") });
});

const roles = computed(() => rolesStore.roles);

const breadcrumbItems = computed(() => [
  { label: t("breadcrumb.home"), link: "/", icon: IconHome },
  { label: t("roles.page_title") },
]);

const headers = computed(() => [
  { field: "roleId", title: t("roles.id"), isUnique: true },
  { field: "role_name", title: t("roles.name") },
  { field: "role_users_count", title: t("roles.users_count") },
  { field: "role_is_verified", title: t("roles.is_verified"), sort: false },
  { field: "action", title: t("roles.action"), sort: false },
]);

const getActions = (user) => {
  const baseActions = [
  { label: t("roles.delete"), value: "delete" },
  ];

  return [baseActions[0]];
};

const handleActionSelected = (user) => async (action: string) => {
  const isVerifyAction = action === "verify" || action === "unverify";

  if (isVerifyAction) {
    const willVerify = action === "verify";
    const confirmKey = willVerify
      ? "roles.verify_confirm_text"
      : "roles.unverify_confirm_text";
    const successKey = willVerify
      ? "roles.verify_success_text"
      : "roles.unverify_success_text";

    const result = await Swal.fire({
      icon: "warning",
      title: t("roles.verify_confirm_title"),
      text: t(confirmKey),
      showCancelButton: true,
      confirmButtonText: t("roles.confirm_button"),
      cancelButtonText: t("roles.cancel_button"),
      padding: "2em",
      customClass: {
        popup: "sweet-alerts",
        confirmButton: "btn btn-primary",
        cancelButton: "btn btn-outline-secondary",
      },
    });
    return;
  }

  switch (action) {
    case "view-details":
      router.push({ path: `/ehtimami/user/profile/${user.userId}` });
      break;
      case "delete":
        const confirm = await Swal.fire({
          icon: "warning",
          title: t("roles.verify_confirm_title"),
          text: t("Are you sure you want to delete this role?"),
          showCancelButton: true,
          confirmButtonText: t("roles.confirm_button"),
          cancelButtonText: t("roles.cancel_button"),
          customClass: {
            popup: "sweet-alerts",
            confirmButton: "btn btn-danger",
            cancelButton: "btn btn-outline-secondary",
          },
        });

        if (confirm.isConfirmed) {
          try {
            await rolesStore.deleteRoleById(user.id);
            await rolesStore.fetchRoles(); // Refresh list after creation

            await Swal.fire({
              icon: "success",
              title: t("roles.verify_success_title"),
              text: "Role has been deleted successfully.",
            });
          } catch (err) {
            await Swal.fire({
              icon: "error",
              title: t("roles.verify_error_title"),
              text: t("roles.verify_error_text"),
            });
          }
        }
        break;
  }
};

const handleAddNewRole = () => {
  params.value = { id: null, title: "" }; // reset form
  isAddRole.value = true;
};
const saveRole = async () => {
  if (!params.value.title) return;

  try {
    rolesStore.roleName = params.value.title;

    if (params.value.id) {
      // Placeholder for update logic
      console.log("Updating role:", params.value);
    } else {
      await rolesStore.createRole();
      await rolesStore.fetchRoles(); // Refresh list after creation
    }

    isAddRole.value = false;
  } catch (err) {
    console.error("Save role error:", err);
  }
};

</script>
