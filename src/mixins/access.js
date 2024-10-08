import { mapGetters, mapActions } from "vuex";
import { getItem, getPortal } from "@/plugins/Auth.js";

export default {
  data () {
    return {
      permission_list: '',
      module_name: '',
      ...mapActions({
        fetchUserAccessPermission: "manageDriver/fetchUserAccessPermission",
        fetchAuthUserAccessPermission: "auth/getUserAccess"
      }),
      userPortal: getPortal(),
      userAccess: localStorage.getItem("innov-"+getPortal()).userInfo?.accesses

    }
  },
  computed: {
    ...mapGetters({
        userInfo: "manageDriver/getLoggedInUserInfo",
    }),
},
  methods: {
    async fetchUserAccess (initializer) {
      return new Promise((resolve, reject) => {
        initializer()
          .then(pem => pem && pem.length ? Promise.resolve(pem) : Promise.reject(null))
          .then(JSON.parse)
          .then(pem => {
            const filtered = pem.filter(item => item.module.toLowerCase() == this.module_name.toLowerCase()).pop()
            this.permission_list = (filtered && filtered.feature) || ''
            resolve(this.permission_list)
          })
          .catch(reject)
      })
    },
    checkUserAccess (permission) {
      return this.permission_list && permission && this.permission_list.toLowerCase().indexOf(permission.toLowerCase()) !== -1
    },
    async fetchUserAccessForModule (module) {
      let userAccessPermission = null;
      if (localStorage.getItem("innov-"+getPortal()).userInfo?.accesses.length > 0) {
        userAccessPermission = localStorage.getItem("innov-"+getPortal()).userInfo?.accesses;
      } else {
        // TODO: osama we it is still calling this api
        userAccessPermission = await this.fetchUserAccessPermission(this.userInfo?.id || localStorage.getItem("innov-"+getPortal())?.userInfo?.id);
      }
      if (userAccessPermission && userAccessPermission.length > 0) {
        userAccessPermission = JSON.parse(userAccessPermission);
        userAccessPermission.forEach((item) => {
          if (item.code.toLowerCase() == module.toLowerCase()) {
            this.permission_list = item.feature;
          }
        });
      }

      return this.permission_list;
    },
    async fetchUserModuleAccess (module) {
      let userAccessPermission = null;
      if (localStorage.getItem("innov-"+getPortal()).userInfo?.accesses.length > 0) {
        userAccessPermission = localStorage.getItem("innov-"+getPortal()).userInfo?.accesses;
      } else {
        userAccessPermission = await this.fetchAuthUserAccessPermission(this.userPortal);
      }
      if (userAccessPermission && userAccessPermission.length > 0) {
        userAccessPermission = JSON.parse(userAccessPermission);
        userAccessPermission.forEach((item) => {
          if (item.code.toLowerCase() == module.toLowerCase()) {
            this.permission_list = typeof item.feature == 'string' ? JSON.parse(item.feature) : item.feature;
          }
        });
      }

      return this.permission_list;
    }
  },
}