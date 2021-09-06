import { shallowMount } from "@vue/test-utils";
import SortablePostList from "@/components/SortablePostList/SinglePost.vue";

describe("SortablePostList.vue", () => {
  it("rendered as expexted when passed", () => {
    const post = {
      id: 1,
      title:
        "Post 1",
      body:
        "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
    };
    let length = 5;
    let arrIndex = 1;
    const wrapper = shallowMount(SortablePostList, {
      props: { post, length, arrIndex },
    });
    expect(wrapper.text()).toMatch(
      "Post 1"
    );
  });
});
