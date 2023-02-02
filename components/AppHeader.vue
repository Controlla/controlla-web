<template>
  <section class="w-screen bg-white h-24 flex justify-start sticky">
    <img src="logocontrolla.svg" alt="logo controlla" class="w-[12rem] ml-6">
    <div class="hidden md:flex md:justify-end md:w-[100%]">
      <button @click="handleTabClick('HomeSectionOne')" class="mx-6"><span v-if="activeTabName!='HomeSectionOne'">Home</span><strong v-if="activeTabName=='HomeSectionOne'"></strong></button>
      <button @click="handleTabClick('UsSectionOne')" class="mx-6"><span v-if="activeTabName!='UsSectionOne'">Team</span><strong v-if="activeTabName=='UsSectionOne'">Team</strong></button>
      <button @click="handleTabClick('FriendshoreSectionOne')" class="mx-6"><span v-if="activeTabName!='FriendshoreSectionOne'">Friendshore</span><strong v-if="activeTabName=='FriendshoreSectionOne'">Friendshore</strong></button>
      <button class="bg-black text-white rounded-full px-7 h-[3rem] mt-[1.5rem] mx-6 font-semibold text-lg">Contact us</button>
    </div>
    <div class="md:hidden flex justify-end w-[100%]" @click="setMenu">
      <img src="headbutton.png" alt="hamburger" class="w-[2rem] h-[2rem] my-6 mx-6">
    </div>
  </section>
  <div v-if="isMenuVisible" class="w-[100%] h-[11rem] bg-white sticky right-0 pt-6 shadow-lg shadow-gray-300">
      <button @click="handleTabClick('HomeSectionOne')" class="mx-6 block"><span v-if="activeTabName!='HomeSectionOne'">Home</span><strong v-if="activeTabName=='HomeSectionOne'">Home</strong></button>
      <button @click="handleTabClick('UsSectionOne')" class="mx-6 block"><span v-if="activeTabName!='UsSectionOne'">Team</span><strong v-if="activeTabName=='UsSectionOne'">Team</strong></button>
      <button @click="handleTabClick('FriendshoreSectionOne')" class="mx-6 block"><span v-if="activeTabName!='FriendshoreSectionOne'">Friendshore</span><strong v-if="activeTabName=='FriendshoreSectionOne'">Friendshore</strong></button>
      <button class="bg-black text-white rounded-full px-5 h-[2rem] mt-[.5rem] mx-6 font-semibold text-xs block">Contact us</button>
  </div>
  <HomeSectionOne v-if="activeTabName == 'HomeSectionOne'"/>
  <UsSectionOne v-if="activeTabName == 'UsSectionOne'"/>
  <FriendshoreSectionOne v-if="activeTabName == 'FriendshoreSectionOne'"/>
</template>

<script>
const HomeSectionOne = () => import('@/components/home/SectionOne.vue')
const UsSectionOne = () => import('@/components/us/SectionOne.vue')
const FriendshoreSectionOne = () => import('@/components/friendshore/SectionOne.vue')
export default {
  components: {
    HomeSectionOne,
    UsSectionOne,
    FriendshoreSectionOne
  },
  data: () => ({
    activeTabName: 'HomeSectionOne',
    isMenuVisible: false,
  }),
  methods: {
    handleTabClick (tabName) {
      this.activeTabName = tabName
    },
    setMenu() {
      this.isMenuVisible = this.isMenuVisible ? false : true
    }
  },
};
</script>
