import SongItem from "@/components/SongItem.vue";
import { shallowMount, RouterLinkStub } from "@vue/test-utils";

describe("SongItem.vue", () => {
  test("render song.display_name", () => {
    const songRef = {
      display_name: "test",
    };

    const wrapper = shallowMount(SongItem, {
      propsData: {
        songRef,
      },
      global: {
        components: {
          "router-link": RouterLinkStub,
        },
      },
    });

    const compositionAuthor = wrapper.find(".text-gray-500");

    expect(compositionAuthor.text()).toBe(songRef.display_name);
  });

  test("renders songRef.docID in id attribute", () => {
    const songRef = {
      docID: "abc",
    };

    const wrapper = shallowMount(SongItem, {
      propsData: {
        songRef,
      },

      global: {
        components: {
          "router-link": RouterLinkStub,
        },
      },
    });

    // expect(wrapper.attributes().id).toBe(`song-id-${songRef.docID}`);
    expect(wrapper.classes()).toContain(`song-id-${songRef.docID}`);
  });
});
