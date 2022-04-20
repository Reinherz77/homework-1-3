import SearchingPage from './SearchPage'
import { render, screen } from "@testing-library/react";
import configureStore from '../../redux/store'
import { Provider } from 'react-redux';

describe("Search", () => {
  test("MSW Spotify Search API", () => {
    render(
        <Provider store={configureStore}>
            <SearchingPage 
                uri={""}
                image={""}
                title={""}
                album={""}
                selectState={function () {
                    throw new Error("Function not implemented.")
                }}
                isSelected={false}
                />
        </Provider>
    );
    const checkData = screen.getByText("No Playlist");
    expect(checkData).toBeInTheDocument();
  });
});