import { mapStateToProps } from '../../src/containers/NavBar';

describe("NavBar [Container]", () => {
    it("should return state on mapStateToProps", () => {
        const state = {
            navBar: {
                activeTab: "NOW_SHOWING"
            }
        };

        const props = mapStateToProps(state);

        expect(props.activeTab).toBe(state.navBar.activeTab)
    })
});