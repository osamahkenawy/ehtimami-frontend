export default {
    data () {
      const rowActions = [
        {
          title: "View Details",
          icon: "profile",
          callback: this.actionDetail,
          action: "profile",
        },
      ]
      const fields = [
        // { key: "id", label: this.$t("id"), sortable: true },
        {
            key: "unique_id",
            label: 'ID',
            sortable: true,
          },
        {
          key: "timestamp",
          label: this.$t("activities.Timestamp"),
          sortable: true,
        },
        {
          key: "status",
          label: this.$t("status"),
          sortable: true,
        },
        {
          key: "vehicle",
          label: this.$t("activities.Vehicle"),
          sortable: true,
        },
         {
            key: "route_stop_distance",
            label: 'P.U / D.O',
            sortable: true,
          },
        // {
        //   key: "plate_number",
        //   label: this.$t('activities.Plate_number'),
        //   sortable: false,
        // },
        // {
        //   key: "route_stop_distance",
        //   label: this.$t("activities.Route_stop_distance"),
        //   sortable: false,
        // },
        {
          key: "actions",
          label: this.$i18n.t("action"),
          tdClass: "text-center",
          sortable: false,
          class: "text-center",
        },
      ]
      const custom_range_options = {
        timePicker: false,
        startDate: new Date(),
        endDate: new Date(),
      }
      return {
        rowActions,
        fields,
        filterOn: [],
        custom_range_options,
        currentPage: 1,
        custom_range: [ '01/09/2018', '01/10/2018', false ],
        perPage: 10,
        sortBy: null,
        filter: '',
        toDateFilter: '',
        fromDateFilter: '',
        sortDesc: true,
        sortDirection: 'desc',
      }
    },
    methods: {
      getType (type) {
        // const arr = [ 'School', 'Student', 'Guardians', 'Passengers', 'Business Clients', 'Trips' ]
        const arr = [ 'Business', 'School' ]
        return arr[type - 1]
      },
      actionDetail (item) {
        if (this.actionClose && typeof this.actionClose === 'function') this.actionClose() // hide overlay
        this.$router.push({ name: 'manage-activities', params: { id: item.id } })
      },
    },
  }
  