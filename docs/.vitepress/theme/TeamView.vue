<script setup>
import {
  VPTeamMembers,
  VPTeamPage,
  VPTeamPageTitle,
} from 'vitepress/theme'
const members = [
  {
    avatar: 'https://www.github.com/antfu.png',
    name: 'Anthony Fu',
    title: '讲师',
    desc: '介绍',
    links: [
      { icon: 'github', link: 'https://github.com/antfu' },
      { icon: 'twitter', link: 'https://twitter.com/antfu7' },
    ],
  },
  {
    avatar: 'https://www.github.com/shengxinjing.png',
    name: '大圣',
    title: '讲师',
    desc: '介绍',
    org: '花果山',
    orgLink: 'https://space.bilibili.com/26995758',
    links: [
      { icon: 'github', link: 'https://github.com/shengxinjing' },
      // { icon: 'twitter', link: 'https://twitter.com/shengxj1' },
      { icon: 'twitter', link: 'https://space.bilibili.com/26995758' },
    ],
  },
]
</script>

<template>
  <VPTeamPage>
    <VPTeamPageTitle>
      <template #title>
        讲师团队
      </template>
    </VPTeamPageTitle>
    <VPTeamMembers
      :members="members"
    />
  </VPTeamPage>
</template>
