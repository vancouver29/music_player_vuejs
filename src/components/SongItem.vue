<template>
  <li
    class="flex justify-between items-center p-3 pl-6 cursor-pointer transition duration-300 hover:bg-gray-50 example"
    :class="`song-id-${songRef.docID}`"
  >
    <div>
      <router-link
        :to="{ name: 'song', params: { id: songRef.docID } }"
        class="font-bold block text-gray-600 composition-name"
        >{{ songRef.modified_name }}</router-link
      >
      <span class="text-gray-500 text-sm">{{ songRef.display_name }}</span>
    </div>

    <div class="text-gray-600 text-lg">
      <router-link
        custom
        :to="{ name: 'song', params: { id: songRef.docID }, hash: '#comments' }"
        v-slot="{ navigate }"
      >
        <span class="comments" @click="navigate">
          <i class="fa fa-comments text-gray-600"></i>
          {{ songRef.comment_count }}
        </span>
      </router-link>
    </div>
  </li>
</template>
<script>
export default {
  name: "SongItem",
  props: ["songRef"],
};
</script>
