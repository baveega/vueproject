import { shallowMount } from "@vue/test-utils";
import SingleTimeTravel from "@/components/TimeTravel/SingleTimeTravel.vue";

describe("SingleTimeTravel.vue", () => {
  it("rendered as expexted when passed", () => {
    let action = {
      old: 1,
      new: 2,
      post: {
        userId: 1,
        id: 2,
        title: "Post 2",
        body:
          "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla",
      },
    };

    let index = 1;
    const wrapper = shallowMount(SingleTimeTravel, {
      props: { action, index },
    });
    expect(wrapper.text()).toMatch(
      "Post 2"
    );
  });
});
