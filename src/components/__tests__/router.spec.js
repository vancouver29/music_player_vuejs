import { shallowMount, RouterLinkStub } from "@vue/test-utils";
import SongItem from "@/components/SongItem.vue";
import { expect } from "vitest";

describe("Router", () => {
  test("render router link", () => {
    const songRef = {
      docID: "abc",
    };

    const wrapper = shallowMount(SongItem, {
      propsData: { songRef },
      global: {
        components: {
          "router-link": RouterLinkStub,
        },
      },
    });

    expect(wrapper.findComponent(RouterLinkStub).props().to).toEqual({
      name: "song",
      params: { id: songRef.docID },
    });
  });
});
